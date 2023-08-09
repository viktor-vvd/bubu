import React from "react";
import "../../../styles/ProductCard.css";
import ButtonDefault from "./ButtonDefault";
import favoriteDefault from "../../../assets/images/favoriteDefault.png";
import comparisonDefault from "../../../assets/images/сomparisonDefault.png";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product", { state: { item: item } })}>
      <div className="container-vertical product-card__absolute__container">
        <div className="container-vertical product-card__image__container">
          <img className="product-card__image" src={item.product_images[0]} alt="Product" />
          {item.discount > 0 && (
            <span className="body-text product-card__discount">-{item.discount}%</span>
          )}
        </div>
        <span className="body-text product-card__title">{item.name}</span>
        <div className="container-horisontal product-card__price__container">
          <span className={"product-card__price" + (item.discount > 0 ? " product-card__price_old" : "")}>
            {item.price
              .toString()
              .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
            <span className="product-card__price__currency">грн</span>
          </span>
          {item.discount > 0 && (
            <span className="product-card__price_new">
              {Math.round(item.price * (1 - item.discount / 100))
                .toString()
                .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
              <span className="product-card__price__currency">грн</span>
            </span>
          )}
        </div>
        <div className="container-horisontal product-card__buttons__container">
          {item.is_avaliable ? (
            <>
              <ButtonDefault value="КУПИТИ" btntitle="КУПИТИ" />
              <img className="product-card__buttons__icon" src={favoriteDefault} alt="favorite" />
              <img className="product-card__buttons__icon" src={comparisonDefault} alt="сomparison" />
            </>
          ) : (
            <span className="product-card_unavaliable">Немає в наявності</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
