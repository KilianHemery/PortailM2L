var express = require('express');
var router = express.Router();

var salle_Controller = require('../controllers/salle_Controller');

//GET toutes les salles
router.get('/',salle_Controller.salle_list);





module.exports = router;