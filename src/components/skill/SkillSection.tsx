import styles from '../../../styles/pages/Skill.module.scss'
import { FaChevronDown } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import $ from 'jquery'
import { skillsData } from '../../data/SkillData'

export default function SkillSection() {
	const [skillState, setSkillState] = useState([false, false, false, false, false, false])

	const skillClicked = (skill: number) => {
		if (skillState[skill]) {
			const temp = skillState
			temp[skill] = false
			setSkillState([...temp])
		} else {
			const temp = skillState
			temp[skill] = true
			if(skill < 3){
				temp[3] = false
				temp[4] = false
				temp[5] = false
			}else{
				temp[0] = false
				temp[1] = false
				temp[2] = false
			}
			setSkillState([...temp])
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
					{skillsData.map((s, idx) => (
						<div key={idx}>
						<div className={`${styles.skillGroup} ${skillState[idx] ? styles.active : ''}`}>
							<button
								className={styles.skillBtn}
								onClick={() => skillClicked(idx)}
							>
								<s.icon className='icon6' />
								<span>{s.key}</span>
								<FaChevronDown className={`icon5 ${styles.chevron}`} />
							</button>
							<div className={styles.skillItems}>
								{s.skills.map((x, id) => (
									<div key={id} className={styles.skillItem}>
										<img src={x.src} alt='Skill' className={`${x.needBg ? styles.whiteBg : ''}`}/>
										<span>{x.name}</span>
									</div>
								))}
							</div>
						</div>
					</div>
					))}
				</div>
			</div>
			<div className={styles.fishContainer}>
				<img src='/assets/fish/1.gif' alt='Fish' />
				<img src='/assets/fish/2.gif' alt='Fish' />
				<img src='/assets/fish/3.gif' alt='Fish' />
				<img src='/assets/fish/4.gif' alt='Fish' />
				<img src='/assets/fish/2.gif' alt='Fish' />
				<img src='/assets/fish/3.gif' alt='Fish' />
				<img src='/assets/fish/4.gif' alt='Fish' />
				<img src='/assets/fish/1.gif' alt='Fish' />
			</div>
		</section>
	)
}
