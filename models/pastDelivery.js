module.exports = function(sequelize, DataTypes) {
  var PastDelivery = sequelize.define("PastDelivery", {
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

  PastDelivery.associate = function(models) {
    PastDelivery.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return PastDelivery;
};
