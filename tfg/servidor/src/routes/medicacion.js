let express = require('express');
let router = express.Router();

let mysqlConex = require('../bd');

// crear medicacion
router.post('/api/medicacion', (req, res) =>{
    let nombre = req.body.nombre;
    let descripcion = req.body.descripcion;
    let efectos_adversos = req.body.efectos_adversos;
    let img = req.body.img;

    let sql = 'INSERT INTO medicacion (nombre, descripcion, efectos_adversos, img) VALUES (?, ?, ?, ?)';

    mysqlConex.query(sql, [nombre, descripcion, efectos_adversos, img], (err, rows, data) => {
        if(!err){
            console.log('Medicacion creada');
        }else{
            console.log(err);
        }
    });
});

// modificar medicacion
router.put('/api/medicacion/:id_medicacion', (req, res) =>{
    let {id_medicacion} = req.params;
    let nombre = req.body.nombre;
    let descripcion = req.body.descripcion;
    let efectos_adversos = req.body.efectos_adversos;
    let img = req.body.img;

    let sql = 'UPDATE medicacion SET nombre= ?, descripcion= ?, efectos_adversos= ?, img= ? WHERE id_medicacion= ?';

    mysqlConex.query(sql, [nombre, descripcion, efectos_adversos, img,  id_medicacion], (err, rows, data) =>{
        if(!err){
            console.log('Medicacion modificada');
        }else{
            console.log(err);
        }
    });
});

// eliminar medicacion
router.delete('/api/medicacion/:id_medicacion', (req, res) => {
    let {id_medicacion} = req.params;

    let sql = 'DELETE FROM medicacion WHERE id_medicacion= ?';

    mysqlConex.query(sql, [id_medicacion], (err, rows, data) => {
        if(!err){
            console.log('Medicacion borrada');
        }else{
            console.log(err);
        }
    });
});

// obtener todas las medicacion
router.get('/api/medicacion', (req, res) => {
    let sql = 'SELECT * FROM medicacion';

    mysqlConex.query(sql, (err, rows, fields) =>{
        if(!err){
            res.json(rows);
            console.log('Medicaciones mostradas');
        }else{
            console.log(err);
        }
    });
});

// obtener una medicacion
router.get('/api/medicacion/:id_medicacion', (req, res) =>{
    let {id_medicacion} = req.params;

    let sql = 'SELECT * FROM medicacion WHERE id_medicacion= ?';

    mysqlConex.query(sql, [id_medicacion], (err, rows, data) =>{
        if(!err){
            res.json(rows[0]);
            console.log('Medicacion mostrada');
        }else{
            console.log(err);
        }
    });
});

// asociar enfermedad a medicacion
router.post('/api/enfermedad/:id_enfermedad/medicacion', (req, res) =>{
    let {id_enfermedad} = req.params;

    let id_medicacion = req.body.id_medicacion;

    let sql = 'INSERT INTO medicacion_has_enfermedad (id_enfermedad, id_medicacion) VALUES (?, ?)';

    mysqlConex.query(sql, [id_enfermedad, id_medicacion], (err, rows, data) =>{
        if(!err){
            console.log("Medicacion asociada a enfermedad");
        }else{
            console.log(err);
        }
    });
});

// obtener la medicacion asociada a una enfermedad
router.get('/api/enfermedad/:id_enfermedad/medicacion', (req, res) => {
    let {id_enfermedad} = req.params;

    let sql = `SELECT m.id_medicacion, m.nombre, m.descripcion, m.efectos_adversos, m.img
                FROM enfermedad e, medicacion_has_enfermedad h, medicacion m
                WHERE h.id_enfermedad= ? AND e.id_enfermedad= ? AND m.id_medicacion=h.id_medicacion`;

    mysqlConex.query(sql, [id_enfermedad, id_enfermedad], (err, rows, data) =>{
        if(!err){
            res.json(rows[0]);
            console.log('Medicacion asociada a enfermedad mostrada');
        }else{
            console.log(err);
        }
    });
});




module.exports = router;