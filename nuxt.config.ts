export default defineNuxtConfig({
  compatibilityDate: '2026-11-09',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/seo'],
  components: [
    { path: '~/components', pathPrefix: false }
  ],
  css: ['~/assets/css/main.css'],
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    }
  },
  runtimeConfig: {
    public: {
      wordpressUrl: ''
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'EECC Centrale',
      titleTemplate: '%s | EECC Centrale',
      meta: [
        {
          name: 'description',
          content: "Site officiel de l'Église Clinique Charismatique — EECC Centrale."
        },
        { name: 'theme-color', content: '#176B55' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
      ]
    }
  }
})
