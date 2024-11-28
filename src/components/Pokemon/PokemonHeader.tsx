import { Title, Tag, BackArrow } from '../'
import { usePokemonContext } from "../../context/pokemon"

export const PokemonHeader = () => {
  const { pokemonItem } = usePokemonContext()

  const formattedId = (() => {
    if (pokemonItem) {
      if (pokemonItem.id < 10) return `#00${pokemonItem.id}`;
      if (pokemonItem.id < 100) return `#0${pokemonItem.id}`;
      return `#${pokemonItem.id}`;
    }
  })();

  if (!pokemonItem) {
    return null
  }

  return (
    <div className="overflow-hidden text-white relative z-20 px-4 pt-12 grid gap-3">
      <BackArrow type="white" to="/pokedex" />
      <Title title={pokemonItem.name} color="text-white" />
      <section className="flex items-center justify-between">
        <ul className="flex mt-2 gap-3">
          {pokemonItem.types.map((type, index) => (
            <Tag key={index} item={type} type="medium" />
          ))}
        </ul>
        <span className="font-bold text-xl">{formattedId}</span>
      </section>
      <img src={pokemonItem.sprites.other['official-artwork']['front_default']} alt={pokemonItem.name} className="h-80 mx-auto -mb-4" />
    </div>
  )
}
