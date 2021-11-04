import styles from '../../../styles/pages/Skill.module.scss'
import GlobeSkills from './GlobeSkills'

export default function SkillSection() {
	return (
		<section className={styles.skillSection} id='skills'>
			<div className={styles.container}>
				<div className={styles.skillDescription}>
					<h1>Skills</h1>
				</div>
				<div className={styles.otherSkills}>
					<GlobeSkills />
				</div>
			</div>
		</section>
	)
}
