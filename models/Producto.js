const {DataTypes } = require('sequelize');
const {sequelize} = require('../database/db');
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
module.exports = Producto;