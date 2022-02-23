'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProyectoXTecnologia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProyectoXTecnologia.init({
    idproducto: DataTypes.INTEGER,
    idtecnologia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProyectoXTecnologia',
    freezeTableName : true
  });
  return ProyectoXTecnologia;
};