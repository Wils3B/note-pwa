import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Note App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Note App - A progressive web application for notes',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: colors.deepOrange.base },
  /*
   ** Global CSS
   */
  css: ['~assets/scss/styles.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      icons: false,
      font: false,
    },
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.deepPurple.base,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  pwa: {
    icon: {
      source: '~/static/icon.png',
    },
    meta: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      mobileApp: true,
      name: 'NoteApp',
      author: 'Wilson Gouanet<wilstito@gmail.com>',
      theme_color: '#673ab7',
      lang: 'en',
      description: 'A Progressive Web Application for saving note building with VueJS and Workbox',
    },
    manifest: {
      name: 'NoteApp',
      short_name: 'NoteApp',
      theme_color: '#673ab7',
      background_color: '#f0f0f0',
      lang: 'en',
      description: 'A Progressive Web Application for save note building with VueJS and Workbox',
      display: 'standalone',
      orientation: 'portrait',
      Scope: '/',
      start_url: '/',
    },
    workbox: {
      autoRegister: true,
      enabled: true,
    },
  },
}
