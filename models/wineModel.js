'use strict';
var db = require('./dbconnection');
// var sequelize = require('./sequelize'); // add an ORM later for easier expansion


// Potentially for a later version.
var Wine = function (wine) {
  this.wine_name = wine.wine_name;
  this.winery = wine.winery;
  this.region = wine.region;
  this.vintage = wine.vintage;
  this.varietal = wine.varietal;
  this.flavor_profile = wine.flavor_profile;
  this.notes = wine.notes;
  this.body = wine.body;
  this.description = wine.description;
};

// future model if sequelize is integrated
/* module.exports = (sequelize, type) => {
  return sequelize.define('wine', {
    wine_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    wine_name: type.STRING,
    winery: type.STRING,
    varietal: type.STRING,
    vintage: type.STRING,
    region: type.STRING,
    varietal: type.STRING,
    flavor_profile: type.STRING,
    notes: type.STRING,
    body: type.STRING,
    description: type.STRING
  })
}
 */

Wine.getAllWines = function getAllWines(result) {
  db.query("SELECT * FROM wine", function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Wine.getWineById = function getWineById(wineId, result) {
  db.query("SELECT * FROM wine where wine_id = ?", [wineId], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });

};

// Good functions, but unnecessary for demo.
Wine.getWineByName = function getWineByName(wineName, result) {
  db.query("SELECT * FROM wine where wine_name = ?", [wineName], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Wine.getWineByVarietal = function getWineByVarietal(varietal, result) {
  db.query("SELECT * from wine where varietal = ?", [varietal], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Wine.getWineByVintage = function getWineByVintage(vintage, result) {
  db.query('SELECT * from wine where vintage = ?', [vintage], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Wine.getWineByWinery = function getWineByWinery(winery, result) {
  db.query("SELECT * FROM wine where winery = ?", [winery], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Wine.getWineryVarietal = function getWineryVarietal(winery, varietal, result) {
  db.query("SELECT * from wine where winery = ? and varietal = ?", [winery, varietal], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Wine.getWineryVintageVarietal = function getWineryVintageVarietal(winery, vintage, varietal, result) {
  db.query("SELECT * from wine where winery = ? and vintage = ? and varietal = ?", [winery, vintage, varietal], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Wine.getWineByRegion = function getWineByRegion(wineRegion, result) {
  db.query("SELECT * FROM wine where region = ?", [wineRegion], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Wine.getRegionAndVarietal = function getRegionAndVarietal(wineRegion, wineVarietal, result) {
  db.query("SELECT * from wine where region like ? and varietal = ?", [wineRegion, wineVarietal], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Wine.getRegionAndWinery = function getRegionAndWinery(wineRegion, winery, result) {
  db.query("SELECT * from wine where region = ? and winery = ?", [wineRegion, winery], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// will maintain this, but was meant to get separate wines of different wineries by their type, for now, just the generic varietal for our purpsoes.
Wine.getWineByVarietal = function getWineByVarietal(varietal, result) {
  db.query("SELECT * FROM wine where varietal = ?", [varietal], function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });

};

Wine.getWineByLike = function getWineByName(wineLike, result) {
  db.query('SELECT * FROM wine where varietal like ?', '%' + wineLike + '%', function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });

};

Wine.createWine = function createWine(newWine, result) {
  db.query("INSERT INTO wine set ?", [newWine], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res.insertId);
    }
  });

};

Wine.updateWineById = function updateWineById(wineId, wineUpdate, result) {
  if (wineUpdate.wine_name) {
    db.query("UPDATE wine SET wine_name = ? where wine_id = ?", [wineUpdate.wine_name, wineId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (wineUpdate.vintage) {
    db.query("UPDATE wine SET vintage = ? where wine_id = ?", [wineUpdate.vintage, wineId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }
  if (wineUpdate.region) {
    db.query("UPDATE wine SET region = ? where wine_id = ?", [wineUpdate.region, wineId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }
  if (wineUpdate.varietal) {
    db.query("UPDATE wine SET varietal = ? where wine_id = ?", [wineUpdate.varietal, wineId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (wineUpdate.flavor_profile) {
    db.query("UPDATE wine SET flavor_profile = ? where wine_id = ?", [wineUpdate.flavor_profile, wineId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (wineUpdate.notes) {
    db.query("UPDATE wine SET notes = ? where wine_id = ?", [wineUpdate.notes, wineId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (wineUpdate.body) {
    db.query("UPDATE wine SET body = ? where wine_id = ?", [wineUpdate.body, wineId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  if (wineUpdate.description) {
    db.query("UPDATE wine SET description = ? where wine_id = ?", [wineUpdate.description, wineId], function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

};
Wine.deleteWineById = function deleteWineById(wineId, result) {
  db.query("DELETE from wine where wine_id = ?", [wineId], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// Matchers

Wine.matchWineToFood = function matchWineToFood(wineVarietal, result) {
  db.query("SELECT food.food_id, food_type from food left join wine_food_pairing wfp on food.food_id = wfp.food_id  left join util_varietals w on w.varietal_id = wfp.wine_id where w.varietal = ? ", wineVarietal, function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};


module.exports = Wine;
