'use strict';

const Wine = require('../models/wineModel');
let db = require('../models/dbconnection');

exports.list_all_wines = function (req, res) {
  Wine.getAllWines(function (err, wine) {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.get_wine_by_id = function (req, res) {
  Wine.getWineById(req.params.wine_id, function (err, wine) {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.get_wine_by_name = function (req, res) {
  Wine.getWineByName(req.params.wine_name, function (err, wine) {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.get_wine_by_winery = function (req, res) {
  Wine.getWineByWinery(req.params.winery, function (err, wine) {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.get_wine_by_region = function (req, res) {
  Wine.getWineByRegion(req.params.wine_region, function (err, wine) {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.get_wine_by_varietal = (req, res) => {
  Wine.getWineByVarietal(req.params.varietal, (err, wine) => {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.get_wine_by_winery_varietal = (req, res) => {
  Wine.getWineryVarietal(req.params.winery, req.params.varietal, (err, wine) => {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.get_winery_vintage_varietal = (req, res) => {
  Wine.getWineryVarietal(req.params.winery, req.params.vintage, req.params.varietal, (err, wine) => {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.get_wine_varietal_and_region = function (req, res) {
  Wine.getRegionAndVarietal(req.params.wine_region, req.params.varietal, (err, wine) => {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.get_wine_region_and_winery = (req, res) => {
  Wine.getRegionAndWinery(req.params.wine_region, req.params.winery, (err, wine) => {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.get_wine_by_like = function (req, res) {
  Wine.getWineByLike(req.params.wine_like, function (err, wine) {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.create_wine = function (req, res) {
  var new_wine = new Wine(req.body);
  if (!new_wine.wine_name) res.status(400).send({ error: true, message: "Wine Names is required." });
  else if (!new_wine.winery) res.status(400).send({ error: true, message: "Wine must be associated with a winery" });
  else if (!new_wine.vintage) res.status(400).send({ error: true, message: "Wine Vintage is required." });
  else if (!new_wine.varietal) res.status(400).send({ error: true, message: "Wine Varietal is required." });
  else if (!new_wine.flavor_profile) res.status(400).send({ error: true, message: "Wine flavor profiles are required." });
  else if (!new_wine.notes) res.status(400).send({ error: true, message: "Wine notes /are/ required." });
  else if (!new_wine.body) res.status(400).send({ error: true, message: "Wine body is required." });
  else if (!new_wine.description) res.status(400).send({ error: true, message: "Wine description is required." });


  else {
    Wine.createWine(new_wine, function (err, wine) {
      if (err) res.send(err);
      res.json(wine);
    });
  }
};

exports.update_wine_by_id = function (req, res) {
  Wine.updateWineById(req.params.wine_id, new Wine(req.body), function (err, wine) {
    if (err)
      res.send(err);
    res.json(wine);
  });
};

exports.match_wine_food = (req, res) => {
  Wine.matchWineToFood(req.params.varietal, (err, wine) => {
    if (err) res.send(err);
    res.json(wine);
  });
};

exports.delete_wine_by_id = function (req, res) {
  Wine.deleteWineById(req.params.wine_id, function (err, wine) {
    if (err) res.send(err)
    res.send(wine);
  });
};
