import styles from '../../../styles/pages/About.module.scss'
import AOS from 'aos'
import { useEffect, useState } from 'react'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { FaBehanceSquare, FaGithubAlt, FaInstagram } from 'react-icons/fa'
import { AiOutlineLinkedin } from 'react-icons/ai'

export default function AboutSection() {
	const [offsetY, setOffsetY] = useState(0)
	const handleScoll = () => setOffsetY(window.scrollY)

	useEffect(() => {
		AOS.init()
		window.addEventListener('scroll', handleScoll)

		return () => {
			window.removeEventListener('scroll', handleScoll)
		}
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
				<img src="/assets/me-bass.png" alt="Bass" style={{ transform: `translateY(${offsetY * 0.15}px)`}}/>
				<img src="/assets/child-gkj.jpg" alt="GKJ" style={{ transform: `translateY(-${offsetY * 0.15}px)`}}/>
				{/* <img src="/assets/child.png" alt="Child" /> */}
				{/* <img src="/assets/core-training.jpg" alt="Core Training" /> */}
			</div>

			<div className={styles.container}>
				<h1
					data-aos='fade-up'
					data-aos-easing='ease-in-sine'
					data-aos-duration='1000'
				><span>{`{ Hello World }`}</span></h1>
				<p>
					My name is&nbsp;
					<a href='https://www.linkedin.com/in/lukas-t-b38884137/'>
						<span data-hover="Lukas">Lukas&nbsp;</span>
						<span data-hover="Tanto">Tanto&nbsp;</span>
						<span data-hover="Kurniawan">Kurniawan</span>
					</a>
					, I am a Mobile & Web Developer, interested in UI & UX	Design, Mobile Application Development, Frontend & Backend Development.
				</p>
				<p>
					I love to discover, learn, and make new things especially at building a functional application with aesthetic design to create an amazing and great user experience. I also love to share my knowledge
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
