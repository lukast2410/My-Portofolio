import styles from '../../styles/components/Header.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className='container'>
				<nav className={styles.nav}>
					<h1 className={styles.logoNav}>
						&lt;<span>L</span>
						<span>T</span>&gt;
					</h1>
					<ul>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>About Me</a>
						</li>
						<li>
							<a href='#'>Skills</a>
						</li>
						<li>
							<a href='#'>Projects</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
