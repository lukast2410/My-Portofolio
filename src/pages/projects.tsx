import { NextPage } from 'next'
import Layout from '../components/Layout'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import styles from '../../styles/pages/ProjectPage.module.scss'
import { projectData } from '../data/ProjectData'

const Projects: NextPage = () => {
	useEffect(() => {
		AOS.init({
			easing: 'ease-in-sine',
		})
	}, [])

	return (
		<Layout title='Projects'>
            <div className={styles.container}>
                {projectData.map((x, idx) => (
                    <div className={`${styles.projectContainer} ${idx % 2 == 1 ? styles.right : ''}`}>
                        <div className={styles.banner}>
                            <img src={x.banner} alt="Banner" />
                        </div>
                        <div className={styles.information}>
                            <h1>{x.name}</h1>
                            <p>{x.description}</p>
                        </div>
                    </div>
                ))}
            </div>
		</Layout>
	)
}

export default Projects
