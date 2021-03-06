const CONFIG = require('./config/config');

const express = require('express'),
  app = express(),
  router = express.Router(),
  bodyParser = require('body-parser'),
  mysql = require('mysql'),
  passport = require('passport'),
  pe = require('parse-error'),
  cp = require('cookie-parser'),
  cors = require('cors'),
  logger = require('morgan'),
  routes = require('./routes/api'),
  wines = require('./routes/wines'),
  beers = require('./routes/beers'),
  foods = require('./routes/foods'),
  users = require('./routes/users'),
  cheese = require('./routes/cheese'),
  utils = require('./routes/utils'),
  fwm = require('./routes/matchwine'),
  fbm = require('./routes/matchbeer'),
  port = process.env.PORT || 4000;

require('./config/passport');

const isProduction = process.env.NODE_ENV === 'prod';

let pool = mysql.createPool({
  connectionLimit: 100,
  host: CONFIG.db_host,
  user: CONFIG.db_user,
  password: CONFIG.db_password,
  database: CONFIG.db_name
});

// local dev testing
const mc = mysql.createConnection({
  host: CONFIG.db_host,
  user: CONFIG.db_user,
  port: CONFIG.db_port,
  password: CONFIG.db_password,
  database: CONFIG.db_name
});

mc.connect();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Passport
app.use(passport.initialize());


app.get('/', (req, res, next) => {
  res.send('Welcome to the Vin.ly API');
  console.log("Hi!");
});

app.listen(port, () => {
  console.log(`Vin.ly API being served on port: ${port}`);
});

routes(app);
wines(app);
beers(app);
foods(app);
users(app);
cheese(app);
utils(app);
fwm(app);
fbm(app);
