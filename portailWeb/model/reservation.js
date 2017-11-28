class Reservation {

    constructor(unId, uneDateDebut, uneDateFin){
        this._id = unId;
        this._dateDebut = uneDateDebut;
        this._dateFin = uneDateFin;
    }

    get dateDebut(){
        return this._dateDebut
    }

    get dateFin(){
        return this._dateFin;
    }
}