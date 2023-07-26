import React from "react";
const SignIn = ({ setisRegistered }) => {
  return (
    <>
      <h1>Вхід</h1>
      <form>
        <input name="login" type="text" placeholder="Телефон або e-mail" />
        <input name="password" type="password" placeholder="Пароль" />
        <a href="#">Забули пароль?</a>
        <button type="submit" className="auth_SubmitButton auth_Button" title="Увійти в акаунт">
          Увійти
        </button>
        <button type="button" className="auth_RegisterButton auth_Button" title="Зареєструватись"  onClick={()=>setisRegistered(false)}>
          У мене немає акаунта
        </button>
      </form>
    </>
  );
};

export default SignIn;
