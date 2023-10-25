import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './forms.css';
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //---Destructuring---
  const { email, password } = formData;
  //---onchange handler----
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //---onsubmit handler----
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  //select store data
  const { loading, userAuth } = {};
  //redirect
  if (userAuth?.userInfo?.status) {
    window.location.href = "/admin";
  }
    return (
      <>
        <LoginCard
          email={email}
          password={password}
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
        />
      </>
    );
};


const LoginCard = ({ email, password, onChangeHandler, onSubmitHandler }) => {
  return ( 
      <div className="login__card__container">
          <div className="login__card">
              <div className="login__header">
                  <h1>Login To Your Account</h1>
              </div>
              <div className="login__inputs">
                  <div className="email__input__container input__container">
                      <label className="email__label input__label">Email</label>
                      <input
                          name="email"
                          value={email}
                          onChange={onChangeHandler}
                          type="email"
                          className="email__input login__input"
                          placeholder='example@gmail.com'
                      />
                  </div>
                  <div className="password__input__container input__container">
                      <label className="password__label input__label" >Password</label>
                      <input
                          name="password"
                          value={password}
                          onChange={onChangeHandler}
                          type="password"
                          className="password__input login__input"
                          placeholder='**********'
                      />
                  </div>
                  <div className="login__button__container">
                      <button
                          onClick={onSubmitHandler}
                          className="login__button"
                      >
                          LOGIN
                      </button>
                  </div>
              </div>
              <div className="login__other__actions">
                  <div className="login__forgot__password">Forgot password?<Link to="/forgotpassword">Click here to reset the password</Link></div>
                  <div className="login__new__account">
                      Don't have an account? <Link to="/register">Create account</Link>
                  </div>
              </div>
          </div>
      </div>
   );
}
export default Login;
