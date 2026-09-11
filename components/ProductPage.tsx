import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'

import Reveal from './Reveal'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import StatStrip, { type Stat } from './StatStrip'
import { ArrowUpRight } from './icons'
import styles from './ProductPage.module.css'

export type Action = {
  label: string
  href: string
  external?: boolean
  variant: 'primary' | 'secondary'
  /** Renders the outbound arrow glyph after the label. */
  outbound?: boolean
  mono?: boolean
}

export type TrackItem = {
  rule: 'gradient' | 'solid' | 'muted' | 'faint'
  label?: string
  tone?: 'accent' | 'pending' | 'dim'
  title: string
  body: string
}

export type ProductPageData = {
  name: string
  /** Mono kicker beside the status pill, e.g. "PRODUCT 01". */
  kicker: string
  status: 'live' | 'in-progress'
  statusLabel: string
  tagline: string
  description: string
  glowAlpha?: number
  headerCta: {
    label: string
    href: string
    external?: boolean
    variant?: 'primary' | 'secondary'
  }
  heroActions: Action[]
  mockup: ReactNode
  stats: Stat[]
  problem: { eyebrow: string; title: string; paragraphs: string[] }
  build: {
    eyebrow: string
    title: string
    cards: { icon: ReactNode; title: string; body: string }[]
  }
  track: {
    eyebrow: string
    title: string
    minWidth?: number
    labelVariant?: 'step' | 'status'
    ordered?: boolean
    items: TrackItem[]
  }
  closing: {
    title: string
    note?: string
    actions: Action[]
    next: { label: string; name: string; href: string; blurb: string }
  }
}

function ActionLink({ action }: { action: Action }) {
  const className = [
    'btn',
    action.variant === 'primary' ? 'btn--primary' : 'btn--secondary',
    action.mono ? 'btn--mono' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      href={action.href}
      className={className}
      {...(action.external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {action.label}
      {action.outbound ? <ArrowUpRight /> : null}
    </a>
  )
}

export default function ProductPage({ data }: { data: ProductPageData }) {
  const trackItems = data.track.items
  const labelVariant = data.track.labelVariant ?? 'step'
  const TrackTag = data.track.ordered === false ? 'div' : 'ol'

  return (
    <>
      <SiteHeader product={data.name} cta={data.headerCta} links={[{ label: 'All products', href: '/#products' }]} />

      <main>
        {/* Hero ------------------------------------------------------------ */}
        <section className={styles.hero}>
          <div
            className={styles.glow}
            aria-hidden="true"
            style={{ '--glow-alpha': data.glowAlpha ?? 0.1 } as CSSProperties}
          />

          <div className={`shell shell--narrow ${styles.heroInner}`}>
            <div>
              <div className={styles.heroMeta}>
                <span className={`mono ${styles.heroOrdinal}`}>{data.kicker}</span>
                <span
                  className={`pill ${data.status === 'live' ? 'pill--live' : 'pill--progress'}`}
                >
                  {data.statusLabel}
                </span>
              </div>
              <h1 className={styles.heroTitle}>{data.name}</h1>
              <p className={styles.heroTagline}>{data.tagline}</p>
              <p className={styles.heroBody}>{data.description}</p>
              <div className={styles.heroActions}>
                {data.heroActions.map((action) => (
                  <ActionLink key={action.href + action.label} action={action} />
                ))}
              </div>
            </div>

            <div className={styles.mockupWrap}>{data.mockup}</div>
          </div>
        </section>

        <StatStrip items={data.stats} narrow />

        {/* The problem ----------------------------------------------------- */}
        <section className="section">
          <div className={`shell shell--narrow sectionBody sectionBody--narrow ${styles.split}`}>
            <Reveal>
              <div className="eyebrow">{data.problem.eyebrow}</div>
              <h2 className={`h2 h2--product ${styles.splitHead}`}>{data.problem.title}</h2>
            </Reveal>
            <Reveal delay={100} className={styles.prose}>
              {data.problem.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
        </section>

        {/* What we built --------------------------------------------------- */}
        <section id="build" className="section">
          <div className="shell shell--narrow sectionBody sectionBody--narrow">
            <Reveal>
              <div className="eyebrow">{data.build.eyebrow}</div>
              <h2 className={`h2 h2--product ${styles.buildHead}`}>{data.build.title}</h2>
            </Reveal>

            <div className={`ruleGrid ${styles.buildGrid}`}>
              {data.build.cards.map((card, i) => (
                <Reveal key={card.title} delay={i * 80} className={styles.buildCard}>
                  {card.icon}
                  <h3 className={styles.buildCardTitle}>{card.title}</h3>
                  <p className="cardBody">{card.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Flow / axes / status -------------------------------------------- */}
        <section className="section">
          <div className="shell shell--narrow sectionBody sectionBody--narrow">
            <Reveal>
              <div className="eyebrow">{data.track.eyebrow}</div>
              <h2 className="h2 h2--product">{data.track.title}</h2>
            </Reveal>

            <TrackTag
              className={styles.track}
              style={
                { '--track-min': `${data.track.minWidth ?? 210}px` } as CSSProperties
              }
            >
              {trackItems.map((item, i) => (
                <Reveal
                  as={data.track.ordered === false ? 'div' : 'li'}
                  key={item.title}
                  delay={i * 80}
                >
                  <div
                    className={`${styles.rule} ${styles[`rule--${item.rule}`]}`}
                    aria-hidden="true"
                  />
                  {item.label ? (
                    <div
                      className={`mono ${styles.trackLabel} ${
                        styles[`trackLabel--${labelVariant}`]
                      } ${styles[`tone--${item.tone ?? 'accent'}`]}`}
                    >
                      {item.label}
                    </div>
                  ) : null}
                  <h3
                    className={`${styles.trackTitle} ${
                      item.label ? styles['trackTitle--labelled'] : styles['trackTitle--bare']
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`${styles.trackBody} ${
                      item.label ? styles['trackBody--labelled'] : styles['trackBody--bare']
                    }`}
                  >
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </TrackTag>
          </div>
        </section>

        {/* Closing --------------------------------------------------------- */}
        <section>
          <div className={`shell shell--narrow ${styles.closing}`}>
            <Reveal>
              <h2 className={`h2 h2--product ${styles.closingTitle}`}>{data.closing.title}</h2>
              {data.closing.note ? <p className={styles.closingNote}>{data.closing.note}</p> : null}
              <div className={styles.closingActions}>
                {data.closing.actions.map((action) => (
                  <ActionLink key={action.href + action.label} action={action} />
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className={styles.nextCard}>
                <div className={`mono ${styles.nextLabel}`}>{data.closing.next.label}</div>
                <Link href={data.closing.next.href} className={`hit ${styles.nextLink}`}>
                  {data.closing.next.name} &rarr;
                </Link>
                <p className={styles.nextBlurb}>{data.closing.next.blurb}</p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter narrow href="/" />
    </>
  )
}
