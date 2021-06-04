import React from 'react';
import promo1 from '../../image/promo1.jpg'
import promo2 from '../../image/promo2.jpg'
import promo3 from '../../image/promo3.jpg'
import promo4 from '../../image/promo4.jpg'
import promo5 from '../../image/promo5.jpg'
import promo6 from '../../image/promo6.jpg'


import './latest.css'

const Latest = () => {
    return (
        <section class="section promotion">
        <div className="title__container">
                <div className="section__title active" data-id="Latest Products">
                    <span className="dot"></span>
                    <h1 className="primary__title">Latest Products</h1>
                </div>
            </div>
    
        <div class="promotion-layout container">
          <div class="promotion-item">
            <img src={promo1} alt="" />
            <div class="promotion-content">
              <h3>FOR MEN</h3>
              <a href="">SHOP NOW</a>
            </div>
          </div>
    
          <div class="promotion-item">
            <img src={promo2} alt="" />
            <div class="promotion-content">
              <h3>CASUAL SHOES</h3>
              <a href="">SHOP NOW</a>
            </div>
          </div>
    
          <div class="promotion-item">
            <img src={promo3} alt="" />
            <div class="promotion-content">
              <h3>FOR WOMEN</h3>
              <a href="">SHOP NOW</a>
            </div>
          </div>
    
          <div class="promotion-item">
            <img src={promo4} alt="" />
            <div class="promotion-content">
              <h3>LEATHER BELTS</h3>
              <a href="">SHOP NOW</a>
            </div>
          </div>
    
          <div class="promotion-item">
            <img src={promo5} alt="" />
            <div class="promotion-content">
              <h3>DESIGNER BAGS</h3>
              <a href="">SHOP NOW</a>
            </div>
          </div>
    
          <div class="promotion-item">
            <img src={promo6} alt="" />
            <div class="promotion-content">
              <h3>WATCHES</h3>
              <a href="">SHOP NOW</a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Latest
