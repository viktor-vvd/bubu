import React from "react";
import "../../../styles/CartSuccessModal.css";
import ButtonDefault from "../elements/ButtonDefault";

const CartSuccessModal = ({ onClick }) => {
  return (
    <div className="container-vertical cart-success-modal__container">
      <h3 className="button-text">Товар додано до кошику</h3>
      <div className="container-vertical cart-success-modal__button__container">
        <span className="details" onClick={onClick}>
          Продовжити покупки
        </span>
        <ButtonDefault value="Перейти в кошик" btntitle="Перейти в кошик" />
      </div>
    </div>
  );
};

export default CartSuccessModal;
