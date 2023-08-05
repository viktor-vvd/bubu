import React from "react";
import "../../styles/Buttons.css";

const ButtonWhite = ({
  value,
  btntitle = null,
  onclick = null,
  btntype = null,
  className=null
}) => {
  return (
    <button
      type={btntype}
      className={className?("button button-white "+className):("button")}
      title={btntitle}
      onClick={onclick}
    >
      {value}
    </button>
  );
};

export default ButtonWhite;
