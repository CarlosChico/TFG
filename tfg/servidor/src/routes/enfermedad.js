let express = require('express');
let router = express.Router();

let mysqlConex = require('../bd');


// anadir enfermedad
router.post('/api/enfermedad', (req, res) => {
    let nombre_enfermedad = req.body.nombre_enfermedad;
    let descripcion = req.body.descripcion;

    let sql = 'INSERT INTO enfermedad (nombre_enfermedad, descripcion) VALUES (?, ?)';

    mysqlConex.query(sql, [nombre_enfermedad, descripcion], (err, rows, data) => {
        if (!err) {
            console.log('Enfermedad añadida');
        } else {
            console.log(err);
        }
    });
});



// modificar enfermedad
router.put('/api/enfermedad/:id_enfermedad', (req, res) => {
    let { id_enfermedad } = req.params;
    let nombre_enfermedad = req.body.nombre_enfermedad;
    let descripcion = req.body.descripcion;

    let sql = 'UPDATE enfermedad SET nombre_enfermedad= ?, descripcion= ? WHERE id_enfermedad= ?';

    mysqlConex.query(sql, [nombre_enfermedad, descripcion, id_enfermedad], (err, rows, data) => {
        if (!err) {
            console.log('Enfermedad modificada');
        } else {
            console.log(err);
        }
    });
});



// borrar enfermedad
router.delete('/api/enfermedad/:id_enfermedad', (req, res) => {
    let { id_enfermedad } = req.params;

    let sql = 'DELETE FROM enfermedad WHERE id_enfermedad= ?';

    mysqlConex.query(sql, [id_enfermedad], (err, rows, data) => {
        if (!err) {
            console.log('Enfermedad borrada');
        } else {
            console.log(err);
        }
    });
});



// obtener todas las enfermedades
router.get('/api/enfermedad', (req, res) => {
    let sql = 'SELECT * FROM enfermedad ORDER BY nombre_enfermedad';

    mysqlConex.query(sql, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log('Enfermedades mostradas');
        } else {
            console.log(err);
        }
    });
});



// obtener una enfermedad
router.get('/api/enfermedad/:id_enfermedad', (req, res) => {
    let { id_enfermedad } = req.params;

    let sql = 'SELECT * FROM enfermedad WHERE id_enfermedad= ?';

    mysqlConex.query(sql, [id_enfermedad], (err, rows, data) => {
        if (!err) {
            res.json(rows[0]);
            console.log('Enfermedade mostrada');
        } else {
            console.log(err);
        }
    });
});





module.exports = router;