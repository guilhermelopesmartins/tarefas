'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quadro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quadro.init({
    titulo: DataTypes.STRING,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quadro',
    schema: 'tarefas',
    freezeTableName: true
  });
  return Quadro;
};