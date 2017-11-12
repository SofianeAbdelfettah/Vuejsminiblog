module.exports = {
  /*
  ** Headers of the page
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://nodeapi/api/'
  },
  head: {
    title: 'miniblog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'miniblog' }
    ],
       script: [
          { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.31/js/uikit.min.js' },
          { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.31/js/uikit-icons.min.js' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.9/css/uikit.min.css', rel: 'stylesheet' }
        ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
 plugins: [
   {src:'~/plugins/vuexpersist', ssr: false}
  ]
}
