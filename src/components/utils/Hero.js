import React, { useImperativeHandle, useEffect, useRef, forwardRef } from 'react'
import banner_01 from '../../image/bed.jpg';
import banner_02 from '../../image/girl.jpg';
import banner_03 from '../../image/sen.jpg';
import banner_04 from '../../image/brand4.png';
import banner_05 from '../../image/brand5.png';
import banner_06 from '../../image/brand6.png';
import banner_07 from '../../image/brand7.png';
// import Glide from '@glidejs/glide'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {BsCaretLeftFill} from 'react-icons/bs'
import {BsCaretRightFill} from 'react-icons/bs'


export const Hero = () => {
    const arrowStyles: CSSProperties = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
    };

    const indicatorStyles: CSSProperties = {
        background: '#fff',
        width: 8,
        height: 8,
        display: 'inline-block',
        margin: '0 8px',
    };
    
    return (
            
            <Carousel
            statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button 
                        type="button" 
                        onClick={onClickHandler} 
                        title={label}
                        style={{ ...arrowStyles, left: 15,
                            opacity: 1,
                            borderRadius: '50%',
                            border: 'none',
                            transition: 'all 0.5s ease-in-out 0.2s' }}>
                        <i><BsCaretLeftFill/></i>
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button 
                        className='glide__arrow_right'
                        type="button" onClick={onClickHandler}
                        title={label}
                        style={{ ...arrowStyles, right: 15,border: 'none',
                                borderRadius: '50%' }}>
                        <i><BsCaretRightFill/></i>
                    </button>
                )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            style={{ ...indicatorStyles, background: '#000' }}
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                    );
                }
                return (
                    <li
                        style={indicatorStyles}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}

                    />
                );
            }}

                animationHandler='fade' 
                swipeable={false}
                infiniteLoop={true}
                interval={1000}
                autoPlay={true}
                transitionTime={500}>
            <div className='hero'>
                <div class="hero__center">
                <div class="hero__left">
                  <span class="">New Inspiration 2021</span>
                  <h1 class="" style={{color: '#ff4545'}}>Designers Made For You</h1>
                  <p>Trending from fashion to designers style collection</p>
                  <a href="#"><button class="hero__btn">SHOP NOW</button></a>
                </div>
                <div class="hero__right">
                  <div class="hero__img-container">
                    <img class="banner_01" src={banner_01} alt="banner2" />
                  </div>
                </div>
              </div>
            </div>
            <div className='hero'>
              <div class="hero__center">
                <div class="hero__left">
                  <span class="">New Inspiration 2021</span>
                  <h1 class="">Designers Made For You</h1>
                  <p>Trending from fashion to designers style collection</p>
                  <a href="#"><button class="hero__btn">SHOP NOW</button></a>
                </div>
                <div class="hero__right">
                  <img class="banner_02" src={banner_02} alt="banner2" />
                </div>
              </div>
            </div>
            <div className='hero'>
              <div class="hero__center">
                <div class="hero__left">
                  <span class="">New Inspiration 2021</span>
                  <h1 class="">Designers Made For You</h1>
                  <p>Trending from fashion to designers style collection</p>
                  <a href="#"><button class="hero__btn">SHOP NOW</button></a>
                </div>
                <div class="hero__right">
                  <img class="banner_02" src={banner_03} alt="banner2" />
                </div>
              </div>
            </div>
            <div className='hero'>
              <div class="hero__center">
                <div class="hero__left">
                  <span class="">New Inspiration 2021</span>
                  <h1 class="">Designers Made For You</h1>
                  <p>Trending from fashion to designers style collection</p>
                  <a href="#"><button class="hero__btn">SHOP NOW</button></a>
                </div>
                <div class="hero__right">
                  <img class="banner_02" src={banner_04} alt="banner2" />
                </div>
              </div>
            </div>
            <div className='hero'>
              <div class="hero__center">
                <div class="hero__left">
                  <span class="">New Inspiration 2021</span>
                  <h1 class="">Designers Made For You</h1>
                  <p>Trending from fashion to designers style collection</p>
                  <a href="#"><button class="hero__btn">SHOP NOW</button></a>
                </div>
                <div class="hero__right">
                  <img class="banner_02" src={banner_05} alt="banner2" />
                </div>
              </div>
            </div>
            <div className='hero'>
              <div class="hero__center">
                <div class="hero__left">
                  <span class="">New Inspiration 2021</span>
                  <h1 class="">Designers Made For You</h1>
                  <p>Trending from fashion to designers style collection</p>
                  <a href="#"><button class="hero__btn">SHOP NOW</button></a>
                </div>
                <div class="hero__right">
                  <img class="banner_02" src={banner_06} alt="banner2" />
                </div>
              </div>
            </div>
            <div className='hero'>
              <div class="hero__center">
                <div class="hero__left">
                  <span class="">New Inspiration 2021</span>
                  <h1 class="">Designers Made For You</h1>
                  <p>Trending from fashion to designers style collection</p>
                  <a href="#"><button class="hero__btn">SHOP NOW</button></a>
                </div>
                <div class="hero__right">
                  <img class="banner_02" src={banner_07} alt="banner2" />
                </div>
              </div>
            </div>
            </Carousel>
    )
}

export default Hero
