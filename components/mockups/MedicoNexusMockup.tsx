import Ping from './Ping'
import styles from './Mockups.module.css'

const specialties = ['Cardiology', 'Internal medicine']

const replies = [
  {
    initials: 'RK',
    credential: 'Cardiologist · 11 yrs',
    text: 'Saw three like this post-viral. Two settled in 6–8 weeks on volume repletion alone.',
  },
  {
    initials: 'AN',
    credential: 'Internal medicine · 6 yrs',
    text: 'Worth a standing test before you commit to anything.',
  },
]

export default function MedicoNexusMockup() {
  return (
    <figure className={`${styles.panel} ${styles.caseCard}`} aria-label="Medico Nexus case thread">
      <div className={styles.caseTop}>
        <span className={`mono ${styles.tag}`}>CASE #0412 · DE-IDENTIFIED</span>
        <Ping />
      </div>

      <p className={styles.caseText}>
        Persistent post-prandial tachycardia, 34F, normal echo, thyroid panel unremarkable. Anyone
        seen this pattern resolve without beta-blockade?
      </p>

      <div className={`${styles.chipRow} ${styles.caseChips}`}>
        {specialties.map((specialty) => (
          <span key={specialty} className={styles.chip}>
            {specialty}
          </span>
        ))}
      </div>

      <div className={styles.replies}>
        {replies.map((reply) => (
          <div key={reply.initials} className={styles.reply}>
            <div className={styles.avatar} aria-hidden="true">
              {reply.initials}
            </div>
            <div>
              <div className={styles.credential}>{reply.credential}</div>
              <p className={styles.replyText}>{reply.text}</p>
            </div>
          </div>
        ))}
      </div>
    </figure>
  )
}
