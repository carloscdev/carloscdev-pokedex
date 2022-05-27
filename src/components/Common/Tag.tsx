interface TagProps {
  item: {
    type: {
      name: string
    }
  }
}

export const Tag = (props: TagProps) => {
  const {item} = props
  return (
    <li className="text-center bg-white grid bg-opacity-20 px-3 rounded-customCard font-normal capitalize">
      <small>{item.type.name}</small>
    </li>
  )
}
