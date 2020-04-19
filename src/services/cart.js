export default {
  createBasketId: async function createBasketId(n = 5) {
    let response = await fetch('https://www.adidas.com/api/checkout/baskets', {
      credentials: 'include',
      method: 'POST',
    })
    if (response.status === 403) {
      if (n !== 1) return createBasketId(n - 1)
    }
    let data = await response.json()
    console.log(data)
    if (data.errorCode && data.errorCode === 'CustomerBasketsQuotaExceededException') {
      return data.messageList[0].details.arguments.basketIds
    }
    return data.basketId
  },
  getBasketGivenId: async (basketId) => {
    let response = await fetch(`https://www.adidas.com/api/checkout/baskets/${basketId}`)
    let data = await response.json()
    console.log(data)
    return data
  },
  addToBasket: async (basketId, productId, quantity) => {
    await fetch(`https://WWW.adidas.com/api/checkout/baskets/${basketId}/items`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(
        [
          {
            'productId': productId,
            'quantity': quantity
          }
        ]
      )
    })
  },
  addArrayToBasket: async (basketId, products) => {
    await fetch(`https://WWW.adidas.com/api/checkout/baskets/${basketId}/items`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(
        products
      )
    })
  },
  updateBasketItem: async function updateBasketItem(basketId, itemId, item, n = 5) {
    let response = await fetch(`https://WWW.adidas.com/api/checkout/baskets/${basketId}/items/${itemId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(
        item
      )
    })
    if (response.status === 403) {
      if (n !== 1) return updateBasketItem(basketId, itemId, item, n - 1)
    }
  },
  removeBasketItem: async (basketId, itemId) => {
    await fetch(`https://WWW.adidas.com/api/checkout/baskets/${basketId}/items/${itemId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      },
    })
  },
}