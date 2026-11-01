import Link from 'next/link'
import type { ReactNode } from 'react'

import JsonLd from './JsonLd'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import { legalNodes } from '@/lib/seo'
import { POLICY_EFFECTIVE_DATE, SUPPORT_MAILTO, gameBySlug, type GameSlug } from '@/lib/games'
import { CONTACT_MAILTO } from '@/lib/products'

import styles from './LegalPage.module.css'

/**
 * Body content is `ReactNode` rather than a string because these documents are
 * authored in TSX and need inline links — "see the Privacy Policy", an address,
 * an email — and a markup mini-language to carry them would be a worse trade
 * than just writing the JSX.
 */
export type LegalBlock =
  | { kind: 'p'; body: ReactNode }
  | { kind: 'list'; items: ReactNode[] }
  | { kind: 'terms'; items: { term: string; body: ReactNode }[] }
  | { kind: 'callout'; body: ReactNode }

export type LegalSection = {
  /** Anchor id. Stable: store listings and review notes link straight to these. */
  id: string
  heading: string
  blocks: LegalBlock[]
}

export type LegalPageData = {
  slug: GameSlug
  /** e.g. "Privacy Policy". */
  title: string
  lede: string
  /** Shown under the title and matched to what the store submission declares. */
  updated?: string
  sections: LegalSection[]
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case 'p':
      return <p className={styles.p}>{block.body}</p>
    case 'list':
      return (
        <ul className={styles.list}>
          {block.items.map((item, i) => (
            <li key={i} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      )
    case 'terms':
      return (
        <dl className={styles.terms}>
          {block.items.map((item) => (
            <div key={item.term} className={styles.termRow}>
              <dt className={styles.term}>{item.term}</dt>
              <dd className={styles.termBody}>{item.body}</dd>
            </div>
          ))}
        </dl>
      )
    case 'callout':
      return <div className={styles.callout}>{block.body}</div>
  }
}

export default function LegalPage({ data }: { data: LegalPageData }) {
  const game = gameBySlug(data.slug)
  const updated = data.updated ?? POLICY_EFFECTIVE_DATE

  const related = [
    { href: `${game.href}/privacy`, label: 'Privacy Policy' },
    { href: `${game.href}/terms`, label: 'Terms of Use' },
    { href: `${game.href}/support`, label: 'Support' },
  ].filter((link) => !link.href.endsWith(slugFor(data.title)))

  return (
    <>
      <SiteHeader
        product={game.name}
        homeHref={game.href}
        links={[
          { label: 'All games', href: '/games' },
          { label: game.name, href: game.href },
        ]}
        cta={{ label: 'Get in touch', href: CONTACT_MAILTO }}
      />

      <main>
        <div className={`shell ${styles.head}`}>
          <div className="eyebrow">{game.name}</div>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={`mono ${styles.updated}`}>Last updated {updated}</p>
          <p className={styles.lede}>{data.lede}</p>
        </div>

        {/* `.body` is the container; `.bodyGrid` is what responds to it. They
            have to be two elements: an element cannot match a container query
            against its own `container-type`, only against an ancestor's. */}
        <div className={`shell ${styles.body}`}>
         <div className={styles.bodyGrid}>
          {/* Sticky on a wide screen, a plain list on a narrow one. Keyed to the
              element's own width rather than the viewport, as the header is. */}
          <nav className={styles.toc} aria-label="On this page">
            <div className={`mono ${styles.tocLabel}`}>ON THIS PAGE</div>
            <ol className={styles.tocList}>
              {data.sections.map((section, i) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className={styles.tocLink}>
                    <span className={`mono ${styles.tocOrdinal}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className={styles.article}>
            {data.sections.map((section, i) => (
              <section key={section.id} id={section.id} className={styles.section}>
                <h2 className={styles.h2}>
                  <span className={`mono ${styles.sectionOrdinal}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {section.heading}
                </h2>
                {section.blocks.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </section>
            ))}

            <div className={styles.related}>
              <div className={`mono ${styles.relatedLabel}`}>ALSO FOR {game.name.toUpperCase()}</div>
              <div className={styles.relatedLinks}>
                {related.map((link) => (
                  <Link key={link.href} href={link.href} className={`hit ${styles.relatedLink}`}>
                    {link.label} &rarr;
                  </Link>
                ))}
                <a href={SUPPORT_MAILTO} className={`hit mono ${styles.relatedMail}`}>
                  Email us
                </a>
              </div>
            </div>
          </article>
         </div>
        </div>
      </main>

      <SiteFooter href="/" />
      <JsonLd
        nodes={legalNodes({
          title: data.title,
          description: data.lede,
          path: `${game.href}/${slugFor(data.title)}`,
          subject: game.name,
          subjectPath: game.href,
        })}
      />
    </>
  )
}

/** "Privacy Policy" -> "privacy", "Terms of Use" -> "terms", "Support" -> "support". */
function slugFor(title: string): string {
  if (title.startsWith('Privacy')) return 'privacy'
  if (title.startsWith('Terms')) return 'terms'
  return 'support'
}
