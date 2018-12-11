'use strict';

var db = require('./dbconnection');

var Food = function (food) {
  this.food_name = food.food_name;
  this.food_type = food.food_type;
  this.primary_flavor = food.primary_flavor;
  this.food_grouping = food.food_grouping;
  this.description = food.description;
};

Food.getAllFood = function getAllFood(result) {
  db.query("SELECT * from food", function (err, res) {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Food.getFoodById = function getFoodById(foodId, result) {
  db.query("SELECT * from food where food_id = ?", foodId, function (err, res) {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Food.getFoodByName = function getFoodByName(foodName, result) {
  db.query("SELECT * from food where food_name = ?", foodName, function (err, res) {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Food.getFoodByType = function getFoodByType(foodType, result) {
  db.query("SELECT * from food where food_type = ?", foodType, function (err, res) {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Food.getFoodByGrouping = function getFoodByGrouping(foodGrouping, result) {
  db.query("SELECT * from food where food_grouping = ?", foodGrouping, function (err, res) {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};


Food.getFoodByLike = function getFoodByLike(foodLike, result) {
  db.query("SELECT * from food where food_name LIKE ?", '%' + foodLike + '%', function (err, res) {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Food.createFood = function createFood(newFood, result) {
  db.query("INSERT into food set ?", newFood, function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res.InsertId);
    }
  });
}

Food.deleteFoodById = function deleteFoodById(foodId, result) {
  db.query("DELETE from food where food_id = ?", foodId, function (err, food) {
    if (err) result(null, err);
    else {
      result(null, res);
    }
  });
};

Wine.matchFoodToWine = function matchFoodToWine(foodType, result) {
  db.query("SELECT varietal from wine left join wine_food_pairing wfp on wine.wine_id = wfp.wine_id left join food on wfp.food_id = food.food_id where food.food_type = ?", foodType, function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Beer.matchFoodToBeer = function matchFoodToBeer(foodType, result) {
  db.query("SELECT beer_type from beer left join beer_food_pairing bfp on beer.beer_id = bfp.beer_id left join food on bfp.food_id = food.food_id where food.food_type = ? ", foodType, function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};


module.exports = Food;
