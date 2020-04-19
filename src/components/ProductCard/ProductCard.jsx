import React from 'react'
import './ProductCard.css'
import StandardShoe from '../../img/standard.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const ProductCard = ({
  productName,
  quantity,
  pricing,
  size,
  availableStock,
  productImage,
  color
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
          <input type='number' min='0' max={availableStock} value={quantity} />
        </div>

      </div>

      <div className='interaction-icons'>
        <FontAwesomeIcon icon={faTimes}/>
        <FontAwesomeIcon icon={faHeart}/>
      </div>
    </div>
    </>
  )
}

export default ProductCard