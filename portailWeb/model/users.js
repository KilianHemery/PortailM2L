var records = [
    { id: 1, username: 'jack', password: 'secret'}
  , { id: 2, username: 'jill', password: 'birthday'}
];


// Research function by id
exports.findById = function(id,callback) {
    find = false;
    records.forEach(function(record) {
        if (record.id == id) {
            find = true;
            return callback(null, record);
        }
    });
    if (!(find)){
        return callback(new Error('User ' + id + ' does not exist'))}
 };

// Research function by Username
exports.findByUsername = function(username, callback) {
    var find = false;
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
          find=true;
          return callback(null, record);
      }
    }

    if (!(find)) {
        return callback(null, null);
    }
};



exports.registerUser = function (nom, prenom, adresse,  eMail, telephone, username, passeword, callback) {
    this.findByUsername(username, function (user) {
            if (user == null) {
                AdherentDAO.setNewAdherent(nom,prenom,adresse,eMail,telephone,username,passeword);
                return callback(true);
            }
            else {
                callback(false)
            }
        }
    );
};
