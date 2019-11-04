$(document).ready(function() {
  let customerName = $("#placeNameInput");
  let address = $("#addressInput");
  let deliveryTime = $("#deliveryTime");
  let deliveryDay = $("#deliveryDay");
  const customerList = $("#customer-list");
  //   let customerButton = $(".customerButton");
  //   var customerList = $("#customer-list");

  $(".createForm").on("submit", function(event) {
    event.preventDefault();

    var newCustomer = {
      name: customerName.val().trim(),
      address: address.val().trim(),
      deliveryTime: deliveryTime.val().trim(),
      day: deliveryDay.val().trim()
    };
    $.ajax("/api/customer", {
      type: "POST",
      data: newCustomer
    }).then(function() {
      // console.log(data.name);
      location.reload();
    });
    // function upsertCustomer (newCustomer) {
    //     $.post("/api/customer", newCustomer)
    //     .then(
    //         console.log(newCustomer)
    //     )
    // }
    // upsertCustomer();
  });
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
        if (customer.deliveryB === false) {
          var $a = $("<a>")
            .text(customer.name)
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
