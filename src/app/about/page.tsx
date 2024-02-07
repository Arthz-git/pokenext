import styles from './page.module.css'

import Image from 'next/image'

import totodileImg from '@/images/totodile-256x256.png'

export default function About() {
	return (
		<div className={styles.container}>
			<div className={styles.maincard}>
				<Image
					alt='totodile'
					src={totodileImg}
					height={200}
					width={200}
				/>

				<span>
					Deserunt quis ex minim tempor cupidatat ea consequat commodo veniam cillum minim eiusmod nulla.
					Ex nostrud qui pariatur irure fugiat nisi excepteur voluptate.
					Deserunt Lorem mollit officia eiusmod exercitation officia tempor tempor id anim magna.
					Eiusmod aliquip labore labore voluptate dolore ut deserunt est irure.
					Duis occaecat veniam et nostrud enim irure et officia non.
					Consequat do aliquip quis proident amet velit nostrud. Ut et elit amet incididunt.
				</span>
			</div>
		</div>
	)
}