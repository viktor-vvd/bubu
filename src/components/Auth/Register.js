import React from "react";
import ButtonDefault from "../common/ButtonDefault";
import ButtonWhite from "../common/ButtonWhite";

const Register = ({ setisRegistered }) => {
  return (
    <>
      <h1 className="headline">Реєстрація</h1>
      <form className="container-vertical auth__form">
        <input className="auth__form__input" name="name" type="text" placeholder="Ім’я" />
        <input className="auth__form__input" name="phone" type="text" placeholder="Телефон" />
        <input className="auth__form__input" name="email" type="text" placeholder="E-mail" />
        <input className="auth__form__input" name="password" type="password" placeholder="Пароль" />
        <ButtonDefault className="auth__button" btntype="submit" btntitle="Зареєструвати акаунт" value="Зареєструватись"/>
        <ButtonWhite className="auth__button" btntype="button" onclick={()=>setisRegistered(true)} btntitle="Вхід в акаунт" value="У мене є акаунт"/>
      </form>
    </>
  );
};

export default Register;
