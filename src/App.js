import React, { useEffect } from 'react'
import './App.css';
import Landing from './components/pages/Landing';
import Cart from './components/pages/Cart';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { UserProvider } from './UserContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductsArea from './components/pages/ProductsArea';
import UserPage from './components/pages/UserPage';
import Login from './components/utils/Login';


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="App">
      <Router>
      <UserProvider>
        <Switch>
          <Route path='/cart'>
            <Cart />
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
    
  );
}

export default App;
