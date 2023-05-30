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