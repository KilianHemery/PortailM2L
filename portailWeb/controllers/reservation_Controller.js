const ReservationPgDAO = require('../model/reservationPgDAO');
const reservationPgDAO = new ReservationPgDAO();

exports.liste_reservation = function (req, res, next) {
    reservationPgDAO.insertReservation(
        function (lesReservations) {
            res.render('reservation', {listeReservations: lesReservations, action: 'validation'})
        }
    );
};

exports.liste_salle = function (req, res, next){
    reservationPgDAO.selectSalle(function (lesSalles) {
            res.render('reservation',{listeSalles: lesSalles, action:'new'})
        }
    );
};