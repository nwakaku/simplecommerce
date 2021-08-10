import React,{useContext, useState} from 'react';
import { UserContext } from '../../UserContext';
import product1 from '../../image/product1.jpg';
import './productItem.css';
import trousers from '../../image/trousers.png'
import polo from '../../image/polo.png'
import shirts from '../../image/shirts.png'
import gown from '../../image/gown.png'
import tailor from '../../image/tailor.png'
import fab from '../../image/fab.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const category = {
  file : [
      {
          "id":1,
          "img":fab,
          "text":"Materials",
          "to": "Material"
      },
      {
          "id":2,
          "img":polo,
          "text":"Polos",
          "to": "Polo"
      },
      {
          "id":3,
          "img":trousers,
          "text":"Trousers",
          "to": "Trousers"
      },
      {
          "id":4,
          "img":shirts,
          "text":"Shirts",
          "to": "Shirts"
      },
      {
          "id":5,
          "img":gown,
          "text":"Gown",
          "to": "gown"
      },
      {
          "id":6,
          "img":tailor,
          "text":"Designers Services",
      }
  ]
}

const ProductComponents = () => {
  const [activeLink, SetActiveLink] = useState(null)

  const { file } = category;

    const { mainItem,onAdd, setZoom, individual,filterItems } = useContext(UserContext);
    const initialValues = {
      categories: '',
  }

    const validationSchema = Yup.object({
      categories: Yup.string().required('Required'),
  }) 
    return (
      // <!-- PRODUCTS -->
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          filterItems(values.categories)
        }}>
          <Form>
              <section >
                <div className="tab__list container section">
                  <div className="category_menu ">
                      {file.map((data) => {
                          const {id,img,text,to} = data;
                          return (
                            <div key={id} 
                            onClick={() => {SetActiveLink(id);filterItems(to)}}
                          className={id === activeLink ? "active_Item" : ""}>
                          <img src={img} alt="" />
                          <p>{text}{id === activeLink && <i className="fas fa-medal"></i>}</p>
                        </div>
                          )               
                      })}

                    
                  </div>
                </div>
              </section>

              <section className="section products container">
              <div className="products-layout ">
                <div className="col-1-of-4">
                  <div>
                    <div className="block-title">
                      <h3>Category</h3>
                    <hr />
                    </div>

                    <ul className="block-content">
                      <li                      
                      onClick = {() => filterItems("all")}>
                        <label htmlFor="">
                          <span>Tailors</span>
                          <small>(10)Categories</small>
                        </label>
                      </li>

                      <li                     
                      onClick = {() => filterItems("Trending Products")}>
                        <label htmlFor="">
                          <span>Materials</span>
                          <small>(600k)Categories</small>
                        </label>
                      </li>

                      <li                     
                      onClick = {() => filterItems("Special Products")}>
                        <label htmlFor="">
                          <span>Shirts</span>
                          <small>(6k)Categories</small>
                        </label>
                      </li>

                      <li                     
                      onClick = {() => filterItems("Featured Products")}>
                        <label htmlFor="">
                          <span>Trousers</span>
                          <small>(3k)Categories</small>
                        </label>
                      </li>

                      <li                     
                      onClick = {() => filterItems("Featured Products")}>
                        <label htmlFor="">
                          <span>Polos</span>
                          <small>(103)Categories</small>
                        </label>
                      </li>

                      <li                     
                      onClick = {() => filterItems("Featured Products")}>
                        <label htmlFor="">
                          <span>Gowns</span>
                          <small>(223)Categories</small>
                        </label>
                      </li>
                    </ul>
                  </div>

                  {/* pricing */}
                  <div>
                    <div className="block-title">
                      <h3>Price</h3>
                    <hr />
                    </div>

                    <ul className="block-content">
                      <li                      
                      onClick = {() => filterItems("all")}>
                        <label htmlFor="">
                          <span>#100 - #1000</span>
                        </label>
                      </li>

                      <li                     
                      onClick = {() => filterItems("Trending Products")}>
                        <label htmlFor="">
                          <span>#1k - #5k</span>
                        </label>
                      </li>

                      <li                     
                      onClick = {() => filterItems("Special Products")}>
                        <label htmlFor="">
                          <span>#5k - #10k</span>
                        </label>
                      </li>

                      <li                     
                      onClick = {() => filterItems("Featured Products")}>
                        <label htmlFor="">
                          <span>#10k - #15k</span>
                        </label>
                      </li>

                      <li                     
                      onClick = {() => filterItems("Featured Products")}>
                        <label htmlFor="">
                          <span>#15k - 20k</span>
                        </label>
                      </li>

                    </ul>
                  </div>

                  <div>
                    <div className="block-title">
                      <h3>Brands</h3>
                    <hr />
                    </div>

                    <ul className="block-content">
                      <li>
                        <label htmlFor="">
                          <span>Gucci</span>
                          <small>(10)</small>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="">
                          <span>Burberry</span>
                          <small>(7)</small>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="">
                          <span>Accessories</span>
                          <small>(3)</small>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="">
                          <span>Valentino</span>
                          <small>(3)</small>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="">
                          <span>Dolce & Gabbana</span>
                          <small>(3)</small>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="">
                          <span>Hogan</span>
                          <small>(3)</small>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="">
                          <span>Moreschi</span>
                          <small>(3)</small>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="">
                          <span>Givenchy</span>
                          <small>(3)</small>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-3-of-4">
                  <div className='toNav' >
                    <div className='product_form'>
                      <div className="item">
                        <label htmlFor="order-by">Categories</label>
                            <Field 
                                as='select'
                                id='categories' 
                                name='categories'>
                                  <option value='Material'>Materials</option>
                                  <option value='Trousers'>Trousers</option>
                                  <option value='Polo'>Polo</option>
                                  <option value='Shirts'>Shirts</option>
                                  <option value='Bedsheets'>Bedsheets</option>
                                  <option value='Designers'>Designers</option>
                                  <option value='gown'>Gowns</option>
                              </Field>
                      </div>
                      <div className="item">
                        <label htmlFor="order-by">Sort By</label>
                        <select name="order-by" id="sort-by">
                          <option value="ASC" selected="selected">Name</option>
                          <option value="DESC">Price</option>
                          <option value="DESC">Date</option>
                          <option value="DESC">Newness</option>
                          <option value="DESC">Relevance</option>
                        </select>
                      </div>
                      <div>
                        <button type='submit' style={{border:'none'}}>
                          <a>Apply</a>
                        </button>
                      </div>

                    </div>
                    
                  </div>

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
                        <p>{product.title}</p>
                        <div className="price">
                          <small>${product.price}</small>
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
          </Form>
         </Formik>
  
    )
}

export default ProductComponents
