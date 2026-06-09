import { reactive } from 'vue'

import en from './messages/en'
import he from './messages/he'

const STORAGE_KEY = 'coachidok-site-locale'
const SUPPORTED_LOCALES = ['en', 'he']

const messages = {
    en,
    he,
}

const state = reactive({
    locale: 'en',
})

function getByPath(source, path) {
    return path.split('.').reduce((value, key) => value?.[key], source)
}

function resolveMessage(path) {
    return (
        getByPath(messages[state.locale], path) ??
        getByPath(messages.en, path) ??
        path
    )
}

function updateDocumentLanguage(locale) {
    if (typeof document === 'undefined') {
        return
    }

    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'he' ? 'rtl' : 'ltr'
}

export function setLocale(locale) {
    const nextLocale = SUPPORTED_LOCALES.includes(locale) ? locale : 'en'

    state.locale = nextLocale
    updateDocumentLanguage(nextLocale)

    if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, nextLocale)
    }
}

export function initLocale() {
    if (typeof window === 'undefined') {
        updateDocumentLanguage(state.locale)
        return
    }

    const storedLocale = window.localStorage.getItem(STORAGE_KEY)
    const browserLocale = window.navigator.language?.startsWith('he')
        ? 'he'
        : 'en'

    setLocale(storedLocale || browserLocale)
}

export function t(path) {
    const message = resolveMessage(path)
    return typeof message === 'string' ? message : path
}

export function tm(path) {
    return resolveMessage(path)
}

export function isLocale(locale) {
    return state.locale === locale
}

export const i18nState = state
