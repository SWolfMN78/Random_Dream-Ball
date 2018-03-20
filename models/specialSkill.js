module.exports = function(sequelize, DataTypes) {

  var SpecialSkill = sequelize.define("SpecialSkill", {
    skillName: {
      type: DataTypes.STRING,
      //allowNull: false
    },
    skillWeight: {
      type: DataTypes.INTEGER,
      //allowNull: false
    }
  }, {
    // timestamps: false
  });

  // NOT POSSIBLE IN SEQUELIZE!!!  Cannot associate tables with non-'id' keys
  // SpecialSkill.associate = function(models) {
  //   SpecialSkill.belongsTo(models.Athlete, {
  //     foreignKey: 'specialSkill',
  //     as: 'athleteSkill',
  //     foreignKey: 'specialSkill',
  //   });
  // };

  // Export the database functions for the controller.
  return SpecialSkill;
};
