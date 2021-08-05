import React from 'react';
import Footer from '../utils/Footer';
import Facility from '../utils/Facility';
import BasketItems from '../utils/BasketItems';
import LastNav from '../utils/LastNav';

const Cart = () => {
    return (
        <div>
            <LastNav/>
            <BasketItems />
            <Facility />
            <Footer />
        </div>
    )
}

export default Cart
