import { useEffect, useState } from 'react'
import { Page, PokemonHeader, PokemonStats, Pokeball } from '../../components'
import { useParams } from 'react-router-dom'
import { usePokemonContext } from "../../context/pokemon";
import { POKEMON_TYPE } from '../../utils/constans'
import DotsImage from '../../assets/images/dots.png'

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
    <Page padding="pb-12">
      <div className={`${currentType}`}>
        <Pokeball type="white" height="h-80" inset="top-52 right-[-45px] z-10 animate-spinSlow" />
        <img src={DotsImage} alt="Dots Square" className="w-40 absolute top-[-70px] right-[-66px] opacity-30" />
        <PokemonHeader />
        <PokemonStats />
      </div>
    </Page>
  )
}
