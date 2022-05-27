import { DefaultLayout } from '../layouts'
import { Home, Pokemon } from '../pages'

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

]

export default routes