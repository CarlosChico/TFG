let express = require('express');
let router = express.Router();

let mysqlConex = require('../bd');

// obtener todos los registros de las pulseras
router.get('/api/pulsera', (req, res) => {
    let sql = 'SELECT * FROM pulsera';
    mysqlConex.query(sql, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// obtener todos los registros de un paciente
router.get('/api/pulsera/:usuario_sip', (req, res) => {
    let { usuario_sip } = req.params;

    let sql = 'SELECT * FROM pulsera WHERE usuario_sip= ?';

    mysqlConex.query(sql, [usuario_sip], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// obtener los registros fuera del umbral
router.get('/api/umbral/:usuario_sip', (req, res) => {
    let { usuario_sip } = req.params;
    let usu2 = usuario_sip;

    let sql = `SELECT p.ritmo, p.fecha FROM pulsera p, umbral u
     WHERE p.usuario_sip= ? AND u.usuario_sip=? AND (p.ritmo>u.ritmo AND u.nombre="superior") OR (p.ritmo<u.ritmo AND u.nombre="inferior")
     ORDER BY p.fecha desc`;

    mysqlConex.query(sql, [usuario_sip, usu2], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// crear registro de pulsera
router.post('/api/pulsera/:usuario_sip', (req, res) => {
    let { usuario_sip } = req.params;

    let sql = 'INSERT INTO pulsera (ritmo, usuario_sip) VALUES (?, ?)';

    let ritmo = req.body.ritmo;

    mysqlConex.query(sql, [ritmo, usuario_sip], (err, rows, data) => {
        if (!err) {
            console.log('Registro añadido');
        } else {
            console.log(err);
        }
    });
});

// borrar registros de un usuario
router.delete('/api/pulsera/:usuario_sip', (req, res) => {
    let { usuario_sip } = req.params;

    let sql = 'DELETE FROM pulsera WHERE usuario_sip= ?';

    mysqlConex.query(sql, [usuario_sip], (err, rows, data) => {
        if (!err) {
            console.log('Registros del paciente borrados');
        } else {
            console.log(err);
        }
    });
});


module.exports = router;