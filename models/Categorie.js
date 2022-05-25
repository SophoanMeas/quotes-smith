const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

// create our User model
class Categorie extends Model {}

Categorie.init(
  {
     id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
      genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
  },
  {
    //table configurations
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = Categorie;