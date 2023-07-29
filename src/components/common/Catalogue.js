import React, { useState } from "react";
import menu from "../../assets/images/menu.png";
import carriage from "../../assets/images/carriage.png";
import room from "../../assets/images/room.png";
import chair from "../../assets/images/chair.png";
import feeding from "../../assets/images/feeding.png";
import soap from "../../assets/images/soap.png";
import autochair from "../../assets/images/autochair.png";
import car from "../../assets/images/car.png";
import toy from "../../assets/images/toy.png";
import clothes from "../../assets/images/clothes.png";
import newIcon from "../../assets/images/new.png";
import "../../styles/Catalogue.css";

const Catalogue = () => {
  const [isCatalogueExpanded, setisCatalogueExpanded] = useState(true);
  return (
    <div className="catalogue-container">
      <ul
        className={"catalogue-list" + (isCatalogueExpanded ? " expanded" : "")}
      >
        <li
          className="catalogue-button"
          onClick={() => setisCatalogueExpanded(!isCatalogueExpanded)}
        >
          <img src={menu} alt="menu" />
          <span>КАТАЛОГ</span>
        </li>
        {isCatalogueExpanded && (
          <>
            <li>
              <hr />
            </li>
            <li>
              <img src={carriage} alt="menu" />
              <a href="#">Дитячі коляски</a>
            </li>
            <li>
              <img src={room} alt="menu" />
              <a href="#">Дитяча кімната</a>
            </li>
            <li>
              <img src={chair} alt="menu" />
              <a href="#">Стільці і шезлонги</a>
            </li>
            <li>
              <img src={feeding} alt="menu" />
              <a href="#">Для годування</a>
            </li>
            <li>
              <img src={soap} alt="menu" />
              <a href="#">Гігієна і догляд</a>
            </li>
            <li>
              <img src={autochair} alt="menu" />
              <a href="#">Автокрісла</a>
            </li>
            <li>
              <img src={car} alt="menu" />
              <a href="#">Дитячий транспорт</a>
            </li>
            <li>
              <img src={toy} alt="menu" />
              <a href="#">Іграшки</a>
            </li>
            <li>
              <img src={clothes} alt="menu" />
              <a href="#">Одяг</a>
            </li>
            <li>
              <img src={newIcon} alt="menu" />
              <a href="#">Новий товар</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Catalogue;
