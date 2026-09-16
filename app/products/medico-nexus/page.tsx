import type { Metadata } from 'next'

import ProductPage, { type ProductPageData } from '@/components/ProductPage'
import MedicoNexusMockup from '@/components/mockups/MedicoNexusMockup'
import { DocumentIcon, SearchIcon, ShieldIcon } from '@/components/icons'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/products'
import { productMetadata } from '@/lib/seo'

const EARLY_ACCESS = `${CONTACT_MAILTO}?subject=Medico%20Nexus%20early%20access`
const ENQUIRY = `${CONTACT_MAILTO}?subject=Medico%20Nexus`

const DESCRIPTION =
  'Medicine is a collective discipline, practiced alone. Medico Nexus is a network where a clinician can pose a de-identified case and reach the peers who have already seen it — currently in active development.'

export const metadata: Metadata = productMetadata('medico-nexus', DESCRIPTION)

const data: ProductPageData = {
  slug: 'medico-nexus',
  name: 'Medico Nexus',
  kicker: 'PRODUCT 03',
  status: 'in-progress',
  statusLabel: 'IN PROGRESS',
  tagline: 'Every case, a colleague away.',
  description: DESCRIPTION,
  glowAlpha: 0.09,
  headerCta: { label: 'Get early access', href: ENQUIRY, variant: 'secondary' },
  heroActions: [
    { label: 'Ask about early access', href: EARLY_ACCESS, variant: 'primary' },
    { label: "What we're building", href: '#build', variant: 'secondary' },
  ],
  mockup: <MedicoNexusMockup />,
  problem: {
    eyebrow: 'The problem',
    title: 'Someone has already seen your hardest case.',
    paragraphs: [
      'A clinician facing an unusual presentation has textbooks, a search engine, and whoever happens to be down the corridor. The colleague who managed the same case last year is unreachable — often in the next district.',
      "The knowledge exists. The routing doesn't. Medico Nexus is that routing layer — built to move a case to the right peers quickly, without moving patient identity anywhere.",
    ],
  },
  build: {
    eyebrow: "What we're building",
    title: 'A network with judgment about who to ask.',
    cards: [
      {
        icon: <ShieldIcon />,
        title: 'De-identified by construction',
        body: 'Cases are posed as clinical pictures, not records. Identity never enters the system, so it can never leave it.',
      },
      {
        icon: <SearchIcon />,
        title: 'Routing, not broadcasting',
        body: "A case reaches the specialists whose history suggests they've met it before — not an undifferentiated feed of everyone.",
      },
      {
        icon: <DocumentIcon />,
        title: 'A record that accumulates',
        body: "Resolved discussions become a searchable body of practiced experience — the part of medicine that usually stays in someone's head.",
      },
    ],
  },
  track: {
    eyebrow: 'Where it stands',
    title: 'Honest about the stage.',
    minWidth: 210,
    labelVariant: 'status',
    items: [
      {
        rule: 'solid',
        label: 'DONE',
        tone: 'accent',
        title: 'Domain model',
        body: 'Case, specialty and verification structures settled.',
      },
      {
        rule: 'solid',
        label: 'DONE',
        tone: 'accent',
        title: 'Privacy architecture',
        body: 'De-identification enforced at the data layer, not by policy.',
      },
      {
        rule: 'muted',
        label: 'IN BUILD',
        tone: 'pending',
        title: 'Case routing',
        body: 'Matching a posed case to the peers most likely to have seen it.',
      },
      {
        rule: 'faint',
        label: 'NEXT',
        tone: 'dim',
        title: 'Closed pilot',
        body: 'A small verified cohort before anything opens wider.',
      },
    ],
  },
  closing: {
    title: 'Clinician, or building alongside us?',
    note: "We're assembling the pilot cohort now. Write to us and tell us your specialty.",
    actions: [{ label: CONTACT_EMAIL, href: EARLY_ACCESS, variant: 'primary' }],
    next: {
      label: 'NEXT PRODUCT',
      name: 'DineOnTap',
      href: '/products/dineontap',
      blurb: 'Scan. Order. Know your customers.',
    },
  },
}

export default function MedicoNexusRoute() {
  return <ProductPage data={data} />
}
