import React from 'react'
import './App.css';
import Landing from './components/pages/Landing';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import { UserProvider } from './UserContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductsArea from './components/pages/ProductsArea';
import UserPage from './components/pages/UserPage';
import Login from './components/utils/Login';
import ChatCommunity from './components/pages/ChatCommunity';
import MainAdmin from './components/admin2/pages/MainAdmin';
import AdminUser from './components/admin2/pages/AdminUser';
import AdminProducts from './components/admin2/pages/AdminProducts';
import AdminAddProducts from './components/admin2/pages/AdminAddProducts';
import AdminPurchases from './components/admin2/pages/AdminPurchases';
import PrivateRoute from "./components/utils/PrivateRoute";


function App() {
  return (
    <div className="App">
      <div className="first"></div>
      <div className="second">
        <Router>
      <UserProvider>
        <Switch>

          <PrivateRoute path='/admin' component={MainAdmin} exact/>

            {/* <Route path='/admin'>
              <MainAdmin/>
            </Route> */}


            <Route path='/cart'>
              <Cart />
            </Route>

            <Route path='/checkout'>
              <Checkout />
            </Route>

            <Route path='/chat'>
              <ChatCommunity />
            </Route>

            <Route path='/addadminproduct'>
              <AdminAddProducts/>
            </Route>

            <Route path='/adminproducts'>
              <AdminProducts/>
            </Route>

            <Route path='/users'>
              <AdminUser />
            </Route>

            <Route path='/purchases'>
              <AdminPurchases/>
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
