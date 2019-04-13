'use strict'
//conexion a la bd con mongoose

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio',{useNewUrlParser:true})
        .then(()=>{
            console.log("Conexión a BD exitosa! :)")
            app.listen(port,function(){  
                console.log('servidor iniciado correctamente en la url localhost:3700');
            });
            //creación del servidor
        })
        .catch(err => console.log(err));
