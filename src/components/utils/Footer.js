import React from 'react'
import './footer.css'
import payment from '../../image/payment.png'

const Footer = () => {
    return (
      // <!-- Footer -->
      <footer id="footer" className="section footer">
        <div className="container">
          <div className="footer-container">
            <div className="footer-center">
              <h3>LET US HELP YOU</h3>
                <a href="#">Help Center</a>
                <a href="#">How to shop on MH?</a>
                <a href="#">Delivery options and timelines</a>
                <a href="#">How to return a product on MH</a>
                <a href="#">Corporate and bulk purchases</a>
                <a href="#">Report a Product</a>
            </div>
            <div className="footer-center">
              <h3>ABOUT MATERIALHUB</h3>
                <a href="#">About Us</a>
                <a href="#">MaterialHub Cares</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>
                <a href="#">Site Map</a>
            </div>
            <div className="footer-center">
              <h3>MY ACCOUNT</h3>
              <a href="#">My Account</a>
              <a href="#">Order History</a>
              <a href="#">Wish List</a>
              <a href="#">Newsletter</a>
              <a href="#">Returns</a>
            </div>
            <div className="footer-center">
              <h3>CONTACT US</h3>
              <div>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                #24 Wetheral-Junction,Owerri Imo State,Nigeria
              </div>
              <div>
                <span>
                  <i className="far fa-envelope"></i>
                </span>
                MaterialHub@gmail.com
              </div>
              <div>
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                +234-708-3419-662
              </div>
              <div className="payment-methods">
                <img src={payment} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
