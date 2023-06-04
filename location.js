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

function booking() {
    $.ajax({
        url: `${url_api}/location/book-field`,
        type: "post",
        data: {
            timeslot_id: 15,
            field_id: 8,
            customer_id: 5,
            customer_name: "Nguyễn Thành Viên",
            phone_number: "0123456789",
            date_book: "2023-05-10",
            price: 300000,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function uploadImage() {
    const listImageFileElement = document.querySelector("#images");

    var formData = new FormData();
    formData.append("location_id", 1);
    formData.append("name", "Hòa Tiến Vip");
    formData.append("description", "Sân này vip nhất Hòa Tiến");
    formData.append("time_open", "07:00");
    formData.append("time_close", "22:00");
    formData.append("ward_id", 20227);
    formData.append("address", "Dương Sơn");
    formData.append("link_map", "https://goo.gl/maps/UisAzZN1mEVQC8K19");
    formData.append("status_id", 1);

    for (let imageFileElement of listImageFileElement.files) {
        formData.append("images[]", imageFileElement);
    }

    $.ajax({
        url: `${url_api}/owner/location/update`,
        type: "post",
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}
