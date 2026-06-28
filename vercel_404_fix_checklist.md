# Vercel 404 Fix Checklist
## Cabinet Dr Rezgui Houssem — Next.js Deployment on Vercel

> **Status:** Root cause identified. Ready to fix. Awaiting implementation approval.

---

## Root Cause — Confirmed

> **The `.next/` build folder was committed to Git.**
> Vercel runs its own `next build` on your code. When it finds a pre-committed `.next/` folder
> full of stale local build artifacts, it gets confused and cannot serve any routes — causing 404.

| Problem | Confirmed? | Fix |
|---|---|---|
| `.next/` folder committed to GitHub | ✅ YES — found in last commit (`444 files`) | Remove from git, add to `.gitignore` |
| `next-temp/` scaffold folder committed | ✅ YES — leftover from `create-next-app` | Remove from git entirely |
| `.gitignore` missing `.next/` entry | ✅ YES | Add `.next/` to `.gitignore` |
| `.gitignore` missing `.env.local` entry | ✅ YES | Add `.env.local` to `.gitignore` |
| Framework preset = Next.js on Vercel | ✅ Already done by user | No action needed |

---

## Phase 1 — Fix `.gitignore`

- [ ] Open `.gitignore` and replace its content with:
  ```
  node_modules/
  dist/
  .next/
  out/
  .env
  .env.local
  .env*.local
  .DS_Store
  next-temp/
  ```

---

## Phase 2 — Remove `.next/` from Git Tracking

Run this command to stop tracking `.next/` (does NOT delete the folder locally):
```powershell
git rm -r --cached .next
```

---

## Phase 3 — Remove `next-temp/` from Git

This is a leftover scaffold folder. Remove it entirely:
```powershell
git rm -r --cached next-temp
```
Then delete it locally:
```powershell
Remove-Item -Recurse -Force next-temp
```

---

## Phase 4 — Commit and Push the Fix

```powershell
git add .gitignore
git add -A
git commit -m "fix: remove .next build artifacts and next-temp from git, update gitignore"
git push
```

---

## Phase 5 — Verify on Vercel Dashboard

After push, Vercel auto-triggers a new deployment:

- [ ] Go to Vercel dashboard → **Deployments** tab
- [ ] Open the new deployment → check **Build Logs**
- [ ] Build log should show:
  - `Installing dependencies...`
  - `Running next build`
  - `✓ Compiled successfully`
  - No errors
- [ ] Live URL returns the homepage (not 404)

---

## Phase 6 — Add Env Var to Vercel (if Reviews still fail)

- [ ] Vercel Dashboard → **Settings** → **Environment Variables**
- [ ] Add: `NEXT_PUBLIC_FEATURABLE_WIDGET_ID` = (value from your local `.env.local`)
- [ ] Set for: **Production**, **Preview**, **Development**
- [ ] Redeploy after adding the var

---

## Summary — 3 Commands That Fix Everything

```powershell
git rm -r --cached .next
git rm -r --cached next-temp
Remove-Item -Recurse -Force next-temp
```
Then update `.gitignore`, commit, and push.
