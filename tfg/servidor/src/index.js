let express = require('express');
let app = express();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});


//CONFIGURACION DEL SERVIDOR
app.set('port', process.env.PORT || 3000);

//MIDDLEWARES
app.use(express.json());


// Configurar cabeceras y cors
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
// });




// app.options("/*", function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     res.sendStatus(200);
// });

// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
// });

//ROUTES
app.use(require('./routes/usuario'));
app.use(require('./routes/medico'));
app.use(require('./routes/pulsera'));
app.use(require('./routes/enfermedad'));
app.use(require( './routes/recomendacion'));
app.use(require( './routes/medicacion'));

//INICIANDO EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ' + app.get('port'));
});

// lanzar servidor con npm run start