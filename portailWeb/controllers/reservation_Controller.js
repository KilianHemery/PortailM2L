var db = require('../databases/db.js')

exports.nom_salle = function (req, res, next)
{
    const reqsql = {

        name: 'salle',
        text: 'SELECT libelle FROM salle'
    };

    db.get().query(reqsql, function (err, result) {
        if (err) {
            console.log(err.stack);
            res.send('ERROR');
        } else {
            res.render('reservation', {salles : result, action: 'new'});
        }
    });

    //exports.insert_reservation = function (req, res, next) {

        const insert = {
            name: 'insertion',
            text: 'INSERT INTO reservation values("dateDeb", "salle", "nom", "email", "tel")'
        };
    }