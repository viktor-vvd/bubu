import React, { useEffect, useState } from "react";
import "../../styles/CataloguePage.css";
import { productsList, brandsList } from "../../db";
import arrowFiltersTop from "../../assets/images/arrowFiltersTop.png";
import ProductCard from "../common/elements/ProductCard";
import ButtonWhite from "../common/elements/ButtonWhite";
import Filters from "./Filters";
import Pagination from "../common/elements/Pagination";
import { useNavigate } from "react-router-dom";

const CataloguePage = () => {
  const navigate = useNavigate();
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
      <div className="container-horizontal catalogue-page__section">
        <ul className="container-horizontal breadcrumbs">
          <li>
            <a className="body-text breadcrumbs__item" onClick={() => navigate("/home")}>
              Головна
            </a>
          </li>
          <li>
            <span className="body-text breadcrumbs__divider">&nbsp;{">"}&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="catalogue-page__content">
        <h1 className="catalogue-page__content__header">Дитячі коляски</h1>
        <div className="sort__container">
          <ul className="container-horizontal sort">
            <li
              className="container-horizontal sort__button"
              onClick={() => {
                windowSize[0] < 550 && setisSortExpanded(!isSortExpanded);
              }}
            >
              <span className="body-text sort__item sort__item_selected">
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
                  <span className="body-text sort__item">По популярності</span>
                </li>
                <li>
                  <span className="body-text sort__item">Дешевші</span>
                </li>
                <li>
                  <span className="body-text sort__item">Дорожчі</span>
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
          <div className="container-horizontal pagination__wrapper">
            <ButtonWhite
              value="Показати ще"
              btntitle="Показати ще"
              className="pagination__button_more"
            />
            <Pagination
              items={productsList}
              itemsPerPage={windowSize[0] > 1370?(32):(windowSize[0] > 1110?(21):(windowSize[0] > 840?(16):(18)))}
              setCurrentItems={setCurrentItems}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CataloguePage;
