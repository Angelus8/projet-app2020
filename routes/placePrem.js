const express = require('express');
const router = express.Router();
const vip = require('../models/placePrem');

router.get('/', (req, res) => {
    res.render('Tribune/placePrem');
});

router.post('/addpre', (req, res) => {
    const numberPrem = req.body.user;
    const namAdmin = req.body.pass;

    const ulVIP = new vip({
        placePre : numberPrem,
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