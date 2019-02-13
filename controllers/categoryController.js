var categoryModel = require("../models/categoryModel");

module.exports.getAll = (req, res, next) => {
    categoryModel.find({})
    .populate("movies")
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(501).json("Failed");
    });
}