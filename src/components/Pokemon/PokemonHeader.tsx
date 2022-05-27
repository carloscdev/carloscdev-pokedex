import { Title, Tag } from '../'
import { usePokemonContext } from "../../context/pokemon";

export const PokemonHeader = () => {
  const { pokemonItem } = usePokemonContext()
  return (
    <div className="overflow-hidden text-white">
      <Title title={pokemonItem.name} color="text-white" />
      <ul className="flex mt-2 gap-3">
        {pokemonItem.types.map((type, index) => (
          <Tag key={index} item={type} />
        ))}
      </ul>
      <img src={pokemonItem.image} alt={pokemonItem.name} />
    </div>
  )
}
