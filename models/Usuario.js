const {DataTypes } = require('sequelize');
const {sequelize} = require('../database/db');
const Usuario = sequelize.define('Usuario', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Cedula: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  Contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Telefono: DataTypes.INTEGER,
  Direccion: DataTypes.STRING,
  Ciudad: DataTypes.STRING,
  Ultima_conexion: DataTypes.DATE
}, {
  // Other model options go here
});
module.exports = Usuario;
