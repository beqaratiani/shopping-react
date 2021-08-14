import '../CSS/Item.css'

const Item = ({ id, name, price, img }) => {
  return (
    <div>
      <img src={img} width='354' height='330' alt='img' />
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}

export default Item
