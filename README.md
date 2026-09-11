# Astradite

Marketing site for **Astradite Private Limited** — a software product studio in
Kurnool, Andhra Pradesh. Four static pages: the company, and case studies for
DineOnTap, Wellness Axis and Medico Nexus.

Built from the design handoff in `design-references/` (HTML prototypes, not
production code) and rebuilt in Next.js per that brief.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- CSS Modules + a global token layer — no CSS framework
- `next/font/google` for Syne, DM Sans and JetBrains Mono
- No runtime dependencies beyond Next.js itself. Every icon and the logo are
  inline SVG; there are no images.

Every route prerenders to static HTML. There is no data fetching, no API route,
no database and no auth — every action is a `mailto:` or an outbound link.

## Routes

| Route | Page |
| --- | --- |
| `/` | Astradite — Stellar Intelligence. Applied. |
| `/products/dineontap` | DineOnTap |
| `/products/wellness-axis` | Wellness Axis |
| `/products/medico-nexus` | Medico Nexus |

Plus generated `sitemap.xml`, `robots.txt`, `icon.svg` and `opengraph-image`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

## Design system

Tokens live on `:root` in `app/globals.css`. The palette is deliberately
monochrome — hierarchy is carried entirely by luminance, and there is no
chromatic accent anywhere.

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#000000` | Page background |
| `--surface` / `--surface-2` | `#111111` / `#151515` | Cards, mockup panels |
| `--surface-muted` | `rgba(28,28,28,0.4)` | Secondary buttons |
| `--header-bg` | `rgba(8,8,8,0.86)` | Sticky header (blur 16px) |
| `--accent` / `--accent-bright` | `#e8e8e8` / `#ffffff` | Buttons, badges, links |
| `--ink` / `--body` | `#ffffff` / `#a3a3a3` | Headings / body copy |
| `--dim` / `--recessive` / `--pending` | `#7a7a7a` / `#8a8a8a` / `#b0b0b0` | Metadata, ordinals, in-progress |
| `--hairline` | `rgba(232,232,232,0.12)` | Dividers and 1px-gap card grids |

`#7a7a7a` on `#000000` is the contrast floor at ~4.9:1 — nothing goes dimmer.

## Layout rules

No media queries anywhere. Every grid is `auto-fit` + `minmax()` and every type
scale is `clamp()`, so the site reflows from 320px to 2560px on its own. Grid
minimums are wrapped in `min(…, 100%)` so a track can never be wider than its
container.

Two clamp floors scale below ~467px (home H1) and ~445px (product H1) — at a
fixed floor, `Intelligence.` and `DineOnTap` are individually wider than the
content box at 375px. The product H1 resolves to the design's original
`clamp(40px, 4.6vw, 54px)` above that width.

The home H1 runs `clamp(min(42px, 9vw), 6vw, 76px)`. The design's 58px ceiling
was tuned for the ~540px column beside the old hero art; with the hero spanning
the full 1152px shell, 76px puts "Stellar Intelligence." at ~1060px of the
measure so the headline fills the width rather than stranding it. It breaks over
two lines from ~700px up, three below.

## Motion

Three client components carry all the motion; everything else is a server
component.

- `Starfield` — canvas starfield with upward drift, twinkle and a shooting star
  every 5–11s. `ResizeObserver` for sizing, `devicePixelRatio` capped at 2.
- `ScrollProgress` — rAF-throttled passive scroll listener.
- `Reveal` — entrance wrapper. The references drive entrances with
  `animation-timeline: view()`, which only Chromium implements, so this adds a
  class on first intersection instead — same 700ms `cubic-bezier(0.16, 1, 0.3, 1)`
  and 0/80/160/240ms stagger.

Under `prefers-reduced-motion: reduce` the starfield drift and shooting stars
stop, and entrance transforms resolve immediately.

The design reference pairs the hero copy with an orbit diagram — concentric
rings, a centre star and three rotating product chips. That has been removed;
the hero is a single copy column spanning the full shell, with the starfield and
its two radial glows behind it.

## Accessibility

- Touch targets are at least 44px. Where the design calls for small ink (nav
  items, footer lockup, inline product links), the `.hit` utility centres an
  invisible 44px target over the link without moving the layout.
- Entrances are neutralised via `<noscript>` so the page is readable without JS.

## Outstanding

Carried over from the handoff, unchanged:

- Copy beyond the supplied facts (capability descriptions, product narratives,
  the Medico Nexus roadmap) was written for the design and should be confirmed
  before launch. The Medico Nexus roadmap stages are illustrative.
- No privacy policy, terms or cookie handling exists yet.
- `NEXT_PUBLIC_SITE_URL` sets the canonical origin for metadata, the sitemap and
  `robots.txt` (see `lib/site.ts`). Unset, it falls back to the deployment's own
  production URL on Vercel, then to `https://astradite.com`. In production that
  fallback resolves to `https://www.astradite.com`, which is the canonical host
  (the apex 308-redirects to it), so no env var is needed today. Set it if the
  apex ever becomes canonical instead.
