const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EnvoiPaye = new Schema({
    Noms : {
        type : String
    },
    Prenoms : {
        type: String
    },
    Telephones : {
        type: Number
    },
    Jours : {
        type : Number
    },
    Tribunes : {
        type : String
    }
});

module.exports = mongoose.model('VIPEtranger',EnvoiPaye);