import React from 'react'

const BasketItems = () => {
    return (
    <main id="main">
        <section class="section cart__area">
            <div class="container">
                <div class="responsive__cart-area">
                    <form class="cart__form">
                        <div class="cart__table table-responsive">
                            <table width="100%" class="table">
                                <thead>
                                    <tr>
                                        <th>PRODUCT</th>
                                        <th>NAME</th>
                                        <th>UNIT PRICE</th>
                                        <th>QUANTITY</th>
                                        <th>TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="product__thumbnail">
                                            <a href="#">
                                                <img src="./images/products/sumsung/samsung5.jpeg" alt=""/>
                                            </a>
                                        </td>
                                        <td class="product__name">
                                            <a href="#">Apple iPhone 11</a>
                                            <br/>
                                            <small>White/6.25</small>
                                        </td>
                                        <td class="product__price">
                                            <div class="price">
                                                <span class="new__price">$250.99</span>
                                            </div>
                                        </td>
                                        <td class="product__quantity">
                                            <div class="input-counter">
                                                <div>
                                                    <span class="minus-btn">
                                                        <i>-</i>
                                                    </span>
                                                    <input type="text" min="1" value="1" max="10" class="counter-btn"/>
                                                    <span class="plus-btn">
                                                        <i>+</i>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="product__subtotal">
                                            <div class="price">
                                                <span class="new__price">$250.99</span>
                                            </div>
                                            <a href="#" class="remove__cart-item">
                                                <i></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="cart-btns">
                            <div class="continue__shopping">
                                <a href="/">Continue Shopping</a>
                            </div>
                            <div class="check__shipping">
                                <input type="checkbox"/>
                                <span>Shipping(+7$)</span>
                            </div>
                        </div>

                        <div class="cart__totals">
                            <h3>Cart Totals</h3>
                            <ul>
                                <li>
                                    Subtotal
                                    <span class="new__price">$250.99</span>
                                </li>
                                <li>
                                    Shipping
                                    <span>$0</span>
                                </li>
                                <li>
                                    Total
                                    <span class="new__price">$250.99</span>
                                </li>
                            </ul>
                            <a href="">PROCEED TO CHECKOUT</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
    )
}

export default BasketItems
