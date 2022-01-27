import styles from '../../../styles/pages/Skill.module.scss'
import { HiCode } from 'react-icons/hi'
import { FaChevronDown } from 'react-icons/fa'
import { CgDatabase } from 'react-icons/cg'
import { useEffect, useState } from 'react'
import $ from 'jquery'

export default function SkillSection() {
	const [frontend, setFrondend] = useState(false)
	const [backend, setBackend] = useState(false)

	const skillClicked = (skill: string) => {
		if (skill == 'frontend') {
			if (frontend) setFrondend(false)
			else setFrondend(true)
		} else if (skill == 'backend') {
			if (backend) setBackend(false)
			else setBackend(true)
		}
	}

	const skillBlured = (skill: string) => {
		if (skill == 'frontend' && frontend) {
			setFrondend(false)
		} else if (skill == 'backend' && backend) {
			setBackend(false)
		}
	}

	useEffect(() => {
		$(document).mousemove(function (e) {
			$('.effect').each(function (i, ob) {
				let moving = ob.getAttribute('data-value')
				let x = (e.clientX * moving) / 250
				let y = (e.clientY * moving) / 250

				ob.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
			})
		})
	}, [])

	return (
		<section className={styles.skillSection} id='skills'>
			<div className={styles.container}>
				<h1 className={`${styles.title} effect`} data-value={-3}>
					<span>S</span>
					<span>k</span>
					<span>i</span>
					<span>l</span>
					<span>l</span>
					<span>s</span>
					&nbsp;
					<span>&</span>
					&nbsp;
					<span>T</span>
					<span>o</span>
					<span>o</span>
					<span>l</span>
					<span>s</span>
				</h1>
				<div className={styles.skills}>
					<div className={styles.skill5}>
						<div className={`${styles.skillItem} effect`} data-value={2}>
							<img src='/assets/skill/reactjs.png' alt='ReactJS' />
							<h4>ReactJS</h4>
						</div>
						<div className={`${styles.skillItem} effect`} data-value={-2}>
							<img src='/assets/skill/angular.png' alt='AngularJS' />
							<h4>AngularJS</h4>
						</div>
						<div className={`${styles.skillItem} effect`} data-value={4}>
							<img src='/assets/skill/nextjs.png' alt='NextJS' />
							<h4>NextJS</h4>
						</div>
						<div className={`${styles.skillItem} effect`} data-value={3}>
							<img src='/assets/skill/nestjs.png' alt='NestJS' />
							<h4>NestJS</h4>
						</div>
						<div className={`${styles.skillItem} effect`} data-value={-4}>
							<img src='/assets/skill/golang.png' alt='Golang' />
							<h4>Go</h4>
						</div>
					</div>
					<div className={styles.skill4}>
						<div className={`${styles.skillItem} effect`} data-value={-2}>
							<img src='/assets/skill/laravel.png' alt='Laravel' />
							<h4>Laravel</h4>
						</div>
						<div className={`${styles.skillItem} effect`} data-value={3}>
							<img src='/assets/skill/sql_server.png' alt='SQL Server' />
							<h4>SQL Server</h4>
						</div>
						<div className={`${styles.skillItem} effect`} data-value={4}>
							<img src='/assets/skill/firebase.png' alt='Firebase' />
							<h4>Firebase</h4>
						</div>
						<div className={`${styles.skillItem} effect`} data-value={-1}>
							<img src='/assets/skill/unity.png' alt='Unity' />
							<h4>Unity</h4>
						</div>
					</div>
					<div className={styles.skill3}>
						<div className={`${styles.skillItem} effect`} data-value={2}>
							<img src='/assets/skill/android_studio.png' alt='Android' />
							<h4>Android Studio</h4>
						</div>
						<div className={`${styles.skillItem} effect`} data-value={-1}>
							<img src='/assets/skill/flutter.svg' alt='Flutter' />
							<h4>Flutter</h4>
						</div>
						<div className={`${styles.skillItem} effect`} data-value={3}>
							<img src='/assets/skill/ios.png' alt='iOS' />
							<h4>iOS</h4>
						</div>
					</div>
					<div className={styles.skill2}>
						<div className={`${styles.skillItem} effect`} data-value={-1}>
							<img src='/assets/skill/photoshop.png' alt='Photoshop' />
							<h4>Photoshop</h4>
						</div>
						<div className={`${styles.skillItem} effect`} data-value={-3}>
							<img src='/assets/skill/premierepro.png' alt='PremierePro' />
							<h4>Premiere Pro</h4>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.slideContainer}>
				<div className={styles.skillSliding}>
					<span>HTML</span>
					<span>CSS</span>
					<span>JS</span>
					<span>TS</span>
					<span>PHP</span>
					<span>T-SQL</span>
					<span>PostgreSQL</span>
					<span>Swift</span>
					<span>HTML</span>
					<span>CSS</span>
					<span>JS</span>
					<span>TS</span>
				</div>
				<div className={styles.skillSliding}>
					<span>Dart</span>
					<span>Kotlin</span>
					<span>Java</span>
					<span>C#</span>
					<span>C</span>
					<span>Python</span>
					<span>TailwindCSS</span>
					<span>Graphql</span>
					<span>Dart</span>
					<span>Kotlin</span>
					<span>Java</span>
					<span>C#</span>
				</div>
			</div>
		</section>
	)
}
