import React, {createContext, useState, useReducer, useEffect} from 'react'
import data from './data'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    //for individual wish
    const [wish, setWish] = useState([])

    const products = data;
    const [mainItem, setMainItem] = useState(products.products)

    const filterItems = (category) => {
        if (category === 'all') {
            setMainItem(products.products);
            return;
        }
        const newItems = products.products.filter((product) => product.category 
        === category)
        setMainItem(newItems)
    }
    const [cartItems, setCartItems] = useState([]);
    const [zoom, setZoom] = useState(true);

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
      wish,
      setWish,
      filterItems,
      mainItem,
      products,
      cartItems,
      setCartItems,
      onAdd,
      onRemove,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      zoom,
      setZoom
  }
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}