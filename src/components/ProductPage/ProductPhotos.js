import React from "react";
import "../../styles/Slider.css";
import "../../styles/ProductPhotos.css";
import leftArrow from "../../assets/images/salesSliderArrowLeft.png";
import rightArrow from "../../assets/images/salesSliderArrowRight.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";

const ProductPhotos = ({ items }) => {
  const slider = React.useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };
  return (
    <div className="container-horizontal product-photos">
      <div className="container-vertical product-photos__list">
        {items &&
          items.map((item, index) => (
            <img
              className={currentSlide===index?("list__photo list__photo_active"):("list__photo")}
              src={item}
              key={index}
              alt={"Image" + index}
              onClick={()=>slider?.current.slickGoTo(index)}
            />
          ))}
      </div>
      <div className="container-horizontal slider__container product-photos__slider__container">
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
          className={"product-photos__slider"}
          ref={slider}
          dots={false}
          arrows={false}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={false}
          beforeChange={changeSlide}
        >
          {items &&
            items.map((item, index) => (
              <img
                className="slider__photo"
                src={item}
                key={index}
                alt={"Image" + index}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductPhotos;
