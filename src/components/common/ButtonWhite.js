import React from "react";
import "../../styles/Buttons.css";

const ButtonWhite = ({
  icon = null,
  value,
  btntitle = null,
  onclick = null,
  btntype = null,
  className = null,
}) => {
  return (
    <button
      type={btntype}
      className={className ? "button button_white " + className : "button button_white "}
      title={btntitle}
      onClick={onclick}
    >
      {icon && <img className="button__icon" src={icon} alt="icon" />}
      <span className="buton__text buton__text_white">{value}</span>
    </button>
  );
};

export default ButtonWhite;
