function getLocationByWard() {
    $.ajax({
        url: `${url_api}/location/by-ward`,
        type: "get",
        data: {
            ward_id: 20227,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function getLocationDetail() {
    $.ajax({
        url: `${url_api}/location/by-id`,
        type: "get",
        data: {
            location_id: 1,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function getFieldType() {
    $.ajax({
        url: `${url_api}/field-type`,
        type: "get",
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function getField() {
    $.ajax({
        url: `${url_api}/field-by-type-and-location`,
        type: "get",
        data: {
            type_id: 1,
            location_id: 1,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function getTimeSlot() {
    $.ajax({
        url: `${url_api}/location/time-slot`,
        type: "get",
        data: {
            date: "2023-06-30",
            field_id: 1,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}
