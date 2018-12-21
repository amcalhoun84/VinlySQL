'use strict';

const Beer = require('../models/beerModel');
let db = require('../models/dbconnection');

exports.list_all_beer = (req, res) => {
  Beer.getAllBeer((err, beer) => {
    if (err)
      res.send(err);

    res.send(beer);
  });
};

exports.get_beer_by_id = (req, res) => {
  Beer.getBeerById(req.params.beer_id, (err, beer) => {
    if (err) res.send(err);
    res.send(beer);
  });
};

exports.get_beer_by_name = (req, res) => {
  Beer.getBeerByName(req.params.beer_name, (err, beer) => {
    if (err) res.send(err);
    res.send(beer);
  });
};

exports.get_beer_by_brewery = (req, res) => {
  Beer.getBeerByWinery(req.params.beer_like, (err, beer) => {
    if (err) res.send(err);
    res.send(beer);
  });
};

exports.get_beer_by_region = (req, res) => {
  Beer.getBeerByRegion(req.params.beer_region, (err, beer) => {
    if (err) res.send(err);
    res.send(beer);
  });
};

exports.get_beer_region_and_brewery = (req, res) => {
  Beer.getRegionAndBrewery(req.params.beer_region, req.params_brewery, (err, beer) => {
    if (err) res.send(err);
    res.send(beer);
  });
};

exports.get_brewery_and_type = (req, res) => {
  Beer.getBreweryAndType(req.params.brewery, req.params.beer_type, (err, beer) => {
    if (err) res.send(err);
    res.send(beer);
  });
};

exports.get_beer_by_like = (req, res) => {
  Beer.getBeerByLike(req.params.beer_like, (err, beer) => {
    if (err) res.send(err);
    res.send(beer);
  });
};

exports.create_beer = (req, res) => {
  var new_beer = new Beer(req.body);
  console.log(new_beer);
  if (!new_beer.beer_name) { res.status(400).send({ error: true, message: "Beer Names are required." }); return; }
  if (!new_beer.brewery) { res.status(400).send({ error: true, message: "Beer must be associated with a brewery" }); return; }
  if (!new_beer.beer_type) { res.status(400).send({ error: true, message: "Beer type is required." }); return; }
  if (!new_beer.region) { res.status(400).send({ error: true, message: "Beer region is required." }); return; }
  if (!new_beer.color) { res.status(400).send({ error: true, message: "Beer color is required." }); return; }
  if (!new_beer.intensity) { res.status(400).send({ error: true, message: "Beer intensity profiles are required." }); return; }
  if (!new_beer.notes) { res.status(400).send({ error: true, message: "Beer notes /are/ required." }); return; }
  if (!new_beer.description) res.status(400).send({ error: true, message: "Beer description is required." }); // This will be supplanted with a pairing join table.

  Beer.createBeer(new_beer, (err, beer) => {
    if (err) res.send(err);
    res.json(beer);
  });
};

exports.update_beer_by_id = (req, res) => {
  Beer.updateBeerById(req.params.beer_id, new Beer(req.body), (err, beer) => {
    if (err)
      res.send(err);
    res.json();
  });
};

exports.update_beer_all_by_id = (req, res) => {
  Beer.updateBeerByIdAll(req.params.beer_id, new Beer(req.body), (err, beer) => {
    if (err)
      res.send(err);
    res.json(beer);
  });
};

exports.match_beer_food = (req, res) => {
  Beer.matchBeerToFood(req.params.beer_type, (err, beer) => {
    if (err) res.send(err);
    res.json(beer);
  });
};

exports.delete_beer_by_id = (req, res) => {
  Beer.deleteBeer(req.params.beer_id, (err, beer) => {
    if (err) res.send(err);
    res.send(beer);
  });
};
