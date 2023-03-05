import React from 'react';
import RegisterUser from './components/RegisterUser';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Error from './components/Error';
import axios from 'axios';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [trophies, setTrophies] = useState([]);
  const [userLoggedinId, setUserLoggedinId] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const baseURL = 'http://localhost:4000';

  useEffect(() => {
    getAllTrophies();
  }, []);

  const getAllTrophies = () => {
    axios.get(`${baseURL}/get/trophies`).then((res) => {
      setTrophies(res.data);
      console.log('data set');
    });
  };

  const updateUserTrophies = (trophy) => {
    const updateTrophiesObj = {
      trophyid: trophy.trophyid,
      userId: userLoggedinId,
    };

    if (trophy.completed === true) {
      axios.delete(`http://localhost:4000/delete/trophy`, {
        data: { updateTrophiesObj },
      });
    } else {
      console.log('add');
      axios
        .post(`http://localhost:4000/complete/trophy`, updateTrophiesObj)
        .then((res) => {});
    }
  };

  const completeTrophy = (id) => {
    setTrophies(
      trophies.map((item) => {
        if (item.trophyid === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  };

  //create new user
  const submitNewUser = (body) => {
    const id = Math.floor(Math.random() * 100000 + 1);
    body = { ...body, userId: id };

    const loginObj = {
      userNameLogin: body.userName,
      loginPassword: body.password,
    };

    if (body.userName === '') {
      alert('Username is required');
    } else if (body.email === '') {
      alert('Email is required');
    } else {
      axios.post(`http://localhost:4000/create/user`, body).then((res) => {
        if (res.data === 'User created') {
          loginUser(loginObj);
        } else if (res.data.errors[0].message === 'username must be unique') {
          alert('Username is already in use');
        } else if (res.data.errors[0].message === 'email must be unique') {
          alert('Email is already registered to a different user');
        }
      });
    }
  };

  //login user
  const loginUser = (user) => {
    axios.post(`http://localhost:4000/login/user`, user).then((res) => {
      if (res.data === 'invalid username') {
        alert('Username is not registered');
      } else if (res.data === 'incorrect password') {
        alert('Password is incorrect');
      } else {
        setUserLoggedinId(res.data);
        setIsUserLoggedIn(true);
        getUserTrophies(res.data);
      }
    });
  };

  const getUserTrophies = (userId) => {
    axios.get(`/get/users/trophies${userId}`).then((res) => {
      setTrophies(res.data);
    });
  };

  //logout user
  const logout = () => {
    setUserLoggedinId('');
    setIsUserLoggedIn(false);
    axios.put(`${baseURL}/clear/trophies`);
    setTrophies([]);
    axios.get(`${baseURL}/get/trophies`).then((res) => {
      setTrophies(res.data);
      console.log('data set');
    });
  };

  return (
    <Router>
      <div className="header">
        <h2>
          <Link className="link" to="/">
            Home
          </Link>
        </h2>
        <nav>
          <ul className="nav-list">
            <li>
              <Link
                className={isUserLoggedIn ? 'logged-in-toggle' : 'link'}
                to="/login"
              >
                login
              </Link>
            </li>

            <li>
              <Link
                className={isUserLoggedIn ? 'logged-in-toggle' : 'link'}
                to="/register"
              >
                sign up
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                className={
                  isUserLoggedIn ? 'logged-out-btn' : 'logged-in-toggle'
                }
              >
                Log out
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              completeTrophy={completeTrophy}
              trophies={trophies}
              updateUserTrophies={updateUserTrophies}
              isUserLoggedIn={isUserLoggedIn}
            />
          }
        />

        <Route
          path="/login"
          element={
            <SignIn loginUser={loginUser} isUserLoggedIn={isUserLoggedIn} />
          }
        />
        <Route
          path="/register"
          element={
            <RegisterUser
              isUserLoggedIn={isUserLoggedIn}
              submitNewUser={submitNewUser}
            />
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
