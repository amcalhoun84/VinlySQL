'use strict';

const Food = require('../models/foodModel');
let db = require('../models/dbconnection');

exports.list_all_food = (req, res) => {
  Food.getAllFood((err, food) => {
    if (err) res.send(err);
    res.send(food);
  });
};

exports.get_food_by_id = (req, res) => {
  Food.getFoodByID(req.params.food_id, (err, food) => {
    if (err) res.send(err);
    res.send(food);
  });
};

exports.get_food_by_name = (req, res) => {
  Food.getFoodByName(req.params.food_name, (err, food) => {
    if (err) res.send(err);
    res.send(food);
  });
};

exports.get_food_by_type = (req, res) => {
  Food.getFoodByType(req.params.food_type, (err, food) => {
    if (err) res.send(err);
    res.send(food);
  });
};

exports.get_food_by_grouping = (req, res) => {
  Food.getFoodByGrouping(req.params.food_grouping, (err, food) => {
    if (err) res.send(err);
    res.send(food);
  });
};

exports.get_food_by_like = (req, res) => {
  Food.getFoodByLike(req.params.food_like, (err, food) => {
    if (err) res.send(err);
    res.send(food);
  });
};

exports.create_food = (req, res) => {
  var new_food = new Food(req.body);
  if (!new_food.food_name) { res.status(400).send({ error: true, message: "Tasty stuff needs a name!" }); return; }
  if (!new_food.primary_flavor) { res.status(400).send({ error: true, message: "Tasty stuff needs a flavor!" }); return; }
  if (!new_food.food_type) { res.status(400).send({ error: true, message: "Tasty stuff needs a type!" }); return; }
  if (!new_food.food_region) { res.status(400).send({ error: true, message: "Tasty stuff needs a grouping!" }); return; }
  if (!new_food.description) { res.status(400).send({ error: true, message: "Tasty stuff needs a description!" }); return; }

  Food.createFood(new_food, function (err, food) {
    if (err) res.send(err);
    res.json(food);
  });
};

exports.match_food_wine = (req, res) => {
  Food.matchFoodToWine(req.params.food_type, (err, food) => {
    if (err) res.send(err);
    res.send(food);
  });
};

exports.match_food_beer = (req, res) => {
  Food.matchFoodToBeer(req.params.food_type, (err, food) => {
    if (err) res.send(err);
    res.send(food);
  });
};

exports.delete_food_by_id = (req, res) => {
  Food.deleteFoodById(req.params.food_id, (err, food) => {
    if (err) res.send(err);
    res.send(food);
  });
};
