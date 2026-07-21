import { getSeoForPath, getStructuredData } from '../content/seo'

function setMeta(selector, attribute, value) {
    const element = document.head.querySelector(selector)

    if (element) {
        element.setAttribute(attribute, value)
    }
}

export function applySeo(path) {
    if (typeof document === 'undefined') {
        return
    }

    const seo = getSeoForPath(path)
    const structuredData = document.querySelector('#structured-data')

    document.title = seo.title
    setMeta('meta[name="description"]', 'content', seo.description)
    setMeta('meta[property="og:url"]', 'content', seo.canonicalUrl)
    setMeta('meta[property="og:title"]', 'content', seo.title)
    setMeta('meta[property="og:description"]', 'content', seo.description)
    setMeta('meta[name="twitter:title"]', 'content', seo.title)
    setMeta('meta[name="twitter:description"]', 'content', seo.description)
    setMeta('link[rel="canonical"]', 'href', seo.canonicalUrl)

    if (structuredData) {
        structuredData.textContent = JSON.stringify(getStructuredData(path))
    }
}
