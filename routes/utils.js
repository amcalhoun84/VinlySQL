'use strict';

const express = require('express'),
  db = require('../models/dbconnection');

module.exports = function (app) {
  const util = require('../controllers/utilController');

  app.route('/api/v1/util/varietals') // get a list of all the varietals
    .get(util.get_varietals);
  //.post(util.add_varietal); // we got most of the relevant ones, but in case a new one if invented...

  app.route('/api/v1/util/beer_types')
    .get(util.get_beer_types);

  app.route('/api/v1/util/food_types')
    .get(util.get_food_type);

};
