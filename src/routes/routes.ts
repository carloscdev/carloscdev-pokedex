import { DefaultLayout, DetailLayout } from '../layouts'
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
    path: '/pokemon',
    layout: DefaultLayout,
    component: Pokemon
  },
  {
    path: '/pokemon/:namePokemon',
    layout: DetailLayout,
    component: PokemonDetail
  },

]

export default routes