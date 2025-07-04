    $(document).ready(function () {
    Autocompletebox("txtcustomername", "CustomerCode", "CustomerMaster", "getCustomerName");

    Autocompletebox("txtstate", "StateId", "CustomerMaster", "getStateNames");
    Autocompletebox("SecondryStateName", "MainStateId", "CustomerMaster", "getStateNames");

        if (doaction.toLowerCase() == "edit" || doaction.toLowerCase() == "add") {
            DisplayInactiveReason('IsActive', 'dvInActiveReason');
        }

    GSTCustomerTypeChanged();
    GSTTypeChanged();
});

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

function GSTCustomerTypeChanged() {
    
    var val = $("#dpdGSTCustomerType").val();
    if (val != undefined) {
        if (val == 2) {
            $("#dvUnregistered").hide();
            $("#GSTINNo").val('');
        }
        else {
            $("#dvUnregistered").show();
        }
    }
}


function GSTTypeChanged() {
    var val = $("#dpdGSTType").val();
    if (val != undefined) {
        if (val == 2) {
            $("#divchange").hide();
            $("#txtGSTINNo").val('');
        }
        else {
            $("#divchange").show();
        }
    }
}


function EditAddress(ID) {
    $("#SecondryCustomerAddress").val($("#SecondryCustomerAddress_" + ID).text());
    $("#SecondryStateName").val($("#SecondryStateName_" + ID).text());
    $("#MainStateId").val($("#SecondryStateId_" + ID).text());
    $("#dpdGSTType").val($("#GSTCustomerTypeId_" + ID).text());
    $("#MstrAddressesID").val($("#MstrAddressesID_" + ID).text());
    $("#city").val($("#City_" + ID).text());
    if ($("#SecondryPincode_" + ID).text() == 0) {
        $("#SecondryPincode").val('');
    }
    else {
        $("#SecondryPincode").val($("#SecondryPincode_" + ID).text());
    }
    GSTTypeChanged();
    $("#SecondryGSTINNo").val($("#SecondryGSTINNo_" + ID).text());
    $("#SecondryPANNo").val($("#SecondryPANNo_" + ID).text());
    $("#SecondryTANNo").val($("#SecondryTANNo_" + ID).text());
    $("#IECCode").val($("#IECCode_" + ID).text());
}
function ClearAddress() {
    $("#SecondryCustomerAddress").val('');
    $("#SecondryStateName").val('');
    $("#city").val('');
    $("#SecondryPincode").val('');
    $("#SecondryGSTINNo").val('');
    $("#SecondryPANNo").val('');
    $("#SecondryTANNo").val('');
    $("#IECCode").val('');
    $("#MainStateId").val('0');
}
function validatemodel()
{
    var isvalid = true;

    $.ajax({
        url: GetRootPath + "CustomerMaster/validateModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $(".redborder").removeClass("redborder");
            if (data != "") {
                var Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");

                if (ErrorFields != null && ErrorFields.length > 0) {
                    for (var Q = 0; Q < ErrorFields.length; Q++) {
                        $("#spn_" + ErrorFields[Q]).text('');
                        $("#spn_" + ErrorFields[Q]).next().addClass("redborder");
                    }
                }
                if (Errormsg != "") {
                    isvalid = false;
                    TosterAlert("error", Errormsg, "Required!");
                }
            }
        }
    });

    return isvalid;
}

function validateAddressesmodel()
{
    var isvalid = true;

    $.ajax({
        url: GetRootPath + "CustomerMaster/validateAddressesModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $(".redborder").removeClass("redborder");
            if (data != "") {
                isvalid = false;
                var Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");

                if (ErrorFields != null && ErrorFields.length > 0) {
                    for (var Q = 0; Q < ErrorFields.length; Q++) {
                        $("#spn_" + ErrorFields[Q]).text('');
                        $("#spn_" + ErrorFields[Q]).next().addClass("redborder");
                    }
                }
                if (Errormsg != "") {
                    TosterAlert("error", Errormsg, "Required!");
                }
            }
        }
    });

    return isvalid;
}

function MobileAccess(MstrCustomerID) {

    debugger

    if (MstrCustomerID != 0 && MstrCustomerID != '' && MstrCustomerID != undefined) {

        $("#txtUsername").removeClass("redborder")
        $("#txtPassword").removeClass("redborder")

        $("#MobileAccess").modal("show");
        $("#hdnMstrCustomerID").val(MstrCustomerID);

        $.ajax({
            url: GetRootPath + "CustomerMaster/ShowMobileLogin",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {

                var datas = data.split(',')

                username = $("#txtUsername").val(datas[0]);
                password = $("#txtPassword").val(datas[1]);

            }
        });
    }
}

function MobileAccessInsert() {

    debugger

    var isvalid = true;
    var MErrormsg = "";

    username = $("#txtUsername").val();
    password = $("#txtPassword").val();

    MstrCustomerID = $("#hdnMstrCustomerID").val()

    if ($.trim(username) == '' || username == undefined) {
        isvalid = false
        MErrormsg += "Please Enter Username <br />";
        $("#txtUsername").addClass("redborder")

    } else {
        $("#txtUsername").removeClass("redborder")
    }

    if ($.trim(password) == '' || password == undefined) {
        isvalid = false
        MErrormsg += "Please Enter Password";
        $("#txtPassword").addClass("redborder")
    } else {
        $("#txtPassword").removeClass("redborder")
    }

    if (isvalid) {

        $.ajax({
            url: GetRootPath + "CustomerMaster/mobileLogin",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {

                if (data == "true") {
                    TosterAlert("success", "Username and Password Add successfully", "Success");
                    $("#MobileAccess").modal("hide");
                } else {
                    TosterAlert("error", "Already Exist Username", "Required!");
                }
            }
        });
    } else {

        TosterAlert("error", MErrormsg, "Required!");
    }
    
}