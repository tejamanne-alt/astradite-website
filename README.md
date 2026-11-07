# Astradite

Marketing site for **Astradite Private Limited** — a software product studio in
Kurnool, Andhra Pradesh. The company, case studies for DineOnTap, Wellness Axis
and Medico Nexus, and the games section: a hub, a page per game, and the three
documents both app stores require of each submission.

Built from the design handoff in `design-references/` (HTML prototypes, not
production code) and rebuilt in Next.js per that brief.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- CSS Modules + a global token layer — no CSS framework
- `next/font/google` for Raleway, DM Sans and JetBrains Mono
- `@vercel/analytics` is the only runtime dependency beyond Next.js itself.
  Every icon and the logo are inline SVG; there are no images.

Every route prerenders to static HTML. There is no data fetching, no API route,
no database and no auth — every action is a `mailto:` or an outbound link.

## Routes

| Route | Page |
| --- | --- |
| `/` | Astradite — Stellar Intelligence. Applied. |
| `/products/dineontap` | DineOnTap |
| `/products/wellness-axis` | Wellness Axis |
| `/products/medico-nexus` | Medico Nexus |
| `/games` | Games — the hub |
| `/games/kick-off-2` | Kick Off 2 — the store Marketing URL |
| `/games/kick-off-2/privacy` | Privacy Policy — the store Privacy Policy URL |
| `/games/kick-off-2/terms` | Terms of Use — the App Store Licence Agreement |
| `/games/kick-off-2/support` | Support — the store Support URL |
| `/games/slime-rush` | Slime Rush — the store Marketing URL |
| `/games/slime-rush/privacy` | Privacy Policy — the store Privacy Policy URL |
| `/games/slime-rush/terms` | Terms of Use — the App Store Licence Agreement |
| `/games/slime-rush/support` | Support — the store Support URL |

Plus generated `sitemap.xml`, `robots.txt`, `icon.svg` and `opengraph-image`.

## Games and the store submissions

`lib/games.ts` is the single source for everything about a game: its name,
tagline, accent, store listings, the facts its listing declares and the support
address. The store `href`s are commented out on purpose — a badge that links to
a listing which is not live yet is both useless and a rejection risk — so
turning a listing on is one uncomment plus a `status` change, and the hero pill,
the `/games` row, the store cards, the share card and the `sameAs` in the
structured data all follow.

A game page is data, not markup: `components/GamePage.tsx` renders the hero,
the four feature cards, the step track, the store cards, the facts table and
the document cards, and each game supplies only its prose. The three document
routes are derived from the game's own `href` rather than listed per game,
because a game that forgot one would be a game whose store listing points at a
dead URL. The sitemap works the same way — it iterates `games` ×
`GAME_DOCUMENTS`, so a new game needs no sitemap edit.

The documents themselves share `components/LegalPage.tsx`, which takes a
numbered section list and renders a sticky contents rail beside it. Their bodies
are `ReactNode`, not strings, because they need inline links — and note that
HTML entities only work in JSX text, never inside a plain JS string, where they
render literally.

Each game has a `docs/<slug>-store-listing.md` holding the copy and the
declarations to paste into App Store Connect and the Play Console, with the
field limits checked. **The two games declare different things, and the files
are not interchangeable:** Kick Off 2 is fully offline with a crash/performance
SDK and no ads; Slime Rush carries a third-party ad SDK, which adds advertising
identifiers, App Tracking Transparency, an EEA/UK consent flow, a "shared"
column on Play's Data Safety form and a "contains ads" listing label. Slime
Rush's file also lists the build work its published policy assumes — naming the
ad networks, a consent-reset control, the ATT prompt, the `AD_ID` permission and
an age-capped ad content rating. If a build changes, the policy and that store's
declarations change together.

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
monochrome — hierarchy is carried entirely by luminance — with exactly one
chromatic exception, and the product accents. The home hero's headline is
clipped to its glyphs and gradient-filled throughout: a wormhole over "Stellar
Intelligence." (teal `#6fc9d4` through periwinkle and rose to a `#ffe8d8` warm
white) resolving into a white "Applied." (`#b0b0b0` at both edges through a
`#ffffff` core). Only the first is chromatic; the second is a luminance sweep,
shaped like the first so the two read as one system. The cool ramp is one
gradient over both words, not one per word, which is why they share a wrapper. Both are duplicated
in `app/opengraph-image.tsx`, since Satori cannot read the stylesheet; each pair
must be changed together. Each product also paints its name in its own brand
colour — see `accent` in `lib/products.ts`. Nothing else carries hue.

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#000000` | Page background |
| `--surface` / `--surface-2` | `#111111` / `#151515` | Cards, mockup panels |
| `--surface-muted` | `rgba(28,28,28,0.4)` | Secondary buttons |
| `--header-bg` | `rgba(8,8,8,0.86)` | Sticky header (blur 16px) |
| `--accent` / `--accent-bright` | `#e8e8e8` / `#ffffff` | Buttons, badges, links |
| `--ink` / `--body` | `#ffffff` / `#a3a3a3` | Headings / body copy |
| `--dim` / `--recessive` / `--pending` | `#7a7a7a` / `#8a8a8a` / `#b0b0b0` | Metadata, ordinals, in-progress |

`#7a7a7a` on `#000000` is the contrast floor at ~4.9:1 — nothing goes dimmer.

## Layout rules

Every page runs the same system: one 1200px `--shell`, one `.sectionBody`
rhythm, one `.h2` scale and one hero `clamp`. The product pages used to run a
parallel, slightly smaller set — a 1120px measure, tighter section padding and
a smaller H2 — which made the site read as two designs. Those variants are
gone.

No media queries. Every grid is `auto-fit` + `minmax()` and every type scale is
`clamp()`, so the site reflows from 320px to 2560px on its own. Grid minimums
are wrapped in `min(…, 100%)` so a track can never be wider than its container.

Both hero H1s share `clamp(min(38px, 9vw), 6.4vw, 80px)`. The design's original
58px/54px ceilings were tuned for the narrow columns beside the old hero art;
with the home hero spanning the full 1152px measure, 80px puts "Stellar
Intelligence. Applied." at ~1075px of it (93%). The ceiling belongs to the face,
not the layout — it is set by where the line wraps, so it moves whenever the
display font changes. Raleway needed 84px cut to 80px; at 84px it measured 1129px
of the 1152px box, 23px from wrapping, and a wrap drops fill to ~70%. The floor
scales below ~422px, where the headline has to wrap anyway.

Container queries are used in two places, both keyed to the element's own width
rather than the viewport:

- the product hero mockup is pinned to the page margin once the grid has room
  for two columns — centred, it stopped ~100px short of the margin that the
  header and every section below align to;
- the header sheds its in-page anchors below ~620px and the product name below
  ~470px, so it stays one 68px row instead of wrapping into three.

## Motion

Three client components carry all the motion; everything else is a server
component.

- `Starfield` — canvas starfield with upward drift, twinkle and a shooting star
  every 5–11s. `ResizeObserver` for sizing, `devicePixelRatio` capped at 2. On
  the home page it sits in a `position: fixed` backdrop behind every section, so
  the sky stays put as the page scrolls; the product pages use a static glow
  instead.
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
its two radial glows behind it. The copy that leaned on the metaphor went with
it: the products heading and the next-product cards no longer say "orbit".

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
- Neither game has screenshots in either store listing yet, and the company
  still has no site-wide privacy policy, terms or cookie handling — the
  documents that exist cover the two games only.
- Both games' copy was written for these pages and should be confirmed against
  the shipped builds before the listings go live.
- Slime Rush's privacy policy names no ad network and promises a consent-reset
  control in the game's settings. Both have to be made true before submission;
  `docs/slime-rush-store-listing.md` lists them.
- `NEXT_PUBLIC_SITE_URL` sets the canonical origin for metadata, the sitemap and
  `robots.txt` (see `lib/site.ts`). Unset, it falls back to the deployment's own
  production URL on Vercel, then to `https://astradite.com`. In production that
  fallback resolves to `https://www.astradite.com`, which is the canonical host
  (the apex 308-redirects to it), so no env var is needed today. Set it if the
  apex ever becomes canonical instead.
