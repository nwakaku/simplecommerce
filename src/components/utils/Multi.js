import React,{useContext} from 'react'
import Product from './Product';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { UserContext } from '../../UserContext'




const Multi = () => {
    const { products} = useContext(UserContext)
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        // <!--New Section  -->
        <section className="section news container" id="news">
          <div className="product_header">
              <h3>Top Sellers</h3>
            </div> 

            {/* carousel area */}
            <div style={{padding:'1rem', backgroundColor:'white'}}>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5"
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
                autoPlay={false}
                showThumbs={false}
                >
                   {products.products.map((product, index) => <Product product={product} key={product.id}/>
                )}  
              </Carousel>
            </div>
            
                           
              {/* </div> */}
        </section>
    )
}

export default Multi
