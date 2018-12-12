const express = require('express'),
  app = express(),
  router = express.Router(),
  bodyParser = require('body-parser'),
  routes = require('./routes/api'),
  mysql = require('mysql'),
  port = process.env.PORT || 4000;

const mc = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'root',
  database: 'vinlyapi'
});

mc.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
  res.send('Welcome to the Vin.ly API');
  console.log("Hi!");
});

app.listen(port, () => {
  console.log(`Vin.ly API being served on port: ${port}`);
});

routes(app);
