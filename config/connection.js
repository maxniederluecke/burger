var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "tpq8om8o1yl2g17b",
  password: "po33xodi9yfk0qki",
  database: "l5p5af8yixkx9jnk"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;