$(document).ready(function () {
    
    var employeess = new employeeJS();
    

})

class employeeJS {
    constructor(){
        this.initEvents();
        this.load_Data();
    }

    initEvents() {
        $('#btnAdd').click(this.btnAddOnClick.bind(this));
        $('#buttonCancel').click(this.btnCancelOnClick.bind(this));
        $('#buttonSave').click(this.btnSaveOnClick.bind(this));
        $('.title-close-button').click(this.btnCancelOnClick.bind(this));
    }

    btnAddOnClick(){
        this.showDialogDetail();
    };

    btnCancelOnClick(){
        this.hideDialogDetail();
    }

    btnSaveOnClick(){
        // Validate
        //alert(1);
        var employeeCodes = $("#txtEmployeeCode").val();
        var employeeNames = $("#txtEmployeeName").val();
        
        if(!employeeCodes){
            $("#txtEmployeeCode").addClass('required-error');
            $("#txtEmployeeCode").focus();
            $("#txtEmployeeCode").attr("title","bạn phải nhập thông tin này");
            return;
        }
        if(!employeeNames){
            alert('Bạn phải nhập thông tin');
            return;
        }
        //


        //

    }

    showDialogDetail(){
        $('.dialog-modal').show();
        $('.dialog').show();
    }

    hideDialogDetail(){
        $('.dialog-modal').hide();
        $('.dialog').hide();
    }

    load_Data(){
        $.each(employees, function (index, item) {
            var trHTML = $(`<tr>
                                <td>`+ item.EmployeeCode + `</td>
                                <td>`+ item.EmployeeName + `</td>
                                <td>`+ item.email + `</td>
                                <td>`+ item.mobile + `</td>
                                <td>`+ item.CompanyName + `</td>
                            </tr>`);
                            debugger;
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