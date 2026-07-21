import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import CoachingPage from '../pages/CoachingPage.vue'
import ContactPage from '../pages/ContactPage.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage,
    },
    {
        path: '/coaching',
        name: 'coaching',
        component: CoachingPage,
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactPage,
    },
]

export function createAppRouter({ ssr = false } = {}) {
    return createRouter({
        history: ssr
            ? createMemoryHistory(import.meta.env.BASE_URL)
            : createWebHistory(import.meta.env.BASE_URL),
        scrollBehavior() {
            return { top: 0 }
        },
        routes,
    })
}

const router = typeof window === 'undefined' ? null : createAppRouter()

export default router
