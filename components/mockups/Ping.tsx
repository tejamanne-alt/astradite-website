import styles from './Mockups.module.css'

/** Solid dot with a ring pinging out of it — the "this is live" indicator. */
export default function Ping() {
  return (
    <span className={styles.ping} aria-hidden="true">
      <span className={styles.pingRing} />
      <span className={styles.pingDot} />
    </span>
  )
}
