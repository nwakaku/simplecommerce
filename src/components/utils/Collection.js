import React from 'react';
import collection1 from '../../images/collection_01.png';
import collection2 from '../../images/collection_02.png';

const Collection = () => {
    return (
        <section className='section collection'>
            <div className='container'>
                <div className='collection__container'>
                    <div className='collection__box'>
                        <div className='img__container'>
                            <img src={collection2} className='collection_02' />
                        </div>
                        <div className='collection__content'>
                            <div className='collection__data'>
                                <span>NEW Colors Introduced</span>
                                <h1>HEADPHONES</h1>
                                <a href=''>SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className='collection__box'>
                        <div className='img__container'>
                            <img src={collection1} className='collection_02' />
                        </div>
                        <div className='collection__content'>
                            <div className='collection__data'>
                                <span>NEW Colors Introduced</span>
                                <h1>HEADPHONES</h1>
                                <a href=''>SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection
