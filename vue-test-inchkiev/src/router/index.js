import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '@/views/StartPage.vue'
import Main from '@/views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'start-page',
    component: StartPage,
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
