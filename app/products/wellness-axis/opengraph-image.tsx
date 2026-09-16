import { OG_CONTENT_TYPE, OG_SIZE, productOgImage } from '@/lib/og'
import { products } from '@/lib/products'

const product = products.find((candidate) => candidate.slug === 'wellness-axis')!

export const alt = `${product.name} — ${product.tagline}`
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function OpengraphImage() {
  return productOgImage('wellness-axis')
}
