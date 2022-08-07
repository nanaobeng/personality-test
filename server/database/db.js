const { DataTypes ,Sequelize } = require('@sequelize/core')


const sequelize = new Sequelize('sqlite::memory:', {
   
    logging: false
  
  });

const main = async () => {


    

    const User = await sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING
        },
        
      }, {
        sequelize,
        timestamps: true,
        modelName: 'User' 
      });

      await sequelize.sync({ force: true });
      console.log("All models were synchronized successfully.");


      const test = await User.create({ email: "test@test.com" , password: "test" });
      const users = await User.findAll();
      console.log("All users:", JSON.stringify(users, null, 2));



}



main().catch((err) => {
    console.log(err);
  });

 


module.exports = sequelize;