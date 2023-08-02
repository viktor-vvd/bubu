import React from "react";
import "../../styles/Buttons.css";

const ButtonWhite = ({
  value,
  btntitle = null,
  onclick = null,
  btntype = null,
}) => {
  return (
    <button
      type={btntype}
      className="button button-white"
      title={btntitle}
      onClick={onclick}
    >
      {value}
    </button>
  );
};

export default ButtonWhite;
