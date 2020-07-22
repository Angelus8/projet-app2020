const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let VIPSchema = new Schema({
    placeVIP : {
        type: Number,
        required: true
    },
    NomAdmi : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('VIP',VIPSchema);