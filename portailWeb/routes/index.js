var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',
    function(req, res) {
        console.log(req.session);

        res.render('index', { title: 'Portail de la M2L', user: req.user });
    }
);

router.get('/reseaux',
    function(req, res) {
        console.log(req.session);

        res.render('reseaux', { title: 'Réseaux Informatique', user: req.user });
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

router.get('/services',
    function(req, res) {
        console.log(req.session);

        res.render('services', { title: 'Services de la M2L', user: req.user });
    }
);


module.exports = router;