interface TitleProps {
  title: string
  color?: string
}

export const Title = (props: TitleProps) => {
  const { title, color } = props
  return (
    <h2 className={`${color || 'text-zinc-900'} text-3xl font-bold capitalize`}>
      {title}
    </h2>
  )
}
