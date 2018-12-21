'use strict';

const db = require('./dbconnection');

var Cheese = function (cheese) {
  this.cheese_type = cheese.cheese_type;
  this.strength = cheese.strength;
  this.texture = cheese.texture;
  this.description = cheese.description;
};

Cheese.getAllCheeses = result => {
  db.query("SELECT * from food_cheeses", (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Cheese.getCheeseByType = (cheeseType, result) => {
  db.query("SELECT * from food_cheeses where cheese_type = ?", [cheeseType], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Cheese.getCheeseByTexture = (cheeseTexture, result) => {
  db.query("SELECT * from food_cheeses where texture = ?", [cheeseTexture], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Cheese.getCheeseByStrength = (cheeseStrength, result) => {
  db.query("SELECT * from food_cheeses where strength = ?", [cheeseStrength], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Cheese.createCheese = (newCheese, result) => {
  db.query("INSERT INTO food_cheeses set = ?", newCheese, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};


module.exports = Cheese;
