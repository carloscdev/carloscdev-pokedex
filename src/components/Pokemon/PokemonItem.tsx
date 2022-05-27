import { useState, useEffect } from 'react'
import { PokemonObject } from '../../interfaces/pokemon'
import { Card, Pokeball } from '../'
import { POKEMON_TYPE } from '../../utils/constans'

interface PokemonItemProps {
  pokemonItem: PokemonObject
}

export const PokemonItem = (props: PokemonItemProps) => {
  const [currentColor, setCurrentColor] = useState('')
  const {pokemonItem} = props
  const getPokemonType = () => {
    const type = pokemonItem.types[0].type.name
    const pokemonType = POKEMON_TYPE[type]
    setCurrentColor(pokemonType)
  }
  useEffect(() => {
    getPokemonType()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Card key={pokemonItem.id} color={currentColor} height="h-36">
      <Pokeball type="white" />
      <div className="relative">
        <h4 className="text-lg capitalize">{pokemonItem.name}</h4>
        <div className="flex justify-between items-center">
          <ul className="grid gap-3">
            {
              pokemonItem.types.map((item, index) => (
                <li key={index} className="bg-white grid bg-opacity-30 px-3 rounded-customCard font-normal">
                  <small>{item.type.name}</small>
                </li>
              ))
            }
          </ul>
          <img className="w-28 mr-[-15px]" src={pokemonItem.image} alt={pokemonItem.name} />
        </div>
      </div>
    </Card>
  )
}
