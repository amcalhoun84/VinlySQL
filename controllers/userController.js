'use strict';

const bcrypt = require('bcrypt');
const User = require('../models/userModel');
let db = require('../models/dbconnection');


exports.list_all_users = function (req, res) {
  User.getAllUsers((err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};
exports.get_user_by_id = function (req, res) {
  User.getUserById((err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};

exports.get_user_by_un = function (req, res) {
  User.getUserByUserName((err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};


exports.register_user = function (req, res) {
  var new_user = new User(req.body);
  if (!new_user.username) res.status(400).send({ error: true, message: "User needs a user name!" });
  if (!new_user.email) res.status(400).send({ error: true, message: "User needs an email." });
  if (!new_user.password) res.status(400).send({ error: true, message: "User needs a password!" });
  if (!new_user.first_name) res.status(400).send({ error: true, message: "User needs a first name!" });
  if (!new_user.last_name) res.status(400).send({ error: true, message: "User needs a last name!" });

  else {
    User.registerUser(new_user, (err, user) => {
      if (err)
        res.send(err);
      res.json(user);
    });
  }
};

exports.check_password = function (req, res) {
  User.checkPassword(req.params.email, req.params.password, function (err, user) {
    if (err) res.send(err);
    res.send(user);
  });
};
