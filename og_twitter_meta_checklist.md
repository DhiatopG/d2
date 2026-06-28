# Open Graph & Twitter Card Meta Tags — Implementation Checklist

## Context

- **File to edit:** `index.html` — `<head>` section (currently lines 4–67)
- **Logo source:** `public/logo.svg` (897 KB SVG, transparent background)
- **Site URL:** `https://www.smilevip.net/`
- **Site handle / twitter:site:** *(to be confirmed — no Twitter/X account found in the HTML; leave blank or add when known)*

---

## Phase 1 — Generate the Social Share Image ✅

> Social platforms (Facebook, Twitter/X, LinkedIn, WhatsApp) require a **raster image** (JPG or PNG).  
> Transparent backgrounds render black on most platforms, so a white background must be added.

> **✅ Done by user — `public/og-image.png` has been manually added.**

- [x] **1.1** Open `public/logo.svg` in a tool that can export raster images  
  *(e.g. Inkscape, Figma, Adobe Illustrator, or a Node script with `sharp`)*
- [x] **1.2** Set the canvas / export size to exactly **1200 × 630 px**  
  *(this is the recommended OG image size and matches Twitter's summary_large_image ratio)*
- [x] **1.3** Fill the background with solid **white (#FFFFFF)** — do **not** leave it transparent
- [x] **1.4** Center the logo within the canvas; add comfortable padding (≥ 80 px on all sides)
- [x] **1.5** Export as **PNG** (preferred for logos) or JPG (quality ≥ 90)
- [x] **1.6** Save the exported file to **`public/og-image.png`**  
  *(keeping it in `public/` ensures Vite copies it to `dist/` unchanged)*
- [ ] **1.7** Verify the exported file *(quick sanity check recommended)*:
  - File size is ideally **< 1 MB** (Facebook hard limit is 8 MB, but smaller loads faster)
  - Dimensions are confirmed **1200 × 630 px**
  - No transparency visible when opened in any image viewer

---

## Phase 2 — Add Open Graph Meta Tags to `<head>` ✅

Insert the following tags **after** the existing `<meta name="description">` and **before** `<link rel="canonical">` in `index.html`.

- [x] **2.1** Add `og:title`  
  ```html
  <meta property="og:title" content="Le Meilleur Dentiste Tunis – Cabinet Dr Rezgui Houssem">
  ```
  *(shorter than the `<title>` tag; keep under 60 characters for clean display)*

- [x] **2.2** Add `og:type`  
  ```html
  <meta property="og:type" content="website">
  ```

- [x] **2.3** Add `og:url`  
  ```html
  <meta property="og:url" content="https://www.smilevip.net/">
  ```

- [x] **2.4** Add `og:image`  
  ```html
  <meta property="og:image" content="https://www.smilevip.net/og-image.png">
  ```
  *(absolute URL required — relative paths are not honoured by social crawlers)*

- [x] **2.5** Add `og:image:width` and `og:image:height` *(optional but recommended)*  
  ```html
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  ```

- [x] **2.6** Add `og:description`  
  ```html
  <meta property="og:description" content="Vous méritez un dentiste de confiance à Tunis. Chez le Cabinet Dr Rezgui Houssem, vous êtes entre les mains d'un professionnel qualifié. Prenez rendez-vous dès aujourd'hui !">
  ```
  *(reuse the existing `<meta name="description">` value for consistency)*

- [x] **2.7** Add `og:locale` *(optional but recommended for French content)*  
  ```html
  <meta property="og:locale" content="fr_TN">
  ```

- [x] **2.8** Add `og:site_name`  
  ```html
  <meta property="og:site_name" content="Cabinet dentaire Dr Rezgui Houssem">
  ```

---

## Phase 3 — Add Twitter Card Meta Tags to `<head>` ✅

Insert **after** the OG block added in Phase 2.

- [x] **3.1** Add `twitter:card`  
  ```html
  <meta name="twitter:card" content="summary_large_image">
  ```
  *(use `summary_large_image` to display the full 1200×630 banner)*

- [x] **3.2** Add `twitter:site` — **skipped** (no Twitter/X handle confirmed)  
  > ⚠️ Add `<meta name="twitter:site" content="@yourhandle">` later if a Twitter/X account exists.

- [x] **3.3** Add `twitter:title`  
  ```html
  <meta name="twitter:title" content="Le Meilleur Dentiste Tunis – Cabinet Dr Rezgui Houssem">
  ```

- [x] **3.4** Add `twitter:description`  
  ```html
  <meta name="twitter:description" content="Vous méritez un dentiste de confiance à Tunis. Chez le Cabinet Dr Rezgui Houssem, vous êtes entre les mains d'un professionnel qualifié. Prenez rendez-vous dès aujourd'hui !">
  ```

- [x] **3.5** Add `twitter:image`  
  ```html
  <meta name="twitter:image" content="https://www.smilevip.net/og-image.png">
  ```

- [x] **3.6** Add `twitter:image:alt` *(accessibility best practice)*  
  ```html
  <meta name="twitter:image:alt" content="Cabinet dentaire Dr Rezgui Houssem – Logo sur fond blanc">
  ```

---

## Phase 4 — Update JSON-LD Schema (minor) ✅

The existing JSON-LD `"image"` field currently points to `https://smilevip.net/logo.svg`.  
Optionally update it to include the new raster image for richer results.

- [x] **4.1** In the `<script type="application/ld+json">` block, update or extend the `"image"` array:  
  ```json
  "image": [
    "https://www.smilevip.net/og-image.png",
    "https://www.smilevip.net/logo.svg"
  ]
  ```

---

## Phase 5 — Build & Verify

- [x] **5.1** Run `npm run build` to regenerate `dist/` and confirm `og-image.png` is copied to `dist/`
- [x] **5.2** Deploy to production (or staging at `https://www.smilevip.net/`)
- [x] **5.3** Validate with **Facebook Sharing Debugger**:  
  `https://developers.facebook.com/tools/debug/?q=https://www.smilevip.net/`
- [x] **5.4** Validate with **Twitter Card Validator**:  
  `https://cards-dev.twitter.com/validator` *(requires login)*
- [x] **5.5** Validate with **LinkedIn Post Inspector**:  
  `https://www.linkedin.com/post-inspector/inspect/https://www.smilevip.net/`
- [x] **5.6** Validate with **OpenGraph.xyz**:  
  `https://www.opengraph.xyz/url/https://www.smilevip.net/`
- [x] **5.7** Confirm the preview image, title, and description render correctly on all validators
- [x] **5.8** Click "Scrape Again" on the Facebook Debugger to force-refresh its cache

---

## Open Questions (confirm before implementation)

| # | Question | Default assumed |
|---|----------|----------------|
| 1 | Does the practice have a Twitter/X account? What is the `@handle`? | Tag omitted if unknown |
| 2 | Should the OG image be PNG or JPG? | PNG (better for logos with text/lines) |
| 3 | Should the logo be centred on white, or should the image include a styled background (colour, gradient)? | Centred on plain white |
| 4 | Is `smilevip.net` or `www.smilevip.net` the canonical domain? | `https://www.smilevip.net/` (matches existing canonical tag) |

---

*Checklist created: 2026-06-27*
