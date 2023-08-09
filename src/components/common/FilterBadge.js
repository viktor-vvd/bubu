import React from "react";
import "../../styles/FilterBadge.css";
import closeDefault from "../../assets/images/closeDefault.png";

const FilterBadge = ({
  icon = null,
  value,
  title = null,
  onclick = null,
  className = null,
}) => {
  return (
    <div
      className={
        className
          ? "container-horisontal filter-badge " + className
          : "container-horisontal filter-badge"
      }
      title={title}
    >
      <span className="filter-badge__text">{value}</span>
      <img className="filter-badge__icon" src={closeDefault} alt="arrow" onClick={onclick} />
    </div>
  );
};

export default FilterBadge;
