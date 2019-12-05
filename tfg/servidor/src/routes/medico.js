let express = require('express');
let bcrypt = require('bcryptjs');
let router = express.Router();

let mysqlConex = require('../bd');

// obtener todos los medicos
router.get('/api/medico', (req, res) => {
    mysqlConex.query('SELECT * FROM medico', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log('Medicos obtenidos');
        } else {
            console.log(err);
        }
    });
});

// obtener un medico
router.get('/api/medico/:colegiado', (req, res) => {
    let { colegiado } = req.params;

    mysqlConex.query('SELECT * FROM medico WHERE colegiado= ?', [colegiado], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
            console.log('Medico mostrado');
        } else {
            console.log(err);
        }
    });
});

// obtener los pacientes asociados a un medico
router.get('/api/medico/:colegiado/paciente', (req, res) => {
    let { colegiado } = req.params;

    mysqlConex.query('SELECT * FROM usuario WHERE medico= ?', [colegiado], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log('Pacientes obtenidos');
        } else {
            console.log(err);
        }
    });
});

// crear medico
router.post('/api/medico', (req, res) => {
    let colegiado = req.body.colegiado;
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let pwd = bcrypt.hashSync(req.body.pwd);

    let sql = `INSERT INTO medico (colegiado, nombre, apellidos, pwd) VALUES (?, ?, ?, ?)`;

    mysqlConex.query(sql, [colegiado, nombre, apellidos, pwd], (err, rows, data) => {
        if (!err) {
            console.log('Medico creado');
        } else {
            console.log(err);
        }
    });
});

// eliminar medico
router.delete('/api/medico/:colegiado', (req, res) => {
    let { colegiado } = req.params;

    let sql = `DELETE FROM medico WHERE colegiado = ?`;

    mysqlConex.query(sql, [colegiado], (err, rows, data) => {
        if (!err) {
            console.log('Medico borrado correctamente');
        } else {
            console.log(err);
        }
    });
});

// modificar medico
router.put('/api/medico/:colegiado2', (req, res) => {
    let { colegiado2 } = req.params;

    let colegiado = req.body.colegiado;
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let pwd = req.body.pwd;

    let sql = `UPDATE medico SET colegiado= ?, nombre= ?, apellidos= ?, pwd= ? WHERE colegiado= ?`;

    mysqlConex.query(sql, [colegiado, nombre, apellidos, pwd, colegiado2], (err, rows, data) => {
        if (!err) {
            console.log('Medico modificado correctamente');
        } else {
            console.log(err);
        }
    });
});



module.exports = router;


// {
//     "colegiado": "",
//     "nombre": "",
//     "apellidos": "",
//     "pwd": ""
// }