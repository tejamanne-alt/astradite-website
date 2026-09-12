import Link from 'next/link'

import Reveal from '@/components/Reveal'
import ScrollProgress from '@/components/ScrollProgress'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import Starfield from '@/components/Starfield'
import StatStrip from '@/components/StatStrip'
import { ArrowRight } from '@/components/icons'
import { CONTACT_EMAIL, CONTACT_MAILTO, products } from '@/lib/products'

import styles from './page.module.css'

const capabilities = [
  {
    ordinal: '01',
    title: 'Product engineering',
    body: 'From first principle to shipped surface — architecture, data model, interface, deploy pipeline. One team carries it end to end.',
  },
  {
    ordinal: '02',
    title: 'Applied intelligence',
    body: 'Knowledge graphs, inference and recommendation layers that turn raw signal into a read someone can actually act on.',
  },
  {
    ordinal: '03',
    title: 'Immersive systems',
    body: 'Real-time, spatial and simulation-grade work for the problems where a flat screen stops being enough.',
  },
  {
    ordinal: '04',
    title: 'High-velocity delivery',
    body: 'Small teams, short loops, production from the first week. Velocity is an engineering property, not a promise.',
  },
]

const process = [
  {
    ordinal: '01',
    title: 'Observe',
    body: 'We start inside the problem, not the pitch — the constraints, the users, the systems already in the room.',
  },
  {
    ordinal: '02',
    title: 'Architect',
    body: 'A model of the domain before a line of product code. Data first, interface second, never the reverse.',
  },
  {
    ordinal: '03',
    title: 'Ship',
    body: 'Something real in front of real users early, then tightened in short loops against how they actually use it.',
  },
  {
    ordinal: '04',
    title: 'Compound',
    body: 'What one product proves, the next one inherits. Nothing is rebuilt twice.',
  },
]

const stats = [
  { label: 'PRODUCTS', value: 'Two live, one in progress' },
  { label: 'DOMAINS', value: 'Hospitality, health, clinical networks' },
  { label: 'BASED IN', value: 'Kurnool, Andhra Pradesh, India' },
]

const team = ['Akshanth V', 'Chandrahas Chatta', 'Teja Manne']

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader
        homeHref="#top"
        links={[
          { label: 'What we do', href: '#capabilities' },
          { label: 'Products', href: '#products' },
          { label: 'How we work', href: '#process' },
        ]}
        cta={{ label: 'Get in touch', href: CONTACT_MAILTO }}
      />

      <main id="top" style={{ position: 'relative' }}>
        {/* Hero ------------------------------------------------------------ */}
        <section className={styles.hero}>
          <Starfield />
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.glowFar} aria-hidden="true" />

          <div className={`shell ${styles.heroInner}`}>
            <div>
              <div className={`eyebrow ${styles.heroEyebrow}`}>Astradite Private Limited</div>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroWord}>Stellar</span>{' '}
                <span className={styles.heroWord}>Intelligence.</span>{' '}
                <span className={styles.heroWord}>Applied.</span>
              </h1>
              <p className={styles.heroLede}>
                Astradite is where profound intelligence meets limitless imagination. Rooted in
                deep technical mastery, we architect high-velocity software that spans from the
                highly practical to the deeply immersive — engineering solutions for complex,
                real-world problems.
              </p>
              <div className={styles.heroActions}>
                <Link href="#products" className="btn btn--primary">
                  Explore the products
                  <ArrowRight />
                </Link>
                <a href={CONTACT_MAILTO} className="btn btn--secondary btn--mono">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </section>

        <StatStrip items={stats} />

        {/* What we do ------------------------------------------------------ */}
        <section id="capabilities" className="section">
          <div className="shell sectionBody">
            <Reveal>
              <div className="eyebrow">What we do</div>
              <h2 className={`h2 ${styles.capabilityHead}`}>
                We build the whole product, not a piece of it.
              </h2>
            </Reveal>

            <div className={`ruleGrid ${styles.cardGrid}`}>
              {capabilities.map((item, i) => (
                <Reveal key={item.ordinal} delay={i * 80} className={styles.card}>
                  <div className={`mono ${styles.cardOrdinal}`}>{item.ordinal}</div>
                  <h3 className="cardTitle">{item.title}</h3>
                  <p className="cardBody">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Products -------------------------------------------------------- */}
        <section id="products" className="section">
          <div className="shell sectionBody">
            <Reveal className={styles.productsHead}>
              <div>
                <div className="eyebrow">Products</div>
                <h2 className="h2">Three products, one foundation.</h2>
              </div>
              <p className={styles.productsIntro}>
                Everything we ship is our own product first. Each one leaves behind infrastructure
                the next one starts from.
              </p>
            </Reveal>

            <div className={styles.productList}>
              {products.map((product) => (
                <Reveal as="article" key={product.slug} className={styles.productRow}>
                  <div>
                    <div className={styles.productMeta}>
                      <span className={`mono ${styles.productOrdinal}`}>{product.ordinal}</span>
                      <span
                        className={`pill ${
                          product.status === 'live' ? 'pill--live' : 'pill--progress'
                        }`}
                      >
                        {product.statusLabel}
                      </span>
                    </div>
                    <h3 className={styles.productName}>
                      <Link href={product.href} className={`hit ${styles.productNameLink}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className={styles.productTagline}>{product.tagline}</p>
                  </div>

                  <div>
                    <p className={styles.productBody}>{product.description}</p>
                    <div className={styles.productLinks}>
                      <Link href={product.href} className={`hit ${styles.caseStudyLink}`}>
                        {product.caseStudyLabel}
                        <ArrowRight size={15} />
                      </Link>
                      {product.domain ? (
                        <a
                          href={product.domain.href}
                          target="_blank"
                          rel="noopener"
                          className={`hit mono ${styles.domainLink}`}
                        >
                          {product.domain.label} ↗
                        </a>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How we work ----------------------------------------------------- */}
        <section id="process" className="section">
          <div className="shell sectionBody">
            <Reveal>
              <div className="eyebrow">How we work</div>
              <h2 className={`h2 ${styles.processHead}`}>Four moves, repeated until it holds.</h2>
            </Reveal>

            <ol className={`ruleGrid ${styles.processGrid}`}>
              {process.map((step, i) => (
                <Reveal as="li" key={step.ordinal} delay={i * 80} className={styles.processItem}>
                  <div className={`mono ${styles.processOrdinal}`}>{step.ordinal}</div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processBody}>{step.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact --------------------------------------------------------- */}
        <section id="contact">
          <div className={`shell ${styles.contact}`}>
            <Reveal>
              <div className="eyebrow">Contact</div>
              <h2 className={`h2 ${styles.contactHead}`}>Tell us what you&rsquo;re building.</h2>
              <a href={CONTACT_MAILTO} className={`hit mono ${styles.contactMail}`}>
                {CONTACT_EMAIL}
              </a>
            </Reveal>

            <Reveal delay={100}>
              <div className={styles.contactBlock}>
                <div className={`mono ${styles.contactLabel}`}>THE TEAM</div>
                <div className={styles.chips}>
                  {team.map((person) => (
                    <span key={person} className={styles.teamChip}>
                      {person}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.contactBlock}>
                <div className={`mono ${styles.contactLabel}`}>REGISTERED OFFICE</div>
                <p className={styles.address}>
                  1/22, Mamidalapadu
                  <br />
                  Kurnool &mdash; 518004
                  <br />
                  Andhra Pradesh, India
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
