import Link from 'next/link'

import { StarMark } from './StarMark'
import styles from './SiteFooter.module.css'

type SiteFooterProps = {
  /** Product pages run to the 1120px measure. */
  narrow?: boolean
  /** When set, the lockup links home. */
  href?: string
}

export default function SiteFooter({ narrow = false, href }: SiteFooterProps) {
  const brand = (
    <>
      <StarMark size={16} />
      <span className={styles.name}>Astradite Private Limited</span>
    </>
  )

  return (
    <footer className={styles.footer}>
      <div className={`shell${narrow ? ' shell--narrow' : ''} ${styles.inner}`}>
        {href ? (
          <Link href={href} className={`hit ${styles.brand}`}>
            {brand}
          </Link>
        ) : (
          <div className={styles.brand}>{brand}</div>
        )}
        <div className={`mono ${styles.tagline}`}>Stellar Intelligence. Applied.</div>
      </div>
    </footer>
  )
}
