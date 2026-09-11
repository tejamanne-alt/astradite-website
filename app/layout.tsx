import type { Metadata } from 'next'
import { DM_Sans, JetBrains_Mono, Syne } from 'next/font/google'

import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://astradite.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Astradite — Stellar Intelligence. Applied.',
    template: '%s — Astradite',
  },
  description:
    'Astradite is where profound intelligence meets limitless imagination. Rooted in deep technical mastery, we architect high-velocity software that spans from the highly practical to the deeply immersive.',
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
    description:
      'A software product studio building DineOnTap, Wellness Axis and Medico Nexus.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astradite — Stellar Intelligence. Applied.',
    description:
      'A software product studio building DineOnTap, Wellness Axis and Medico Nexus.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        {/* Without JS the IntersectionObserver never fires, so neutralise the
            entrance state rather than leaving sections invisible. */}
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
