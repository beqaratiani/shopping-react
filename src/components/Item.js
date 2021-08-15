import { useState } from 'react'
import '../CSS/Item.css'
import { useStateValue } from '../StateProvider'

const Item = ({ id, name, price, img }) => {
  const [entered, setEntered] = useState(false)

  const handleEnter = (e) => {
    setEntered(true)
  }
  const handleLeave = (e) => {
    setEntered(false)
  }
  const [, dispatch] = useStateValue()
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        name: name,
        price: price,
        img: img,
      },
    })
  }

  return (
    <div
      className={`item ${entered ? 'active-item' : ''}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <img src={img} width='354' height='330' alt='img' />
      {entered && (
        <button onClick={addToBasket} className='buy'>
          BUY
        </button>
      )}
      <h2 className='prod-name'>{name}</h2>
      <p className='prod-price'>{price}</p>
    </div>
  )
}

export default Item
