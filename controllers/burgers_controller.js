var express = require("express");
var router = express.Router();

var functions = require("../models/burger.js");

router.get("/", function(req, res) {
	functions.select_all(function(result) {
		res.render("index", { burgers: result });
	});
});

router.post("/burgers/add", function(req, res) {
	functions.insert_one(req.body.burger_name, function() {
		res.redirect("/");
	});
});

router.put("/burgers/update", function(req, res) {
	functions.update_one(function() {
		res.redirect("/");
	});
});

module.exports = router;