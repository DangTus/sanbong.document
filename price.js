function getTimeslotWithPrice() {
    $.ajax({
        url: `${url_api}/owner/time-slot/with-price`,
        type: "get",
        data: {
            location_id: 1,
            fieldtype_id: 1,
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function updatePriceByTimeSlot() {
    $.ajax({
        url: `${url_api}/owner/time-slot/update-price-by-timeslot`,
        type: "post",
        data: {
            location_id: 1,
            fieldtype_id: 1,
            list_timeslot_with_price: [
                {
                    timeslot_id: 1,
                    price: null,
                },
                {
                    timeslot_id: 2,
                    price: null,
                },
                {
                    timeslot_id: 3,
                    price: 200000,
                },
                {
                    timeslot_id: 4,
                    price: 200000,
                },
                {
                    timeslot_id: 5,
                    price: 200000,
                },
                {
                    timeslot_id: 6,
                    price: 200000,
                },
                {
                    timeslot_id: 7,
                    price: 200000,
                },
                {
                    timeslot_id: 8,
                    price: null,
                },
                {
                    timeslot_id: 9,
                    price: null,
                },
                {
                    timeslot_id: 10,
                    price: 200000,
                },
                {
                    timeslot_id: 11,
                    price: 200000,
                },
                {
                    timeslot_id: 12,
                    price: 200000,
                },
                {
                    timeslot_id: 13,
                    price: 200000,
                },
                {
                    timeslot_id: 14,
                    price: 300000,
                },
                {
                    timeslot_id: 15,
                    price: 300000,
                },
                {
                    timeslot_id: 16,
                    price: 300000,
                },
                {
                    timeslot_id: 17,
                    price: 300000,
                },
                {
                    timeslot_id: 18,
                    price: null,
                },
                {
                    timeslot_id: 19,
                    price: null,
                },
            ],
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}

function updatePriceByTimeSlotError() {
    $.ajax({
        url: `${url_api}/owner/time-slot/update-price-by-timeslot`,
        type: "post",
        data: {
            location_id: 1,
            fieldtype_id: 1,
            list_timeslot_with_price: [
                {
                    timeslot_id: 1,
                    price: -123423,
                },
                {
                    timeslot_id: 2,
                    price: "sdfghdsg",
                },
                {
                    timeslot_id: 3,
                    price: "",
                },
            ],
        },
        success(res) {
            console.log(res);
        },
        error: console.log,
    });
}
