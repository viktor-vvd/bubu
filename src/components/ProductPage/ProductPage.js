import React from "react";
import "../../styles/ProductPage.css";
import { productsList, brandsList, commentsList } from "../../db";
import favoriteDefault from "../../assets/images/favoriteDefault.png";
import comparisonGrey from "../../assets/images/comparisonGrey.png";
import star from "../../assets/images/star.png";
import cart from "../../assets/images/cart.png";
import location from "../../assets/images/location.png";
import arrowRight from "../../assets/images/arrowRight.png";
import arrowFiltersTop from "../../assets/images/arrowFiltersTop.png";
import { useLocation } from "react-router-dom";
import ProductPhotos from "./ProductPhotos";
import ButtonDefault from "../common/ButtonDefault";
import ButtonWhite from "../common/ButtonWhite";
import ProductsSlider from "../common/ProductsSlider";
import { useState } from "react";

const ProductPage = () => {
  const { state } = useLocation();
  const { item } = state;

  const [isDescriptionExpanded, setDescriptionExpanded] = useState(true);
  const [isDetailsContentFolded, setisDetailsContentFolded] = useState(true);
  const [isCharacteristicsExpanded, setCharacteristicsExpanded] = useState(true);
  const [isCommentsFolded, setisCommentsFolded] = useState(true);

  return (
    <main className="container-vertical product-page">
      <section className="page-container product-page__top-section">
        <ul className="container-horisontal breadcrumbs">
          <li>
            <a href="/home" className="breadcrumbs__item">
              Головна
            </a>
          </li>
          <li>
            <span className="breadcrumbs__divider">&nbsp;{">"}&nbsp;</span>
          </li>
          <li>
            <a href="/catalogue" className="breadcrumbs__item">
              Дитячі коляски
            </a>
          </li>
          <li>
            <span className="breadcrumbs__divider">&nbsp;{">"}&nbsp;</span>
          </li>
        </ul>
        <h1 className="top-section__header">{item.name}</h1>
        <ul className="container-horisontal top-section__lists">
          <li className="container-horisontal top-section__lists__item">
            <img
              className="top-section__lists__item__icon"
              src={favoriteDefault}
              alt="favorite"
            />
            <span className="top-section__lists__item__text top-section__lists__item__text_favorite">
              У вибране
            </span>
          </li>
          <li className="container-horisontal top-section__lists__item">
            <img
              className="top-section__lists__item__icon"
              src={comparisonGrey}
              alt="comparison"
            />
            <span className="top-section__lists__item__text">Порівняти</span>
          </li>
        </ul>
        <div className="container-horisontal top-section__short-info">
          <span
            className={
              item && item.is_avaliable
                ? "top-section__short-info__state top-section__short-info__state_avaliable"
                : "top-section__short-info__state top-section__short-info__state_unavaliable"
            }
          >
            {item && item.is_avaliable ? "В наявності" : "Не в наявності"}
          </span>
          <span className="container-horisontal top-section__short-info__code">
            Код: {item.code}
          </span>
          <div className="container-horisontal top-section__short-info__statistics">
            <div className="container-horisontal">
              <span className="top-section__short-info__rate">
                {item.rate}{" "}
              </span>
              <img
                className="top-section__short-info__rate__icon"
                src={star}
                alt="star"
              />
            </div>
            <a
              className="top-section__short-info__statistics__comments"
              href="#"
            >
              9 відгуків
            </a>
          </div>
        </div>
        <ProductPhotos items={item.product_images} />
        <form className="container-vertical top-section__buying">
          <div className="container-vertical buying__options">
            <span className="buying__options__title">Колір:</span>
            <fieldset className="container-horisontal buying__options__container">
              <input
                type="radio"
                name="color"
                value="cyan"
                defaultChecked={true}
                style={{ backgroundColor: "cyan" }}
                className="buying__option_color"
              />
              <input
                type="radio"
                name="color"
                value="red"
                style={{ backgroundColor: "red" }}
                className="buying__option_color"
              />
              <input
                type="radio"
                name="color"
                value="lime"
                style={{ backgroundColor: "lime" }}
                className="buying__option_color"
              />
            </fieldset>
          </div>
          <div className="container-vertical buying__options">
            <span className="buying__options__title">Стать:</span>
            <fieldset className="container-horisontal buying__options__container">
              {item &&
                item.gender.map((gender, index) => (
                  <label
                    className="buying__option_gender__container"
                    key={"gender" + index}
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      defaultChecked={index === 0}
                      className="buying__option_gender"
                    />
                    <div className="buying__option_gender__label__container">
                      <span className="buying__option_gender__label">
                        {gender}
                      </span>
                    </div>
                  </label>
                ))}
            </fieldset>
          </div>
          <div className="container-horisontal buying__price__container">
            <span
              className={
                "buying__price" +
                (item.discount > 0 ? " buying__price_old" : "")
              }
            >
              {item.price
                .toString()
                .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
              <span className="buying__price__currency">грн</span>
            </span>
            {item.discount > 0 && (
              <>
                <span className="buying__price_new">
                  {Math.round(item.price * (1 - item.discount / 100))
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
                  <span className="buying__price__currency">грн</span>
                </span>
                <span className="buying__price_discount">
                  -{item.discount}%
                </span>
              </>
            )}
          </div>
          <div className="container-horisontal buying__buttons__container">
            <ButtonDefault icon={cart} value="КУПИТИ" btntitle="КУПИТИ" />
            <ButtonWhite value="Купити в 1 клік" btntitle="Купити в 1 клік" />
          </div>
          <div className="container-vertical buying__location__container">
            <h2 className="subtitle">Ви з Одеси? Заберіть товар у магазині</h2>
            <div className="container-horisontal location__adress__container">
              <img
                className="location__adress__icon"
                src={location}
                alt="location"
              />
              <span className="location__adress">
                Одеса, вул. Михайлівська, 8 (10:00-19:00 щодня)
              </span>
            </div>
            <a className="location__pick-up-today" href="#">
              Забрати сьогодні
            </a>
          </div>
          <nav className="container-horisontal buying__nav">
            <a className="buying__nav__item" href="#">
              Про нас
            </a>
            <a className="buying__nav__item" href="#">
              Контакти
            </a>
            <a className="buying__nav__item" href="#">
              Доставка і оплата
            </a>
            <a className="buying__nav__item" href="#">
              Повернення і обмін
            </a>
          </nav>
        </form>
      </section>

      <section className="container-vertical page-container products-section__container">
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

      <section className="container-vertical product-page__middle__section__container">
        <div className="container-horisontal page-container product-page__section product-page__middle__section">
          <div className="container-vertical middle__section__content-block__container middle__section__description">
            <div className="container-horisontal middle__section__block__header">
              <h2 className="headline">Опис</h2>
              <img
                className={
                  isDescriptionExpanded
                    ? "middle__section__block__header__fold-icon middle__section__block__header__fold-icon_expanded"
                    : "middle__section__block__header__fold-icon"
                }
                onClick={() => setDescriptionExpanded(!isDescriptionExpanded)}
                src={arrowFiltersTop}
                alt="arrow"
              />
            </div>
            {isDescriptionExpanded && (
              <div className="container-vertical middle__section__content-block">
                <div
                  className={
                    isDetailsContentFolded
                      ? "container-vertical middle__section__content middle__section__content_folded"
                      : "container-vertical middle__section__content"
                  }
                >
                  {item.description &&
                    item.description.map((descriptionItem, index) => (
                      <div
                        className="container-vertical middle__section__content"
                        key={"description" + index}
                      >
                        <p className="middle__section__content__text">
                          {descriptionItem}
                        </p>
                        {item.description_images &&
                          item.description_images.length <= index + 1 && (
                            <img
                              className="desct"
                              src={item.description_images[index - 1]}
                              alt="arrow"
                              key={"description_image" + index}
                            />
                          )}
                      </div>
                    ))}
                </div>
                <div className="container-vertical details-container">
                  <span
                    className="details"
                    onClick={() =>
                      setisDetailsContentFolded(!isDetailsContentFolded)
                    }
                  >
                    Докладніше
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="container-vertical middle__section__content-block__container middle__section__characteristics">
            <div className="container-horisontal middle__section__block__header">
              <h2 className="headline">Характеристики</h2>
              <img
                className={
                  isCharacteristicsExpanded
                    ? "middle__section__block__header__fold-icon middle__section__block__header__fold-icon_expanded"
                    : "middle__section__block__header__fold-icon"
                }
                onClick={() =>
                  setCharacteristicsExpanded(!isCharacteristicsExpanded)
                }
                src={arrowFiltersTop}
                alt="arrow"
              />
            </div>
            {isCharacteristicsExpanded && (
              <ul className="container-vertical middle__section__content-block">
                <li className="container-horisontal content-block__characteristic">
                  <span className="characteristic characteristic_name">
                    Виробник
                  </span>
                  <hr className="characteristic__divider" />
                  <span className="characteristic characteristic_value">
                    {brandsList[item.brand_id].name}
                  </span>
                </li>
                <li className="container-horisontal content-block__characteristic">
                  <span className="characteristic characteristic_name">
                    Країна
                  </span>
                  <hr className="characteristic__divider" />
                  <span className="characteristic characteristic_value">
                    {item.country}
                  </span>
                </li>
                <li className="container-horisontal content-block__characteristic">
                  <span className="characteristic characteristic_name">
                    Колір
                  </span>
                  <hr className="characteristic__divider" />
                  <span className="characteristic characteristic_value">
                    {item.color}
                  </span>
                </li>
                <li className="container-horisontal content-block__characteristic">
                  <span className="characteristic characteristic_name">
                    Стать
                  </span>
                  <hr className="characteristic__divider" />
                  <span className="characteristic characteristic_value">
                    {item.gender &&
                      item.gender.map((genderItem, index) =>
                        index !== 0 ? "/" + genderItem : genderItem
                      )}
                  </span>
                </li>
                <li className="container-horisontal content-block__characteristic">
                  <span className="characteristic characteristic_name">
                    Вага
                  </span>
                  <hr className="characteristic__divider" />
                  <span className="characteristic characteristic_value">
                    {item.weight}
                  </span>
                </li>
                <li className="container-horisontal content-block__characteristic">
                  <span className="characteristic characteristic_name">
                    Розмір (ДхШхВ)
                  </span>
                  <hr className="characteristic__divider" />
                  <span className="characteristic characteristic_value">
                    {item.dimensions}
                  </span>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="container-vertical page-container product-page__section product-page__comments__section">
          <div className="container-horisontal product-page__comments__section__header">
            <h2 className="headline">Відгуки (9)</h2>
            <div className="container-horisontal product-page__comments__section__header__rating">
              <h3 className="subtitle">Рейтинг:</h3>
              <div className="container-horisontal">
                <span className="top-section__short-info__rate">
                  {item.rate}{" "}
                </span>
                <img
                  className="top-section__short-info__rate__icon"
                  src={star}
                  alt="star"
                />
              </div>
            </div>
          </div>
          <ButtonDefault value="+ Написати відгук" btntitle="Написати відгук" />
          <div className="container-vertical product-page__comments__container">
            {commentsList &&
              commentsList.map((commentItem, index) => (
                <div className="container-vertical comment">
                  <span className="comment__date">{commentItem.date}</span>
                  <div className="container-horisontal comment__header">
                    <h3 className="comment__user-name">
                      {commentItem.user_name}
                    </h3>
                    <div className="container-horisontal comment__rate">
                      {commentItem.rate &&
                        [...Array(commentItem.rate)].map((e, i) => (
                          <img
                            className="comment__rate__icon"
                            src={star}
                            alt="star"
                            key={"star" + i}
                          />
                        ))}
                    </div>
                  </div>
                  {commentItem.content && (
                    <span className="comment__content">
                      {commentItem.content}
                    </span>
                  )}
                  {commentItem.comment_images && (
                  <div className="container-horisontal comment__images">
                    {commentItem.comment_images.map((commentImageItem, index) => (
                    <img
                      className="comment__images__item"
                      src={commentImageItem}
                      alt="star"
                    />))}
                  </div>)}
                </div>
              ))}
          </div>
          <div className="container-vertical details-container">
                  <span
                    className="details"
                    onClick={() =>
                      setisCommentsFolded(!isCommentsFolded)
                    }
                  >
                    Показати більше
                  </span>
                </div>
        </div>
      </section>

      <section className="container-vertical page-container products-section__container">
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

export default ProductPage;
