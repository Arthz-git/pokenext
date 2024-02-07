import styles from './Pill.module.css'

import * as models from './model'

export async function Pill({ text, type = 'none' }: models.PillProps) {
	return (
		<div className={`${styles.pill} ${styles[type]}`}>
			<span>
				{text}
			</span>
		</div>
	)
}