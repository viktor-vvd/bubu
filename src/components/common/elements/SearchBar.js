import React, { useEffect, useState } from "react";
import "../../../styles/SearchBar.css";
import searchMobile from "../../../assets/images/searchMobile.png";
import close from "../../../assets/images/close.png";

const SearchBar = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [isSearchExpanded, setisSearchExpanded] = useState(windowSize[0] > 700);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
 
  return (
    <div className={isSearchExpanded?("container-horizontal search-bar search-bar__expanded"):("container-horizontal search-bar")}>
      <input
      className={isSearchExpanded?("search-bar__input search-bar__input__expanded"):("search-bar__input")}
        name="phone"
        type="text"
        placeholder="Я шукаю..."
        /* onkeyup="myFunction()" */
      />
      <div>
      <img
          className="search-bar_mobile__icon"
          src={isSearchExpanded?(close):(searchMobile)}
          alt="menuMobile"
          onClick={() => setisSearchExpanded(!isSearchExpanded)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
