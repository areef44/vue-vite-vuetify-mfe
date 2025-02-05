import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  preview: { port: 5173 },
  server: { port: 5173 },
  plugins: [
    vue(),
    federation({
      name: 'root',
      remotes: {
        'remoteApp': 'http://localhost:3000/assets/remoteEntry.js',
        'remoteAppTwo': 'http://localhost:3001/assets/remoteEntry.js',
      },
      exposes: {
        './store': './src/stores/store.ts',
      },
      shared: ['vue', 'pinia']
    }),
    vuetify({ autoImport: true }),
  ],
  build: {
    target: 'esnext'
  }
})
