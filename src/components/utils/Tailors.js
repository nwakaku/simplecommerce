import React from 'react'
import './tailors.css';
import girl from '../../image/woman.jpg';
import bg from '../../image/1303.jpg';
import man from '../../image/_.jpeg';
import bb from '../../image/back.webp';
import aa from '../../image/aa.jpg';
import ab from '../../image/ab.jpg';
import ac from '../../image/ac.jpg';
import background from '../../image/background1.webp';


const Tailors = () => {
    return (
            <div className='container section'>
                <h1 className='dh'>Designers Hub</h1>
                <section className='designer_hub'>
                    <div className='fonter'>
                        <img src={bb} alt='' />
                        <div className='message'>
                            <p>Over</p>
                            <p>1million</p>
                            <p>Fashion</p>
                            <p>Designers</p>
                            <p>Community</p>
                        </div>
                    </div>
                     <section style={{display:"flex",justifyContent:"center", flexWrap:"wrap"}}>
                    <div className='card'>
                        <div className='bg_image'>
                            <img src={bg} alt=''/>
                        </div>
                        <div className='image'>
                            <img src={man} alt=''/>
                        </div>
                        <div className='info'>
                            <h3>Material Hubs</h3>
                            <small>"Fabric sales and services"</small>
                        </div>
                        <div className='icons'>
                        <i className="fab fa-facebook-square" style={{color:"blue"}}></i>
                        <i className="fab fa-whatsapp-square" style={{color:"green"}}></i>
                        <i className="fab fa-instagram-square" style={{color:"#ff4545"}}></i>
                        <i className="fab fa-twitter-square" style={{color:"lightblue"}}></i>
                        </div>
                        <span>- Contact Us -</span>
                    </div>
                    <div className='card'>
                        <div className='bg_image'>
                            <img src={girl} alt=''/>
                        </div>
                        <div className='image'>
                            <img src={aa} alt=''/>
                        </div>
                        <div className='info'>
                            <h3>Designers Name</h3>
                            <p>specification Zone laies hers</p>
                        </div>
                        <div className='icons'>
                        <i className="fab fa-facebook-square" style={{color:"blue"}}></i>
                        <i className="fab fa-whatsapp-square" style={{color:"green"}}></i>
                        <i className="fab fa-instagram-square" style={{color:"#ff4545"}}></i>
                        <i className="fab fa-twitter-square" style={{color:"lightblue"}}></i>
                        </div>
                        <span>- Contact Us -</span>
                    </div>
                    <div className='card'>
                        <div className='bg_image'>
                            <img src={background} alt=''/>
                        </div>
                        <div className='image'>
                            <img src={ab} alt=''/>
                        </div>
                        <div className='info'>
                            <h3>Designers Name</h3>
                            <p>specification Zone laies hers</p>
                        </div>
                        <div className='icons'>
                        <i className="fab fa-facebook-square" style={{color:"blue"}}></i>
                        <i className="fab fa-whatsapp-square" style={{color:"green"}}></i>
                        <i className="fab fa-instagram-square" style={{color:"#ff4545"}}></i>
                        <i className="fab fa-twitter-square" style={{color:"lightblue"}}></i>
                        </div>
                        <span>- Contact Us -</span>
                    </div>
                    <div className='card'>
                        <div className='bg_image'>
                            <img src={girl} alt=''/>
                        </div>
                        <div className='image'>
                            <img src={ac} alt=''/>
                        </div>
                        <div className='info'>
                            <h3>Designers Name</h3>
                            <p>specification Zone laies hers</p>
                        </div>
                        <div className='icons'>
                        <i className="fab fa-facebook-square" style={{color:"blue"}}></i>
                        <i className="fab fa-whatsapp-square" style={{color:"green"}}></i>
                        <i className="fab fa-instagram-square" style={{color:"#ff4545"}}></i>
                        <i className="fab fa-twitter-square" style={{color:"lightblue"}}></i>
                        </div>
                        <span>- Contact Us -</span>
                    </div>
                </section>
                </section>
               
            </div>
    )
}

export default Tailors
