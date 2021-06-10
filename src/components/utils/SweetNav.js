import React,{useContext} from 'react';
import './sweet.css';
import cart from '../../image/shoppingBag.svg'
import search from '../../image/search.svg';
import { UserContext } from '../../UserContext';
import { Link, useHistory } from 'react-router-dom'
import girl from '../../image/woman.jpg';



const SweetNav = () => {
  const {cartItems,
    signout,
     state} =useContext(UserContext)

    return (
        <div>
              <nav className="nav">
    <div className="wrapper container">
      <div className="logo"><Link to='/'>MaterialHub</Link></div>
      <ul className="nav-list">
        <div className="top">
          <label for="" className="btn close-btn"><i className="fas fa-times"></i></label>
        </div>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/product'>Products</Link></li>
        <li>
          <a href="" className="desktop-item">Shop <span><i className="fas fa-chevron-down"></i></span></a>
          <input type="checkbox" id="showMega" />
          <label for="showMega" className="mobile-item">Shop <span><i className="fas fa-chevron-down"></i></span></label>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <img src={girl} alt="" />
              </div>
              <div className="row">
                <header>Shop Layout</header>
                <ul className="mega-links">
                  <li><a href="#">Shop With Background</a></li>
                  <li><a href="#">Shop Mini Categories</a></li>
                  <li><a href="#">Shop Only Categories</a></li>
                  <li><a href="#">Shop Icon Categories</a></li>
                </ul>
              </div>
              <div className="row">
                <header>Filter Layout</header>
                <ul className="mega-links">
                  <li><a href="#">Sidebar</a></li>
                  <li><a href="#">Filter Default</a></li>
                  <li><a href="#">Filter Drawer</a></li>
                  <li><a href="#">Filter Dropdown</a></li>
                </ul>
              </div>
              <div className="row">
                <header>Product Layout</header>
                <ul className="mega-links">
                  <li><a href="#">Layout Zoom</a></li>
                  <li><a href="#">Layout Sticky</a></li>
                  <li><a href="#">Layout Sticky 2</a></li>
                  <li><a href="#">Layout Scroll</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li><a href="">ChatCommunity</a></li>
        <li>
          <a href="" className="desktop-item">Vendors <span><i className="fas fa-chevron-down"></i></span></a>
          <input type="checkbox" id="showdrop1" />
          <label for="showdrop1" className="mobile-item">Vendors <span><i className="fas fa-chevron-down"></i></span></label>
          <ul className="drop-menu1">
            <li><a href="">About</a></li>
            <li><a href="">ContactUs</a></li>
          </ul>
        </li>

        <li>
          <a href="" className="desktop-item"><i style={{fontSize:'2rem'}} className="far fa-user-circle"></i></a>
          <input type="checkbox" id="showdrop2" />
          <label for="showdrop2" className="mobile-item">Page <span><i className="fas fa-chevron-down"></i></span></label>
          {state.kite ? <ul className="drop-menu2">
            <li><Link to='/login'>{state.kite.displayName}</Link></li>
            <li><Link to='/signup' onClick={() => signout()}>logout</Link></li>
            <li><Link to='/'>Faq</Link></li>
            <li><Link to='/'>Setting</Link></li>
          </ul>:
          <ul className="drop-menu2">
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/'>Faq</Link></li>
            <li><Link to='/'>Setting</Link></li>
          </ul>}
        </li>
        {/* <!-- icons --> */}
        <li className="icons">
          
            <Link to='/cart'>
              <span>
                <img src={cart} alt="" />
                <small className="count d-flex">{cartItems.length}</small>
              </span>
            </Link>
            
          
          <span><img src={search} alt="" /></span>
        </li>
      </ul>
      <label htmlfor="" className="btn "><i className="fas fa-bars"></i></label>
    </div>
  </nav>
        </div>
    )
}

export default SweetNav
