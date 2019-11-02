$(document).ready(function () {


    let $placeNameInput = $("#placeNameInput");
    let $addressInput = $("#addressInput");
    let $deliveryTime = $("#deliveryTime");
    let $deliveryDay = $("#deliveryDay");
    let $customerButton = $(".customerButton");
    var $customerList = $("#customer-list");

    const API = {
        saveCustomer: function (customer) {
            return $.ajax({
                headers: {
                    "Content-Type": "application/json"
                },
                type: "POST",
                url: "api/customer",
                data: JSON.stringify(customer)
            });
        },
        getCustomer: function () {
            return $.ajax({
                url: "api/customers",
                type: "GET"
            });
        },
        deleteCustomer: function (id) {
            return $.ajax({
                url: "api/customer/" + id,
                type: "DELETE"
            });
        }
    };

    const refreshCustomers = function () {
        API.getCustomers().then(function (data) {
            const $customers = data.map(function (customer) {
                const $a = $("<a>")
                    .text(customer.name)
                    .attr("href", "/customer/" + customer.id);

                const $li = $("<li>")
                    .attr({
                        class: "list-group-item",
                        "data-id": customer.id
                    })
                    .append($a);

                const $button = $("<button>")
                    .addClass("btn btn-danger float-right delete")
                    .text(" x ");

                $li.append($button);

                return $li;
            });

            $customerList.empty();
            $customerList.append($customers);
        });
    };

    const customerFormSubmit = function (event) {
        event.preventDefault();

        let customer = {
            name: $placeNameInput.val().trim(),
            address: $addressInput.val().trim(),
            deliveryTime: $deliveryTime.val().trim(),
            day: $deliveryDay.val().trim()
        };
        if (!(customer.name && customer.address && customer.deliveryTime && customer.day)) {
            alert(
                "You must enter have a delivery name, address, delivery time, and a day"
            );
            return;
        }

        API.saveCustomer(customer).then(function () {
            refreshCustomers();
        });

        $placeNameInput.val("");
        $addressInput.val("");
        $deliveryTime.val("");
        $deliveryDay.val("");
    };

    const handleDeleteBtnClick = function () {
        const idToDelete = $(this)
            .parent()
            .attr("data-id");

        API.deleteExample(idToDelete).then(function () {
            refreshCustomers();
        });
    };

    $customerButton.on("click", customerFormSubmit);
    $customerList.on("click", ".delete", handleDeleteBtnClick);
})