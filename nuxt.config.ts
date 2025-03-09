import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/css/main.scss'],
  app: {
    head: {
      title: 'Valentech Patient Tracker', 
      link: [
        {
          rel: 'icon',
          type: 'image/jpeg',
          href: '/logo.jpeg'
        }
      ]
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  alias: {
    '@': resolve(__dirname, './'),
  }
})
