# Reviews Section Blank on Server — Step-by-Step Fix Plan

## Root Cause Summary

`NEXT_PUBLIC_FEATURABLE_WIDGET_ID` is not set on the server. The code bails out immediately when the variable is missing, leaving the reviews array empty → blank space.

---

## Tasks

### ~~Step 1 — Add the environment variable on the server~~ ✅ DONE

**What:** Set `NEXT_PUBLIC_FEATURABLE_WIDGET_ID=3369465d-b82e-4b82-860d-0a704af1dcdf` in the deployment environment.

| Platform | Where to add it |
|---|---|
| Vercel | Dashboard → Project → Settings → Environment Variables |
| VPS / PM2 | `.env.production` file, then rebuild |
| Docker | `docker-compose.yml` env section or `-e` flag |

- [x] Variable added on the server (Vercel)
- [x] Redeploy / restart triggered after adding it

---

### Step 2 — Add a hard-coded fallback in `lib/reviews.ts` (Option B / safety net)

**What:** Change the `widgetId` line so the app never silently fails if the env var is missing.

**File:** `lib/reviews.ts` — line 43

```ts
// Before
const widgetId = process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID;

// After
const widgetId = process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID
  ?? '3369465d-b82e-4b82-860d-0a704af1dcdf';
```

> [!WARNING]
> Only apply this step if Step 1 alone does not resolve the issue, or as a permanent safety net. The widget ID is already public, so the security risk is minimal.

- [ ] Fallback added in `lib/reviews.ts`
- [ ] Build passes without TypeScript errors

---

### Step 3 — Fix: hide "Lire la suite" button for short reviews

**What:** The toggle button currently always renders, even for one-line reviews. Add a character-count guard so it only appears when `textEl` is long enough to be truncated.

**File:** `components/ReviewsSection.tsx` — around line 151

```tsx
// Only show the button when text is longer than ~120 characters
{textEl && textEl.length > 120 && (
  <button
    type="button"
    className="review-toggle"
    onClick={() => toggleExpand(idx)}
  >
    {isExpanded ? 'Réduire' : 'Lire la suite'}
  </button>
)}
```

- [ ] Button is conditionally rendered
- [ ] Short reviews no longer show an unnecessary toggle

---

### Step 4 — Tighten `meetsQualityFilter` to require both text AND rating

**What:** Currently a review with `starRating >= 4` but an empty comment passes the filter and renders a blank card body. Require both conditions.

**File:** `lib/reviews.ts` — line 42–49

```ts
// Before: return !!(hasText || hasHighRating);
// After:
return !!(hasText && hasHighRating);
```

- [ ] Filter updated
- [ ] No blank-body review cards appear in the carousel

---

### Step 5 — Verify on the live server

- [ ] Reviews section renders review cards (not blank space)
- [ ] 3 cards visible on desktop, 2 on tablet, 1 on mobile
- [ ] Prev / Next carousel buttons work correctly
- [ ] "Lire la suite" button only appears on long reviews
- [ ] No console errors related to the Featurable API
