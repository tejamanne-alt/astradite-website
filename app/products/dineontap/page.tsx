import type { Metadata } from 'next'

import ProductPage, { type ProductPageData } from '@/components/ProductPage'
import DineOnTapMockup from '@/components/mockups/DineOnTapMockup'
import { BarChartIcon, QrIcon, TicketListIcon } from '@/components/icons'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/products'
import { productMetadata } from '@/lib/seo'

const SITE = 'https://dineontap.com'

const SEO_DESCRIPTION =
  'DineOnTap turns the QR code on the table into a live menu, a kitchen ticket, and a picture of who keeps coming back.'

export const metadata: Metadata = productMetadata('dineontap', SEO_DESCRIPTION)

const data: ProductPageData = {
  slug: 'dineontap',
  name: 'DineOnTap',
  kicker: 'PRODUCT 01',
  status: 'live',
  statusLabel: 'LIVE',
  tagline: 'Scan. Order. Know your customers.',
  description:
    'A table orders, eats and leaves — and most restaurants learn nothing from it. DineOnTap turns the QR code on the table into a live menu, a kitchen ticket, and a picture of who keeps coming back.',
  headerCta: { label: 'Visit dineontap.com', href: SITE, external: true },
  heroActions: [
    { label: 'Visit the product', href: SITE, external: true, variant: 'primary', outbound: true },
    { label: "How it's built", href: '#build', variant: 'secondary' },
  ],
  mockup: <DineOnTapMockup />,
  problem: {
    eyebrow: 'The problem',
    title: 'The busiest hour is the one you understand least.',
    paragraphs: [
      'Paper menus go stale the day the price changes. Orders are shouted, mis-heard, re-made. And the one thing worth keeping — who came, what they liked, whether they returned — evaporates the moment the bill is paid.',
      "Existing POS systems solve the till. They don't solve the table. We built DineOnTap from the guest's side of it and worked backwards into the kitchen.",
    ],
  },
  build: {
    eyebrow: 'What we built',
    title: 'One scan, three systems behind it.',
    cards: [
      {
        icon: <QrIcon />,
        title: "A menu that's never wrong",
        body: 'Prices, photos and sold-out state update from one console and appear on every table instantly. No reprints, no apologies.',
      },
      {
        icon: <TicketListIcon />,
        title: 'Orders straight to the pass',
        body: "The guest's tap becomes a kitchen ticket with table, timing and modifiers attached — routed to the right station, acknowledged in one tap back.",
      },
      {
        icon: <BarChartIcon />,
        title: "The guest you didn't know you had",
        body: 'Repeat visits, favourite dishes, quiet hours and dead items — the analytics layer that turns a night of service into something you can plan against.',
      },
    ],
  },
  track: {
    eyebrow: 'The flow',
    title: 'Seated to settled.',
    minWidth: 210,
    labelVariant: 'step',
    items: [
      {
        rule: 'gradient',
        label: 'STEP 01',
        title: 'Scan',
        body: "The table's code opens the live menu. No app, no download, no account.",
      },
      {
        rule: 'gradient',
        label: 'STEP 02',
        title: 'Order',
        body: 'Items, modifiers and a running tab that the whole table can add to.',
      },
      {
        rule: 'gradient',
        label: 'STEP 03',
        title: 'Fire',
        body: "The pass sees it the second it's sent, with timing already on the clock.",
      },
      {
        rule: 'gradient',
        label: 'STEP 04',
        title: 'Learn',
        body: "The visit joins the guest's history — the part that used to walk out the door.",
      },
    ],
  },
  closing: {
    title: 'See it running in a real dining room.',
    actions: [
      { label: 'dineontap.com', href: SITE, external: true, variant: 'primary', outbound: true },
      { label: CONTACT_EMAIL, href: CONTACT_MAILTO, variant: 'secondary', mono: true },
    ],
    next: {
      label: 'NEXT PRODUCT',
      name: 'Wellness Axis',
      href: '/products/wellness-axis',
      blurb: 'Health conditions, decoded across food, activity and sleep.',
    },
  },
}

export default function DineOnTapRoute() {
  return <ProductPage data={data} />
}
