import React from "react";
import "../../styles/Slider.css";
import "../../styles/PopularBrands.css";
import popularBrand0 from "../../assets/images/popularBrand0.png";
import popularBrand1 from "../../assets/images/popularBrand1.png";
import popularBrand2 from "../../assets/images/popularBrand2.png";
import popularBrand3 from "../../assets/images/popularBrand3.png";
import popularBrand4 from "../../assets/images/popularBrand4.png";
import popularBrand5 from "../../assets/images/popularBrand5.png";
import popularBrand6 from "../../assets/images/popularBrand6.png";
import leftArrow from "../../assets/images/salesSliderArrowLeft.png";
import rightArrow from "../../assets/images/salesSliderArrowRight.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PopularBrands = () => {
  const slider = React.useRef(null);
  return (
    <div className="popular-brands-slider-container slider-container">
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
        infinite={true}
        slidesToShow={7}
        slidesToScroll={1}
        autoplay={true}
        speed={2000}
        autoplaySpeed={2000}
        cssEase="linear"
        responsive={[
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
              }
            }
          ]}
      >
        <div className="popular-brand">
          <img src={popularBrand0} alt="popularBrand" />
        </div>
        <div className="popular-brand">
          <img src={popularBrand1} alt="popularBrand" />
        </div>
        <div className="popular-brand">
          <img src={popularBrand2} alt="popularBrand" />
        </div>
        <div className="popular-brand">
          <img src={popularBrand3} alt="popularBrand" />
        </div>
        <div className="popular-brand">
          <img src={popularBrand4} alt="popularBrand" />
        </div>
        <div className="popular-brand">
          <img src={popularBrand5} alt="popularBrand" />
        </div>
        <div className="popular-brand">
          <img src={popularBrand6} alt="popularBrand" />
        </div>
      </Slider>
    </div>
  );
};

export default PopularBrands;
