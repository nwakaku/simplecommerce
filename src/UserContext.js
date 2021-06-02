import React, {createContext, useState, useReducer, useEffect} from 'react'
import data from './data'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const {products} = data
    const [cartItems, setCartItems] = useState([])
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      setCartItems(cartItems.map((x) => 
      x.id === product.id ? {...exist, qty:exist.qty + 1} : x));
    }else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
    console.log(cartItems)
  }
  const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1 ){
          setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
          setCartItems(
              cartItems.map((x) => 
              x.id === product.id ? {...exist , qty: exist.qty - 1} : x)
          );
      }
  }
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice

  //user experience

  

  const value = {
      products,
      cartItems,
      setCartItems,
      onAdd,
      onRemove,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
  }
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}