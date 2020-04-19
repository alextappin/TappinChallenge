import React, {useState, useMemo} from 'react'
import Banner from '../components/Banner/Banner'
import Bag from '../components/Bag/Bag'

const Checkout = ({
  basketId,
  items,
  totalPrice,
  numberOfProducts,
}) => {
  return (
    <div className='Checkout'>
      <Banner/>
      <Bag
        items={items}
        basketId={basketId}
        totalPrice={totalPrice}
        numberOfProducts={numberOfProducts}
      />
    </div>
  )
}

export default Checkout