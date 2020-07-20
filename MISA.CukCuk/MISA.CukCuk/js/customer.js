$(document).ready(function () {
    loadData();
})

function loadData() {
    $.each(data, function (index, item) {
        var trHTML = $(`<tr>
                            <td>`+ item.EmployeeCode + `</td>
                            <td>`+ item.EmployeeName + `</td>
                            <td>`+ item.email + `</td>
                            <td>`+ item.mobile + `</td>
                            <td>`+ item.adress + `</td>
                        </tr>`);
                        debugger;
        $('.grid tbody').append(trHTML);

    })
}

var data = [
    {
        EmployeeCode: "NV10111",
        EmployeeName: "Hoàng Trung",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },

    {
        EmployeeCode: "NV10131",
        EmployeeName: "Mã Siêu",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },

    {
        EmployeeCode: "NV40111",
        EmployeeName: "Lưu Bị",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },

    {
        EmployeeCode: "NV10151",
        EmployeeName: "Quan Vũ",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },

    {
        EmployeeCode: "NV10711",
        EmployeeName: "Trương Phi",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },

    {
        EmployeeCode: "NV10911",
        EmployeeName: "Triệu Vân",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },

    {
        EmployeeCode: "NV40111",
        EmployeeName: "Khổng Minh",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },


]