var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',
    function(req, res) {
        console.log(req.session);

        res.render('index', { title: 'Portail de la M2L', user: req.user });
    }
);

router.get('/propos',
    function(req, res) {
        console.log(req.session);

        res.render('propos', { title: 'L\'annuaire des ligues' });
    }
);

router.get('/equipement',
    function(req, res) {
        console.log(req.session);

        res.render('equipement', { title: 'Équipement en matériel informatique des espaces' });
    }
);

module.exports = router;