import React, { useMemo, useState, useEffect, useCallback } from 'react'
import { pathOr, path } from 'ramda'
import './App.css'
import Checkout from './pages/Checkout'
import Header from './components/Header/Header'
import BasketApi from './services/cart.js'

const App = () => {
  const [basket, setBasket] = useState(null)

  const startAppCallback = useCallback(
    async () => {
      const currentBasketId = await BasketApi.createBasketId()
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
  const handleRemoveItem = async (itemId) => {
    await BasketApi.removeBasketItem(path(['basketId'], basket), itemId)
    setBasket(await BasketApi.getBasketGivenId(path(['basketId'], basket)))
  }
  const handleUpdateItem = async (itemId, quantityString, item) => {
    const quantity = parseInt(quantityString)
    const updatedItem = {
      ...item,
      quantity
    }
    await BasketApi.updateBasketItem(path(['basketId'], basket), itemId, updatedItem)
    setBasket(await BasketApi.getBasketGivenId(path(['basketId'], basket)))
  }
  const addShoes = async () => {
    const currentBasketId = await BasketApi.createBasketId()
    await BasketApi.addArrayToBasket(currentBasketId, [
      {
        productId: 'EG4958_550',
        quantity: 2,
      },
      {
        productId: 'EG0754_590',
        quantity: 1,
      },
    ])
    setBasket(await BasketApi.getBasketGivenId(currentBasketId))
  }

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
          remove={handleRemoveItem}
          update={handleUpdateItem}
          addShoes={addShoes}
        />
      }
    </div>
    </>
  );
}

export default App