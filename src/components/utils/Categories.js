import React,{useContext, useState} from 'react'
import { UserContext } from '../../UserContext'
import Product from './Product';


const Categories = () => {
    const {filterItems, mainItem} = useContext(UserContext)
      return (
        <section className="category__section section container" id="category">
            <div className="tab__list">
            <div className="title__container tabs">
                <div className="section__titles category__titles ">
                <div className="section__title filter-btn active" 
                     onClick = {() => filterItems("all")}
                     data-id="All Products">
                    <span className="dot"></span>
                    <h1 className="primary__title">All Products</h1>
                </div>
                </div>
                <div className="section__titles">
                <div className="section__title filter-btn"
                     onClick = {() => filterItems("Trending Products")}
                     data-id="Trending Products">
                    <span className="dot"></span>
                    <h1 className="primary__title">Trending Products</h1>
                </div>
                </div>

                <div className="section__titles">
                <div className="section__title filter-btn"
                     onClick = {() => filterItems("Special Products")}
                     data-id="Special Products">
                    <span className="dot"></span>
                    <h1 className="primary__title">Special Products</h1>
                </div>
                </div>

                <div className="section__titles">
                <div className="section__title filter-btn"
                     onClick = {() => filterItems("Featured Products")}
                     data-id="Featured Products">
                    <span className="dot"></span>
                    <h1 className="primary__title">Featured Products</h1>
                </div>
                </div>

            </div>
            </div>
            {/* <!-- Products --> */}
  <section class="section products" >
    <div class="product-layout" data-aos="fade-up" data-aos-duration="1200">
    {mainItem.map((product, index) => <Product product={product}/>
              )}

               {/* <!-- PAGINATION --> */}
               <ul className="pagination">
                <span>1</span>
                <span>2</span>
                <span className="icon">››</span>
                <span className="last">Last »</span>
              </ul>
          </div>
  </section>
    </section>
   )
}

export default Categories
