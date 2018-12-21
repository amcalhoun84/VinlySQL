'use strict';
var db = require('./dbconnection');

var Util = function (util) { };

Util.getVarietals = (result) => {
  db.query("SELECT * FROM util_varietals", (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Util.getBeerType = (result) => {
  db.query("SELECT * from util_beer_type", (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Util.getFoodType = (result) => {
  db.query("SELECT * from util_food_type", (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Util;
