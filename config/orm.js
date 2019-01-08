var connection = require("./connection.js");

var tableName = "burgers"

var orm = {
	selectALL: function(callback) {
		var queryString = "SELECT * FROM " + tableName;
		connection.query(queryString, function(err, result) {
			if (err) throw err;

		});
	},
	insertOne: function(burgerName, callback) {
		var queryString = "INSERT INTO " + tableName + " (burger_name, devoured VALUES (" + burgerName + ", FALSE)";
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			
		});
	},
	updateOne: function(callback) {
		var queryString = "UPDATE " + tableName + "SET " + ;
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			
		});
	}
}

module.exports = orm;