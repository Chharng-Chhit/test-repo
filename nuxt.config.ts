// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // css: ['~/assets/css/main.css'],
  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  modules: ['@nuxt/icon'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    }
  }
})