export const BASE_URL = 'https://pokeapi.co/api/v2'
export const PER_PAGE = 10
export const POKEMON_TOTAL = 1025
export const POKEMON_OBJECT = {
  id: '',
  code: '',
  name: '',
  types: [{ slot: 0, type: { name: 'grass', url: '' }}],
  image: '',
  weight: 0,
  species: { name: '', url:'' },
  abilities: [{ name: '', url: '' }]
}
export const POKEMON_TYPE = {
  grass: 'bg-customGreen',
  fire: 'bg-customRed',
  water: 'bg-customBlue',
  electric: 'bg-customYellow',
  poison: 'bg-customPurple',
  fighting: 'bg-customBrown',
  bug: 'bg-lime-500',
  psychic: 'bg-pink-500',
  rock: 'bg-amber-500',
  steel: 'bg-stone-500',
  ghost: 'bg-violet-700',
  fairy: 'bg-pink-300',
  dark: 'bg-neutral-900',
  dragon: 'bg-rose-500',
  ice: 'bg-sky-600',
  normal: 'bg-zinc-600',
  ground: 'bg-yellow-600',
  flying: 'bg-cyan-500'
}