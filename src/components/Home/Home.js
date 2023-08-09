import React, { useState } from "react";
import SaleSlider from "./SaleSlider";
import "../../styles/Home.css";
import { productsList } from "../../db";
import ProductsSlider from "../common/elements/ProductsSlider";
import PopularCategories from "./PopularCategories";
import PopularBrands from "./PopularBrands";
import arrowRight from "../../assets/images/arrowRight.png";

const Home = () => {
  const [isInfoFolded, setisInfoFolded] = useState(true);
  return (
    <main className="container-vertical page-container home">
      <section className="container-horisontal home__section">
        <aside className="catalogue__placeholder"></aside>
        <SaleSlider />
      </section>
      <section className="container-vertical home__section products-section__container">
        <div className="container-horisontal products-section__title__container">
          <div className="container-horisontal products-section__title">
            <h2 className="headline">Акція!</h2>
            <span className="products-section__sale-badge">SALE</span>
          </div>
          <a href="#">
            <img
              className="products-section__title__icon"
              src={arrowRight}
              alt="arrow"
            />
          </a>
        </div>
        <ProductsSlider productsList={productsList} />
      </section>
      <section className="container-vertical home__section products-section__container">
        <div className="container-horisontal products-section__title__container">
          <div className="container-horisontal products-section__title">
            <h2 className="headline">Популярні Категорії</h2>
          </div>
        </div>
        <PopularCategories />
      </section>
      <section className="container-vertical home-section-container products-section__container">
        <div className="container-horisontal products-section__title__container">
          <div className="container-horisontal products-section__title">
            <h2 className="headline">Популярні Бренди</h2>
          </div>
          <a href="#">
            <img
              className="products-section__title__icon"
              src={arrowRight}
              alt="arrow"
            />
          </a>
        </div>
        <PopularBrands />
      </section>
      <section className="container-vertical home__section home__short-info__section">
        <div className="container-vertical home__short-info">
          <p className={isInfoFolded ? "home__short-info__text home__short-info__text_folded" : "home__short-info__text"}>
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
      </section>
      <section className="container-vertical home__section products-section__container">
        <div className="container-horisontal products-section__title__container">
          <div className="container-horisontal products-section__title">
            <h2 className="headline">Ви переглядали</h2>
          </div>
        </div>
        <ProductsSlider productsList={productsList} />
      </section>
    </main>
  );
};

export default Home;
