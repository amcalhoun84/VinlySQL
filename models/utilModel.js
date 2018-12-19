'use strict';
var db = require('./dbconnection');

var Util = function (util) { };

Util.getVarietals = function getVarietals(result) {
  db.query("SELECT * FROM util_varietals", function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Util.getBeerType = function getBeerType(result) {
  db.query("SELECT * from util_beer_type", function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

/* Beer.getAllBeer = function getAllBeer(result) {
  db.query("SELECT * FROM beer", function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
}; */

module.exports = Util;
