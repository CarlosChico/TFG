let express = require('express');
let router = express.Router();

let mysqlConex = require('../bd');

// crear recomendacion
router.post('/api/recomendacion', (req) => {
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let img = req.body.img;

    let sql = 'INSERT INTO recomendacion (titulo, descripcion, img) VALUES (?, ?, ?)';

    mysqlConex.query(sql, [titulo, descripcion, img], (err) => {
        if (!err) {
            console.log('Recomendacion creada');
        } else {
            console.log(err);
        }
    });
});

// modificar recomendacion
router.put('/api/recomendacion/:id_recomendacion', (req, res) => {
    let { id_recomendacion } = req.params;
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let img = req.body.img;

    let sql = 'UPDATE recomendacion SET titulo= ?, descripcion= ?, img= ? WHERE id_recomendacion= ?';

    mysqlConex.query(sql, [titulo, descripcion, img, id_recomendacion], (err, rows, data) => {
        if (!err) {
            console.log('Recomendacion modificada');
        } else {
            console.log(err);
        }
    });
});

// eliminar recomendacion
router.delete('/api/recomendacion/:id_recomendacion', (req, res) => {
    let { id_recomendacion } = req.params;

    let sql = 'DELETE FROM recomendacion WHERE id_recomendacion= ?';

    mysqlConex.query(sql, [id_recomendacion], (err, rows, data) => {
        if (!err) {
            console.log('Recomendacion borrada');
        } else {
            console.log(err);
        }
    });
});

// obtener todas las recomendaciones
router.get('/api/recomendacion', (req, res) => {
    let sql = 'SELECT * FROM recomendacion';

    mysqlConex.query(sql, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log('Recomendaciones obtenidas');
        } else {
            console.log(err);
        }
    });
});

// obtener una recomendacion por id
router.get('/api/recomendacion/:id_recomendacion', (req, res) => {
    let { id_recomendacion } = req.params;

    let sql = 'SELECT * FROM recomendacion WHERE id_recomendacion= ?';

    mysqlConex.query(sql, [id_recomendacion], (err, rows, data) => {
        if (!err) {
            res.json(rows[0]);
            console.log('Recomendacion obtenida');
        } else {
            console.log(err);
        }
    });
});



// asociar recomendacion a enfermedad
router.post('/api/enfermedad/:id_enfermedad/recomendacion', (req, res) => {
    let { id_enfermedad } = req.params;

    let id_recomendacion = req.body.id_recomendacion;

    let sql = 'INSERT INTO recomendacion_has_enfermedad (id_enfermedad, id_recomendacion) VALUES (?, ?)';

    mysqlConex.query(sql, [id_enfermedad, id_recomendacion], (err, rows, data) => {
        if (!err) {
            console.log("Recomendacion asociada a enfermedad");
        } else {
            console.log(err);
        }
    });
});

// obtener recomendaciones asociadas a enfermedad
router.get('/api/enfermedad/:id_enfermedad/recomendacion', (req, res) => {
    let { id_enfermedad } = req.params;

    let sql = `SELECT nombre_enfermedad, titulo as 'recomendacion'
                FROM enfermedad e, recomendacion_has_enfermedad h, recomendacion r
                WHERE h.id_enfermedad= ? AND e.id_enfermedad= ? AND r.id_recomendacion=h.id_recomendacion`;

    mysqlConex.query(sql, [id_enfermedad, id_enfermedad], (err, rows, data) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});



module.exports = router;