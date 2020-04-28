/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import auth from "../Auth/auth";

const LoginPage = (props) => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  let emailField = emailFocus
      ? "form-group form-focus focused"
      : "form-group form-focus",
    passField = passFocus
      ? "form-group form-focus focused"
      : "form-group form-focus";

  return (
    <>
      <div className="account-page">
        <div className="container">
          <h3 className="account-title">DigitBazar Login</h3>
          <div className="account-box">
            <div className="account-wrapper">
              <div className="account-logo">
                <a href="/">
                  <img src="/img/logo2.png" alt="Focus Technologies" />
                </a>
              </div>
              <form
                action="#"
                onSubmit={(e) => {
                  e.preventDefault();
                  auth.login(() => {
                    props.history.push("/");
                  });
                }}
              >
                <div className={emailField}>
                  <label className="control-label">Username or Email</label>
                  <input
                    className="form-control floating"
                    type="text"
                    onFocus={(e) => setEmailFocus(true)}
                  />
                </div>
                <div className={passField}>
                  <label className="control-label">Password</label>
                  <input
                    className="form-control floating"
                    type="password"
                    onFocus={(e) => setPassFocus(true)}
                  />
                </div>
                <div className="form-group text-center">
                  <button
                    className="btn btn-primary btn-block account-btn"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center">
                  <a href="#">Forgot your password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
