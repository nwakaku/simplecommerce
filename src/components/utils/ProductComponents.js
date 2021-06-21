import React,{useContext, useState} from 'react';
import { UserContext } from '../../UserContext';
import product1 from '../../image/product1.jpg';
import './productItem.css';

const ProductComponents = () => {

    const { mainItem,onAdd, setZoom, individual,filterItems } = useContext(UserContext)
    return (
      // <!-- PRODUCTS -->

  <section className="section products">
    <div className="products-layout ">
      <div className="col-1-of-4">
        <div>
          <div className="block-title">
            <h3>Category</h3>
          </div>

          <ul className="block-content">
            <li                      
            onClick = {() => filterItems("all")}>
              <input type="checkbox" name="" id=""/>
              <label for="">
                <span>Male</span>
                <small>(10)Categories</small>
              </label>
            </li>

            <li                     
            onClick = {() => filterItems("Trending Products")}>
              <input type="checkbox" name="" id=""/>
              <label for="">
                <span>Female</span>
                <small>(7)Categories</small>
              </label>
            </li>

            <li                     
            onClick = {() => filterItems("Special Products")}>
              <input type="checkbox" name="" id=""/>
              <label for="">
                <span>Bedsheets</span>
                <small>(3)Categories</small>
              </label>
            </li>

            <li                     
            onClick = {() => filterItems("Featured Products")}>
              <input type="checkbox" name="" id=""/>
              <label for="">
                <span>Others</span>
                <small>(3)Categories</small>
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
                <span>Accessories</span>
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
        <form action="">
          <div className="item">
            <label for="sort-by">Categories</label>
            <select name="sort-by" id="sort-by">
              <option value="title" selected="selected">Male</option>
              <option value="number">Female</option>
              <option value="search_api_relevance">Windows</option>
              <option value="created">Bedsheets</option>
            </select>
          </div>
          <div className="item">
            <label for="order-by">Sort By</label>
            <select name="order-by" id="sort-by">
              <option value="ASC" selected="selected">Name</option>
              <option value="DESC">Price</option>
              <option value="DESC">Date</option>
              <option value="DESC">Newness</option>
              <option value="DESC">Relevance</option>
            </select>
          </div>
          <a href="">Apply</a>
        </form>

        <div className="product-layout">

        {mainItem.map((product, index) => <div className="product">
            <div className="img-container">
              <img src={product.image} alt="" />
              <div className="addCart">
                <i className="fas fa-shopping-cart"></i>
              </div>

              <ul className="side-icons">
                <span onClick={() => {setZoom(false);individual(product)}}><i className="fas fa-search"></i></span>
                <span><i className="far fa-heart"></i></span>
                <span onClick={() => onAdd(product)}><i className="fas fa-shopping-basket"></i></span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">{product.title}</a>
              <div className="price">
                <span>${product.price}</span>
              </div>
            </div>
          </div>
              )}

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
