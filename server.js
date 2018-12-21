const CONFIG = require('./config/config');

const express = require('express'),
  app = express(),
  router = express.Router(),
  bodyParser = require('body-parser'),
  routes = require('./routes/api'),
  mysql = require('mysql'),
  //passport = require('passport'),
  pe = require('parse-error'),
  //cors = require('cors'),
  logger = require('morgan'),
  port = process.env.PORT || 4000;

// local dev testing
const mc = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'root',
  database: 'vinlyapi'
});

mc.connect();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Passport
//app.use(passport.initialize());
//app.use(cors);


app.get('/', (req, res, next) => {
  res.send('Welcome to the Vin.ly API');
  console.log("Hi!");
});

app.listen(port, () => {
  console.log(`Vin.ly API being served on port: ${port}`);
});

routes(app);
