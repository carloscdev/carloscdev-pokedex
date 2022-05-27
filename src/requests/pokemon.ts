import { BASE_URL } from '../utils/constans'

export const getPokemonByIdApi = (id: number) => {
  const response = fetch(`${BASE_URL}/pokemon/${id}`)
  return response
}