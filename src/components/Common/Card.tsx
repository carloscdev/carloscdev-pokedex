import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode,
  color?: string
  height: string
  padding?: string
  disabled?: boolean
}

export const Card = (props: CardProps) => {
  const {children, color, height, padding, disabled} = props
  return (
    <li
      className={
        `relative group ease-in-out duration-100 overflow-hidden shadow-customSmall
          rounded-customCard text-white font-bold ${color} ${height} ${padding || 'p-3'} ${disabled ?  'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1 '}
        `
      }>
      {children}
    </li>
  )
}
