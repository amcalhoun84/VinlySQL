'use strict';

const FMWine = require('../models/FMWine');

exports.list_all_matches = (req, res) => {
  FMWine.getAllMatches((err, match) => {
    if (err) res.send(err);
    res.send(match);
  });
};

exports.create_match = (req, res) => {
  var new_wine_match = new FMWine(req.body);
  if (!new_wine_match.food_id) { res.status(400).send({ error: true, message: "Need a matching food ID" }); return; }
  if (!new_wine_match.wine_id) { res.status(400).send({ error: true, message: "Need a matching wine ID" }); return; }

  FMWine.createMatch(new_wine_match, (err, match) => {
    if (err) res.send(err);
    res.send(match);
  });
};

exports.match_food_wine = (req, res) => {
  FMWine.getMatchFoodWine(req.params.food_type, (err, match) => {
    if (err) res.send(err);
    res.send(match);
  });
};
