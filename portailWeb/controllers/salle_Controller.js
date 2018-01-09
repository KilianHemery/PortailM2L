var db = require('../databases/db.js')

//Affichage de toutes les salles

exports.salle_list = function(req,res,next) {
    const query = {

        name: 'affichage-toutes-salles',
        text: 'SELECT salle.libelle, capacite, libellecat, concat(heureouverture ,\'H\', minutesouvertures) as "heureouverture", concat(heurefermeture ,\'H\',minutesfermetures) as "heurefermeture" FROM salle INNER JOIN categorie ON salle.unecategorie = categorie.id'

    };
    db.get().query(query, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');
        } else {
            res.render('visualiser', { listeSalles : result });
        }
    });
};



/*
//Affichage de toutes les categories

exports.categorie_list = function(req,res,next) {
    const query = {

        name: 'affichage-toutes-salles',
        text: 'SELECT * FROM categorie'

    };

    db.get().query(query, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');
        } else {
            res.render('visualiser', { listeCategorie : result });
        }
    });
};
*/