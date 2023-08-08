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
    <div className="slider__container sales__slider__container">
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
        dots={true}
        arrows={false}
        infinite={true}
        dotsClass="slider__dots__container"
        autoplay={true}
        autoplaySpeed={5000}
        pauseOnHover={true}
        appendDots={(dots) => <ul className="slider__dots__container">{dots}</ul>}
        customPaging={(i) => <div className="slider__dots_custom"></div>}
      >
        <img src={salesSlide} alt="salesSlide1" />
        <img src={salesSlide} alt="salesSlide1" />
        <img src={salesSlide} alt="salesSlide1" />
      </Slider>
    </div>
  );
};

export default SaleSlider;
