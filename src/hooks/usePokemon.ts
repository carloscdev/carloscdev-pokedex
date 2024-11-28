import { getPokemonByIdApi, getPokemonEvolutionByIdAPi, getPokemonSpeciesByIdApi } from '../requests/pokemon'
import { PokemonInterface } from '../interfaces/pokemon'
import { PokemonEvolutionInterface } from '../interfaces/pokemonEvolution'

export const usePokemon = () => {
  // const getPokemonById = async(id: number | string) => {
  //   try {
  //     const response = await getPokemonByIdApi(id)
  //     const result = await response.json()
  //     const abilitiesRaw = result.abilities
  //     const abilitiesFormat = abilitiesRaw.map((item: PokemonAbility) => {
  //       return { name: item.ability.name, url: item.ability.url }
  //     })
  //     const statsRaw = result.stats
  //     const statsFormat: PokemonStats = {
  //       hp: statsRaw[0].base_stat,
  //       attack: statsRaw[1].base_stat,
  //       defense: statsRaw[2].base_stat,
  //       specialAttack: statsRaw[3].base_stat,
  //       specialDefense: statsRaw[4].base_stat,
  //       speed: statsRaw[5].base_stat,
  //       total: statsRaw.map(({base_stat}: {base_stat: number}) => base_stat).reduce((acc: any, cur: any) => acc + cur)
  //     }
  //     const pokemon: PokemonObject = {
  //       id,
  //       code: `${result.id < 10 ? '#00' : Number(id) < 100 ? '#0' : '#'}${result.id}`,
  //       name: result.name,
  //       types: [...result.types],
  //       image: result.sprites.other['official-artwork']['front_default'],
  //       weight: result.weight,
  //       height: result.height,
  //       species: result.species,
  //       abilities: abilitiesFormat,
  //       experience: result.base_experience,
  //       stats: statsFormat
  //     }
  //     return pokemon
  //   } catch (error) {
  //     console.error(error)
  //     throw error
  //   }
  // }

  const getPokemonById = async (id: number | string) => {
    try {
      const response = await getPokemonByIdApi(id)
      const pokemon: PokemonInterface = await response.json()
      return pokemon
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const getPokemonEvolutions = async (id: number | string) => {
    try {
      const specie = await getPokemonSpeciesByIdApi(id)
      const specieResult = await specie.json()
      const evolutionChain = specieResult.evolution_chain.url.split('/')
      const idEvolutionChain = evolutionChain[6]
      const response = await getPokemonEvolutionByIdAPi(idEvolutionChain)
      const result: PokemonEvolutionInterface = await response.json()
      return result
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const getPokemonList = async (from: number, current: number) => {
    try {
      const pokemon = []
      for (let i = current; i <= from; i++) {
        try {
          const pokemonTemp = await getPokemonById(i)
          pokemon.push(pokemonTemp)
        } catch (error) {
          console.error(error)
        }
      }
      return pokemon
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  return {
    getPokemonById,
    getPokemonList,
    getPokemonEvolutions
  }
}
