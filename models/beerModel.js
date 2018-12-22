'use strict';
var db = require('./dbconnection');
const v = require('../utility/validators');

var Beer = function (beer) {
  this.beer_name = beer.beer_name;
  this.brewery = beer.brewery;
  this.beer_type = beer.beer_type;
  this.region = beer.region;
  this.notes = beer.notes;
  this.intensity = beer.intensity;
  this.color = beer.color;
  this.description = beer.description;
};

// var Beer = function (beer) {
//   this.beer_type = beer.beer_type;
//   this.notes = beer.notes;
//   this.intensity = beer.intensity;
//   this.color = beer.color;  // color does vary from brewer to brewer...
//   this.description = this.description;
// };

Beer.getAllBeer = (result) => {
  db.query("SELECT * FROM beer", (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Beer.getBeerByName = (beerName, result) => {
  db.query("SELECT * from beer where beer_name = ?", beerName, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Beer.getBeerById = (beerId, result) => {
  db.query("SELECT * from beer where beer_id = ?", [beerId], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Beer.getBeerByBrewery = (brewery, result) => {
  db.query("SELECT * from beer where brewery = ?", brewery, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Beer.getBeerByLike = (beerLike, result) => {
  db.query("SELECT * from beer where beer_type like = ?", '%' + beerLike + '%', (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Beer.getBeerByIntensity = (beerIntensity, result) => {
  db.query("SELECT * from beer where beer_type like = ?", '%' + beerIntensity + '%', (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Beer.getBeerByNotes = (beerNotes, result) => {
  db.query("SELECT * from beer where beer_type like = ?", '%' + beerNotes + '%', (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};


Beer.getBeerByColor = (beerColor, result) => {
  db.query("SELECT * from beer where color = ?", [beerColor], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};



Beer.getBeerByRegion = (beerRegion, result) => {
  db.query("SELECT * from beer where region = ?", beerRegion, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Beer.getRegionAndBrewery = (beerRegion, brewery, result) => {
  db.query("SELECT * from beer where region = ? and brewery = ?", [beerRegion, brewery], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Beer.getBreweryAndType = (brewery, beerType, result) => {
  db.query("SELECT * from beer where brewery = ? and beer_type = ?", [brewery, beerType], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Beer.getBeerByColor = (color, result) => {
  db.query("SELECT * from beer where color = ?", color, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Beer.getBeerByIntensity = (intensity, result) => {
  db.query("SELECT * from beer where intensity = ?", intensity, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
}

// Utility (Creation, Deletion, Updates)

Beer.createBeer = (newBeer, result) => {
  db.query("INSERT INTO beer set ?", newBeer, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res.insertId);
    }
  });
};



/* Beer.updateBeerByIdAll = function updateBeerByIdAll(beerId, beerUpdate, result) { // requires the whole thing...
  db.query("UPDATE beer SET beer_name = ?, brewery = ?, beer_type = ?, region = ?, notes = ?, color = ?, intensity = ?, description = ? where beer_id = ?", [beerUpdate.beer_name, beerUpdate.brewery, beerUpdate.beer_type, beerUpdate.region, beerUpdate.notes, beerUpdate.color, beerUpdate.intensity, beerUpdate.description, beerId], function (err, nes) {
    if (err) result(null, err);
    else result(null, res);
  });
}; */

// Updates - ugly as sin, I don't like this... there has to be a cleaner way to do this...

Beer.updateBeerById = (beerId, beerUpdate, result) => {
  if (beerUpdate.beer_name) {
    db.query("UPDATE beer SET beer_name = ? where beer_id = ?", [beerUpdate.beer_name, beerId], (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }
  if (beerUpdate.brewery) {
    db.query("UPDATE beer SET brewery = ? where beer_id = ?", [beerUpdate.brewery, beerId], (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (beerUpdate.region) {
    db.query("UPDATE beer SET region = ? where beer_id = ?", [beerUpdate.region, beerId], (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }
  if (beerUpdate.type) {
    db.query("UPDATE beer SET beer_type = ? where beer_id = ?", [beerUpdate.type, beerId], (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (beerUpdate.intensity) {
    db.query("UPDATE beer SET intensity = ? where beer_id = ?", [beerUpdate.intensity, beerId], (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (beerUpdate.notes) {
    db.query("UPDATE beer SET notes = ? where beer_id = ?", [beerUpdate.notes, beerId], (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (beerUpdate.color) {
    db.query("UPDATE beer SET color = ? where beer_id = ?", [beerUpdate.color, beerId], (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (beerUpdate.description) {
    db.query("UPDATE beer SET description = ? where beer_id = ?", [beerUpdate.description, beerId], (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

};

// MATCH

Beer.matchBeerToFood = (beerType, result) => {
  db.query("SELECT food_type from util_food_types left join beer_food_pairing bfp on util_food_types.food_id = bfp.food_id  left join util_beer_types b on b.beer_id = bfp.beer_id where b.beer_type = ?", beerType, (err, res) => {
    if (err) result(null, err);
    else result(null, res)
  });
};

Beer.deleteBeer = (beerId, result) => {
  db.query("DELETE from beer where beer_id = ?", beerId, (err, res) => {
    if (err) result(null, err);
    else result(null, res);
  });
};

module.exports = Beer;
