var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',
    function(req, res) {
        console.log(req.session);

        res.render('index', { title: 'Portail de la M2L', user: req.user });
    }
);

router.get('/services',
    function(req, res) {
        console.log(req.session);

        res.render('services', { title: 'Services de la M2L', user: req.user });
    }
);

router.get('/description',
    function(req, res) {
        console.log(req.session);

        res.render('description', { title: 'Description de la M2L', user: req.user });
    }
);

module.exports = router;