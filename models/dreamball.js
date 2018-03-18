
module.exports = function(sequelize, DataTypes) {

  var DreamBall  = sequelize.define("DreamBall", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true

    // },
    charName: {
      type: DataTypes.STRING,
      //allowNull: false
    },
    homePlanet: {
      type: DataTypes.STRING,
      //allowNull: false
    },
    powerPoints: {
      type: DataTypes.INTEGER,
      //allowNull: false
    },
    specialSkills: {
      type: DataTypes.INTEGER,
      //allowNull: false
    },
    charCost: {
      type: DataTypes.INTEGER,
      //allowNull: false
    },
    ownerID: {
      type: DataTypes.INTEGER,
      //allowNull: false
    }
  }, {
    // timestamps: false
  });

  
// Export the database functions for the controller (catsController.js).
return DreamBall;

};




