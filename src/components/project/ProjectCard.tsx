import { FaGithubAlt } from 'react-icons/fa'
import { HiOutlineDownload } from 'react-icons/hi'
import { RiShareBoxLine } from 'react-icons/ri'
import styles from '../../../styles/components/ProjectCard.module.scss'

export default function ProjectCard({ project, idx }) {
	return (
		<div className={styles.projectCard} data-aos='fade-down' data-aos-delay={`${idx * 100}`} data-aos-duration='200'>
			<img src={project.demo} alt='Demo' />
			<div className={styles.circleBackground}></div>
			<div className={styles.projectOverlay}>
				<h2 data-content={project.name}></h2>
				<p>{project.shortDescription}</p>
				<div className={styles.projectLinks}>
					<div className={styles.github}>
						<a className={styles.projectLink} href={project.github} target='_blank' rel='noreferrer'>
							<FaGithubAlt className={`icon5 ${styles.linkIcon}`} />
							<span>{project.backend ? 'Frontend' : 'View on GitHub'}</span>
						</a>
						{project.backend && (
							<a className={styles.projectLink} href={project.backend} target='_blank' rel='noreferrer'>
								<FaGithubAlt className={`icon5 ${styles.linkIcon}`} />
								<span>Backend</span>
							</a>
						)}
					</div>
					<div className={styles.demo}>
						{project.download && (
							<a className={styles.projectLink} href={project.download} target='_blank' rel='noreferrer'>
								<HiOutlineDownload className={`icon5 ${styles.linkIcon}`} />
								<span>Download</span>
							</a>
						)}
						{project.live && (
							<a className={styles.projectLink} href={project.live} target='_blank' rel='noreferrer'>
								<RiShareBoxLine className={`icon5 ${styles.linkIcon}`} />
								<span>Live Demo</span>
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
