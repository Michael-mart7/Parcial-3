const db = require('./db');
module.exports = {
  all: cb => db.query('SELECT * FROM pacientes', cb),
    create: (data, cb) => db.query('INSERT INTO pacientes SET ?', data, cb)
};