var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/customer", function(req, res) {
    db.Customer.findAll({}).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });
  console.log(db.Customer);
  // console.log(Customer);
  // Create a new example
  // app.post("/api/customer", function(req, res) {
  //   db.Customer.create({
  //     name: "Carlo",
  //     address: "4126 O'Connell Street",
  //     deliveryTime: 1159,
  //     day: "11/12/2019"
  //   }).then(function(dbCustomer) {
  //     res.json(dbCustomer);
  //   });
  // });

  app.post("/api/customer", function(req, res) {
    console.log(req.body);
    db.Customer.create(req.body).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.put("/api/customer/:id", function(req, res) {
    console.log("request body: ", req.body);
    db.Customer.update(
      { driver: req.body.driver, deliveryB: 1 },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.put("/api/driver/:id", function(req, res) {
    db.Customer.update(
      { driver: null, deliveryB: 0 },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(dbCustomer) {
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
