var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "mysql://bbd0350e34c75c:6804b3ef@us-cdbr-iron-east-01.cleardb.net/heroku_6730758dc734163?reconnect=true",
  port: 3306,
  user: "root",
  password: "vegetable",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;