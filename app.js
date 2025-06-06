require('dotenv').config();

const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();



// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: 'secret123',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

console.log('RUTA AUTH:', require('./routes/auth'));
console.log('RUTA PACIENTES:', require('./routes/pacientes'));
console.log('RUTA CITAS:', require('./routes/citas'));

// Rutas
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});
app.use('/', require('./routes/auth.js'));
app.use('/pacientes', require('./routes/pacientes.js'));
app.use('/citas', require('./routes/citas'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});