import { Pokeball, Card } from '.'
import { Link } from 'react-router-dom'

interface MenuItemProps {
  item: {
    name: string
    path: string
    color: string
    disabled: boolean
  }
}

export const MenuItem = (props: MenuItemProps) => {
  const { item } = props
  return (
    <Card color={item.color} height="h-20" disabled={item.disabled}>
      <Pokeball type="white" />
      <Link to={item.path} className="h-full flex items-center relative z-20">
        {item.name}
      </Link>
    </Card>
  )
}
