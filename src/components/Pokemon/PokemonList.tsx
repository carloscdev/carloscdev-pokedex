import { PokemonItem, Card, Loader } from '../'
import { usePokemonContext } from "../../context/pokemon";
import { PER_PAGE } from '../../utils/constans'


export const PokemonList = () => {
  const { pokemonList, isLoading } = usePokemonContext()
  return (
    <ul className="grid grid-cols-2 gap-3">
      {isLoading ? (<LoaderPokemonList />) :
        pokemonList.map((pokemon) => (
          <PokemonItem key={pokemon.code} pokemonItem={pokemon} />
        ))}
    </ul>
  )
}

function LoaderPokemonList() {
  const loader = []
  for (let i = 0; i < PER_PAGE; i++) {
    loader.push(<Loader />)
  }
  return (
    <>
      {loader.map((item, index) => (
        <Card key={index} height="h-36" padding="p-0">
          {item}
        </Card>
      ))}
    </>
  )
}