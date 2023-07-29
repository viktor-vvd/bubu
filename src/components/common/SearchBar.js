import React from "react";
import "../../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="container-horisontal search-bar">
      <input
        name="phone"
        type="text"
        placeholder="Я шукаю..."
        /* onkeyup="myFunction()" */
      />
    </div>
  );
};

export default SearchBar;
