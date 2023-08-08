import React from "react";
import "../../styles/Footer.css";
import footerImage from "../../assets/images/footerImage.png";
import ArrowRight from "../../assets/images/salesSliderArrowRight.png";
import facebookmini from "../../assets/images/facebookmini.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import mastercard from "../../assets/images/mastercard.png";
import visa from "../../assets/images/visa.png";
import liqpay from "../../assets/images/liqpay.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-horisontal footer__top-section">
        <div className="container-horisontal page-container footer__promo__wrapper">
          <div className="container-horisontal footer__promo">
            <h2 className="headline footer__promo__header">
              Отримуйте ПРОМОКОДИ ТА
              <br />
              ЕКСКЛЮЗИВНІ ПРОПОЗИЦІЇ
            </h2>
            <form className="container-horisontal footer__promo__form">
              <input
                className="footer__promo__form__input"
                name="email"
                type="text"
                placeholder="Ваш email"
                /* onkeyup="myFunction()" */
              />
              <button className="footer__promo__form__button" type="submit">
                <img
                  className="footer__promo__form__button__icon"
                  src={ArrowRight}
                  alt="ArrowRight"
                />
              </button>
            </form>
          </div>
          <img
            className="footer__promo__image"
            src={footerImage}
            alt="mother"
          />
        </div>
      </div>
      <div className="container-horisontal footer__bottom-section">
        <div className="container-vertical page-container footer__bottom">
          <div className="container-horisontal footer__bottom__top-container">
            <div className="container-vertical footer__bottom__contacts__wrapper">
              <h3 className="headline footer__bottom__contacts__item">
                (063) 128-46-09
              </h3>
              <span className="footer__bottom__contacts__item footer__bottom__contacts__email">
                bubu.shop2018@gmail.com
              </span>
              <span className="footer__bottom__contacts__item footer__bottom__contacts__adress">
                Одеса, вул. Михайлівська 8<br />
                (щодня з 10:00 до 20:00)
              </span>
              <div className="footer__bottom__socials">
                <a href="#">
                  <img
                    className="footer__bottom__socials__icon"
                    src={instagram}
                    alt="instagram"
                  />
                </a>
                <a href="#">
                  <img
                    className="footer__bottom__socials__icon"
                    src={youtube}
                    alt="youtube"
                  />
                </a>
                <a href="#">
                  <img
                    className="footer__bottom__socials__icon"
                    src={facebookmini}
                    alt="facebook"
                  />
                </a>
              </div>
            </div>

            <div className="container-vertical footer__bottom__info__wrapper">
              <h3 className="headline footer__bottom__info__header">
                Інформація
              </h3>
              <ul className="container-vertical footer__bottom__info">
                <li>
                  <a className="footer__bottom__info__item" href="#">
                    Про нас
                  </a>
                </li>
                <li>
                  <a className="footer__bottom__info__item" href="#">
                    Контакти
                  </a>
                </li>
                <li>
                  <a className="footer__bottom__info__item" href="#">
                    Доставка і оплата
                  </a>
                </li>
                <li>
                  <a className="footer__bottom__info__item" href="#">
                    Повернення та обмін
                  </a>
                </li>
                <li>
                  <a className="footer__bottom__info__item" href="#">
                    Політика конфеденційності
                  </a>
                </li>
              </ul>
            </div>

            <div className="container-vertical footer__bottom__info__wrapper">
              <h3 className="headline footer__bottom__info__header">Каталог</h3>
              <div className="footer__bottom__info__double-container">
                <ul className="container-vertical footer__bottom__info">
                  <li>
                    <a className="footer__bottom__info__item" href="#">
                      Дитячі коляски
                    </a>
                  </li>
                  <li>
                    <a className="footer__bottom__info__item" href="#">
                      Дитяча кімната
                    </a>
                  </li>
                  <li>
                    <a className="footer__bottom__info__item" href="#">
                      Стільці і шезлонги
                    </a>
                  </li>
                  <li>
                    <a className="footer__bottom__info__item" href="#">
                      Все для годування
                    </a>
                  </li>
                  <li>
                    <a className="footer__bottom__info__item" href="#">
                      Гігієна та догляд
                    </a>
                  </li>
                </ul>
                <ul className="container-vertical footer__bottom__info">
                  <li>
                    <a className="footer__bottom__info__item" href="#">
                      Автокрісла
                    </a>
                  </li>
                  <li>
                    <a className="footer__bottom__info__item" href="#">
                      Дитячий транспорт
                    </a>
                  </li>
                  <li>
                    <a className="footer__bottom__info__item" href="#">
                      Іграшки
                    </a>
                  </li>
                  <li>
                    <a className="footer__bottom__info__item" href="#">
                      Дитячий одяг
                    </a>
                  </li>
                  <li>
                    <a className="footer__bottom__info__item" href="#">
                      Новий товар
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-vertical footer__bottom__bottom-container">
            <span className="footer__bottom__bottom-container__copyright">© Bubu 2022. Всі права захищені.</span>
            <div className="container-horisontal footer__bottom__bottom-container__paying">
              <img className="footer__bottom__bottom-container__paying__item" src={mastercard} alt="mastercard" />
              <img className="footer__bottom__bottom-container__paying__item" src={visa} alt="visa" />
              <img className="footer__bottom__bottom-container__paying__item" src={liqpay} alt="liqpay" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
