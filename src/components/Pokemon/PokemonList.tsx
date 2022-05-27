import { PokemonItem } from '../'
import { usePokemonContext } from "../../context/pokemon";


export const PokemonList = () => {
  const { pokemonList } = usePokemonContext()
  return (
    <ul className="grid grid-cols-2 gap-3">
      {pokemonList.map((pokemon) => (
        <PokemonItem key={pokemon.code} pokemonItem={pokemon} />
      ))}
    </ul>
  )
}
