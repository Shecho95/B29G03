const  {Sequelize} = require('sequelize');
const path = require('path');
const fs= require('fs');

//const dbConexion = null  => {
module.exports = app => {
    
let db = null;
    if(!db) {
      const config = require('./libs/config');
      const sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config.params
      );
      db = {
        sequelize,
        Sequelize,
        models: {}
      };
      
      const dir = path.join(__dirname, 'models');
      fs.readdirSync(dir).forEach(filename => {
          const modelDir = path.join(dir, filename);
          const model = sequelize.import(modelDir);
          db.models[model.name] = model;
        });
      
       Object.keys(db.models).forEach(key => {
         db.models[key].associate(db.models);
       });
    };
    

  return db;
}
//module.exports = {db}