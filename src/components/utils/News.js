import React,{} from 'react'
import { Carousel } from 'react-responsive-carousel'
import new2 from '../../image/fs.jpeg';
import new3 from '../../image/Asj.jpg';
import new4 from '../../image/chur.jpeg';
import new5 from '../../image/fs.jpeg';

const News = () => {
    return (
        // <!--New Section  -->
        <section className="container section news" id="news">
                <h1 className='dhan'>What Our Customers Say</h1>
            <div className="news__container container">
                      <div className="new__card">
                        <div className="card__header">
                          <img src={new2} alt=""/>
                        </div>
                        <div className="card__footer">
                          <p>Clothes aren't going to change the world.
                            The wearer who wear them will  .....!</p>
                          <span>...Elon Musk</span>
                        </div>
                      </div>
                      <div className="new__card">
                        <div className="card__header">
                          <img src={new4} alt=""/>
                        </div>
                        <div className="card__footer">
                          <p>I love shopping online at MH because its frown upon
                             to be in a store with no bra, sweatpants and a glass of wine!</p>
                          <span>...pst Grace</span>
                        </div>
                      </div>
                      <div className="new__card">
                        <div className="card__header">
                          <img src={new4} alt=""/>
                        </div>
                        <div className="card__footer">
                          <p>If you can't stop thinking about it....
                            BUY IT!</p>
                          <span>...Mark Zuckerburg</span>
                        </div>
                      </div>
                      <div className="new__card">
                        <div className="card__header">
                          <img src={new5} alt=""/>
                        </div>
                        <div className="card__footer">
                          <p>"Happiness is not in money, but in shopping.!"</p>
                          <span>...pst Focus</span>
                        </div>
                      </div>


                </div>
        </section>
    )
}

export default News