import React from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function SignIn({ loginUser, isUserLoggedIn }) {
  const [loginInput, setLoginInput] = useState({
    userNameLogin: '',
    loginPassword: '',
  });

  let navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn === true) {
      return navigate('/');
    }
  });

  const userInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginInput({
      ...loginInput,
      [name]: value,
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    loginUser(loginInput);
  };

  return (
    <div className="login-register-body">
      <div className="login-register-container">
        <form onSubmit={loginSubmit} className="login-register-form">
          <input
            autoFocus
            value={loginInput.userNameLogin}
            name="userNameLogin"
            onChange={userInput}
            className="login-register-input"
            type="text"
            placeholder="Username"
          />
          <input
            value={loginInput.loginPassword}
            name="loginPassword"
            onChange={userInput}
            className="login-register-input"
            type="text"
            // type='password'
            placeholder="Password"
          />
          <input className="login-register-submit" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default SignIn;
