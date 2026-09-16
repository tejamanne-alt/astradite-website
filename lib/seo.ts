import type { Metadata } from 'next'

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
