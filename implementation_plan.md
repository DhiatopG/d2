# Remove Duplicate Services & Areas Sections

The homepage currently has duplicate sections: the newly added SEO block contains cards for "Our Dental Services" and "Areas Served," but the old full-width sections for "#services" and "#areas" still exist below it. This plan outlines how to remove the old sections, clean up their CSS styles in `index.css`, and re-route anchor links.

## Steps

### Step 1 — Clean HTML Structure
Remove the old duplicate sections and add the corresponding section anchors (`id`) to the new SEO cards:
- Delete `<section id="services">` (lines 116–193 in `index.html`).
- Delete `<section id="areas">` (lines 195–218 in `index.html`).
- Assign `id="services"` to the first SEO card (Our Dental Services) to preserve navigation anchor links.
- Assign `id="areas"` to the second SEO card (Areas Served) to preserve navigation anchor links.

### Step 2 — Clean CSS Stylesheet
Remove obsolete CSS styles from `index.css` to keep the codebase tidy:
- Delete `.services-section` and all related styles (lines 435–540 in `index.css`).
- Delete `.areas-section` and all related styles (lines 542–611 in `index.css`).

### Step 3 — Verification
Verify the layout, style compilation, and navigation functionality:
- Ensure the dev server runs without errors.
- Confirm the old, duplicate sections are gone.
- Test that header and footer navigation links scroll smoothly to the new cards.
