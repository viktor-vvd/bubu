import React, { useState } from "react";
import menu from "../../../assets/images/menu.png";
import carriage from "../../../assets/images/carriage.png";
import room from "../../../assets/images/room.png";
import chair from "../../../assets/images/chair.png";
import feeding from "../../../assets/images/feeding.png";
import soap from "../../../assets/images/soap.png";
import autochair from "../../../assets/images/autochair.png";
import car from "../../../assets/images/car.png";
import toy from "../../../assets/images/toy.png";
import clothes from "../../../assets/images/clothes.png";
import newIcon from "../../../assets/images/new.png";
import arrowMenuBack from "../../../assets/images/arrowMenuBack.png";
import "../../../styles/Catalogue.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Catalogue = () => {
  const location = useLocation();
  const [isCatalogueExpanded, setisCatalogueExpanded] = useState(false);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    setisCatalogueExpanded(location.pathname.includes("/home"));

    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <nav className="catalogue">
      <ul
        className={
          "catalogue__list" +
          (isCatalogueExpanded ? " catalogue__list_expanded" : "")
        }
      >
        {windowSize[0] < 1050 && isCatalogueExpanded ? (
          <li
            className="catalogue__list__item"
            onClick={() => setisCatalogueExpanded(false)}
          >
            <img
              className="catalogue__list__item__icon catalogue__list__item__icon_back"
              src={arrowMenuBack}
              alt="MenuBack"
            />
            <span className="subtitle">Меню</span>
          </li>
        ) : (
          <li
            className="catalogue__list__item catalogue__list__button"
            onClick={() => setisCatalogueExpanded(!isCatalogueExpanded)}
          >
            <img
              className="catalogue__list__item__icon"
              src={menu}
              alt="menu"
            />
            <span className="catalogue__list__button__text">КАТАЛОГ</span>
          </li>
        )}
        {isCatalogueExpanded && (
          <>
            {windowSize[0] < 1050 && isCatalogueExpanded ? (
              <></>
            ) : (
              <li className="catalogue__list__item">
                <hr className="catalogue__list__divider" />
              </li>
            )}
            <li className="catalogue__list__item">
              <img
                className="catalogue__list__item__icon"
                src={carriage}
                alt="menu"
              />
              <a className="catalogue__list__item__text" href="/catalogue">
                Дитячі коляски
              </a>
            </li>
            <li className="catalogue__list__item">
              <img
                className="catalogue__list__item__icon"
                src={room}
                alt="menu"
              />
              <a className="catalogue__list__item__text" href="#">
                Дитяча кімната
              </a>
            </li>
            <li className="catalogue__list__item">
              <img
                className="catalogue__list__item__icon"
                src={chair}
                alt="menu"
              />
              <a className="catalogue__list__item__text" href="#">
                Стільці і шезлонги
              </a>
            </li>
            <li className="catalogue__list__item">
              <img
                className="catalogue__list__item__icon"
                src={feeding}
                alt="menu"
              />
              <a className="catalogue__list__item__text" href="#">
                Для годування
              </a>
            </li>
            <li className="catalogue__list__item">
              <img
                className="catalogue__list__item__icon"
                src={soap}
                alt="menu"
              />
              <a className="catalogue__list__item__text" href="#">
                Гігієна і догляд
              </a>
            </li>
            <li className="catalogue__list__item">
              <img
                className="catalogue__list__item__icon"
                src={autochair}
                alt="menu"
              />
              <a className="catalogue__list__item__text" href="#">
                Автокрісла
              </a>
            </li>
            <li className="catalogue__list__item">
              <img
                className="catalogue__list__item__icon"
                src={car}
                alt="menu"
              />
              <a className="catalogue__list__item__text" href="#">
                Дитячий транспорт
              </a>
            </li>
            <li className="catalogue__list__item">
              <img
                className="catalogue__list__item__icon"
                src={toy}
                alt="menu"
              />
              <a className="catalogue__list__item__text" href="#">
                Іграшки
              </a>
            </li>
            <li className="catalogue__list__item">
              <img
                className="catalogue__list__item__icon"
                src={clothes}
                alt="menu"
              />
              <a className="catalogue__list__item__text" href="#">
                Одяг
              </a>
            </li>
            <li className="catalogue__list__item">
              <img
                className="catalogue__list__item__icon"
                src={newIcon}
                alt="menu"
              />
              <a className="catalogue__list__item__text" href="#">
                Новий товар
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Catalogue;
