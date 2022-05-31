export interface PokemonObject {
  id: number | string,
  code: string,
  name: string,
  types: Array<{
    slot: number,
    type: {
      name: PokemonType
      url: string
    }
  }>
  image: string,
  weight: number
  height: number
  species: PokemonBase
  abilities: Array<PokemonBase>
  experience: number,
  stats: PokemonStats
}

export type PokemonStats = {
  hp: 0,
  attack: 0,
  defense: 0,
  specialAttack: 0,
  specialDefense: 0,
  speed: 0,
  total: 0
}

export type PokemonBase = {
  name: string,
  url: string
}

export type PokemonAbility = {
  ability: PokemonBase
}

export type PokemonType = 'grass'

export interface PokemonContextProps {
  isLoading: boolean
  currentPage: number
  pokemonItem: PokemonObject
  pokemonList: Array<PokemonObject>
  handleGetPokemonList: Function
  handleGetPokemonById: Function
  handleChangePage: Function
}