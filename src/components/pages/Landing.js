import React from 'react'
import Footer from '../utils/Footer'
import ItemPop from '../utils/ItemPop';
import Main from '../utils/Main'
import Navbar from '../utils/Navbar';
import Popup from '../utils/Popup';

const Landing = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
            <Popup />
            <ItemPop/>
        </div>
    )
}

export default Landing
