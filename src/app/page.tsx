import axios from 'axios'

import styles from './page.module.css'

import { PokeCard } from '@/components/PokeCard'

interface PokeApiResponse {
	count: number
	next: string
	previous: string
	results: {
		name: string
		url: string
	}[]
}

interface PokemonListAttributes {
	id: number
	name: string
	url: string
}

async function getPokemonList() {
	try {
		const qtdePokemon = 251

		const urlString = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${qtdePokemon}`

		const response = await axios.get<PokeApiResponse>(urlString)

		const pokemonList: PokemonListAttributes[] = []

		if (response.status === 200) {
			for (const item of response.data.results) {
				const stringCortada = item.url.split('pokemon/')

				const id = stringCortada[1].replace(/\W/g, '')

				pokemonList.push({
					id: Number(id),
					name: item.name,
					url: item.url
				})
			}
		}

		return pokemonList
	}
	catch (err) {
		console.log(err)
	}
}

export default async function Home() {

	const pokemons = await getPokemonList()

	return (
		<main className={styles.main_container}>
			<div className={styles.cardList}>
				{pokemons &&
					pokemons.map(item => (
						<PokeCard
							key={item.id}
							pokemon={item}
						/>
					))
				}
			</div>
		</main>
	)
}
