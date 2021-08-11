import React from 'react';
import { Link } from 'react-router-dom'
import './collection.css';
//new pictures
import ali from '../../image/alibaba1.jpg';
import bli from '../../image/alibaba3.jpg';
import cli from '../../image/jumiafourth.jpg';
import dli from '../../image/jumialatest.png';
import eli from '../../image/jumiasecond.jpg';
import fli from '../../image/jumiathird.jpg';



const Collection = () => {
    return (
        // <!-- ADVERT -->
        <section className="section advert">
          <div className="advert-layout container">
            <div className="item ">
              <img src={ali} alt=""/>
              {/* <div className="content left">
                <span>Exclusive Sales</span>
                <h3>Spring Collections</h3>
                <Link>View Collection</Link>
              </div> */}
            </div>
            <div className="item">
              <img src={bli} alt=""/>
              {/* <div className="content  right">
                <span>Splash Sells</span>
                <h3>New Collection Roll Outs</h3>
                <Link>Shop Now </Link>
              </div> */}
            </div>
            <div className="item">
              <img src={cli} alt=""/>
              {/* <div className="content  right">
                <span>New Trending</span>
                <h3>Designer Bags</h3>
                <Link>Shop Now </Link>
              </div> */}
            </div>
            <div className="item ">
              <img src={dli} alt=""/>
              {/* <div className="content left">
                <span>Exclusive Sales</span>
                <h3>Spring Collections</h3>
                <Link>View Collection</Link>
              </div> */}
            </div>
            <div className="item">
              <img src={eli} alt=""/>
              {/* <div className="content  right">
                <span>Splash Sells</span>
                <h3>New Collection Roll Outs</h3>
                <Link>Shop Now </Link>
              </div> */}
            </div>
            <div className="item">
              <img src={fli} alt=""/>
              {/* <div className="content  right">
                <span>New Trending</span>
                <h3>Designer Bags</h3>
                <Link>Shop Now </Link>
              </div> */}
            </div>
          </div>
        </section>
    )
}

export default Collection
