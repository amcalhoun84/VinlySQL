'use strict';

const db = require('./dbconnection');
/* const { FoodMatch, sequelize } = ('./sequelize'); */

const foodWineMatch = function (match) {
  this.wine_id = match.wine_id;
  this.food_id = match.food_id;
};

foodWineMatch.getAllMatches = result => {
  db.query("SELECT * from wine_food_pairing", (err, res) => {
    if (err) result(null, err);
    else result(null, res);
  });
};

foodWineMatch.createMatch = (newMatch, result) => {
  db.query("INSERT INTO wine_food_pairing SET ?", newMatch, (err, res) => {
    if (err) result(null, err);
    else result(null, res.resultId);
  });
};

// REMATCH WITH FOOD

foodWineMatch.getMatchFoodWine = (foodType, result) => {
  db.query("SELECT * from util_varietals v left join wine_food_pairing wfp on v.varietal_id = wfp.wine_id left join util_food_type f on f.food_type_id = wfp.food_id where f.food_type = ?", foodType, (err, res) => {
    if (err) result(null, err);
    else result(null, res);
  })
};

module.exports = foodWineMatch;


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
