import styles from '../../../styles/pages/Skill.module.scss'
import { HiCode, HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { FaChevronDown, FaMobileAlt } from 'react-icons/fa'
import { CgDatabase } from 'react-icons/cg'
import { MdLanguage } from 'react-icons/md'
import { useEffect, useState } from 'react'
import $ from 'jquery'
import { AiOutlineApi } from 'react-icons/ai'

export default function SkillSection() {
	const [frontend, setFrondend] = useState(false)
	const [backend, setBackend] = useState(false)
	const [mobile, setMobile] = useState(false)
	const [database, setDatabase] = useState(false)
	const [programming, setProgramming] = useState(false)
	const [other, setOther] = useState(false)

	const skillClicked = (skill: string) => {
		if (skill == 'frontend') {
			if (frontend) setFrondend(false)
			else setFrondend(true)
		} else if (skill == 'backend') {
			if (backend) setBackend(false)
			else setBackend(true)
		} else if (skill == 'mobile') {
			if (mobile) setMobile(false)
			else setMobile(true)
		} else if (skill == 'database') {
			if (database) setDatabase(false)
			else setDatabase(true)
		} else if (skill == 'programming') {
			if (programming) setProgramming(false)
			else setProgramming(true)
		} else if (skill == 'other') {
			if (other) setOther(false)
			else setOther(true)
		}
	}

	const skillBlured = (skill: string) => {
		// if (skill == 'frontend' && frontend) {
		// 	setFrondend(false)
		// } else if (skill == 'backend' && backend) {
		// 	setBackend(false)
		// } else if (skill == 'mobile' && mobile) {
		// 	setMobile(false)
		// } else if (skill == 'programming' && programming) {
		// 	setProgramming(false)
		// } else if (skill == 'database' && database) {
		// 	setDatabase(false)
		// } else if (skill == 'other' && other) {
		// 	setOther(false)
		// }
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
				<h1 className={`${styles.title}`} data-value={-3}>
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
				<div className={styles.skillsContainer}>
					<div>
						<div className={`${styles.skillGroup}  ${frontend ? styles.active : ''}`}>
							<button className={`${styles.skillBtn}`} onClick={() => skillClicked('frontend')} onBlur={() => skillBlured('frontend')}>
								<HiCode className='icon6' />
								<span>Frontend</span>
								<FaChevronDown className={`icon5 ${styles.chevron}`} />
							</button>
							<div className={`${styles.skillItems}`}>
								<div className={styles.skillItem}>
									<img src="/assets/skill/reactjs.png" alt="Skill" />
									<span>React</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/angular.png" alt="Skill" />
									<span>Angular</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/nextjs.png" alt="Skill" />
									<span>NextJS</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/jquery.png" alt="Skill" />
									<span>JQuery</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/tailwindcss.png" alt="Skill" />
									<span>TailwindCSS</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/bootstrap.png" alt="Skill" />
									<span>Bootstrap</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className={`${styles.skillGroup}  ${backend ? styles.active : ''}`}>
							<button className={styles.skillBtn} onClick={() => skillClicked('backend')} onBlur={() => skillBlured('backend')}>
								<AiOutlineApi className='icon6' />
								<span>Backend</span>
								<FaChevronDown className={`icon5 ${styles.chevron}`} />
							</button>
							<div className={styles.skillItems}>
								<div className={styles.skillItem}>
									<img src="/assets/skill/laravel.png" alt="Skill" />
									<span>Laravel</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/aspnet.png" alt="Skill" />
									<span>ASP.NET</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/nestjs.png" alt="Skill" />
									<span>NestJS</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/firebase.png" alt="Skill" />
									<span>Firebase</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/golang.png" alt="Skill" />
									<span>Go</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/php.png" alt="Skill" />
									<span>PHP</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className={`${styles.skillGroup}  ${mobile ? styles.active : ''}`}>
							<button className={styles.skillBtn} onClick={() => skillClicked('mobile')} onBlur={() => skillBlured('mobile')}>
								<FaMobileAlt className='icon6' />
								<span>Mobile</span>
								<FaChevronDown className={`icon5 ${styles.chevron}`} />
							</button>
							<div className={styles.skillItems}>
								<div className={styles.skillItem}>
									<img src="/assets/skill/flutter.svg" alt="Skill" />
									<span>Flutter</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/swift.png" alt="Skill" />
									<span>Swift</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/android_studio.png" alt="Skill" />
									<span>Android Studio</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/java.png" alt="Skill" />
									<span>Java</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/kotlin.png" alt="Skill" />
									<span>Kotlin</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className={`${styles.skillGroup}  ${database ? styles.active : ''}`}>
							<button className={styles.skillBtn} onClick={() => skillClicked('database')} onBlur={() => skillBlured('database')}>
								<CgDatabase className='icon6' />
								<span>Database</span>
								<FaChevronDown className={`icon5 ${styles.chevron}`} />
							</button>
							<div className={styles.skillItems}>
								<div className={styles.skillItem}>
									<img src="/assets/skill/postgresql.png" alt="Skill" />
									<span>PostgreSQL</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/mysql.png" alt="Skill" className={styles.whiteBg} />
									<span>MySQL</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/mariadb.png" alt="Skill" />
									<span>MariaDB</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/sqlite.png" alt="Skill" />
									<span>SQLite</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/mongodb.png" alt="Skill" />
									<span>MongoDB</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/sql_server.png" alt="Skill" />
									<span>SQL Server</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/firebase-realtimedb.png" alt="Skill" />
									<span>Firebase Realtime Database</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className={`${styles.skillGroup}  ${programming ? styles.active : ''}`}>
							<button className={styles.skillBtn} onClick={() => skillClicked('programming')} onBlur={() => skillBlured('programming')}>
								<MdLanguage className='icon6' />
								<span>Programming</span>
								<FaChevronDown className={`icon5 ${styles.chevron}`} />
							</button>
							<div className={styles.skillItems}>
								<div className={styles.skillItem}>
									<img src="/assets/skill/c.png" alt="Skill" />
									<span>C</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/csharp.png" alt="Skill" />
									<span>C#</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/js.png" alt="Skill" />
									<span>Javascript</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/ts.png" alt="Skill" />
									<span>Typescript</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/python.png" alt="Skill" />
									<span>Python</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className={`${styles.skillGroup}  ${other ? styles.active : ''}`}>
							<button className={styles.skillBtn} onClick={() => skillClicked('other')} onBlur={() => skillBlured('other')}>
								<HiOutlineDotsCircleHorizontal className='icon6' />
								<span>Other</span>
								<FaChevronDown className={`icon5 ${styles.chevron}`} />
							</button>
							<div className={styles.skillItems}>
								<div className={styles.skillItem}>
									<img src="/assets/skill/unity.png" alt="Skill" />
									<span>Unity</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/premierepro.png" alt="Skill" />
									<span>Premiere Pro</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/aftereffect.png" alt="Skill" />
									<span>After Effect</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/photoshop.png" alt="Skill" />
									<span>Photoshop</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/graphql.png" alt="Skill" />
									<span>Graphql</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/axios.png" alt="Skill" className={styles.whiteBg}/>
									<span>Axios</span>
								</div>
								<div className={styles.skillItem}>
									<img src="/assets/skill/figma.png" alt="Skill" />
									<span>Figma</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className={styles.skills}>
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
				</div> */}
			</div>
			{/* <div className={styles.slideContainer}>
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
			</div> */}
			<div className={styles.fishContainer}>
				<img src="/assets/fish/1.gif" alt="Fish" />
				<img src="/assets/fish/2.gif" alt="Fish" />
				<img src="/assets/fish/3.gif" alt="Fish" />
				<img src="/assets/fish/4.gif" alt="Fish" />
				<img src="/assets/fish/2.gif" alt="Fish" />
				<img src="/assets/fish/3.gif" alt="Fish" />
				<img src="/assets/fish/4.gif" alt="Fish" />
				<img src="/assets/fish/1.gif" alt="Fish" />
			</div>
		</section>
	)
}
