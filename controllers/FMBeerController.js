'use strict';

const FMBeer = require('../models/FMBeer');

exports.list_all_matches = (req, res) => {
  FMBeer.getAllMatches((err, match) => {
    if (err) res.send(err);
    res.send(match);
  });
};

exports.create_match = (req, res) => {
  var new_beer_match = new FMBeer(req.body);
  if (!new_beer_match.food_id) { res.status(400).send({ error: true, message: "Need a matching food ID" }); return; }
  if (!new_beer_match.beer_id) { res.status(400).send({ error: true, message: "Need a matching beer ID" }); return; }

  FMBeer.createMatch(new_beer_match, (err, match) => {
    if (err) res.send(err);
    res.json(match);
  });
};

exports.match_food_beer = (req, res) => {
  FMBeer.getMatchFoodBeer(req.params.food_type, (err, match) => {
    if (err) res.send(err);
    res.send(match);
  });
};
