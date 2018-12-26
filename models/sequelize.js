const Sequelize = require('sequelize'),
  /*   UserModel = require('./userModel'),
    WineModel = require('./wineModel'),
    BeerModel = require('./beerModel'),
    CheeseModel = require('./cheeseModel'),
    FoodModel = require('./foodModel'),
    UtilModel = require('./UtilModel'), */
  FoodMatchWine = require('./FMWine');

const sequelize = new Sequelize('vinlyapi', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

/* const User = UserModel(sequelize, Sequelize);
const Wine = WineModel(sequelize, Sequelize);
const Beer = BeerModel(sequelize, Sequelize);
const Cheese = CheeseModel(sequelize, Sequelize);
const Food = FoodModel(sequelize, Sequelize);
const Util = UtilModel(sequelize, Sequelize); */
const FoodMatch = FoodMatchModel(sequelize, Sequelize); //-- in case we have future models



sequelize.sync({ force: false })
  .then(() => {
    console.log("Database and tables created!");
  });

module.exports = {
  /* User,
  Wine,
  Beer,
  Cheese,
  Food,
  Util */
  FoodMatch
}
