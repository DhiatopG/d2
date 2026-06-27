# CSS Render-Blocking Fix Checklist

**Issue:** `/assets/index-CCnQicGA.css` was blocking page render via a standard `<link rel="stylesheet">` tag.  
**Fix:** Replace with a non-blocking `rel="preload"` pattern + `<noscript>` fallback.

---

## Tasks

- [x] **Identify the blocking resource**
  - File: `dist/assets/index-CCnQicGA.css` (Vite build output, hashed stylesheet)
  - Original tag in `dist/index.html`: `<link rel="stylesheet" crossorigin href="/assets/index-CCnQicGA.css">`

- [x] **Fix `dist/index.html`** (deployed build file)
  - Removed Vite-injected blocking `<link rel="stylesheet" crossorigin href="/assets/index-CCnQicGA.css">`
  - Added in `<head>` immediately after `<title>`:
    ```html
    <link rel="preload" href="/assets/index-CCnQicGA.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/assets/index-CCnQicGA.css"></noscript>
    ```

- [x] **Fix root `index.html`** (source file)
  - Replaced blocking `<link rel="stylesheet" href="index.css">` with:
    ```html
    <link rel="preload" href="/assets/index-CCnQicGA.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/assets/index-CCnQicGA.css"></noscript>
    ```

- [x] **Create this checklist file** at `css_render_blocking_fix_checklist.md`

---

## Verification Steps

- [ ] Deploy `dist/index.html` to production (smilevip.net)
- [ ] Run PageSpeed Insights against `https://smilevip.net`
  - Confirm "Eliminate render-blocking resources" warning no longer flags `/assets/index-CCnQicGA.css`
- [ ] Visually confirm site renders correctly with styles applied

---

## Notes

> WARNING: The root `index.html` now references the hashed filename `/assets/index-CCnQicGA.css` directly.
> If you run `npm run build` again, Vite will regenerate a new hashed filename and re-inject a blocking `<link>` into `dist/index.html`.
> After any future build, you must repeat this fix OR configure a Vite plugin to handle non-blocking CSS injection automatically.

---

*Fixed on: 2026-06-27*
