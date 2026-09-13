export type ProductSlug = 'dineontap' | 'wellness-axis' | 'medico-nexus'

export type ProductSummary = {
  slug: ProductSlug
  ordinal: string
  name: string
  tagline: string
  href: string
  status: 'live' | 'in-progress'
  statusLabel: string
  description: string
  caseStudyLabel: string
  domain?: { label: string; href: string }
  /**
   * The product's own brand colour, taken from its live site rather than
   * chosen here, and used for its name in the products list. Products without
   * one keep the neutral `--ink`, so this stays opt-in per product.
   */
  accent?: string
}

export const products: ProductSummary[] = [
  {
    slug: 'dineontap',
    ordinal: '01',
    name: 'DineOnTap',
    tagline: 'Scan. Order. Know your customers.',
    href: '/products/dineontap',
    status: 'live',
    statusLabel: 'LIVE',
    description:
      'A table orders, eats and leaves — and most restaurants learn nothing from it. DineOnTap turns a QR code on the table into a live menu, a kitchen ticket, and a picture of who keeps coming back.',
    caseStudyLabel: 'Read the case study',
    domain: { label: 'dineontap.com', href: 'https://dineontap.com' },
  },
  {
    slug: 'wellness-axis',
    ordinal: '02',
    name: 'Wellness Axis',
    tagline: 'Health conditions, decoded across food, activity and sleep.',
    href: '/products/wellness-axis',
    status: 'live',
    statusLabel: 'LIVE',
    description:
      'You can log everything and still not know what any of it did. Wellness Axis runs your food, activity and sleep through a knowledge graph and projects a signed impact score against the conditions you actually live with.',
    caseStudyLabel: 'Read the case study',
    domain: { label: 'wellnessaxis.app', href: 'https://wellnessaxis.app' },
    // `<meta name="theme-color">` on wellnessaxis.app, which its
    // manifest.webmanifest repeats as `theme_color`.
    accent: '#0C9268',
  },
  {
    slug: 'medico-nexus',
    ordinal: '03',
    name: 'Medico Nexus',
    tagline: 'Every case, a colleague away.',
    href: '/products/medico-nexus',
    status: 'in-progress',
    statusLabel: 'IN PROGRESS',
    description:
      'Medicine is a collective discipline, practiced alone. Medico Nexus is a network where a clinician can pose a de-identified case and reach the peers who have already seen it. In progress.',
    caseStudyLabel: "Read what we're building",
  },
]

export const CONTACT_EMAIL = 'contact@astradite.com'
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`
