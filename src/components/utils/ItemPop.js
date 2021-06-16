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
                <div class="popup__close" onClick={() => setZoom(true)}>
                 <i class="fas fa-times"></i>
                 </div> 
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
                    <span>Home/T-shirt{wish ? wish.name : null}</span>
                    <h1>{wish ? wish.title : null}</h1>
                    <div class="price">${wish.price}</div>
                    <form>
                    <div>
                        <select>
                        <option value="Select Size" selected disabled>
                            Select Size
                        </option>
                        <option value="1">32</option>
                        <option value="2">42</option>
                        <option value="3">52</option>
                        <option value="4">62</option>
                        </select>
                        <span><i class="fas fa-chevron-down"></i></span>
                    </div>
                    </form>

                    <form class="form">
                    <input type="text" placeholder="1" />
                    <a href="cart.html" class="addCart">Add To Cart</a>
                    </form>
                    <h3>Product Detail</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima
                    delectus nulla voluptates nesciunt quidem laudantium, quisquam
                    voluptas facilis dicta in explicabo, laboriosam ipsam suscipit!
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPop
