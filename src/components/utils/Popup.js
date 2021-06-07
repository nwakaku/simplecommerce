import React, { useState } from 'react';
import popup from '../../images/popup.jpg';
import { Link, useHistory } from 'react-router-dom'


const Popup = () => {
    const [pop, setPop] = useState(false)

    return (
        // <!-- PopUp -->
        <div className={`${pop ?"popup hide__popup" : 'popup'}`}>
            <div className="popup__content">
            <div className="popup__close" onClick={() => setPop(true)}>
            <i className="fas fa-times"></i>
            </div>
            <div className="popup__left">
                <div className="popup-img__container">
                <img className="popup__img" src={popup} alt="popup"/>
                </div>
            </div>
            <div className="popup__right">
                <div className="right__content">
                <h1>Get Credited <span>$2000</span> now</h1>
                <p>Sign up to materialhub, invite a friend and get $2000 discount on first purchase. No spam, we promise!
                </p>
                <Link to='/login'>Login</Link><br/>
                <Link to='/signup'>Register</Link>

                </div>
            </div>
            </div>
        </div>

    )
}

export default Popup
