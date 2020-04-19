import React from 'react'
import Banner from '../components/Banner/Banner'
import Bag from '../components/Bag/Bag'

const Checkout = ({
  basketId,
  items,
  totalPrice,
  numberOfProducts,
  remove,
  update,
  addShoes
}) => {
  return (
    <div className='Checkout'>
      <Banner/>
      <Bag
        items={items}
        basketId={basketId}
        totalPrice={totalPrice}
        numberOfProducts={numberOfProducts}
        remove={remove}
        update={update}
        addShoes={addShoes}
      />
    </div>
  )
}

export default Checkout