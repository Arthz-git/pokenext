import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

import { Pill } from '../Pill'

import styles from './PokeCard.module.css'

import * as models from './model'

async function getPokemonDetails(url: string) {
	try {
		const response = await axios.get<models.PokemonDetailsResponse>(url)

		const pokemonDetails: models.PokemonDetailsAttributes = {
			id: 0,
			name: '',
			height: 0,
			weight: 0,
			types: [{
				slot: 0,
				type: {
					name: '',
					url: ''
				}
			}],
			image: '',
			stats: [{
				statName: '',
				stat: 0
			}]
		}

		if (response.status === 200) {
			const stats = response.data.stats.map(item => {
				return ({
					statName: item.stat.name,
					stat: item.base_stat
				})
			})

			pokemonDetails.id = response.data.id
			pokemonDetails.name = response.data.name
			pokemonDetails.height = response.data.height / 10
			pokemonDetails.weight = response.data.weight / 10
			pokemonDetails.types = response.data.types
			pokemonDetails.image = response.data.sprites.other['official-artwork'].front_default
			pokemonDetails.stats = stats
		}

		return pokemonDetails
	}
	catch (err) {
		console.log(err)
	}
}

export async function PokeCard({ pokemon }: models.PokeCardProps) {

	const pokemonDetails = await getPokemonDetails(pokemon.url)

	if (!pokemonDetails) {
		return <></>
	}

	return (
		<Link
			className={styles.pokecard_link}
			href={`/${pokemon.id}`}
		>
			<div className={styles.pokecard}>
				<section className={styles.avatar}>
					<Image
						alt={pokemonDetails.name}
						src={pokemonDetails.image}
						width={150}
						height={150}
					/>
				</section>

				<span className={styles.title}>
					{pokemonDetails.id}. {pokemonDetails.name}
				</span>

				<div className={styles.row}>
					<Pill
						text={`H ${pokemonDetails.height} m`}
					/>

					<Pill
						text={`W ${pokemonDetails.weight} Kg`}
					/>
				</div>

				<div className={styles.row}>
					{pokemonDetails.types.map(item => (
						<Pill
							key={item.slot}
							text={item.type.name}
							type={item.type.name}
						/>
					))}
				</div>
			</div>
		</Link>
	)
}