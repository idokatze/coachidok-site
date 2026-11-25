// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` is the live domain — it feeds the sitemap, canonical URLs and share links.
export default defineConfig({
  site: 'https://coachidok.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  markdown: { syntaxHighlight: false },   // no code blocks on this site; the highlighter's inline styles would clash with the CSP

  // English at the root (/about), Hebrew under /he (/he/about). Page copy lives in src/i18n.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'he'],
    routing: { prefixDefaultLocale: false },
  },

  // the sitemap lists both languages of every page and links them to each other (hreflang)
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', he: 'he' } },
    }),
  ],

  // Content-Security-Policy as a <meta> tag on every page; Astro adds the hashes for its own inline
  // script/style tags. Everything the pages load is listed here — add to it if a new service is used.
  // (Framing is blocked by X-Frame-Options in public/_headers — a <meta> CSP can't do that.)
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self' https://api.web3forms.com https://cloudflareinsights.com",
        "form-action 'self' https://api.web3forms.com",
        "base-uri 'self'",
        "object-src 'none'",
      ],
      scriptDirective: {
        // Cloudflare injects its analytics beacon into the pages
        resources: ["'self'", 'https://static.cloudflareinsights.com'],
      },
      styleDirective: { resources: ["'self'"] },
    },
  },
});
