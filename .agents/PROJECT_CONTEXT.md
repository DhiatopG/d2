# PROJECT_CONTEXT.md
> **Read this file first at the start of every new chat before opening any other file.**  
> It is the single source of truth for the project state. Update the "Current State" and "Work Log" sections after every completed task.

---

## Project Identity

| Field | Value |
|-------|-------|
| **Site name** | Cabinet dentaire Dr Rezgui Houssem |
| **Brand name** | Smile VIP |
| **Live URL** | `https://www.smilevip.net/` |
| **Language** | French (`lang="fr"`, `og:locale` = `fr_TN`) |
| **Type** | Single-page website (no routing, no framework) |

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| **Vite** | ^5.0.0 | Build tool & dev server |
| **HTML** | — | Structure (`index.html` at root) |
| **Vanilla CSS** | — | Styles (`index.css` at root) |
| **Vanilla JS** | — | Interactions (`index.js` at root, loaded as `type="module"`) |

**Commands:**
- Dev server: `npm run dev`
- Production build: `npm run build` → output to `dist/`
- Preview build: `npm run preview`

---

## Key Files & Paths

```
c:\Users\dell\d2\
├── index.html          ← MAIN SOURCE — all <head> meta tags live here
├── index.css           ← All styles + @font-face rules
├── index.js            ← JS interactions (lazy map load, form handling)
├── vite.config.js      ← Minimal Vite config
├── package.json
├── public\
│   ├── logo.svg        ← Logo used in <img> in the header (stays SVG)
│   ├── og-image.png    ← Social share image — 1200×630 px, white bg, 577 KB
│   ├── favicon.ico     ← Legacy multi-size favicon fallback
│   ├── favicon-16x16.png ← 16x16 PNG favicon for browser tabs
│   ├── favicon-32x32.png ← 32x32 PNG favicon for desktop browser tabs
│   ├── apple-touch-icon.png ← 180x180 PNG apple touch icon
│   ├── robots.txt
│   └── sitemap.xml
├── assets\
│   └── fonts\          ← Self-hosted WOFF2 font files (Inter + Playfair Display)
└── dist\               ← Build output — IGNORED by git, never commit
```

---

## `<head>` Current State (after all completed work)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="…">

<!-- Open Graph -->
<meta property="og:title" content="Le Meilleur Dentiste Tunis – Cabinet Dr Rezgui Houssem">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.smilevip.net/">
<meta property="og:image" content="https://www.smilevip.net/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:description" content="…">
<meta property="og:locale" content="fr_TN">
<meta property="og:site_name" content="Cabinet dentaire Dr Rezgui Houssem">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Le Meilleur Dentiste Tunis – Cabinet Dr Rezgui Houssem">
<meta name="twitter:description" content="…">
<meta name="twitter:image" content="https://www.smilevip.net/og-image.png">
<meta name="twitter:image:alt" content="Cabinet dentaire Dr Rezgui Houssem – Logo sur fond blanc">

<link rel="canonical" href="https://www.smilevip.net/" />
<link rel="icon" href="/favicon.ico?v=2" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2">
<link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2">
<title>…</title>
<link rel="stylesheet" href="index.css">

<!-- JSON-LD Structured Data (Dentist schema) -->
<script type="application/ld+json">…</script>
```

---

## SEO & Technical Work Log

| # | Task | Checklist file | Status |
|---|------|---------------|--------|
| 1 | Self-host Google Fonts (Inter + Playfair Display) | `self_hosted_fonts_checklist.md` | ✅ Complete |
| 2 | Add canonical tag | `canonical_tag_checklist.md` | ✅ Complete |
| 3 | Add JSON-LD Dentist schema markup | `jsonld_schema_checklist.md` | ✅ Complete |
| 4 | Add SEO two-card block (HTML + CSS) below hero | `seo_block_checklist.md` | ✅ Complete |
| 5 | Untrack `dist/` from Git + fix build workflow | `dist_build_fix_checklist.md` | ✅ Complete |
| 6 | Fix `index.js` 404 in production (add `type="module"`) | `dist_js_404_fix_checklist.md` | ✅ Complete |
| 7 | Add Open Graph + Twitter Card meta tags | `og_twitter_meta_checklist.md` | ✅ Complete |
| 8 | Add favicon links & assets | `favicon_checklist.md` | ✅ Complete |
| 9 | Integrate Google Reviews via Featurable API | — | ✅ Complete (fixed v1 response parsing + field mapping) |

---

## Open Items / Pending Work

*(Aucun élément en attente — tous les travaux planifiés sont terminés)*

---

## Business Details (for reference)

| Field | Value |
|-------|-------|
| **Doctor** | Dr Rezgui Houssem |
| **Address** | 23 Av. Iben Kholdoun, 1064 Tunis, Tunisie |
| **Phone** | +216 50 149 159 |
| **WhatsApp** | https://wa.me/21650149159 |
| **Coordinates** | lat 36.83983244399368 / lng 10.115723750320473 |
| **Hours** | Mon 9h–17h · Tue–Fri 8h30–19h · Sat 8h30–13h30 · Sun closed |

---

*Last updated: 2026-06-28*

### Reviews integration notes
- Uses Featurable **v1** public endpoint: `GET /api/v1/widgets/:widgetId`
- Reviews are at `data.reviews` (not `data.widget.reviews`); v1 review fields are normalized in `index.js`
- Carousel shows 3/2/1 cards per page (desktop/tablet/mobile) with prev/next arrows; all API reviews are loaded
- Each card: Google profile photo, relative French date, full text, yellow stars bottom-left, Google G logo bottom-right
- Widget ID is set via `VITE_FEATURABLE_WIDGET_ID` in `.env` (see `.env.example`); restart dev server after changing `.env`
