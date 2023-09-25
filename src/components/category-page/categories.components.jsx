import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState ,useRef, useContext} from "react";
import { CartContext } from "../../context/cart.context";
import Footer from "../Footer-page/footer";
import slider from '../../slider-data.json'
import product from '../../product-data.json';
const MainPage = () => {
  const cakeRef = useRef(null);

  const [visibleCategories, setVisibleCategories] = useState(6);
  const handleShowMore = () => {
    setVisibleCategories((prevVisible) => prevVisible + 3);
  };

  const carouselImages = slider.map((category) => ({
    id: category.id,
    imageUrl: category.imageUrl,
  }));

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Auto-animate the slider
    autoplaySpeed: 2000, // Set the time between slides (in milliseconds)
  };
  const {addItemsToCart} = useContext(CartContext)
  const addProductsToCart = (event) =>{
    const inputedId = (event.target.id);
    const productId = inputedId - 1;
   // check if the id of the button is equals to the id of the product
    if(inputedId == product[productId].id){
    //create an array or an object to pass to addItemsToCart
    const products = []
    products.id = product[productId].id
    products.title =product[productId].title
    products.price = product[productId].price
    products.imageUrl = product[productId].imageUrl
    addItemsToCart(products) 
    }
  }
  return (
    <div>
      <div>
        <div className="carousel-container">
          <Slider {...carouselSettings} className="carousel">
            {carouselImages.map((image) => (
              <div key={image.id}>
                <img src={image.imageUrl} alt={`Carousel ${image.id}`} />
              </div>
            ))}
          </Slider>
        </div>
    
        <div ref={cakeRef} className="categories-container">
          {product
            .slice(0, visibleCategories)
            .map(({ title, id, imageUrl, price }) => (
              <div key={id} className="category-container">
                <div
                  className="background-image"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                />
                <div className="category-body-container">
                  <h2>{title}</h2>
                  <p>Shop Now</p>
                  <p> {price}</p>
                
                  <button onClick={addProductsToCart} id={id}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
        {visibleCategories < product.length && (
          <button className="show-more-button" onClick={handleShowMore}>
            Show More
          </button>
          
        )}
      </div>
      <Footer />
    </div>
  );
};
export default MainPage;
