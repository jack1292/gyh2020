import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from './HomeRouter'
import ContentRouter from './ContentRouter'

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
    {
        path: '/Content',
        name: 'Content',
        component: () => import('../views/Content'),
        children: ContentRouter,
    },
]

const router = new VueRouter({
    routes,
    mode: 'hash',
    base: process.env.BASE_URL,
    // 指定该钩子函数，返回坐标值即可
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})

export default router
