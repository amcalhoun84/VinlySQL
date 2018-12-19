'use strict'

const Util = require('../models/utilModel'),
  db = require('../models/dbconnection');

exports.get_varietals = (req, res) => {
  Util.getVarietals((err, util) => {
    if (err)
      res.send(err);
    res.send(util);
  });
};

exports.get_beer_types = (req, res) => {
  Util.getBeerType((err, util) => {
    if (err)
      res.send(err);
    res.send(util);
  });
};
