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
    <div className="slider__container">
      <div className="slider__arrows">
        <div
          className="slider__arrow__button"
          onClick={() => slider?.current?.slickPrev()}
        >
          <img className="slider__arrow__icon" src={leftArrow} alt="leftArrow" />
        </div>
        <div
          className="slider__arrow__button"
          onClick={() => slider?.current?.slickNext()}
        >
          <img className="slider__arrow__icon" src={rightArrow} alt="rightArrow" />
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
        responsive={[
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 2,
            }
          }
        ]}
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
