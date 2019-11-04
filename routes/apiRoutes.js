var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/customer", function(req, res) {
    db.Customer.findAll({
      //show PastDelivery model
      // include: [
      //   {
      //     model: db.PastDelivery
      //   }
      // ]
    }).then(function(dbCustomer) {
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

  app.update("/api/customer/:id", function(req, res) {
    // console.log(req.body);
    db.Customer.update({
      driver: req.body.driver,
      deliveryB: 1,
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomer) {
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
