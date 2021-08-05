import React from 'react'
import Facility from '../utils/Facility'
import Footer from '../utils/Footer'
import ProductComponents from '../utils/ProductComponents'
import Multi from '../utils/Multi';
import ItemPop from '../utils/ItemPop';
import LastNav from '../utils/LastNav';


const ProductsArea = () => {
    return (
        <div>
            <LastNav />
            <ProductComponents />
            <Multi />
            <Facility />
            <Footer />
            <ItemPop />
        </div>
    )
}

export default ProductsArea
