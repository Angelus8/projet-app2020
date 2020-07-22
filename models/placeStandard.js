const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let StandardSchema = new Schema({
    placeStandard : {
        type: Number,
        required: true
    },
    NomAdmi : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Standard',StandardSchema);