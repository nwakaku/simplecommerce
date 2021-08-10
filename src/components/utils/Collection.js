import React from 'react';
import promo2 from '../../image/sen.jpg';
import catem2 from '../../image/car6.jpg'
import collect from '../../image/collection.jpg';
import { Link } from 'react-router-dom'
import './collection.css';

const Collection = () => {
    return (
        // <!-- ADVERT -->
        <section className="section advert">
          <div className="advert-layout container">
            <div className="item ">
              <img src={collect} alt=""/>
              <div className="content left">
                <span>Exclusive Sales</span>
                <h3>Spring Collections</h3>
                <Link>View Collection</Link>
              </div>
            </div>
            <div className="item">
              <img src={promo2} alt=""/>
              <div className="content  right">
                <span>Splash Sells</span>
                <h3>New Collection Roll Outs</h3>
                <Link>Shop Now </Link>
              </div>
            </div>
            <div className="item">
              <img src={promo2} alt=""/>
              <div className="content  right">
                <span>New Trending</span>
                <h3>Designer Bags</h3>
                <Link>Shop Now </Link>
              </div>
            </div>
            <div className="item ">
              <img src={catem2} alt=""/>
              <div className="content left">
                <span>Exclusive Sales</span>
                <h3>Spring Collections</h3>
                <Link>View Collection</Link>
              </div>
            </div>
            <div className="item">
              <img src={catem2} alt=""/>
              <div className="content  right">
                <span>Splash Sells</span>
                <h3>New Collection Roll Outs</h3>
                <Link>Shop Now </Link>
              </div>
            </div>
            <div className="item">
              <img src={collect} alt=""/>
              <div className="content  right">
                <span>New Trending</span>
                <h3>Designer Bags</h3>
                <Link>Shop Now </Link>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Collection
