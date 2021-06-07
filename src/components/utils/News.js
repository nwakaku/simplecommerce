import React,{} from 'react'
import { Carousel } from 'react-responsive-carousel'
import new1 from '../../images/news1.jpg';
import new2 from '../../images/news2.jpg';
import new3 from '../../images/news3.jpg';
import new4 from '../../images/news4.jpg';
import new5 from '../../images/news5.jpg';

const News = () => {
    return (
        // <!--New Section  -->
        <section className="section news" id="news">
          <div className="container">
            <div className="title__container">
              <div className="section__titles">
                <div className="section__title active">
                  <span className="dot"></span>
                  <h1 className="primary__title">Customer Testimonies</h1>
                </div>
              </div>
            </div>
            <div className="news__container">
                <Carousel 
                    autoPlay={true}>
                    <div className="new__card">
                        <div className="card__header">
                          <img src={new1} alt=""/>
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                            provident rem sed minus natus unde vel modi!</p>
                          <a href="#"><button>Read More</button></a>
                        </div>
                      </div>
                      <div className="new__card">
                        <div className="card__header">
                          <img src={new2} alt=""/>
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                            provident rem sed minus natus unde vel modi!</p>
                          <a href="#"><button>Read More</button></a>
                        </div>
                      </div>
                      <div className="new__card">
                        <div className="card__header">
                          <img src={new3} alt=""/>
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                            provident rem sed minus natus unde vel modi!</p>
                          <a href="#"><button>Read More</button></a>
                        </div>
                      </div>
                      <div className="new__card">
                        <div className="card__header">
                          <img src={new4} alt=""/>
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                            provident rem sed minus natus unde vel modi!</p>
                          <a href="#"><button>Read More</button></a>
                        </div>
                      </div>
                      <div className="new__card">
                        <div className="card__header">
                          <img src={new5} alt=""/>
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                            provident rem sed minus natus unde vel modi!</p>
                          <a href="#"><button>Read More</button></a>
                        </div>
                      </div>
                </Carousel>


                </div>
              </div>
        </section>
    )
}

export default News
