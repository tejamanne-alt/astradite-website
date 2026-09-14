import Link from 'next/link'

import styles from './SiteHeader.module.css'

type NavLink = { label: string; href: string }

type SiteHeaderProps = {
  /** Appended after the wordmark on product pages, e.g. "/ DineOnTap". */
  product?: string
  /** Where the wordmark points. */
  homeHref?: string
  links?: NavLink[]
  cta: {
    label: string
    href: string
    external?: boolean
    variant?: 'primary' | 'secondary'
  }
}

export default function SiteHeader({
  product,
  homeHref = '/',
  links = [],
  cta,
}: SiteHeaderProps) {
  const isProduct = Boolean(product)
  const ctaVariant = cta.variant ?? 'primary'

  return (
    <header className={styles.header}>
      <nav className={`shell ${styles.nav}`}>
        <Link href={homeHref} className={`hit ${styles.brand}`}>
          <span
            className={`${styles.wordmark}${
              isProduct ? ` ${styles['wordmark--product']}` : ''
            }`}
          >
            Astradite
          </span>
          {product ? <span className={styles.productName}>/ {product}</span> : null}
        </Link>

        {links.length > 0 ? (
          <div className={styles.navLinks}>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={`hit ${styles.link}`}>
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}

        <a
          href={cta.href}
          className={`hit ${styles.cta} ${styles[`cta--${ctaVariant}`]}`}
          {...(cta.external ? { target: '_blank', rel: 'noopener' } : {})}
        >
          {cta.label}
        </a>
      </nav>
    </header>
  )
}
