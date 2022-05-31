import { useState } from 'react'
import { PokemonObject } from '../../interfaces/pokemon'
import { usePokemonContext } from "../../context/pokemon"

export const PokemonStats = () => {
  const { pokemonItem } = usePokemonContext()
  const [currentValueMenu, setCurrentValueMenu] = useState(1)
  return (
    <div className="bg-white px-4 pb-1 relative z-10">
      <div className="absolute left-0 right-0 -top-14 bg-white h-14 rounded-t-[50px]"></div>
      <PokemonStatsMenu currentValueMenu={currentValueMenu} setCurrentValueMenu={setCurrentValueMenu} />
      <section className="mt-10 grid gap-5">
        {
          currentValueMenu === 1 ? (<PokemonStatsAbout pokemonItem={pokemonItem} />) :
          currentValueMenu === 2 ? (<PokemonStatsGraph pokemonItem={pokemonItem} />) : (<h2>Working ...</h2>)
        }
      </section>
    </div>
  )
}

interface PokemonStatsMenuProps {
  currentValueMenu: number,
  setCurrentValueMenu: Function
}

function PokemonStatsMenu(props: PokemonStatsMenuProps) {
  const {currentValueMenu, setCurrentValueMenu} = props
  const menuList = [
    { name: 'About', value: 1 },
    { name: 'Base Stats', value: 2 },
    { name: 'Evolution', value: 3 },
    { name: 'Moves', value: 4 },
  ]
  return (
    <nav>
      <ul className="flex items-center gap-3 justify-around border-b border-gray-100">
        {menuList.map((item) => (
          <li
            key={item.value}
            onClick={() => setCurrentValueMenu(item.value)}
            className={`border-gray-400 pb-3 cursor-pointer font-semibold ${currentValueMenu === item.value ? 'border-b-2' : 'opacity-30'}`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  )
}

interface PokemonStatsAboutProps {
  pokemonItem: PokemonObject
}
function PokemonStatsAbout(props: PokemonStatsAboutProps) {
  const {pokemonItem} = props
  const pokemonAbout = [
    { title: 'Type', value: `${pokemonItem.types.map(item=>item.type.name).join(', ')}` },
    { title: 'Height', value: `${pokemonItem.height * 10} cm` },
    { title: 'Weight', value: `${pokemonItem.weight * 10} lbs` },
    { title: 'Abilities', value: `${pokemonItem.abilities.map(item=>item.name).join(', ')}` },
    { title: 'Experience', value: `${pokemonItem.experience}` }
  ]
  return (
    <>
      {pokemonAbout.map((pokemon) => (
        <p key={pokemon.title} className="grid grid-cols-[80px,10px,1fr] items-center gap-5 font-semibold animate-fadeUp">
          <span className="opacity-30">
            {pokemon.title}
          </span>
          <span className="opacity-30">
            :
          </span>
          <span className="capitalize">
            {pokemon.value}
          </span>
        </p>
      ))}
    </>
  )

}

function PokemonStatsGraph(props: PokemonStatsAboutProps) {
  const {pokemonItem} = props
  const stats = pokemonItem.stats
  const pokemonStats = [
    { title: 'HP', value: stats.hp },
    { title: 'Attack', value: stats.attack },
    { title: 'Defense', value: stats.defense },
    { title: 'Sp. Atk', value: stats.specialAttack },
    { title: 'Sp. Def', value: stats.specialDefense },
    { title: 'Speed', value: stats.speed },
    { title: 'Total', value: stats.total / 5 }
  ]
  return (
    <>
      {pokemonStats.map((pokemon) => (
        <div key={pokemon.title} className="grid grid-cols-[0.3fr_0.2fr_1fr] items-center justify-between gap-8 font-semibold animate-fadeUp">
          <span className="opacity-30 w-16">
            {pokemon.title}
          </span>
          <span>
            {pokemon.title === 'Total' ? pokemon.value * 5 : pokemon.value}
          </span>
          <div className="bg-gray-200 overflow-hidden rounded-lg">
            <p className={`${pokemon.value > 50 ? 'bg-green-400' : 'bg-red-400'} h-2`} style={{width: `${pokemon.value}%`}}>
            </p>
          </div>
        </div>
      ))}
    </>
  )
}