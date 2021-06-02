import React, { useContext } from 'react'
import {UserContext} from '../../UserContext';


const Product = ({product}) => {
    const {onAdd} =useContext(UserContext)
    return (
        <div class="product category__products">
                    <div class="product__header">
                      <img src={product.image} alt="product"/>
                    </div>
                    <div class="product__footer">
                      <h3>${product.title}</h3>
                      <div class="rating">
                       
                      </div>
                      <div class="product__price">
                        <h4>$${product.price}</h4>
                      </div>
                      <a href="#">
                          <button 
                            onClick={() => onAdd(product)} 
                            type="submit" 
                            class="product__btn">Add To Cart</button></a>
                    </div>
                  <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="#">
                          D
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          H
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          K
                        </a>
                      </li>
                  </ul>
                  </div>
    )
}

export default Product
