var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Customer.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/rachel", function(req, res) {
    db.Customer.findAll({}).then(function(dbExamples) {
      console.log(dbExamples);
      res.render("rachel", {});
    });
  });
  app.get("/tim", function(req, res) {
    db.Customer.findAll({}).then(function(dbExamples) {
      console.log(dbExamples);
      res.render("tim", {});
    });
  });
  app.get("/carlo", function(req, res) {
    db.Customer.findAll({}).then(function(dbExamples) {
      console.log(dbExamples);
      res.render("carlo", {});
    });
  });
  app.get("/shawn", function(req, res) {
    db.Customer.findAll({}).then(function(dbExamples) {
      console.log(dbExamples);
      res.render("shawn", {});
    });
  });

  app.get("/admin", function(req, res) {
    db.Customer.findAll({}).then(function(dbExamples) {
      res.render("admin", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/about", function(req, res) {
    db.Customer.findAll({}).then(function(dbExamples) {
      res.render("about", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/customer/:id", function(req, res) {
    db.Customer.findOne({ where: { id: req.params.id } }).then(function(
      dbCustomer
    ) {
      res.render("example", {
        customers: dbCustomer
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
