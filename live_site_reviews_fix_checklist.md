# Fix Reviews Missing on Live Site - Checklist

Use this checklist to fix the issue where the Featurable reviews widget appears on localhost but fails to load on the live deployed site.

## 1. Understand the Root Cause
- [ ] **Identify the Bug:** The reviews widget depends on `import.meta.env.VITE_FEATURABLE_WIDGET_ID`.
- [ ] **Acknowledge the Build Process:** The `.env` file is excluded from version control (via `.gitignore`), meaning it is unavailable to the hosting provider (e.g., Vercel, Netlify) during the remote build process.
- [ ] **Observe the Silent Failure:** Because `widgetId` evaluates to `undefined` during the production build, the script hits the `if (!widgetId) return;` block and silently clears the review skeletons.

## 2. Choose the Fix Strategy
- [ ] **Option 1 (Recommended): Add to Hosting Provider**
  - Log into your hosting provider's dashboard.
  - Navigate to the project's Environment Variables settings.
  - Add `VITE_FEATURABLE_WIDGET_ID` with your actual widget ID (e.g., `3369465d-b82e-4b82-860d-0a704af1dcdf`).
  - Trigger a new deployment.
- [ ] **Option 2: Hardcode in Source**
  - Open `index.js`.
  - Replace `const widgetId = import.meta.env.VITE_FEATURABLE_WIDGET_ID;` with `const widgetId = "3369465d-b82e-4b82-860d-0a704af1dcdf";`.
  - *Note:* Since the widget ID is exposed in public network requests anyway, there is no security risk in hardcoding it.

## 3. Verification & Deployment
- [ ] **Local Verification (Optional):** If using Option 2, run `npm run build` locally and ensure the build succeeds.
- [ ] **Commit Changes:** Push any code changes to your repository.
- [ ] **Verify on Live Site:** Open the live URL, hard-refresh the browser, and ensure the reviews fetch successfully.
