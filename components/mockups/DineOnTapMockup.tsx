import Ping from './Ping'
import styles from './Mockups.module.css'

const items = [
  { name: '2 × Ghee Roast Dosa', price: '₹360' },
  { name: '1 × Filter Coffee', price: '₹60' },
]

export default function DineOnTapMockup() {
  return (
    <figure className={`${styles.panel} ${styles.phone}`} aria-label="DineOnTap guest view">
      <div className={styles.phoneTop}>
        <span className={`mono ${styles.tag}`}>TABLE 07</span>
        <span className={`mono ${styles.openTab}`}>
          <Ping />
          OPEN TAB
        </span>
      </div>

      <div className={styles.orderCard}>
        <div className={styles.orderTitle}>Your order</div>
        <div className={styles.orderLines}>
          {items.map((item) => (
            <div key={item.name} className={styles.orderLine}>
              <span className={styles.orderItem}>{item.name}</span>
              <span className={`mono ${styles.orderPrice}`}>{item.price}</span>
            </div>
          ))}
          <div className={`${styles.orderLine} ${styles.orderTotal}`}>
            <span className={styles.orderTotalLabel}>Total</span>
            <span className={`mono ${styles.orderTotalValue}`}>₹420</span>
          </div>
        </div>
        <div className={styles.sendButton}>Send to kitchen</div>
      </div>

      <div className={styles.guestCard}>
        <div className={`mono ${styles.guestLabel}`}>RECOGNISED GUEST</div>
        <div className={styles.guestNote}>4th visit this month · usually orders filter coffee</div>
      </div>
    </figure>
  )
}
