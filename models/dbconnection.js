var mysql = require('mysql');

//dev
/* var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'vinlydemo'
  //insecureAuth: true
}); */

//live

var connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-01.cleardb.net',
  port: 3306,
  user: 'b6f38d2b26c78f',
  password: '2b249b51',
  database: 'vinlydemo'
  //insecureAuth: true
});

connection.connect();

/* connection.connect(function (err) {
  if (err) throw err;
});
 */
module.exports = connection;
