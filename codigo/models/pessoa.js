'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  return Pessoas;
};