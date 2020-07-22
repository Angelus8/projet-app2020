const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EnvoiPaye = new Schema({
    noms : {
        type : String
    },
    prenoms : {
        type: String
    },
    Telephones : {
        type: Number
    },
    Jour : {
        type : Number
    },
    Tribunes : {
        type : String
    }
});

module.exports = mongoose.model('StandardEtranger',EnvoiPaye);