import React, { useEffect } from 'react'
import './App.css';
import Landing from './components/pages/Landing';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { UserProvider } from './UserContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductsArea from './components/pages/ProductsArea';
import UserPage from './components/pages/UserPage';
import Login from './components/utils/Login';
import AdminHome from './components/admin/pages/AdminHome';
import NewProduct from './components/admin/pages/NewProduct';
import Product from './components/admin/pages/Product';
import User from './components/admin/pages/User';
import UserList from './components/admin/pages/UserList';
import ChatCommunity from './components/pages/ChatCommunity';


function App() {
  return (
    <div className="App">
      <div className="first"></div>
      <div className="second">
        <Router>
      <UserProvider>
        <Switch>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/chat'>
            <ChatCommunity />
          </Route>
          <Route path='/admin'>
            <AdminHome />
          </Route>
          <Route path='/newproduct'>
            <NewProduct />
          </Route>
          <Route path='/adminproduct'>
            <Product />
          </Route>
          <Route path='/user'>
            <User />
          </Route>
          <Route path='/userlist'>
            <UserList />
          </Route>
          <Route path='/product'>
            <ProductsArea/> 
          </Route>
          <Route path='/signup'>
            <UserPage />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
          
          
        </Switch>
      </UserProvider>        
      </Router>
      </div>
      

    </div>
    
  );
}

export default App;
