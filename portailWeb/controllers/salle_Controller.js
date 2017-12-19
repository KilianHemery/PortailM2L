var db = require('../model/salleDAO')

//Affichage de toutes les salles

exports.salle_list = function(req,res,next) {
    const query = {

        name: 'affichage-toutes-salles',
        text: 'SELECT * FROM salle'
    };

    db.get().query(query, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');
        } else {
            res.render('visualiser', { listeSalle : result, user: req.user  });
        }
    });
};