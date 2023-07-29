import React, { useState } from "react";
import bubuLogo from "../../assets/images/bubuLogo.png";
import FooterWaves from "../../assets/images/FooterWaves1.png";
import HeaderWaves from "../../assets/images/HeaderWaves.png";
import "../../styles/Auth.css";
import SignIn from "./SignIn";
import Register from "./Register";
import GoogleLogo from "../../assets/images/google.png";
import FacebookLogo from "../../assets/images/facebook.png";


const Auth = () => {
  const [isRegistered, setisRegistered] = useState(true);
  return (
    <div className="container-vertical auth">
      <img className="header-footer" src={HeaderWaves} alt="Waves" />
      <div className="container-vertical auth-container">
        <img className="logo" src={bubuLogo} alt="bubu Logo" />
        <div className="form-container">
          {isRegistered ? (
            <SignIn setisRegistered={setisRegistered} />
          ) : (
            <Register setisRegistered={setisRegistered} />
          )}
          <div className="divider">
            <hr />
            <span>Або</span>
            <hr />
          </div>
          <div className="other-sign-in">
            <span>Увійти за допомогою:</span>
            <div>
              <img src={GoogleLogo} alt="Google" title="Увійти з Google" />
              <img src={FacebookLogo} alt="Facebook" title="Увійти з Facebook" />
            </div>
          </div>
        </div>
      </div>
      <img className="header-footer" src={FooterWaves} alt="Waves" />
    </div>
  );
};

export default Auth;
