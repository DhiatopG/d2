# Checklist — Fix `index.js` 404 Build Issue

## Context
The website deployed on production is throwing a `404` error for `index.js`. This happens because `index.html` references the script as `<script src="index.js" defer></script>`. Since it's not a module script, Vite doesn't process it during bundling, meaning the file never gets copied/bundled to `dist/`.

---

## Checklist

- [x] Modify root `index.html` to load `index.js` as a module script:
  ```html
  <script type="module" src="/index.js"></script>
  ```
- [x] Run `npm run build` to regenerate the `dist/` folder.
- [x] Verify `dist/assets/` contains the bundled and hashed JavaScript file (e.g., `index-xxxxxxxx.js`).
- [x] Verify `dist/index.html` correctly points to the newly bundled/hashed JavaScript file.
