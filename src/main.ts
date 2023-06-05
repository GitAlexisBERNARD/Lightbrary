import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from "vue"
import { createHead } from "@vueuse/head"
import '@/css/style.css'

const app = createApp(App)
app.use(
    createRouter({
      history: createWebHistory(),
      routes
    })
  )
const head = createHead()

app.use(head)

app.mount("#app")
