import { getPokemonByIdApi } from '../requests/pokemon'
import { PokemonObject, PokemonAbility } from '../interfaces/pokemon'

export const usePokemon = () => {
  const getPokemonById = async(id: number | string) => {
    try {
      const response = await getPokemonByIdApi(id)
      const result = await response.json()
      const abilitiesRaw = result.abilities
      const abilitiesFormat = abilitiesRaw.map((item: PokemonAbility) => {
        return { name: item.ability.name, url: item.ability.url }
      })
      const pokemon: PokemonObject = {
        id,
        code: `${result.order < 10 ? '#00' : id < 100 ? '#0' : '#'}${result.order}`,
        name: result.name,
        types: [...result.types],
        image: result.sprites.other['official-artwork']['front_default'],
        weight: result.weight,
        species: result.species,
        abilities: abilitiesFormat
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
