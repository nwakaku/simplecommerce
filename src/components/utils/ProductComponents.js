import React,{useContext, useState} from 'react';
import { UserContext } from '../../UserContext';
import product1 from '../../image/product1.jpg';
import './productItem.css';

const ProductComponents = () => {
    const { mainItem} = useContext(UserContext)

    return (
        // <!-- PRODUCTS -->

        <section className="section products">
          <div className="products-layout container">
            <div className="col-1-of-4">
              <div>
                <div className="block-title">
                  <h3>Category</h3>
                </div>
      
                <ul className="block-content">
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>Shoes</span>
                      <small>(10)</small>
                    </label>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>Bags</span>
                      <small>(7)</small>
                    </label>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span> Accessories</span>
                      <small>(3)</small>
                    </label>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>Clothings</span>
                      <small>(3)</small>
                    </label>
                  </li>
                </ul>
              </div>
      
              <div>
                <div className="block-title">
                  <h3>Brands</h3>
                </div>
      
                <ul className="block-content">
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>Gucci</span>
                      <small>(10)</small>
                    </label>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>Burberry</span>
                      <small>(7)</small>
                    </label>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span> Accessories</span>
                      <small>(3)</small>
                    </label>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>Valentino</span>
                      <small>(3)</small>
                    </label>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>Dolce & Gabbana</span>
                      <small>(3)</small>
                    </label>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>Hogan</span>
                      <small>(3)</small>
                    </label>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>Moreschi</span>
                      <small>(3)</small>
                    </label>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>Givenchy</span>
                      <small>(3)</small>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3-of-4">
              <div className="product-layout">
      
              {mainItem.map(product => <div className="product">
                  <div className="img-container">
                    <img src={product1} alt="" />
                    <div className="addCart">
                      <i className="fas fa-shopping-cart"></i>
                    </div>
      
                    <ul className="side-icons">
                      <span><i className="fas fa-search"></i></span>
                      <span><i className="far fa-heart"></i></span>
                      <span><i className="fas fa-sliders-h"></i></span>
                    </ul>
                  </div>
                  <div className="bottom">
                    <a href="productDetails.html">Bambi Print Mini Backpack</a>
                    <div className="price">
                      <span>$150</span>
                    </div>
                  </div>
                </div>)}
                
      
              </div>
      
              {/* <!-- PAGINATION --> */}
              <ul className="pagination">
                <span>1</span>
                <span>2</span>
                <span className="icon">››</span>
                <span className="last">Last »</span>
              </ul>
            </div>
          </div>
        </section>
    )
}

export default ProductComponents
