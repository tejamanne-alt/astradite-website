export type ProductSlug = 'dineontap' | 'wellness-axis' | 'medico-nexus'

export type ProductSummary = {
  slug: ProductSlug
  ordinal: string
  name: string
  tagline: string
  href: string
  status: 'live' | 'in-progress'
  statusLabel: string
  /** Mono status line on the orbiting hero chips. */
  chipStatus: string
  description: string
  caseStudyLabel: string
  domain?: { label: string; href: string }
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
    chipStatus: '01 · LIVE',
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
    chipStatus: '02 · LIVE',
    description:
      'You can log everything and still not know what any of it did. Wellness Axis runs your food, activity and sleep through a knowledge graph and projects a signed impact score against the conditions you actually live with.',
    caseStudyLabel: 'Read the case study',
    domain: { label: 'wellnessaxis.app', href: 'https://wellnessaxis.app' },
  },
  {
    slug: 'medico-nexus',
    ordinal: '03',
    name: 'Medico Nexus',
    tagline: 'Every case, a colleague away.',
    href: '/products/medico-nexus',
    status: 'in-progress',
    statusLabel: 'IN PROGRESS',
    chipStatus: '03 · BUILDING',
    description:
      'Medicine is a collective discipline, practiced alone. Medico Nexus is a network where a clinician can pose a de-identified case and reach the peers who have already seen it. In progress.',
    caseStudyLabel: "Read what we're building",
  },
]

export const CONTACT_EMAIL = 'contact@astradite.com'
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`
