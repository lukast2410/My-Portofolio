import styles from '../../../styles/pages/Contact.module.scss'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLineLine } from 'react-icons/ri'
import { TbBrandNextjs, TbBrandSass, TbBrandVercel } from 'react-icons/tb'
import { MdOutlineAnimation } from 'react-icons/md'
import { IoLogoReact } from 'react-icons/io5'
import { SiJquery } from 'react-icons/si'

export default function ContactSection() {
	const contacs = [
		{
			icon: AiOutlineWhatsApp,
			text: '+62 878 8394 4652',
			href: 'https://wa.me/6287883944652',
		},
		{
			icon: HiOutlineMail,
			text: 'ltanto989@gmail.com',
			href: 'mailto:ltanto989@gmail.com',
		},
		{
			icon: RiLineLine,
			text: 'lukast1',
			href: 'https://line.me/ti/p/D3jo6wvTpc',
		},
	]

	const libraries = [
		{
			icon: TbBrandNextjs,
			text: 'NextJS',
			href: 'https://nextjs.org',
		},
		{
			icon: TbBrandSass,
			text: 'Sass',
			href: 'https://sass-lang.com',
		},
		{
			icon: SiJquery,
			text: 'JQuery',
			href: 'https://jquery.com',
		},
		{
			icon: MdOutlineAnimation,
			text: 'AOS: Animate on Scroll',
			href: 'https://michalsnik.github.io/aos',
		},
		{
			icon: IoLogoReact,
			text: 'React Icons',
			href: 'https://react-icons.github.io/react-icons',
		},
	]

	return (
		<section className={styles.contactSection} id='contacts'>
			<div className={styles.container}>
				<div className={styles.contacts} data-aos='fade-right'>
					<div>
						<h1 className={styles.title}>Get in touch</h1>
						<h3 className={styles.titleDescription}>Reach me anytime through:</h3>
					</div>
					<div className={styles.linkContainer}>
						{contacs.map((c, cIdx) => (
							<a key={cIdx} href={c.href} target='_blank' rel='noreferrer' className={styles.linkCard}>
								<c.icon className={`icon6 ${styles.linkIcon}`} />
								<span>{c.text}</span>
							</a>
						))}
					</div>
					<div>&nbsp;</div>
				</div>
				<div className={styles.libraries} data-aos='fade-left'>
					<h1 className={styles.title}>Build with</h1>
					<h3 className={styles.titleDescription}>Framework and additional libraries:</h3>
					<div className={styles.linkContainer}>
						{libraries.map((l, lIdx) => (
							<a key={lIdx} href={l.href} target='_blank' rel='noreferrer' className={styles.linkCard}>
								<l.icon className={`icon6 ${styles.linkIcon}`} />
								<span>{l.text}</span>
							</a>
						))}
					</div>
				</div>
			</div>
			<div className={styles.copyrightContainer}>
				<div className={styles.copyrightBorder}>
					<p>Copyright © 2022 - Lukas Tanto Kurniawan</p>
					<TbBrandVercel className={styles.vercel} />
					<p>Deploys by Vercel</p>
				</div>
			</div>
		</section>
	)
}
