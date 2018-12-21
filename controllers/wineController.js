'use strict';

const Wine = require('../models/wineModel');
let db = require('../models/dbconnection');

exports.list_all_wines = (req, res) => {
  Wine.getAllWines((err, wine) => {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.get_wine_by_id = (req, res) => {
  Wine.getWineById(req.params.wine_id, (err, wine) => {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.get_wine_by_name = (req, res) => {
  Wine.getWineByName(req.params.wine_name, (err, wine) => {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.get_wine_by_winery = (req, res) => {
  Wine.getWineByWinery(req.params.winery, (err, wine) => {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.get_wine_by_region = (req, res) => {
  Wine.getWineByRegion(req.params.wine_region, (err, wine) => {
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

exports.get_wine_varietal_and_region = (req, res) => {
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

exports.get_wine_by_like = (req, res) => {
  Wine.getWineByLike(req.params.wine_like, (err, wine) => {
    if (err) res.send(err);
    res.send(wine);
  });
};

exports.create_wine = (req, res) => {
  var new_wine = new Wine(req.body);
  if (!new_wine.wine_name) { res.status(400).send({ error: true, message: "Wine Names is required." }); return; }
  if (!new_wine.winery) { res.status(400).send({ error: true, message: "Wine must be associated with a winery" }); return; }
  if (!new_wine.vintage) { res.status(400).send({ error: true, message: "Wine Vintage is required." }); return; }
  if (!new_wine.region) { res.status(400).send({ error: true, message: "Wine Region is required." }); return; }
  if (!new_wine.varietal) { res.status(400).send({ error: true, message: "Wine Varietal is required." }); return; }
  if (!new_wine.flavor_profile) { res.status(400).send({ error: true, message: "Wine flavor profiles are required." }); return; }
  if (!new_wine.notes) { res.status(400).send({ error: true, message: "Wine notes /are/ required." }); return; }
  if (!new_wine.body) { res.status(400).send({ error: true, message: "Wine body is required." }); return; }
  if (!new_wine.description) { res.status(400).send({ error: true, message: "Wine description is required." }); return; }

  Wine.createWine(new_wine, (err, wine) => {
    if (err) res.send(err);
    res.json(wine);
  });
};

exports.update_wine_by_id = (req, res) => {
  Wine.updateWineById(req.params.wine_id, new Wine(req.body), (err, wine) => {
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

exports.delete_wine_by_id = (req, res) => {
  Wine.deleteWineById(req.params.wine_id, (err, wine) => {
    if (err) res.send(err)
    res.send(wine);
  });
};
