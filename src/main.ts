import '@/styles/global.scss'
import '@/styles/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import live2d from 'live2d-widget'
import 'live2d-widget/index.css'
import 'live2d-widget/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(live2d)

app.mount('#app')
