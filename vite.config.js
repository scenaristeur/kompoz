import { fileURLToPath, URL } from 'node:url'
const base = process.env.NODE_ENV === 'production' ? '/kompoz/' : '/'


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  pwa: {
    name: 'Kompoz',
    // themeColor: '#4dbab5',
    // msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      share_target: {
        action: base+'share',
        method: "GET",
        enctype: "application/x-www-form-urlencoded",
        params: {
          title: "title",
          text: "text",
          url: "url"
        }
      },
    },
},
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
