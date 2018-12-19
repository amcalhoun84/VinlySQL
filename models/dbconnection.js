<<<<<<< HEAD
var mysql = require('mysql');

//dev
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'vinlyapi'
  //insecureAuth: true
});


connection.connect();

/* connection.connect(function (err) {
  if (err) throw err;
});
 */
module.exports = connection;
