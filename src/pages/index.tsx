import { NextPage } from 'next'
import Layout from '../components/Layout'
import styles from '../../styles/pages/Home.module.scss'
import DolphinJump from '../components/DolphinJump'

const Home: NextPage = () => {
	return (
		<Layout title='Lukas Tanto Kurniawan'>
			<header className={styles.header}>
				<div className='container'>
					<nav className={styles.nav}>
						<h1 className={styles.logoNav}>
							&lt;<span>L</span>
							<span>T</span>&gt;
						</h1>
						<ul>
							<li>
								<a href='#'>Home</a>
							</li>
							<li>
								<a href='#'>About Me</a>
							</li>
							<li>
								<a href='#'>Skills</a>
							</li>
							<li>
								<a href='#'>Projects</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<section className={styles.heroSection}>
				<div className={styles.nameTitle}>
					<h1>Lukas Tanto Kurniawan</h1>
					<h1>Lukas Tanto Kurniawan</h1>
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
				<div className={styles.dropContainer}>
					<DolphinJump />
				</div>
			</section>
		</Layout>
	)
}

export default Home
