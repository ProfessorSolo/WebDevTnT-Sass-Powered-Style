# Sass + Tailwind Setup (Vite)

This repo demonstrates **Sass-authored components** living alongside **Tailwind utilities** in a single Vite workflow.

Goal: one build pipeline, two styling responsibilities.

---

## What we’re building

- **Tailwind**: layout, spacing, typography utilities in HTML
- **Tailwind component layer**: a small set of `@apply` helpers (chips/buttons)
- **Sass**: authored components, tokens, mixins/functions, variants (“design logic”)

Rule of thumb:
- Tailwind answers: **“How is this laid out?”**
- Sass answers: **“What is this component?”**

---

## Install

From the repo root:

```bash
npm install
```

---

## Dev server

```bash
npm run dev
```

Open the chapter HTML you want (or let Vite open the configured default).

---

## Build output

```bash
npm run build
```

Vite generates a `dist/` folder at the repo root.

---

## The wiring (high level)

Vite will process **both**:

1) Tailwind (via PostCSS)  
2) Sass (via Vite’s Sass integration)

You typically end up with:
- a Tailwind stylesheet entry (e.g., `tailwind.css`)
- a Sass entry per chapter (e.g., `main.scss`)

Both compile to plain CSS and are loaded by the chapter HTML.

---

## Minimal file pattern used in this repo

### Tailwind entry

`chapters/07-.../src/tailwind.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .tw-chip { /* @apply ... */ }
  .tw-btn  { /* @apply ... */ }
}
```

### Sass entry

`chapters/07-.../src/main.scss`

```scss
@use "./partials/tokens";
@use "./partials/neon-panel";
```

### Chapter JS entry

`chapters/07-.../src/scripts/main.js`

```js
import '../tailwind.css';
import '../main.scss';
```

---

## Required dependencies (conceptual)

- vite
- sass
- tailwindcss
- postcss
- autoprefixer

---

## Required config files (conceptual)

- tailwind.config.js
- postcss.config.js
- vite.config.js

Notes:
- Tailwind + PostCSS config is shared across the repo.
- Vite’s build input includes each chapter HTML.
- `base: './'` keeps built assets portable.

---

## Teaching framing

- Vite compiles everything to CSS.
- Tailwind is a PostCSS pipeline.
- Sass is a preprocessor pipeline.
- Both outputs load on the same page.

---

## Troubleshooting

### Live Server
Use:

```bash
npm run preview
```

Static servers may not mirror Vite’s asset handling.

### `<style>` tags in DevTools
Normal in dev. Source maps still point to the original files.
