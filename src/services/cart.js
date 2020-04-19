export default {
  createBasketId: async () => {
    let response = await fetch('https://www.adidas.com/api/checkout/baskets', {
      method: 'POST',
    })
    if (response.status === 403) {
      const errorFix403 = window.open('https://www.adidas.com/us/cart','1366002941508','width=10,height=10,left=375,top=330')
      setTimeout(() => { 
        errorFix403.close()
        location.reload();
      }, 2000);
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
  updateBasketItem: async (basketId, itemId, item) => {
    await fetch(`https://WWW.adidas.com/api/checkout/baskets/${basketId}/items/${itemId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(
        item
      )
    })
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