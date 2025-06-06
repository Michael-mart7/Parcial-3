const Cita = require('../models/cita');
const db = require('../models/db');

exports.index = (req, res) => {
    Cita.all((err, rows) => {
        if (err) {
            console.error("Error al obtener citas:", err);
            return res.status(500).render('error', { message: "Error al cargar citas" });
        }
        res.render('citas', { citas: rows });
    });
};

exports.form = (req, res) => {
    db.query('SELECT * FROM pacientes', (err, pacientes) => {
        if (err) {
            console.error("Error al crear cita:", err.sqlMessage || err.message || err);
            
        }
        res.render('citas_form', { pacientes });
    });
};

exports.create = (req, res) => {
    console.log('Datos recibidos en POST /citas/nueva:', req.body);
    const { paciente_id, fecha, hora, servicio } = req.body;
    
    // Validación básica
    if (!paciente_id || !fecha || !hora || !servicio) {
        return res.status(400).render('citas_form', {
            pacientes: [],
            error: "Todos los campos son requeridos"
        });
    }



    const nuevaCita = { 
        paciente_id: parseInt(paciente_id), // Asegurar que sea número
        fecha,
        hora,
        servicio 
    };

    Cita.create(nuevaCita, (err) => {
        if (err) {
            console.error("Error al crear cita:", err);
            
            // Recargar pacientes para mostrar el formulario nuevamente
            db.query('SELECT * FROM pacientes', (err, pacientes) => {
                return res.status(500).render('citas_form', {
                    pacientes: pacientes || [],
                    error: "Error al guardar la cita"
                });
            });
        } else {
            res.redirect('/citas');
        }
    });
};