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
  },

  // GitHub Pages configuration
  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  // Set base URL for GitHub Pages deployment
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/'
  },

  // Ensure assets are properly handled
  vite: {
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
  }
})