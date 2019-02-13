var mongoose = require("mongoose"); 
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category"
    }
});

module.exports = mongoose.model('movie', MovieSchema);