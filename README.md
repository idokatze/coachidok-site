# coachidok.com

Triathlon & endurance coaching site. Astro (static), English at the root and Hebrew under `/he`.
Built on the same system as idokatze.com: same token names, components and rules; only the token values differ.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # type check (0 errors) + copy check: en.js and he.js have the same keys
npm run build    # static site in dist/
```

## Where things live

```text
src/
  site.ts          site data (name, contact details, nav, contacts) and the language helpers
  i18n/            all page copy: en.js, he.js (same keys in both), seo.ts (titles + descriptions)
  styles/global.css  tokens, base elements, layout, shared patterns (buttons, cards, facts, text link)
  layouts/Base.astro  <head>, fonts, hreflang, header, footer
  components/      Header, Footer, PageHeader, Section, Split, Button, TextLink, ReasonList, Steps, Cta,
                   ContactIcons, ContactForm, Icon
  views/           one file per page, shared by both languages (Home.astro …)
  pages/           routes: index.astro → /,  he/index.astro → /he  (each just renders its view), 404.astro
scripts/           check-copy.mjs (part of npm run check; lists English text still waiting for Hebrew)
public/            images, favicon, share image (og-hero.jpg, 1200×630), _headers (security headers), robots.txt
```

## Rules

- Styling is defined once — `global.css` or the component — never per page. Something different = a named variant.
- Token values only in `global.css`; components reference tokens.
- Photos are shown whole, never cropped. One exception: the home hero (PageHeader `cover`), a wide scene, never a portrait.
- Every text colour ≥ 4.5:1 on every background.
- Logical properties (`margin-inline-start`…) so every rule works left-to-right and right-to-left.
- Breakpoints: 640 / 820 / 1000px only (phones ≤ 639px).
- Shared patterns in global.css before writing a page style: `.role`, `.section-note`, `.card`, `.card--link`, `.card-grid(--2)`, `.facts`, `.btn-row`, `.eyebrow`.
- Capitalisation (English):
  - **Title Case** for formal labels: section titles that name a thing ("Previous Coaching Experience"), job titles ("Head Triathlon Coach"), eyebrow labels, buttons.
  - **Sentence case** for headings written as a sentence, a question or an informal phrase ("Why train with Ido", "A coaching philosophy shaped by…", the story sub-headings "How I found coaching"), and for list labels that aren't titles ("15+ years", "Holistic approach").
- Typography: curly apostrophes and quotes (’ “ ”), spaced en dash ( – ), no em dash.

The previous Vue version of the site is in `_archive/vue-site/` (not in git).
