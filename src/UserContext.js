import React, {createContext, useState, useReducer, useEffect} from 'react'
import data from './data';
import {db, auth } from './firebase';

export const UserContext = createContext()

const initialState = []

const reducer = (state, action) => {
  const kite = action.user
  switch (action.type) {
    case 'add' : 
      return {
        ...state,
        kite
      }
    case 'minus' : 
      return initialState
  }
}

export const UserProvider = ({children}) => {

  //user experience
const [state, dispatch] = useReducer(reducer, initialState);
  
  //trying out something
  // const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const signup = (email, password, fullName) => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((ref) => {
          ref.user.updateProfile({
            displayName: fullName,
          });
          db.collection('userProfile')
              .doc(email)
              .set({
                email,
                fullName,
                photoURL:
                  'https://firebasestorage.googleapis.com/v0/b/instagram-clone-66f7a.appspot.com/o/BlankImage.jpg?alt=media&token=c4d05e11-5df1-4a8a-ba8a-9a6f0cd36c4b',
                bio: '',
                website: '',
                phone: '',
                cart: cartItems,
                admin: false
              })
              .then(() => {
                resolve(ref);
              });
        })
        .catch((error) => reject(error));
    });
  
    return promise;
  };
  const signin = (email, password) => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((ref) => {
                resolve(ref);
              })
        .catch((error) => {
          reject(error);
        });
    });
    return promise;
  };
  
  const signout = () => {
    return auth.signOut();
  };
  const passwordReset = (email) => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          resolve(`Password Reset Email sent to ${email}`);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return promise;
  };
  
  const updateEmail = (email) => {
    return state.updateEmail(email);
  };
  
  const updatePassword = (password) => {
  return state.updatePassword(password);
  };
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user){
        dispatch({
          type: "add",
          user
      })
    }else {
      dispatch({
        type: "minus"
      })
    }
      // setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
    //for individual wish
    const [wish, setWish] = useState({});

    const products = data;
    const present = products.products.filter((product) => product.category === 'Material')
    const [mainItem, setMainItem] = useState(present)
    const [messagerGroup, setMessagerGroup] = useState(null);

    const filterItems = (category) => {
        if (category === 'all') {
            setMainItem(products.products);
            return;
        }
        const newItems = products.products.filter((product) => product.category 
        === category)
        setMainItem(newItems)
    }

    //for second products
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
  
  const individual = (product) => {
    setWish(product)
    console.log(wish)
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

  const onDelete = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1 ){
        setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
}
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice

  //user experience
  useEffect(() => {
    db.collection("products").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  });
  }, [])

  

  const value = {
    state,
    messagerGroup,
    setMessagerGroup,
    updatePassword,
    updateEmail,
    passwordReset,
    signout,
    signup,
    signin,
    wish,
    setWish,
    filterItems,
    mainItem,
    products,
    cartItems,
    setCartItems,
    onAdd,
    onRemove,
    onDelete,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    zoom,
    setZoom,
    individual
  }
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}