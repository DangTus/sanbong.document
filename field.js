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

function getListField() {
    $.ajax({
        url: `${url_api}/field`,
        type: "get",
        data: {
            ward_id: 20227,
            location_id: 1,
            type_id: 2,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function getFieldDetail() {
    $.ajax({
        url: `${url_api}/field/detail`,
        type: "get",
        data: {
            field_id: 1,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function getTimeSlot() {
    $.ajax({
        url: `${url_api}/field/time-slot`,
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
