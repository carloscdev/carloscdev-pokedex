import { DefaultLayout } from '../layouts'
import { Home, Pokemon, PokemonDetail } from '../pages'

interface RoutesState {
  path: string
  layout: any
  component: () => JSX.Element
}

const routes: Array<RoutesState> = [
  {
    path: '/',
    layout: DefaultLayout,
    component: Home
  },
  {
    path: '/pokedex',
    layout: DefaultLayout,
    component: Pokemon
  },
  {
    path: '/pokedex/:namePokemon',
    layout: DefaultLayout,
    component: PokemonDetail
  },

]

export default routes