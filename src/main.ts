import './assets/main.css'
import '@/styles/variables.scss'
import '@/styles/global.scss'
import './styles/components/wrapper.scss'
import './styles/components/banner.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
