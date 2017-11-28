var express = require('express');
var router = express.Router();

var reservation_Controller = require('../controllers/reservation_Controller');


router.get('/',
    function(req, res) {
        console.log(req.session);

        res.render('reservation', { title: 'Formulaire', user: req.user, action:'new' });
    }
);

router.post('/',
    function(req, res) {
        res.render('reservation', { title: 'Formulaire', user: req.user, action:'validation' });
    }
);



module.exports = router;