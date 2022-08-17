import { NextPage } from 'next'
import Layout from '../components/Layout'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import styles from '../../styles/pages/ProjectPage.module.scss'
import { projectData } from '../data/ProjectData'
import Header from '../components/Header'
import ProjectDetail from '../components/project/ProjectDetail'

const Projects: NextPage = () => {
	useEffect(() => {
		AOS.init({
			easing: 'ease-in-sine',
		})
	}, [])

	return (
		<Layout title='Projects'>
			<Header />
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<h1 className={styles.title}>Latest Projects</h1>
				</div>
				{projectData.map((x, idx) => (
					<ProjectDetail key={idx} project={x} right={idx % 2 == 1} />
				))}
			</div>
		</Layout>
	)
}

export default Projects
