import React, { useState } from "react";
import SaleSlider from "./SaleSlider";
import "../../styles/Home.css";
import { productsList } from "../../db";
import ProductsSlider from "../common/ProductsSlider";
import PopularCategories from "./PopularCategories";
import PopularBrands from "./PopularBrands";
import arrowRight from "../../assets/images/arrowRight.png";

const Home = () => {
  const [isInfoFolded, setisInfoFolded] = useState(true);
  return (
    <div className="container-vertical home-container section-container">
      <div className="container-horisontal home-section-container">
        <div className="catalogue-placeholder"></div>
        <SaleSlider />
      </div>
      <div className="container-vertical home-section-container">
        <div className="container-horisontal home-section-title-container">
          <div className="container-horisontal home-section-title">
            <h2>Акція!</h2>
            <span>SALE</span>
          </div>
          <div>
            <img src={arrowRight} alt="arrow" />
          </div>
        </div>
        <ProductsSlider productsList={productsList} />
      </div>
      <div className="container-vertical home-section-container">
        <div className="container-horisontal home-section-title-container">
          <div className="container-horisontal home-section-title">
            <h2>Популярні Категорії</h2>
            <span>SALE</span>
          </div>
        </div>
        <PopularCategories />
      </div>
      <div className="container-vertical home-section-container">
        <div className="container-horisontal home-section-title-container">
          <div className="container-horisontal home-section-title">
            <h2>Популярні Бренди</h2>
          </div>
          <div>
            <img src={arrowRight} alt="arrow" />
          </div>
        </div>
        <PopularBrands />
      </div>
      <div className="container-vertical home-section-container home-short-info-container">
        <div className="container-vertical home-short-info-section">
          <p className={isInfoFolded ? "folded" : ""}>
            Інтернет-магазин дитячих товарів Бу-Бу - зона комфорту малюків і їх
            батьків. Наш асортимент розроблений в діапазоні "від народження до
            школи", завдяки чому кожен етап розвитку вашої дитини буде
            максимально правильним, а головне, цікавим і радісним. <br />
            <br />
            Товари для дітей - особлива категорія продукції, тому ми довіряємо
            тільки перевіреним виробникам та брендам, які давно і успішно
            представлені на світовому ринку. Магазин Бу-Бу є дистриб'ютором
            таких брендів: Anex, X-lander, Leonardo, Bebe Confort, Welldon,
            Huffy, Fun Time, Lexus Trike, Nino, Maltex, Ceba baby, X-rider, Play
            WOW, Miniland, Casato, Klups, Radir, Keenway, Adamex, Roan, Tako.{" "}
            <br />
            <br />
            На сайті інтернет магазину Бу-Бу ви можете купити товари для дітей
            абсолютно різних категорій, в залежності від потреб: <br />
            дитячі коляски, дитяча кімната, стільці і шезлонги, все для
            годування, гігієна та догляд, автокрісла, дитячий транспорт,
            іграшки, дитячий одяг.
          </p>
          <span
            className="details"
            onClick={() => setisInfoFolded(!isInfoFolded)}
          >
            Докладніше
          </span>
        </div>
      </div>
      <div className="container-vertical home-section-container">
        <div className="container-horisontal home-section-title-container">
          <div className="container-horisontal home-section-title">
            <h2>Ви переглядали</h2>
          </div>
        </div>
        <ProductsSlider productsList={productsList} />
      </div>
    </div>
  );
};

export default Home;
