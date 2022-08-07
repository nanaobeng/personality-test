const { DataTypes } = require("@sequelize/core");
const sequelize = require("../database/db");

const Question =  sequelize.define(
    "Question",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
      },
      option_a: {
        type: DataTypes.STRING,
      },
      option_b: {
        type: DataTypes.STRING,
      },
      option_c: {
        type: DataTypes.STRING,
      },
      option_d: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: "Question",
    }
  );

  module.exports = Question;