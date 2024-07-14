import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'

const pinia = createPinia()

createApp(App).use(pinia).use(vuetify).mount('#app')
