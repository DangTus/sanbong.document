function getOwner() {
    $.ajax({
        url: `${url_api}/admin/verification`,
        type: "get",
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function approve() {
    $.ajax({
        url: `${url_api}/admin/verification`,
        type: "post",
        data: {
            owner_id: 3,
            status_id: 2,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function refuse() {
    $.ajax({
        url: `${url_api}/admin/verification`,
        type: "post",
        data: {
            owner_id: 3,
            status_id: 3,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function verificationFail() {
    $.ajax({
        url: `${url_api}/admin/verification`,
        type: "post",
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}
