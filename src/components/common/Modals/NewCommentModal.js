import React from "react";
import "../../../styles/NewCommentModal.css";
import closeDefault from "../../../assets/images/closeDefault.png";
import gallery from "../../../assets/images/gallery.png";
import ButtonDefault from "../elements/ButtonDefault";

const NewCommentModal = ({ onClick }) => {
  return (
    <div className="container-vertical new-comment-modal__container">
      <div className="container-horisontal new-comment-modal__header">
        <h2 className="headline">Ваш відгук</h2>
        <img
          className="new-comment-modal__close-icon"
          src={closeDefault}
          alt="arrow"
          onClick={onClick}
        />
      </div>
      <form className="container-vertical new-comment-modal__form">
        <div className="container-vertical new-comment-modal__form__inputs__container">
          <div className="container-horisontal new-comment-modal__form__rate">
            <h3 className="subtitle">Оцінка:</h3>
            <div className="container-horisontal">
              <input
                className="checkbox__star"
                type="checkbox"
                name="star1"
                value={1}
                defaultChecked
              />
              <input
                className="checkbox__star"
                type="checkbox"
                name="star2"
                value={2}
                defaultChecked
              />
              <input
                className="checkbox__star"
                type="checkbox"
                name="star3"
                value={3}
                defaultChecked
              />
              <input
                className="checkbox__star"
                type="checkbox"
                name="star4"
                value={4}
              />
              <input
                className="checkbox__star"
                type="checkbox"
                name="star5"
                value={5}
              />
            </div>
          </div>
          <input
            className="body-text new-comment-modal__form__input"
            name="name"
            type="text"
            placeholder="Ім’я"
          />
          <input
            className="body-text new-comment-modal__form__input"
            name="email"
            type="text"
            placeholder="E-mail"
          />
          <textarea
            className="body-text new-comment-modal__form__input"
            name="email"
            rows={4}
            placeholder="Ваш коментар"
          />
        </div>
        <div className="container-horisontal new-comment-modal__form__add-image">
          <img
            className="new-comment-modal__form__add-image__icon"
            src={gallery}
            alt="gallery"
          />
          <span className="details">Додати фото</span>
        </div>
        <ButtonDefault value="Залишити" btntitle="Залишити" btntype="submit" className="new-comment-modal__form__button" />
      </form>
    </div>
  );
};

export default NewCommentModal;
