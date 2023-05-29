function loginSuccess() {
    $.ajax({
        url: `${url_api}/owner/login`,
        type: "post",
        data: {
            email: "chusan1@gmail.com",
            password: "admin",
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function loginFail() {
    $.ajax({
        url: `${url_api}/owner/login`,
        type: "post",
        data: {
            email: "chusan1@gmail.com",
            password: "admin1111111111",
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function loginErrorStatus() {
    $.ajax({
        url: `${url_api}/owner/login`,
        type: "post",
        data: {
            email: "chusankhoa@gmail.com",
            password: "admin",
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function loginErrorValidate() {
    $.ajax({
        url: `${url_api}/owner/login`,
        type: "post",
        data: {
            email: "admin",
            password1: "",
        },
        success: (res) => {
            console.log(res);
        },
        error: console.log,
    });
}
