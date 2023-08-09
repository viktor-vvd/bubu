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
    <div className="popular-categories">
      <div className="category__wrapper">
        <img className="category__image" src={carriagePopularCategory} alt="Коляски 2в1" />
        <span className="body-text category__text">Коляски 2в1</span>
      </div>
      <div className="category__wrapper">
        <img className="category__image" src={roomPopularCategory} alt="Ліжечка" />
        <span className="body-text category__text">Ліжечка</span>
      </div>
      <div className="category__wrapper">
        <img className="category__image" src={potPopularCategory} alt="Горщики" />
        <span className="body-text category__text">Горщики</span>
      </div>
      <div className="category__wrapper">
        <img className="category__image" src={bedPopularCategory} alt="Постільна білизна" />
        <span className="body-text category__text">Постільна білизна</span>
      </div>
      <div className="category__wrapper">
        <img className="category__image" src={puzzlesPopularCategory} alt="Пазли" />
        <span className="body-text category__text">Пазли</span>
      </div>
      <div className="category__wrapper">
        <img className="category__image" src={bathPopularCategory} alt="Ванночки" />
        <span className="body-text category__text">Ванночки</span>
      </div>
    </div>
  );
};

export default PopularCategories;
