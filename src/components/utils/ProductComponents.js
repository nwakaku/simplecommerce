import React,{useContext, useState} from 'react';
import { UserContext } from '../../UserContext';
import product1 from '../../image/product1.jpg';
import './productItem.css';

const ProductComponents = () => {
  const accordionData = {
    title: 'Men',
    list1: ['butik',]
  };
    const { mainItem} = useContext(UserContext)
    const { title, list1,list2,list3,list4} = accordionData;

    return (
        // <!-- PRODUCTS -->

        <section className="section products">
          <div className="top_product ">
                <div>
                  Hub_of_Material
                </div>
                <div>
                  <small>SHOWING 1 - 20 ITEMS(S)</small>
                  <button>
                    SORTED BY
                    <i class="fas fa-sort-amount-down"></i>
                  </button>
                </div>
            </div>  
          <div className="products-layout ">
            

            <div className="col-1-of-4">
              <div>
                <div className="block-title">
                  <h3>Category</h3>
                </div>
      
                <ul className="block-content">
                  <li>
                    <div>{title}+</div>
                    <div>{}</div>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>Female</span>
                      <small>(7)</small>
                    </label>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span> Bedsheets</span>
                      <small>(3)</small>
                    </label>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>Window_blind </span>
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
              <div>
                <div className="block-title">
                  <h3>Rating</h3>
                </div>
      
                <ul className="block-content">
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>Trending</span>
                      <small>(10)</small>
                    </label>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>Featured</span>
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
                      <span>Custom</span>
                      <small>(3)</small>
                    </label>
                  </li>
      
                  <li>
                    <input type="checkbox" name="" id=""/>
                    <label for="">
                      <span>All in All</span>
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
                    <img src={product.image} alt="" />
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
