const express = require('express');
const cors = require('cors');

import "reflect-metadata";



//const { dbConnection } = require('../database/config')

class Server {
    
    constructor(){
        this.app = express();
        this.port = 3000;
        this.productsPath = '/api/productos';

        //this.initDB();
        this.middlewares();
        this.routes();
    }

    // async initDB(){
    //     await dbConnection();
    // }

    middlewares(){ 
        //Funciones intermedias entre la solicitud del request y el controlador
        this.app.use( cors() )
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.productsPath, require('../routes/producto_rutas'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${ this.port }`)
          });
    }

}

module.exports = Server;