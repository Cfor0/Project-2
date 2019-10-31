var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/customers", function(req, res) {
    db.Customer.findAll({}).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });
  console.log(db.Customer);
  // console.log(Customer);
  // Create a new example
  app.get("/api/test", function(req, res) {
    db.Customer.create(
      {
        name: "Carlo",
        address: "4126 O'Connell Street"
      },
      {
        name: "Joe",
        address: "1009 Trillium place"
      }
    ).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
