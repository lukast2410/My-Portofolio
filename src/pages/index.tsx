import { NextPage } from 'next'
import Layout from '../components/Layout'
import styles from '../../styles/pages/Home.module.scss'
import DolphinJump from '../components/DolphinJump'
import { BriefcaseIcon } from '@heroicons/react/outline'
import Header from '../components/Header'

const Home: NextPage = () => {
	return (
		<Layout title='Lukas Tanto Kurniawan'>
			<Header />
			<section className={styles.heroSection}>
				<div className={styles.shortDescriptionContainer}>
					<div className={styles.shortDescription}>
						<div className={styles.descContainer}>
							<div className={styles.fullName}>
								<h1>Lukas Tanto Kurniawan</h1>
								<h1>Lukas Tanto K</h1>
							</div>
							<p>I am a Frontend developer</p>
							<button className={styles.viewWorkBtn}>
								<BriefcaseIcon className={`icon5`} />
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
			</section>
		</Layout>
	)
}

export default Home
