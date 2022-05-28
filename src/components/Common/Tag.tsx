interface TagProps {
  item: {
    type: {
      name: string
    }
  },
  type?: string
}

export const Tag = (props: TagProps) => {
  const {item, type} = props
  return (
    <li className={`text-center bg-white grid bg-opacity-20 font-normal capitalize px-3 ${type === 'medium' ? 'py-1 px-5 rounded-[40px] text-lg' : 'rounded-customCard'}`}>
      <small>{item.type.name}</small>
    </li>
  )
}
