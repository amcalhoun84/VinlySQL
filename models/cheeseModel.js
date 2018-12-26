'use strict';

const db = require('./dbconnection');

var Cheese = function (cheese) {
  this.cheese_type = cheese.cheese_type;
  this.strength = cheese.strength;
  this.texture = cheese.texture;
  this.description = cheese.description;
};

// future model if sequelize is integrated
/* module.exports = (sequelize, type) => {
  return sequelize.define('cheese', {
    cheese_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cheese_type: type.STRING,
    strength: type.STRING,
    texture: type.STRING,
    description: type.STRING
  })
}
 */

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
  db.query("SELECT * from food_cheeses where cheese_type like ?", ['%' + cheeseType + '%'], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Cheese.getCheeseByTexture = (cheeseTexture, result) => {
  db.query("SELECT * from food_cheeses where texture like ?", ['%' + cheeseTexture + '%'], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Cheese.getCheeseByStrength = (cheeseStrength, result) => {
  db.query('SELECT * from food_cheeses where strength like ?', ['%' + cheeseStrength + '%'], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Cheese.createCheese = (newCheese, result) => {
  db.query("INSERT INTO food_cheeses set ?", newCheese, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res.insertId);
    }
  });
};

Cheese.deleteCheese = (cheeseId, result) => {
  db.query('DELETE FROM CHEESE where cheese_id = ?', cheeseId, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
}

module.exports = Cheese;
