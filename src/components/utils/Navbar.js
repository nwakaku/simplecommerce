import React,{useState} from 'react'
import Hero from './Hero';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className='header'>
            {/* Navigation Bar */}
            <div className='navigation'>
                <div className='container'>
                    <nav className='nav'>
                        <div onClick={() => setToggle(false)}
                         className='nav__hamburger'>
                            #
                        </div>

                        <div className='nav__logo'>
                            <a className='scroll-link'>PHONE</a>
                        </div>

                        <div onClick={() => setToggle(true)}
                         className={`${toggle ? 'nav__menu' : 'nav__menu open'}`} >
                            <div className='menu__top'>
                                <span className='nav__category'>PHONE</span>
                                <a className='close__toggle'><i>%</i></a>
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
                               <i>@</i>
                            </a>

                            <a className='icon__item'>
                                <i>@</i>
                            </a>

                            <a className='icon__item'>
                                <i>@</i>
                            </a>
                            <span className='cart__total'>0</span>
                        </div>
                    </nav>
                </div>
            </div>
            {/* hero area */}
            <Hero />
        </header>
    )
}

export default Navbar
