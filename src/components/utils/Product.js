import React, { useContext } from 'react'
import {UserContext} from '../../UserContext';
import product1 from '../../image/product1.jpg';




const Product = ({product}) => {
    const {onAdd} =useContext(UserContext)
    return (
      <div class="product">
        <div class="img-container">
          <img src={product1} alt="" />
          <div class="addCart">
            <i class="fas fa-shopping-cart"></i>
          </div>

          <ul class="side-icons">
            <span><i class="fas fa-search"></i></span>
            <span><i class="far fa-heart"></i></span>
            <span onClick={() => onAdd(product)}><i class="fas fa-shopping-basket"></i></span>
          </ul>
        </div>
        <div class="bottom">
          <a href="">Bambi Print Mini Backpack</a>
          <div class="price">
            <span>$150</span>
          </div>
        </div>
      </div>
    )
}

export default Product
