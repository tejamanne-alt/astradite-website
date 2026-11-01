import Ping from './Ping'
import styles from './Mockups.module.css'

const controls = ['Swipe to pass', 'Hold to shoot', 'Tap to slide']

/**
 * The match HUD, as it reads mid-game: clock, score, a pitch with the ball in
 * motion. Drawn rather than screenshotted so it stays sharp at any size and
 * carries no weight — the site ships no images.
 */
export default function KickOffTwoMockup() {
  return (
    <figure className={`${styles.panel} ${styles.phone} ${styles.pitchPhone}`} aria-label="Kick Off 2 match view">
      <div className={styles.phoneTop}>
        <span className={`mono ${styles.tag}`}>MATCH 01 · HALF 2</span>
        <span className={`mono ${styles.clock}`}>
          <Ping />
          0:47
        </span>
      </div>

      <div className={styles.scoreboard}>
        <div className={styles.scoreSide}>
          <span className={styles.teamDot} data-side="home" aria-hidden="true" />
          <span className={styles.teamName}>KRN</span>
        </div>
        <div className={`mono ${styles.score}`}>2&ndash;1</div>
        <div className={`${styles.scoreSide} ${styles.scoreSideAway}`}>
          <span className={styles.teamName}>VJA</span>
          <span className={styles.teamDot} data-side="away" aria-hidden="true" />
        </div>
      </div>

      <div className={styles.pitch}>
        <svg viewBox="0 0 220 150" className={styles.pitchSvg} aria-hidden="true">
          {/* Touchlines, halfway line, centre circle and the two boxes. */}
          <g stroke="rgba(54, 217, 123, 0.38)" strokeWidth="1.2" fill="none">
            <rect x="6" y="6" width="208" height="138" rx="3" />
            <path d="M110 6v138" />
            <circle cx="110" cy="75" r="22" />
            <rect x="6" y="42" width="26" height="66" />
            <rect x="188" y="42" width="26" height="66" />
          </g>
          <circle cx="110" cy="75" r="2.4" fill="rgba(54, 217, 123, 0.55)" />

          {/* The ball's run at the near post, and the ball itself. */}
          <path
            d="M70 112C104 104 142 96 176 78"
            stroke="rgba(232, 232, 232, 0.5)"
            strokeWidth="1.6"
            strokeDasharray="4 5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="70" cy="112" r="3" fill="rgba(232, 232, 232, 0.45)" />
          <circle cx="176" cy="78" r="5.5" fill="#ffffff" />
          <circle cx="176" cy="78" r="5.5" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="0.8" />
          <path d="M176 74.2l2.4 1.8-0.9 2.9h-3l-0.9-2.9z" fill="#111111" />
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
