'use strict';

const bcrypt = require('bcrypt'),
  v = require('../utility/validators'),
  db = require('../models/dbconnection');

var User = function (user) {
  this.username = user.username;
  this.email = user.email;
  this.password = user.password;
  this.first_name = user.first_name;
  this.middle_name = user.middle_name;
  this.last_name = user.last_name;
  this.pw_hash = user.pw_hash;

}

// this is for admin ONLY -- we will have this under strict authentication lock and key when we go live.

User.getAllUsers = function getAllUsers(result) {
  db.query("SELECT * from users", function (err, res) {
    if (err) result(null, err);
    else result(null, res);
  });
};

User.getUserById = function getUserById(userId, result) {
  db.query('SELECT * from users where id = ?', userId, function (err, res) {
    if (err) result(null, err);
    else result(null, res);
  });
};

User.getUserByUserName = function getUserByUserName(userName, result) {
  db.query("Select * from users where username = ?", userName, function (err, res) {
    if (err) result(null, err);
    else result(null, res);
  });
};

User.registerUser = function registerUser(newUser, result) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, pw_hash) {
      newUser.pw_hash = pw_hash;
      db.query("INSERT INTO users SET ?", newUser, function (err, res) {
        if (err) {
          //console.log("Error: ", err.sqlMessage);
          result(null, err);

        } else {
          result(null, res.insertId);
        }
      });
    });
  });
};

User.checkPassword = function checkPassword(email, password, result) {
  db.query("SELECT pw_hash from users where email = ? and password = ?", [email, password], function (err, rows) {
    if (!email || !password) {
      return rows.json("You need a name or password...");
    }

    var hash = rows[0].pw_hash;
    bcrypt.compare(password, hash, function (error, res) {
      db.query("SELECT * from users where email = ? and password = ? and pw_hash = ?", [email, password, hash], function (err, res) {
        if (err)
          result(null, err);
        else
          result(null, res);
      });
    });
  });
};
module.exports = User;
