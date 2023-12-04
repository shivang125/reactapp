
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './forms.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Send a password reset request to the server.
    try {
      // Replace this with your actual API call.
      // Example:
      // const response = await fetch('/api/forgot-password', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email }),
      // });

      // Handle the response here.
      // if (response.ok) {
      //   setIsEmailSent(true);
      // } else {
      //   // Handle errors and display an error message.
      // }
    } catch (error) {
      // Handle network or other errors.
      console.error(error);
    }
  };

  return (
    <div className="forgot-password__container">
      <div className="forgot-password__card">
        <div className="forgot-password__header">
          <h1>Forgot Password</h1>
        </div>
        <div className="forgot-password__inputs">
          {!isEmailSent ? (
            <form onSubmit={onSubmitHandler}>
              <div className="email__input__container input__container">
                <label className="email__label input__label">Email</label>
                <input
                  type="email"
                  className="email__input forgot-password__input"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="forgot-password__button__container">
                <button className="forgot-password__button">Submit</button>
              </div>
            </form>
          ) : (
            <div className="forgot-password__success-message">
              Password reset instructions sent to your email.
            </div>
          )}
        </div>
        <div className="forgot-password__other__actions">
          <div className="back-to-login">
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
