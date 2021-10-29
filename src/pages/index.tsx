import { NextPage } from 'next'
import Layout from '../components/Layout'
import styles from '../../styles/pages/Home.module.scss'
import Header from '../components/Header'
import HeroSection from '../components/hero/HeroSection'
import AboutSection from '../components/about/AboutSection'

const Home: NextPage = () => {
	return (
		<Layout title='Lukas Tanto Kurniawan'>
			<Header />
			<HeroSection />
			<AboutSection />
			<section className={styles.skillSection} id='skills'>
				<h1>Heiiii</h1>
			</section>
		</Layout>
	)
}

export default Home
