import type { Metadata } from 'next'
import Link from 'next/link'
import type { CSSProperties } from 'react'

import JsonLd from '@/components/JsonLd'
import Reveal from '@/components/Reveal'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import KickOffTwoMockup from '@/components/mockups/KickOffTwoMockup'
import {
  ArrowRight,
  BallIcon,
  OfflineIcon,
  ShieldCheckIcon,
  StopwatchIcon,
  TrophyIcon,
} from '@/components/icons'
import { SUPPORT_EMAIL, SUPPORT_MAILTO, gameBySlug } from '@/lib/games'
import { CONTACT_MAILTO } from '@/lib/products'
import { gameMetadata, gameNodes } from '@/lib/seo'

import styles from './game.module.css'

const game = gameBySlug('kick-off-2')

/** Kept under ~160 characters so a search result does not truncate it. */
const SEO_DESCRIPTION =
  'Kick Off 2 is an arcade football game for iOS and Android: a match in one tap, ninety seconds a side, and no connection required.'

export const metadata: Metadata = gameMetadata('kick-off-2', SEO_DESCRIPTION)

const features = [
  {
    icon: <BallIcon />,
    title: 'A match in one tap',
    body: 'No squad screen, no transfer window, no tutorial you have to sit through. Open it, pick a side, kick off — the whole thing between launch and first touch is one screen.',
  },
  {
    icon: <StopwatchIcon />,
    title: 'Ninety seconds a side',
    body: 'A full match fits inside a lift ride. Short enough that losing costs you nothing, which is the only reason anyone plays one more.',
  },
  {
    icon: <OfflineIcon />,
    title: 'Works with the radio off',
    body: 'Every match runs on the device. Aeroplane mode, a dead patch on the metro, a hotel with hostile wifi — none of it touches the game.',
  },
  {
    icon: <TrophyIcon />,
    title: 'A season you can actually finish',
    body: 'A cup run is a handful of matches, not a second job. Your progress sits on the phone and carries forward; nothing resets because a server went away.',
  },
]

const play = [
  {
    label: 'STEP 01',
    title: 'Pick a side',
    body: 'A short list of teams, each one honestly different to play. No stats to study first.',
  },
  {
    label: 'STEP 02',
    title: 'Kick off',
    body: 'Swipe to pass, hold to shoot, tap to slide. Three verbs, no on-screen stick.',
  },
  {
    label: 'STEP 03',
    title: 'Read the run',
    body: 'The ball carries real weight and your players make real runs. Find one before the keeper does.',
  },
  {
    label: 'STEP 04',
    title: 'Finish',
    body: 'Full time in ninety seconds a side. Then the only decision left: go again.',
  },
]

/** The facts a store listing asks for, in the vocabulary the stores use. */
const listing = [
  { label: 'GENRE', value: game.genre },
  { label: 'PLATFORMS', value: game.platforms },
  { label: 'AGE RATING', value: game.rating },
  { label: 'PRICE', value: 'Free' },
  { label: 'IN-APP PURCHASES', value: 'None' },
  { label: 'ADVERTISING', value: 'None' },
  { label: 'ACCOUNT REQUIRED', value: 'No' },
  { label: 'CONNECTION REQUIRED', value: 'No' },
]

const documents = [
  {
    href: '/games/kick-off-2/support',
    title: 'Support',
    body: 'How to reach a person, and answers to the things that go wrong most often.',
  },
  {
    href: '/games/kick-off-2/privacy',
    title: 'Privacy Policy',
    body: 'What the game collects, what it never collects, and how to switch the rest off.',
  },
  {
    href: '/games/kick-off-2/terms',
    title: 'Terms of Use',
    body: 'The licence the game is offered under, including the terms Apple requires.',
  },
]

export default function KickOffTwoRoute() {
  return (
    <>
      <SiteHeader
        product={game.name}
        homeHref="/games"
        links={[
          { label: 'All games', href: '/games' },
          { label: 'Support', href: '/games/kick-off-2/support' },
        ]}
        cta={{ label: 'Get in touch', href: CONTACT_MAILTO }}
      />

      <main>
        {/* Hero ------------------------------------------------------------ */}
        <section className={styles.hero}>
          <div className={styles.glow} aria-hidden="true" />

          <div className={`shell ${styles.heroInner}`}>
            <div>
              <div className={styles.heroMeta}>
                <span className={`mono ${styles.heroOrdinal}`}>GAME {game.ordinal}</span>
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

            <div className={styles.mockupWrap}>
              <KickOffTwoMockup />
            </div>
          </div>
        </section>

        {/* Why ------------------------------------------------------------- */}
        <section>
          <div className={`shell sectionBody ${styles.split}`}>
            <Reveal>
              <div className="eyebrow">Why another football game</div>
              <h2 className={`h2 ${styles.splitHead}`}>
                The ball got further away every year.
              </h2>
            </Reveal>
            <Reveal delay={100} className={styles.prose}>
              <p>
                Football on a phone used to be a thing you did while the kettle boiled. Then it
                grew a squad screen, a card economy, a login, an energy meter and a download
                measured in gigabytes — and somewhere in all of it, the part where you kick a
                ball became the shortest thing in the session.
              </p>
              <p>
                Kick Off 2 is a deliberate step back. One tap to a match, three controls, ninety
                seconds a side, and nothing on the other end of a network call. It is a small
                game, finished — not a service that wants your evenings.
              </p>
            </Reveal>
          </div>
        </section>

        {/* What's in it ---------------------------------------------------- */}
        <section id="features">
          <div className="shell sectionBody">
            <Reveal>
              <div className="eyebrow">What’s in it</div>
              <h2 className={`h2 ${styles.sectionHead}`}>Four things, done properly.</h2>
            </Reveal>

            <div className={styles.featureGrid}>
              {features.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 80}>
                  {feature.icon}
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className="cardBody">{feature.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it plays ---------------------------------------------------- */}
        <section id="play">
          <div className="shell sectionBody">
            <Reveal>
              <div className="eyebrow">How it plays</div>
              <h2 className="h2">Kick off to full time.</h2>
            </Reveal>

            <ol className={styles.track}>
              {play.map((step, i) => (
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
              <div className="eyebrow">Where to get it</div>
              <h2 className={`h2 ${styles.sectionHead}`}>Coming to both stores.</h2>
              <p className={styles.sectionLede}>
                Kick Off 2 is in submission. Nothing links out yet, because a store badge that
                goes nowhere helps no one — the links land here the day each listing is live.
              </p>
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
                      <a href={`${SUPPORT_MAILTO}?subject=Kick%20Off%202%20launch`} className={styles.inlineLink}>
                        {SUPPORT_EMAIL}
                      </a>{' '}
                      and we’ll tell you when it is.
                    </p>
                  )}
                </Reveal>
              ))}
            </div>

            <Reveal delay={160}>
              <dl className={styles.listing}>
                {listing.map((row) => (
                  <div key={row.label} className={styles.listingRow}>
                    <dt className={`mono ${styles.listingLabel}`}>{row.label}</dt>
                    <dd className={styles.listingValue}>{row.value}</dd>
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
              <div className="eyebrow">Support & legal</div>
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
              <h2 className={`h2 ${styles.closingTitle}`}>Found a bug? Tell us.</h2>
              <p className={styles.closingNote}>
                One address, read by the people who built it. Device, OS version and what you
                were doing gets you a useful answer fastest.
              </p>
              <div className={styles.closingActions}>
                <Link href="/games/kick-off-2/support" className="btn btn--primary">
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
                  Small games, built properly — and the products the same team ships.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter href="/" />
      <JsonLd nodes={gameNodes('kick-off-2', SEO_DESCRIPTION)} />
    </>
  )
}
