module.exports = function(sequelize, DataTypes) {

  var Athlete  = sequelize.define("Athlete", {
    athleteName: {
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
    specialSkill: {
      type: DataTypes.INTEGER,
      //allowNull: false
    },
    athleteCost: {
      type: DataTypes.INTEGER,
      //allowNull: false
    },
    // games injured
    athleteInjured: {
      type: DataTypes.INTEGER,
      defaultValue: 0
      //allowNull: false
    },
  }, {
    // timestamps: false
  });

  Athlete.associate = function(models) {
    Athlete.belongsTo(models.Owner, {
      foreignKey: {
        allowNull: false,
        defaultValue: 1
      }
    });
    // NOT POSSIBLE IN SEQUELIZE!!!  Cannot associate tables with non-'id' keys
    // Athlete.hasOne(models.SpecialSkill, {  });
  };

  // Export the database functions for the controller.
  return Athlete;
};
