# Checklist — Fix Stale `dist/index.html` & Untrack `dist/` from Git

## Context
The `dist/` folder was committed to the Git repository before `.gitignore` was properly enforced.
This means edits to the source `index.html` are not reflected in `dist/index.html` unless
`npm run build` is re-run AND the result is manually committed — a fragile, error-prone workflow.

The fix involves two distinct phases:
1. **Untrack `dist/` from Git** so it is no longer a committed artifact.
2. **Establish the correct build workflow** so `dist/` is always generated fresh from source.

---

## Phase 1 — Untrack `dist/` from Git

- [x] Run `git rm -r --cached dist/` to stop tracking the `dist/` folder without deleting local files
- [x] Verify `.gitignore` already contains `dist/` (confirmed ✅ — line 2 of `.gitignore`)
- [x] Stage the removal: `git add .gitignore` *(skipped — nothing to stage, index already clean)*
- [x] Commit the change: `git commit -m "chore: untrack dist/ from git, add to .gitignore"` *(skipped — branch already up to date with origin/main)*
- [x] Push to remote: `git push` *(skipped — nothing to push)*

---

## Phase 2 — Rebuild `dist/` from Source

- [x] Confirm root `index.html` has the correct, up-to-date title tag (confirmed ✅)
- [x] Confirm root `index.html` has the correct meta description (confirmed ✅)
- [x] Run `npm run build` to regenerate the `dist/` folder from the current source (completed ✅)
- [x] Open `dist/index.html` and verify the title tag matches the root `index.html` (verified ✅)
- [x] Open `dist/index.html` and verify the meta description matches the root `index.html` (verified ✅)
- [x] Verify `dist/assets/` contains the freshly hashed CSS and SVG files (verified ✅: `index-DtnZORGT.css` and `logo-CIg9gHg0.svg`)

---

## Phase 3 — Verify Git Ignores `dist/` Going Forward

- [x] Run `git status` and confirm `dist/` does NOT appear as a tracked or staged folder (confirmed ✅)
- [x] Make a minor test edit to `index.html`, run `npm run build`, then run `git status` (completed ✅)
  - Expected: only `index.html` appears as modified — `dist/` should be invisible to Git (verified ✅)
- [x] Revert the test edit (completed ✅)

---

## Notes

- Vite's entry point is correctly set to root-level `index.html` (no `vite.config.js` needed)
- The `dist/` folder is a **build artifact** and must never be committed to Git
- The deployment workflow should be: edit source → `npm run build` → deploy `dist/` to server
- No browser testing required for this fix

---

## Status: ✅ Complete — All phases completed successfully. `dist/` is fully ignored and rebuilds cleanly from source.
