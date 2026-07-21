import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'

import App from './App.vue'
import { createAppRouter } from './router'
import { i18nState, t, tm } from './i18n'

export async function render(url) {
    const app = createSSRApp(App)
    const router = createAppRouter({ ssr: true })

    app.config.globalProperties.$i18n = i18nState
    app.config.globalProperties.$setLocale = () => {}
    app.config.globalProperties.$t = t
    app.config.globalProperties.$tm = tm
    app.use(router)

    await router.push(url)
    await router.isReady()

    return renderToString(app)
}
