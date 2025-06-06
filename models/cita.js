const db = require('./db');

module.exports = {
        all: (cb) => {
            const sql = `
        SELECT citas.*, pacientes.nombre 
        FROM citas 
        JOIN pacientes ON citas.paciente_id = pacientes.id
        `;
        db.query(sql, cb);
    },
    create: (data, cb) => {
    const sql = 'INSERT INTO citas SET ?';
    db.query(sql, data, cb);
    }
};  