var mongoose = require("mongoose"); 
var Schema = mongoose.Schema;
var movie = require("../models/movieModel");

var CategorySchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    category: {
        type: String,
        required: true,
        unique: true
    },
    movies: [{
        type: Schema.Types.ObjectId,
        ref: "movie"
    }]
});

module.exports = mongoose.model('category', CategorySchema)