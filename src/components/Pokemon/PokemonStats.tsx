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
      <section className="my-10 grid gap-5">
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
    <>
      <p className="flex items-center gap-8 font-semibold animate-fadeUp">
        <span className="opacity-30 w-16">
          Species
        </span>
        <span>
          ...
        </span>
      </p>
      <p className="flex items-center gap-8 font-semibold animate-fadeUp">
        <span className="opacity-30 w-16">
          Height
        </span>
        <span>
          {pokemonItem.height * 10} cm
        </span>
      </p>
      <p className="flex items-center gap-8 font-semibold animate-fadeUp">
        <span className="opacity-30 w-16">
          Weight
        </span>
        <span>
          {pokemonItem.weight} lbs
        </span>
      </p>
      <p className="flex items-center gap-8 font-semibold animate-fadeUp">
        <span className="opacity-30 w-16">
          Abilities
        </span>
        <span className="capitalize">
          {pokemonItem.abilities.map(item=>item.name).join(', ')}
        </span>
      </p>
      <p className="flex items-center gap-8 font-semibold animate-fadeUp">
        <span className="opacity-30 w-16">
          Experience
        </span>
        <span className="capitalize">
          {pokemonItem.experience}
        </span>
      </p>
    </>
  )

}

function PokemonStatsGraph(props: PokemonStatsAboutProps) {
  const {pokemonItem} = props
  const stats = pokemonItem.stats
  return (
    <>
      <div className="grid grid-cols-[0.3fr_0.2fr_1fr] items-center justify-between gap-8 font-semibold animate-fadeUp">
        <span className="opacity-30 w-16">
          HP
        </span>
        <span>
          {stats.hp}
        </span>
        <div className="bg-gray-200 overflow-hidden rounded-lg">
          <p className={`${stats.hp > 50 ? 'bg-customGreen' : 'bg-customRed'} h-2`} style={{width: `${stats.hp}%`}}>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[0.3fr_0.2fr_1fr] items-center justify-between gap-8 font-semibold animate-fadeUp">
        <span className="opacity-30 w-16">
          Attack
        </span>
        <span>
          {stats.attack}
        </span>
        <div className="bg-gray-200 overflow-hidden rounded-lg">
          <p className={`${stats.attack > 50 ? 'bg-customGreen' : 'bg-customRed'} h-2`} style={{width: `${stats.attack}%`}}>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[0.3fr_0.2fr_1fr] items-center justify-between gap-8 font-semibold animate-fadeUp">
        <span className="opacity-30 w-16">
          Defense
        </span>
        <span>
          {stats.defense}
        </span>
        <div className="bg-gray-200 overflow-hidden rounded-lg h-2">
          <p className={`${stats.defense > 50 ? 'bg-customGreen' : 'bg-customRed'} h-2`} style={{width: `${stats.defense}%`}}>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[0.3fr_0.2fr_1fr] items-center justify-between gap-8 font-semibold animate-fadeUp">
        <span className="opacity-30 w-16">
          Sp. Atk
        </span>
        <span>
          {stats.specialAttack}
        </span>
        <div className="bg-gray-200 overflow-hidden rounded-lg">
          <p className={`${stats.specialAttack > 50 ? 'bg-customGreen' : 'bg-customRed'} h-2`} style={{width: `${stats.specialAttack}%`}}>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[0.3fr_0.2fr_1fr] items-center justify-between gap-8 font-semibold animate-fadeUp">
        <span className="opacity-30 w-16">
          Sp. Def
        </span>
        <span>
          {stats.specialDefense}
        </span>
        <div className="bg-gray-200 overflow-hidden rounded-lg">
          <p className={`${stats.specialDefense > 50 ? 'bg-customGreen' : 'bg-customRed'} h-2`} style={{width: `${stats.specialDefense}%`}}>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[0.3fr_0.2fr_1fr] items-center justify-between gap-8 font-semibold animate-fadeUp">
        <span className="opacity-30 w-16">
          Speed
        </span>
        <span>
          {stats.speed}
        </span>
        <div className="bg-gray-200 overflow-hidden rounded-lg">
          <p className={`${stats.speed > 50 ? 'bg-customGreen' : 'bg-customRed'} h-2`} style={{width: `${stats.speed}%`}}>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[0.3fr_0.2fr_1fr] items-center justify-between gap-8 font-semibold animate-fadeUp">
        <span className="opacity-30 w-16">
          Total
        </span>
        <span>
          {stats.total}
        </span>
        <div className="bg-gray-200 overflow-hidden rounded-lg">
          <p className={`${stats.total > 300 ? 'bg-customGreen' : 'bg-customRed'} h-2 transition delay-150 duration-300 ease-in-out`} style={{width: `${stats.total / 5}%`}}>
          </p>
        </div>
      </div>
    </>
  )
}