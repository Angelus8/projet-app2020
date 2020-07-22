const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PreSchema = new Schema({
    placePre : {
        type: Number,
        required: true
    },
    NomAdmi : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Premium',PreSchema);