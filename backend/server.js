require('dotenv').config();
const { SERVER_PORT } = process.env;
const express = require('express');
const cors = require('cors');

const { trophiesSeed } = require('./seed');
const {
  getAllTrophies,
  addTrophyToCompleted,
  deleteUserTrophy,
  createUser,
  userLogin,
  getUserTrophies,
  clearUserTrophies,
} = require('./controller');

const app = express();

app.use(cors());
app.use(express.json());

// used to get all trophies form database
app.get('/get/trophies', getAllTrophies);

//adds trophy to usertrophy table
app.post(`/complete/trophy`, addTrophyToCompleted);

//deletes trophy from usertrophy table
app.delete(`/delete/trophy`, deleteUserTrophy);

// used to seed database with trophies
app.post('/seed', trophiesSeed);

//create new user
app.post('/create/user', createUser);

//user login
app.post(`/login/user`, userLogin);

//user logout
app.put('/clear/trophies', clearUserTrophies);

//retrieve users trophies
app.get(`/get/users/trophies:id`, getUserTrophies);

app.listen(SERVER_PORT, () => {
  console.log(`Its working!! Its working! on server ${SERVER_PORT}`);
});
