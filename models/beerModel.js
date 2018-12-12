'use strict';
var db = require('./dbconnection');
const v = require('../utility/validators');

// var Beer = function (beer) {
//   this.beer_name = beer.beer_name;
//   this.brewery = beer.brewery;
//   this.type = beer.beer_type;
//   this.region = beer.region;
//   this.notes = beer.notes;
//   this.intensity = beer.intensity;
//   this.color = beer.color;
//   this.description = this.description;
// };

var Beer = function (beer) {
  this.beer_type = beer.beer_type;
  this.notes = beer.notes;
  this.intensity = beer.intensity;
  this.color = beer.color;  // color does vary from brewer to brewer...
  this.description = this.description;
};

Beer.getAllBeer = function getAllBeer(result) {
  db.query("SELECT * FROM beer", function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

/* Beer.getBeerByName = function getBeerByName(beerName, result) {
  db.query("SELECT * from beer where beer_name = ?", beerName, function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
 */
Beer.getBeerById = function getBeerById(beerId, result) {
  db.query("SELECT * from beer where beer_id = ?", [beerId], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

/* Beer.getBeerByBrewery = function getBeerByBrwery(brewery, result) {
  db.query("SELECT * from beer where brewery = ?", brewery, function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
}; */

Beer.getBeerByLike = function getBeerByLike(beerLike, result) {
  db.query("SELECT * from beer where beer_type like = ?", '%' + beerLike + '%', function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Beer.getBeerByIntensity = function getBeerByLike(beerIntensity, result) {
  db.query("SELECT * from beer where beer_type like = ?", '%' + beerIntensity + '%', function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Beer.getBeerByNotes = function getBeerByLike(beerNotes, result) {
  db.query("SELECT * from beer where beer_type like = ?", '%' + beerNotes + '%', function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};


Beer.getBeerByColor = function getBeerByColor(beerColor, result) {
  db.query("SELECT * from beer where color = ?", [beerColor], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};



/* Beer.getBeerByRegion = function getBeerByRegion(beerRegion, result) {
  db.query("SELECT * from beer where region = ?", beerRegion, function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
}; */




// Utility (Creation, Deletion, Updates)

Beer.createBeer = function createBeer(newBeer, result) {
  db.query("INSERT INTO beer set ?", newBeer, function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res.insertId);
    }
  });
};

// Updates - ugly as sin, I don't like this... there has to be a cleaner way to do this...

Beer.updateBeerByIdAll = function updateBeerByIdAll(beerId, beerUpdate, result) { // requires the whole thing...
  db.query("UPDATE beer SET beer_name = ?, brewery = ?, beer_type = ?, region = ?, notes = ?, color = ?, intensity = ?, description = ? where beer_id = ?", [beerUpdate.beer_name, beerUpdate.brewery, beerUpdate.beer_type, beerUpdate.region, beerUpdate.notes, beerUpdate.color, beerUpdate.intensity, beerUpdate.description, beerId], function (err, nes) {
    if (err) result(null, err);
    else result(null, res);
  });
};

Beer.updateBeerById = function updateBeerById(beerId, beerUpdate, result) {
  if (beerUpdate.beer_name) {
    db.query("UPDATE beer SET beer_name = ? where beer_id = ?", [beerUpdate.beer_name, beerId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }
  if (beerUpdate.brewery) {
    db.query("UPDATE beer SET brewery = ? where beer_id = ?", [beerUpdate.brewery, beerId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (beerUpdate.region) {
    db.query("UPDATE beer SET region = ? where beer_id = ?", [beerUpdate.region, beerId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }
  if (beerUpdate.type) {
    db.query("UPDATE beer SET beer_type = ? where beer_id = ?", [beerUpdate.type, beerId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (beerUpdate.intensity) {
    db.query("UPDATE beer SET intensity = ? where beer_id = ?", [beerUpdate.intensity, beerId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (beerUpdate.notes) {
    db.query("UPDATE beer SET notes = ? where beer_id = ?", [beerUpdate.notes, beerId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (beerUpdate.color) {
    db.query("UPDATE beer SET color = ? where beer_id = ?", [beerUpdate.color, beerId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (beerUpdate.description) {
    db.query("UPDATE beer SET description = ? where beer_id = ?", [beerUpdate.description, beerId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

};

// MATCH

Beer.matchBeerToFood = function matchBeerToFood(beerType, result) {
  db.query("SELECT food_type from food left join wine_food_pairing wfp on food.food_id = wfp.food_id  left join wine w on w.wine_id = wfp.wine_id where w.varietal = ?", beerType, (req, res) => {
    if (err) result(null, err);
    else result(null, res)
  });
};

Beer.deleteBeer = function deleteBeer(beerId, result) {
  db.query("DELETE from beer where beer_id = ?", beerId, function (err, res) {
    if (err) result(null, err);
    else result(null, res);
  });
};

module.exports = Beer;
