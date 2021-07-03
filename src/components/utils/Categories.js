import React,{useContext, useState} from 'react'
import { UserContext } from '../../UserContext'
import Product from './Product';
import trousers from '../../image/trousers.png'
import polo from '../../image/polo.png'
import shirts from '../../image/shirts.png'
import gown from '../../image/gown.png'
import tailor from '../../image/tailor.png'
import fab from '../../image/fab.png'

  const category = {
    file : [
        {
            "id":1,
            "img":fab,
            "text":"Materials",
            "to": "all"
        },
        {
            "id":2,
            "img":polo,
            "text":"Polos",
            "to": "Trending Products"
        },
        {
            "id":3,
            "img":trousers,
            "text":"Trousers",
            "to": "Special Products"
        },
        {
            "id":4,
            "img":shirts,
            "text":"Shirts",
            "to": "Featured Products"
        },
        {
            "id":5,
            "img":gown,
            "text":"Gown",
        },
        {
            "id":6,
            "img":tailor,
            "text":"Designers",
        }
    ]
}

const Categories = () => {
  // for category

const [activeLink, SetActiveLink] = useState(null);
const [catItem, setCatItem] = useState(null);

const { file } = category;
    const {filterItems, mainItem} = useContext(UserContext)
console.log(file)
      return (
        <>
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
            <div className="product_header">
              <h3>{catItem}<i className="fas fa-medal"></i></h3>
              <div className="product_header_item">
                    <label htmlFor="order-by">Categories</label>
                    <select name="order-by" id="sort-by">
                      <option value="ASC" selected="selected">Materials</option>
                      <option value="DESC">Polos</option>
                      <option value="DESC">shirts</option>
                      <option value="DESC">Trousers</option>
                      <option value="DESC">Designers</option>
                    </select>
                  </div>
            </div> 
           <div className="product-layout" >

          {mainItem.map((product, index) => <Product product={product} key={product.id}/>
                    )}

                  
                </div>
                  {/* <!-- PAGINATION --> */}
                    <ul className="pagination">
                      <span>1</span>
                      <span>2</span>
                      <span className="icon">››</span>
                      <span className="last">Last »</span>
                    </ul>
        </section>
        </>
       

   )
}

export default Categories
