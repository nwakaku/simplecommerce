import React from 'react'
import Facility from '../utils/Facility'
import Footer from '../utils/Footer'
import ProductComponents from '../utils/ProductComponents'
import SweetNav from '../utils/SweetNav';
import Multi from '../utils/Multi';


const ProductsArea = () => {
    return (
        <div>
            <SweetNav/>
            <ProductComponents />
            <Multi />
            <Facility />
            <Footer />
        </div>
    )
}

export default ProductsArea
