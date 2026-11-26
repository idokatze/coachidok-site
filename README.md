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
  assets/images/   the site's photos — shown with Astro's <Image>, which makes the phone/desktop sizes and WebP copies at build time
  site.ts          site data (name, contact details, nav, contacts) and the language helpers
  i18n/            all page copy: en.js, he.js (same keys in both), seo.ts (titles + descriptions)
  styles/global.css  tokens, base elements, layout, shared patterns (buttons, cards, facts, text link)
  layouts/Base.astro  <head>, fonts, hreflang, header, footer
  components/      Header, Footer, PageHeader, Section, Split, Button, TextLink, ReasonList, Steps, Cta,
                   ContactIcons, ContactForm, Icon
  views/           one file per page, shared by both languages (Home.astro …)
  pages/           routes: index.astro → /,  he/index.astro → /he  (each just renders its view), 404.astro
scripts/           check-copy.mjs (part of npm run check; lists English text still waiting for Hebrew)
public/            favicon, share image (og-hero.jpg, 1200×630), _headers (security headers), robots.txt
```

## Rules

- Styling is defined once — `global.css` or the component — never per page. Something different = a named variant.
- Token values only in `global.css`; components reference tokens.
- Photos are shown whole, never cropped. One exception: the home hero (PageHeader `cover`), a wide scene, never a portrait.
- Every text colour ≥ 4.5:1 on every background.
- Logical properties (`margin-inline-start`…) so every rule works left-to-right and right-to-left.
- Breakpoints: 640 / 820px (phones ≤ 639px), plus 359px for the header only — the list is at the top of `global.css`.
- One container (`.wrap`) for header, content and footer: max 68rem, side margin 16px on phones growing to 48px — so every edge lines up at every width.
- Photos live in `src/assets/images` and are shown with Astro's `<Image>` (through PageHeader / Split): it makes the phone and desktop sizes. `public/` is only for files that need a fixed address (favicon, share image).
- A text used in more than one place (the main buttons) is one entry in `common` in the copy, not repeated per page.
- Shared patterns in global.css before writing a page style: `.role`, `.section-note`, `.card`, `.card--link`, `.card-grid(--2)`, `.facts`, `.btn-row`, `.eyebrow`.
- Capitalisation (English):
  - **Title Case** for formal labels: section titles that name a thing ("Previous Coaching Experience"), job titles ("Head Triathlon Coach"), eyebrow labels, buttons.
  - **Sentence case** for headings written as a sentence, a question or an informal phrase ("Why train with Ido", "My coaching journey", the story sub-headings "How I found coaching"), and for list labels that aren't titles ("15+ years", "Holistic approach").
- Typography: curly apostrophes and quotes (’ “ ”), spaced en dash ( – ), no em dash.

The previous Vue version of the site is kept on the `vue-site` branch (GitHub). `main` is the live site: Cloudflare Pages builds and publishes every push to it.
