import React,{useContext} from 'react';
import './sweet.css';
import cart from '../../image/shoppingBag.svg'
import search from '../../image/search.svg';
import { UserContext } from '../../UserContext';
import { Link, useHistory } from 'react-router-dom'



const SweetNav = () => {
  const {cartItems} =useContext(UserContext)

    return (
        <div>
              <nav class="nav">
    <div class="wrapper container">
      <div class="logo"><Link to='/'><a href="">MaterialHub</a></Link></div>
      <ul class="nav-list">
        <div class="top">
          <label for="" class="btn close-btn"><i class="fas fa-times"></i></label>
        </div>
        <li><Link to='/'>Home</Link></li>
        <li><a href="products.html">Products</a></li>
        <li>
          <a href="" class="desktop-item">Shop <span><i class="fas fa-chevron-down"></i></span></a>
          <input type="checkbox" id="showMega" />
          <label for="showMega" class="mobile-item">Shop <span><i class="fas fa-chevron-down"></i></span></label>
          <div class="mega-box">
            <div class="content">
              <div class="row">
                <img src="./images/woman.jpg" alt="" />
              </div>
              <div class="row">
                <header>Shop Layout</header>
                <ul class="mega-links">
                  <li><a href="#">Shop With Background</a></li>
                  <li><a href="#">Shop Mini Categories</a></li>
                  <li><a href="#">Shop Only Categories</a></li>
                  <li><a href="#">Shop Icon Categories</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Filter Layout</header>
                <ul class="mega-links">
                  <li><a href="#">Sidebar</a></li>
                  <li><a href="#">Filter Default</a></li>
                  <li><a href="#">Filter Drawer</a></li>
                  <li><a href="#">Filter Dropdown</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Product Layout</header>
                <ul class="mega-links">
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
          <a href="" class="desktop-item">Vendors <span><i class="fas fa-chevron-down"></i></span></a>
          <input type="checkbox" id="showdrop1" />
          <label for="showdrop1" class="mobile-item">Vendors <span><i class="fas fa-chevron-down"></i></span></label>
          <ul class="drop-menu1">
            <li><a href="">About</a></li>
            <li><a href="">ContactUs</a></li>
          </ul>
        </li>

        <li>
          <a href="" class="desktop-item"><i style={{fontSize:'2rem'}} class="far fa-user-circle"></i></a>
          <input type="checkbox" id="showdrop2" />
          <label for="showdrop2" class="mobile-item">Page <span><i class="fas fa-chevron-down"></i></span></label>
          <ul class="drop-menu2">
            <li><a href="">Login</a></li>
            <li><a href="">SignUp</a></li>
            <li><a href="">Faq</a></li>
            <li><a href="">Setting</a></li>
          </ul>
        </li>
        {/* <!-- icons --> */}
        <li class="icons">
          
            <Link to='/cart'>
              <span>
                <img src={cart} alt="" />
                <small class="count d-flex">{cartItems.length}</small>
              </span>
            </Link>
            
          
          <span><img src={search} alt="" /></span>
        </li>
      </ul>
      <label for="" class="btn "><i class="fas fa-bars"></i></label>
    </div>
  </nav>
        </div>
    )
}

export default SweetNav
