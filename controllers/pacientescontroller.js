const Paciente = require('../models/paciente.js');

exports.index = (req, res) => {
    Paciente.all((err, rows) => {
        if (err) throw err;
        res.render('pacientes', { pacientes: rows });
    });
};

exports.create = (req, res) => {
    const data = req.body;
    Paciente.create(data, () => res.redirect('/pacientes'));
};
