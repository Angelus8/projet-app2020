const express = require('express');
const router = express.Router();
const vip = require('../models/placePro');

router.get('/', (req, res) => {
    res.render('Tribune/placePro');
});

router.post('/addpro', (req, res) => {
    const numberVip = req.body.username;
    const namAdmin = req.body.passe;

    const ulVIP = new vip({
        placeVIP : numberVip,
        NomAdmi : namAdmin
    });
    ulVIP.save((err)=>{
        if (err) {
            console.log("Erreur");
        } else {
             res.redirect('/');
        }
    });
});

module.exports = router;