import React from "react";
import "../../styles/Slider.css";
import "../../styles/SaleSlider.css";
import salesSlide from "../../assets/images/salesSlide.png";
import leftArrow from "../../assets/images/salesSliderArrowLeft.png";
import rightArrow from "../../assets/images/salesSliderArrowRight.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SaleSlider = () => {
  const slider = React.useRef(null);

  return (
    <div className="sales-slider-container slider-container">
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
        dots={true}
        arrows={false}
        infinite={true}
        dotsClass="dots-container"
        autoplay={true}
        autoplaySpeed={5000}
        pauseOnHover={true}
        appendDots={(dots) => <ul className="dots-container">{dots}</ul>}
        customPaging={(i) => <div className="dots-custom"></div>}
      >
        <img src={salesSlide} alt="salesSlide1" />
        <img src={salesSlide} alt="salesSlide1" />
        <img src={salesSlide} alt="salesSlide1" />
      </Slider>
    </div>
  );
};

export default SaleSlider;
