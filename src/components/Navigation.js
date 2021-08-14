import '../CSS/Nav.css'
import logo from '../imgs/logo.png'
import { FiShoppingCart } from 'react-icons/fi'

const Navigation = () => {
  return (
    <div className='nav'>
      <ul className='ul'>
        <li>WOMEN</li>
        <li>MEN</li>
        <li>KIDS</li>
      </ul>
      <img className='logo' src={logo} alt='logo' />
      <div className='nav-right'>
        <FiShoppingCart className='shopping-cart' />
      </div>
    </div>
  )
}

export default Navigation
