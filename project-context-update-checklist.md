# PROJECT_CONTEXT.md Update Checklist

This checklist updates the PROJECT_CONTEXT.md file to reflect the correct clinic name and current tech stack.

## Target File

**File to update:** `.agents\PROJECT_CONTEXT.md`

## Clinic Name Corrections

**Correct name:** Cabinet dentaire Dr rezgui Houssem (lowercase "r" in rezgui)

### Lines to Update

- [ ] Line 11: Change "Cabinet dentaire Dr **R**ezgui Houssem" → "Cabinet dentaire Dr **r**ezgui Houssem"
- [ ] Line 68: Change "Cabinet Dr **R**ezgui Houssem" → "Cabinet dentaire Dr **r**ezgui Houssem" (add "dentaire")
- [ ] Line 76: Change "Cabinet dentaire Dr **R**ezgui Houssem" → "Cabinet dentaire Dr **r**ezgui Houssem"
- [ ] Line 80: Change "Cabinet Dr **R**ezgui Houssem" → "Cabinet dentaire Dr **r**ezgui Houssem" (add "dentaire")
- [ ] Line 83: Change "Cabinet dentaire Dr **R**ezgui Houssem" → "Cabinet dentaire Dr **r**ezgui Houssem"
- [ ] Line 125: Change "Dr **R**ezgui Houssem" → "Dr **r**ezgui Houssem"

---

## Tech Stack Updates

**Current (outdated):** Vite + HTML + Vanilla CSS + Vanilla JS
**Actual (current):** Next.js 15 (App Router) + React + TypeScript

### Lines to Update

**Tech Stack Section (lines 19-31)**
- [ ] Line 23: Change "Vite ^5.0.0" → "Next.js ^16.2.9"
- [ ] Line 24: Change "HTML — Structure (index.html at root)" → "React — Components in app/ directory"
- [ ] Line 25: Change "Vanilla CSS — Styles (index.css at root)" → "Tailwind CSS — Utility-first styling"
- [ ] Line 26: Change "Vanilla JS — Interactions (index.js at root)" → "TypeScript — Type-safe React components"

**Commands Section**
- [ ] Line 29: Change "Dev server: npm run dev" → "Dev server: npm run dev" (same, keep)
- [ ] Line 30: Change "Production build: npm run build → output to dist/" → "Production build: npm run build → output to .next/"
- [ ] Line 31: Change "Preview build: npm run preview" → "Preview build: npm run start" (production server)

**Key Files & Paths Section (lines 35-56)**
- [ ] Update entire file structure to reflect Next.js App Router:
  ```
  c:\Users\dell\d2\
  ├── app\
  │   ├── layout.tsx      ← Root layout with metadata
  │   ├── page.tsx        ← Home page
  │   └── globals.css     ← Global styles
  ├── components\         ← React components
  │   ├── Header.tsx
  │   ├── Footer.tsx
  │   ├── LocationSection.tsx
  │   └── WhatsAppFab.tsx
  ├── public\             ← Static assets
  │   ├── logo.svg
  │   ├── og-image.png
  │   ├── favicon.ico
  │   ├── favicon-16x16.png
  │   ├── favicon-32x32.png
  │   ├── apple-touch-icon.png
  │   ├── robots.txt
  │   └── sitemap.xml
  ├── package.json
  ├── next.config.mjs
  ├── tailwind.config.ts
  └── tsconfig.json
  ```

**<head> Current State Section (lines 60-95)**
- [ ] Update to reflect Next.js metadata API (not raw HTML meta tags)
- [ ] Note that metadata is defined in app/layout.tsx using Metadata object
- [ ] Update JSON-LD section to reflect it's in layout.tsx jsonLd object

---

## Summary

**Total Changes:**
- 6 clinic name corrections (capitalization + missing "dentaire")
- 4 tech stack updates
- 3 command updates
- 1 file structure update
- 2 metadata section updates

**Impact:** Ensures PROJECT_CONTEXT.md remains accurate as the single source of truth for the project.
