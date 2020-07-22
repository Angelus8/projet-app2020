const express = require('express');
const router = express.Router();
const standard = require('../models/placeStandard');

router.get('/', (req, res) => {
    res.render('Tribune/placeStand');
});

router.post('/addnum', (req, res) => {
    const numberStand = req.body.standard;
    const nomAdmin = req.body.admin;

    const ulStandard = new standard({
        placeStandard : numberStand,
        NomAdmi : nomAdmin
    });
    ulStandard.save((err)=>{
        if (err) {
            console.log("Erreur de transfert");
        } else {
             res.redirect('/');
        }
    })
});


module.exports = router;