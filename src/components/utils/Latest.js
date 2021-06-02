import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import iphone6 from '../../images/products/iPhone/iphone6.jpeg';

const Latest = () => {
    return (
        <section className="section latest__products" id="latest">
             <div className="title__container">
                <div className="section__title active" data-id="Latest Products">
                    <span className="dot"></span>
                    <h1 className="primary__title">Latest Products</h1>
                </div>
            </div>

            <div className='container'>
                <Carousel>
                    
                </Carousel>
            </div>
        </section>
    )
}

export default Latest
