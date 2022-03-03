import styles from '../../../styles/pages/Project.module.scss'
import { projectData } from '../../data/ProjectData'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

export default function ProjectSection() {
	return (
		<section className={styles.projectSection} id='projects'>
			<div className={styles.container}>
				<h1 className={styles.title}>Latest Projects</h1>
				<div className={styles.projectGrid}>
					{projectData.slice(0, 3).map((p, idx) => (
						<ProjectCard key={idx} project={p}/>
					))}
				</div>
        <div className={styles.viewMoreContainer}>
          <Link href='/projects'>
            <a className={styles.viewMore}>
              View More
              <span className={styles.mask}>
                <span>View More</span>
              </span>
              <span className={styles.mask}>
                <span>View More</span>
              </span>
            </a>
          </Link>
        </div>
			</div>
		</section>
	)
}
