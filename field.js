function getByLocation() {
    $.ajax({
        url: `${url_api}/field/by-location`,
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

function getById() {
    $.ajax({
        url: `${url_api}/field/by-id`,
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

function create() {
    $.ajax({
        url: `${url_api}/field/create`,
        type: "post",
        data: {
            name: "Sân nhỏ 99",
            description: "Sân này mới xây",
            type_id: 1,
            location_id: 1,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function update() {
    $.ajax({
        url: `${url_api}/field/update`,
        type: "post",
        data: {
            field_id: 9,
            name: "Sân nhỏ 9999",
            description: "Sân này mới xây gần đây",
            status_id: 2,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function deleteField() {
    $.ajax({
        url: `${url_api}/field/delete`,
        type: "post",
        data: {
            field_id: 9,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}
