import type { Metadata } from 'next'
import Link from 'next/link'
import type { CSSProperties } from 'react'

import JsonLd from '@/components/JsonLd'
import Reveal from '@/components/Reveal'
import ScrollProgress from '@/components/ScrollProgress'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import Starfield from '@/components/Starfield'
import { ArrowRight } from '@/components/icons'
import { games } from '@/lib/games'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/products'
import { GAMES_DESCRIPTION, gamesIndexNodes } from '@/lib/seo'

import styles from './games.module.css'

export const metadata: Metadata = {
  title: 'Games',
  description: GAMES_DESCRIPTION,
  alternates: { canonical: '/games' },
  openGraph: {
    type: 'website',
    siteName: 'Astradite',
    locale: 'en_IN',
    url: '/games',
    title: 'Games — Astradite',
    description: GAMES_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Games — Astradite',
    description: GAMES_DESCRIPTION,
  },
}

export default function GamesIndex() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader
        product="Games"
        links={[
          { label: 'Products', href: '/#products' },
          { label: 'How we work', href: '/#process' },
        ]}
        cta={{ label: 'Get in touch', href: CONTACT_MAILTO }}
      />

      <main id="top" style={{ position: 'relative' }}>
        {/* The hub gets the live sky, as the home page does; a single game's
            page uses the static glow the product pages use. */}
        <div className={styles.backdrop} aria-hidden="true">
          <Starfield />
          <div className={styles.glow} />
        </div>

        <section>
          <div className={`shell ${styles.heroInner}`}>
            <div className="eyebrow">Astradite Games</div>
            <h1 className={styles.heroTitle}>Small games, built properly.</h1>
            <p className={styles.heroLede}>
              The same engineering that goes into the products, pointed at something you play
              for ninety seconds at a bus stop. Arcade-first, phone-first, and finished — no
              energy timers, no second screen, nothing between you and the thing you came for.
            </p>
            <div className={styles.heroActions}>
              <Link href="#catalogue" className="btn btn--primary">
                See what we’re shipping
                <ArrowRight />
              </Link>
              <a href={CONTACT_MAILTO} className="btn btn--secondary btn--mono">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </section>

        <section id="catalogue">
          <div className="shell sectionBody">
            <Reveal>
              <div className="eyebrow">The catalogue</div>
              <h2 className={`h2 ${styles.catalogueHead}`}>
                {games.length === 1 ? 'One game, out the door first.' : 'What we ship.'}
              </h2>
            </Reveal>

            <div className={styles.gameList}>
              {games.map((game) => (
                <Reveal as="article" key={game.slug} className={styles.gameRow}>
                  <div>
                    <div className={styles.gameMeta}>
                      <span className={`mono ${styles.gameOrdinal}`}>{game.ordinal}</span>
                      <span
                        className={`pill ${
                          game.status === 'live' ? 'pill--live' : 'pill--progress'
                        }`}
                      >
                        {game.statusLabel}
                      </span>
                    </div>
                    <h3 className={styles.gameName}>
                      <Link
                        href={game.href}
                        className={`hit ${styles.gameNameLink}`}
                        style={
                          {
                            '--game-accent': game.accent,
                            '--game-accent-hover': `color-mix(in oklab, ${game.accent} 72%, #fff)`,
                          } as CSSProperties
                        }
                      >
                        {game.name}
                      </Link>
                    </h3>
                    <p className={styles.gameTagline}>{game.tagline}</p>
                  </div>

                  <div>
                    <p className={styles.gameBody}>{game.description}</p>
                    <dl className={styles.specs}>
                      <div className={styles.spec}>
                        <dt className={`mono ${styles.specLabel}`}>GENRE</dt>
                        <dd className={styles.specValue}>{game.genre}</dd>
                      </div>
                      <div className={styles.spec}>
                        <dt className={`mono ${styles.specLabel}`}>PLATFORMS</dt>
                        <dd className={styles.specValue}>{game.platforms}</dd>
                      </div>
                      <div className={styles.spec}>
                        <dt className={`mono ${styles.specLabel}`}>RATING</dt>
                        <dd className={styles.specValue}>{game.rating}</dd>
                      </div>
                    </dl>
                    <div className={styles.gameLinks}>
                      <Link href={game.href} className={`hit ${styles.gameLink}`}>
                        Read about {game.name}
                        <ArrowRight size={15} />
                      </Link>
                      <Link
                        href={`${game.href}/support`}
                        className={`hit mono ${styles.secondaryLink}`}
                      >
                        Support
                      </Link>
                      <Link
                        href={`${game.href}/privacy`}
                        className={`hit mono ${styles.secondaryLink}`}
                      >
                        Privacy
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className={`shell ${styles.closing}`}>
            <Reveal>
              <h2 className={`h2 ${styles.closingHead}`}>More on the way.</h2>
              <p className={styles.closingBody}>
                Everything here is built by the same team that builds the products, with the
                same rule: ship something real, then tighten it against how people actually
                play. If you want to know what lands next, write to us.
              </p>
              <a href={CONTACT_MAILTO} className={`hit mono ${styles.closingMail}`}>
                {CONTACT_EMAIL}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter href="/" />
      <JsonLd nodes={gamesIndexNodes()} />
    </>
  )
}
