import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function RegisterUser({ submitNewUser, isUserLoggedIn }) {
  const [newUser, setNewUser] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [passwordValidation, setPasswordValidation] = useState('');
  const [passwordMessage, setPasswordMessage] = useState(' ');

  let navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn === true) {
      return navigate('/');
    }
  });

  const userInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const validatePassword = (e) => {
    e.preventDefault();
    setPasswordValidation(e.target.value);
  };

  const createUser = (e) => {
    e.preventDefault();

    if (newUser.password !== passwordValidation) {
      setPasswordMessage('Passwords do not match');
    } else if (newUser.password.length < 1) {
      setPasswordMessage('Password must be at 10 characters long');
    } else if (
      /[a-z]/.test(newUser.password) &&
      /[A-Z]/.test(newUser.password) === false
    ) {
      setPasswordMessage(
        'Password must contain one uppercase and one lowercase letter'
      );
    } else if (/\d/.test(newUser.password) === false) {
      setPasswordMessage('Password must contain at least one number');
    } else {
      setPasswordMessage('');
      submitNewUser(newUser);
    }
  };

  return (
    <div className="login-register-body">
      <div className="login-register-container">
        <form onSubmit={createUser} className="login-register-form">
          <input
            autoFocus
            onChange={userInput}
            value={newUser.userName}
            name="userName"
            className="login-register-input"
            type="text"
            placeholder="Username"
          />
          <input
            onChange={userInput}
            value={newUser.email}
            name="email"
            className="login-register-input"
            type="text"
            placeholder="Email"
          />
          <input
            onChange={userInput}
            value={newUser.password}
            name="password"
            className="login-register-input"
            // type="password"
            placeholder="Password"
          />
          <span
            style={{
              fontSize: '14px',
              width: '200px',
            }}
          >
            {passwordMessage}
          </span>

          <input
            onChange={validatePassword}
            className="login-register-input"
            // type="password"
            placeholder="Validate password"
          />
          <input className="login-register-submit" type="submit" />
          <br />
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
