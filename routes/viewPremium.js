const express = require('express');
const router = express.Router();
const premium = require('../models/placePrem');
const Ivoir = require('../models/Premium_Paye/ivoir');
const noIvoir = require('../models/Premium_Paye/noIvoir');

router.get('/', (req, res) => {
    premium.find((err,result)=>{
        res.render('Ticket/Premium',{prems:result});
    })
});

router.post('/Ivoir', (req, res) => {
    var sNom = req.body.nom;
    var sPrn = req.body.prenom;
    var sTel = req.body.sTel;
    var sTrib = req.body.tri;

    var ulPrem = new Ivoir({
        Nom : sNom,
        Prenom : sPrn,
        Telephone : sTel,
        Tribune : sTrib
    });
    ulPrem.save((err) =>{
        if (err) {
            console.log("Erreur");
        } else {
             res.redirect('/Code_Qr');
        }
    });
});


router.post('/noIvoirien', (req, res) => {
    var sNam = req.body.name;
    var sFirst = req.body.firstname;
    var sTel = req.body.number;
    var sSej = req.body.year;
    var sTrib = req.body.tribu;

    var ulPrem = new noIvoir({
        Noms : sNam,
        Prenoms: sFirst,
        Telephones : sTel,
        Jours : sSej,
        Tribunes : sTrib
    });
    ulPrem.save((err) =>{
        if (err) {
            console.log("Erreur");
        } else {
             res.redirect('/Code_Qr');
        }
    } )
});

module.exports = router;