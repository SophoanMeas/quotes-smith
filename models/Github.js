const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class GitHub extends Model{}

GitHub.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            isAlphanumeric: true,
        }
    },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: 'github',
}
)

module.exports = GitHub;