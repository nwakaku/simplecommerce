import React, { useState } from 'react';
import popup from '../../images/popup.jpg'

const Popup = () => {
    const [pop, setPop] = useState(false)

    return (
        // <!-- PopUp -->
        <div class={`${pop ?"popup hide__popup" : 'popup'}`}>
            <div class="popup__content">
            <div class="popup__close" onClick={() => setPop(true)}>
            <i class="fas fa-times"></i>
            </div>
            <div class="popup__left">
                <div class="popup-img__container">
                <img class="popup__img" src={popup} alt="popup"/>
                </div>
            </div>
            <div class="popup__right">
                <div class="right__content">
                <h1>Get Credited <span>$2000</span> now</h1>
                <p>Sign up to materialhub, invite a friend and get $2000 discount on first purchase. No spam, we promise!
                </p>
                <form action="#">
                <input type="email" placeholder="Enter your email..." class="popup__form"/>
                <input type="text" placeholder="Enter your password..." class="popup__form"/>
                    <a href="#">Register</a>
                </form>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Popup
