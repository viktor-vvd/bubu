import React, { useState } from "react";
import "../../styles/CataloguePage.css";
import { productsList, brandsList } from "../../db";
import ProductCard from "../common/ProductCard";
import ButtonWhite from "../common/ButtonWhite";
import Filters from "./Filters";
import Pagination from "../common/Pagination";

const CataloguePage = () => {
  const min = 100; /*for testing*/
  const max = 30000; /*for testing*/
  const [priceRangeValue, setPriceRangeValue] = useState([100, 30000]);
  const [categoryExpanded, setCategoryExpanded] = useState(true);
  const [priceExpanded, setPriceExpanded] = useState(true);
  const [brandExpanded, setBrandExpanded] = useState(true);
  const [currentItems, setCurrentItems] = useState(null);


  return (
    <div className="container-vertical page-container catalogue-page">
      <div className="container-horisontal catalogue-page__section">
        <ul className="container-horisontal breadcrumbs">
          <li>
            <a href="/home" className="breadcrumbs__item">
              Головна
            </a>
          </li>
          <li>
            <span className="breadcrumbs__divider">&nbsp;{">"}&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="catalogue-page__content">
        <h1 className="catalogue-page__content__header">Дитячі коляски</h1>
        <ul className="container-horisontal sort">
          <li>
            <span className="sort__item sort__item_selected">
              За замовчуванням
            </span>
          </li>
          <li>
            <span className="sort__item">По популярності</span>
          </li>
          <li>
            <span className="sort__item">Дешевші</span>
          </li>
          <li>
            <span className="sort__item">Дорожчі</span>
          </li>
        </ul>
        <Filters brandsList={brandsList}/>
        <main className="container-vertical catalogue-page__main">
          <div className="catalogue-page__main__products">
            {currentItems &&
              currentItems.map((item, index) => (
                <ProductCard item={item} key={index} />
              ))}
          </div>
          <div className="container-horisontal pagination__wrapper">
            <ButtonWhite value="Показати ще" btntitle="Показати ще" className="pagination__button_more" />
            <Pagination items={productsList} itemsPerPage={7} setCurrentItems={setCurrentItems}/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CataloguePage;
