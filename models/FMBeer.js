'use strict';

const db = require('./dbconnection');
/* const { FoodMatch, sequelize } = ('./sequelize'); */

const foodBeerMatch = function (match) {
  this.beer_id = match.beer_id;
  this.food_id = match.food_id;
};

foodBeerMatch.getAllMatches = result => {
  db.query("SELECT * from beer_food_pairing", (err, res) => {
    if (err) result(null, err);
    else result(null, res);
  });
};

foodBeerMatch.createMatch = (newMatch, result) => {
  db.query("INSERT INTO beer_food_pairing SET ?", newMatch, (err, res) => {
    if (err) result(null, err);
    else result(null, res.resultId);
  });
};

// REMATCH WITH FOOD

foodBeerMatch.getMatchFoodBeer = (foodType, result) => {
  db.query("SELECT * from util_beer_type b left join beer_food_pairing bfp on b.beer_type_id = bfp.beer_id left join util_food_type f on f.food_type_id = bfp.food_id where food_type = ?", foodType, (err, res) => {
    if (err) result(null, err);
    else result(null, res);
  })
};

module.exports = foodBeerMatch;


/* module.exports = (sequelize, type) => {
  return sequelize.define('wine_food_pairing', {
    wine_pairing_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    wine_id: type.INTEGER,
    food_id: type.INTEGER
  });
};

FoodMatch.get_all_wines = function get_all_wines(req, res) {
  FoodMatch.findAll().then(wine => res.json(wine));
}; */
