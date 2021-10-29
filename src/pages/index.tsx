import { NextPage } from 'next'
import Layout from '../components/Layout'
import styles from '../../styles/pages/Home.module.scss'
import DolphinJump from '../components/hero/DolphinJump'
import Header from '../components/Header'
import { HiOutlineBriefcase } from 'react-icons/hi'
import TypedText from '../components/hero/TypedText'

const Home: NextPage = () => {
	return (
		<Layout title='Lukas Tanto Kurniawan'>
			<Header />
			<section className={styles.heroSection}>
				<div className={styles.shortDescriptionContainer}>
					<div className={styles.shortDescription}>
						<div className={styles.descContainer}>
							<div className={styles.fullName}>
								<h1>
									<span>Lukas Tanto Kurniawan</span>
								</h1>
							</div>
							<p>I am a&nbsp;<TypedText/></p>
							<button className={styles.viewWorkBtn}>
								<HiOutlineBriefcase className={`icon5`} />
								<span>My Projects</span>
							</button>
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
				<div className={styles.scrollDown}></div>
			</section>
			<section className={styles.skillSection}>

			</section>
		</Layout>
	)
}

export default Home
