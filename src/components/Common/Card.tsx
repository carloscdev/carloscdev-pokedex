import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode,
  color: string
  height: string
}

export const Card = (props: CardProps) => {
  const {children, color, height} = props
  return (
    <li
      className={
        `relative hover:-translate-y-1 ease-in-out duration-100 overflow-hidden shadow-customSmall p-3
          rounded-customCard text-white font-bold ${color} ${height}
        `
      }>
      {children}
    </li>
  )
}
