import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { DM_Sans, JetBrains_Mono, Raleway } from 'next/font/google'

import JsonLd from '@/components/JsonLd'
import {
  SITE_DESCRIPTION,
  SOCIAL_DESCRIPTION,
  organizationNode,
  websiteNode,
} from '@/lib/seo'
import { siteUrl } from '@/lib/site'

import './globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Astradite — Stellar Intelligence. Applied.',
    template: '%s — Astradite',
  },
  description: SITE_DESCRIPTION,
  applicationName: 'Astradite',
  authors: [{ name: 'Astradite Private Limited' }],
  keywords: [
    'Astradite',
    'product studio',
    'software engineering',
    'knowledge graphs',
    'DineOnTap',
    'Wellness Axis',
    'Medico Nexus',
    'Kurnool',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Astradite',
    locale: 'en_IN',
    url: '/',
    title: 'Astradite — Stellar Intelligence. Applied.',
    description: SOCIAL_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astradite — Stellar Intelligence. Applied.',
    description: SOCIAL_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    // The defaults a crawler assumes when left to itself are the restrictive
    // ones: a short snippet, a thumbnail-sized image, no video. Say otherwise.
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

/* Paints the browser chrome on a phone to match the page it frames. */
export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        {/* Without JS the IntersectionObserver never fires, so neutralise the
            entrance state rather than leaving sections invisible. */}
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        {children}
        <JsonLd nodes={[organizationNode(), websiteNode()]} />
        <Analytics />
      </body>
    </html>
  )
}
