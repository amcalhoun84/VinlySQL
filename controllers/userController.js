'use strict';

const bcrypt = require('bcrypt'),
  User = require('../models/userModel'),
  db = require('../models/dbconnection'),
  v = require('../utility/validators');


exports.list_all_users = (req, res) => {
  User.getAllUsers((err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};
exports.get_user_by_id = (req, res) => {
  User.getUserById((err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};

exports.get_user_by_un = (req, res) => {
  User.getUserByUserName((err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};


exports.register_user = (req, res) => {
  var new_user = new User(req.body);
  new_user.DOB = v.parseDOB(new_user.DOB);

  console.log(new_user);

  if (!v.isValidEmail(new_user.email)) {
    res.status(400).send({
      error: true, message: "BAD USER EMAIL"
    });
    return;
  }
  if (!v.isValidId(new_user.username)) {
    res.res.status(400).send({
      error: true, message: "BAD USER ID"
    });
    return;
  }/*
  if (!v.isValidPassword(new_user.password)) {
    res.status(400).send({
      error: true, message: "BAD USER PASSWORD"
    });
    return; */
  //}
  if (!new_user.username) { res.status(400).send({ error: true, message: "User needs a user name!" }); return; }
  if (!new_user.email) { res.status(400).send({ error: true, message: "User needs an email." }); return; }
  if (!new_user.password) { res.status(400).send({ error: true, message: "User needs a password!" }); return; }
  if (!new_user.country) { res.status(400).send({ error: true, message: "User needs a home country!" }); return; }
  if (!new_user.DOB) { res.status(400).send({ error: true, message: "User needs a DOB!" }); return; }

  else {
    User.registerUser(new_user, (err, user) => {
      if (err)
        res.send(err);
      console.log("User: ", user);
      res.json(user);
    });
  }
};

exports.login_user = (req, res) => {
  User.loginUser(req.body.username, req.body.password,
    (err, user) => {
      if (err) res.send(err);
      res.send(user);
    });
};

exports.delete_user_by_id = (req, res) => {
  User.deleteUserById(req.params.user_id, (err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};
