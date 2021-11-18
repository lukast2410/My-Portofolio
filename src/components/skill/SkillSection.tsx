import styles from '../../../styles/pages/Skill.module.scss'
import GlobeSkills from './GlobeSkills'

export default function SkillSection() {
	return (
		<section className={styles.skillSection} id='skills'>
			<div className={styles.container}>
				<div className={styles.skillDescription}>
					<h1 className={styles.title}>
						<span>M</span><span>y</span>&nbsp;<span>S</span><span>k</span><span>i</span><span>l</span><span>l</span><span>s</span>
					</h1>
				</div>
				<div className={styles.otherSkills}>
					<GlobeSkills />
				</div>
			</div>
		</section>
	)
}
