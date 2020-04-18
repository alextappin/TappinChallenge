import React, { useMemo } from 'react'
import './Bag.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../ProductCard/ProductCard'

const Bag = ({
  items,
}) => {
  // use memoized value to calc price given items
  const totalPrice = useMemo(
    () => items.reduce((acc, curr) => acc + curr.price, 0),
    [items]
  )

  const itemsLength = useMemo(
    () => items ? items.length : 0,
    [items]
  )

  return (
    <>
    <div className='bag'>
      <div>
        <h1>YOUR BAG</h1>
        <div>TOTAL: ({itemsLength} {itemsLength != 1 ? 'items' : 'item'}) <b>${totalPrice}</b></div>
        <br></br>
        {items && items.map((item, i) => <ProductCard {...item} key={i}/>)}
        <div>
          <button>CHECKOUT</button>
          <div>OR</div>
          <button>PAYPAL</button>
        </div>
        <div>
          <button>CHECKOUT</button>
          <div>OR</div>
          <button>PAYPAL</button>
        </div>
        <div>
          <div><FontAwesomeIcon icon={faCarSide}/> FREE SHIPPING OVER $49 AND FREE RETURNS</div>
          <div><FontAwesomeIcon icon={faClock}/> BUY NOW PAY OVER TIME</div>
        </div>
      </div>
      <div>
        <div>CONTINUE SHOPPING</div>
        <div>
          <button>CHECKOUT</button>
          <div>OR</div>
          <button>PAYPAL</button>
        </div>
        <div>
          <h3><b>ORDER SUMMARY</b></h3>
        </div>
        <div>
          <input placeholder='ENTER YOUR PROMO CODE'></input>
        </div>
      </div>
    </div>
    </>
  )
}

export default Bag