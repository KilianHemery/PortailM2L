const  {Client} = require('pg');
const Salle = require('../model/visualiser');

class SallePgDAO {

    constructor() {
        this._client = new Client({
            connectionString: 'postgres://groupe1:groupe1@192.168.222.86:5432/M2L'
        });

        this._client.connect(function (err) {
            if (err) return done(err);
        });
    }

    selectSalles(displaycb)
    {
        const lesSalles = {
            name: 'les salles',
            text: 'SELECT * from salle'
        };

        this._client.query(lesSalles, function (err, result) {
            if (err){
                console.log(err.stack);
            }else {
                var allSalles = [];
                result.rows.forEach(function (row)
                {
                allSalles.push(row);
                });
                displaycb(allSalles);
            }
        });
    }
}
module.exports = SallePgDAO;