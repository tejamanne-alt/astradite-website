import { ImageResponse } from 'next/og'

import { products, type ProductSlug } from '@/lib/products'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

/**
 * Satori cannot parse woff2, and Google serves TTF when the request carries no
 * modern browser UA — which is what `fetch` sends. If anything here fails the
 * image still renders in the fallback face rather than failing the build.
 */
export async function loadDisplayFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Raleway:wght@800',
    ).then((res) => (res.ok ? res.text() : ''))
    const url = css.match(/src:\s*url\((https:[^)]+)\)/)?.[1]
    if (!url) return null
    const font = await fetch(url)
    return font.ok ? await font.arrayBuffer() : null
  } catch {
    return null
  }
}

export function ogFonts(displayFont: ArrayBuffer | null) {
  return displayFont
    ? [
        {
          name: 'Raleway',
          data: displayFont,
          weight: 800 as const,
          style: 'normal' as const,
        },
      ]
    : undefined
}

/**
 * A product's own share card. Without one, all three products fall back to the
 * company card and a shared link says nothing about what was shared — so this
 * mirrors the product page's hero: the name in the product's own accent, its
 * tagline, and where it lives.
 */
export async function productOgImage(slug: ProductSlug) {
  const product = products.find((candidate) => candidate.slug === slug)
  if (!product) throw new Error(`Unknown product slug: ${slug}`)

  const displayFont = await loadDisplayFont()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #101010 0%, #000000 58%)',
          padding: '84px 88px',
          fontFamily: 'Raleway',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#e8e8e8">
            <path d="M12 1.8l2.3 7.6 7.6 2.3-7.6 2.3L12 21.6l-2.3-7.6L2.1 11.7l7.6-2.3z" />
          </svg>
          <div style={{ fontSize: 32, color: '#e8e8e8', letterSpacing: '0.18em' }}>
            ASTRADITE
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 104,
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              color: product.accent ?? '#ffffff',
              // The paint box stops at the em square, so descenders would clip.
              paddingBottom: 15,
              marginBottom: -15,
            }}
          >
            {product.name}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 26,
              fontSize: 36,
              lineHeight: 1.25,
              color: '#a3a3a3',
              maxWidth: 900,
            }}
          >
            {product.tagline}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            fontSize: 24,
            color: '#7a7a7a',
            letterSpacing: '0.08em',
          }}
        >
          <span>{product.statusLabel}</span>
          {product.domain ? <span>·</span> : null}
          {product.domain ? <span>{product.domain.label}</span> : null}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: ogFonts(displayFont) },
  )
}
