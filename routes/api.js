'use strict';

const express = require('express');
const db = require('../models/dbconnection');

module.exports = function (app) {
  const wine = require('../controllers/wineController'),
    beer = require('../controllers/beerController'),
    food = require('../controllers/foodController'),
    user = require('../controllers/userController');

  // wine
  app.route('/api/v1/wine')
    .get(wine.list_all_wines)
    .post(wine.create_wine);
  //.delete(NUKE!!!!)

  app.route('/api/v1/wine/:wine_id')
    .get(wine.get_wine_by_id)
    .put(wine.update_wine_by_id)
    .delete(wine.delete_wine_by_id); // DO NOT HAVE ANY OTHER TYPE OF DELETE!!!!

  app.route('/api/v1/wine/name/:wine_name')
    .get(wine.get_wine_by_name);

  app.route('/api/v1/wine/winery/:winery')
    .get(wine.get_wine_by_winery);

  app.route('/api/v1/wine/region/:wine_region')
    .get(wine.get_wine_by_winery);

  app.route('/api/v1/wine/like/:wine_like')
    .get(wine.get_wine_by_like);

  //beer

  app.route('/api/v1/beer')
    .get(beer.list_all_beer)
    .post(beer.create_beer);

  app.route('/api/v1/beer/:beer_id')
    .get(beer.get_beer_by_id)
    .put(beer.update_beer_by_id)
    .delete(beer.delete_beer_by_id); // DO NOT HAVE ANY OTHER TYPE OF DELETE!!!!

  /* app.route('/api/v1/beer/all/:beer_id')
    .put(beer.update_beer_all_by_id); */

  app.route('/api/v1/beer/name/:beer_name')
    .get(beer.get_beer_by_name);

  app.route('/api/v1/beer/brewery/:brewery')
    .get(beer.get_beer_by_brewery);

  app.route('/api/v1/beer/region/:beer_region')
    .get(beer.get_beer_by_region);

  // food
  app.route('/api/v1/food')
    .get(food.list_all_food)
    .post(food.create_food);

  app.route('/api/v1/food/:food_id')
    .get(food.get_food_by_id)
    //.put(food.update_food_by_id);
    .delete(food.delete_food_by_id);


  app.route('/api/v1/user/')
    .get(user.list_all_users)
    .post(user.register_user);

  app.route('/api/v1/user/id/:user_id')
    .get(user.get_user_by_id);

  app.route('/api/v1/user/id/:user_name')
    .get(user.get_user_by_un);

  app.route('/api/v1/user/password_check/:email/:password')
    .get(user.check_password);
};
