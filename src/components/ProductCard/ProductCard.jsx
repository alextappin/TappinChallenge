import React from 'react'
import './ProductCard.css'
import StandardShoe from '../../img/standard.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const ProductCard = ({
  itemId,
  productId,
  productName,
  quantity,
  pricing,
  size,
  availableStock,
  productImage,
  color,
  remove,
  update,
  item
}) => {
  return (
    <>
    <div className='product-card'>
      <div>
        <img src={productImage}/>
      </div>

      <div className='card-content'>

        <div className='descriptions'>
          <div>
            <div>{productName}</div>
            <div>${pricing.price}</div>
          </div>
          <div>{color}</div>
        </div>
        
        <div className='size'>
          <div>SIZE: {size}</div>
          <div><b>{availableStock} IN STOCK</b></div>
        </div>

        <div className='qty'>
          <select max={availableStock} value={quantity} onChange={(e) => update(itemId, e.target.value, item)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
        </div>

      </div>

      <div className='interaction-icons'>
        <FontAwesomeIcon icon={faTimes} onClick={() => remove(itemId)}/>
        <FontAwesomeIcon icon={faHeart}/>
      </div>
    </div>
    </>
  )
}

export default ProductCard