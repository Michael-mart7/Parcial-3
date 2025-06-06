const db = require('./db');
module.exports = {
    findUser: (usuario, callback) => {
    db.query('SELECT * FROM admin WHERE usuario = ?', [usuario], callback);
    }
};