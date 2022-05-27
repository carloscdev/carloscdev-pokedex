import { Pokeball, Card } from '.'
import { Link } from 'react-router-dom'

interface MenuItemProps {
  item: {
    name: string
    path: string
    color: string
  }
}

export const MenuItem = (props: MenuItemProps) => {
  const { item } = props
  return (
    <Card color={item.color} height="h-20">
      <Pokeball type="white" />
      <Link to={item.path} className="h-full flex items-center relative z-20">
        {item.name}
      </Link>
    </Card>
  )
}
