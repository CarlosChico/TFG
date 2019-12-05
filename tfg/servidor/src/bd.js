let mysql = require('mysql');

// SE CREA LA CONSEXION CON LA BD
let mysqlConex = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecv_monitoring',
    multipleStatements: true
});

mysqlConex.connect((err) => {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Base de datos conectada');
    }
});

module.exports = mysqlConex;