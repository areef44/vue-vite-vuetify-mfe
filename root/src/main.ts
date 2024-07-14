import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import router from './routes/router'
import App from './App.vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'

const pinia = createPinia()

const TodoList = defineAsyncComponent(() => import('remoteApp/TodoList'))
const TodoListTwo = defineAsyncComponent(() => import('remoteApp/TodoList'))

const app = createApp(App)
app.component('TodoList', TodoList)
app.component('TodoListTwo', TodoListTwo)

app
.use(router)
.use(pinia)
.use(vuetify)
.mount('#app')
