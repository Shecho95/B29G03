const express = require('express');
const cors = require('cors');


const { db } = require('../db')

class Server {
    
    constructor(){
        this.app = express();
        this.port = 3000;
        this.productsPath = '/api/productos';

        this.initDB();
        this.middlewares();
        this.routes();
    }

    initDB(){
        //const db= require('../db');
        //this.app.use(db, require('../db'));
     }

    middlewares(){ 
        //Funciones intermedias entre la solicitud del request y el controlador
        this.app.use( cors() )
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.productsPath, require('../routes/Productos'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listening at http://localhost:${ this.port }`)
          });
    }

}

module.exports = Server;