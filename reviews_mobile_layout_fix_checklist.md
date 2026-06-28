# Fix Reviews Carousel Mobile Display Checklist

## Diagnosis
The reviews carousel currently shows parts of two reviews on mobile during initial load, and only corrects itself after clicking the "next" button. In `index.js`, the carousel scrolling is handled by calculating the distance of the target card from its container:
```javascript
const offset = offsetCard ? offsetCard.offsetLeft : 0;
reviewsContainer.style.transform = `translateX(-${offset}px)`;
```
However, the `offsetLeft` property relies on the nearest "positioned" ancestor. Since `.reviews-carousel-track` does not have a position defined, the browser resolves `offsetLeft` relative to the document `<body>`. 
This results in the first card returning a non-zero offset (due to page margins/padding), causing the entire track to shift slightly to the left on the initial load and misaligning the cards. 

## Action Plan

- [ ] **Update `index.css`**: Add `position: relative;` to the `.reviews-carousel-track` class. This will make it the `offsetParent` for the review cards, ensuring that `cards[0].offsetLeft` is exactly `0` and subsequent cards calculate their offsets accurately based on their distance within the track.

```diff
 .reviews-carousel-track {
     display: flex;
     gap: 1.25rem;
     transition: transform 0.4s ease;
+    position: relative;
 }
```

- [ ] **Verify**: Ensure that the mobile view does not show half of two reviews on initial load. (Browser testing is skipped for this phase as per user request).
