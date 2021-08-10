import React,{useContext, useState} from 'react';
import promo1 from '../../image/_.jpeg'
import promo2 from '../../image/Ankara.jpg'
import promo3 from '../../image/lace2.jpg'
import promo4 from '../../image/Cotton.jpeg'
import promo5 from '../../image/jeans.jpg'
import catem from '../../image/car7.jpg'
import catem2 from '../../image/car6.jpg'
import catem3 from '../../image/car5.jpg'
import { Carousel } from 'react-responsive-carousel';
import { UserContext } from '../../UserContext';




import './latest.css'

const Latest = () => {
  const {filterItems } = useContext(UserContext)

    return (
        <section className="section promotion">
    
        <div className="promotion-layout container">
          <Carousel 
            animationHandler='fade' 
            showThumbs={false}
            swipeable={false}
            infiniteLoop={true}
            interval={3000}
            autoPlay={true}
            transitionTime={2000} >

            <div className="promotion-itemy">
            <img src={promo1} alt="" />
            <div className="promotion-content">
              <h3 className="promain">MATERIALHUB</h3>
            </div>
            <div className="promotion-list">
            <ul>
              <li><strong>MATERIALS</strong></li>
              <li>NATIVE</li>
              <li>LACE</li>
              <li>JEANS</li>
              <li>ETC</li>
            </ul>
            <ul>
              <li><strong>SHIRTS</strong></li>
              <li>MALE</li>
              <li>FEMALE</li>
              <li>BABIES</li>
              <li>ANIMALS</li>
              <li>Brocades</li>
            </ul>
            <ul>
              <li><strong>POLOS</strong></li>
              <li>Venetian Blinds</li>
              <li>Mini Blinds</li>
              <li>Vertical Blinds</li>
              <li>Panel Track</li>
            </ul>
            <ul>
              <li><strong>DOWNS</strong></li>
              <li>Gucci designs</li>
              <li>BurBerry designs</li>
              <li>Givenchy designs</li>
              <li>D&G designs</li>
              <li>Valentino designs</li>
              <li>Hogans designs</li>
            </ul>
            <ul>
              <li><strong>OTHERS</strong></li>
              <li>Classy Everlasting</li>
              <li>Aunty k</li>
              <li>Hollandais</li>
              <li>Assurance</li>
              <li>Exotic</li>
            </ul>              
          </div>
          </div>
          <div className="promotion-itemy">
            <img src={catem} alt="" />
            <div className="promotion-content">
              <h3 className="promain">MATERIALHUB</h3>
            </div>
            <div className="promotion-list">
            <ul>
              <li><strong>MATERIALS</strong></li>
              <li>NATIVE</li>
              <li>LACE</li>
              <li>JEANS</li>
              <li>ETC</li>
            </ul>
            <ul>
              <li><strong>SHIRTS</strong></li>
              <li>MALE</li>
              <li>FEMALE</li>
              <li>BABIES</li>
              <li>ANIMALS</li>
              <li>Brocades</li>
            </ul>
            <ul>
              <li><strong>POLOS</strong></li>
              <li>Venetian Blinds</li>
              <li>Mini Blinds</li>
              <li>Vertical Blinds</li>
              <li>Panel Track</li>
            </ul>
            <ul>
              <li><strong>DOWNS</strong></li>
              <li>Gucci designs</li>
              <li>BurBerry designs</li>
              <li>Givenchy designs</li>
              <li>D&G designs</li>
              <li>Valentino designs</li>
              <li>Hogans designs</li>
            </ul>
            <ul>
              <li><strong>OTHERS</strong></li>
              <li>Classy Everlasting</li>
              <li>Aunty k</li>
              <li>Hollandais</li>
              <li>Assurance</li>
              <li>Exotic</li>
            </ul>              
          </div>
          </div>
          <div className="promotion-itemy">
            <img src={catem2} alt="" />
            <div className="promotion-content">
              <h3 className="promain">MATERIALHUB</h3>
            </div>
            <div className="promotion-list">
            <ul>
              <li><strong>MATERIALS</strong></li>
              <li>NATIVE</li>
              <li>LACE</li>
              <li>JEANS</li>
              <li>ETC</li>
            </ul>
            <ul>
              <li><strong>SHIRTS</strong></li>
              <li>MALE</li>
              <li>FEMALE</li>
              <li>BABIES</li>
              <li>ANIMALS</li>
              <li>Brocades</li>
            </ul>
            <ul>
              <li><strong>POLOS</strong></li>
              <li>Venetian Blinds</li>
              <li>Mini Blinds</li>
              <li>Vertical Blinds</li>
              <li>Panel Track</li>
            </ul>
            <ul>
              <li><strong>DOWNS</strong></li>
              <li>Gucci designs</li>
              <li>BurBerry designs</li>
              <li>Givenchy designs</li>
              <li>D&G designs</li>
              <li>Valentino designs</li>
              <li>Hogans designs</li>
            </ul>
            <ul>
              <li><strong>OTHERS</strong></li>
              <li>Classy Everlasting</li>
              <li>Aunty k</li>
              <li>Hollandais</li>
              <li>Assurance</li>
              <li>Exotic</li>
            </ul>              
          </div>
          </div>
          <div className="promotion-itemy">
            <img src={catem3} alt="" />
            <div className="promotion-content">
              <h3 className="promain">MATERIALHUB</h3>
            </div>
            <div className="promotion-list">
            <ul>
              <li><strong>MATERIALS</strong></li>
              <li>NATIVE</li>
              <li>LACE</li>
              <li>JEANS</li>
              <li>ETC</li>
            </ul>
            <ul>
              <li><strong>SHIRTS</strong></li>
              <li>MALE</li>
              <li>FEMALE</li>
              <li>BABIES</li>
              <li>ANIMALS</li>
              <li>Brocades</li>
            </ul>
            <ul>
              <li><strong>POLOS</strong></li>
              <li>Venetian Blinds</li>
              <li>Mini Blinds</li>
              <li>Vertical Blinds</li>
              <li>Panel Track</li>
            </ul>
            <ul>
              <li><strong>DOWNS</strong></li>
              <li>Gucci designs</li>
              <li>BurBerry designs</li>
              <li>Givenchy designs</li>
              <li>D&G designs</li>
              <li>Valentino designs</li>
              <li>Hogans designs</li>
            </ul>
            <ul>
              <li><strong>OTHERS</strong></li>
              <li>Classy Everlasting</li>
              <li>Aunty k</li>
              <li>Hollandais</li>
              <li>Assurance</li>
              <li>Exotic</li>
            </ul>              
          </div>
          </div>
          <div className="promotion-itemy">
            <img src={promo2} alt="" />
            <div className="promotion-content">
              <h3 className="promain">MATERIALHUB</h3>
            </div>
            <div className="promotion-list">
            <ul>
              <li><strong>MATERIALS FOR MEN</strong></li>
              <li><i className="fas fa-gift"></i>3 Star Cashmere</li>
              <li><i className="fas fa-gift"></i>5 Star Cashmere</li>
              <li><i className="fas fa-gift"></i>7 Star Cashmere</li>
              <li><i className="fas fa-gift"></i>Jeans Material</li>
              <li><i className="fas fa-gift"></i>Shirt Materials</li>
              <li><i className="fas fa-gift"></i>Atiku Verieties</li>
              <li><i className="fas fa-gift"></i>Ankara</li>
              <li><i className="fas fa-gift"></i>Batiks</li>
              <li><i className="fas fa-gift"></i>Brocades</li>
              </ul>
              <ul>
              <li><strong>MATERIALS FOR WOMEN</strong></li>
              <li><i className="fas fa-gift"></i>Ankara</li>
              <li><i className="fas fa-gift"></i>Ase oke</li>
              <li><i className="fas fa-gift"></i>Atiku</li>
              <li><i className="fas fa-gift"></i>Adire</li>
              <li><i className="fas fa-gift"></i>Brocades</li>
              <li><i className="fas fa-gift"></i>lace</li>
              <li><i className="fas fa-gift"></i>Silk</li>
              <li><i className="fas fa-gift"></i>Tulle</li>
              <li><i className="fas fa-gift"></i>Velvet</li>
              </ul>
              <ul>
              <li><strong>WINDOW_BLINDS</strong></li>
              <li><i className="fas fa-gift"></i>Venetian Blinds</li>
              <li><i className="fas fa-gift"></i>Mini Blinds</li>
              <li><i className="fas fa-gift"></i>Vertical Blinds</li>
              <li><i className="fas fa-gift"></i>Panel Track</li>
              <li><i className="fas fa-gift"></i>Smart Blinds</li>
              <li><i className="fas fa-gift"></i>Designers Materia;s</li>
              <li><i className="fas fa-gift"></i>Ankara</li>
              <li><i className="fas fa-gift"></i>Ankara</li>
              <li><i className="fas fa-gift"></i>Ankara</li>
              </ul>
            
              <ul>
              <li><strong>BEDSHEETS</strong></li>
              <li><i className="fas fa-gift"></i>Gucci designs</li>
              <li><i className="fas fa-gift"></i>BurBerry designs</li>
              <li><i className="fas fa-gift"></i>Givenchy designs</li>
              <li><i className="fas fa-gift"></i>D&G designs</li>
              <li><i className="fas fa-gift"></i>Valentino designs</li>
              <li><i className="fas fa-gift"></i>Hogans designs</li>
              <li><i className="fas fa-gift"></i>TODS designs</li>
              <li><i className="fas fa-gift"></i>Porche designs</li>
              <li><i className="fas fa-gift"></i>Ferrerie designs</li>
              </ul>
              <ul>
              <li><strong>OTHERS</strong></li>
              <li><i className="fas fa-gift"></i>Classy Everlasting</li>
              <li><i className="fas fa-gift"></i>Aunty k</li>
              <li><i className="fas fa-gift"></i>Hollandais</li>
              <li><i className="fas fa-gift"></i>Assurance</li>
              <li><i className="fas fa-gift"></i>Exotic</li>
              <li><i className="fas fa-gift"></i>Antique</li>
              <li><i className="fas fa-gift"></i>SuperWax</li>
              <li><i className="fas fa-gift"></i>Phoenix Hitarget</li>
              <li><i className="fas fa-gift"></i>Fantastic</li>
              </ul>
              
              
            </div>
          </div>
          <div className="promotion-itemy">
            <img src={promo3} alt="" />
            <div className="promotion-content">
              <h3 className="promain">MATERIALHUB</h3>
            </div>
            <div className="promotion-list">
            <ul>
              <li><strong>MATERIALS FOR MEN</strong></li>
              <li><i className="fas fa-gift"></i>3 Star Cashmere</li>
              <li><i className="fas fa-gift"></i>5 Star Cashmere</li>
              <li><i className="fas fa-gift"></i>7 Star Cashmere</li>
              <li><i className="fas fa-gift"></i>Jeans Material</li>
              <li><i className="fas fa-gift"></i>Shirt Materials</li>
              <li><i className="fas fa-gift"></i>Atiku Verieties</li>
              <li><i className="fas fa-gift"></i>Ankara</li>
              <li><i className="fas fa-gift"></i>Batiks</li>
              <li><i className="fas fa-gift"></i>Brocades</li>
              </ul>
              <ul>
              <li><strong>MATERIALS FOR WOMEN</strong></li>
              <li><i className="fas fa-gift"></i>Ankara</li>
              <li><i className="fas fa-gift"></i>Ase oke</li>
              <li><i className="fas fa-gift"></i>Atiku</li>
              <li><i className="fas fa-gift"></i>Adire</li>
              <li><i className="fas fa-gift"></i>Brocades</li>
              <li><i className="fas fa-gift"></i>lace</li>
              <li><i className="fas fa-gift"></i>Silk</li>
              <li><i className="fas fa-gift"></i>Tulle</li>
              <li><i className="fas fa-gift"></i>Velvet</li>
              </ul>           
              <ul>
              <li><strong>BEDSHEETS</strong></li>
              <li><i className="fas fa-gift"></i>Gucci designs</li>
              <li><i className="fas fa-gift"></i>BurBerry designs</li>
              <li><i className="fas fa-gift"></i>Givenchy designs</li>
              <li><i className="fas fa-gift"></i>D&G designs</li>
              <li><i className="fas fa-gift"></i>Valentino designs</li>
              <li><i className="fas fa-gift"></i>Hogans designs</li>
              <li><i className="fas fa-gift"></i>TODS designs</li>
              <li><i className="fas fa-gift"></i>Porche designs</li>
              <li><i className="fas fa-gift"></i>Ferrerie designs</li>
              </ul>
              <ul>
              <li><strong>OTHERS</strong></li>
              <li><i className="fas fa-gift"></i>Classy Everlasting</li>
              <li><i className="fas fa-gift"></i>Aunty k</li>
              <li><i className="fas fa-gift"></i>Hollandais</li>
              <li><i className="fas fa-gift"></i>Assurance</li>
              <li><i className="fas fa-gift"></i>Exotic</li>
              <li><i className="fas fa-gift"></i>Antique</li>
              <li><i className="fas fa-gift"></i>SuperWax</li>
              <li><i className="fas fa-gift"></i>Phoenix Hitarget</li>
              <li><i className="fas fa-gift"></i>Fantastic</li>
              </ul>
              
              
            </div>
          </div>
          
          </Carousel>
          
          <div className="layout-2">
            <div className="promotion-item" onClick={() => filterItems("Trousers")}>
              <img src={promo2} alt="" />
              <div className="promotion-content">
                <h3>FABRIC /MATERIALS</h3>
              </div>
            </div>
      
            <div className="promotion-item" onClick={() => filterItems("gown")}>
              <img src={promo3} alt="" />
              <div className="promotion-content">
                <h3>CLOTHS/ CUSTOMIZED</h3>
              </div>
            </div>
      
            <div className="promotion-item" onClick={() => filterItems("Polo")}>
              <img src={promo4} alt="" />
              <div className="promotion-content">
                <h3>BED SHEETS</h3>
              </div>
            </div>
      
            <div className="promotion-item" onClick={() => filterItems("Shirts")}>
              <img src={promo5} alt="" />
              <div className="promotion-content">
                <h3>FOOTIES</h3>
              </div>
            </div>
          </div>
          
    
        </div>
      </section>
    )
}

export default Latest
