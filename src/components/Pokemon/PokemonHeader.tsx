import { Title, Tag, BackArrow } from '../'
import { usePokemonContext } from "../../context/pokemon"

export const PokemonHeader = () => {
  const { pokemonItem } = usePokemonContext()
  return (
    <div className="overflow-hidden text-white relative z-20 px-4 pt-12 grid gap-3">
      <BackArrow type="white" to="/pokemon" />
      <Title title={pokemonItem.name} color="text-white" />
      <section className="flex items-center justify-between">
        <ul className="flex mt-2 gap-3">
          {pokemonItem.types.map((type, index) => (
            <Tag key={index} item={type} type="medium" />
          ))}
        </ul>
        <span className="font-bold text-xl">{pokemonItem.code}</span>
      </section>
      <img src={pokemonItem.image} alt={pokemonItem.name} className="h-64 mx-auto" />
    </div>
  )
}
