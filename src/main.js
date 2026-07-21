import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18nState, initLocale, setLocale, t, tm } from './i18n'
import { applySeo } from './services/seo'
// import store from './store'

const app = createApp(App)

initLocale()

app.config.globalProperties.$i18n = i18nState
app.config.globalProperties.$setLocale = setLocale
app.config.globalProperties.$t = t
app.config.globalProperties.$tm = tm

app.use(router)
// app.use(store)

router.afterEach((to) => applySeo(to.path))
app.mount('#app')
