const  {Client} = require('pg');
const Reservation = require('../model/reservation');

class ReservationPgDAO {

    constructor() {
        this._client = new Client({
            connectionString: 'postgres://groupe1:groupe1@192.168.222.86:5432/M2L'
        });

        this._client.connect(function (err) {
            if (err) return done(err);
        });
    }

    insertReservation(req) {

        const insert = {
            name: 'insertion',
            text: "INSERT INTO reservation VALUES (4, '" + req.body.dateDeb + "', 1, '" + req.body.nom + "', '" + req.body.email + "', '" + req.body.tel + "')"
            //text: "INSERT INTO reservation VALUES (3, '19/12/2017', 1, 'abdc', 'a@mail', '0123456789')"
        };

        this._client.query(insert, function (err, result) {
            if (err) {
                console.log(err.stack);
            }
        });
    }
    selectSalle(displaycb)
        {

        const salle = {
            name: 'salle',
            text: 'SELECT libelle FROM salle'
        };

        this._client.query(salle, function (err, result) {
            if (err) {
                console.log(err.stack);
            } else {
               var lesSalles = [];
               result.rows.forEach(function(row)
               {
                  lesSalles.push(row);
               });
                displaycb(lesSalles);
            }


        });

    }

}
module.exports = ReservationPgDAO;