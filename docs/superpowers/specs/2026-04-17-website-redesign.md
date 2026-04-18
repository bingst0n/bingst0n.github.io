# Website Redesign — Design Spec
**Date:** 2026-04-17  
**Status:** Approved

---

## Overview

Rebuild Harrison Green's personal website (`bingst0n.github.io`) as a single-page portfolio targeting professors, research collaborators, and professional contacts. The site should make a strong impression when linked in an email to a professor or pulled up by anyone who Googles his name.

**Tech stack:** Next.js (App Router) + TypeScript, keeping the existing GitHub Pages deployment pipeline. Tailwind is replaced with hand-written CSS custom properties that faithfully replicate the reference style.

---

## Visual Design

Directly adapted from `reference.html` in the project root. All design decisions inherit from that file unless noted.

**Colors:**
- `--bg: #0a0f0a` — near-black with a green whisper
- `--bg-elev: #0f1610` — cards and elevated surfaces
- `--bg-panel: #0c120c` — deep panels
- `--border: #1f3524` / `--border-bright: #2e5437`
- `--fg: #d6f5d6` — primary text (soft mint)
- `--fg-dim: #7aa884` — secondary text
- `--fg-muted: #4a6b52` — tertiary text
- `--accent: #00ff88` — phosphor green hero color

**Typography:**
- Display headings: `Fraunces` (weight 300/400 italic/600) — Google Fonts
- Body and code: `JetBrains Mono` (weight 400/500/700) — Google Fonts

**Atmosphere:**
- Scanline texture via `body::before` repeating-linear-gradient
- Radial ambient glow in top-center and bottom-right
- `background-attachment: fixed` on gradients

---

## Page Structure

Single scrolling page (`app/page.tsx`). No sub-routes used. All existing sub-pages (`/about`, `/awards`, etc.) can be left in place but are not linked.

### Navigation (sticky)
- Left: `~/harrison-green` logo in `--accent` with blinking cursor block
- Right: links → `[work]` `[about]` `[contact]` (brackets appear on hover)
- Background: `rgba(10,15,10,0.85)` with `backdrop-filter: blur(12px)`
- Sticks to top on scroll

### Hero
- Small label: `Portfolio · 2026` with phosphor square dot
- H1 (Fraunces 300): `Harrison` (regular) + `Green` (italic, `--accent`)
- Tagline (JetBrains Mono): comment line `// mathematician · musician · ai explorer`, then two lines of plain text
- Meta bar (below a border-top rule): pulsing green `● open to research collaboration`, LOC, school, math track

### 01 // Selected Work
Three project cards, each linking to the actual PDF/URL:
1. **Forward & Backward Propagation** — `/A_Mathematical_Analysis...pdf` — tags: calculus, neural networks, pdf — 2025
2. **Music Theory & Math** — Overleaf link — tags: music theory, algebra, manuscript — 2026
3. **CNN Literary Survey** — `/Literary_Survey...pdf` — tags: computer vision, ai, pdf — 2025

Card layout: `grid-template-columns: 80px 1fr auto`. Left border turns `--accent` on hover; card slides `translateX(4px)`; h3 turns accent on hover.

### 02 // About
Two-column grid: `1fr 1.4fr`.
- Left: `<dl>` card with fields: name, status (accent: "9th grade"), school, location, math track, mentor, interests
- Right: three prose paragraphs covering AI/math passion, IAM program, and outside interests

### 03 // Contact
Two-column grid: `1fr 1fr`.
- Left: Fraunces display lead — `"If you're researching something mathematically interesting, I'd love to hear from you."` (italic `mathematically interesting` in accent)
- Right: key/value link list — email (`harrisonrgreen@gmail.com`), github (`@bingst0n`)

### Footer
`© 2026 harrison green` · `avenues · class of 2029`

---

## Implementation Notes

- Remove all Tailwind utility classes from `app/page.tsx`; Tailwind can remain installed but will be unused
- Move all CSS into `app/globals.css` as custom properties + class rules, mirroring `reference.html`
- Add `Fraunces` and `JetBrains Mono` via `next/font/google` (replace `DM_Mono`)
- Remove existing animated components: `AnimatedGrid`, `FloatingGraphics`, `TypewriterName`, `ScrollReveal` — replace with CSS-only transitions
- Keep `framer-motion` only if needed for the blinking cursor; otherwise remove
- `.gitignore` must include `.superpowers/`
- `reference.html` can be deleted after implementation (it's a design artifact)

---

## Out of Scope

- Music, Mandarin, AI/coding sections — no real content available yet; add when ready
- Awards page, contact form, Mandarin page — existing sub-pages not linked, not removed
- Dark/light mode toggle
- Any CMS or content management layer
