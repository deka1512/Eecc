export default defineNuxtConfig({
  compatibilityDate: '2026-11-09',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/seo'],
  components: [
    { path: '~/components', pathPrefix: false }
  ],
  css: ['~/assets/css/main.css'],
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
        { name: 'theme-color', content: '#f7f7f4' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
      ]
    }
  }
})
