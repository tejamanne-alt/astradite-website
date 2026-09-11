import styles from './StatStrip.module.css'

export type Stat = { label: string; value: string }

type StatStripProps = {
  items: Stat[]
  narrow?: boolean
}

export default function StatStrip({ items, narrow = false }: StatStripProps) {
  return (
    <section className="section">
      <dl
        className={`shell${narrow ? ' shell--narrow' : ''} ${styles.strip}${
          narrow ? ` ${styles['strip--narrow']}` : ''
        }`}
      >
        {items.map((item) => (
          <div key={item.label} className={styles.cell}>
            <dt className={`mono ${styles.label}`}>{item.label}</dt>
            <dd className={styles.value}>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
