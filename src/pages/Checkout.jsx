import React from 'react'
import Banner from '../components/Banner/Banner'
import Bag from '../components/Bag/Bag'

const Checkout = () => {
  const mockItems = [
    {
      name: 'SUPERSTAR SHOES',
      description: 'RUNNING WHITE',
      price: 80,
      size: 'M 7 / W 9',
      stock: 'LOW'
    },
    // {
    //   name: 'SOOPER SHOES',
    //   description: 'RUNNING BLACK',
    //   price: 10,
    //   size: 'M 7 / W 9',
    //   stock: 'LOW'
    // },
    // {
    //   name: 'FANTASTIC SHOES',
    //   description: 'RUNNING GREEN',
    //   price: 100,
    //   size: 'M 7 / W 9',
    //   stock: 'LOW'
    // }
  ]
  return (
    <div className='Checkout'>
      <Banner/>
      <Bag items={mockItems}/>
    </div>
  )
}

export default Checkout