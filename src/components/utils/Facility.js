import React from 'react'
import './Facility.css'
import {AiFillCreditCard} from 'react-icons/ai';
import {BiHeadphone} from 'react-icons/bi';
import {ImAirplane} from 'react-icons/im';
import {GiReceiveMoney} from 'react-icons/gi';


const Facility = () => {
    return (
        //  Facility Section 
        <section class="facility__section section" id="facility">
          <div class="container">
            <div class="facility__contianer" data-aos="fade-up" data-aos-duration="1200">
              <div class="facility__box">
                <div class="facility-img__container">
                  <i><ImAirplane/></i>
                </div>
                <p>FREE SHIPPING WORLD WIDE</p>
              </div>
    
              <div class="facility__box">
                <div class="facility-img__container">
                  <i><GiReceiveMoney/></i>
                </div>
                <p>100% MONEY BACK GUARANTEE</p>
              </div>
    
              <div class="facility__box">
                <div class="facility-img__container">
                  <i><AiFillCreditCard/></i>
                </div>
                <p>MANY PAYMENT GATWAYS</p>
              </div>
    
              <div class="facility__box">
                <div class="facility-img__container">
                  <i><BiHeadphone/></i>
                </div>
                <p>24/7 ONLINE SUPPORT</p>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Facility
