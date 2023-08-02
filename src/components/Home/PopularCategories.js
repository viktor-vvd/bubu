import React from "react";
import "../../styles/PopularCategories.css";
import carriagePopularCategory from "../../assets/images/carriagePopularCategory.png";
import roomPopularCategory from "../../assets/images/roomPopularCategory.png";
import potPopularCategory from "../../assets/images/potPopularCategory.png";
import bedPopularCategory from "../../assets/images/bedPopularCategory.png";
import puzzlesPopularCategory from "../../assets/images/puzzlesPopularCategory.png";
import bathPopularCategory from "../../assets/images/bathPopularCategory.png";

const PopularCategories = () => {
  return (
    <div className="popular-categories-container">
      <div className="category-wrapper">
        <img src={carriagePopularCategory} alt="Коляски 2в1" />
        <span>Коляски 2в1</span>
      </div>
      <div className="category-wrapper">
        <img src={roomPopularCategory} alt="Ліжечка" />
        <span>Ліжечка</span>
      </div>
      <div className="category-wrapper">
        <img src={potPopularCategory} alt="Горщики" />
        <span>Горщики</span>
      </div>
      <div className="category-wrapper">
        <img src={bedPopularCategory} alt="Постільна білизна" />
        <span>Постільна білизна</span>
      </div>
      <div className="category-wrapper">
        <img src={puzzlesPopularCategory} alt="Пазли" />
        <span>Пазли</span>
      </div>
      <div className="category-wrapper">
        <img src={bathPopularCategory} alt="Ванночки" />
        <span>Ванночки</span>
      </div>
    </div>
  );
};

export default PopularCategories;
