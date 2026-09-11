import type { MetadataRoute } from 'next'

import { products } from '@/lib/products'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://astradite.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: siteUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    ...products.map((product) => ({
      url: `${siteUrl}${product.href}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
