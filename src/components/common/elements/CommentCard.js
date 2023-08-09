import React, { useState } from "react";
import "../../../styles/CommentCard.css";
import star from "../../../assets/images/star.png";
import CommentPhotosModal from "../Modals/CommentPhotosModal";

const CommentCard = ({ commentItem }) => {
  const [isPhotoOpen, setisPhotoOpen] = useState(false);
  return (
    <div className="container-vertical comment">
      <span className="comment__date">{commentItem.date}</span>
      <div className="container-horisontal comment__header">
        <h3 className="comment__user-name">{commentItem.user_name}</h3>
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
        <span className="comment__content">{commentItem.content}</span>
      )}
      {commentItem.comment_images && (
        <div className="container-horisontal comment__images">
          {commentItem.comment_images.map((commentImageItem, index) =>
            commentItem.comment_images.length > 4 ? (
              index < 3 ? (
                <img
                  className="comment__images__item"
                  src={commentImageItem}
                  alt="comment img"
                  key={"comment_image" + index}
                  onClick={() => setisPhotoOpen(!isPhotoOpen)}
                />
              ) : (
                index === 3 && (
                  <div
                    className="comment__images__more"
                    key={"comment_image" + index}
                    onClick={() => setisPhotoOpen(!isPhotoOpen)}
                  >
                    <img
                      className="comment__images__item"
                      src={commentImageItem}
                      alt="comment img"
                      key={"comment_image" + index}                      
                    />
                    <span className="body-text container-horisontal comment__images__more__text">
                      +{commentItem.comment_images.length - 4}
                    </span>
                  </div>
                )
              )
            ) : (
              <img
                className="comment__images__item"
                src={commentImageItem}
                alt="comment img"
                key={"comment_image" + index}
                onClick={() => setisPhotoOpen(!isPhotoOpen)}
              />
            )
          )}
          {isPhotoOpen && (
            <CommentPhotosModal images={commentItem.comment_images} onClick={()=>setisPhotoOpen(false)} />
          )}
        </div>
      )}
    </div>
  );
};

export default CommentCard;
