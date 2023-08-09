import React, { useEffect, useState } from "react";
import "../../styles/CataloguePage.css";
import { productsList, brandsList } from "../../db";
import arrowFiltersTop from "../../assets/images/arrowFiltersTop.png";
import ProductCard from "../common/ProductCard";
import ButtonWhite from "../common/ButtonWhite";
import Filters from "./Filters";
import Pagination from "../common/Pagination";

const CataloguePage = () => {
  const [currentItems, setCurrentItems] = useState(null);
  const [isSortExpanded, setisSortExpanded] = useState(false);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
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
        <div className="sort__container">
          <ul className="container-horisontal sort">
            <li
              className="container-horisontal sort__button"
              onClick={() => {
                windowSize[0] < 550 && setisSortExpanded(!isSortExpanded);
              }}
            >
              <span className="sort__item sort__item_selected">
                За замовчуванням
              </span>
              {windowSize[0] < 550 && (
                <img
                  className={
                    isSortExpanded
                      ? "sort__fold-icon sort__fold_expanded"
                      : "sort__fold-icon"
                  }
                  src={arrowFiltersTop}
                  alt="arrow"
                />
              )}
            </li>
            {windowSize[0] > 550 || isSortExpanded ? (
              <>
                <li>
                  <span className="sort__item">По популярності</span>
                </li>
                <li>
                  <span className="sort__item">Дешевші</span>
                </li>
                <li>
                  <span className="sort__item">Дорожчі</span>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
        <Filters brandsList={brandsList} />
        <main className="container-vertical catalogue-page__main">
          <div className="catalogue-page__main__products">
            {currentItems &&
              currentItems.map((item, index) => (
                <ProductCard item={item} key={index} />
              ))}
          </div>
          <div className="container-horisontal pagination__wrapper">
            <ButtonWhite
              value="Показати ще"
              btntitle="Показати ще"
              className="pagination__button_more"
            />
            <Pagination
              items={productsList}
              itemsPerPage={7}
              setCurrentItems={setCurrentItems}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CataloguePage;
