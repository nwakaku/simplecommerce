import './last.css';
import React,{useContext, useState} from 'react';
import { UserContext } from '../../UserContext';
import { Link, NavLink } from 'react-router-dom'
import girl from '../../image/woman.jpg';

const LastNav = () => {
    const [close, setClose] = useState(true);
    const {cartItems,
        signout,
         state} =useContext(UserContext)
         const [searcher, setSearcher] = useState(false);
    return (
        <section>
            <nav className='nav'>
                <div className='wrapper container'>
                    <div className='logo'><Link to='/'>MaterialHub</Link></div>
                    <ul className={`${close ? 'nav-list' : 'nav-list show' }`}>
                        <div className='top'>
                            <label for='' className='btn close-btn' onClick={() => setClose(!close)}> 
                            <i class="fas fa-times"></i>
                            </label>
                        </div>

                        <li className='active'>
                            <NavLink exact activeClassName="active" to='/' onClick={() => setClose(!close)}>
                                Home</NavLink></li>
                        <li onClick={() => setClose(!close)}>
                            <NavLink activeClassName="active" to='/product' onClick={() => setClose(!close)}>
                                Products</NavLink>
                        </li>
                        <li>
                            <Link className='desktop-item'>
                                Shop <span><i class="fas fa-chevron-down"></i></span>
                            </Link>
                            <input type='checkbox' id='showMega' />
                            <label for='showMega' className='mobile-item'>
                             Shop <span><i class="fas fa-chevron-down"></i></span>
                            </label>

                            <div className='mega-box'>
                                <div className='content'>
                                    <div className='row'>
                                        <img src={girl} />
                                    </div>

                                    <div className='row'>
                                        <header>header</header>
                                        <ul className='mega-links'>
                                            <li><Link>header</Link></li>
                                            <li><Link>header</Link></li>
                                            <li><Link>header</Link></li>
                                            <li><Link>header</Link></li>
                                        </ul>
                                    </div>

                                    <div className='row'>
                                        <header>menu1</header>
                                        <ul className='mega-links'>
                                            <li><Link>menu1</Link></li>
                                            <li><Link>menu1</Link></li>
                                            <li><Link>menu1</Link></li>
                                            <li><Link>menu1</Link></li>
                                        </ul>
                                    </div>

                                    <div className='row'>
                                        <header>menu2</header>
                                        <ul className='mega-links'>
                                            <li><Link>menu2</Link></li>
                                            <li><Link>menu2</Link></li>
                                            <li><Link>menu2</Link></li>
                                            <li><Link>menu2</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                        ><NavLink activeClassName="active" to="/chat"  onClick={() => setClose(!close)}>
                            ChatCommunity</NavLink></li>
                        <li>
                            <Link  className='desktop-item'>Vendors 
                                <span><i class="fas fa-chevron-down"></i></span>
                            </Link>
                            <input type='checkbox' id='showdrop1' />
                            <label for='showdrop1' className='mobile-item'>
                                Vendors<span><i class="fas fa-chevron-down"></i></span>
                            </label>
                            <ul className='drop-menu1'>
                                <li><Link>Vendor Store Listings</Link></li>
                                <li><Link>Store Details</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className='desktop-item' style={{fontSize:"2.5rem"}}><i class="far fa-user-circle"></i> <span></span></Link>
                            <input type='checkbox' id='showdrop2' />
                            <label for='showdrop2' className='mobile-item'>
                            <i class="far fa-user-circle"></i><span><i class="fas fa-chevron-down"></i></span>
                            </label>
                            {state.kite ? <ul className="drop-menu2">
                                <li><Link to='/login'>{state.kite.displayName}</Link></li>
                                <li><Link to='/signup' onClick={() => signout()}>logout</Link></li>
                            </ul>:
                            <ul className="drop-menu2">
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/signup'>Signup</Link></li>
                            </ul>}
                        </li>
                        <li className='icons'>
                            <Link to='/cart'>
                                <span>
                                <i class="fas fa-shopping-basket" style={{fontSize:"2rem"}}></i>
                                <small className='count d-flex' style={{fontSize:"1.5rem"}}>{cartItems.length}</small>
                                </span>
                            </Link>
                            
                            <span onClick={() => setSearcher(!searcher)}>
                                <i class="fas fa-search" style={{fontSize:"2rem"}}></i>
                            </span>        
                        </li>
                       
                    </ul>
                    <label for='' className='btn open-btn' onClick={() => setClose(!close)}>
                    <i class="fas fa-bars"></i>
                    <small className='count d-flex' style={{fontSize:"1.5rem", color:"red"}}>{cartItems.length}</small>
                    </label>
                </div>
                 <div className={`${searcher ? 'search' : "hide_search"}`}>
                        <input type="text" placeholder='search anything' />
                </div> 
            </nav>
        </section>
    )
}

export default LastNav
