import { useEffect, useState } from 'react'
import { Page, PokemonHeader, PokemonStats, Pokeball } from '../../components'
import { useParams } from 'react-router-dom'
import { usePokemonContext } from "../../context/pokemon";
import { POKEMON_TYPE } from '../../utils/constans'

export const PokemonDetail = () => {
  const { handleGetPokemonById, pokemonItem } = usePokemonContext()
  const [currentType, setCurrentType] = useState('')
  const { namePokemon } = useParams()

  useEffect(() => {
    handleGetPokemonById(namePokemon)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const pokemonType = POKEMON_TYPE[pokemonItem.types[0].type.name]
    setCurrentType(pokemonType)
  }, [pokemonItem])

  return (
    <Page>
      <div className={`${currentType}`}>
        <Pokeball type="white" height="h-80" inset="top-40 right-[-80px] z-10 animate-spinSlow" />
        <PokemonHeader />
        <PokemonStats />
      </div>
    </Page>
  )
}
