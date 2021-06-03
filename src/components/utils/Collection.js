import React from 'react';
import promo1 from '../../image/promo7.jpg';
import promo2 from '../../image/promo8.jpg';
import './collection.css';

const Collection = () => {
    return (
        // <!-- ADVERT -->
        <section class="section advert">
          <div class="advert-layout container">
            <div class="item ">
              <img src={promo1} alt=""/>
              <div class="content left">
                <span>Exclusive Sales</span>
                <h3>Spring Collections</h3>
                <a href="">View Collection</a>
              </div>
            </div>
            <div class="item">
              <img src={promo2} alt=""/>
              <div class="content  right">
                <span>New Trending</span>
                <h3>Designer Bags</h3>
                <a href="">Shop Now </a>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Collection
