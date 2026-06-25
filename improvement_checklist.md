# Aurelia Clinic — Home Page Improvement Checklist

Based on the full audit of `index.html`, `index.css`, and `index.js`.

---

## 🔴 P0 — Critical (Broken / Missing Functionality)

- [x] **Add `#consultation` booking section** — Create a consultation/booking form section so the "Book a Consultation" CTA buttons actually land somewhere.
- [ ] **Build the real Services section** — Replace the SEO card placeholder with a proper 3-column service card grid (Implants, Veneers, Whitening, Orthodontics, Oral Surgery, General Care) as per the checklist.
- [ ] **Build the real Areas Served section** — Replace the SEO card placeholder with actual pill/tag area listings and a location closing line.

---

## 🟠 P1 — Design Issues

- [ ] **Make header sticky / scroll-aware** — Change `position: absolute` to a scroll-triggered transition: transparent on hero → solid background when scrolling down. Add logic in `index.js`.
- [ ] **Fix the embedded map location** — Replace the Tunisia map embed with the correct London location (12 Harley Street, Mayfair). Add a heading, address copy, and a directions CTA around the map.
- [ ] **Fix trust bar text casing** — Standardise all three stat labels to the same case (all uppercase or all title case).

---

## 🟡 P2 — UX & Content Gaps

- [ ] **Add testimonials / social proof section** — Add at least 2–3 patient quotes between the Services and Areas sections.
- [ ] **Replace footer contact bullet icons with SVG icons** — Swap `&#9679;` dots for proper SVG icons (pin, phone, envelope, clock).
- [ ] **Add counter animation to trust bar numbers** — Animate 0 → final value when the trust bar enters the viewport (IntersectionObserver in `index.js`).
- [ ] **Add a fallback background color to `.hero-right`** — So there is a graceful visual if `clinic_hero.png` fails to load.

---

## 🔵 P3 — Code & SEO

- [ ] **Add Open Graph meta tags** — Add `og:title`, `og:description`, `og:image`, `og:url` to `<head>`.
- [ ] **Add scroll-reveal animations** — Use IntersectionObserver to fade/slide sections in as they enter the viewport.
- [ ] **Resolve `border-radius` override conflict** — Unify the global `border-radius: 0 !important` rule with the `.seo-card` `8px !important` override into a clean, intentional pattern.
- [ ] **Fix dead footer legal links** — `Privacy Policy` and `Terms of Use` both point to `#`. Either create pages or remove them for now.

---

## ✅ Already Done (Reference)

- [x] Hero split two-column layout
- [x] Gold line + serif headline + muted subtitle
- [x] "Book a Consultation" CTA button (style only)
- [x] Trust bar with 3 stats and gold dividers
- [x] SEO block with two cards (Services + Areas placeholders)
- [x] Google Maps iframe embed
- [x] Footer with brand, quick links, contact & hours columns
- [x] Mobile hamburger menu with animation
- [x] Responsive breakpoints (768px, 1024px)
- [x] Google Fonts (Playfair Display + Inter)
- [x] CSS design tokens in `:root`
