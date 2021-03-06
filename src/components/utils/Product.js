import React, { useContext, useState } from 'react'
import {UserContext} from '../../UserContext';




const Product = ({product}) => {
    const {onAdd, setZoom, individual} =useContext(UserContext)
    return (
      <div className="product" key={product.id}>
        <div className="img-container">
          <img src={product.image} alt="" />
          <div className="addCart">
            <i className="fas fa-shopping-cart"></i>
          </div>

          <ul className="side-icons">
            <span onClick={() => {setZoom(false);individual(product)}}><i className="fas fa-search" ></i></span>
            <span><i className="far fa-heart"></i></span>
            <span onClick={() => onAdd(product)}><i className="fas fa-shopping-basket"></i></span>
          </ul>
        </div>
        <div className="bottom">
        <p>{product.title}</p>
          <div className="price">
            <small>NGN{product.price}</small>
          </div>
        </div>

        {/* //popup */}
        
      </div>
    )
}

export default Product
