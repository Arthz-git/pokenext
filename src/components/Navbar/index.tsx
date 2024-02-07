import styles from './Navbar.module.css'

import Link from 'next/link'
import Image from 'next/image'

import PokeballPNG from '../../images/pokeball.png'

const pokeballLogoSize = 70

export function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link
				href='/'
			>
				<section className={styles.logo_title}>
					<div className={styles.logo}>
						<Image
							alt='pokeball'
							src={PokeballPNG}
							width={pokeballLogoSize}
							height={pokeballLogoSize}
						/>
					</div>

					<b className={styles.title}>
						Pokédex
					</b>
				</section>
			</Link>

			<section className={styles.routes}>
				<ul>
					<li>
						<Link href="/">
							Home
						</Link>
					</li>

					<li>
						<Link href="/about">
							About
						</Link>
					</li>
				</ul>
			</section>
		</nav>
	)
}