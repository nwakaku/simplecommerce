import React,{useContext} from 'react'
import {UserContext} from '../../UserContext';
import {Link, useHistory } from 'react-router-dom'

const BasketItems = () => {
    const {cartItems,
        // users, 
       onAdd,
       onRemove,
       itemsPrice,
       taxPrice,
       shippingPrice,
       totalPrice} =useContext(UserContext)
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
                                    <div>{cartItems.length === 0 && <div>this is empty</div>}</div>
                                    {cartItems.map((item) => (
                                        <tr key={item.id} >
                                        <td class="product__thumbnail">
                                            <a href="#">
                                                <img src={item.image} alt=""/>
                                            </a>
                                        </td>
                                        <td class="product__name">
                                            <a href="#">{item.title}</a>
                                            <br/>
                                            <small>{item.qty}</small>
                                        </td>
                                        <td class="product__price">
                                            <div class="price">
                                                <span class="new__price">${item.price.toFixed(2)}</span>
                                            </div>
                                        </td>
                                        <td class="product__quantity">
                                            <div class="input-counter">
                                                <div>
                                                    <span class="minus-btn" onClick={() => onRemove(item)}>
                                                        <i>-</i>
                                                    </span>
                                                    <input type="text" min="1" value="1" max="10" class="counter-btn"/>
                                                    <span class="plus-btn" onClick={() => onAdd(item)}>
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
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>

                        <div class="cart-btns">
                            <div class="continue__shopping">
                                <a href="/">Continue Shopping</a>
                            </div>
                            <div class="check__shipping">
                                <input type="checkbox"/>
                                <span>taxPrice(+{taxPrice.toFixed(2)}$)</span>
                            </div>
                        </div>

                        <div class="cart__totals">
                            <h3>Cart Totals</h3>
                            <ul>
                                <li>
                                    Subtotal
                                    <span class="new__price">${itemsPrice.toFixed(2)}</span>
                                </li>
                                <li>
                                    Shipping
                                    <span>${shippingPrice.toFixed(2)}</span>
                                </li>
                                <li>
                                    Total
                                    <span class="new__price">${totalPrice.toFixed(2)}</span>
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
