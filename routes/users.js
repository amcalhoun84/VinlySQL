'use strict'

const express = require('express');
const db = require('../models/dbconnection');


module.exports = function (app) {
  const user = require('../controllers/userController');

  app.route('/api/v1/user/')
    .get(user.list_all_users)
    .post(user.register_user);

  app.route('/api/v1/user/id/:user_id')
    .get(user.get_user_by_id)
    .delete(user.delete_user_by_id);

  app.route('/api/v1/user/id/:user_name')
    .get(user.get_user_by_un);

  app.route('/api/v1/user/login/')
    .post(user.login_user);


};
