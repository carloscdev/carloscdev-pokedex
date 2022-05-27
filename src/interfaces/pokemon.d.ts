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
  species: PokemonBase
  abilities: Array<PokemonBase>
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
  pokemonItem: PokemonObject
  pokemonList: Array<PokemonObject>
  handleGetPokemonList: Function
  handleGetPokemonById: Function
  handleChangePage: Function
}