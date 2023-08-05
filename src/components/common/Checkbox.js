import React from "react";
import "../../styles/Checkbox.css";

const Checkbox = ({ label, name, value = null, onChange = null }) => {
  return (
      <label className="container-horisontal checkbox" name={name}>
        <input className="checkbox__input" type="checkbox" name={name} checked={value} onChange={onChange} />
        <span className="container-horisontal checkbox__label">{label}</span>
      </label>
  );
};

export default Checkbox;
