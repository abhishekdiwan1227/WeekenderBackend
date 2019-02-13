var express = require("express");
var router = express.Router();
var categoryController = require("../controllers/categoryController");

router.route("/").get(categoryController.getAll);

module.exports = router;
