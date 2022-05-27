import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Page, Title, Pokeball, PokemonList } from '../../components'
import BackArrow from '../../assets/images/back.png'
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
      <nav className="flex items-center">
        <Link to="/">
          <img src={BackArrow} alt="Back Home"  className="h-10" />
        </Link>
      </nav>
      <Title title="Pokedex" />
      <PokemonList />
    </Page>
  )
}
