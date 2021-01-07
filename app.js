const express = require('express');
const app = express();
const personaController = require('./controllers/personaController');

app.use(exoress.urlencoded());

app.post('/persona', function(req, res) {
    try {
        if(!req.body.nombre || !req.body.apellido || !req.body.nickname || !req.body.edad || !req.body.email){
            throw new Error("Error en los parametros requeridos");
        }
    } catch (error) {
        console.log("Se produjo el siguiente error: ", error);
        res.sendStatus(422).send("Se produjo el sieguiente error: ",error);
    }
})