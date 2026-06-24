# Dental Clinic Homepage — Clinical Luxury Implementation Checklist

This checklist outlines the steps to build the frontend-only, modern, clinical luxury dental clinic homepage based on the design requirements.

## 1. Project Initialization & Setup
- [x] Initialize a frontend project structure (e.g., using pure HTML/CSS/JS or Vite/React/TS if requested later).
- [x] Set up the stylesheet (`index.css` or equivalent) with the design tokens.
- [x] Configure typography:
  - Serif Display font (e.g., *Playfair Display*, *Cinzel*, or *Prata* via Google Fonts) for headings.
  - Sans-serif font (e.g., *Inter*, *DM Sans*, or *Montserrat*) for body text and labels.

## 2. Visual Identity & Styling Base (`index.css`)
- [x] Define CSS Custom Properties (Variables):
  - Primary Background (Obsidian Black): `#121316`
  - Accent Color (Gold): `#C9A84C`
  - Surface & Text (Pure White): `#FFFFFF`
  - Muted Text (Muted White/Silver): `rgba(255, 255, 255, 0.7)` or `#E0E0E0`
- [x] Apply global rules:
  - Zero clutter, generous white space (editorial layouts).
  - No rounded corners on bordered elements (e.g., `border-radius: 0;`).
  - No gradients.
  - No drop shadows except for a subtle, high-end shadow on cards if necessary.

## 3. Navigation Bar Component
- [x] Implement a transparent, absolute-positioned navigation bar overlaying the Hero.
- [x] Add the clinic logo/branding link (Serif font).
- [x] Add navigation links (Sans-serif, uppercase, clean spacing, white text).
- [x] Add a "Book Now" CTA button on the right (gold border, sharp corners, transition effect).
- [x] Ensure mobile responsiveness with a clean, luxury-themed hamburger menu or toggle.

## 4. Hero / Headline Zone & Trust Bar
- [x] **Split Two-Column Layout**:
    - [x] **Left Side**:
      - [x] Thin gold horizontal line (`#C9A84C`) above the headline.
      - [x] Powerful multi-word headline in Serif.
      - [x] One-line subtext in muted white.
      - [x] Gold-outlined "Book a Consultation" CTA button with sharp corners (hover state: background turns gold or fills with white text).
    - [x] **Right Side**:
      - [x] Tall, full-height editorial image container (using `object-fit: cover` and sharp edges) for a high-end smile/clinic interior photo.
- [x] **Horizontal Trust Bar (Below the Split)**:
    - [x] Three stats (e.g., Years of Experience, Patients Treated, Satisfaction Rating).
    - [x] Separated by thin vertical gold dividers (`#C9A84C`).
    - [x] Responsive behavior (stacks clean on mobile).

## 5. Our Dental Services Section
- [x] Set primary background to Dark Navy (`#0B1F3A`).
- [x] Add centered white Serif headline with a short gold underline accent.
- [x] Build a 3-column card grid:
  - [x] Service Cards (Implants, Veneers, Whitening, Orthodontics, Oral Surgery, General Care).
  - [x] Each card contains:
    - [x] Thin gold icon at the top.
    - [x] Service name in white Serif.
    - [x] One-line description in muted white.
- [x] **Hover Effect**:
  - [x] Cards transition to a gold 1px border.
  - [x] Cards get a slight upward translate (micro-animation).

## 6. Areas Served Section
- [x] Set background to Pure White (`#FFFFFF`).
- [x] Add centered Serif headline (navy or gold text) with a gold underline.
- [x] Build pill tags in a flowing wrap layout (`display: flex; flex-wrap: wrap;`):
  - [x] Minimal outlined pill tags in Navy text/borders or Navy background with Gold borders (sharp edges).
- [x] Add a closing line beneath the tags in small, muted text detailing clinic accessibility and location.

## 7. Responsiveness & Quality Assurance (QA)
- [ ] Test fluid responsive scaling (from mobile screens up to wide desktops).
- [ ] Verify hover transitions and button micro-interactions.
- [ ] Ensure text contrast is readable and meets accessibility standards.
