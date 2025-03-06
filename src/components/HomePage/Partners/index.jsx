import styles from './styles.module.css'

export default function Partners({props}) {
  return (
    <div className={styles.container}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <div className={styles.partner}>
            <img src={props.logo1} alt="logo" className={styles.logo} />
          </div>
          <div className={styles.partner}>
            <img src={props.logo2} alt="logo" className={styles.logo} />
          </div>
          <div className={styles.partner}>
            <img src={props.logo3} alt="logo" className={styles.logo} />
          </div>
          <div className={styles.partner}>
            <img src={props.logo1} alt="logo" className={styles.logo} />
          </div>
          <div className={styles.partner}>
            <img src={props.logo2} alt="logo" className={styles.logo} />
          </div>
          <div className={styles.partner}>
            <img src={props.logo3} alt="logo" className={styles.logo} />
          </div>
        </div>
      </div>
    </div>
  )
}
