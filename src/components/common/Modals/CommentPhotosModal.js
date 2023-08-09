import React from "react";
import "../../../styles/CommentPhotosModal.css";
import closeDefault from "../../../assets/images/closeDefault.png";
import ProductPhotos from "../../ProductPage/ProductPhotos";

const CommentPhotosModal = ({ images, onClick }) => {
  return (
    <div className="container-vertical photo-modal__container">
      <div className="container-horisontal photo-modal__header">
        <h2 className="headline">Фото</h2>
        <img
          className="photo-modal__close-icon"
          src={closeDefault}
          alt="arrow"
          onClick={onClick}
        />
      </div>
      <ProductPhotos items={images}/>
    </div>
  );
};

export default CommentPhotosModal;
