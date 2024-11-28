import { useEffect, useState } from 'react'
import { Page, PokemonHeader, PokemonStats, Pokeball } from '../../components'
import { useParams } from 'react-router-dom'
import { usePokemonContext } from "../../context/pokemon";
import { POKEMON_TYPE } from '../../utils/constans'
import DotsImage from '../../assets/images/dots.png'

export const PokemonDetail = () => {
  const { handleGetPokemonById, pokemonItem, handleGetPokemonEvolutions } = usePokemonContext()
  const [currentType, setCurrentType] = useState('bg-gray-500')
  const { namePokemon } = useParams()

  useEffect(() => {
    if (!pokemonItem) {
      handleGetPokemonById(namePokemon, true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (pokemonItem) {
      const type = (pokemonItem.types[0]?.type?.name as keyof typeof POKEMON_TYPE) ?? 'dark';
      const pokemonType = POKEMON_TYPE[type];
      setCurrentType(pokemonType);
      handleGetPokemonEvolutions(pokemonItem.id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonItem])

  return (
    <Page padding="pb-0">
      <div className={`${currentType} min-h-[508px] h-full`}>
        <Pokeball type="white" height="h-80" inset="top-52 right-[-45px] z-10 animate-spinSlow" />
        <img src={DotsImage} alt="Dots Square" className="w-40 absolute top-[-70px] right-[-66px] opacity-30" />
        <PokemonHeader />
        <PokemonStats />
      </div>
    </Page>
  )
}
