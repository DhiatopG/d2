# Next.js Migration Checklist
## Cabinet Dr Rezgui Houssem — Vite → Next.js 15 (App Router)

> **Status:** Ready for implementation. Prerequisites complete. Awaiting "start" command.

---

## ✅ Pre-Flight Checklist (ALL DONE)

- [x] **Node.js v24.13.0** installed — (required: v18.18+)
- [x] **npm v11.6.2** installed — (required: v9+)
- [x] **Git v2.49.0** installed
- [x] **Vercel account** created and linked to GitHub
- [x] **Deploy target confirmed** → GitHub → Vercel (no `output: 'export'` needed)

---

## ♻️ Reuse from Existing Work

> **Yes — all your existing SEO and Reviews work is preserved and will be migrated as-is.**

| Existing Work | What happens to it |
|---|---|
| All `<meta>`, OG, Twitter, canonical tags in `index.html` | Moved into `layout.tsx` using Next.js `Metadata` API |
| JSON-LD structured data (`<script type="application/ld+json">`) in `index.html` | Copied directly into `layout.tsx` |
| Reviews logic from `index.js` (fetch, carousel, filters, skeleton, expand/collapse) | Migrated into `ReviewsSection.tsx` + `lib/reviews.ts` |
| All CSS from `index.css` (reviews cards, carousel, skeleton styles) | Copied directly to `app/globals.css` — zero changes |
| Featurable API integration + quality filter | Kept identical, only env var name changes |

**Nothing is lost. It is a conversion, not a rewrite.**

---

## Phase 1 — Project Bootstrap

- [ ] Run `npx create-next-app@latest ./ --typescript --tailwind=false --eslint --app --src-dir=false --import-alias="@/*"` inside `c:\Users\dell\d2`
  - ⚠️ This will scaffold `app/`, `public/`, `next.config.ts`, `tsconfig.json`, `package.json`
- [ ] Confirm Next.js version is **15.x** after install
- [ ] Delete boilerplate files created by the scaffold that we do not need:
  - `app/page.tsx` (will be replaced with our own)
  - `app/globals.css` (will be replaced with our `index.css`)
  - `app/favicon.ico` (we have our own)

---

## Phase 2 — File Structure Setup

Create the following Next.js App Router file tree:

```
app/
  layout.tsx          <- Master layout (head, fonts, JSON-LD, body wrapper)
  page.tsx            <- Homepage (all sections assembled)
  globals.css         <- Renamed from index.css
components/
  Header.tsx          <- <header> from index.html
  HeroSection.tsx     <- #hero section
  SeoBlock.tsx        <- #seo-block section
  ReviewsSection.tsx  <- #reviews section (with carousel logic)
  LocationSection.tsx <- location-info + map sections
  ConsultSection.tsx  <- #consultation form section
  Footer.tsx          <- <footer> from index.html
  WhatsAppFab.tsx     <- Floating WhatsApp button
lib/
  reviews.ts          <- fetchReviews(), normalizeReview(), meetsQualityFilter()
types/
  review.ts           <- TypeScript types for Review, Author, Rating
public/               <- Copy all existing assets as-is
  logo.svg
  og-image.png
  favicon.ico
  favicon-16x16.png
  favicon-32x32.png
  apple-touch-icon.png
  robots.txt
  sitemap.xml
.env.local            <- Rename VITE_FEATURABLE_WIDGET_ID -> NEXT_PUBLIC_FEATURABLE_WIDGET_ID
```

---

## Phase 3 — `app/layout.tsx` (replaces `<head>` in index.html)

- [ ] Set `lang="fr"` on `<html>`
- [ ] Migrate all `<meta>` tags using Next.js `Metadata` API (`export const metadata: Metadata = { ... }`)
  - [ ] `description`
  - [ ] `openGraph` (title, type, url, images, description, locale, siteName)
  - [ ] `twitter` (card, title, description, images)
  - [ ] `canonical` via `alternates: { canonical: 'https://www.smilevip.net/' }`
- [ ] Migrate all favicon `<link>` tags using `icons` key in `Metadata`
- [ ] Migrate `<title>` using `title` key in `Metadata`
- [ ] Embed JSON-LD structured data as a `<script type="application/ld+json">` using `dangerouslySetInnerHTML`
- [ ] Import `globals.css` at the top of `layout.tsx`
- [ ] Render `<Header />`, `{children}`, `<Footer />`, `<WhatsAppFab />` in the body

---

## Phase 4 — `app/page.tsx` (replaces `<main>` in index.html)

- [ ] Assemble all section components in order:
  1. `<HeroSection />`
  2. `<SeoBlock />`
  3. `<ReviewsSection />`
  4. `<LocationSection />`
  5. `<ConsultSection />`

---

## Phase 5 — Component Migration

### Header.tsx
- [ ] Convert `<header class="header">` HTML to JSX (rename `class` to `className`)
- [ ] Mobile toggle state (`aria-expanded`) -> `useState<boolean>`
- [ ] Body scroll lock -> `useEffect` to set `document.body.style.overflow`
- [ ] Close menu on nav link click -> attach `onClick` to each link/button
- [ ] Mark as `'use client'` (has interactive state)

### HeroSection.tsx
- [ ] Convert `<section id="hero">` HTML to JSX
- [ ] No state needed -> Server Component

### SeoBlock.tsx
- [ ] Convert `<section id="seo-block">` HTML to JSX
- [ ] No state needed -> Server Component

### ReviewsSection.tsx
- [ ] Mark as `'use client'` (carousel state, fetch on mount)
- [ ] Carousel page -> `useState<number>`
- [ ] `reviewsCardsPerPage()` -> computed inside `useEffect` using `window.innerWidth`
- [ ] `renderReviews()` -> reviews array in state, rendered via `.map()` as JSX
- [ ] Move `getInitials()`, `formatRelativeDate()`, `normalizeReview()`, `meetsQualityFilter()` to `lib/reviews.ts`
- [ ] Fetch call -> `useEffect` on mount
- [ ] `expandedReviews` WeakSet -> `Set<number>` (index-based) in `useState`
- [ ] Replace `document.createElement / innerHTML` with JSX
- [ ] Rename env var: `VITE_FEATURABLE_WIDGET_ID` -> `NEXT_PUBLIC_FEATURABLE_WIDGET_ID`
- [ ] Show 3 skeleton divs while loading, replace with cards on data arrival

### LocationSection.tsx
- [ ] Convert location-info and map `<section>` tags to JSX
- [ ] Google Maps iframe: keep lazy-load using `useEffect` + `requestIdleCallback`
- [ ] Mark as `'use client'` for the idle callback

### ConsultSection.tsx
- [ ] Mark as `'use client'` (form state)
- [ ] Form submit -> `onSubmit` prop on `<form>`
- [ ] Show/hide success state -> `useState<boolean>` for `submitted`
- [ ] Auto-reset after 8 seconds -> `useEffect` with `setTimeout`

### Footer.tsx
- [ ] Convert `<footer>` HTML to JSX
- [ ] Server Component — no interactivity

### WhatsAppFab.tsx
- [ ] Convert the floating `<a>` + SVG to JSX
- [ ] Server Component — no interactivity

---

## Phase 6 — Styles Migration

- [ ] Copy `index.css` content -> `app/globals.css`
- [ ] No Tailwind — keep all vanilla CSS as-is
- [ ] Verify all class names still work (`className` in JSX)

---

## Phase 7 — Environment Variables

- [ ] Rename `.env` variable `VITE_FEATURABLE_WIDGET_ID` -> `NEXT_PUBLIC_FEATURABLE_WIDGET_ID`
- [ ] Create `.env.local` with the new variable name and its value
- [ ] Update all references in `ReviewsSection.tsx`

---

## Phase 8 — Public Assets

- [ ] Copy all files from current `public/` to Next.js `public/` (Next.js serves them at `/`)
  - `logo.svg`, `og-image.png`, `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `robots.txt`, `sitemap.xml`
- [ ] Fix logo `src`: change from `public/logo.svg` -> `/logo.svg`

---

## Phase 9 — Configuration Files

- [ ] Update `next.config.ts`:
  - Allow external image domains for reviewer avatars from Google
  - `images: { remotePatterns: [{ hostname: 'lh3.googleusercontent.com' }] }`
- [ ] Delete `vite.config.js` (no longer needed)
- [ ] Delete old `index.html`, `index.js`, `index.css` from root after confirming migration is complete

---

## Phase 10 — Verification

- [ ] Run `npm run dev` and verify site loads at `http://localhost:3000`
- [ ] Check all sections render visually identical to the old site
- [ ] Verify Reviews carousel loads and paginates correctly
- [ ] Verify consultation form submits and shows success state
- [ ] Verify mobile nav toggle and scroll lock work
- [ ] Verify Google Maps iframe loads lazily
- [ ] Verify favicon in browser tab
- [ ] Run `npm run build` — zero build errors
- [ ] Check browser DevTools `<head>` includes all meta tags, OG, canonical, JSON-LD

---

## Key Decisions — All Confirmed

| Decision | Plan | Status |
|---|---|---|
| TypeScript | Yes (.tsx) | ✅ Confirmed |
| CSS approach | Keep all vanilla CSS, no Tailwind | ✅ Confirmed |
| Next.js version | 15.x with App Router | ✅ Confirmed |
| Rendering | `use client` for interactive, Server for static | ✅ Confirmed |
| Deploy target | GitHub → Vercel (standard Next.js, no static export) | ✅ Confirmed |
| Reuse existing SEO | Yes — migrate all meta/OG/JSON-LD from index.html | ✅ Confirmed |
| Reuse existing Reviews | Yes — migrate all logic from index.js as-is | ✅ Confirmed |

> **All decisions resolved. Ready to implement on your command.**
