require('dotenv').config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require('sequelize');
const crypto = require('crypto');

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

//On render retrives all trophies
const getAllTrophies = (req, res) => {
  sequelize
    .query(
      `
  SELECT * 
  FROM trophiesTable
  ORDER by trophyID;`
    )
    .then((dbResults) => {
      // console.log('trophies retrived', dbResults);
      res.status(200).send(dbResults[0]);
    })
    .catch((err) => console.log(err));
};

//adds trophy to usertrophytable
const addTrophyToCompleted = (req, res) => {
  const { trophyid, userId } = req.body;

  sequelize
    .query(
      `
    insert into userTrophies (userid, trophyid)
    values ('${userId}', '${trophyid}');
    `
    )
    .then((dbResults) => {
      console.log(dbResults[0]);
      res.status(200).send('trophy complete');
    })
    .catch((err) => console.log('This is the error', err));
};

//deletes trophy from usertrophytable
const deleteUserTrophy = (req, res) => {
  const { trophyid, userId } = req.body.updateTrophiesObj;

  sequelize
    .query(
      `
    DELETE FROM userTrophies 
    WHERE userid = '${userId}'
    and trophyid = '${trophyid}';
    `
    )
    .then(() => {
      res.status(200).send('trophy deleted');
    });
};

//creates new users
const createUser = (req, res) => {
  const { userName, email, password, userId } = req.body;

  sequelize
    .query(
      `
        insert into usertable (userid, username, password, email)
        values ('${userId}', '${userName}', '${password}', '${email}');
  `
    )
    .then((dbResults) => {
      console.log(dbResults[0]);
      res.status(200).send('User created');
    })
    .catch((err) => {
      console.log('The error is right here!', err);
      res.send(err);
    });
};

//used to login user
const userLogin = (req, res) => {
  const { userNameLogin, loginPassword } = req.body;
  sequelize
    .query(
      `
  SELECT * 
  FROM usertable
  WHERE username = '${userNameLogin}' 
  `
    )
    .then((dbResults) => {
      if (dbResults[0][0] !== undefined) {
        if (dbResults[0][0].password === loginPassword) {
          res.status(200).send(dbResults[0][0].userid);
        } else if (dbResults[0][0].password !== loginPassword) {
          res.status(200).send('incorrect password');
        }
      } else {
        res.status(200).send('invalid username');
      }
    })
    .catch((err) => console.log('This is the error', err));
};

//gets all users trophies on login
const getUserTrophies = (req, res) => {
  const { id } = req.params;

  sequelize
    .query(
      `
 UPDATE trophiestable
 set completed = true
 from userTrophies
 where trophiestable.trophyid = usertrophies.trophyid
 and userid = '${id}';

 SELECT * 
 FROM trophiesTable
 ORDER by trophyID;
 
    `
    )
    .then((dbResults) => {
      res.status(200).send(dbResults[0]);
    })
    .catch((err) => console.log('This is the error', err));
};

//clears out user trophies on logout
const clearUserTrophies = (req, res) => {
  sequelize
    .query(
      `
    update trophiestable 
set completed = false 
where completed = true;
    
    `
    )
    .then(() => {
      console.log('user logged out');
    });
};

module.exports = {
  getAllTrophies,
  addTrophyToCompleted,
  createUser,
  userLogin,
  getUserTrophies,
  deleteUserTrophy,
  clearUserTrophies,
};
