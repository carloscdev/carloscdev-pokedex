import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PokemonObject } from '../../interfaces/pokemon'
import { Card, Pokeball, Tag } from '../'
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
    <Link to={`/pokemon/${pokemonItem.name}`}>
      <Card key={pokemonItem.id} color={currentColor} height="h-36">
        <Pokeball type="white" />
        <div className="relative">
          <small className="block -mb-2 text-right opacity-50">{pokemonItem.code}</small>
          <h4 className="text-lg capitalize">{pokemonItem.name}</h4>
          <div className="flex justify-between items-center">
            <ul className="grid gap-3">
              {
                pokemonItem.types.map((item, index) => (
                  <Tag key={index} item={item} />
                ))
              }
            </ul>
            <img loading="lazy" className="h-24 mr-[-10px]" src={pokemonItem.image} alt={pokemonItem.name} />
          </div>
        </div>
      </Card>
    </Link>
  )
}