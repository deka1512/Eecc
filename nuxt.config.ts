const discoveredRoutes = (() => {
  try {
    const value: unknown = JSON.parse(process.env.NUXT_PRERENDER_ROUTES || '[]')
    return Array.isArray(value) ? value.filter((route): route is string => typeof route === 'string') : []
  } catch {
    return []
  }
})()

export default defineNuxtConfig({
  compatibilityDate: '2026-11-09',
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/seo'],
  components: [{ path: '~/components', pathPrefix: false }],
  css: ['~/assets/css/main.css'],

  // Injectée au moment du build : les pages statiques embarquent les données WordPress.
  runtimeConfig: {
    public: {
      wordpressUrl: ''
    }
  },

  // Pré-rendu HTML. Les routes éditoriales sont découvertes par le script
  // scripts/generate-static.mjs, puis les liens internes complètent le crawl.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', ...discoveredRoutes],
      failOnError: true
    }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'EECC Centrale',
      titleTemplate: '%s | EECC Centrale',
      meta: [
        { name: 'description', content: "Site officiel de l'Église Clinique Charismatique — EECC Centrale." },
        { name: 'theme-color', content: '#176B55' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
      ]
    }
  }
})
