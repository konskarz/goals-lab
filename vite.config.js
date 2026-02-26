import pxtorem from 'postcss-pxtorem'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [vue({ template: { transformAssetUrls } }), quasar()],
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 16,
          propList: ['*', '!border', '!outline', '!box-shadow', '!transform'],
          replace: true,
          mediaQuery: false,
          minPixelValue: 2
        })
      ]
    }
  }
})
