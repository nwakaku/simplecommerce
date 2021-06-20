import React, { useContext } from 'react'
import {UserContext} from '../../UserContext';
import product1 from '../../image/product1.jpg';
import './items.css'


const ItemPop = () => {
    const {zoom , setZoom, wish} =useContext(UserContext)

    return (
        <div class={`${zoom ?"popup hide__popup" : 'popup'}`}>
            <div class="section product-detail">
                <div class="details container">
                <div class="left">
                 
                    <div class="main">
                    <img src={wish.image} alt="" />
                    </div>
                    <div class="thumbnails">
                    <div class="thumbnail">
                        <img src={wish.image} alt="" />
                    </div>
                    <div class="thumbnail">
                        <img src={wish.image} alt="" />
                    </div>
                    <div class="thumbnail">
                        <img src={wish.image} alt="" />
                    </div>
                    <div class="thumbnail">
                        <img src={wish.image} alt="" />
                    </div>
                    </div>
                </div>
                <div class="right">
                <div class="pop-close" onClick={() => setZoom(true)}>
                 <i class="fas fa-times"></i>
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
                            <p><i class="fas fa-burn"></i> {wish.price} sold in the last 24hrs</p>
                        </div>
                    </div>  
                  <div class="price">${wish.price}</div>
                    
                    <h3>Product Detail</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima
                    delectus nulla voluptates nesciunt quidem laudantium, quisquam
                    voluptas facilis dicta in explicabo, laboriosam ipsam suscipit!
                    </p>
                <button className='addCart'>Add to Cart</button>            <span><i className="far fa-heart"></i></span>
                <p><i class="far fa-eye"></i> {wish.price} customers have view this material</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPop
