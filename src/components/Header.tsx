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
import Link from 'next/link'

export default function Header() {
	const [show, setShow] = useState(false)

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<nav className={styles.nav}>
					<div className={styles.mainNav} >
						<h1 className={styles.logoNav}>
							&lt;<span>L</span>
							<span>T</span>&gt;
						</h1>
						<button onFocus={() => setShow(true)} onBlur={() => setShow(false)}>
							<HiOutlineViewGrid className={`icon6 ${styles.menuGrid}`} />
						</button>
					</div>
					<ul className={`${show ? styles.showMenuGrid : ''}`}>
						<li>
							<Link href='/#'>
								<a>
									<div className={styles.iconContainer}>
										<HiOutlineHome className={styles.navIcon} />
									</div>
									<p>Home</p>
								</a>
							</Link>
						</li>
						<li>
							<Link href='/#about'>
								<a>
									<div className={styles.iconContainer}>
										<HiOutlineUser className={styles.navIcon} />
									</div>
									<p>About Me</p>
								</a>
							</Link>
						</li>
						<li>
							<Link href='/#skills'>
								<a>
									<div className={styles.iconContainer}>
										<HiOutlineChartSquareBar className={styles.navIcon} />
									</div>
									<p>Skills</p>
								</a>
							</Link>
						</li>
						<li>
							<Link href='/projects'>
								<a>
									<div className={styles.iconContainer}>
										<HiOutlineBriefcase className={styles.navIcon} />
									</div>
									<p>Projects</p>
								</a>
							</Link>
						</li>
						{/* <li>
							<Link href='/#achievement'>
								<a>
									<div className={styles.iconContainer}>
										<HiOutlineStar className={styles.navIcon} />
									</div>
									<p>Achievement</p>
								</a>
							</Link>
						</li> */}
						<li>
							<Link href='/#contacts'>
								<a>
									<div className={styles.iconContainer}>
										<HiOutlineMail className={styles.navIcon} />
									</div>
									<p>Contact Me</p>
								</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
