import DolphinJump from './DolphinJump'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { FaGithubAlt, FaInstagram } from 'react-icons/fa'
import { AiOutlineLinkedin } from 'react-icons/ai'
import TypedText from './TypedText'
import styles from '../../../styles/pages/Hero.module.scss'
import { useEffect, useState } from 'react'

export default function HeroSection() {
	const [offsetY, setOffsetY] = useState(0)
	const handleScoll = () => setOffsetY(window.scrollY)

	useEffect(() => {
		window.addEventListener('scroll', handleScoll)

		return () => {
			window.removeEventListener('scroll', handleScoll)
		}
	}, [])

	return (
		<section className={styles.heroSection}>
			<div
				className={styles.shortDescriptionContainer}
				style={{ transform: `translateY(${offsetY * 0.65}px)` }}
			>
				<div className={styles.shortDescription}>
					<div className={styles.short}>
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
						</div>
						<div className={styles.descContainer}>
							<div className={styles.fullName}>
								<h1>
									<span>Lukas Tanto Kurniawan</span>
								</h1>
							</div>
							<p>
								I am a&nbsp;
								<TypedText />
							</p>
							<button className={styles.viewWorkBtn}>
								<HiOutlineBriefcase className={`icon5`} />
								<span>My Projects</span>
							</button>
						</div>
					</div>
				</div>
				<div className={styles.nameTitle}>
					<h1>&lt;LT&gt;</h1>
					<h1>&lt;LT&gt;</h1>
				</div>
			</div>
			<svg className={styles.wavyBlue} viewBox='0 0 150 28' preserveAspectRatio='none'>
				<defs>
					<path
						id='gentleWave'
						d='M -160 22 c 30 0 58 -9 88 -9 s 58 9 88 9 s 58 -9 88 -9 s 58 9 88 9 v 22 h -352 z'
					/>
				</defs>
				<g className={styles.waveParallax}>
					<use xlinkHref='#gentleWave' x='50' y='1' fill='#000033' />
					<use xlinkHref='#gentleWave' x='50' y='2' fill='#000040' />
					<use xlinkHref='#gentleWave' x='50' y='3.5' fill='#00004d' />
					<use xlinkHref='#gentleWave' x='50' y='5' fill='#00005a' />
				</g>
			</svg>
			<div className={styles.waveExtend}></div>
			<DolphinJump />
			<a href='#about'>
				<div className={styles.scrollDown}></div>
			</a>
		</section>
	)
}
