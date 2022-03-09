import styles from '../../../styles/components/ProjectDetail.module.scss'

export default function ProjectDetail({ project, right }) {
    return (
        <div className={`${styles.projectContainer} ${right ? styles.right : ''}`} data-aos={right ? 'fade-right' : 'fade-left'} data-aos-once='true'>
            <div className={styles.banner}>
                <img src={project.banner} alt="Banner" />
            </div>
            <div className={styles.information}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <div className={styles.linkContainer}>
                    <a href={project.github} target='_blank' rel='noreferrer' className={styles.links}>
                        Github
                    </a>
                    {project.live && (
                        <a href={project.live} target='_blank' rel='noreferrer' className={styles.links}>
                            View Project
                        </a>
                    )}
                    {project.download && (
                        <a href={project.download} target='_blank' rel='noreferrer' className={styles.links}>
                            Download
                        </a>
                    )}
                </div>
                <div className={styles.softwareContainer}>
                    {project.softwares.map((s, i) => (
                        <div className={styles.software}>
                            <s.icon className='icon9' />
                            <span>{s.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.space}></div>
        </div>
    )
}