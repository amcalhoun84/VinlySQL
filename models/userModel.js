'use strict';

const bcrypt = require('bcrypt'),
  v = require('../utility/validators'),
  db = require('../models/dbconnection');

var User = function (user) {
  this.username = user.username;
  this.email = user.email;
  this.password = user.password;
  //this.country = user.country;
  //this.DOB = user.DOB;
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
  console.log(newUser);
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, pw_hash) {
      newUser.password = pw_hash;
      db.query("INSERT INTO users SET ?", newUser, function (err, res, next) {
        if (err) {
          console.log(err);
        } else {
          result(null, res.insertId);
        }
      });
    });
  });
};

User.updateUserById = function updateUserById(userId, userUpdate, result) {
  // NO UPDATES ALLOWED FOR THIS
  if (userUpdate.username) {
    // does nothing
    console.log("Once set, cannot change user names.");
  }

  if (userUpdate.password) {
    /* run it through the hasher.
      HASHING CODE GOES HERE */
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(userUpdate.password, salt, function (err, pw_hash) {
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

// to be deprecated in v2
/* User.checkPassword = function checkPassword(username, password, result) {

  var hash;
  db.query("select password from users where username = ?", username, function (err, res) {
    if (err) console.log(err);
    else {
      hash = res[0].password;

      bcrypt.compare(password, hash, function (err, res) {
        if (err) console.log(err);
        if (res) {
          db.query("SELECT * from users where username = ? and password = ?", [username, hash], function (err, res) {
            if (err)
              result(null, err);
            else
              result(null, res);
          });
        } else {
          console.log("No match found???");
        }
      });
    }
  });
}; */

User.loginUser = function loginUser(username, password, result) {
  db.query("SELECT password from users where username = ?", [username], function (err, res) {
    if (!username || !password) {
      return res.json("Yo, need some info here!");
    }
    if (res[0].password)
      var hash = res[0].password;
    bcrypt.compare(password, hash, function (error, res) {
      db.query("SELECT email from users where password = ?", hash, (err, res) => {
        if (err) result(null, err);
        else result(null, res);
      });
    });
  });
};

User.deleteUserById = function deleteUserById(userId, result) {
  db.query("DELETE from users where user_id = ?", userId, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
}

module.exports = User;
