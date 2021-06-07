import React, { useContext, useState } from 'react'
import {UserContext} from '../../UserContext';
import product1 from '../../image/product1.jpg';




const Product = ({product}) => {
    const {onAdd, setZoom} =useContext(UserContext)
    return (
      <div className="product">
        <div className="img-container">
          <img src={product1} alt="" />
          <div className="addCart">
            <i className="fas fa-shopping-cart"></i>
          </div>

          <ul className="side-icons">
            <span onClick={() => setZoom(false, product)}><i className="fas fa-search" ></i></span>
            <span><i className="far fa-heart"></i></span>
            <span onClick={() => onAdd(product)}><i className="fas fa-shopping-basket"></i></span>
          </ul>
        </div>
        <div className="bottom">
        <a href="">{product.title}</a>
          <div className="price">
            <span>${product.price}</span>
          </div>
        </div>

        {/* //popup */}
        
      </div>
    )
}

export default Product
