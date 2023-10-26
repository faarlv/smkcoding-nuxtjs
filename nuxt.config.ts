// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "stylesheet", href:"https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" }
        ],
      }
    },
   
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss','@vite-pwa/nuxt'],

  tailwindcss:{
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },  

  pwa:{
    manifest: {
    "name": "faarlv",
    "short_name": "faarlv",
    "theme_color": "#eeeeee",
    "background_color": "#eeeeee",
    "display": "standalone",
    "orientation": "portrait",
    "scope": "/",
    "start_url": "/",
    icons:[
      {
        "sizes":"512x512",
        "src":"images/icons/slack.png",
        "type":"image/png"},
      ]
      
      },
      devOptions:{
        enabled: true,
    }
  }
})
