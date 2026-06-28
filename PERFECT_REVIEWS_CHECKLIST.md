# Perfect Reviews Component - Blueprint & Checklist

Use this checklist as a blueprint whenever you need to recreate the "perfect" reviews section in future websites. This ensures you capture all the logic, user experience, and design details without missing anything.

## 1. Data Fetching & Quality Control
- [ ] **Fetch Data:** Connect to the reviews source (e.g., Google Places API or internal database).
- [ ] **Apply Strict Quality Filter:** Do not display all raw reviews. Filter the array to ONLY include:
  - [ ] Reviews that have an actual text comment (not just a rating).
  - [ ] **OR** reviews that have a high rating (e.g., 4 stars or above).

## 2. Layout & Navigation (The Carousel)
- [ ] **Avoid Endless Scrolling:** Implement a horizontal carousel or slider layout instead of a vertical list.
- [ ] **Navigation Controls:** Include clear "Next" and "Previous" buttons or arrows.
- [ ] **Index Management:** Use state management to track which slice of reviews is currently visible on the screen, updating it smoothly when navigation buttons are clicked.

## 3. The Review Card Details
- [ ] **Profile Picture:** Attempt to load the user's actual profile photo.
- [ ] **Smart Photo Fallback:** If the photo doesn't exist or fails to load, gracefully fall back to displaying the first letter of the user's name inside a styled, circular placeholder.
- [ ] **User Info:** Display the reviewer's display name clearly.
- [ ] **Date Formatting:** Convert raw database timestamps into a clean, human-readable date format (e.g., "June 28, 2026").

## 4. Star Rating Visuals
- [ ] **Dynamic Stars:** Create a visual 5-star element.
- [ ] **Data Binding:** Read the user's numeric rating and dynamically color/fill exactly that many stars (e.g., using a vibrant yellow/gold color like `#FBBC04`), leaving the rest empty.

## 5. Smart Text Handling (Truncation)
- [ ] **Uniform Card Heights:** Truncate long review comments by default so all cards maintain a consistent, neat layout.
- [ ] **Expand/Collapse Toggle:** Add a "Read more / Read less" button for truncated reviews.
- [ ] **Stateful Expansion:** Track which specific cards are expanded using state, ensuring that opening one card doesn't completely break the alignment of the entire row.

## 6. Styling & Polish
- [ ] **Scoped Styling:** Use modular/scoped CSS (like CSS Modules) to ensure these styles don't conflict with the rest of the website.
- [ ] **Micro-interactions:** Add subtle hover effects (like a slight lift or shadow increase) when the user hovers over a review card.
- [ ] **Smooth Transitions:** Ensure animations (sliding the carousel or expanding text) are smooth and visually pleasing.
