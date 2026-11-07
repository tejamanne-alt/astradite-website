import Ping from './Ping'
import styles from './Mockups.module.css'

const controls = ['Tap to jump', 'Hold to slam', 'Swipe to dash']

const stats = [
  { label: 'DISTANCE', value: '412 m' },
  { label: 'BEST', value: '1,208 m' },
  { label: 'CHAIN', value: '×7' },
]

/**
 * A run in progress: the counter, the best to beat, and a slime mid-jump over
 * a gap with the next one already coming. Drawn rather than screenshotted so
 * it stays sharp at any size and carries no weight — the site ships no images.
 */
export default function SlimeRushMockup() {
  return (
    <figure
      className={`${styles.panel} ${styles.phone} ${styles.runPhone}`}
      aria-label="Slime Rush run view"
    >
      <div className={styles.phoneTop}>
        <span className={`mono ${styles.tag}`}>RUN 14</span>
        <span className={`mono ${styles.clock}`}>
          <Ping />
          LIVE
        </span>
      </div>

      <div className={styles.runStats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.runStat}>
            <div className={`mono ${styles.runStatLabel}`}>{stat.label}</div>
            <div className={`mono ${styles.runStatValue}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div className={styles.lane}>
        <svg viewBox="0 0 220 150" className={styles.laneSvg} aria-hidden="true">
          {/* The floor, and the gaps that are the whole game. */}
          <g fill="rgba(192, 132, 252, 0.26)">
            <rect x="0" y="112" width="56" height="9" rx="3" />
            <rect x="96" y="112" width="62" height="9" rx="3" />
            <rect x="178" y="112" width="42" height="9" rx="3" />
          </g>
          <g fill="rgba(192, 132, 252, 0.5)">
            <rect x="0" y="112" width="56" height="2.5" rx="1.25" />
            <rect x="96" y="112" width="62" height="2.5" rx="1.25" />
            <rect x="178" y="112" width="42" height="2.5" rx="1.25" />
          </g>

          {/* The jump in progress. The slime sits at this curve's apex, so the
              two always agree: move one and you must move the other. */}
          <path
            d="M56 110Q82 44 108 110"
            stroke="rgba(232, 232, 232, 0.38)"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Spikes on the landing platform — the next thing to clear. */}
          <g fill="rgba(232, 232, 232, 0.5)">
            <path d="M126 112l6-13 6 13z" />
            <path d="M140 112l6-13 6 13z" />
          </g>

          {/* The slime, at the apex (82, 77): airborne, so no contact shadow. */}
          <g transform="translate(82 57)">
            <path
              d="M-16 18C-16 -2 -9 -11 0 -11C9 -11 16 -2 16 18C16 19.1 15.1 20 14 20H-14C-15.1 20 -16 19.1 -16 18Z"
              fill="#C084FC"
            />
            {/* A highlight, so it reads as wet rather than flat. */}
            <path
              d="M-8 2C-8 -4 -5 -7 -2 -7"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="-5.5" cy="6" r="3.2" fill="#0b0b0b" />
            <circle cx="5.5" cy="6" r="3.2" fill="#0b0b0b" />
            <circle cx="-4.6" cy="5" r="1.1" fill="#ffffff" />
            <circle cx="6.4" cy="5" r="1.1" fill="#ffffff" />
          </g>

          {/* The chain bonus, popped on the last clean landing. */}
          <text
            x="150"
            y="58"
            fill="rgba(192, 132, 252, 0.95)"
            fontSize="13"
            fontFamily="monospace"
          >
            +120
          </text>
        </svg>
      </div>

      <div className={styles.controlRow}>
        {controls.map((control) => (
          <span key={control} className={styles.controlChip}>
            {control}
          </span>
        ))}
      </div>
    </figure>
  )
}
