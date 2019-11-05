$(document).ready(function() {
  var refreshCustomers = function() {
    API.getCustomers().then(function(data) {
      var customers = data.map(function(customer) {
        if (customer.deliveryB === true && customer.driver === "carlo") {
          let id = customer.id;
          var $a = $("<a>")
            .text("    Id#  " + id + " , " + customer.name)
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
