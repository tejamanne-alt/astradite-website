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
   * The product's own brand colour, used for its name in the products list.
   * Never picked here to suit the page: Wellness Axis's is the `theme-color`
   * its own site publishes, and the other two were given by the team. Each
   * clears the palette's 4.9:1 floor on black — DineOnTap 6.3:1, Wellness Axis
   * 5.3:1, Medico Nexus 15.3:1 — so re-check any replacement before swapping
   * it in. Products without one keep the neutral `--ink`.
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
    accent: '#FF4D1C',
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
    accent: '#90E9FF',
  },
]

export const CONTACT_EMAIL = 'contact@astradite.com'
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`
