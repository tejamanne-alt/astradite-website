import { CONTACT_EMAIL } from '@/lib/products'

export type GameSlug = 'kick-off-2'

/**
 * A store listing. `href` stays undefined until the listing is actually
 * public — a store badge that 404s is worse than one that says "soon", and
 * Apple rejects marketing pages that link to a listing that isn't live yet.
 */
export type StoreListing = {
  id: 'app-store' | 'play-store'
  /** The store's own name, used verbatim per both stores' brand guidelines. */
  store: string
  label: string
  href?: string
  statusLabel: string
}

export type GameSummary = {
  slug: GameSlug
  ordinal: string
  name: string
  tagline: string
  href: string
  status: 'live' | 'coming-soon'
  statusLabel: string
  genre: string
  platforms: string
  /** Store age rating, in each store's own vocabulary. */
  rating: string
  description: string
  /**
   * The game's own brand colour, used for its name the way a product's is.
   * Pitch green at 11.4:1 on black — well clear of the palette's 4.9:1 floor.
   * Re-check any replacement before swapping it in.
   */
  accent: string
  stores: StoreListing[]
}

/**
 * The App Store record for Kick Off 2. The listing URL is derivable from the
 * id — https://apps.apple.com/app/id6829455628 — but it only resolves once the
 * version is approved and released, so it is held back until then.
 */
const APP_STORE_ID = '6829455628'

export const games: GameSummary[] = [
  {
    slug: 'kick-off-2',
    ordinal: '01',
    name: 'Kick Off 2',
    tagline: 'Ninety seconds of football. One more go.',
    href: '/games/kick-off-2',
    status: 'coming-soon',
    statusLabel: 'COMING SOON',
    genre: 'Arcade sports',
    platforms: 'iOS · Android',
    rating: '4+ / Everyone',
    description:
      'Football games got heavier every year — squads, contracts, three menus between you and the ball. Kick Off 2 goes the other way: a match starts on one tap, lasts about as long as a bus stop, and runs entirely on the phone in your hand.',
    accent: '#36D97B',
    stores: [
      {
        id: 'app-store',
        store: 'App Store',
        label: 'Download on the App Store',
        // href: `https://apps.apple.com/app/id${APP_STORE_ID}`,
        statusLabel: 'In preparation',
      },
      {
        id: 'play-store',
        store: 'Google Play',
        label: 'Get it on Google Play',
        // href: 'https://play.google.com/store/apps/details?id=<package name>',
        statusLabel: 'In preparation',
      },
    ],
  },
]

export function gameBySlug(slug: GameSlug): GameSummary {
  const game = games.find((candidate) => candidate.slug === slug)
  if (!game) throw new Error(`Unknown game slug: ${slug}`)
  return game
}

/** Apple's App Store id, exposed for the submission checklist and App Store links. */
export const KICK_OFF_2_APP_STORE_ID = APP_STORE_ID

/**
 * Support address published to both stores. Deliberately the company address
 * already in use rather than a games-only alias: a support URL or email that
 * does not actually receive mail is a rejection, and this one is live.
 */
export const SUPPORT_EMAIL = CONTACT_EMAIL
export const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`

/**
 * Both stores show a "last updated" date on a policy and reviewers compare it
 * against the submission. One constant so the three documents never disagree.
 */
export const POLICY_EFFECTIVE_DATE = '1 November 2026'
