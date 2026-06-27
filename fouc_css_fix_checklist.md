# FOUC CSS Fix Checklist

- [x] Remove `nonBlockingCss` plugin from `vite.config.js`
- [ ] Run `npm run build` to generate the new asset structure
- [ ] Verify that `dist/index.html` contains standard render-blocking `<link rel="stylesheet">`
- [ ] Confirm page loads without any Flash of Unstyled Content (FOUC)
