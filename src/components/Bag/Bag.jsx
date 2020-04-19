import React, { useMemo } from 'react'
import './Bag.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../ProductCard/ProductCard'
import PaypalLogo from '../../img/payPal.svg'
import BasketApi from '../../services/cart.js'


const Bag = ({
  items,
  basketId,
  totalPrice,
  numberOfProducts
}) => {
  // const id = BasketApi.createBasketId()
  // if (id == null) alert('Basket API Unavailable')
  // const x = BasketApi.getAvailability('EG4958')
  // BasketApi.getBasket('8296df69d593383a743654cf76')
  // BasketApi.removeProductFromCart('6ff61d535e40481cb55bc95950', '5086cb796f5c58a08a39622938')
  // console.log('test', id, y)

  return (
    <>
    <div className='bag'>
      <div className='items-side'>
        <h1>YOUR BAG</h1>
        <div>TOTAL: ({numberOfProducts} {numberOfProducts != 1 ? 'items' : 'item'}) <b>${totalPrice}</b></div>
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
          <div className="split">
            <div>{numberOfProducts} {numberOfProducts != 1 ? 'ITEMS' : 'ITEM'}</div>
            <div>${totalPrice}</div>
          </div>
          <div className="split">
            <div>DELIVERY</div>
            <div>FREE</div>
          </div>
          <div className="split">
            <div>SALES TAX</div>
            <div>-</div>
          </div>
          <div className="split">
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