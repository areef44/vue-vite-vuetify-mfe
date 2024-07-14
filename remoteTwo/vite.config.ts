import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  preview: { port: 3001 },
  server: { port: 3001 },
  plugins: [
    vue(),
    federation({
      name: 'remote_app_two',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.vue',
        './TodoList': './src/components/TodoList.vue'
      },
      shared: ['vue', 'pinia']
    }),
    vuetify({ autoImport: true }),
  ],
  build: {
    target: 'esnext'
  }
})
