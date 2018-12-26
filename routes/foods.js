'use strict'

const express = require('express');
const db = require('../models/dbconnection');

module.exports = function (app) {
  const food = require('../controllers/foodController');

  app.route('/api/v1/food')
    .get(food.list_all_food)
    .post(food.create_food);

  app.route('/api/v1/food/:food_id')
    .get(food.get_food_by_id)
    //.put(food.update_food_by_id);
    .delete(food.delete_food_by_id);

  app.route('/api/v1/food/match/beer/:food_type')
    .get(food.match_food_beer);

  app.route('/api/v1/food/match/wine/:food_type')
    .get(food.match_food_wine);
};
