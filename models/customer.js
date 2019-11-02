module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deliveryTime: {
      type: DataTypes.INTEGER,
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

  Customer.associate = function(models) {
    Customer.hasMany(models.PastDelivery, {
      foreignKey: "owner",
      onDelete: "CASCADE"
    });
  };
  return Customer;
};
