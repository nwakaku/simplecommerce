import React from 'react';
import promo1 from '../../image/promo3.jpg';
import promo2 from '../../image/sen.jpg';
import './collection.css';

const Collection = () => {
    return (
        // <!-- ADVERT -->
        <section className="section advert">
          <div className="advert-layout container">
            <div className="item ">
              <img src={promo1} alt=""/>
              <div className="content left">
                <span>Exclusive Sales</span>
                <h3>Spring Collections</h3>
                <a href="">View Collection</a>
              </div>
            </div>
            <div className="item">
              <img src={promo2} alt=""/>
              <div className="content  right">
                <span>New Trending</span>
                <h3>Designer Bags</h3>
                <a href="">Shop Now </a>
              </div>
            </div>
            <div className="item">
              <img src={promo2} alt=""/>
              <div className="content  right">
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
