// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  srcDir: 'src/',
  css: [
    '~/assets/css/main.css',
  ],
  app: {
    head: {
      title: 'Fokus Zona - Motivation for the Balkans',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Fokus Zona is an Instagram motivational page that shares quotes in Serbian for the Balkan audience. Find blogs, digital products, and motivation here.' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  runtimeConfig: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
      paypalClientId: process.env.PAYPAL_CLIENT_ID,
    },
    paypalClientSecret: process.env.PAYPAL_CLIENT_SECRET,
  },
})
