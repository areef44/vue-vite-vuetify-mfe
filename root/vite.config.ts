import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'root',
      remotes: {
        'remoteApp': 'http://localhost:3000/assets/remoteEntry.js',
        'remoteAppTwo': 'http://localhost:3001/assets/remoteEntry.js',
      },
      shared: ['vue', 'pinia']
    }),
    vuetify({ autoImport: true }),
  ],
  build: {
    target: 'esnext'
  }
})
