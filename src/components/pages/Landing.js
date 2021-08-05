import React from 'react'
import Footer from '../utils/Footer'
import ItemPop from '../utils/ItemPop';
import Popup from '../utils/Popup';
import Categories from '../utils/Categories';
import Collection from '../utils/Collection';
import Facility from '../utils/Facility';
import Latest from '../utils/Latest';
import News from '../utils/News';
import Newsletter from '../utils/Newsletter';
import Hero from '../utils/Hero';
import Multi from '../utils/Multi';
import Tailors from '../utils/Tailors';
import LastNav from '../utils/LastNav';


const Landing = () => {
    return (
        <div>
            <LastNav/>
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
