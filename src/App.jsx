import React, { useMemo, useState, useEffect, useCallback } from 'react'
import { pathOr } from 'ramda'
import './App.css'
import Checkout from './pages/Checkout'
import Header from './components/Header/Header'
import BasketApi from './services/cart.js'

const App = () => {
  const [basket, setBasket] = useState(null)

  const startAppCallback = useCallback(
    async () => {
      const currentBasketId = await BasketApi.createBasketId()
      await BasketApi.addToBasket(currentBasketId, 'EG4958_550', 4)
      const currentBasket = await BasketApi.getBasketGivenId(currentBasketId)

      setBasket(currentBasket)
    }, [setBasket, BasketApi]
  )

  const numberOfProducts = useMemo(
    () => pathOr(0, ['totalProductCount'], basket),
    [basket, pathOr]
  )

  const totalPrice = useMemo(
    () => pathOr(0, ['pricing', 'total'], basket),
    [basket, pathOr]
  )

  const deliveryPrice = useMemo(
    () => pathOr('FREE', ['pricing', 'shippingTotal'], basket),
    [basket, pathOr]
  )

  const totalTax = useMemo(
    () => pathOr('-', ['pricing', 'totalTax'], basket),
    [basket, pathOr]
  )

  const items = useMemo(
    () => pathOr([], ['shipmentList', '0', 'productLineItemList'], basket),
    [basket, pathOr]
  )

  const endAppCallback = useCallback(
    () => {
      setBasket(null)
    }, [setBasket]
  )
  useEffect(() => {
    startAppCallback()
    return () => {
      endSearchCallback()
    }
  }, [])
  return(
    <>
    <div className='App'>
      <Header numberOfProducts={numberOfProducts}/>
      {
        basket && <Checkout 
          basketId={basket.basketId} 
          items={items}
          totalPrice={totalPrice}
          numberOfProducts={numberOfProducts}
        />
      }
    </div>
    </>
  );
}

export default App