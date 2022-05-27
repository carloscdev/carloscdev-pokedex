import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode,
  color?: string
  height: string
  padding?: string
}

export const Card = (props: CardProps) => {
  const {children, color, height, padding} = props
  return (
    <li
      className={
        `relative group hover:-translate-y-1 ease-in-out duration-100 overflow-hidden shadow-customSmall
          rounded-customCard text-white font-bold ${color} ${height} ${padding || 'p-3'}
        `
      }>
      {children}
    </li>
  )
}
