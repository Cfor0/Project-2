var db = require("../models");
var moment = require("moment");

module.exports = function(app) {
  // Get all examples
  app.get("/api/customers", function(req, res) {
    db.Customer.findAll({
      //show PastDelivery model
      include: [
        {
          model: db.PastDelivery
        }
      ]
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });
  console.log(db.Customer);
  // console.log(Customer);
  // Create a new example
  app.post("/api/customer", function(req, res) {
    db.Customer.create({
      name: "Carlo",
      address: "4126 O'Connell Street",
      deliveryTime: moment(1230).format("HH")
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.post("/api/customer", function(req, res) {
    db.Author.create(req.body).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  // Delete an example by id
  app.delete("/api/customers/:id", function(req, res) {
    db.Customer.destroy({ where: { id: req.params.id } }).then(function(
      dbCustomer
    ) {
      res.json(dbCustomer);
    });
  });
};
