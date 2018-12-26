'use strict';
const mysql = require('mysql'),
  CONFIG = require('../config/config')


//dev
var connection = mysql.createConnection({
  host: CONFIG.db_host,
  port: CONFIG.db_port,
  user: CONFIG.db_user,
  password: CONFIG.db_password,
  database: CONFIG.db_name
  //insecureAuth: true
});

connection.connect();

/* connection.connect(function (err) {
  if (err) throw err;
});
 */
module.exports = connection;
