var express = require("express");
var app = express()
var bodyParser = require("body-parser");
var categoryRoutes = require("./routes/categories");
var movieRoutes = require("./routes/movies");

var db = require("./db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var router = express.Router();

app.use("/api/category", categoryRoutes);
app.use("/api/movie", movieRoutes);

app.get("/", (req, res) => {
    res.status(200).json("Server running at port " + port);
});

var port = process.env.PORT || 8080;

app.listen(port, () => {
console.log("Server Running");
});