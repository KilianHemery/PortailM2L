var express = require('express');
var router = express.Router();

var reservation_Controller = require('../controllers/reservation_Controller');


router.get('/',reservation_Controller.nom_salle);

router.post('/',
    function(req, res) {
        res.render('reservation', { title: 'Formulaire', user: req.user, action:'validation' });
    }
);



module.exports = router;