import { useState, useEffect } from 'react'
import Item from './Item'
import '../CSS/Items.css'
import Data from '../Data'

const Items = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems(Data)
  }, [])
  return (
    <div className='items-container'>
      <h1 className='header'>Women</h1>
      <div className='items'>
        {items.map((item) => (
          <Item className='item' {...item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Items
