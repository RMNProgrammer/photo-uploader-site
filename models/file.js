const { DataTypes } = require('sequelize')
const db = require('../configs/db')

const file = db.define('files', 
  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    file_id: {
      type: DataTypes.STRING
    },
    file_name: {
        type: DataTypes.STRING
    }
  },{
    timestamps: false
})

module.exports = file