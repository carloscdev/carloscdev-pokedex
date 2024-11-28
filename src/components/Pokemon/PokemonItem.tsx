import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PokemonInterface } from '../../interfaces/pokemon'
import { Card, Pokeball, Tag } from '../'
import { POKEMON_TYPE } from '../../utils/constans'
import { usePokemonContext } from '../../context/pokemon'

interface PokemonItemProps {
  pokemonItem: PokemonInterface
}

export const PokemonItem = (props: PokemonItemProps) => {
  const navigate = useNavigate()
  const [currentColor, setCurrentColor] = useState('')
  const { handleSetPokemonDetail } = usePokemonContext()
  const {pokemonItem} = props
  const getPokemonType = () => {
    const type = pokemonItem.types[0].type.name as keyof typeof POKEMON_TYPE;
    const pokemonType = POKEMON_TYPE[type] ?? 'bg-neutral-900';
    setCurrentColor(pokemonType)
  }

  const formattedId = (() => {
    if (pokemonItem) {
      if (pokemonItem.id < 10) return `#00${pokemonItem.id}`;
      if (pokemonItem.id < 100) return `#0${pokemonItem.id}`;
      return `#${pokemonItem.id}`;
    }
  })();

  const handleNavigation = () => {
    handleSetPokemonDetail(pokemonItem)
    navigate(`/pokedex/${pokemonItem.name}`)
  }

  useEffect(() => {
    getPokemonType()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <button onClick={handleNavigation} className='cursor-pointer'>
      <Card key={pokemonItem.id} color={currentColor} height="h-36">
        <Pokeball type="white" />
        <div className="relative">
          <small className="block -mb-2 text-right opacity-50">{formattedId}</small>
          <h4 className="text-lg capitalize text-left">{pokemonItem.name}</h4>
          <div className="flex justify-between items-center">
            <ul className="grid gap-3">
              {
                pokemonItem.types.map((item, index) => (
                  <Tag key={index} item={item} />
                ))
              }
            </ul>
            <img loading="lazy" className="h-24 mr-[-10px]" src={pokemonItem.sprites.other['official-artwork']['front_default']} alt={pokemonItem.name} />
          </div>
        </div>
      </Card>
    </button>
  )
}