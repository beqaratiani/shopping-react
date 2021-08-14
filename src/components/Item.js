import '../CSS/Item.css'

const Item = ({ id, name, price, img }) => {
  return (
    <div className='item'>
      <img src={img} width='354' height='330' alt='img' />
      <h2 className='prod-name'>{name}</h2>
      <p className='prod-price'>{price}</p>
    </div>
  )
}

export default Item
