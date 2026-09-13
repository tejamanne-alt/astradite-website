import { ImageResponse } from 'next/og'

export const alt = 'Astradite — Stellar Intelligence. Applied.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Satori cannot parse woff2, and Google serves TTF when the request carries no
 * modern browser UA — which is what `fetch` sends. If anything here fails the
 * image still renders in the fallback face rather than failing the build.
 */
async function loadDisplayFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800',
    ).then((res) =>
      res.ok ? res.text() : '',
    )
    const url = css.match(/src:\s*url\((https:[^)]+)\)/)?.[1]
    if (!url) return null
    const font = await fetch(url)
    return font.ok ? await font.arrayBuffer() : null
  } catch {
    return null
  }
}

export default async function OpengraphImage() {
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
          fontFamily: 'Playfair Display',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="52" height="52" viewBox="0 0 24 24" fill="#e8e8e8">
            <path d="M12 1.8l2.3 7.6 7.6 2.3-7.6 2.3L12 21.6l-2.3-7.6L2.1 11.7l7.6-2.3z" />
          </svg>
          <div style={{ fontSize: 40, color: '#ffffff', letterSpacing: '0' }}>Astradite</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 104,
              lineHeight: 1.02,
              letterSpacing: '-0.015em',
              color: '#ffffff',
            }}
          >
            Stellar Intelligence.
          </div>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              fontSize: 104,
              lineHeight: 1.02,
              letterSpacing: '-0.015em',
              // Keep in sync with `.heroWord:nth-child(3)` in app/page.module.css.
              backgroundImage:
                'linear-gradient(100deg, #c25a1c 0%, #e88b30 18%, #ffbe62 38%, #fff4e0 54%, #ffc06a 72%, #d9701f 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              // Same descender clip as the page: the paint box stops at the em
              // square, so the tails of "pp" fall outside it. 0.14em back,
              // negated so the card's layout does not shift.
              paddingBottom: 15,
              marginBottom: -15,
            }}
          >
            Applied.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            fontSize: 24,
            color: '#7a7a7a',
            letterSpacing: '0.04em',
          }}
        >
          <span>DineOnTap</span>
          <span>·</span>
          <span>Wellness Axis</span>
          <span>·</span>
          <span>Medico Nexus</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: displayFont
        ? [
            {
              name: 'Playfair Display',
              data: displayFont,
              weight: 800 as const,
              style: 'normal' as const,
            },
          ]
        : undefined,
    },
  )
}
