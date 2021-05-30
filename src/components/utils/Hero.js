import React, { useImperativeHandle, useEffect, useRef, forwardRef } from 'react'
import banner_01 from '../../images/banner_01.png';
import banner_02 from '../../images/banner_02.png';
// import Glide from '@glidejs/glide'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Hero = () => {

    const getConfigurableProps = () => ({
        showArrows: boolean('showArrows', true, tooglesGroupId),
        showStatus: boolean('showStatus', true, tooglesGroupId),
        showIndicators: boolean('showIndicators', true, tooglesGroupId),
        infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
        showThumbs: boolean('showThumbs', true, tooglesGroupId),
        useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
        autoPlay: boolean('autoPlay', true, tooglesGroupId),
        stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
        swipeable: boolean('swipeable', true, tooglesGroupId),
        dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
        emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
        autoFocus: boolean('autoFocus', false, tooglesGroupId),
        thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
        selectedItem: number('selectedItem', 0, {}, valuesGroupId),
        interval: number('interval', 2000, {}, valuesGroupId),
        transitionTime: number('transitionTime', 500, {}, valuesGroupId),
        swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
    });
    
    return (
        <div className='hero'>
            
                            <Carousel
                             {...getConfigurableProps()} animationHandler='fade' swipeable={false}>
                                <div className='hero__center'>
                                    <div className='hero__left'>
                                        <span>New Inspiration 2020</span>
                                        <span>PHONE MADE FOR YOU!</span>
                                        <p>Trending from mobile and headphone style collection</p>
                                        <a><button>SHOP HERE</button></a>
                                    </div>
                                    <div className='hero__right'>
                                        <div className='hero__img-container'>
                                            <img 
                                                src={banner_01} 
                                                alt='' 
                                                className='banner_01' 
                                            />
                                        </div>
                                    </div>
                                </div>
                           
                            <div className='hero__center'>
                                <div className='hero__left'>
                                    <span>New Inspiration 2020</span>
                                    <span>PHONE MADE FOR YOU!</span>
                                    <p>Trending from mobile and headphone style collection</p>
                                    <a><button>SHOP HERE</button></a>
                                </div>
                                <div className='hero__right'>
                                    <div className='hero__img-container'>
                                        <img 
                                            src={banner_02} 
                                            alt='' 
                                            className='banner_02' 
                                        />
                                    </div>
                                </div>
                            </div>
                            </Carousel>
                        </div>
    )
}

export default Hero
