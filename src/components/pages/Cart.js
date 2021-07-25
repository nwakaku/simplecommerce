import React from 'react';
import Footer from '../utils/Footer';
import Facility from '../utils/Facility';
import BasketItems from '../utils/BasketItems';
// import SweetNav from '../utils/SweetNav';
import LastNav from '../utils/LastNav';

const Cart = () => {
    return (
        <div>
            {/* <SweetNav /> */}
            <LastNav/>
            <BasketItems />
            <Facility />
            <Footer />
        </div>
    )
}

export default Cart
