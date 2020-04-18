import React from 'react'
import './ProductCard.css'
import StandardShoe from '../../img/standard.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const ProductCard = ({
  price,
  name,
  description,
  size,
  stock,
}) => {

  return (
    <>
    <div className='product-card'>
      <div>
        <img src={StandardShoe}/>
      </div>

      <div className='card-content'>

        <div className='descriptions'>
          <div>
            <div>{name}</div>
            <div>${price}</div>
          </div>
          <div>{description}</div>
        </div>
        
        <div className='size'>
          <div>SIZE: {size}</div>
          <div><b>{stock} IN STOCK</b></div>
        </div>

        <div className='qty'>
          <select></select>
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