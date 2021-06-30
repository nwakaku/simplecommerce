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
       onDelete,
       itemsPrice,
       taxPrice,
       shippingPrice,
       totalPrice} =useContext(UserContext)
    return (
    <main id="main">
        <section className="section cart__area">
            <div className="container">
                <div className="responsive__cart-area">
                    <form className="cart__form">
                        <div className="cart__table table-responsive">
                            <table width="100%" className="table">
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
                                        <td className="product__thumbnail">
                                            <a href="#">
                                                <img src={item.image} alt=""/>
                                            </a>
                                        </td>
                                        <td className="product__name">
                                            <a href="#">{item.title}</a>
                                            <br/>
                                            <small>{item.qty}</small>
                                        </td>
                                        <td className="product__price">
                                            <div className="price">
                                                <span className="new__price">${item.price.toFixed(2)}</span>
                                            </div>
                                        </td>
                                        <td className="product__quantity">
                                            <div className="input-counter">
                                                <div>
                                                    <span 
                                                        className="minus-btn" onClick={() => onRemove(item)}>
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
                                                     className="plus-btn" onClick={() => onAdd(item)}>
                                                        <i><HiPlusSm/></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="product__subtotal">
                                            <div className="price">
                                                <span className="new__price">$250.99</span>
                                            </div>
                                            <span onClick={() => onDelete(item)}>
                                            <i className="fas fa-trash"></i> 
                                            </span>
                                            
                                        </td>
                                    </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>

                        <div className="cart-btns">
                            <div className="continue__shopping">
                                <Link to='/'>
                            Continue Shopping                              
                                </Link>
                            </div>
                            <div className="check__shipping">
                                <input type="checkbox"/>
                                <span>taxPrice(+{taxPrice.toFixed(2)}$)</span>
                            </div>
                        </div>

                        <div className="cart__totals">
                            <h3>Cart Totals</h3>
                            <ul>
                                <li>
                                    Subtotal
                                    <span className="new__price">${itemsPrice.toFixed(2)}</span>
                                </li>
                                <li>
                                    Shipping
                                    <span>${shippingPrice.toFixed(2)}</span>
                                </li>
                                <li>
                                    Total
                                    <span className="new__price">${totalPrice.toFixed(2)}</span>
                                </li>
                            </ul>
                            <Link to='/checkout'>PROCEED TO CHECKOUT</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
    )
}

export default BasketItems
