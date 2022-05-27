import { getPokemonByIdApi } from '../requests/pokemon'
import { PokemonObject } from '../interfaces/pokemon'

export const usePokemon = () => {
  const getPokemonById = async(id: number) => {
    try {
      const response = await getPokemonByIdApi(id)
      const result = await response.json()
      const pokemon: PokemonObject = {
        id,
        code: `${id < 10 ? '#00' : id < 100 ? '#0' : '#'}${id}`,
        name: result.name,
        types: [...result.types],
        image: result.sprites.other['official-artwork']['front_default']
      }
      return pokemon
    } catch (error) {
      throw error
    }
  }

  const getPokemonList = async (from: number, current: number) => {
    try {
      const pokemon = []
      for (let i = current; i <= from; i++) {
        const pokemonTemp = await getPokemonById(i)
        pokemon.push(pokemonTemp)
      }
      return pokemon
    } catch (error) {
      throw error
    }
  }

  return {
    getPokemonById,
    getPokemonList
  }
}
