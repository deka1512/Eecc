export default defineNuxtConfig({
  compatibilityDate: '2026-11-09',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: { public: { wordpressUrl: '' } },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'EECC Centrale',
      meta: [{ name: 'description', content: "Site officiel de l'Église Clinique Charismatique — EECC Centrale." }]
    }
  }
})
