const  {Client} = require('pg');
const Reservation = require('../model/reservation');

class SallePgDAO {

    constructor() {
        this._client = new Client({
            connectionString: 'postgres://groupe1:groupe1@192.168.222.86:5432/M2L'
        });

        client.connect(function (err) {
            if (err) return done(err);
        });
    }
}