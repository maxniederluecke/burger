var orm = require("../config/orm.js");

var functions = {
	select_all: function(callback) {
		orm.selectAll(function(res) {
			callback(res);
		});
	},
	insert_one: function(burgerName, callback) {
		orm.insertOne(burger_name, function(res) {
			callback(res);
		});
	},
	update_one: function(callback) {
		orm.updateOne("THIS" , function(res) {
			callback(res);
		})
	}
}

module.exports = functions;