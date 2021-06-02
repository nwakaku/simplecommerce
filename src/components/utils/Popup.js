import React, { useState } from 'react'

const Popup = () => {
    const [pop, setPop] = useState(false)

    return (
        // <!-- PopUp -->
        <div class={`${pop ?"popup hide__popup" : 'popup'}`}>
            <div class="popup__content">
            <div class="popup__close" onClick={() => setPop(true)}>
                <i>
                    Y
                </i>
            </div>
            <div class="popup__left">
                <div class="popup-img__container">
                <img class="popup__img" src="./images/popup.jpg" alt="popup"/>
                </div>
            </div>
            <div class="popup__right">
                <div class="right__content">
                <h1>Get Discount <span>30%</span> Off</h1>
                <p>Sign up to our newsletter and save 30% for you next purchase. No spam, we promise!
                </p>
                <form action="#">
                    <input type="email" placeholder="Enter your email..." class="popup__form"/>
                    <a href="#">Subscribe</a>
                </form>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Popup
