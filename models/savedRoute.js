module.exports = function(sequelize, DataTypes) {
  var SavedRoute = sequelize.define("SavedRoute", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  SavedRoute.associate = function(models) {
    SavedRoute.belongsTo(models.PastDelivery, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return SavedRoute;
};
