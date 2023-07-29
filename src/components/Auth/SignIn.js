import React from "react";
const SignIn = ({ setisRegistered }) => {
  return (
    <>
      <h1>Вхід</h1>
      <form>
        <input name="login" type="text" placeholder="Телефон або e-mail" />
        <input name="password" type="password" placeholder="Пароль" />
        <a href="#">Забули пароль?</a>
        <button type="submit" className="button button-submit" title="Увійти в акаунт">
          Увійти
        </button>
        <button type="button" className="button button-register" title="Зареєструватись"  onClick={()=>setisRegistered(false)}>
          У мене немає акаунта
        </button>
      </form>
    </>
  );
};

export default SignIn;
