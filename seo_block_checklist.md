# SEO Block — Implementation Checklist

Two-section SEO block with cards placed below the hero section on the Cabinet dentaire Dr rezgui Houssem homepage.

---

## Phase 1 — HTML Structure
- [x] Insert `<section id="seo-block">` between hero and existing services section in `index.html`.
- [x] Add section header with eyebrow text (`OUR EXPERTISE`), `<h2>` heading, and subtext paragraph.
- [x] Add `.seo-cards` wrapper div containing two `<article>` elements.
- [x] Card 1: inline SVG tooth icon, `<h3>` title, description `<p>`, text link to `#services`.
- [x] Card 2: inline SVG location pin icon, `<h3>` title, description `<p>`, text link to `#areas`.

## Phase 2 — CSS Styling
- [x] Add `.seo-block` styles: sage green background, generous padding.
- [x] Add `.seo-block-header` styles: centered eyebrow, h2, and subtext.
- [x] Add `.seo-cards` styles: 2-column CSS grid, equal widths, gap.
- [x] Add `.seo-card` styles: white background, subtle border, rounded corners override, shadow.
- [x] Add `.seo-card-icon` styles: gold color, size.
- [x] Add `.seo-card-title` and `.seo-card-desc` styles.
- [x] Add `.seo-card-link` styles: gold color, arrow, hover underline.
- [x] Add responsive rule: stack to 1 column on `max-width: 768px`.

## Phase 3 — Verification
- [ ] Preview in browser via `npm run dev`.
- [ ] Confirm two-column layout on desktop.
- [ ] Confirm single-column stacking on mobile.
- [ ] Confirm hover effect on card links.
- [ ] Inspect HTML in DevTools — verify `<section>`, `<h2>`, `<article>` are present and crawlable.
