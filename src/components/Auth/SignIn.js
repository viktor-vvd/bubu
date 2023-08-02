import React from "react";
import ButtonDefault from "../common/ButtonDefault";
import ButtonWhite from "../common/ButtonWhite";
const SignIn = ({ setisRegistered }) => {
  return (
    <>
      <h1>Вхід</h1>
      <form>
        <input name="login" type="text" placeholder="Телефон або e-mail" />
        <input name="password" type="password" placeholder="Пароль" />
        <a href="#">Забули пароль?</a>
        <ButtonDefault btntype="submit" btntitle="Увійти в акаунт" value="Увійти"/>
        <ButtonWhite btntype="button" onclick={()=>setisRegistered(false)} btntitle="Зареєструватись" value="У мене немає акаунта"/>
      </form>
    </>
  );
};

export default SignIn;
