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
  $(document).on("click", ".delivered", function() {
    event.preventDefault();
    console.log("test", $(this).data("id"));

    var id = $(this).data("id");
    $.ajax("/api/driver/" + id, {
      type: "PUT"
    }).then(function() {
      location.reload();
    });
    console.log("thx cuong");
  });
  var refreshCustomers = function() {
    API.getCustomers().then(function(data) {
      var customers = data.map(function(customer) {
        if (customer.deliveryB === true && customer.driver === "carlo") {
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
            .addClass("uk-button uk-default delivered float-right delete")
            .text("o")
            .attr("data-id", customer.id);

          $li.append($button);

          return $li;
        } else {
          console.log("Works");
        }
      });

      customerList.empty();
      customerList.append(customers);
    });
  };
  refreshCustomers();
});
