import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from './HomeRouter'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: () => {
      return '/Home'
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home'),
    children: HomeRouter,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
