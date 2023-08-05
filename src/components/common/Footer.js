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
      <div className="container-horisontal promo-subscription-container">
        <div className="container-horisontal promo-subscription-wrapper page-container">
          <div className="container-horisontal promo-subscription">
            <h2>
              Отримуйте ПРОМОКОДИ ТА
              <br />
              ЕКСКЛЮЗИВНІ ПРОПОЗИЦІЇ
            </h2>
            <form className="container-horisontal promo-subscription-form">
              <input
                name="email"
                type="text"
                placeholder="Ваш email"
                /* onkeyup="myFunction()" */
              />
              <button type="submit">
                <img src={ArrowRight} alt="ArrowRight" />
              </button>
            </form>
          </div>
          <img className="footer-image" src={footerImage} alt="mother" />
        </div>
      </div>
      <div className="container-horisontal footer-container">
        <div className="container-vertical page-container">
          <div className="container-horisontal footer-middle-container">
            <div className="container-vertical contacts-wrapper">
              <h3>(063) 128-46-09</h3>
              <span className="email">bubu.shop2018@gmail.com</span>
              <span>
                Одеса, вул. Михайлівська 8<br />
                (щодня з 10:00 до 20:00)
              </span>
              <div className="socials-container">
                <a href="#" className="socials-logo">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="#" className="socials-logo">
                  <img src={youtube} alt="youtube" />
                </a>
                <a href="#" className="socials-logo">
                  <img src={facebookmini} alt="facebook" />
                </a>
              </div>
            </div>

            <div className="container-vertical info-wrapper">
              <h3>Інформація</h3>
              <ul className="container-vertical info-container">
                <li>
                  <a href="#">Про нас</a>
                </li>
                <li>
                  <a href="#">Контакти</a>
                </li>
                <li>
                  <a href="#">Доставка і оплата</a>
                </li>
                <li>
                  <a href="#">Повернення та обмін</a>
                </li>
                <li>
                  <a href="#">Політика конфеденційності</a>
                </li>
              </ul>
            </div>

            <div className="container-vertical info-wrapper">
              <h3>Каталог</h3>
              <div>
                <ul className="container-vertical info-container">
                  <li>
                    <a href="#">Дитячі коляски</a>
                  </li>
                  <li>
                    <a href="#">Дитяча кімната</a>
                  </li>
                  <li>
                    <a href="#">Стільці і шезлонги</a>
                  </li>
                  <li>
                    <a href="#">Все для годування</a>
                  </li>
                  <li>
                    <a href="#">Гігієна та догляд</a>
                  </li>
                </ul>
                <ul className="container-vertical info-container">
                  <li>
                    <a href="#">Автокрісла</a>
                  </li>
                  <li>
                    <a href="#">Дитячий транспорт</a>
                  </li>
                  <li>
                    <a href="#">Іграшки</a>
                  </li>
                  <li>
                    <a href="#">Дитячий одяг</a>
                  </li>
                  <li>
                    <a href="#">Новий товар</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-vertical footer-bottom-container">
            <span>© Bubu 2022. Всі права захищені.</span>
            <div className="container-horisontal">
                <img src={mastercard} alt="mastercard" />
                <img src={visa} alt="visa" />
                <img src={liqpay} alt="liqpay" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
