module.exports = function(sequelize, DataTypes) {
  var PastDeliveries = sequelize.define("pastDeliveries", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isDelivered: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    }
  });

  PastDeliveries.associate = function(models) {
    PastDeliveries.belongsTo(models.Customers, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return PastDeliveries;
};
