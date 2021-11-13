const express = require('express');
const cors = require('cors');

const {sequelize}  = require('../database/db')

class Server {
    
    constructor(){
        this.app = express();
        this.port = 3000;
        this.productsPath = '/api/productos';
        this.usersPath = '/api/usuarios';
        this.initDB();
        this.middlewares();
        this.routes();
    }

    initDB(){
        
        (async () => {
            //await sequelize.sync({ force: true });
            await sequelize.sync();
            try {
              await sequelize.authenticate();
              console.log('Connection has been established successfully.');
            } catch (error) {
              console.error('Unable to connect to the database:', error);
            }
          })();
     }

    middlewares(){ 
        //Funciones intermedias entre la solicitud del request y el controlador
        this.app.use( cors() )
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.productsPath, require('../routes/Productos'));
        this.app.use(this.usersPath, require('../routes/Usuarios'));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listening at http://localhost:${ this.port }`)
          });
    }

}

module.exports = Server;