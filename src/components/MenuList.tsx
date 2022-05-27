import { MenuItem } from './'
import { useState, useEffect } from 'react'

interface MenuListProps {
  columns: string
}

interface MenuListState {
  name: string,
  path: string,
  color: string
}

const INITIAL_STATE = [
  {
    name: 'Pokedex',
    path: '/pokemon',
    color: 'bg-customGreen',
  },
  {
    name: 'Moves',
    path: '/',
    color: 'bg-customRed',
  },
  {
    name: 'Abilities',
    path: '/',
    color: 'bg-customBlue',
  },
  {
    name: 'Items',
    path: '/',
    color: 'bg-customYellow',
  },
  {
    name: 'Locations',
    path: '/',
    color: 'bg-customPurple',
  },
  {
    name: 'Type Charts',
    path: '/',
    color: 'bg-customBrown',
  }
]

export const MenuList = (props: MenuListProps) => {
  const {columns} = props
  const [menuItems, setMenuItems] = useState<Array<MenuListState>>([])

  useEffect(() => {
    setMenuItems(INITIAL_STATE)
  }, [])

  return (
    <nav>
      <ul className={`grid ${columns} gap-3`}>
        {
          menuItems.map((item, index) => (
            <MenuItem item={item} key={index} />
          ))
        }
      </ul>
    </nav>
  )
}
