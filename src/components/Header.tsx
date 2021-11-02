import { useState } from 'react'
import {
	HiOutlineBriefcase,
	HiOutlineChartSquareBar,
	HiOutlineHome,
	HiOutlineMail,
	HiOutlineStar,
	HiOutlineUser,
	HiOutlineViewGrid,
} from 'react-icons/hi'
import styles from '../../styles/components/Header.module.scss'

export default function Header() {
	const [show, setShow] = useState(false)

	return (
		<header className={styles.header}>
			<div className='container'>
				<nav className={styles.nav}>
					<div className={styles.mainNav} >
						<h1 className={styles.logoNav}>
							&lt;<span>L</span>
							<span>T</span>&gt;
						</h1>
						<button onFocus={() => setShow(true)} onBlur={() => setShow(false)}>
							<HiOutlineViewGrid className={`icon5 ${styles.menuGrid}`} />
						</button>
					</div>
					<ul className={`${show ? styles.showMenuGrid : ''}`}>
						<li>
							<a href='#'>
								<div className={styles.iconContainer}>
									<HiOutlineHome className={styles.navIcon} />
								</div>
								<p>Home</p>
							</a>
						</li>
						<li>
							<a href='#about'>
								<div className={styles.iconContainer}>
									<HiOutlineUser className={styles.navIcon} />
								</div>
								<p>About Me</p>
							</a>
						</li>
						<li>
							<a href='#skills'>
								<div className={styles.iconContainer}>
									<HiOutlineChartSquareBar className={styles.navIcon} />
								</div>
								<p>Skills</p>
							</a>
						</li>
						<li>
							<a href='#projects'>
								<div className={styles.iconContainer}>
									<HiOutlineBriefcase className={styles.navIcon} />
								</div>
								<p>Projects</p>
							</a>
						</li>
						<li>
							<a href='#achievement'>
								<div className={styles.iconContainer}>
									<HiOutlineStar className={styles.navIcon} />
								</div>
								<p>Achievement</p>
							</a>
						</li>
						<li>
							<a href='#contacts'>
								<div className={styles.iconContainer}>
									<HiOutlineMail className={styles.navIcon} />
								</div>
								<p>Contact Me</p>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
