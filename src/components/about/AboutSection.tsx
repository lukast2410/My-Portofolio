import styles from '../../../styles/pages/About.module.scss'
import AOS from 'aos'
import { useEffect } from 'react'

export default function AboutSection() {
  useEffect(() => {
    AOS.init()
  }, [])

	return (
		<section className={styles.aboutSection} id='about'>
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

			<div className={styles.container}>
				<h1
					data-aos='fade-up'
					data-aos-easing='ease-in-sine'
					data-aos-duration='1000'
				>{`{ Hello World }`}</h1>
				<p>
					My name is <span>Lukas Tanto Kurniawan</span>, I am a Mobile & Web Developer, interested in UI & UX
					Design, Mobile Application Development, Frontend & Backend Development.
				</p>
				<p>
					I always strive for excellent at building a functional application with aesthetic design to create
					an amazing and great user experience.
				</p>
				<p>
					I love to discover, learn, and make new things. I also love to share my knowledge and manage people
					to work with the best performance.
				</p>
			</div>
		</section>
	)
}
