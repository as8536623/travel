import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('views/Home.vue')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('components/city/City')
  },
  {
    path: '/detial/:id',
    name: 'Detial',
    component: () => import('components/detial/Detial')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
