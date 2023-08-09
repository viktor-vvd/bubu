import React, { useState } from "react";
import bubuLogo from "../../assets/images/bubuLogo.png";
import FooterWaves from "../../assets/images/FooterWaves1.png";
import HeaderWaves from "../../assets/images/HeaderWaves.png";
import "../../styles/Auth.css";
import SignIn from "./SignIn";
import Register from "./Register";
import GoogleLogo from "../../assets/images/google.png";
import FacebookLogo from "../../assets/images/facebook.png";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isRegistered, setisRegistered] = useState(true);
  return (
    <div className="container-vertical auth">
      <img className="auth__waves" src={HeaderWaves} alt="Waves" />
      <div className="container-vertical page-container auth__container">
        <a onClick={() => navigate("/home")} >
          <img className="auth__logo" src={bubuLogo} alt="bubu Logo" />
        </a>
        <div className="container-vertical auth__form__container">
          {isRegistered ? (
            <SignIn setisRegistered={setisRegistered} />
          ) : (
            <Register setisRegistered={setisRegistered} />
          )}
          <div className="container-horisontal auth__divider">
            <hr className="auth__divider__line" />
            <span className="auth__divider__text">Або</span>
            <hr className="auth__divider__line" />
          </div>
          <div className="auth__alternative">
            <span className="auth__alternative__text">
              Увійти за допомогою:
            </span>
            <div className="auth__alternative__icon__wrapper">
              <img
                className="auth__alternative__icon"
                src={GoogleLogo}
                alt="Google"
                title="Увійти з Google"
              />
              <img
                className="auth__alternative__icon"
                src={FacebookLogo}
                alt="Facebook"
                title="Увійти з Facebook"
              />
            </div>
          </div>
        </div>
      </div>
      <img className="auth__waves" src={FooterWaves} alt="Waves" />
    </div>
  );
};

export default Auth;
