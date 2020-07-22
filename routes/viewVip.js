const express = require('express');
const router = express.Router();
const vip = require('../models/placePro');
const ivoireVip = require('../models/Vip_Paye/ivoiriens');
const noIvoir = require('../models/Vip_Paye/nonIvoirins');

router.get('/', (req, res) => {
    vip.find((err,result)=>{
        res.render('Ticket/Vip',{vips:result});
    })
});

router.post('/ivoire', (req, res) => {
    var nom = req.body.name;
    var pren = req.body.firstnam;
    var tele = req.body.num;
    var vip = req.body.ivoire;

    var ulVip = new ivoireVip({
        Nom : nom,
        Prenom : pren,
        Telephone : tele,
        Tribune : vip
    });
    ulVip.save((err) =>{
        if (err) {
            console.log("Erreur");
        } else {
             res.redirect('/Code_Qr');
        }
    } )
});

router.post('/noIvoires', (req, res) => {
    var nom = req.body.noms;
    var prenom = req.body.pnoms;
    var phone = req.body.phone;
    var sejournr = req.body.sejr;
    var trib = req.body.noIv;

    var ulvip = new noIvoir({
        Noms : nom,
        Prenoms : prenom,
        Telephones : phone,
        Jours : sejournr,
        Tribunes : trib
    });
    ulvip.save((err) =>{
        if (err) {
            console.log("Erreur");
        } else {
             res.redirect('/Code_Qr');
        }
    } )
});
module.exports = router;