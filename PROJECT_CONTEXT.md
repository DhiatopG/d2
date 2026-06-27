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
| 7 | Add Open Graph + Twitter Card meta tags | `og_twitter_meta_checklist.md` | ✅ Phases 1–4 complete · Phase 5 (build & validate) pending |

---

## Open Items / Pending Work

- [ ] **Phase 5** of `og_twitter_meta_checklist.md` — run `npm run build`, deploy, then validate with Facebook Sharing Debugger, Twitter Card Validator, LinkedIn Inspector
- [ ] **Twitter/X handle** — `twitter:site` tag was omitted because no handle was confirmed. Add `<meta name="twitter:site" content="@yourhandle">` if an account exists.
- [ ] **Google Rich Results Test** — validate JSON-LD Dentist schema once deployed (from `jsonld_schema_checklist.md`)

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

*Last updated: 2026-06-27*
