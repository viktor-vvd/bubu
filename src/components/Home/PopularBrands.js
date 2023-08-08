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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PopularBrands = () => {
  const slider = React.useRef(null);
  return (
    <div className="slider__container popular-brands__slider__container">
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
              breakpoint: 1050,
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
        <div className="popular-brand__item">
          <img className="popular-brand__item__icon" src={popularBrand0} alt="popularBrand" />
        </div>
        <div className="popular-brand__item">
          <img className="popular-brand__item__icon" src={popularBrand1} alt="popularBrand" />
        </div>
        <div className="popular-brand__item">
          <img className="popular-brand__item__icon" src={popularBrand2} alt="popularBrand" />
        </div>
        <div className="popular-brand__item">
          <img className="popular-brand__item__icon" src={popularBrand3} alt="popularBrand" />
        </div>
        <div className="popular-brand__item">
          <img className="popular-brand__item__icon" src={popularBrand4} alt="popularBrand" />
        </div>
        <div className="popular-brand__item">
          <img className="popular-brand__item__icon" src={popularBrand5} alt="popularBrand" />
        </div>
        <div className="popular-brand__item">
          <img className="popular-brand__item__icon" src={popularBrand6} alt="popularBrand" />
        </div>
      </Slider>
    </div>
  );
};

export default PopularBrands;
