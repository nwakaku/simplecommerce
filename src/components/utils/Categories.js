import React,{useContext, useState} from 'react'
import { UserContext } from '../../UserContext'
import Product from './Product';
import trousers from '../../image/trousers.png'
import polo from '../../image/polo.png'
import shirts from '../../image/shirts.png'
import gown from '../../image/gown.png'
import tailor from '../../image/tailor.png'
import fab from '../../image/fab.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'


  const category = {
    file : [
        {
            "id":1,
            "img":fab,
            "text":"Accessories",
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
            "text":"Customize",
        }
    ]
}

const Categories = () => {
  // for category

const [activeLink, SetActiveLink] = useState(null);
const [catItem, setCatItem] = useState(null);

const { file } = category;
    const {filterItems, mainItem} = useContext(UserContext)
    const initialValues = {
      categories: '',
  }

    const validationSchema = Yup.object({
      categories: Yup.string().required('Required'),
  }) 
    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          filterItems(values.categories)
        }}>
          <Form>
                <section >
                <div className="tab__list container">
                  <div className="category_menu ">
                      {file.map((data) => {
                          const {id,img,text,to} = data;
                          return (
                            <div key={id} 
                            onClick={() => {SetActiveLink(id);filterItems(to);setCatItem(text)}}
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
              <marquee>
                First and Last customer everyday from 0:00'oclock to make a purchase gets a NGN10000 credit;  
                First and Last customer everyday from 0:00'oclock to make a purchase gets a NGN10000 credit;  
                First and Last customer everyday from 0:00'oclock to make a purchase gets a NGN10000 credit
              </marquee>
                <div className="product_header">
                  <h3>{catItem}<i className="fas fa-medal"></i></h3>
                  <div className="product_header_item">
                        <Field 
                            as='select'
                            id='categories' 
                            name='categories'
                            className='field_form'>
                              <option>Categories</option>
                              <option value='Material'>Materials</option>
                              <option value='Trousers'>Trousers</option>
                              <option value='Polo'>Polo</option>
                              <option value='Shirts'>Shirts</option>
                              <option value='Bedsheets'>Bedsheets</option>
                              <option value='Designers'>Designers</option>
                              <option value='gown'>Gowns</option>
                              <option value='foot'>Footies</option>
                          </Field>
                          <button type='submit'>Apply</button>
                      </div>                  
                </div> 
              <div className="product-layout" >

              {mainItem.map((product, index) => <Product product={product} key={product.id}/>
                        )}

                      
                    </div>
                      {/* <!-- PAGINATION --> */}
                        <ul className="pagination">
                        <Link to='/product'><span>1</span></Link>
                        <Link to='/product'><span>2</span></Link>
                        <Link to='/product'><span className="icon">››</span></Link>
                        <Link to='/product'><span className="last">Last »</span></Link>
                        </ul>
            </section>
          </Form>
          
        </Formik>       

   )
}

export default Categories
