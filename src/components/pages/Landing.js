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


const Landing = () => {
    return (
        <div>
            <SweetNav />
            {/* hero area */}
            {/* <div className='container'> */}
                <Latest />
                <Categories />
                <Hero />
                <Collection />
                <Multi />
                <Facility />
                <Newsletter />
            {/* </div> */}
                <News />
                <Footer />
            <Popup />
            <ItemPop/>
        </div>
    )
}

export default Landing
