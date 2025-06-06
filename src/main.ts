import '@/styles/global.scss'
import '@/styles/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import { createPinia } from 'pinia'
app.use(createPinia())

import router from './router'
app.use(router)

import live2d from 'live2d-widget'
import 'live2d-widget/index.css'
import 'live2d-widget/style.css'
app.use(live2d)


import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.mount('#app')
