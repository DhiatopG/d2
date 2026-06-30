# SEO Verification Guide

This guide helps you verify all SEO-critical elements are correct before deploying to avoid Google penalties or confusion.

## Verification Checklist

### 1. Clinic Name Consistency (Critical)

**Correct name:** Cabinet dentaire Dr rezgui Houssem

**Search in your IDE for these patterns:**

- Search: "Aurelia Clinic"
  - Should find: 0 results in code files (only in documentation/checklists is OK)

- Search: "Cabinet Dr rezgui Houssem" (without "dentaire")
  - Should find: 0 results in code files (only in documentation/checklists is OK)

- Search: "Cabinet Dr Rezgui Houssem" (capital R)
  - Should find: 0 results in code files (only in documentation/checklists is OK)

- Search: "Cabinet dentaire Dr rezgui Houssem"
  - Should find: Multiple results in SEO-critical files (this is correct)

### 2. SEO-Critical Files to Verify

**app/layout.tsx** (Metadata & Schema)
- [ ] Line 8 (title): Contains "Cabinet dentaire Dr rezgui Houssem"
- [ ] Line 9 (description): Contains "Cabinet dentaire Dr rezgui Houssem"
- [ ] Line 14 (og:title): Contains "Cabinet dentaire Dr rezgui Houssem"
- [ ] Line 24 (og:description): Contains "Cabinet dentaire Dr rezgui Houssem"
- [ ] Line 26 (og:siteName): Contains "Cabinet dentaire Dr rezgui Houssem"
- [ ] Line 30 (twitter:title): Contains "Cabinet dentaire Dr rezgui Houssem"
- [ ] Line 31 (twitter:description): Contains "Cabinet dentaire Dr rezgui Houssem"
- [ ] Line 43 (twitter:image:alt): Contains "Cabinet dentaire Dr rezgui Houssem"
- [ ] Line 50 (jsonLd name): Contains "Cabinet dentaire Dr rezgui Houssem"

**components/Header.tsx**
- [ ] Line 20 (logo alt): Contains "Cabinet dentaire Dr rezgui Houssem Logo"

**components/LocationSection.tsx**
- [ ] Line 27 (heading): Contains "Cabinet dentaire Dr rezgui Houssem"
- [ ] Line 43 (aria-label): Contains "Cabinet dentaire Dr rezgui Houssem Location Map"
- [ ] Line 39 (Google Maps URL): Contains "Cabinet%20dentaire%20Dr%20rezgui%20Houssem"

**components/Footer.tsx**
- [ ] Line 7 (logo link): Contains "Cabinet dentaire Dr rezgui Houssem"
- [ ] Line 52 (copyright): Contains "Cabinet dentaire Dr rezgui Houssem"

### 3. Additional SEO Checks

**Canonical URL**
- [ ] layout.tsx line 11: canonical URL is `https://www.smilevip.net/`

**JSON-LD Schema**
- [ ] layout.tsx lines 47-78: Schema.org Dentist markup is present
- [ ] Schema name matches: "Cabinet dentaire Dr rezgui Houssem"
- [ ] Schema address is correct: "23 Av. Iben Kholdoun, 1064 Tunis, Tunisie"
- [ ] Schema phone is correct: "+21650149159"
- [ ] Schema coordinates are correct: lat 36.83983244399368 / lng 10.115723750320473

**Open Graph & Twitter Cards**
- [ ] og:image points to valid image: `https://www.smilevip.net/og-image.png`
- [ ] og:locale is correct: `fr_TN`
- [ ] twitter:card is set to: `summary_large_image`

### 4. Pre-Deployment Verification Tools

**Browser DevTools:**
1. Open your site in browser
2. Press F12 → Network tab
3. Refresh page
4. Check that all resources load (no 404s)
5. Check Response Headers for proper meta tags

**Google Rich Results Test:**
1. Go to: https://search.google.com/test/rich-results
2. Enter your URL: https://www.smilevip.net/
3. Verify JSON-LD schema is detected correctly
4. Verify no errors in schema markup

**Facebook Sharing Debugger:**
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your URL
3. Verify og:title, og:description, og:image are correct

**Twitter Card Validator:**
1. Go to: https://cards-dev.twitter.com/validator
2. Enter your URL
3. Verify twitter:title, twitter:description, twitter:image are correct

### 5. Common SEO Pitfalls to Avoid

❌ **Don't do:**
- Use different clinic names in different places
- Have inconsistent capitalization (Rezgui vs rezgui)
- Forget "dentaire" in the name
- Have broken canonical URLs
- Have missing or incorrect schema markup
- Have 404 errors on critical assets (favicon, og-image)

✅ **Do:**
- Keep clinic name 100% consistent across all SEO elements
- Use lowercase "r" in "rezgui"
- Always include "dentaire" in the full name
- Verify schema markup with Google's tools
- Test social sharing cards before deployment
- Check for 404 errors on all assets

## Summary

**Before deploying, ensure:**
1. All clinic name references are identical: "Cabinet dentaire Dr rezgui Houssem"
2. No "Aurelia Clinic" references in code files
3. No "Cabinet Dr rezgui Houssem" (missing "dentaire") in code files
4. No "Cabinet Dr Rezgui Houssem" (capital R) in code files
5. Schema markup validates with Google Rich Results Test
6. Social sharing cards display correctly
