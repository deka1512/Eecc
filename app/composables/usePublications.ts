import { getCategories } from '~/services/wordpress/categories'
import { getPublications } from '~/services/wordpress/publications'
import { demoPublicationCategories, demoPublications } from '~/data/demo-content'

export function usePublications() {
  const config = useRuntimeConfig()
  const demoResult = () => ({
    items: demoPublications,
    categories: demoPublicationCategories,
    state: 'demo' as const
  })

  return useAsyncData('wordpress-publications', async () => {
    if (!String(config.public.wordpressUrl || '').trim()) return demoResult()

    try {
      const items = await getPublications({ per_page: 60, orderby: 'date', order: 'desc' })
      let categories: Awaited<ReturnType<typeof getCategories>> = []
      try {
        categories = await getCategories()
      } catch {
        // Les articles restent consultables même si la liste des catégories est indisponible.
      }

      if (!items.length) return demoResult()

      return {
        items,
        categories: categories.filter(category => category.slug !== 'uncategorized'),
        state: 'ready' as const
      }
    } catch {
      return demoResult()
    }
  }, { default: demoResult })
}
