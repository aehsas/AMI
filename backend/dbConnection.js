var mysql = require('mysql2');
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: 'Ash60000',      // Replace with your database password
  database: 'node_app', // // Replace with your database Name
  port: 3306
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;