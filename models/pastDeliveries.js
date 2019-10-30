module.exports = function(sequelize, DataTypes) {
  var PastDeliveries = sequelize.define("pastDeliveries", {
    days: {
    //all of the past delivery days?
    },
    timeStamp: {
      type: DataTypes.DATE
    }
  });
  return PastDeliveries;
};
