import axios from 'axios'
import Image from 'next/image'

import { Pill } from '@/components/Pill'

import styles from './page.module.css'

import * as models from './model'
import {
	PokemonDetailsAttributes,
	PokemonDetailsResponse
} from '@/components/PokeCard/model'

async function getPokemonDetails(pokemonId: string) { //again --'
	try {
		const api = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`

		const response = await axios.get<PokemonDetailsResponse>(api)

		const pokemonDetails: PokemonDetailsAttributes = {
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

export default async function uniquePokemon(props: models.UniquePokemonParams) {

	const pokemon = await getPokemonDetails(props.params.pokemonId)

	if (!pokemon) {
		return <></>
	}

	return (
		<main className={styles.main_container}>
			<div className={styles.pokemon}>
				<div className={styles.avatar}>
					<Image
						alt={pokemon.name}
						src={pokemon.image}
						width={350}
						height={350}
					/>
				</div>

				<div className={styles.data}>
					<p className={styles.title}>
						{pokemon.id}. {pokemon.name}
					</p>

					<div className={styles.row}>
						<Pill
							text={`height ${pokemon.height} m`}
						/>

						<Pill
							text={`weight ${pokemon.weight} kg`}
						/>
					</div>

					<div className={styles.row}>
						{pokemon.stats.map(item => {
							return (
								<Pill
									key={item.statName}
									text={`${item.statName}: ${item.stat}`}
								/>
							)
						})}
					</div>

					<div className={styles.row}>
						{pokemon.types.map(item => {
							return (
								<Pill
									key={item.slot}
									text={item.type.name}
									type={item.type.name}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</main>
	)
}
