import type { Metadata } from 'next'

import { gameBySlug, games, type GameSlug } from '@/lib/games'
import { CONTACT_EMAIL, products, type ProductSlug } from '@/lib/products'
import { siteUrl } from '@/lib/site'

/**
 * Stable node ids. Every page carries the organisation, so a product page's
 * application node can name its publisher by reference rather than repeating
 * the company — crawlers resolve `@id` within the page's own graph.
 */
const ORGANIZATION_ID = `${siteUrl}/#organization`
const WEBSITE_ID = `${siteUrl}/#website`

const NAME = 'Astradite'
const LEGAL_NAME = 'Astradite Private Limited'
const TAGLINE = 'Stellar Intelligence. Applied.'

/** Kept under ~160 characters: past that a search result truncates it. */
export const SITE_DESCRIPTION =
  'Astradite is a software product studio in Kurnool, India, building DineOnTap, Wellness Axis and Medico Nexus.'

export const SOCIAL_DESCRIPTION =
  'A software product studio building DineOnTap, Wellness Axis and Medico Nexus.'

export function organizationNode(): Record<string, unknown> {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: NAME,
    legalName: LEGAL_NAME,
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    email: CONTACT_EMAIL,
    slogan: TAGLINE,
    description: SITE_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1/22, Mamidalapadu',
      addressLocality: 'Kurnool',
      postalCode: '518004',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },
  }
}

export function websiteNode(): Record<string, unknown> {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: siteUrl,
    name: NAME,
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en-IN',
  }
}

/**
 * schema.org's own vocabulary for what kind of software this is. Not a free
 * text field — these are the enumerated values, so they stay in one place
 * rather than being guessed per page.
 */
const APPLICATION_CATEGORY: Record<ProductSlug, string> = {
  dineontap: 'BusinessApplication',
  'wellness-axis': 'HealthApplication',
  'medico-nexus': 'HealthApplication',
}

function productBySlug(slug: ProductSlug) {
  const product = products.find((candidate) => candidate.slug === slug)
  if (!product) throw new Error(`Unknown product slug: ${slug}`)
  return product
}

export function productNodes(
  slug: ProductSlug,
  description: string,
): Record<string, unknown>[] {
  const product = productBySlug(slug)
  const url = `${siteUrl}${product.href}`

  return [
    {
      '@type': 'SoftwareApplication',
      name: product.name,
      url,
      description,
      applicationCategory: APPLICATION_CATEGORY[slug],
      operatingSystem: 'Web',
      publisher: { '@id': ORGANIZATION_ID },
      // The product's own domain, where it has one: this is how a crawler ties
      // the case study here to the thing it describes.
      ...(product.domain ? { sameAs: [product.domain.href] } : {}),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: NAME, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: product.name, item: url },
      ],
    },
  ]
}

/**
 * A product page's metadata, built in one place because the pieces have to
 * agree: `openGraph` and `twitter` are replaced wholesale by the last segment
 * that defines them, not merged field by field, so anything the root layout
 * sets — the card type, the site name, the locale — has to be restated here or
 * it is dropped from the page.
 */
export function productMetadata(slug: ProductSlug, description: string): Metadata {
  const product = productBySlug(slug)
  const socialTitle = `${product.name} — ${NAME}`

  return {
    title: product.name,
    description,
    alternates: { canonical: product.href },
    openGraph: {
      type: 'website',
      siteName: NAME,
      locale: 'en_IN',
      url: product.href,
      title: socialTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
    },
  }
}

/* ---------------------------------------------------------------------------
   Games
--------------------------------------------------------------------------- */

/**
 * `VideoGame` rather than the bare `SoftwareApplication` the products use:
 * it is the narrower type schema.org defines for exactly this, and both store
 * crawlers and search results read the extra fields off it.
 */
export function gameNodes(
  slug: GameSlug,
  description: string,
): Record<string, unknown>[] {
  const game = gameBySlug(slug)
  const url = `${siteUrl}${game.href}`
  const storeUrls = game.stores
    .map((store) => store.href)
    .filter((href): href is string => Boolean(href))

  return [
    {
      '@type': 'VideoGame',
      name: game.name,
      url,
      description,
      applicationCategory: 'GameApplication',
      genre: game.genre,
      operatingSystem: 'iOS, Android',
      gamePlatform: ['iOS', 'Android'],
      playMode: 'SinglePlayer',
      publisher: { '@id': ORGANIZATION_ID },
      author: { '@id': ORGANIZATION_ID },
      ...(storeUrls.length > 0 ? { sameAs: storeUrls } : {}),
    },
    gamesBreadcrumb(game.name, url),
  ]
}

function gamesBreadcrumb(name: string, url: string): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: NAME, item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Games', item: `${siteUrl}/games` },
      { '@type': 'ListItem', position: 3, name, item: url },
    ],
  }
}

/** Same wholesale-replacement caveat as `productMetadata`. */
export function gameMetadata(slug: GameSlug, description: string): Metadata {
  const game = gameBySlug(slug)
  const socialTitle = `${game.name} — ${NAME}`

  return {
    title: game.name,
    description,
    alternates: { canonical: game.href },
    openGraph: {
      type: 'website',
      siteName: NAME,
      locale: 'en_IN',
      url: game.href,
      title: socialTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
    },
  }
}

/**
 * A policy or support document.
 *
 * These exist to be read by a store reviewer and by the person who tapped
 * "Privacy Policy" in a listing, not to be found in search — but they must
 * stay indexable, because Apple and Google both fetch the URL anonymously and
 * a `noindex` page that needs JS or a login is a rejection. So: indexable,
 * canonical, and no social card beyond the title.
 */
export function legalMetadata(options: {
  title: string
  description: string
  path: string
  /** The thing the document governs, e.g. "Kick Off 2". */
  subject: string
}): Metadata {
  const socialTitle = `${options.title} — ${options.subject}`

  return {
    title: `${options.title} — ${options.subject}`,
    description: options.description,
    alternates: { canonical: options.path },
    openGraph: {
      type: 'article',
      siteName: NAME,
      locale: 'en_IN',
      url: options.path,
      title: socialTitle,
      description: options.description,
    },
    twitter: {
      card: 'summary',
      title: socialTitle,
      description: options.description,
    },
  }
}

export function legalNodes(options: {
  title: string
  description: string
  path: string
  subject: string
  subjectPath: string
}): Record<string, unknown>[] {
  const url = `${siteUrl}${options.path}`

  return [
    {
      '@type': 'WebPage',
      name: `${options.title} — ${options.subject}`,
      url,
      description: options.description,
      inLanguage: 'en-IN',
      isPartOf: { '@id': WEBSITE_ID },
      publisher: { '@id': ORGANIZATION_ID },
      about: { '@type': 'VideoGame', name: options.subject, url: `${siteUrl}${options.subjectPath}` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: NAME, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Games', item: `${siteUrl}/games` },
        {
          '@type': 'ListItem',
          position: 3,
          name: options.subject,
          item: `${siteUrl}${options.subjectPath}`,
        },
        { '@type': 'ListItem', position: 4, name: options.title, item: url },
      ],
    },
  ]
}

/** The `/games` hub itself: a list of the games, in the order the page shows. */
export function gamesIndexNodes(): Record<string, unknown>[] {
  return [
    {
      '@type': 'CollectionPage',
      name: `Games — ${NAME}`,
      url: `${siteUrl}/games`,
      description: GAMES_DESCRIPTION,
      inLanguage: 'en-IN',
      isPartOf: { '@id': WEBSITE_ID },
      publisher: { '@id': ORGANIZATION_ID },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: games.map((game, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: game.name,
          item: `${siteUrl}${game.href}`,
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: NAME, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Games', item: `${siteUrl}/games` },
      ],
    },
  ]
}

export const GAMES_DESCRIPTION =
  'Games built by Astradite — arcade-first, phone-first, and small enough to open in a spare minute. Starting with Kick Off 2.'
