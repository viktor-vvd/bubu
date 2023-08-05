import React, { useState } from 'react'
import "../../styles/Filters.css";
import arrowFiltersTop from "../../assets/images/arrowFiltersTop.png";
import arrowRightButton from "../../assets/images/arrowRightButton.png";
import Checkbox from "../common/Checkbox";
import ReactSlider from "react-slider";

const Filters = ({brandsList}) => {
    const min = 100; /*for testing*/
  const max = 30000; /*for testing*/
  const [priceRangeValue, setPriceRangeValue] = useState([100, 30000]);
  const [categoryExpanded, setCategoryExpanded] = useState(true);
  const [priceExpanded, setPriceExpanded] = useState(true);
  const [brandExpanded, setBrandExpanded] = useState(true);
  return (
    <aside className="container-vertical filters">
          <div className="container-vertical filter-group">
            <div
              className="container-horisontal filter-group__header"
              onClick={() => setCategoryExpanded(!categoryExpanded)}
            >
              <h2 className="filter-group__header__name">Категорія</h2>
              <img
                className={
                  categoryExpanded
                    ? "filter-group__header__fold-icon filter-group__header__fold-icon_expanded"
                    : "filter-group__header__fold-icon"
                }
                src={arrowFiltersTop}
                alt="arrow"
              />
            </div>
            {categoryExpanded && (
              <ul className="container-vertical filter-group__filter-list">
                <li className="filter-list__item">
                  <a href="#" className="filter-list__item__label">
                    Коляски 3в1
                  </a>
                </li>
                <li className="filter-list__item">
                  <a href="#" className="filter-list__item__label">
                    Зимові конверти
                  </a>
                </li>
                <li className="filter-list__item">
                  <a href="#" className="filter-list__item__label">
                    Аксесуари та комплектуючі
                  </a>
                </li>
                <li className="filter-list__item">
                  <a href="#" className="filter-list__item__label">
                    Коляски для двійні
                  </a>
                </li>
                <li className="filter-list__item">
                  <a href="#" className="filter-list__item__label">
                    Муфти
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="container-vertical filter-group">
            <hr className="container-vertical filter-group__divider" />
          </div>
          <div className="container-vertical filter-group">
            <ul className="container-vertical filter-group__filter-list">
              <li className="filter-list__item">
                <Checkbox
                  name="avaliable"
                  label="В наявності"
                  className="filter-list__item__label"
                />
              </li>
            </ul>
          </div>
          <div className="container-vertical filter-group">
            <hr className="container-vertical filter-group__divider" />
          </div>
          <div className="container-vertical filter-group">
            <ul className="container-vertical filter-group__filter-list">
              <li className="filter-list__item">
                <Checkbox
                  name="discount"
                  label="Зі знижкою"
                  className="filter-list__item__label"
                />
              </li>
            </ul>
          </div>
          <div className="container-vertical filter-group">
            <hr className="container-vertical filter-group__divider" />
          </div>
          <div className="container-vertical filter-group">
            <div
              className="container-horisontal filter-group__header"
              onClick={() => setPriceExpanded(!priceExpanded)}
            >
              <h2 className="filter-group__header__name">Ціна</h2>
              <img
                className={
                  priceExpanded
                    ? "filter-group__header__fold-icon filter-group__header__fold-icon_expanded"
                    : "filter-group__header__fold-icon"
                }
                src={arrowFiltersTop}
                alt="arrow"
              />
            </div>
            {priceExpanded && (
              <div className="container-vertical price-range">
                <div className="price-range__slider__wrapper">
                  <ReactSlider
                    value={priceRangeValue}
                    min={min}
                    max={max}
                    onChange={setPriceRangeValue}
                    className="price-range__slider"
                    thumbClassName="price-range__slider__thumb"
                    trackClassName="price-range__slider__track"
                    pearling={true}
                  />
                </div>
                <div className="container-horisontal price-range__form">
                  <input
                    className="price-range__form__input"
                    name="min"
                    type="number"
                    step="10"
                    min={min}
                    max={priceRangeValue[1]}
                    value={priceRangeValue[0]}
                    onChange={(e) => {
                      console.log(priceRangeValue);
                      setPriceRangeValue([
                        Number(e.target.value),
                        priceRangeValue[1],
                      ]);
                    }}
                  />
                  <span className="price-range__form__divider">-</span>
                  <input
                    className="price-range__form__input"
                    name="max"
                    type="number"
                    step="10"
                    min={priceRangeValue[0]}
                    max={max}
                    value={priceRangeValue[1]}
                    onChange={(e) => {
                      console.log(priceRangeValue);
                      setPriceRangeValue([
                        priceRangeValue[0],
                        Number(e.target.value),
                      ]);
                    }}
                  />
                  <button className="price-range__form__button">
                    <img
                      className="price-range__form__button__image"
                      src={arrowRightButton}
                      alt="ArrowRight"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="container-vertical filter-group">
            <hr className="container-vertical filter-group__divider" />
          </div>
          <div className="container-vertical filter-group">
            <div
              className="container-horisontal filter-group__header"
              onClick={() => setBrandExpanded(!brandExpanded)}
            >
              <h2 className="filter-group__header__name">Категорія</h2>
              <img
                className={
                  brandExpanded
                    ? "filter-group__header__fold-icon filter-group__header__fold-icon_expanded"
                    : "filter-group__header__fold-icon"
                }
                src={arrowFiltersTop}
                alt="arrow"
              />
            </div>
            {brandExpanded && (
              <ul className="container-vertical filter-group__filter-list">
                {brandsList &&
                  brandsList.map((item, index) => (
                    <li className="filter-list__item" key={index}>
                      <Checkbox                        
                        name="brand"
                        label={item.name}
                        className="filter-list__item__label"
                      />
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </aside>
  )
}

export default Filters