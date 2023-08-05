import React from "react";
import "../../styles/ProductCard.css";
import ButtonDefault from "./ButtonDefault";
import favoriteDefault from "../../assets/images/favoriteDefault.png";
import comparisonDefault from "../../assets/images/сomparisonDefault.png";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="card-container" onClick={() => navigate("/product", { state: { item: item } })}>
      <div className="container-vertical card-absolute-container">
        <div className="container-vertical card-image-container">
          <img src={item.product_image} alt="Product" />
          {item.discount > 0 && (
            <span className="card-discount">-{item.discount}%</span>
          )}
        </div>
        <span className="card-title">{item.name}</span>
        <div className="container-horisontal card-price-container">
          <span className={"card-price" + (item.discount > 0 ? " old" : "")}>
            {item.price
              .toString()
              .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
            <span className="card-price-currency">грн</span>
          </span>
          {item.discount > 0 && (
            <span className="card-new-price">
              {Math.round(item.price * (1 - item.discount / 100))
                .toString()
                .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
              <span className="card-price-currency">грн</span>
            </span>
          )}
        </div>
        <div className="container-horisontal card-buttons-container">
          {item.is_avaliable ? (
            <>
              <ButtonDefault value="КУПИТИ" btntitle="КУПИТИ" />
              <img src={favoriteDefault} alt="favorite" />
              <img src={comparisonDefault} alt="сomparison" />
            </>
          ) : (
            <span className="unavaliable">Немає в наявності</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
