import React from "react";
import { useState } from "react";
import menuMobile from "../../../assets/images/menuMobile.png";
import close from "../../../assets/images/close.png";
import facebookmini from "../../../assets/images/facebookmini.png";
import instagram from "../../../assets/images/instagram.png";
import youtube from "../../../assets/images/youtube.png";
import profile from "../../../assets/images/profile.png";
import "../../../styles/Menu.css";
import Catalogue from "./Catalogue";

const Menu = () => {
  const [isMenuExpanded, setisMenuExpanded] = useState(false);
  return (
    <>
      <div className={
          (isMenuExpanded ? "menu__button menu__button_expanded" : "menu__button")
        }>
        <img
          className="menu-mobile__icon"
          src={menuMobile}
          alt="menuMobile"
          onClick={() => setisMenuExpanded(true)}
        />
      </div>
      {isMenuExpanded && (
        <div className="container-horisontal menu__container">
          <div className="container-vertical menu">
            <Catalogue initiallyExpanded={false}/>
            <nav className="container-vertical menu__block">
              <a className="menu__nav__item" href="#">
                Про нас
              </a>
              <a className="menu__nav__item" href="#">
                Контакти
              </a>
              <a className="menu__nav__item" href="#">
                Доставка і оплата
              </a>
              <a className="menu__nav__item" href="#">
                Повернення і обмін
              </a>
            </nav>
            <hr className="menu__divider"/>
            <div className="container-vertical menu__block">
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
              <a className="header__profile__link" href="/auth">
                Вхід
              </a>
            </div>
            </div>
          </div>
          <div className="container-vertical menu__close">
            <img
              className="menu__close__icon"
              src={close}
              alt="close"
              onClick={() => setisMenuExpanded(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
