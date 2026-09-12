import styles from './StatStrip.module.css'

export type Stat = { label: string; value: string }

type StatStripProps = {
  items: Stat[]
}

export default function StatStrip({ items }: StatStripProps) {
  return (
    <section className="section">
      <div className="shell">
        <dl className={styles.strip}>
          {items.map((item) => (
            <div key={item.label} className={styles.cell}>
              <dt className={`mono ${styles.label}`}>{item.label}</dt>
              <dd className={styles.value}>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
