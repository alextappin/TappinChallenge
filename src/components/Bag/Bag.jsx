import React, { useMemo } from 'react'
import './Bag.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../ProductCard/ProductCard'
import PaypalLogo from '../../img/payPal.svg'


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
      <div className='items-side'>
        <h1>YOUR BAG</h1>
        <div>TOTAL: ({itemsLength} {itemsLength != 1 ? 'items' : 'item'}) <b>${totalPrice}</b></div>
        <br></br>
        {items && items.map((item, i) => <ProductCard {...item} key={i}/>)}
        <div className='pay-buttons'>
          <button className='checkout-button'>CHECKOUT <FontAwesomeIcon icon={faLongArrowAltRight}/></button>
          <div>OR</div>
          <button className='paypal-button'><img src={PaypalLogo}/><FontAwesomeIcon icon={faLongArrowAltRight}/></button>
        </div>
        <div className='shopping-announcement'>
          <div><FontAwesomeIcon icon={faCarSide}/> FREE SHIPPING OVER $49 AND FREE RETURNS</div>
          <br></br>
          <div><FontAwesomeIcon icon={faClock}/> BUY NOW PAY OVER TIME</div>
        </div>
      </div>
      <div className='summary-side'>
        <div className='continue-shopping'>CONTINUE SHOPPING</div>
        <div className='pay'>
          <button className='checkout-button'>CHECKOUT <FontAwesomeIcon icon={faLongArrowAltRight}/></button>
          <div>OR</div>
          <button className='paypal-button'><img src={PaypalLogo}/><FontAwesomeIcon icon={faLongArrowAltRight}/></button>
        </div>
        <div className='order-summary'>
          <h3><b>ORDER SUMMARY</b></h3>
          <div class="split">
            <div>{itemsLength} {itemsLength != 1 ? 'ITEMS' : 'ITEM'}</div>
            <div>${totalPrice}</div>
          </div>
          <div class="split">
            <div>DELIVERY</div>
            <div>FREE</div>
          </div>
          <div class="split">
            <div>SALES TAX</div>
            <div>-</div>
          </div>
          <div class="split">
            <div><b>TOTAL</b></div>
            <div>${totalPrice}</div>
          </div>
        </div>
        <div className='promo'>
          <button>ENTER YOUR PROMO CODE <FontAwesomeIcon icon={faPlus}/></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Bag