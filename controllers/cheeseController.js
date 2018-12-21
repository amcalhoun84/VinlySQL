'use strict';

const Cheese = require('../models/cheeseModel'),
  db = require('../models/dbconnection');

exports.get_cheeses = (req, res) => {
  Cheese.getCheeseByType((err, cheese) => {
    if (err)
      res.send(err);
    res.send(cheese);
  });
};

exports.get_cheese_by_type = (req, res) => {
  Cheese.getCheeseByType((err, cheese) => {
    if (err)
      res.send(err);
    res.send(cheese);
  });
}

exports.get_cheese_by_texture = (req, res) => {
  Cheese.getCheeseByTexture((err, cheese) => {
    if (err) res.send(err);
    res.send(cheese);
  });
};

exports.get_cheese_by_strength = (req, res) => {
  Cheese.getCheeseByStrength((err, cheese) => {
    if (err) res.send(err);
    res.send(cheese);
  });
};

exports.create_cheese = (req, res) => {
  var new_cheese = new Cheese(req.body);
  if (!new_cheese.cheese_type) { res.status(400).send({ error: true, message: "Cheese Type is required." }); return; }
  if (!new_cheese.texture) { res.status(400).send({ error: true, message: "Cheese texture is required." }); return; }
  if (!new_cheese.strength) { res.status(400).send({ error: true, message: "Beer type is required." }); return; }
  if (!new_cheese.description) { res.status(400).send({ error: true, message: "Cheese description is required." }); return; }

  Cheese.createCheese(new_cheese, (err, cheese) => {
    if (err) res.send(err);
    res.json(cheese);
  });
};
