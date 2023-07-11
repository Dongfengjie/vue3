import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../layouts/AppLayout.vue'
import LoginView from '../views/Login/LoginView.vue'
import ErrorPage404 from '../views/ErrorPage/ErrorPage404.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginView
        },
        {
            path: '/home',
            name: 'home',
            component: AppLayout
        },
        {
            path: '/404',
            name: '404',
            component: ErrorPage404
        }
    ]
})

export default router
