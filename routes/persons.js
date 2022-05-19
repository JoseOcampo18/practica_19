//Inyección de la dependencia Express
const express = require('express');

//Generar intancia del router
const router = express.Router();

//Inyección de la dependencia de Mongoose
const mongoose = require('mongoose');

//Inyección de la dependencia del modelo "person"
let Person = require('../models/person');

//Ruta "/persons", metodo GET
router.get('/persons', function(req, res, next) {
    Person.find(function (err, persons){
        if (err) return next(err);
        res.json(persons);
    })
});

//Ruta "/person", metodo GET; Renderiza la vista del formulario para enviar los datos
router.get('/person', function (req, res) {
    res.render('person');
});

//Ruta "/addPerson", metodo POST; para agregar un nuevo dicumento a la coleccíón
router.post('/addPerson', function(req, res) {
    //console.log(req.body);
    const myPerson = new Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });//Crear la entidad
    myPerson.save() //Guardar en la bd
});

//Exporte de el ruteador
module.exports = router;