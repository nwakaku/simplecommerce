import React from 'react';
import promo1 from '../../image/_.jpeg'
import promo2 from '../../image/Ankara.jpg'
import promo3 from '../../image/lace2.jpg'
import promo4 from '../../image/Cotton.jpeg'
import promo5 from '../../image/jeans.jpg'
import promo6 from '../../image/shirt.jpg'


import './latest.css'

const Designs = () => {
    return (
        <section class="section promotion">
    
        <div class="promotion-layout container">
          <div class="promotion-itemy">
            <img src={promo1} alt="" />
            <div class="promotion-content">
              <h3 className="promain">MATERIALHUB</h3>
            </div>
            <div className="promotion-list">
            <ul>
              <li><strong>MATERIALS FOR MEN</strong></li>
              <li><i class="fas fa-gift"></i>3 Star Cashmere</li>
              <li><i class="fas fa-gift"></i>5 Star Cashmere</li>
              <li><i class="fas fa-gift"></i>7 Star Cashmere</li>
              <li><i class="fas fa-gift"></i>Jeans Material</li>
              <li><i class="fas fa-gift"></i>Shirt Materials</li>
              <li><i class="fas fa-gift"></i>Atiku Verieties</li>
              <li><i class="fas fa-gift"></i>Ankara</li>
              <li><i class="fas fa-gift"></i>Batiks</li>
              <li><i class="fas fa-gift"></i>Brocades</li>
              </ul>
              <ul>
              <li><strong>MATERIALS FOR WOMEN</strong></li>
              <li><i class="fas fa-gift"></i>Ankara</li>
              <li><i class="fas fa-gift"></i>Ase oke</li>
              <li><i class="fas fa-gift"></i>Atiku</li>
              <li><i class="fas fa-gift"></i>Adire</li>
              <li><i class="fas fa-gift"></i>Brocades</li>
              <li><i class="fas fa-gift"></i>lace</li>
              <li><i class="fas fa-gift"></i>Silk</li>
              <li><i class="fas fa-gift"></i>Tulle</li>
              <li><i class="fas fa-gift"></i>Velvet</li>
              </ul>
              <ul>
              <li><strong>WINDOW_BLINDS</strong></li>
              <li><i class="fas fa-gift"></i>Venetian Blinds</li>
              <li><i class="fas fa-gift"></i>Mini Blinds</li>
              <li><i class="fas fa-gift"></i>Vertical Blinds</li>
              <li><i class="fas fa-gift"></i>Panel Track</li>
              <li><i class="fas fa-gift"></i>Smart Blinds</li>
              <li><i class="fas fa-gift"></i>Designers Materia;s</li>
              <li><i class="fas fa-gift"></i>Ankara</li>
              <li><i class="fas fa-gift"></i>Ankara</li>
              <li><i class="fas fa-gift"></i>Ankara</li>
              </ul>
            
              <ul>
              <li><strong>BEDSHEETS</strong></li>
              <li><i class="fas fa-gift"></i>Gucci designs</li>
              <li><i class="fas fa-gift"></i>BurBerry designs</li>
              <li><i class="fas fa-gift"></i>Givenchy designs</li>
              <li><i class="fas fa-gift"></i>D&G designs</li>
              <li><i class="fas fa-gift"></i>Valentino designs</li>
              <li><i class="fas fa-gift"></i>Hogans designs</li>
              <li><i class="fas fa-gift"></i>TODS designs</li>
              <li><i class="fas fa-gift"></i>Porche designs</li>
              <li><i class="fas fa-gift"></i>Ferrerie designs</li>
              </ul>
              <ul>
              <li><strong>OTHERS</strong></li>
              <li><i class="fas fa-gift"></i>Classy Everlasting</li>
              <li><i class="fas fa-gift"></i>Aunty k</li>
              <li><i class="fas fa-gift"></i>Hollandais</li>
              <li><i class="fas fa-gift"></i>Assurance</li>
              <li><i class="fas fa-gift"></i>Exotic</li>
              <li><i class="fas fa-gift"></i>Antique</li>
              <li><i class="fas fa-gift"></i>SuperWax</li>
              <li><i class="fas fa-gift"></i>Phoenix Hitarget</li>
              <li><i class="fas fa-gift"></i>Fantastic</li>
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

export default Designs
