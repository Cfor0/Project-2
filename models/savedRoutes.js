module.exports = function(sequelize, DataTypes) {
  var SavedRoutes = sequelize.define("SavedRoutes", {
    name: DataTypes.STRING
  });
  return SavedRoutes;
};
