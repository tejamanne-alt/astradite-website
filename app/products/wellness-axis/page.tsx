import type { Metadata } from 'next'

import ProductPage, { type ProductPageData } from '@/components/ProductPage'
import WellnessAxisMockup from '@/components/mockups/WellnessAxisMockup'
import { HeartIcon, LineChartIcon, NodeGraphIcon } from '@/components/icons'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/products'

const SITE = 'https://wellnessaxis.app'

const DESCRIPTION =
  'You can log everything and still not know what any of it did. Wellness Axis runs your food, activity and sleep through a knowledge graph and projects a signed impact score against the conditions you actually live with.'

export const metadata: Metadata = {
  title: 'Wellness Axis',
  description: DESCRIPTION,
  openGraph: {
    title: 'Wellness Axis — Astradite',
    description: DESCRIPTION,
    url: '/products/wellness-axis',
  },
}

const data: ProductPageData = {
  name: 'Wellness Axis',
  kicker: 'PRODUCT 02',
  status: 'live',
  statusLabel: 'LIVE',
  tagline: 'Health conditions, decoded across food, activity and sleep.',
  description: DESCRIPTION,
  headerCta: { label: 'Visit wellnessaxis.app', href: SITE, external: true },
  heroActions: [
    { label: 'Visit the product', href: SITE, external: true, variant: 'primary', outbound: true },
    { label: "How it's built", href: '#build', variant: 'secondary' },
  ],
  mockup: <WellnessAxisMockup />,
  problem: {
    eyebrow: 'The problem',
    title: 'Tracking is not the same as knowing.',
    paragraphs: [
      'Most health apps hand back the same numbers you fed them — calories in, steps taken, hours slept. Generic advice sits on top, identical whether you have hypertension, PCOS or nothing at all.',
      'But a banana is not one thing. It reads differently against blood sugar than against blood pressure. Wellness Axis is built on that asymmetry: everything logged is evaluated against the conditions of the person logging it.',
    ],
  },
  build: {
    eyebrow: 'What we built',
    title: 'A graph underneath, one number on top.',
    cards: [
      {
        icon: <NodeGraphIcon />,
        title: 'The condition graph',
        body: 'Foods, nutrients, activity types and sleep patterns linked to conditions with direction and weight. The model, not the interface, is the product.',
      },
      {
        icon: <LineChartIcon />,
        title: 'A signed impact score',
        body: 'Every entry resolves to a positive or negative contribution, per axis and per condition — so the day reads as a direction, not a dashboard.',
      },
      {
        icon: <HeartIcon />,
        title: 'Guidance that knows you',
        body: 'Suggestions are filtered through your declared conditions — nothing recommended that your own health profile argues against.',
      },
    ],
  },
  track: {
    eyebrow: 'The three axes',
    title: 'Everything resolves to one of three.',
    minWidth: 230,
    ordered: false,
    items: [
      {
        rule: 'gradient',
        title: 'Food',
        body: 'Logged by dish, resolved to nutrients, scored against the conditions it touches — not against a calorie budget.',
      },
      {
        rule: 'gradient',
        title: 'Activity',
        body: 'Intensity and type matter more than step count. A walk after a meal is a different event than the same walk at noon.',
      },
      {
        rule: 'gradient',
        title: 'Sleep',
        body: 'The axis that quietly moves the other two. Debt here shows up as a penalty everywhere else in the day.',
      },
    ],
  },
  closing: {
    title: 'Read your own day properly.',
    actions: [
      { label: 'wellnessaxis.app', href: SITE, external: true, variant: 'primary', outbound: true },
      { label: CONTACT_EMAIL, href: CONTACT_MAILTO, variant: 'secondary', mono: true },
    ],
    next: {
      label: 'NEXT PRODUCT',
      name: 'Medico Nexus',
      href: '/products/medico-nexus',
      blurb: 'Every case, a colleague away. In progress.',
    },
  },
}

export default function WellnessAxisRoute() {
  return <ProductPage data={data} />
}
