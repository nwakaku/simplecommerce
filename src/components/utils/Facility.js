import React from 'react'
import './Facility.css'
import {AiFillCreditCard} from 'react-icons/ai';
import {BiHeadphone} from 'react-icons/bi';
import {ImAirplane} from 'react-icons/im';
import {GiReceiveMoney} from 'react-icons/gi';
import { Link } from 'react-router-dom'


const Facility = () => {
    return (
        //  Facility Section 
        <section className="facility__section section" id="facility">
          <div className="container">
              <h1><span>Why shop</span>with us ?</h1>
            <div className="facility__contianer" >
              <div className="facility__box">
                <div className="facility-img__container">
                  <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-us-1_200x.png?v=1616644389" />
                </div>
                <p>FREE SHIPPING WORLD WIDE</p>
                <Link>learn more</Link>
              </div>
    
              <div className="facility__box">
                <div className="facility-img__container">
                  <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-us-4_200x.png?v=1616644419" />
                </div>
                <p>100% MONEY BACK GUARANTEE</p>
                <Link>learn more</Link>
              </div>
    
              <div className="facility__box">
                <div className="facility-img__container">
                  <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-us-3_200x.png?v=1616644409" />
                </div>
                <p>ANNUAL PAYMENT DISCOUNT</p>
                <Link>learn more</Link>
              </div>
    
              <div className="facility__box">
                <div className="facility-img__container">
                  <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-us-2_200x.png?v=1616644399" />
                </div>
                <p>WEEKLY FLASH SALE</p>
                <Link>learn more</Link>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Facility
