function customerById() {
    $.ajax({
        url: `${url_api}/customer/by-id`,
        type: "get",
        data: {
            customer_id: 5,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function updateCustomerInfo() {
    const customerImageElement = document.querySelector("#customer-image");

    let formData = new FormData();
    formData.append("customer_id", 5);
    formData.append("name", "Nguyễn Thành Viên");
    formData.append("image", customerImageElement.files[0]);
    formData.append("dob", "2002-02-02");
    formData.append("phone_number", "0123456789");
    formData.append("ward_id", "20227");
    formData.append("address", "nhà 999");
    formData.append("status_id", "2");

    $.ajax({
        url: `${url_api}/customer/update`,
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
