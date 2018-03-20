module.exports = function(sequelize, DataTypes) {

  var  UserID = sequelize.define("UserID", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true

    // },
    userName: {
      type: DataTypes.STRING,
      //allowNull: false
    },
    
    passWord: {
      type: DataTypes.STRING,
      //allowNull: false,

      validate: {
        len:{
          args: [1, 5],
          msg: "Your password is too long. Please keep it under 5 characters."
        }
      }
    },

    teamName: {
      type: DataTypes.STRING,
      //allowNull: false
    }
  }, {
    // timestamps: false
  });

  
// Export the database functions for the controller (catsController.js).
return UserID;

};



