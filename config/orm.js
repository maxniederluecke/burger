var connection = require("./connection.js");

var tableName = "burgers"

var orm = {
	selectAll: function(callback) {
		var queryString = "SELECT * FROM " + tableName;
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			callback(result);
		});
	},
	insertOne: function(burgerName, callback) {
		var queryString = "INSERT INTO " + tableName + " (burger_name, devoured VALUES (" + burgerName + ", FALSE)";
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			callback(result);
		});
	},
	updateOne: function(callback) {
		var queryString = "UPDATE " + tableName + "SET ";
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			callback(result);
		});
	}
}

module.exports = orm;