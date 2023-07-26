import React from "react";

const Register = ({ setisRegistered }) => {
  return (
    <>
      <h1>Реєстрація</h1>
      <form>
        <input name="name" type="text" placeholder="Ім’я" />
        <input name="phone" type="text" placeholder="Телефон" />
        <input name="email" type="text" placeholder="E-mail" />
        <input name="password" type="password" placeholder="Пароль" />
        <button type="submit" className="auth_SubmitButton auth_Button" title="Зареєструвати акаунт">
          Зареєструватись
        </button>
        <button type="button" className="auth_RegisterButton auth_Button" title="Вхід в акаунт" onClick={()=>setisRegistered(true)}>
          У мене є акаунт
        </button>
      </form>
    </>
  );
};

export default Register;
