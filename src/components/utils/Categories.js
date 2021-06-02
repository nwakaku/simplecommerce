import React,{useContext, useState} from 'react'
import { UserContext } from '../../UserContext'
import Product from './Product';


const Categories = () => {
    const products = useContext(UserContext)
    const [mainItem, setMainItem] = useState(products.products)

    const filterItems = (category) => {
        if (category === 'all') {
            setMainItem(products.products);
            return;
        }
        const newItems = products.products.filter((product) => product.category 
        === category)
        setMainItem(newItems)
    }
   console.log(products)

    return (
        <section className="category__section section" id="category">
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
            <div className="category__container" data-aos="fade-up" data-aos-duration="1200">
            <div className="category__center">
              {mainItem.map(
                product => <Product product={product}/>
              )}
            </div>
        </div>
    </section>
   )
}

export default Categories