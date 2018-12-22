'use strict';

var db = require('./dbconnection');

var Food = function (food) {
  this.food_name = food.food_name;
  this.food_type = food.food_type;
  this.primary_flavor = food.primary_flavor;
  this.food_region = food.food_region;
  this.description = food.description;
};

Food.getAllFood = (result) => {
  db.query("SELECT * from food", (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Food.getFoodById = (foodId, result) => {
  db.query("SELECT * from food where food_id = ?", foodId, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Food.getFoodByName = (foodName, result) => {
  db.query("SELECT * from food where food_name = ?", foodName, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Food.getFoodByType = (foodType, result) => {
  db.query("SELECT * from food where food_type = ?", foodType, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Food.getFoodByGrouping = (foodGrouping, result) => {
  db.query("SELECT * from food where food_grouping = ?", foodGrouping, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};


Food.getFoodByLike = (foodLike, result) => {
  db.query("SELECT * from food where food_name LIKE ?", '%' + foodLike + '%', (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Food.createFood = (newFood, result) => {
  db.query("INSERT into food set ?", newFood, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res.InsertId);
    }
  });
}

Food.deleteFoodById = (foodId, result) => {
  db.query("DELETE from food where food_id = ?", foodId, (err, food) => {
    if (err) result(null, err);
    else {
      result(null, res);
    }
  });
};

Food.matchFoodToWine = (foodType, result) => {
  db.query("SELECT varietal from wine left join wine_food_pairing wfp on wine.wine_id = wfp.wine_id left join food on wfp.food_id = food.food_id where food.food_type = ?", foodType, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Food.matchFoodToBeer = (foodType, result) => {
  db.query("SELECT beer_type from beer left join beer_food_pairing bfp on beer.beer_id = bfp.beer_id left join food on bfp.food_id = food.food_id where food.food_type = ? ", foodType, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};


module.exports = Food;
