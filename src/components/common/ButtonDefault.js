import React from "react";
import "../../styles/Buttons.css";

const ButtonDefault = ({value, btntitle=null, onclick = null,
    btntype = null, className=null}) => {
  return (
    <button
      type={btntype}
      className={className?("button "+className):("button")}
      title={btntitle}
      onClick={onclick}
    >
      {value}
    </button>
  );
};

export default ButtonDefault;
