import React from "react";
import "../../styles/Buttons.css";

const ButtonDefault = ({value, btntitle=null, onclick = null,
    btntype = null}) => {
  return (
    <button
      type={btntype}
      className="button"
      title={btntitle}
      onClick={onclick}
    >
      {value}
    </button>
  );
};

export default ButtonDefault;
