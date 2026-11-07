import type { MetadataRoute } from 'next'

import { GAME_DOCUMENTS, games } from '@/lib/games'
import { products } from '@/lib/products'
import { siteUrl } from '@/lib/site'

/**
 * The policy and support documents are listed deliberately. They are low
 * priority for search, but both stores fetch their URLs anonymously during
 * review, and a URL that appears in the sitemap is one less thing for a
 * reviewer to wonder about.
 */

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
    {
      url: `${siteUrl}/games`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...games.flatMap((game) => [
      {
        url: `${siteUrl}${game.href}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      ...GAME_DOCUMENTS.map((document) => ({
        url: `${siteUrl}${game.href}/${document}`,
        lastModified,
        changeFrequency: 'yearly' as const,
        priority: 0.3,
      })),
    ]),
  ]
}
