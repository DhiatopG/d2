# Checklist: Center Hero Headline & Fix Mobile Navigation

## 1. Hero Section Cleanup & Centering
- [x] Remove the hero image block (`.hero-right`) from `index.html`.
- [x] Update layout in `index.css` for the hero section to occupy full width:
  - Adjust `.hero-split` or replace it with a centered block layout.
  - Center align `.hero-content` using `margin: 0 auto; text-align: center; align-items: center;`.
  - Center align `.gold-line` using `margin: 0 auto 2rem auto;`.
  - Center align `.hero-cta` by removing `align-self: flex-start` or changing it to `align-self: center`.

## 2. Mobile Navigation Fix
- [x] Inspect mobile navigation styles in `index.css` at `@media (max-width: 768px)`:
  - Verify visibility of `.mobile-toggle` and its child lines (ensuring they have height/width and colors).
  - Ensure `.nav-menu` transitions and display modes behave correctly when `.active` class is added.
  - Ensure links inside the mobile menu are correctly styled and visible.
- [x] Verify JavaScript events in `index.js` attach correctly to `.mobile-toggle` and toggle `aria-expanded` and `.active` classes.
- [x] Verify there are no overlapping elements (e.g., trust-bar, main content, header z-index) blocking clicks on `.mobile-toggle`.

## 3. Verification
- [ ] Test desktop layout to ensure hero section is centered and looks premium.
- [ ] Test mobile layout (viewport < 768px) to verify mobile navigation functions and is fully responsive.
