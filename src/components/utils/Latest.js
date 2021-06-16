import React from 'react';
import promo1 from '../../image/_.jpeg'
import promo2 from '../../image/Ankara.jpg'
import promo3 from '../../image/lace2.jpg'
import promo4 from '../../image/Cotton.jpeg'
import promo5 from '../../image/jeans.jpg'
import promo6 from '../../image/shirt.jpg'


import './latest.css'

const Latest = () => {
    return (
        <section class="section promotion">
    
        <div class="promotion-layout container">
          <div class="promotion-itemy">
            <img src={promo1} alt="" />
            <div class="promotion-content">
              <h3>SENATOR MATERIALS</h3>
            </div>
            <div className="promotion-list">
              <ul>
              <li>Ankara</li>
                <li>Ankara</li>
                <li>Ankara</li>
                <li>Ankara</li>
                <li>Ankara</li>
                <li>Ankara</li>
                <li>Ankara</li>
                <li>Ankara</li>
                <li>Ankara</li>
              </ul>
              <ul>
              <li>Ankara</li>
                <li>Ankara</li>
                <li>Ankara</li>
                <li>Ankara</li>
                <li>Ankara</li>
                <li>Ankara</li>
                <li>Ankara</li>
                <li>Ankara</li>
                <li>Ankara</li>
              </ul>
            </div>
          </div>
    
          <div class="promotion-item">
            <img src={promo2} alt="" />
            <div class="promotion-content">
              <h3>ANKARA MATERIALS</h3>
            </div>
          </div>
    
          <div class="promotion-item">
            <img src={promo3} alt="" />
            <div class="promotion-content">
              <h3>FEMALE MATERIALS</h3>
            </div>
          </div>
    
          <div class="promotion-item">
            <img src={promo4} alt="" />
            <div class="promotion-content">
              <h3>BED SHEETS</h3>
            </div>
          </div>
    
          <div class="promotion-item">
            <img src={promo5} alt="" />
            <div class="promotion-content">
              <h3>JEANS MATERIALS</h3>
            </div>
          </div>
    
        </div>
      </section>
    )
}

export default Latest
