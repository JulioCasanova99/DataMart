const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Data = sequelize.define('Data', {
    filename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Data;
