import styles from '../../../styles/pages/About.module.scss'
import AOS from 'aos'
import { useEffect } from 'react'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { FaBehanceSquare, FaGithubAlt, FaInstagram } from 'react-icons/fa'
import { AiOutlineLinkedin } from 'react-icons/ai'

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

			<div className={styles.images}>
				<img src="/assets/me-bass.png" alt="Bass" />
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
					I love to discover, learn, and make new things especially at building a functional application with
					aesthetic design to create an amazing and great user experience. I also love to share my knowledge
					and manage people to work with the best performance.
				</p>
				<div className={styles.links}>
					<a href='https://github.com/lukast2410'>
						<FaGithubAlt className={`icon6 ${styles.linkIcon}`} />
					</a>
					<a href='https://www.linkedin.com/in/lukas-t-b38884137/'>
						<AiOutlineLinkedin className={`icon6 ${styles.linkIcon}`} />
					</a>
					<a href='https://www.instagram.com/lukast2410/'>
						<FaInstagram className={`icon6 ${styles.linkIcon}`} />
					</a>
					<a href="https://www.behance.net/lukastanto">
						<FaBehanceSquare className={`icon6 ${styles.linkIcon}`} />
					</a>
				</div>
			</div>
		</section>
	)
}
