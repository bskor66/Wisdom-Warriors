const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Transactions extends Model { }

Transactions.init(
  {
    //ID of transaction
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // True = is expense False = is Income
    is_expense: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    // Amount of Transaction
    transaction_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    // FK Id of User
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    // Fk ID of Categories
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'transaction'
  }
);

module.exports = Transactions