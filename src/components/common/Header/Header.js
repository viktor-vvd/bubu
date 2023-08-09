import React, { useEffect, useState } from "react";
import "../../../styles/Header.css";
import bubuLogoWhite from "../../../assets/images/bubuLogoWhite.png";
import facebookmini from "../../../assets/images/facebookmini.png";
import instagram from "../../../assets/images/instagram.png";
import youtube from "../../../assets/images/youtube.png";
import profile from "../../../assets/images/profile.png";
import cart from "../../../assets/images/cart.png";
import сomparison from "../../../assets/images/сomparison.png";
import favorite from "../../../assets/images/favorite.png";
import SearchBar from "../elements/SearchBar";
import Catalogue from "./Catalogue";
import Menu from "./Menu";

const Header = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

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
    <header className="container-vertical header__background">
      <div className="container-vertical page-container header">
        <div className="container-horisontal header__section">
          <div className="container-horisontal">
            <a href="/bubu/home">
              <img
                className="header__logo"
                src={bubuLogoWhite}
                alt="bubu Logo"
              />
            </a>
            <nav className="container-horisontal header__inner__container header__nav">
              <a className="header__nav__item" href="#">
                Про нас
              </a>
              <a className="header__nav__item" href="#">
                Контакти
              </a>
              <a className="header__nav__item" href="#">
                Доставка і оплата
              </a>
              <a className="header__nav__item" href="#">
                Повернення і обмін
              </a>
            </nav>
          </div>
          <div className="container-horisontal header__container_top_right">
            <span className="header__phone">(063) 128-46-09</span>
            <div className="container-horisontal header__inner__container header__socials__pc">
              <a href="#">
                <img
                  className="header__socials__logo"
                  src={instagram}
                  alt="instagram"
                />
              </a>
              <a href="#">
                <img
                  className="header__socials__logo"
                  src={youtube}
                  alt="youtube"
                />
              </a>
              <a href="#">
                <img
                  className="header__socials__logo"
                  src={facebookmini}
                  alt="facebook"
                />
              </a>
            </div>
            <div className="container-horisontal header__language">
              <a className="header__language__item" href="#">
                Укр
              </a>
              <div className="header__language__divider" />
              <a
                className="header__language__item header__language__item__active"
                href="#"
              >
                Рус
              </a>
            </div>
            <div className="container-horisontal header__profile">
              <img
                className="header__profile__icon"
                src={profile}
                alt="profile"
              />
              <a className="header__profile__link" href="/bubu/auth">
                Вхід
              </a>
            </div>
          </div>
        </div>
        <div className="container-horisontal header__section">
          <Catalogue />
          <SearchBar />
          <a href="#" className="container-horisontal header__list__container">
            <img
              className="header__list__icon"
              src={сomparison}
              alt="сomparison"
            />
            <span className="header__list__text">0</span>
          </a>
          <a href="#" className="container-horisontal header__list__container">
            <img src={favorite} alt="favorite" />
            <span className="header__list__text">0</span>
          </a>
          <a href="#" className="container-horisontal header__list__container">
            <img src={cart} alt="cart" />
            <span className="header__list__text header__list__cart__text">
              1
            </span>
          </a>
        </div>
      </div>

      <div className="container-horicontal page-container header_mobile">
        <div className="container-horisontal header-mobile__container">
          <Menu/>
          <a href="/home">
            <img className="header__logo" src={bubuLogoWhite} alt="bubu Logo" />
          </a>
        </div>
        {windowSize[0] > 700 && <SearchBar />}
        <div className="container-horisontal header-mobile__container">
        {windowSize[0] < 700 && <SearchBar />}
          <a href="#" className="container-horisontal header__list__container">
            <img
              className="header__list__icon"
              src={сomparison}
              alt="сomparison"
            />
            <span className="header__list__text">0</span>
          </a>
          <a href="#" className="container-horisontal header__list__container">
            <img src={favorite} alt="favorite" />
            <span className="header__list__text">0</span>
          </a>
          <a href="#" className="container-horisontal header__list__container">
            <img src={cart} alt="cart" />
            <span className="header__list__text header__list__cart__text">
              1
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
