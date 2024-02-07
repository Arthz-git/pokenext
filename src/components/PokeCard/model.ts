export interface PokeCardProps {
	pokemon: {
		id: number
		name: string
		url: string
	}
}

export interface PokemonDetailsResponse {
	id: number
	name: string
	height: number
	weight: number
	types: {
		slot: number
		type: {
			name: string
			url: string
		}
	}[]
	sprites: {
		other: {
			"official-artwork": {
				front_default: string
			}
		}
	}
	stats: {
		base_stat: number
		stat: {
			name: string
		}
	}[]
}

export interface PokemonDetailsAttributes {
	id: number
	name: string
	height: number
	weight: number
	types: {
		slot: number
		type: {
			name: string
			url: string
		}
	}[]
	image: string
	stats: {
		statName: string
		stat: number
	}[]
}