const express = require('express');
const router = express.Router();
const standard = require('../models/placeStandard');
const paye = require('../models/Standard_Paye/payStand');
const pay = require('../models/Standard_Paye/nonIvoiriens');

router.get('/', (req, res) => {
    standard.find((err,result)=>{
        res.render('Ticket/Standard',{stands:result});
    })
});


router.post('/payeStand', (req, res) => {
    var name = req.body.name;
    var firstname = req.body.firstname;
    var telephone = req.body.number;
    var standard = req.body.trib;

    const ulPay = new paye({
        Nom : name,
        Prenom : firstname,
        Telephone : telephone,
        Tribune : standard
    });
    ulPay.save((err)=>{
        if (err) {
            console.log("Erreur ");
        } else {
             res.redirect('/Code_Qr');
        }
    })
});

router.post('/etranger', (req, res) => {
    var nom = req.body.name;
    var prenom = req.body.firstname;
    var tel = req.body.number;
    var sejour = req.body.sejour;
    var trib = req.body.noIvoire;

    const ulPaye = new pay ({
        noms : nom,
        prenoms : prenom,
        Telephones : tel,
        Jour : sejour,
        Tribunes : trib
    });
    ulPaye.save((err)=>{
        if (err) {
            console.log("Erreur");
        } else {
             res.redirect('/Code_Qr');
        }
    })
});
module.exports = router;