'use strict'

const db = require('../models/dbconnection'),
  express = require('express');

module.exports = function (app) {
  const cheese = require('../controllers/cheeseController');

  app.route('/api/v1/cheese')
    .get(cheese.get_cheeses)
    .post(cheese.create_cheese);

  app.route('/api/v1/cheese/texture/:texture')
    .get(cheese.get_cheese_by_texture);

  app.route('/api/v1/cheese/strength/:strength')
    .get(cheese.get_cheese_by_strength);

  app.route('/api/v1/cheese/type/:cheese_type')
    .get(cheese.get_cheese_by_type);

};
