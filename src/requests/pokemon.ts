import { BASE_URL } from '../utils/constans'

export const getPokemonByIdApi = (id: number | string) => {
  const response = fetch(`${BASE_URL}/pokemon/${id}`)
  return response
}

export const getPokemonEvolutionByIdAPi = (id: number | string) => {
  const response = fetch(`${BASE_URL}/evolution-chain/${id}`)
  return response
}

export const getPokemonSpeciesByIdApi = (id: number | string) => {
  const response = fetch(`${BASE_URL}/pokemon-species/${id}`)
  return response
}