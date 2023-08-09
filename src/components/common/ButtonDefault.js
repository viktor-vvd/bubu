import React from "react";
import "../../styles/Buttons.css";

const ButtonDefault = ({
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
      className={className ? "button " + className : "button"}
      title={btntitle}
      onClick={onclick}
    >
      {icon && <img className="button__icon" src={icon} alt="icon" />}
      <span className="buton__text button-text">{value}</span>
    </button>
  );
};

export default ButtonDefault;
