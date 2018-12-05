'use strict';
var db = require('./dbconnection');

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

Wine.getAllWines = function getAllWines(result) {
  db.query("SELECT * FROM wine", function (err, res) {
    if (err) {
      console.log("error", err);
      result(null, err);
    } else {
      console.log("wine: ", res);
      result(null, res);
    }
  });
};

Wine.getWineById = function getWineById(wineId, result) {
  db.query("SELECT * FROM wine where wine_id = ?", wineId, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });

};


Wine.getWineByName = function getWineByName(wineName, result) {
  db.query("SELECT * FROM wine where wine_name = ?", wineName, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });

};

Wine.getWineByVintage = function getWineByVintage(vintage, result) {
  db.query('SELECT * from wine where vintage = ?', vintage, function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Wine.getWineByVarietal = function getWineByVarietal(varietal, result) {
  db.query("SELECT * FROM wine where varietal = ?", varietal, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });

};

Wine.getWineByWinery = function getWineByWinery(winery, result) {
  db.query("SELECT * FROM wine where winery = ?", winery, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });

};

Wine.getWineByRegion = function getWineByRegion(wineRegion, result) {
  db.query("SELECT * FROM wine where region = ?", wineRegion, function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Wine.getWineByLike = function getWineByName(wineLike, result) {
  db.query('SELECT * FROM wine where wine_name like ?', '%' + wineLike + '%', function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });

};

Wine.createWine = function createWine(newWine, result) {
  db.query("INSERT INTO wine set ?", newWine, function (err, res) {
    if (err) {
      result(null, err);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });

};

Wine.updateWineByIdAll = function updateWineByIdAll(wineId, wineUpdate, result) {
  db.query("UPDATE wine SET wine_name = ?, winery = ?, vintage = ?, varietal = ?, region = ?, notes = ?, body = ?, flavor_profile = ?, description = ? where wine_id = ?", [wineUpdate.wine_name, wineUpdate.winery, wineUpdate.vintage, wineUpdate.varietal, wineUpdate.region, wineUpdate.notes, wineUpdate.body, wineUpdate.flavor_profile, wineUpdate.description, wineId], function (err, res) {
    if (err) result(null, err);
    else result(null, res);
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
  db.query("DELETE from wine where wine_id = ?", wineId, function (err, res) {
    if (err) {
      console.log("error", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Wine;
