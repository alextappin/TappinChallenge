export default {
  createBasketId: async () => {
    let response = await fetch('https://www.adidas.com/api/checkout/baskets', {
      method: 'POST',
    })
    if (response.status === 403) {
      window.open('https://www.adidas.com/us','_self').close()
      location.reload();
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
  // createBasketId: async () => {
  //   let response = await fetch('https://www.adidas.com/api/checkout/baskets', {
  //     method: 'POST',
  //   }).then((response) => {
  //     if (response.ok) return response.json()
  //     if (response.status === 400) { // already basket, grab from error
  //       return response.json()
  //     }
  //   }).then((data) => {
  //     if (data.errorCode && data.errorCode === 'CustomerBasketsQuotaExceededException') {
  //       return e.messageList[0].details.arguments.basketIds
  //     }
  //     return data.basketId
  //   })
  //   return await response
  // },
  getBasket: (id) => {
    fetch(`https://www.adidas.com/api/checkout/baskets/${id}`)
    .then((response) => {
      console.log(response);
      if (response.ok) return response.json()
    }).then((data) => {
      console.log(data)
      return data
    })
  },
  getAvailability: async (id) => {
    const response = await fetch(`https://www.adidas.com/api/products/${id}/availability`)
    console.log(response.json())
  },
  addProductToCart: (basketId, productId, quantity) => {
    fetch(`https://WWW.adidas.com/api/checkout/baskets/${basketId}/items`, {
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
    }).then((response) => {
      console.log(response)
      if (response.ok) return response.json()
      return response.json()
    }).then((data) => {
      console.log(data)
      return data
    }).catch((e) => {
      console.log(e)
    })
  },
  removeProductFromCart: (basketId, productId) => {
    fetch(`https://WWW.adidas.com/api/checkout/baskets/${basketId}/items/${productId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    }).then((response) => {
      console.log(response)
      if (response.ok) return response.json()
      return response.json()
    }).then((data) => {
      console.log(data)
      return data
    }).catch((e) => {
      console.log(e)
    })
  }
}