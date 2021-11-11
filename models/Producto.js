const { Sequelize, DataTypes } = require('sequelize');
//const sequelize = new Sequelize('sqlite::memory:');
const config = require('../libs/config');
      const sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config.params
      );
const Producto = sequelize.define('Producto', {
  // Model attributes are defined here
  sku: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: DataTypes.STRING,
    //allowNull: false,
  },
  Descripcion: DataTypes.TEXT,
  Categoria :  DataTypes.STRING,
  Precio: DataTypes.INTEGER
}, {
  // Other model options go here
});
(async () => {
  await sequelize.sync({ force: true });
  // Code here

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// `sequelize.define` also returns the model
//console.log(Producto === sequelize.models.Producto); // true

module.exports = Producto;