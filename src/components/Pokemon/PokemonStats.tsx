import { useState } from 'react'
import { PokemonObject } from '../../interfaces/pokemon'
import { usePokemonContext } from "../../context/pokemon"

export const PokemonStats = () => {
  const { pokemonItem } = usePokemonContext()
  const [currentValueMenu, setCurrentValueMenu] = useState(1)
  return (
    <div className="bg-white px-4 pb-12 relative z-10 min-h-[40%]">
      <div className="absolute left-0 right-0 -top-14 bg-white h-14 rounded-t-[50px]"></div>
      <PokemonStatsMenu currentValueMenu={currentValueMenu} setCurrentValueMenu={setCurrentValueMenu} />
      <PokemonStatsAbout pokemonItem={pokemonItem} />
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
    {
      name: 'About',
      value: 1
    },
    {
      name: 'Base Stats',
      value: 2
    },
    {
      name: 'Evolution',
      value: 3
    },
    {
      name: 'Moves',
      value: 4
    },
  ]
  return (
    <nav>
      <ul className="flex items-center gap-3 justify-between border-b border-gray-100">
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
  return (
    <section className="pt-8 grid gap-3 animate-fadeUp">
      <p className="flex items-center gap-8 font-semibold">
        <span className="opacity-30 w-16">
          Species
        </span>
        <span>
          ...
        </span>
      </p>
      <p className="flex items-center gap-8 font-semibold">
        <span className="opacity-30 w-16">
          Height
        </span>
        <span>
          {pokemonItem.weight} cm
        </span>
      </p>
      <p className="flex items-center gap-8 font-semibold">
        <span className="opacity-30 w-16">
          Abilities
        </span>
        <span className="capitalize">
          {pokemonItem.abilities.map(item=>item.name).join(', ')}
        </span>
      </p>
    </section>
  )

}