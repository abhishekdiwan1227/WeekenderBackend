var movieModel = require("../models/movieModel");
var mongoose = require('mongoose');
var http = require('http');

module.exports.getAll = (req, res, next) => {
    movieModel.find({})
        .populate("category")
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(501).json("Failed");
        });
}

module.exports.getByCategory = (req, res, next) => {
    var categoryId = req.params.categoryId;
    movieModel.find({ category: mongoose.Types.ObjectId(categoryId) })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(501).json("Failed");
        });
}

module.exports.searchByKeyword = (req, res, next) => {
    var keyword = req.params.keyword;
    http.get(`http://www.omdbapi.com/?s=${keyword}&apikey=32b01e33`, response => {
        var responseBody = "";
        response.on("data", chunk => {
            responseBody = responseBody + chunk;
        });
        response.on("end", () => {
            responseBody = JSON.parse(responseBody);
            var result = [];
            responseBody.Search.forEach((response) => {
                result.push({
                    title: response.Title,
                    year: response.Year,
                    type: response.Type,
                    poster: response.Poster
                })
            })
            res.status(200).json(result);
            response.on("error", err => {
                res.status(501).json("Failed");
            });
        });
    });
}