module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'css-garden',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CSS Garden' },
      { name:"author", content:"Dave Shea" },
      { name:"description", content:"A demonstration of what can be accomplished visually through CSS-based design."},
      { name:"robots", content:"all" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", media:"screen", href:"style.css?v:8may2013"},
      { rel:"alternate", type:"application/rss+xml", title:"RSS", href:"http://www.csszengarden.com/zengarden.xml"}
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
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

