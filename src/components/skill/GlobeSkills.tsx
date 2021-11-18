import { useEffect, useState } from 'react'
import styles from '../../../styles/components/GlobeSkill.module.scss'
import TagCloud from 'react-tag-cloud'
import randomColor from 'randomcolor'

export default function GlobeSkills() {
	const [test, setTest] = useState(1)

	const skills = [
		{ text: 'HTML', value: 30 },
		{ text: 'CSS', value: 30 },
		{ text: 'Javascript', value: 40 },
		{ text: 'JQuery', value: 25 },
		{ text: 'ReactJS', value: 30 },
		{ text: 'C', value: 25 },
		{ text: 'Kotlin', value: 40 },
		{ text: 'Dart', value: 25 },
		{ text: 'Java', value: 40 },
		{ text: 'C#', value: 25 },
		{ text: 'NextJS', value: 40 },
		{ text: 'Go', value: 25 },
		{ text: 'SQLite', value: 25 },
		{ text: 'Angular', value: 30 },
		{ text: 'NestJS', value: 35 },
		{ text: 'MSSQL', value: 35 },
		{ text: 'Unity', value: 30 },
		{ text: 'Laravel', value: 35 },
		{ text: 'SCSS', value: 35 },
		{ text: 'PHP', value: 25 },
		{ text: 'PostgreSQL', value: 25 },
		{ text: 'MongoDB', value: 25 },
		{ text: 'Canvas', value: 25 },
		{ text: 'Socket.io', value: 25 },
		{ text: 'ASP.NET', value: 30 },
		{ text: 'Python', value: 25 },
		{ text: 'Tailwindcss', value: 30 },
		{ text: 'Typescript', value: 35 },
		{ text: 'Bootstrap', value: 25 },
		{ text: 'Photoshop', value: 30 },
		{ text: 'AfterEffect', value: 30 },
		{ text: 'PremierePro', value: 30 },
		{ text: 'Figma', value: 25 },
		{ text: 'AdobeXD', value: 25 },
		{ text: 'Flutter', value: 30 },
		{ text: 'AndroidStudio', value: 40 },
		{ text: 'Swyft', value: 25 },
		{ text: 'Axure', value: 30 },
	]

	// useEffect(() => {
	// 	setInterval(() => {
	// 		setTest((x) => x + 1)
	// 	}, 20000)
	// }, [])

	return (
		<div className={styles.globeContainer}>
			<TagCloud
				style={{
					fontFamily: 'impact',
					fontSize: 25,
					fontWeight: 'bold',
					color: () =>
						randomColor({
							hue: 'white',
						}),
					padding: 5,
				}}
			>
				{skills.map((s, idx) => (
					<div key={idx} style={{fontSize: (s.value-5)}}>
						{s.text}
					</div>
				))}
			</TagCloud>
		</div>
	)
}
