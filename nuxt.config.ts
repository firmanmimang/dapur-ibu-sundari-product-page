// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-swiper', 'nuxt-splide', '@nuxtjs/robots', '@nuxtjs/sitemap', 'nuxt-aos'],

  devServer: {
    port: 3001
  },

  // BOT CRAWLER MATTER
  // UNTUK ROBOTS TXT SETTING
  robots: {
    robotsTxt: false,
    allow: '/',
  },
  // UNTUK SITEMAP SETTING
  site: {
    url: 'https://dapuribusundari.com',
    name: 'Dapur Ibu Sundari',
    gzip: true,
  },
  // ------------------------

  app: {
    // baseURL: "/dapur-ibu-sundari-product-page/",
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        class: 'scroll-smooth',
        lang: 'id',
      },
      bodyAttrs: {
        class: 'bg-[#fff8ef] text-[#1e1b13]',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
        },
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  aos: {
    once: true,
  },

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    preset: 'github-pages' // creates a 404.html for SPA fallback (if available in your version)
  }
})
