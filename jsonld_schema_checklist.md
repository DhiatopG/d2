# ✅ JSON-LD Schema Markup — Task Checklist

**Feature**: Add `Dentist` structured data (JSON-LD) to `<head>`
**Target file**: `index.html`
**Date**: 2026-06-27

---

## Pre-flight

- [x] Confirm `index.html` `<head>` closes at line 17 (verified ✓)
- [x] Confirm no existing `<script type="application/ld+json">` block already present in `<head>` (none found ✓)
- [x] Confirm business data is accurate:
  - [x] Name: `Cabinet dentaire Dr rezgui Houssem`
  - [x] Phone: `+21650149159`
  - [x] Address: `23 Av. Iben Kholdoun, Tunis 1064, TN`
  - [x] Geo: `lat 36.83983244399368 / lng 10.115723750320473`
  - [x] Opening hours (Mon–Sat) reviewed and approved by user

---

## Implementation

- [x] Insert `<script type="application/ld+json">` block immediately **before** `</head>` (line 17 in `index.html`) ✓
- [x] Ensure the JSON is valid (no trailing commas, correct bracket nesting) ✓

---

## Verification

- [ ] View page source after save — confirm block is inside `<head>`
- [ ] Run JSON through Google Rich Results Test once deployed
- [ ] Confirm no layout or console errors introduced

---

## Status

> 🟡 **Awaiting user approval** — implementation not started
