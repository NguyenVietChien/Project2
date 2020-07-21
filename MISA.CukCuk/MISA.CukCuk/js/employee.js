$(document).ready(function () {

    var employeess = new employeeJS();
    employeess.load_Data();

})

class employeeJS {
    constructor() {
        this.initEvents();
    }

    initEvents() {
        $('#btnAdd').click(this.btnAddOnClick.bind(this));
        $('#buttonCancel').click(this.btnCancelOnClick.bind(this));
        $('#buttonSave').click(this.btnSaveOnClick.bind(this));
        $('.title-close-button').click(this.btnCancelOnClick.bind(this));
        $(".required").blur(this.checkRequired);
    }

    checkRequired() {

        var value = this.value;
        if (!value) {
            $(this).addClass('required-error');
            $(this).attr("title", "Bạn phải nhập thông tin này");
            return;
        }
        else {
            $(this).removeClass('required-error');
            $(this).removeAttr("title");
            return;
        }

    }

    btnAddOnClick() {
        this.showDialogDetail();
    };

    btnCancelOnClick() {
        this.hideDialogDetail();
    }

    btnSaveOnClick() {
        // Validate
        var inputRequireds = $(".required");
        var isValid = true ;
        $.each(inputRequireds, function(index, input){
                var valid = $(input).trigger("blur");
                if( isValid && valid.hasClass("required-error")){
                    isValid = false;
                  
                }
                if(isValid){
                    // get data
                    var employee = {};
                    employee.EmployeeCode = $('#txtEmployeeCode').val();
                    employee.EmployeeName = $('#txtEmployeeName').val();
                    employee.email = $('#txtEmail').val();
                    employee.mobile = $('#txtMobile').val();
                    employee.CompanyName = $('#txtCompanyName').val();
         
                    // Save to DB
                    employees.push(employee);
                
                    // reload Data

                    this.load_Data();
                }
        })
    }

    showDialogDetail() {
        $('.dialog-modal').show();
        $('.dialog').show();
        $("#txtEmployeeCode").focus();
    }

    hideDialogDetail() {
        $('.dialog-modal').hide();
        $('.dialog').hide();
    }

    load_Data() {
        $.each(employees, function (index, item) {
            var trHTML = $(`<tr>
                                <td>`+ item.EmployeeCode + `</td>
                                <td>`+ item.EmployeeName + `</td>
                                <td>`+ item.email + `</td>
                                <td>`+ item.mobile + `</td>
                                <td>`+ item.CompanyName + `</td>
                            </tr>`);
            $('.grid tbody').append(trHTML);

        })
    }


}

var employees = [
    {
        EmployeeCode: "NV10111",
        EmployeeName: "Bàng Thống",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV10131",
        EmployeeName: "Mã Siêu",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV40111",
        EmployeeName: "Lưu Bị",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV10131",
        EmployeeName: "Mã Siêu",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV40111",
        EmployeeName: "Lưu Bị",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV10131",
        EmployeeName: "Mã Siêu",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV40111",
        EmployeeName: "Lưu Bị",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV10131",
        EmployeeName: "Mã Siêu",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV40111",
        EmployeeName: "Lưu Bị",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV10131",
        EmployeeName: "Mã Siêu",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV40111",
        EmployeeName: "Lưu Bị",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV10131",
        EmployeeName: "Mã Siêu",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV40111",
        EmployeeName: "Lưu Bị",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV10131",
        EmployeeName: "Mã Siêu",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },


    {
        EmployeeCode: "NV10131",
        EmployeeName: "Mã Siêu",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV40111",
        EmployeeName: "Lưu Bị",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV10151",
        EmployeeName: "Quan Vũ",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV10711",
        EmployeeName: "Trương Phi",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV10911",
        EmployeeName: "Triệu Vân",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV10151",
        EmployeeName: "Quan Vũ",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV10711",
        EmployeeName: "Trương Phi",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },

    {
        EmployeeCode: "NV10911",
        EmployeeName: "Triệu Vân",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    },



    {
        EmployeeCode: "NV40111",
        EmployeeName: "Khổng Minh",
        email: "chienuetvnu@gmail.com",
        mobile: "0328646777",
        CompanyName: "Cau giấy"
    }


]