import React from "react";
import "./userlogin.css";

const Userlogin = () => {
  const clickHandler = () => {
    console.log("Button clicked");
  };

  const emailAlertHandler = () => {
    console.log(`E-mail üçün: "Yalnız .ru domenlərinə icazə verilir.`);
  };

  const passwordAlertHandler = () => {
    console.log(`Şifrə üçün: "Ən azı 8 simvol"`);
  };

  return (
    <>
      <form action="">
        <input
          onClick={emailAlertHandler}
          type="email"
          name="email"
          id="email-input"
        />
        <input
          onClick={passwordAlertHandler}
          type="password"
          name="password"
          id="password-input"
        />
        <button onClick={clickHandler} type="button" className="submit-btn">
          Login
        </button>
      </form>
    </>
  );
};

export default Userlogin;
