import { NextPage } from 'next'
import Layout from '../components/Layout'
import styles from '../../styles/pages/Home.module.scss'
import Header from '../components/Header'
import HeroSection from '../components/hero/HeroSection'
import AboutSection from '../components/about/AboutSection'
import SkillSection from '../components/skill/SkillSection'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import ProjectSection from '../components/project/ProjectSection'

const Home: NextPage = () => {
	useEffect(() => {
		AOS.init({
			easing: 'ease-in-sine',
		})
	}, [])

	return (
		<Layout title='Lukas Tanto Kurniawan'>
			<Header />
			<HeroSection />
			<AboutSection />
			<SkillSection />
			<ProjectSection />
		</Layout>
	)
}

export default Home
