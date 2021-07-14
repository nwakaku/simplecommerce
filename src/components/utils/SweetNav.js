import React,{useContext, useState} from 'react';
import './sweet.css';
import cart from '../../image/shoppingBag.svg'
import search from '../../image/search.svg';
import { UserContext } from '../../UserContext';
import { Link, NavLink } from 'react-router-dom'
import girl from '../../image/woman.jpg';



const SweetNav = () => {
  const {cartItems,
    signout,
     state} =useContext(UserContext)
     const [searcher, setSearcher] = useState(false);


    return (
        <div>
              <nav className="nav">
    <div className="wrapper container">
      <div className="logo"><Link to='/'>MaterialHub</Link></div>
      <ul className="nav-list">
        <div className="top">
          <label htmlFor="" className="btn close-btn"><i className="fas fa-times"></i></label>
        </div>
        <li className="active"><NavLink exact activeClassName="active" to='/'>Home</NavLink></li>
        <li><NavLink activeClassName="active" to='/product'>Products</NavLink></li>
        <li>
          <Link className="desktop-item">Shop <span><i className="fas fa-chevron-down"></i></span></Link>
          <input type="checkbox" id="showMega" />
          <label htmlFor="showMega" className="mobile-item">Shop <span><i className="fas fa-chevron-down"></i></span></label>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <img src={girl} alt="" />
              </div>
              <div className="row">
                <header>Categories</header>
                <ul className="mega-links">
                  <li><Link>Male</Link></li>
                  <li><Link>Female</Link></li>
                  <li><Link>Bedsheets</Link></li>
                  <li><Link>Window Blinds</Link></li>
                </ul>
              </div>
              <div className="row">
                <header>Others</header>
                <ul className="mega-links">
                  <li><Link>Lace</Link></li>
                  <li><Link>Cashmere</Link></li>
                  <li><Link>Ankara</Link></li>
                  <li><Link>Hollandis</Link></li>
                </ul>
              </div>
              <div className="row">
                <header>Affiliates</header>
                <ul className="mega-links">
                  <li><Link>Gucci</Link></li>
                  <li><Link>Louis Vuitton</Link></li>
                  <li><Link>Pradas</Link></li>
                  <li><Link>Others</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li><NavLink activeClassName="active" to="/chat">ChatCommunity</NavLink></li>
        <li>
          <Link className="desktop-item">Vendors <span><i className="fas fa-chevron-down"></i></span></Link>
          <input type="checkbox" id="showdrop1" />
          <label htmlFor="showdrop1" className="mobile-item">Vendors <span><i className="fas fa-chevron-down"></i></span></label>
          <ul className="drop-menu1">
            <li><Link>About</Link></li>
            <li><Link>ContactUs</Link></li>
          </ul>
        </li>

        <li>
          <Link className="desktop-item"><i style={{fontSize:'2rem'}} className="far fa-user-circle"></i></Link>
          <input type="checkbox" id="showdrop2" />
          <label htmlFor="showdrop2" className="mobile-item">Page <span><i className="fas fa-chevron-down"></i></span></label>
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
            
          
          <span onClick={() => setSearcher(!searcher)}><img src={search} alt="" /></span>
        </li>
      </ul>
      <label htmlFor="" className="btn ">
                      <select name="order-by" id="sort-by">
                      <option value="materials" selected="selected" >Materials</option>
                      <option value="polos" >Polos</option>
                      <option value="shirts" >shirts</option>
                      <option value="trousers" >Trousers</option>
                      <option value="gown" >Gown</option>
                      <option value="designers">Designers</option>
                    </select>
                    <i className="fas fa-bars"></i>
      </label>

    </div>
    <div className={`${searcher ? 'search' : "hide_search"}`}>
      <input type="text" placeholder='search anything' />
    </div> 
   </nav>

        </div>
    )
}

export default SweetNav
