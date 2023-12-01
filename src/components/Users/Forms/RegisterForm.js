import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../redux/slices/users/usersSlice";

import './forms.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { fullname, email, password } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser({ fullname, email, password }));
  };

  const { user, userAuth, error, loading } = useSelector((state) => state?.users);

  useEffect(() => {
    if (user) {
      window.location.href = "/login";
    }
  }, [user]);

  return (
    <div className="register__card__container">
      <div className="register__card">
        <div className="register__header">
          <h1>Create Account</h1>
        </div>
        <div className="register__inputs">
          <div className="fname__input__container reg__input__container">
            <label className="fname__label input__label">Full name</label>
            <input
              name="fullname"
              value={fullname}
              onChange={onChangeHandler}
              type="text"
              className="fname__input register__input"
              placeholder="Full Name"
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
