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
        },
        {
            "id":2,
            "img":polo,
            "text":"Polos",
        },
        {
            "id":3,
            "img":trousers,
            "text":"Trousers",
        },
        {
            "id":4,
            "img":shirts,
            "text":"Shirts",
        },
        {
            "id":5,
            "img":gown,
            "text":"Gown",
        },
        {
            "id":6,
            "img":tailor,
            "text":"Tailor Services",
        }
    ]
}

const Categories = () => {
  // for category

const [activeLink, SetActiveLink] = useState(null)

const { file } = category;
    const {filterItems, mainItem} = useContext(UserContext)
console.log(file)
      return (
        <>
         <section >
            <div className="tab__list container">
              <div className="category_menu ">
                  {file.map((data) => {
                      const {id,img,text} = data;
                      return (
                         <div key={id} 
                         onClick={() => SetActiveLink(id)}
                       className={id === activeLink ? "active_Item" : ""}>
                      <img src={img} alt="" />
                      <p>{text}{id === activeLink && <i class="fas fa-medal"></i>}</p>
                    </div>
                      )               
                  })}

                
              </div>
            </div>
          </section>

        <section class="section products container">
            <div className="product_header">
              <h3>Materials</h3>
            </div> 
           <div class="product-layout" >

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
        </>
       

   )
}

export default Categories
