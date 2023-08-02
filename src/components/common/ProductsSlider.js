import React from "react";
import "../../styles/Slider.css";
import leftArrow from "../../assets/images/salesSliderArrowLeft.png";
import rightArrow from "../../assets/images/salesSliderArrowRight.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const ProductsSlider = ({productsList}) => {
  const slider = React.useRef(null);

  return (
    <div className="slider-container">
      <div className="slider-arrows">
        <div
          className="arrow-button"
          onClick={() => slider?.current?.slickPrev()}
        >
          <img src={leftArrow} alt="leftArrow" />
        </div>
        <div
          className="arrow-button"
          onClick={() => slider?.current?.slickNext()}
        >
          <img src={rightArrow} alt="rightArrow" />
        </div>
      </div>
      <Slider
        ref={slider}
        dots={false}
        arrows={false}
        infinite={false}
        speed={500}
        slidesToShow={5}
        slidesToScroll={1}
        autoplay={false}
      >
        {productsList &&
          productsList.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
      </Slider>
    </div>
  );
};

export default ProductsSlider;
