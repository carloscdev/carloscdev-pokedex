export interface PokemonObject {
  id: number,
  code: string,
  name: string,
  types: Array<{
    slot: number,
    type: {
      name: PokemonType
      url: string
    }
  }>
  image: string
}

export type PokemonType = 'grass'

export interface PokemonContextProps {
  pokemonList: Array<PokemonObject>,
  handleGetPokemonList: Function,
  handleChangePage: Function,
}