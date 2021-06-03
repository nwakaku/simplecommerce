import React,{useState, useContext} from 'react'
import {FaSearch} from 'react-icons/fa';
import {BsPersonFill} from 'react-icons/bs'
import {GiShoppingCart} from 'react-icons/gi'
import { UserContext } from '../../UserContext'
import { Link, useHistory } from 'react-router-dom'

const Navbar1 = () => {
    const {cartItems} =useContext(UserContext)
    const [toggle, setToggle] = useState(false);
    return (
        <div className='navigation'>
                <div className='container'>
                    <nav className='nav'>
                        <div onClick={() => setToggle(false)}
                         className='nav__hamburger'>
                            <i></i>
                        </div>

                        <div className='nav__logo'>
                            <a className='scroll-link'>PHONE</a>
                        </div>

                        <div onClick={() => setToggle(true)}
                         className={`${toggle ? 'nav__menu' : 'nav__menu open'}`} >
                            <div className='menu__top'>
                                <span className='nav__category'>PHONE</span>
                                <a className='close__toggle'><i></i></a>
                            </div>
                            <ul className='nav__list'>
                                <li className='nav__item'>
                                    <a className='nav__link scroll-link'>Home</a>
                                </li>

                                <li className='nav__item'>
                                    <a className='nav__link scroll-link'>Category</a>
                                </li>

                                <li className='nav__item'>
                                    <a className='nav__link scroll-link'>Blog</a>
                                </li>

                                <li className='nav__item'>
                                    <a className='nav__link scroll-link'>Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className='nav__icons'>
                            <a className='icon__item'>
                               <i><FaSearch/></i>
                            </a>

                            <a className='icon__item'>
                                <i><BsPersonFill/></i>
                            </a>

                            <Link to='/cart'>
                                <a className='icon__item'>
                                <i><GiShoppingCart/></i>
                                </a>
                                <span className='cart__total'>{cartItems.length}</span>
                            </Link>
                       </div>
                    </nav>
                </div>
            </div>
    )
}

export default Navbar1
