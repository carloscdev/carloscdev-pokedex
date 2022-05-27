import PokeballImage from '../../assets/images/pokeball.png'
import PokeballWhiteImage from '../../assets/images/pokeball-white.png'

interface PokeballProps {
  position?: string,
  height?: string,
  inset?: string,
  opacity?: string
  type: string
}

export const Pokeball = (props: PokeballProps) => {
  const { position, height, inset, type, opacity } = props
  return (
    <img
      src={type !== 'white' ? PokeballImage : PokeballWhiteImage}
      alt="Pokeball"
      className={
        `${opacity || 'opacity-40'} ${height || 'h-28'} ${position || 'absolute'} ${inset || 'bottom-[-15px] right-[-30px] z-0 group-hover:animate-spinSlow'}`
      }
    />
  )
}
