import React, { useContext } from 'react'
import {UserContext} from '../../UserContext';
import product1 from '../../image/product1.jpg';
import './items.css'


const ItemPop = () => {
    const {zoom , setZoom, wish, onAdd} =useContext(UserContext)

    return (
        <div className={`${zoom ?"popup hide__popup" : 'popup'}`}>
            <div className="section product-detail">
                <div className="details container">
                <div className="left">
                 
                    <div className="main">
                    <img src={wish.image} alt="" />
                    </div>
                    <div className="thumbnails">
                    <div className="thumbnail">
                        <img src={wish.image} alt="" />
                    </div>
                    <div className="thumbnail">
                        <img src={wish.image} alt="" />
                    </div>
                    <div className="thumbnail">
                        <img src={wish.image} alt="" />
                    </div>
                    <div className="thumbnail">
                        <img src={wish.image} alt="" />
                    </div>
                    </div>
                </div>
                <div className="right">
                <div className="pop-close" onClick={() => setZoom(true)}>
                 <i className="fas fa-times"></i>
                 </div>

                    <span>{wish ? wish.category : null}</span>
                    <h1>{wish ? wish.title : null}</h1>
                    <div className="reviews">
                        <div>
                            <p>Reviews</p>
                            <p><span>Brand</span>: {wish.title}</p>
                            <p><span>Availability</span>: 1000yards In stock</p>
                        </div>
                        <div className="red">
                            <p><i className="fas fa-burn"></i> {wish.price} sold in the last 24hrs</p>
                        </div>
                    </div>  
                  <div className="price">
                      <small>
                          NGN {wish.price}
                      </small>
                    </div>
                    
                    <h3>Product Detail</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima
                    delectus nulla voluptates nesciunt quidem laudantium, quisquam
                    voluptas facilis dicta in explicabo, laboriosam ipsam suscipit!
                    </p>
                <button onClick={() => {onAdd(wish);setZoom(true)}} className='addCart'>Add to Cart</button>            <span><i className="far fa-heart"></i></span>
                <p><i className="far fa-eye"></i> {wish.price} customers have view this material</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPop
