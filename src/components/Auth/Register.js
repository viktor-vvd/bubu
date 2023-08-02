import React from "react";
import ButtonDefault from "../common/ButtonDefault";
import ButtonWhite from "../common/ButtonWhite";

const Register = ({ setisRegistered }) => {
  return (
    <>
      <h1>Реєстрація</h1>
      <form>
        <input name="name" type="text" placeholder="Ім’я" />
        <input name="phone" type="text" placeholder="Телефон" />
        <input name="email" type="text" placeholder="E-mail" />
        <input name="password" type="password" placeholder="Пароль" />
        <ButtonDefault btntype="submit" btntitle="Зареєструвати акаунт" value="Зареєструватись"/>
        <ButtonWhite btntype="button" onclick={()=>setisRegistered(true)} btntitle="Вхід в акаунт" value="У мене є акаунт"/>
      </form>
    </>
  );
};

export default Register;
