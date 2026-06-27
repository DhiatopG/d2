# Favicon — Implementation Checklist

## Context

- **Problem:** Browser tab shows the default globe icon because no favicon is defined.
- **File to edit:** `index.html` — `<head>` section (after `<link rel="canonical">`, before `<title>`)
- **Logo source:** `public/logo.svg` (square, white background — used in site header)
- **Site URL:** `https://www.smilevip.net/`
- **Build tool:** Vite copies everything from `public/` to `dist/` unchanged at build time

> **Why raster files instead of `logo.svg` directly?**  
> `logo.svg` is very large (embedded base64 PNG). Tab icons display at 16–32 px; dedicated PNG/ICO files load faster and render more reliably. `og-image.png` is 1200×630 (landscape) — wrong aspect ratio for a favicon.

---

## Phase 1 — Generate Favicon Assets

Source: `public/logo.svg` → export square icons with white background preserved.

- [x] **1.1** Plan approved by user in chat
- [x] **1.2** Rasterize `public/logo.svg` and export the following files into **`public/`**:

| File | Size | Purpose |
|------|------|---------|
| `favicon-32x32.png` | 32×32 | Primary tab icon (modern browsers) |
| `favicon-16x16.png` | 16×16 | Small tab / bookmark icon |
| `favicon.ico` | 16 + 32 multi-size | Legacy fallback |
| `apple-touch-icon.png` | 180×180 | iOS home-screen bookmark icon |

- [x] **1.3** Use a one-off tool with no permanent npm dependency (e.g. `npx sharp-cli`, ImageMagick, Inkscape, or manual export from design tool)
- [x] **1.4** Verify exported files:
  - Logo is recognizable at 16×16 and 32×32
  - White background is solid (no transparency)
  - Each PNG has correct dimensions
  - `favicon.ico` contains both 16×16 and 32×32 sizes

---

## Phase 2 — Add Favicon `<link>` Tags to `<head>`

Insert **after** `<link rel="canonical" …>` and **before** `<title>` in `index.html`.

- [x] **2.1** Add legacy ICO fallback:
  ```html
  <link rel="icon" href="/favicon.ico" sizes="any">
  ```

- [x] **2.2** Add 32×32 PNG icon:
  ```html
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  ```

- [x] **2.3** Add 16×16 PNG icon:
  ```html
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  ```

- [x] **2.4** Add Apple touch icon:
  ```html
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  ```

- [x] **2.5** Confirm paths are root-relative (`/favicon.ico`) — **not** `public/favicon.ico`

---

## Phase 3 — Build & Verify

- [ ] **3.1** Run `npm run build`
- [ ] **3.2** Confirm favicon files are copied to `dist/`:
  - `dist/favicon.ico`
  - `dist/favicon-16x16.png`
  - `dist/favicon-32x32.png`
  - `dist/apple-touch-icon.png`
- [ ] **3.3** Run `npm run preview` and confirm `/favicon.ico` returns HTTP 200
- [ ] **3.4** Hard-refresh browser tab and confirm clinic logo appears (favicons are aggressively cached)
- [ ] **3.5** ~~Browser testing on multiple devices~~ *(skipped per user instruction)*

---

## Phase 4 — Documentation

- [ ] **4.1** Add completed row to SEO work log in `.agents/PROJECT_CONTEXT.md`
- [ ] **4.2** Update "Key Files & Paths" section in `PROJECT_CONTEXT.md` to list new favicon files under `public/`

---

## Files Affected

| File | Action |
|------|--------|
| `public/favicon.ico` | Create |
| `public/favicon-16x16.png` | Create |
| `public/favicon-32x32.png` | Create |
| `public/apple-touch-icon.png` | Create |
| `index.html` | Add 4 `<link>` tags in `<head>` |
| `.agents/PROJECT_CONTEXT.md` | Update work log |

---

## Out of Scope

- Fixing header `img src="public/logo.svg"` path (separate issue)
- `site.webmanifest` / PWA icons
- Production deploy (user deploys after build)
