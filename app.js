'use strict'
//levantando el servidor nodeJS

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivo de rutas


//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//CORS


//rutas
app.get('/', function (req,resp){
    resp.status(200).send(function(){
       "<h1> Bienvenido!</h1>"
    });
    //.listen(3000, ()=>{console.log(resp)});
});

app.get('/test', function(req,res){
    res.status(200).send({
       message: 'Hola mundo desde mi API REST en NodeJS'
    });
});


// exportar

module.exports = app;