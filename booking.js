function getListBooking() {
    $.ajax({
        url: `${url_api}/booking/by-location`,
        type: "get",
        data: {
            location_id: 1,
            date_book: null,
            status_id: 2,
            field_id: null,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function getDetailBooking() {
    $.ajax({
        url: `${url_api}/booking/by-id`,
        type: "get",
        data: {
            booking_id: 1,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function approveBooking() {
    $.ajax({
        url: `${url_api}/booking/update`,
        type: "post",
        data: {
            booking_id: 1,
            status_id: 2,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function cancelBooking() {
    $.ajax({
        url: `${url_api}/booking/update`,
        type: "post",
        data: {
            booking_id: 1,
            status_id: 3,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function payBooking() {
    $.ajax({
        url: `${url_api}/booking/update`,
        type: "post",
        data: {
            booking_id: 1,
            status_id: 4,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}
