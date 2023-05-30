function getListProvince() {
    $.ajax({
        url: `${url_api}/province`,
        type: "get",
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function getListDistrict() {
    $.ajax({
        url: `${url_api}/district`,
        type: "get",
        data: {
            province_id: 48,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function getListWard() {
    $.ajax({
        url: `${url_api}/ward`,
        type: "get",
        data: {
            district_id: 492,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function getWardDetail() {
    $.ajax({
        url: `${url_api}/ward-detail`,
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
