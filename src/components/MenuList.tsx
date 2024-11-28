import { MenuItem } from './'
import { useState, useEffect } from 'react'

interface MenuListProps {
  columns: string
}

interface MenuListState {
  name: string,
  path: string,
  color: string
  disabled: boolean
}

const INITIAL_STATE = [
  {
    name: 'Pokedex',
    path: '/pokedex',
    color: 'bg-customGreen',
    disabled: false
  },
  {
    name: 'Moves',
    path: '/',
    color: 'bg-customRed',
    disabled: true
  },
  {
    name: 'Abilities',
    path: '/',
    color: 'bg-customBlue',
    disabled: true
  },
  {
    name: 'Items',
    path: '/',
    color: 'bg-customYellow',
    disabled: true
  },
  {
    name: 'Locations',
    path: '/',
    color: 'bg-customPurple',
    disabled: true
  },
  {
    name: 'Type Charts',
    path: '/',
    color: 'bg-customBrown',
    disabled: true
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
            <MenuItem key={index} item={item} />
          ))
        }
      </ul>
    </nav>
  )
}
