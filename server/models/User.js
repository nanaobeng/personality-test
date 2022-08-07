const { DataTypes } = require("@sequelize/core");
const sequelize = require("../database/db");

const User =  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: "User",
    }
  );

  module.exports = User;