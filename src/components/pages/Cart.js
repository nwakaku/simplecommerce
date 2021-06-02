import React from 'react';
import Footer from '../utils/Footer';
import Facility from '../utils/Facility';
import Navbar from '../utils/Navbar';
import BasketItems from '../utils/BasketItems';

const Cart = () => {
    return (
        <div>
            <Navbar/>
            <BasketItems />
            <Facility />
            <Footer />
        </div>
    )
}

export default Cart
