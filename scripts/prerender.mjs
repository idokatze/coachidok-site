import { readFile, rm, writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import {
    getSeoForPath,
    getStructuredData,
    publicRoutes,
} from '../src/content/seo.js'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = resolve(projectRoot, 'dist')
const template = await readFile(resolve(distRoot, 'index.html'), 'utf8')
const serverEntryPath = resolve(distRoot, 'server/entry-server.js')
const { render } = await import(pathToFileURL(serverEntryPath))

function escapeAttribute(value) {
    return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}

function replaceAttribute(html, selectorPattern, attribute, value) {
    return html.replace(
        selectorPattern,
        (tag) => tag.replace(
            new RegExp(`${attribute}="[^"]*"`),
            `${attribute}="${escapeAttribute(value)}"`,
        ),
    )
}

function applyPageHead(html, path) {
    const seo = getSeoForPath(path)
    let pageHtml = html.replace(/<title>.*?<\/title>/, `<title>${seo.title}</title>`)

    pageHtml = replaceAttribute(pageHtml, /<meta name="description"[^>]*>/, 'content', seo.description)
    pageHtml = replaceAttribute(pageHtml, /<meta property="og:url"[^>]*>/, 'content', seo.canonicalUrl)
    pageHtml = replaceAttribute(pageHtml, /<meta property="og:title"[^>]*>/, 'content', seo.title)
    pageHtml = replaceAttribute(pageHtml, /<meta property="og:description"[^>]*>/, 'content', seo.description)
    pageHtml = replaceAttribute(pageHtml, /<meta name="twitter:title"[^>]*>/, 'content', seo.title)
    pageHtml = replaceAttribute(pageHtml, /<meta name="twitter:description"[^>]*>/, 'content', seo.description)
    pageHtml = replaceAttribute(pageHtml, /<link rel="canonical"[^>]*>/, 'href', seo.canonicalUrl)

    return pageHtml.replace(
        /<script id="structured-data" type="application\/ld\+json">.*?<\/script>/,
        `<script id="structured-data" type="application/ld+json">${JSON.stringify(getStructuredData(path))}</script>`,
    )
}

for (const route of publicRoutes) {
    const appHtml = await render(route)
    const outputPath = route === '/'
        ? resolve(distRoot, 'index.html')
        : resolve(distRoot, route.slice(1), 'index.html')
    const pageHtml = applyPageHead(template, route).replace(
        '<div id="app"></div>',
        `<div id="app">${appHtml}</div>`,
    )

    await mkdir(dirname(outputPath), { recursive: true })
    await writeFile(outputPath, pageHtml)
}

await rm(resolve(distRoot, 'server'), { recursive: true, force: true })
