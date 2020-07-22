const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Qr/qr');
});

module.exports = router;