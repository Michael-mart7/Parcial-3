const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
  password: '',       // tu contraseña aquí
    database: 'beauty_smile'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a MySQL desde TablePlus');
});

module.exports = connection;