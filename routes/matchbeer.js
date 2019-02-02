'use strict';

const express = require('express');
const db = require('../models/dbconnection');

module.exports = function (app) {
  const beerMatch = require('../controllers/FMBeerController');

  app.route('/api/v1/match/beer/')
    .get(beerMatch.list_all_matches)
    .post(beerMatch.create_match);

  app.route('/api/v1/match/beer/:food_type')
    .get(beerMatch.match_food_beer);


};
