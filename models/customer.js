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
      allowNull: false,
      validate: {
        isInt: true,
        min: 1,
        max: 2359
      }
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
      onDelete: "CASCADE"
    });
  };
  return Customer;
};
