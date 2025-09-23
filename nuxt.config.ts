// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-swiper', 'nuxt-splide', '@nuxtjs/google-fonts', '@nuxtjs/robots', '@nuxtjs/sitemap', 'nuxt-aos'],

  devServer: {
    port: 3001
  },

  // BOT CRAWLER MATTER
  // UNTUK ROBOTS TXT SETTING
  robots: {
    allow: '/',
    sitemap: 'https://dapuribusundari.com/sitemap.xml',
  },
  // UNTUK SITEMAP SETTING
  site: {
    url: 'https://dapuribusundari.com',
    name: 'Dapur Ibu Sundari',
    gzip: true,
  },
  // ------------------------

  app: {
    baseURL: "/dapur-ibu-sundari-product-page/",
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        class: 'scroll-smooth',
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        // { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap' },
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  googleFonts: {
    families: {
      Lato: [100, 300, 400, 700, 900],
      'Open+Sans': [300, 400, 600],
    },
    display: 'swap',
  },

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})