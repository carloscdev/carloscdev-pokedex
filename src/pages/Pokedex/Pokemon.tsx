import { useEffect } from 'react'
import { Page, Title, Pokeball, PokemonList, BackArrow } from '../../components'

import { usePokemonContext } from "../../context/pokemon";

export const Pokemon = () => {
  const { handleGetPokemonList } = usePokemonContext()

  useEffect(() => {
    handleGetPokemonList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Page>
      <Pokeball type="gray" height="h-64" inset="top-[-130px] right-[-100px] z-[-10]" opacity="opacity-30" />
      <BackArrow type="black" to="/" />
      <Title title="Pokedex" />
      <PokemonList />
    </Page>
  )
}
