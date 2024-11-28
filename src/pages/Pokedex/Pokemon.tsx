import { useEffect } from 'react'
import { Page, Title, Pokeball, PokemonList, BackArrow, Paginator, SearchInput } from '../../components'

import { usePokemonContext } from "../../context/pokemon";

export const Pokemon = () => {
  const { handleGetPokemonList } = usePokemonContext()

  useEffect(() => {
    handleGetPokemonList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Page padding="px-4 py-10">
      <BackArrow type="black" to="/" />
      <div className='grid gap-6'>
        <Pokeball type="gray" height="h-64" inset="top-[-130px] right-[-100px] z-[-10]" opacity="opacity-30" />
        <Title title="Pokedex" />
        <SearchInput />
        <PokemonList />
      </div>
      <Paginator />
    </Page>
  )
}
