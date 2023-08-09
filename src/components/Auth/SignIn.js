import React from "react";
import ButtonDefault from "../common/elements/ButtonDefault";
import ButtonWhite from "../common/elements/ButtonWhite";
const SignIn = ({ setisRegistered }) => {
  return (
    <>
      <h1 className="headline">Вхід</h1>
      <form className="container-vertical auth__form">
        <input className="auth__form__input" name="login" type="text" placeholder="Телефон або e-mail" />
        <input className="auth__form__input" name="password" type="password" placeholder="Пароль" />
        <a className="auth__link" href="#">Забули пароль?</a>
        <ButtonDefault className="auth__button" btntype="submit" btntitle="Увійти в акаунт" value="Увійти"/>
        <ButtonWhite className="auth__button" btntype="button" onclick={()=>setisRegistered(false)} btntitle="Зареєструватись" value="У мене немає акаунта"/>
      </form>
    </>
  );
};

export default SignIn;
