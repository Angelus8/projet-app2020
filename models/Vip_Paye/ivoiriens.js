const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EnvoiPayement = new Schema({
    Nom : {
        type : String
    },
    Prenom : {
        type: String
    },
    Telephone : {
        type: Number
    },
    Tribune : {
        type : String
    }
});

module.exports = mongoose.model('PayementVipIvoire',EnvoiPayement);