module.exports = function(sequelize, DataTypes) {
  var Customers = sequelize.define("Customers", {
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
      defaultValue: 0
    },
    day: {
      type: DataTypes.DATEONLY
    }
  });

  Customers.associate = function(models) {
    Customers.hasMany(models.PastDeliveries, {
      onDelete: "CASCADE"
    });
  };
  return Customers;
};
