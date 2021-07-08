import React from 'react'
import Footer from '../utils/Footer'
import ItemPop from '../utils/ItemPop';
import Main from '../utils/Main'
import Navbar from '../utils/Navbar';
import Popup from '../utils/Popup';
import Categories from '../utils/Categories';
import Collection from '../utils/Collection';
import Facility from '../utils/Facility';
import Latest from '../utils/Latest';
import News from '../utils/News';
import Newsletter from '../utils/Newsletter';
import SweetNav from '../utils/SweetNav';
import Hero from '../utils/Hero';
import Multi from '../utils/Multi';
import Tailors from '../utils/Tailors';


const Landing = () => {
    return (
        <div>
            <SweetNav />
                <Latest />
                <Categories />
                <Hero />
                <Tailors />
                <Collection />
                <Multi />
                <Facility />
            {/* </div> */}
                <News />
                <Newsletter />
                <Footer />
            <Popup />
            <ItemPop/>
        </div>
    )
}

export default Landing
