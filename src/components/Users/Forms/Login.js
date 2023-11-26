import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUserAction } from "../../../redux/slices/users/usersSlice";

import './forms.css';

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserAction({ email, password }));
  };

  const { loading, userAuth } = useSelector((state) => state?.users?.userAuth);

  useEffect(() => {
    if (userAuth?.userInfo?.status) {
      if (userAuth?.userInfo?.role === "admin") {
        history.push("/admin");
      } else {
        history.push("/");
      }
    }
  }, [userAuth, history]);

  return (
    <>
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
                placeholder="example@gmail.com"
              />
            </div>
            <div className="password__input__container input__container">
              <label className="password__label input__label">Password</label>
              <input
                name="password"
                value={password}
                onChange={onChangeHandler}
                type="password"
                className="password__input login__input"
                placeholder="**********"
              />
            </div>
            <div className="login__button__container">
              <button onClick={onSubmitHandler} className="login__button">
                LOGIN
              </button>
            </div>
          </div>
          <div className="login__other__actions">
            <div className="login__forgot__password">
              Forgot password?{" "}
              <Link to="/forgotpassword">Click here to reset the password</Link>
            </div>
            <div className="login__new__account">
              Don't have an account? <Link to="/register">Create account</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
