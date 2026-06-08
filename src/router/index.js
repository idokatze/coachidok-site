import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import CoachingPage from '../pages/CoachingPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
        return { top: 0 }
    },
    routes: [
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
    ],
})

export default router
