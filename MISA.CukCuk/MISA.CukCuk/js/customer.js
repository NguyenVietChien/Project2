$(document).ready(function () {
    
    var customer = new CustomerJS();

})

class CustomerJS {
    constructor(){
        this.loadData();
    }

    loadData(){
        $.each(data, function (index, item) {
            var trHTML = $(`<tr>
                                <td>`+ item.CustomerCode + `</td>
                                <td>`+ item.CustomerName + `</td>
                                <td>`+ item.email + `</td>
                                <td>`+ item.mobile + `</td>
                                <td>`+ item.adress + `</td>
                            </tr>`);
                            debugger;
            $('.grid tbody').append(trHTML);
    
        })
    }


}

var data = [
    {
        CustomerCode: "NV10111",
        CustomerName: "Hoàng Trung",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },

    {
        CustomerCode: "NV10131",
        CustomerName: "Mã Siêu",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },

    {
        CustomerCode: "NV40111",
        CustomerName: "Lưu Bị",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },

    {
        CustomerCode: "NV10151",
        CustomerName: "Quan Vũ",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },

    {
        CustomerCode: "NV10711",
        CustomerName: "Trương Phi",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },

    {
        CustomerCode: "NV10911",
        CustomerName: "Triệu Vân",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },

    {
        CustomerCode: "NV10711",
        CustomerName: "Trương Phi",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },

    {
        CustomerCode: "NV10911",
        CustomerName: "Triệu Vân",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    },

    {
        CustomerCode: "NV40111",
        CustomerName: "Khổng Minh",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        adress: "Cau giấy"
    }


]