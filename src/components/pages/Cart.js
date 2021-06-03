import React from 'react';
import Footer from '../utils/Footer';
import Facility from '../utils/Facility';
import BasketItems from '../utils/BasketItems';
import SweetNav from '../utils/SweetNav';

const Cart = () => {
    return (
        <div>
            <SweetNav />
            <BasketItems />
            <Facility />
            <Footer />
        </div>
    )
}

export default Cart
