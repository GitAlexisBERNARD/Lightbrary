import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from "vue"
import { createHead } from "@vueuse/head"
import '@/css/style.css'
import V3ScrollLock from 'v3-scroll-lock'

const app = createApp(App)
app.use(
    createRouter({
      history: createWebHistory(),
      routes
    })
  )
const head = createHead()

app.use(head)

import V3ScrollLock from 'v3-scroll-lock'

app.mount("#app")
