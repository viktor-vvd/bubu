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
    <div className="container auth">
      <img className="auth_Waves" src={HeaderWaves} alt="Waves" />
      <div className="container auth_Container">
        <img className="auth_Logo" src={bubuLogo} alt="bubu Logo" />
        <div className="auth_SignInRegisterContainer">
          {isRegistered ? (
            <SignIn setisRegistered={setisRegistered} />
          ) : (
            <Register setisRegistered={setisRegistered} />
          )}
          <div className="auth_Divider">
            <hr />
            <span>Або</span>
            <hr />
          </div>
          <div className="auth_OtherSignUp">
            <span>Увійти за допомогою:</span>
            <div>
              <img src={GoogleLogo} alt="Google" title="Увійти з Google" />
              <img src={FacebookLogo} alt="Facebook" title="Увійти з Facebook" />
            </div>
          </div>
        </div>
      </div>
      <img className="auth_Waves" src={FooterWaves} alt="Waves" />
    </div>
  );
};

export default Auth;
