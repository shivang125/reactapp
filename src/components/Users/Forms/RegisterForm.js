import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './forms.css';
const RegisterForm = () => {
  //dispatch
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  //---Destructuring---
  const { fullname, email, password } = formData;
  //---onchange handler----
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //---onsubmit handler----
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  //select store data

  //select store data
  const { loading, userAuth } = {};
  //redirect
  if (userAuth?.userInfo?.status) {
    window.location.href = "/login";
  }

  return (
    <RegisterCard
      fullname={fullname}
      email={email}
      password={password}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
      loading={loading}
      userAuth={userAuth}
    />
  );
};


const RegisterCard = ({
  fullname,
  email,
  password,
  onChangeHandler,
  onSubmitHandler,
  loading,
  userAuth,
}) => {
  return (
    <div className="register__card__container">
      <div className="register__card">
        <div className="register__header">
          <h1>Create Account</h1>
        </div>
        <div className="register__inputs">
          <div className="fname__input__container reg__input__container">
            <label className="fname__label input__label">First name</label>
            <input
              name="fullname"
              value={fullname}
              onChange={onChangeHandler}
              type="text"
              className="fname__input register__input"
              placeholder="First Name"
            />
          </div>
          <div className="lname__input__container reg__input__container">
            <label className="lname__label input__label">Last name</label>
            <input
              type="text"
              className="lname__input register__input"
              placeholder="Last Name"
            />
          </div>
          <div className="email__input__container reg__input__container">
            <label className="email__label input__label">Email</label>
            <input
              name="email"
              value={email}
              onChange={onChangeHandler}
              type="email"
              className="email__input register__input"
              placeholder='example@gmail.com'
            />
          </div>
          <div className="password__input__container reg__input__container">
            <label className="password__label input__label">Password</label>
            <input
              name="password"
              value={password}
              onChange={onChangeHandler}
              type="password"
              className="password__input register__input"
              placeholder="****************"
            />
          </div>
          <div className="register__button__container">
            <button
              onClick={onSubmitHandler}
              className="register__button"
              disabled={loading}
            >
              {loading ? "Loading..." : "Create Account"}
            </button>
          </div>
        </div>
        <div className="register__other__actions">
          <div className="register__login__account">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
