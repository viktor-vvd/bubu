import React from "react";
import "../../styles/Header.css";
import bubuLogoWhite from "../../assets/images/bubuLogoWhite.png";
import facebookmini from "../../assets/images/facebookmini.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import profile from "../../assets/images/profile.png";
import cart from "../../assets/images/cart.png";
import сomparison from "../../assets/images/сomparison.png";
import favorite from "../../assets/images/favorite.png";

import SearchBar from "./SearchBar";
import Catalogue from "./Catalogue";

const Header = () => {
  return (
    <header className="header">
        <div className="container-vertical">
          <div className="container-horisontal header-container">
            <div className="container-horisontal">
              <a href="#">
                <img className="logo" src={bubuLogoWhite} alt="bubu Logo" />
              </a>
              <div className="container-horisontal inner-container">
                <a href="#">Про нас</a>
                <a href="#">Контакти</a>
                <a href="#">Доставка і оплата</a>
                <a href="#">Повернення і обмін</a>
              </div>
            </div>
            <div className="container-horisontal">
              <span className="phone">(063) 128-46-09</span>
              <div className="container-horisontal inner-container">
                <img className="socials-logo" src={instagram} alt="instagram" />
                <img className="socials-logo" src={youtube} alt="youtube" />
                <img
                  className="socials-logo"
                  src={facebookmini}
                  alt="facebook"
                />
              </div>
              <div className="container-horisontal language-selector">
                <a href="#">Укр</a>
                <div className="vertical-divider" />
                <a href="#" className="language-active">
                  Рус
                </a>
              </div>
              <div className="container-horisontal profile">
                <img src={profile} alt="facebook" />
                <a href="#">Вхід</a>
              </div>
            </div>
          </div>

          <div className="container-horisontal header-container">
            <Catalogue />
            <SearchBar />
            <div className="container-horisontal lists-container">
              <img src={сomparison} alt="сomparison" />
              <span>0</span>
            </div>
            <div className="container-horisontal lists-container">
              <img src={favorite} alt="favorite" />
              <span>0</span>
            </div>
            <div className="container-horisontal lists-container">
              <img src={cart} alt="cart" />
              <span className="cart-counter">1</span>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;