import styles from '../../../styles/pages/About.module.scss'

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="about">
      <h1>About</h1>
      <div className={styles.bubbles}>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
      </div>
    </section>
  )
};