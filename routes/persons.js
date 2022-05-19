//Inyección de la dependencia Express
const express = require('express');

//Generar intancia del router
const router = express.Router();

//Inyección de la dependencia de Mongoose
const mongoose = require('../node_modules/mongoose');

//Inyección de la dependencia del modelo "person"
let Person = require('../models/person');

//Primera ruta "/persons", metodo GET
router.get('/persons', function(req, res, next) {
    Person.find(function (err, persons){
        if (err) return next(err);
        res.json(persons);
    })
});

//Exporte de el ruteador
module.exports = router;