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
				<img src="/assets/child-gkj.jpg" alt="GKJ" />
				<img src="/assets/child.png" alt="Child" />
				<img src="/assets/core-training.jpg" alt="Core Training" />
			</div>

			<div className={styles.container}>
				<h1
					data-aos='fade-up'
					data-aos-easing='ease-in-sine'
					data-aos-duration='1000'
				><span>{`{ Hello World }`}</span></h1>
				<p>
					My name is <a href='https://www.linkedin.com/in/lukas-t-b38884137/'><span>Lukas Tanto Kurniawan</span></a>, I am a <span>Mobile & Web Developer</span>, interested in <span>UI & UX	Design</span>, <span>Mobile Application Development</span>, <span>Frontend & Backend Development</span>.
				</p>
				<p>
					I love to discover, learn, and make new things especially at building a <span>functional application</span> with&nbsp;
					<span>aesthetic design</span> to create an amazing and great user experience. I also love to share my knowledge
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
