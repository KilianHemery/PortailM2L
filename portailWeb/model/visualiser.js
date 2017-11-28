
class Visualiser {

    /** Constructeur*/
    /**
     *Instancie une nouvelle tache
     * @param {int} unid - id de la tache
     * @param {string} unLib  - libelle de la tache
     */
    constructor(unId, unLib, uneCapacite, uneCategorie) {
        this._id = unId;
        this._libelle = unLib;
        this._capacite = uneCapacite;
        this._categorie =  uneCategorie;
    }
    get libelle(){
        return this._libelle;
    }
}
module.exports = Visualiser;