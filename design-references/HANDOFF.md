# Handoff: Astradite marketing site → Next.js

## Overview

A four-page marketing site for **Astradite Private Limited**, a software product studio. It presents the company and three products: DineOnTap (live), Wellness Axis (live) and Medico Nexus (in development). Primary goal is for a visitor to explore the products and reach their live sites; secondary is credibility for investors, partners and press.

## About the design files

The files in `design-references/` are **design references written in HTML** — prototypes that show intended look and behaviour. They are **not production code to copy**. They run on a bespoke in-browser component runtime (`support.js`), which has no place in a Next.js app.

The task is to **recreate these designs in Next.js** using its normal conventions. Open the HTML files in a browser to see the intended result, read them for exact values, and rebuild with React components, the App Router, and whatever styling layer the team prefers (Tailwind or CSS Modules both suit this design — every value needed is listed under Design tokens).

## Fidelity

**High fidelity.** Colours, type, spacing and motion are final. Recreate pixel-accurately. Copy is final and should be used verbatim.

## Target stack

- Next.js App Router, TypeScript, React Server Components where possible
- Four static routes — no data fetching, no database, no auth
- Fonts via `next/font/google`: **Syne** (600/700/800), **DM Sans** (400/500/600/700), **JetBrains Mono** (400/500)
- Deploy target is a static export or any Node host; nothing here needs a server runtime

## Routes

| Route | Source reference | Title |
| --- | --- | --- |
| `/` | `Astradite.dc.html` | Astradite — Stellar Intelligence. Applied. |
| `/products/dineontap` | `DineOnTap.dc.html` | DineOnTap — Astradite |
| `/products/wellness-axis` | `WellnessAxis.dc.html` | Wellness Axis — Astradite |
| `/products/medico-nexus` | `MedicoNexus.dc.html` | Medico Nexus — Astradite |

`Astradite Logo.dc.html` is a logo exploration sheet — reference only, do not build a route for it.

## Design tokens

Monochrome. There is no chromatic accent; hierarchy is carried entirely by luminance.

### Colour

| Token | Value | Use |
| --- | --- | --- |
| `bg` | `#000000` | Page background |
| `surface` | `#111111` | Raised cards, product mockup panels |
| `surface-2` | `#151515` | Inner panels inside a mockup |
| `surface-muted` | `rgba(28,28,28,0.4)` | Secondary buttons, team chips |
| `header-bg` | `rgba(8,8,8,0.86)` | Sticky header, with `backdrop-filter: blur(16px)` |
| `accent` | `#e8e8e8` | Buttons, badges, logo mark, eyebrow labels, links |
| `accent-bright` | `#ffffff` | Link hover, chip text, headline highlight |
| `ink` | `#ffffff` | Headings and primary text |
| `body` | `#a3a3a3` | Body copy |
| `dim` | `#7a7a7a` | Mono labels, metadata |
| `recessive` | `#8a8a8a` | Large ordinal numerals, "in progress" state |
| `hairline` | `rgba(232,232,232,0.12)` | Section dividers, card grid gaps |
| `on-light-bg` | `#f2f2f2` | Light-background logo panel (logo sheet only) |

Alpha variants of the accent in use: `0.10` `0.12` `0.14` `0.15` `0.16` `0.20` `0.26` `0.35` `0.40` `0.45`.

### Typography

| Role | Font | Size | Weight | Tracking | Leading |
| --- | --- | --- | --- | --- | --- |
| Hero H1 | Syne | `clamp(42px, 4.8vw, 58px)` | 800 | `-0.035em` | 0.96 |
| Product hero H1 | Syne | `clamp(40px, 4.6vw, 54px)` | 800 | `-0.035em` | 0.96 |
| Section H2 | Syne | `clamp(28px, 4.2vw, 50px)` | 700 | `-0.025em` | 1.05 |
| Product page H2 | Syne | `clamp(26px, 3.6vw, 42px)` | 700 | `-0.025em` | 1.06 |
| Product name (index) | Syne | `clamp(26px, 3.4vw, 40px)` | 800 | `-0.025em` | 1.05 |
| Product tagline | Syne | `clamp(19px, 2.4vw, 28px)` | 600 | `-0.02em` | 1.2 |
| Card H3 | Syne | 18–20px | 700 | — | — |
| Wordmark | Syne | 16–17px | 800 | `-0.01em` | — |
| Lede | DM Sans | `clamp(16px, 1.5vw, 19px)` | 400 | — | 1.6 |
| Body | DM Sans | 15px | 400 | — | 1.5 |
| Eyebrow | Syne | 11px | 700 | `0.1em` | uppercase |
| Mono label | JetBrains Mono | 10–13px | 400 | `0.08–0.14em` | uppercase |
| Large ordinal | JetBrains Mono | 28px | 400 | — | — |

Body copy uses `text-wrap: pretty`; the hero H1 uses `text-wrap: balance`.

### Spacing, radii, motion

- Section padding: `clamp(56px, 9vw, 104px)` block, 24px inline (home); `clamp(52px, 8vw, 96px)` on product pages
- Content max width: 1200px home, 1120px product pages
- Radii: 10px buttons · 12px chips/small cards · 14px inner panels · 16px callouts · 20–22px mockup shells · `9999px` pills
- Button padding `13px 22px`, `min-height: 44px`; nav button `9px 16px`
- Card grids are 1px-gap grids over a `hairline` background, so the gap itself draws the rules
- Transitions: 200ms ease on hover (opacity or background)
- Entrances: `rise` (26px up + fade) and `fadeIn`, `700–900ms`, `cubic-bezier(0.16, 1, 0.3, 1)`

## Page: Home (`/`)

### Scroll progress bar
Fixed, full width, 2px, `z-index: 60`. Track `rgba(232,232,232,0.08)`; fill `#e8e8e8` with `0 0 12px rgba(232,232,232,0.45)` glow. Width = `scrollY / (scrollHeight - innerHeight)`, updated in a `requestAnimationFrame`-throttled passive scroll listener.

### Header
Sticky, `z-index: 50`, `rgba(8,8,8,0.86)` + `backdrop-filter: blur(16px)`, 1px bottom hairline. Left: 20px star glyph + "Astradite" wordmark, linking to `#top`. Right: text links "What we do", "Products", "How we work" (`#a3a3a3`, white on hover) then a filled accent button "Get in touch" → `mailto:contact@astradite.com`.

### Hero
Two-column grid, `repeat(auto-fit, minmax(330px, 1fr))`, gap `clamp(40px, 6vw, 72px)`, padding `clamp(64px, 11vh, 132px)` top.

**Left column**, staggered `rise` entrances at 120/240/380/520/640ms:
- Eyebrow "Astradite Private Limited"
- H1 across three inline-block spans, each animating separately: "Stellar" / "Intelligence." / "Applied." — the third in `#e8e8e8`
- Lede (the company description), `max-width: 54ch`
- Buttons: "Explore the products" (filled, arrow icon) → `#products`; `contact@astradite.com` (mono, `surface-muted`) → mailto

**Right column** — a 460px-max square, `aspect-ratio: 1`:
- Three concentric circles at `inset: 0 / 15% / 29%`, 1px accent borders at 0.16/0.13/0.10 alpha
- A radial glow at `inset: 37%` running a 6s `breathe` animation (opacity 0.5→0.9, scale 1→1.06)
- The Astradite star mark, 116px, `fill: #e8e8e8`, centred
- Three product chips in orbit. Each is a wrapper at `inset: 0 / 15% / 17%` with `animation: spin Ns linear infinite` (46s / 62s / 84s; delays 0 / −22s / −52s), holding an absolutely-positioned child which itself counter-rotates with `spinBack` at the same duration and delay so the chip stays upright. Chips are `#111111`, radius 12px, with a mono status line ("01 · LIVE", "02 · LIVE", "03 · BUILDING") over the product name, and link to the product routes. They lift 2px on hover.

**Starfield.** A `<canvas>` filling the hero, behind everything. Density `(w * h / 8200) * starDensity` stars, each with random x, y, depth `z` and phase. Per frame: clear, then for each star draw an arc of radius `0.4 + z * 1.1` at alpha `(0.11 + z * 0.32) * twinkle` where `twinkle = 0.55 + 0.45 * sin(t/900 + phase)`; stars with `z > 0.88` are drawn in `#e8e8e8`, the rest `#ffffff`. Stars drift upward at `2.5 + z * 9` px/s, wrapping at the top. Roughly every 5–11s a shooting star crosses on a `(-0.16, 0.34)` velocity with a gradient tail three times its length, fading over 1.5s. Honour `prefers-reduced-motion` (no drift, no shooting stars) and resize via `ResizeObserver` with `devicePixelRatio` capped at 2.

In Next.js this is a client component — `'use client'`, canvas ref, rAF loop in `useEffect` with full cleanup.

### Stat strip
Three cells, `repeat(auto-fit, minmax(220px, 1fr))`, each a mono label over a value: PRODUCTS / "Two live, one in progress" · DOMAINS / "Hospitality, health, clinical networks" · BASED IN / "Kurnool, Andhra Pradesh, India".

### What we do (`#capabilities`)
Eyebrow, H2 "We build the whole product, not a piece of it." (`max-width: 22ch`), then a four-card 1px-gap grid, `minmax(280px, 1fr)`, each card `#000000` with 28px/26px padding: a mono ordinal, an H3, and a paragraph.

1. **Product engineering** — From first principle to shipped surface — architecture, data model, interface, deploy pipeline. One team carries it end to end.
2. **Applied intelligence** — Knowledge graphs, inference and recommendation layers that turn raw signal into a read someone can actually act on.
3. **Immersive systems** — Real-time, spatial and simulation-grade work for the problems where a flat screen stops being enough.
4. **High-velocity delivery** — Small teams, short loops, production from the first week. Velocity is an engineering property, not a promise.

### Products (`#products`)
Header row: eyebrow, H2 "Three things in orbit.", and a right-aligned paragraph — "Everything we ship is our own product first. Each one leaves behind infrastructure the next one starts from."

Then three `<article>` rows separated by hairlines, each a two-column grid (`minmax(280px, 1fr)`): left holds the ordinal, status pill, the linked product name and its tagline; right holds the description plus a "Read the case study" link and, where live, an external domain link. Status pills: LIVE in `#e8e8e8` on `rgba(232,232,232,0.15)`; IN PROGRESS in `#8a8a8a` on `rgba(138,138,138,0.18)`.

Descriptions:
- **DineOnTap** — A table orders, eats and leaves — and most restaurants learn nothing from it. DineOnTap turns a QR code on the table into a live menu, a kitchen ticket, and a picture of who keeps coming back.
- **Wellness Axis** — You can log everything and still not know what any of it did. Wellness Axis runs your food, activity and sleep through a knowledge graph and projects a signed impact score against the conditions you actually live with.
- **Medico Nexus** — Medicine is a collective discipline, practiced alone. Medico Nexus is a network where a clinician can pose a de-identified case and reach the peers who have already seen it. In progress.

### How we work (`#process`)
Eyebrow, H2 "Four moves, repeated until it holds.", then a four-cell 1px-gap grid (`minmax(250px, 1fr)`). Each cell: a 28px mono ordinal in `#8a8a8a`, an H3, a paragraph.

1. **Observe** — We start inside the problem, not the pitch — the constraints, the users, the systems already in the room.
2. **Architect** — A model of the domain before a line of product code. Data first, interface second, never the reverse.
3. **Ship** — Something real in front of real users early, then tightened in short loops against how they actually use it.
4. **Compound** — What one product proves, the next one inherits. Nothing is rebuilt twice.

### Contact (`#contact`)
Two columns. Left: eyebrow, H2 "Tell us what you're building.", and a large mono mailto link with a bottom border. Right: two hairline-topped blocks — THE TEAM (pill chips: Akshanth V, Chandrahas Chatta, Teja Manne) and REGISTERED OFFICE (1/22, Mamidalapadu / Kurnool — 518004 / Andhra Pradesh, India).

### Footer
Hairline top; star glyph + "Astradite Private Limited" left, "Stellar Intelligence. Applied." in mono right.

## Product pages — shared structure

All three follow one template. Differences are content plus the hero mockup.

1. **Header** — same as home, with "/ ProductName" appended after the wordmark in `#7a7a7a`; right side is "All products" → `/#products` plus a primary button (external product link, or "Get early access" mailto for Medico Nexus).
2. **Hero** — two columns, `minmax(440px, 1fr)`. Left: "PRODUCT 0N" + status pill, H1, tagline, description, two buttons ("Visit the product" / "How it's built" → `#build`). Right: the product mockup.
3. **Stat strip** — three mono-labelled cells.
4. **The problem** — eyebrow + H2 left, two paragraphs right.
5. **What we built** (`#build`) — eyebrow, H2, three-card 1px-gap grid, each with a 22px stroked SVG icon (1.6 stroke, round caps), H3 and paragraph.
6. **Flow / axes / status** — eyebrow, H2, a four- or three-column list where each item has a 2px top rule, a mono step label, H3 and paragraph.
7. **Closing** — H2 and CTA buttons left; a "NEXT IN ORBIT" card (`rgba(28,28,28,0.35)`, radius 16px) linking to the next product right.
8. **Footer** — same as home.

### DineOnTap
Status LIVE. Tagline "Scan. Order. Know your customers." Stats: Restaurants & hospitality / Live in production / Guest web, kitchen, owner console.

Mockup — a 320px phone-ish panel: "TABLE 07" and an "OPEN TAB" indicator with a pinging dot; an order card listing `2 × Ghee Roast Dosa ₹360`, `1 × Filter Coffee ₹60`, a hairline, `Total ₹420`, and a filled "Send to kitchen" button; below it a "RECOGNISED GUEST" card reading "4th visit this month · usually orders filter coffee".

What we built: **A menu that's never wrong** (QR grid icon), **Orders straight to the pass** (list icon), **The guest you didn't know you had** (bar chart icon).

Flow: Scan → Order → Fire → Learn.

### Wellness Axis
Status LIVE. Tagline "Health conditions, decoded across food, activity and sleep." Stats: Consumer health / Live in production / Condition knowledge graph.

Mockup — a 340px card: "TODAY'S AXIS", a 44px score `+62` with "net impact"; three labelled bars — Food `+31` at 72%, Activity `+24` at 56%, Sleep `−7` at 22% (the negative bar and its value in `#8a8a8a`). Bars animate width with a `grow` transform at 500/620/740ms delays. Below a hairline, "AGAINST YOUR CONDITIONS" with pills: Type 2 diabetes, Hypertension.

What we built: **The condition graph** (node graph icon), **A signed impact score** (line chart icon), **Guidance that knows you** (heart icon).

Three axes: Food, Activity, Sleep.

### Medico Nexus
Status IN PROGRESS, in `#8a8a8a`. Tagline "Every case, a colleague away." Stats: Clinical networks / In active development / Verified clinicians only.

Mockup — a 360px card: "CASE #0412 · DE-IDENTIFIED" with a pinging dot; the case text ("Persistent post-prandial tachycardia, 34F, normal echo, thyroid panel unremarkable. Anyone seen this pattern resolve without beta-blockade?"); specialty pills Cardiology and Internal medicine; then two replies, each an initials avatar (RK, AN) with a credential line and a short response.

What we're building: **De-identified by construction** (shield icon), **Routing, not broadcasting** (magnifier icon), **A record that accumulates** (document icon).

Status track: Domain model (DONE) · Privacy architecture (DONE) · Case routing (IN BUILD, `#8a8a8a` rule) · Closed pilot (NEXT, faint rule).

## Interactions & behaviour

- **Hover** — nav links `#a3a3a3` → `#ffffff`; filled buttons drop to `opacity: 0.9`; secondary buttons deepen background; product chips and orbit cards translate up 2px; product names go `#ffffff` → `#e8e8e8`.
- **Scroll entrances** — the references use CSS `animation-timeline: view()`, which is Chromium-only. In Next.js, reimplement with an `IntersectionObserver` hook that adds a class on first intersection, keeping the same 700ms `cubic-bezier(0.16, 1, 0.3, 1)` and 0/80/160/240ms stagger.
- **Reduced motion** — must disable the starfield drift, shooting stars, orbit rotation and entrance transforms under `prefers-reduced-motion: reduce`.
- **Anchors** — `scroll-behavior: smooth` on `html`; cross-page anchors like `/#products` must land correctly on load.
- **Responsive** — every grid uses `auto-fit` + `minmax`, so it collapses without breakpoints. Verify at 375px that no headline overflows: the `clamp()` maxima (58px home, 54px product) were tuned for this.

## State

None beyond local UI state. Scroll progress and the canvas animation live in client components; everything else is static. No data fetching, no forms — every action is a `mailto:` or an outbound link.

## Assets

- **Logo mark** — inline SVG, no image file. Path on a 24×24 viewBox: `M12 1.8l2.3 7.6 7.6 2.3-7.6 2.3L12 21.6l-2.3-7.6L2.1 11.7l7.6-2.3z`. The 116px hero version uses a 100×100 viewBox: `M50 3 Q56 44 92 50 Q56 56 50 97 Q44 56 8 50 Q44 44 50 3 Z`. Ship as a React component taking `size` and `fill`.
- **Icons** — all inline SVG, 24×24 viewBox, `stroke-width: 1.6`, round caps and joins. Extract from the reference files; no icon library needed.
- **Photography** — none. The design is deliberately typographic.
- Favicon and OG image still need producing — the star mark on `#000000` is the obvious source.

## Outstanding

- Copy beyond the supplied facts (capability descriptions, product narratives, the Medico Nexus roadmap) was written for the design and should be confirmed against reality before launch.
- No privacy policy, terms, or cookie handling exists yet.
- The Medico Nexus roadmap stages are illustrative.

## Files

```
design-references/
  Astradite.dc.html        home page
  DineOnTap.dc.html        product case study
  WellnessAxis.dc.html     product case study
  MedicoNexus.dc.html      product case study
  Astradite Logo.dc.html   logo exploration sheet (reference only)
  support.js               runtime for the reference files — do not port
```

Open any `.dc.html` directly in a browser to view the design. Read the file source for exact values; the markup is inline-styled, so every number above appears literally in it.
