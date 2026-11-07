import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'

import { SUPPORT_EMAIL, SUPPORT_MAILTO, gameBySlug, type GameSlug } from '@/lib/games'
import { gameNodes } from '@/lib/seo'

import JsonLd from './JsonLd'
import Reveal from './Reveal'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import { ArrowRight, ShieldCheckIcon } from './icons'
import styles from './GamePage.module.css'

export type GamePageData = {
  /** Everything stable about the game — name, tagline, accent, stores, facts
   *  — is read from `lib/games.ts`. Only the page's prose lives here. */
  slug: GameSlug
  /** Mono kicker beside the status pill, e.g. "GAME 01". */
  kicker: string
  /** SEO description, also the `description` on the structured-data node. */
  seoDescription: string
  mockup: ReactNode
  why: { eyebrow: string; title: string; paragraphs: string[] }
  features: {
    eyebrow: string
    title: string
    cards: { icon: ReactNode; title: string; body: string }[]
  }
  play: {
    eyebrow: string
    title: string
    steps: { label: string; title: string; body: string }[]
  }
  stores: { eyebrow: string; title: string; lede: string }
  closing: { title: string; note: string }
}

/**
 * The three documents are the same three for every game and live at fixed
 * paths off the game's own route, so they are derived rather than repeated:
 * a game that forgot to list one would be a game whose store listing points
 * at a dead URL.
 */
function documentsFor(href: string) {
  return [
    {
      href: `${href}/support`,
      title: 'Support',
      body: 'How to reach a person, and answers to the things that go wrong most often.',
    },
    {
      href: `${href}/privacy`,
      title: 'Privacy Policy',
      body: 'What the game collects, what it never collects, and how to switch the rest off.',
    },
    {
      href: `${href}/terms`,
      title: 'Terms of Use',
      body: 'The licence the game is offered under, including the terms Apple requires.',
    },
  ]
}

export default function GamePage({ data }: { data: GamePageData }) {
  const game = gameBySlug(data.slug)
  const documents = documentsFor(game.href)

  return (
    <>
      <SiteHeader
        product={game.name}
        homeHref={game.href}
        links={[
          { label: 'All games', href: '/games' },
          { label: 'Support', href: `${game.href}/support` },
        ]}
        cta={{ label: 'Get in touch', href: SUPPORT_MAILTO }}
      />

      <main>
        {/* Hero ------------------------------------------------------------ */}
        <section className={styles.hero}>
          <div className={styles.glow} aria-hidden="true" />

          <div className={`shell ${styles.heroInner}`}>
            <div>
              <div className={styles.heroMeta}>
                <span className={`mono ${styles.heroOrdinal}`}>{data.kicker}</span>
                <span
                  className={`pill ${game.status === 'live' ? 'pill--live' : 'pill--progress'}`}
                >
                  {game.statusLabel}
                </span>
              </div>
              <h1
                className={styles.heroTitle}
                style={{ '--game-accent': game.accent } as CSSProperties}
              >
                {game.name}
              </h1>
              <p className={styles.heroTagline}>{game.tagline}</p>
              <p className={styles.heroBody}>{game.description}</p>
              <div className={styles.heroActions}>
                <a href="#play" className="btn btn--primary">
                  How it plays
                  <ArrowRight />
                </a>
                <a href="#get" className="btn btn--secondary">
                  Where to get it
                </a>
              </div>
            </div>

            <div className={styles.mockupWrap}>{data.mockup}</div>
          </div>
        </section>

        {/* Why ------------------------------------------------------------- */}
        <section>
          <div className={`shell sectionBody ${styles.split}`}>
            <Reveal>
              <div className="eyebrow">{data.why.eyebrow}</div>
              <h2 className={`h2 ${styles.splitHead}`}>{data.why.title}</h2>
            </Reveal>
            <Reveal delay={100} className={styles.prose}>
              {data.why.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
        </section>

        {/* What's in it ---------------------------------------------------- */}
        <section id="features">
          <div className="shell sectionBody">
            <Reveal>
              <div className="eyebrow">{data.features.eyebrow}</div>
              <h2 className={`h2 ${styles.sectionHead}`}>{data.features.title}</h2>
            </Reveal>

            <div className={styles.featureGrid}>
              {data.features.cards.map((card, i) => (
                <Reveal key={card.title} delay={i * 80}>
                  {card.icon}
                  <h3 className={styles.featureTitle}>{card.title}</h3>
                  <p className="cardBody">{card.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it plays ---------------------------------------------------- */}
        <section id="play">
          <div className="shell sectionBody">
            <Reveal>
              <div className="eyebrow">{data.play.eyebrow}</div>
              <h2 className="h2">{data.play.title}</h2>
            </Reveal>

            <ol className={styles.track}>
              {data.play.steps.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 80}>
                  <div className={styles.rule} aria-hidden="true" />
                  <div className={`mono ${styles.trackLabel}`}>{step.label}</div>
                  <h3 className={styles.trackTitle}>{step.title}</h3>
                  <p className={styles.trackBody}>{step.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Where to get it ------------------------------------------------- */}
        <section id="get">
          <div className="shell sectionBody">
            <Reveal>
              <div className="eyebrow">{data.stores.eyebrow}</div>
              <h2 className={`h2 ${styles.sectionHead}`}>{data.stores.title}</h2>
              <p className={styles.sectionLede}>{data.stores.lede}</p>
            </Reveal>

            <div className={styles.storeGrid}>
              {game.stores.map((store, i) => (
                <Reveal key={store.id} delay={i * 80} className={styles.storeCard}>
                  <div className={`mono ${styles.storeStatus}`}>{store.statusLabel}</div>
                  <div className={styles.storeName}>{store.store}</div>
                  {store.href ? (
                    <a
                      href={store.href}
                      target="_blank"
                      rel="noopener"
                      className={styles.storeLink}
                    >
                      {store.label} &#8599;
                    </a>
                  ) : (
                    <p className={styles.storeNote}>
                      Not live yet. Write to{' '}
                      <a
                        href={`${SUPPORT_MAILTO}?subject=${encodeURIComponent(
                          `${game.name} launch`,
                        )}`}
                        className={styles.inlineLink}
                      >
                        {SUPPORT_EMAIL}
                      </a>{' '}
                      and we&rsquo;ll tell you when it is.
                    </p>
                  )}
                </Reveal>
              ))}
            </div>

            <Reveal delay={160}>
              <dl className={styles.listing}>
                {game.facts.map((fact) => (
                  <div key={fact.label} className={styles.listingRow}>
                    <dt className={`mono ${styles.listingLabel}`}>{fact.label}</dt>
                    <dd className={styles.listingValue}>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Support & legal -------------------------------------------------- */}
        <section id="documents">
          <div className="shell sectionBody">
            <Reveal>
              <div className="eyebrow">Support &amp; legal</div>
              <h2 className={`h2 ${styles.sectionHead}`}>Everything in writing.</h2>
              <p className={styles.sectionLede}>
                The three documents both stores ask for, kept at stable URLs so a listing never
                points at a dead page.
              </p>
            </Reveal>

            <div className={styles.docGrid}>
              {documents.map((doc, i) => (
                <Reveal key={doc.href} delay={i * 80}>
                  <Link href={doc.href} className={styles.docCard}>
                    <ShieldCheckIcon />
                    <h3 className={styles.docTitle}>
                      {doc.title} <span aria-hidden="true">&rarr;</span>
                    </h3>
                    <p className="cardBody">{doc.body}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Closing --------------------------------------------------------- */}
        <section>
          <div className={`shell ${styles.closing}`}>
            <Reveal>
              <h2 className={`h2 ${styles.closingTitle}`}>{data.closing.title}</h2>
              <p className={styles.closingNote}>{data.closing.note}</p>
              <div className={styles.closingActions}>
                <Link href={`${game.href}/support`} className="btn btn--primary">
                  Support
                  <ArrowRight />
                </Link>
                <a href={SUPPORT_MAILTO} className="btn btn--secondary btn--mono">
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className={styles.nextCard}>
                <div className={`mono ${styles.nextLabel}`}>MORE FROM ASTRADITE</div>
                <Link href="/games" className={`hit ${styles.nextLink}`}>
                  All games &rarr;
                </Link>
                <p className={styles.nextBlurb}>
                  Small games, built properly &mdash; and the products the same team ships.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter href="/" />
      <JsonLd nodes={gameNodes(data.slug, data.seoDescription)} />
    </>
  )
}
