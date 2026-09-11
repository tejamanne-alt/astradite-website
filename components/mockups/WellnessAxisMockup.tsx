import type { CSSProperties } from 'react'

import styles from './Mockups.module.css'

const axes = [
  { name: 'Food', value: '+31', width: 72, delay: 500, negative: false },
  { name: 'Activity', value: '+24', width: 56, delay: 620, negative: false },
  { name: 'Sleep', value: '−7', width: 22, delay: 740, negative: true },
]

const conditions = ['Type 2 diabetes', 'Hypertension']

export default function WellnessAxisMockup() {
  return (
    <figure className={`${styles.panel} ${styles.axisCard}`} aria-label="Wellness Axis daily score">
      <div className={`mono ${styles.tag}`}>TODAY&rsquo;S AXIS</div>

      <div className={styles.score}>
        <span className={styles.scoreValue}>+62</span>
        <span className={styles.scoreNote}>net impact</span>
      </div>

      <div className={styles.bars}>
        {axes.map((axis) => (
          <div key={axis.name}>
            <div className={styles.barHead}>
              <span>{axis.name}</span>
              <span
                className={`${styles.barValue}${
                  axis.negative ? ` ${styles['barValue--negative']}` : ''
                }`}
              >
                {axis.value}
              </span>
            </div>
            <div className={styles.barTrack}>
              <div
                className={`${styles.barFill}${
                  axis.negative ? ` ${styles['barFill--negative']}` : ''
                }`}
                style={
                  { width: `${axis.width}%`, '--bar-delay': `${axis.delay}ms` } as CSSProperties
                }
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.conditions}>
        <div className={`mono ${styles.conditionsLabel}`}>AGAINST YOUR CONDITIONS</div>
        <div className={`${styles.chipRow} ${styles.conditionsChips}`}>
          {conditions.map((condition) => (
            <span key={condition} className={styles.chip}>
              {condition}
            </span>
          ))}
        </div>
      </div>
    </figure>
  )
}
