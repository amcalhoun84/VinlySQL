'use strict';

const express = require('express');
const db = require('../models/dbconnection');

module.exports = function (app) {
  const wineMatch = require('../controllers/FMWineController');

  app.route('/api/v1/match/wine/')
    .get(wineMatch.list_all_matches)
    .post(wineMatch.create_match);

  app.route('/api/v1/match/wine/:food_type')
    .get(wineMatch.match_food_wine);


};
