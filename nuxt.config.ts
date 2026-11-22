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

  // Pré-rendu HTML. Le crawler suit les liens internes depuis l'accueil
  // pour découvrir les pages institutionnelles et les fiches éditoriales.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
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
