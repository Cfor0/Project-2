module.exports = function(sequelize, DataTypes) {
  var SavedRoutes = sequelize.define("SavedRoutes", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  SavedRoutes.associate = function(models) {
    SavedRoutes.belongsTo(models.PastDeliveries, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return SavedRoutes;
};
