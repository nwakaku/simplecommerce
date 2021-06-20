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
        <section className="section news" id="news">
          {/* <div className="container"> */}
            <div className="title__container">
              <div className="section__titles">
                <div className="section__title active">
                  <span className="dot"></span>
                  <h1 className="primary__title">Recommended For You</h1>
                </div>
              </div>
            </div>

            {/* carousel area */}
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                autoPlay={true}
                autoPlaySpeed={1000}
                >
                   {products.products.map((product, index) => <Product product={product}/>
                )}  
                </Carousel>
                           
              {/* </div> */}
        </section>
    )
}

export default Multi
