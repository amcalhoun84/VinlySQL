'use strict';

const express = require('express');
const db = require('../models/dbconnection');

module.exports = function (app) {
  const wine = require('../controllers/wineController');

  app.route('/api/v1/wine')
    .get(wine.list_all_wines)
    .post(wine.create_wine);
  //.delete(NUKE!!!!)

  app.route('/api/v1/wine/:wine_id')
    .get(wine.get_wine_by_id)
    .put(wine.update_wine_by_id)
    .delete(wine.delete_wine_by_id); // DO NOT HAVE ANY OTHER TYPE OF DELETE!!!!

  // General Paths
  app.route('/api/v1/wine/name/:wine_name')
    .get(wine.get_wine_by_name);

  app.route('/api/v1/wine/varietal/:varietal')
    .get(wine.get_wine_by_varietal);

  app.route('/api/v1/wine/winery/:winery')
    .get(wine.get_wine_by_winery);

  app.route('/api/v1/wine/region/:wine_region')
    .get(wine.get_wine_by_region);

  // Combined Paths

  app.route('/api/v1/wine/winery/:winery/varietal/:varietal')
    .get(wine.get_wine_by_winery_varietal);

  app.route('/api/v1/wine/winery/:winery/vintage/:vintage/varietal/:varietal')
    .get(wine.get_winery_vintage_varietal);

  app.route('/api/v1/wine/region/:wine_region/varietal/:varietal')
    .get(wine.get_wine_varietal_and_region);

  app.route('/api/v1/wine/region/:wine_region/winery/:winery')
    .get(wine.get_wine_region_and_winery);

  app.route('/api/v1/wine/like/:wine_like')
    .get(wine.get_wine_by_like);
};
