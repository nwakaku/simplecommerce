import React,{useContext} from 'react'
import {UserContext} from '../../UserContext';
import {Link, useHistory } from 'react-router-dom'
import {HiPlusSm} from 'react-icons/hi'
import {HiMinusSm} from 'react-icons/hi';
import product1 from '../../image/product1.jpg';


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
                                                <img src={product1} alt=""/>
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
                                                    <span 
                                                        style={{
                                                            padding: '1rem 0.8rem',
                                                            marginRight: 0,
                                                            border: '0.1rem solid black',
                                                            margin: '0.5rem'
                                                        }} 
                                                        class="minus-btn" onClick={() => onRemove(item)}>
                                                        <i><HiMinusSm/></i>
                                                    </span>
                                                    <span 
                                                        style={{
                                                            padding: '1rem 0.8rem',
                                                            marginRight: 0,
                                                            border: '0.1rem solid black',
                                                            margin: '0.5rem'
                                                        }} >
                                                            {item.qty}
                                                    </span>
                                                    <span
                                                     style={{
                                                         padding: '1rem 0.8rem',
                                                         marginRight: 0,
                                                         margin: '0.5rem',
                                                         border: '0.1rem solid black'}}
                                                     class="plus-btn" onClick={() => onAdd(item)}>
                                                        <i><HiPlusSm/></i>
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
                                <Link to='/'>
                                <a href="/">Continue Shopping</a>                                
                                </Link>
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
