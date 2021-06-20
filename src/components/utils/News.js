import React,{} from 'react'
import { Carousel } from 'react-responsive-carousel'
import new1 from '../../images/news1.jpg';
import new2 from '../../image/fs.jpeg';
import new3 from '../../image/laf.jpeg';
import new4 from '../../image/chur.jpeg';
import new5 from '../../image/fs.jpeg';

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
                      <div className="new__card">
                        <div className="card__header">
                          <img src={new2} alt=""/>
                        </div>
                        <div className="card__footer">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                            provident rem sed minus natus unde vel modi!</p>
                          <span>...By Admin</span>
                          <a href="#"><button>Read More</button></a>
                        </div>
                      </div>
                      <div className="new__card">
                        <div className="card__header">
                          <img src={new3} alt=""/>
                        </div>
                        <div className="card__footer">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                            provident rem sed minus natus unde vel modi!</p>
                          <span>...By Admin</span>
                          <a href="#"><button>Read More</button></a>
                        </div>
                      </div>
                      <div className="new__card">
                        <div className="card__header">
                          <img src={new4} alt=""/>
                        </div>
                        <div className="card__footer">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                            provident rem sed minus natus unde vel modi!</p>
                          <span>...By Admin</span>
                          <a href="#"><button>Read More</button></a>
                        </div>
                      </div>
                      <div className="new__card">
                        <div className="card__header">
                          <img src={new5} alt=""/>
                        </div>
                        <div className="card__footer">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                            provident rem sed minus natus unde vel modi!</p>
                          <span>...By Admin</span>
                          <a href="#"><button>Read More</button></a>
                        </div>
                      </div>


                </div>
              </div>
        </section>
    )
}

export default News