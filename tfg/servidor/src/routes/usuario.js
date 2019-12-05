let express = require('express');
let bcrypt = require('bcryptjs');
let router = express.Router();

let mysqlConex = require('../bd');


// crear un paciente
router.post('/api/paciente', (req, res) => {
    let sip = req.body.sip;
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let pwd = bcrypt.hashSync(req.body.pwd, bcrypt.genSaltSync(9));
    let edad = req.body.edad;
    let peso = req.body.peso;
    let genero = req.body.genero;
    let medico = req.body.medico;

    let sql = `INSERT INTO usuario (sip, nombre, apellidos, pwd, edad, peso, genero, medico) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    mysqlConex.query(sql, [sip, nombre, apellidos, pwd, edad, peso, genero, medico], (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Paciente añadido');
        }
    });
});




// modificar paciente
router.put('/api/paciente/:sip2', (req, res) => {
    let { sip2 } = req.params;

    let sip = req.body.sip;
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let pwd = req.body.pwd;
    let edad = req.body.edad;
    let peso = req.body.peso;
    let genero = req.body.genero;
    let medico = req.body.medico;

    let sql = `UPDATE usuario SET sip= ?, nombre= ?, apellidos= ?, pwd= ?, edad= ?, peso= ?, genero= ?, medico= ? WHERE sip = ?`;

    mysqlConex.query(sql, [sip, nombre, apellidos, pwd, edad, peso, genero, medico, sip2], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Paciente modificado');
            res.send(rows[0]);
        }
    });
});




// eliminar un paciente
router.delete('/api/paciente/:sip', (req, res) => {
    let { sip } = req.params;
    mysqlConex.query('DELETE FROM usuario WHERE sip = ?', [sip], (err, rows, fields) => {
        if (!err) {
            res.send('Usuario eliminado');
        } else {
            console.log(err);
        }
    });
});



// obtener todos los pacientes
router.get('/api/paciente', (req, res) => {
    mysqlConex.query('SELECT * FROM usuario', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log('Pacientes obtenidos');
        } else {
            console.log(err);
        }
    });
});




// obtener un paciente
router.get('/api/paciente/:sip', (req, res) => {
    let { sip } = req.params;
    mysqlConex.query('SELECT * FROM usuario WHERE sip = ?', [sip], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
            console.log('Paciente obtenido');
        } else {
            console.log(err);
        }
    });
});




// obtener enfermedades asociadas a un paciente
router.get('/api/paciente/:usuario_sip/enfermedad', (req, res) => {
    let { usuario_sip } = req.params;

    let sql = `SELECT e.id_enfermedad, e.nombre_enfermedad, e.descripcion
                FROM usuario u, enfermedad e, enfermedades_has_usuarios h 
                WHERE usuario_sip= ? AND sip= ? AND h.id_enfermedad=e.id_enfermedad`;

    mysqlConex.query(sql, [usuario_sip, usuario_sip], (err, rows) => {
        if (!err) {
            res.json(rows[0]);
            console.log('Enfermedad de paciente obtenida');
        } else {
            console.log(err);
        }
    });
});




// asociar enfermedad a un paciente
router.post('/api/paciente/:usuario_sip/enfermedad', (req, res) => {
    let { usuario_sip } = req.params;

    let id_enfermedad = req.body.id_enfermedad;

    let sql = 'INSERT INTO enfermedades_has_usuarios (usuario_sip, id_enfermedad) VALUES (?, ?)';

    mysqlConex.query(sql, [usuario_sip, id_enfermedad], (err, rows, data) => {
        if (!err) {
            console.log("Enfermedad asociada a usuario");
        } else {
            console.log(err);
        }
    });
});

//obtener umbral superior de usuario
router.get('/api/paciente/:usuario_sip/umbral_superior', (req, res) => {
    let { usuario_sip } = req.params;

    let sql = 'SELECT * FROM umbral WHERE usuario_sip = ? AND nombre= "superior"';

    mysqlConex.query(sql, [usuario_sip], (err, rows) => {
        if (!err) {
            res.json(rows[0]);
            console.log('Umbral superior obtenido');
        } else {
            console.log(err);
        }
    });
});

//obtener umbral inferior de usuario
router.get('/api/paciente/:usuario_sip/umbral_inferior', (req, res) => {
    let { usuario_sip } = req.params;

    let sql = 'SELECT * FROM umbral WHERE usuario_sip = ? AND nombre= "inferior"';

    mysqlConex.query(sql, [usuario_sip], (err, rows) => {
        if (!err) {
            res.json(rows[0]);
            console.log('Umbral inferior obtenido');
        } else {
            console.log(err);
        }
    });
});

module.exports = router;



// {
//     "sip": "",
//     "nombre": "",
//     "apellidos": "",
//     "pwd": "",
//     "edad": "",
//     "peso": "",
//     "genero": "",
//     "medico": ""
// }