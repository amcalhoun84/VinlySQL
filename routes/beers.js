'use strict';

const express = require('express');
const db = require('../models/dbconnection');

module.exports = function (app) {
  const beer = require('../controllers/beerController');

  app.route('/api/v1/beer')
    .get(beer.list_all_beer)
    .post(beer.create_beer);
  //.delete(NUKE!!!!);

  app.route('/api/v1/beer/:beer_id')
    .get(beer.get_beer_by_id)
    .put(beer.update_beer_by_id)
    .delete(beer.delete_beer_by_id); // DO NOT HAVE ANY OTHER TYPE OF DELETE!!!!

  app.route('/api/v1/beer/all/:beer_id')
    .put(beer.update_beer_all_by_id);

  app.route('/api/v1/beer/name/:beer_name')
    .get(beer.get_beer_by_name);

  app.route('/api/v1/beer/brewery/:brewery')
    .get(beer.get_beer_by_brewery);

  app.route('/api/v1/beer/region/:beer_region')
    .get(beer.get_beer_by_region);

  app.route('/api/v1/beer/region/:beer_region/brewery/:brewery')
    .get(beer.get_beer_region_and_brewery);

  app.route('/api/v1/beer/brewery/:brewery/type/:beer_type')
    .get(beer.get_brewery_and_type);

  app.route('/api/v1/beer/match/:beer_type')
    .get(beer.match_beer_food);
};
