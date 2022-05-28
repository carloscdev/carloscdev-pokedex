import { Link } from 'react-router-dom'
import BackArrowImage from '../../assets/images/back.png'
import BackArrowWhiteImage from '../../assets/images/back-white.png'

interface BackArrowProps {
  type: string
  to: string
}

export const BackArrow = (props: BackArrowProps) => {
  const {type, to} = props
  return (
    <nav className="flex items-center">
      <Link to={to}>
        <img src={type === 'white' ? BackArrowWhiteImage : BackArrowImage} alt="Back Home"  className="h-10" />
      </Link>
    </nav>
  )
}
