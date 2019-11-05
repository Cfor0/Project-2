$(document).ready(function() {
  const customerList = $("#customer-list");
  var API = {
    saveExample: function(example) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/examples",
        data: JSON.stringify(example)
      });
    },
    getCustomers: function() {
      return $.ajax({
        url: "api/customer",
        type: "GET"
      });
    },
    deleteExample: function(id) {
      return $.ajax({
        url: "api/examples/" + id,
        type: "DELETE"
      });
    }
  };
  var refreshCustomers = function() {
    API.getCustomers().then(function(data) {
      var customers = data.map(function(customer) {
        if (customer.deliveryB === true && customer.driver === "carlo") {
          let id = customer.id;
          var $a = $("<a>")
            .text("    Name:  " + customer.name + " , " + customer.address)
            .attr("href", "/customer/" + customer.id);

          var $li = $("<li>")
            .attr({
              class: "list-group-item",
              "data-id": customer.id
            })
            .append($a);

          var $button = $("<button>")
            .addClass("btn btn-danger float-right delete")
            .text("ｘ");

          $li.append($button);

          return $li;
        } else {
          console.log("poop");
        }
      });

      customerList.empty();
      customerList.append(customers);
    });
  };
  refreshCustomers();
});
