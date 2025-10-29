import { createApp } from 'vue'
import App from './App.vue'
import './scss/app.scss'
import router from './router.js'

createApp(App).use(router).mount('#app')
