'use strict';
const bcrypt = require('bcrypt'),
  v = require('../utility/validators'),
  db = require('../models/dbconnection'),
  config = require('../config/config'),
  passport = require('passport'),
  localStrategy = require('passport-local'),
  JWTStrategy = require('passport-jwt').Strategy,
  ExtractJWT = require('passport-jwt').ExtractJwt,
  JWTSecret = config.jwt_encryption,
  rsalt = parseInt(config.roundSalt);

var User = function (user) {
  this.username = user.username;
  this.email = user.email;
  this.password = user.password;
  this.country = user.country;
  this.DOB = user.DOB;
}

// this is for admin ONLY -- we will have this under strict authentication lock and key when we go live.

User.getAllUsers = (result) => {
  console.log(rsalt);
  db.query("SELECT * from users", (err, res) => {
    if (err) result(null, err);
    else result(null, res);
  });
};

User.getUserById = (userId, result) => {
  db.query('SELECT * from users where id = ?', userId, (err, res) => {
    if (err) result(null, err);
    else result(null, res);
  });
};

User.getUserByUserName = (userName, result) => {

  db.query("Select * from users where username = ?", userName, (err, res) => {
    if (err) result(null, err);
    else result(null, res);
  });
};

User.registerUser = (newUser, result) => {

  bcrypt.genSalt(rsalt, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, pw_hash) => {
      newUser.password = pw_hash;
      db.query("INSERT INTO users SET ?", newUser, (err, res, next) => {
        if (err) {
          result(null, err);
        } else {
          result(null, res.insertId);
        }
      });
    });
  });
};

User.updateUserById = (userId, userUpdate, result) => {
  // NO UPDATES ALLOWED FOR THIS
  if (userUpdate.username) {
    // does nothing
    console.log("Once set, cannot change user names.");
  }

  if (userUpdate.password) {
    bcrypt.genSalt(rsalt, (err, salt) => {
      bcrypt.hash(userUpdate.password, salt, (err, pw_hash) => {
        userUpdate.password = pw_hash;
        db.query("UPDATE users SET password = ?", userUpdate.password, (err, res) => {
          if (err) {
            console.log(err);
          } else {
            result(null, res);
          }
        });
      });
    });
  }

  if (userUpdate.country) {
    db.query("Update users set country = ?", userUpdate.country, (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (userUpdate.DOB) {
    db.query("UPDATE users SET dob = ?", userUpdate.DOB, (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }
};


User.loginUser = (username, password, result) => {
  db.query("SELECT password from users where username = ?", [username], (err, res) => {
    if (!username || !password) {
      return res.json("Yo, need some info here!");
    }
    if (res[0].password)
      var hash = res[0].password;
    bcrypt.compare(password, hash, (error, res) => {
      db.query("SELECT email from users where password = ?", hash, (err, res) => {
        if (err) result(null, err);
        else result(null, res);
      });
    });
  });
};

User.deleteUserById = (userId, result) => {
  db.query("DELETE from users where user_id = ?", userId, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
