import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const wordpressUrl = String(process.env.NUXT_PUBLIC_WORDPRESS_URL || '').trim().replace(/\/$/, '')
const routes = []

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { accept: 'application/json' },
    signal: AbortSignal.timeout(12000)
  })

  if (!response.ok) {
    throw new Error(`WordPress API error ${response.status}: ${url}`)
  }

  return {
    data: await response.json(),
    totalPages: Number(response.headers.get('X-WP-TotalPages') || 1)
  }
}

async function fetchAllPosts(apiUrl) {
  const allPosts = []
  let page = 1
  let totalPages = 1

  do {
    const url = new URL(`${apiUrl}/posts`)
    url.searchParams.set('status', 'publish')
    url.searchParams.set('per_page', '100')
    url.searchParams.set('page', String(page))
    url.searchParams.set('_fields', 'slug,categories')

    const result = await fetchJson(url)
    if (!Array.isArray(result.data)) {
      throw new Error('La réponse WordPress des articles est invalide.')
    }

    allPosts.push(...result.data)
    totalPages = result.totalPages
    page += 1
  } while (page <= totalPages)

  return allPosts
}

// WordPress enrichit le pré-rendu, mais ne doit jamais empêcher la livraison du site.
if (wordpressUrl) {
  try {
    const apiUrl = `${wordpressUrl}/wp-json/wp/v2`
    const categoriesUrl = new URL(`${apiUrl}/categories`)
    categoriesUrl.searchParams.set('per_page', '100')
    categoriesUrl.searchParams.set('hide_empty', 'false')

    const categoriesResult = await fetchJson(categoriesUrl)
    const categories = Array.isArray(categoriesResult.data) ? categoriesResult.data : []
    const eventCategory = categories.find(category => {
      const normalizedName = String(category.name || '')
        .toLocaleLowerCase('fr')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
      return ['evenements', 'evenement'].includes(category.slug) || normalizedName === 'evenements'
    })

    const posts = await fetchAllPosts(apiUrl)
    for (const post of posts) {
      if (!post.slug) continue
      routes.push(`/publications/${encodeURIComponent(post.slug)}`)

      if (eventCategory && Array.isArray(post.categories) && post.categories.includes(eventCategory.id)) {
        routes.push(`/evenements/${encodeURIComponent(post.slug)}`)
      }
    }

    console.info(`SSG : ${posts.length} article(s) WordPress analysé(s), ${routes.length} route(s) éditoriale(s) ajoutée(s).`)
  } catch (error) {
    console.warn('SSG : WordPress indisponible ou API invalide. Poursuite du build sans routes éditoriales distantes.')
    console.warn(error instanceof Error ? error.message : error)
  }
} else {
  console.info('SSG : aucune URL WordPress configurée. Génération sans contenus éditoriaux distants.')
}

const nuxtCli = fileURLToPath(new URL('../node_modules/nuxt/bin/nuxt.mjs', import.meta.url))
const result = spawnSync(process.execPath, [nuxtCli, 'generate'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NUXT_PRERENDER_ROUTES: JSON.stringify(routes)
  }
})

if (result.error) throw result.error
process.exit(result.status ?? 1)
