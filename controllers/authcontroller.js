const Admin = require('../models/admin.js');

const authcontroller = {
    login: (req, res) => {
        const { usuario, contrasena } = req.body;
        Admin.findUser(usuario, (err, results) => {
            if (results.length > 0) {
                const admin = results[0];
                if (contrasena === admin.contrasena) {
                    req.session.usuario = admin; // importante para usar en layout
                    res.redirect('/pacientes');
                } else {
                    res.render('login', { error: 'Contraseña incorrecta' });
                }
            } else {
                res.render('login', { error: 'Usuario no encontrado' });
            }
        });
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    }
};

module.exports = authcontroller;