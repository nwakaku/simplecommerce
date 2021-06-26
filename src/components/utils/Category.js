import React, { useState } from 'react'

const Category = () => {
    const cat = {
        file : [
            {
                "id":1,
                "img":"fab",
                "text":"Materials",
            },
            {
                "id":2,
                "img":"polo",
                "text":"Polos",
            },
            {
                "id":3,
                "img":"trousers",
                "text":"Trousers",
            },
            {
                "id":4,
                "img":"shirts",
                "text":"Shirts",
            },
            {
                "id":5,
                "img":"gown",
                "text":"Gown",
            },
            {
                "id":6,
                "img":"tailor",
                "text":"Tailor",
            }
        ]
    }
    const [activeLink, SetActiveLink] = useState(null)
    
    const { file } = cat;
    return (
        <section >
            <div className="tab__list container">
              <div className="category_menu ">
                  {file.map(data => {
                <div key={data.id} 
                    className={data.id === activeLink ? "active_Item" : ""}>
                  <img src={data.img} alt="" />
                  <p>{data.text}{data.id === activeLink && "active!"}</p>
                </div>
                  })}

                
              </div>
            </div>
          </section>
    )
}

export default Category
