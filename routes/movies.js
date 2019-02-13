var express = require("express");
var router = express.Router();
var movieController = require("../controllers/movieController");

router.route("/").get(movieController.getAll);

router.route("/category/:categoryId").get(movieController.getByCategory);

router.route("/search/:keyword").get(movieController.searchByKeyword);

module.exports = router;
