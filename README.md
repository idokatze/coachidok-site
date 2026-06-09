# Coach Ido Site

Vue 3 + Vite website for a bilingual triathlon and endurance coaching business.

## Getting Started

```sh
npm install
npm run dev
```

To test contact form submissions locally, create `.env.local` from `.env.example`:

```sh
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key
```

## Project Structure

```text
src/
  assets/            Global styles and image assets
  components/
    About/           About page sections
    Coaching/        Coaching page sections
    Contact/         Contact page sections and form UI
    Common/          Shared reusable UI
    Home/            Home page sections
    Layout/          Header, footer, and navigation pieces
  content/           Stable site data such as brand, nav, and contact links
  i18n/              Lightweight English/Hebrew translation layer
  pages/             Route-level page composition
  router/            Vue Router setup
  services/          External service logic and non-visual helpers
```

## Architecture Notes

- Pages should stay small and compose section components.
- Section components own their local layout and styling.
- Shared data belongs in `src/content`.
- External-service logic belongs in `src/services`.
- Visible copy belongs in `src/i18n/messages/en.js` and `src/i18n/messages/he.js`.
- Brand text in the header/footer intentionally stays English and lives in `src/content/brand.js`.

## Scripts

```sh
npm run dev      # local development
npm run build    # production build
npm run preview  # preview production build
```
