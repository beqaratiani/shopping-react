import '../CSS/Cart.css'
import { useStateValue } from '../StateProvider'

const Cart = () => {
  const [{ basket }] = useStateValue()
  console.log(basket)
  return (
    <div className='cart'>
      {basket?.length === 0 ? (
        <h2>Cart Empty</h2>
      ) : (
        basket.map((item, i) => (
          <div key={i} className='cart-item'>
            <div className='cart-info'>
              <h4 className='cart-name'>{item.name}</h4>
              <p className='cart-price'>{item.price}</p>
              <h4>S M</h4>
            </div>
            <img src={item.img} alt='' />
          </div>
        ))
      )}
    </div>
  )
}

export default Cart
