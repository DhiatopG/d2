# Section Reorder Checklist

Use this checklist to fix the layout issue where the "Reviews" section is incorrectly placed between the "Location Info" and the "Map".

## 1. Goal
- Fix the structural flow of the homepage.
- Move the `reviews` section so that the location text (Visitez Notre Clinique) and the Map sit directly adjacent to one another.

## 2. Implementation Steps
- [ ] **Open `index.html`**: Locate the main `index.html` file in the project root.
- [ ] **Find the Target Sections**:
  - `section.location-info` (Visitez Notre Clinique...)
  - `section#reviews` (TÉMOIGNAGES...)
  - `section#location-map` (The embedded map)
- [ ] **Reorder the HTML**:
  - Cut the entire `<section id="reviews">...</section>` block.
  - Paste it **before** the `<section class="location-info">` (so reviews flow before the location details).
  - *Note*: This keeps the "Location Info" and "Map" tightly coupled, leading into the "Consultation Booking".

## 3. Verification
- [ ] Run `npm run dev` to start the local development server.
- [ ] Verify visually that the Location title, subtitle, and Map are contiguous without the Reviews section splitting them.
- [ ] Verify that the Reviews section displays correctly in its new position.
