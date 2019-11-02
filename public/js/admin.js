$(document).ready(function() {
  let customerName = $("#placeNameInput");
  let address = $("#addressInput");
  let deliveryTime = $("#deliveryTime");
  let deliveryDay = $("#deliveryDay");
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
});
