import { useState } from 'react'
import '../CSS/Nav.css'
import logo from '../imgs/logo.png'
import { FiShoppingCart } from 'react-icons/fi'
import Cart from './Cart'

const Navigation = () => {
  const [cart, setCart] = useState(false)
  const handleCart = () => {
    setCart(!cart)
  }
  return (
    <div className='nav'>
      <ul className='ul'>
        <li>WOMEN</li>
        <li>MEN</li>
        <li>KIDS</li>
      </ul>
      <img className='logo' src={logo} alt='logo' />
      <div className='nav-right'>
        <FiShoppingCart className='shopping-cart' onClick={handleCart} />
        {cart && <Cart />}
      </div>
    </div>
  )
}

export default Navigation
