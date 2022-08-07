const { DataTypes, Sequelize } = require("@sequelize/core");

const sequelize = new Sequelize("sqlite::memory:", {
  logging: false,
});


  

  





module.exports = sequelize;
