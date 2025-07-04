$(document).ready(function () {
    Autocompletebox("txtVendorname", "VendorCode", "VendorMaster", "getVendorName");

    Autocompletebox("txtstate", "StateId", "VendorMaster", "getStateNames");
    Autocompletebox("state", "MainStateId", "VendorMaster", "getStateNames");

    if (doaction.toLowerCase() == "edit" || doaction.toLowerCase() == "add") {
        DisplayInactiveReason('IsActive', 'dvInActiveReason');
    }

    GSTVendorTypeChanged();
    GSTTypeChanged();
});

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});



function SearchData() {
    location.href = "VendorMaster?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

function GSTVendorTypeChanged() {
    var val = $("#dpdGSTVendorType").val();
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
    $("#address").val($("#Address_" + ID).text());
    $("#state").val($("#State_" + ID).text());
    $("#MainStateId").val($("#StateID_" + ID).text());
    $("#dpdGSTType").val($("#GSTVendorTypeId_" + ID).text());
    $("#MstrVendorAddressesID").val(ID);
    $("#city").val($("#City_" + ID).text());
    if ($("#Pincode_" + ID).text() == 0) {
        $("#pincode").val('');
    }
    else {
        $("#pincode").val($("#Pincode_" + ID).text());
    }
   
    GSTTypeChanged();
    $("#txtGSTINNo").val($("#GSTINNo_" + ID).text());
    $("#PANNo").val($("#PANNo_" + ID).text());
    $("#TANNo").val($("#TANNo_" + ID).text());
}

function ClearAddress() {
    $("#address").val('');
    $("#state").val('');
    $("#city").val('');
    $("#pincode").val('');
    $("#txtGSTINNo").val('');
    $("#PANNo").val('');
    $("#TANNo").val('');
}
function validatemodel() {
    var isvalid = true;

    $.ajax({
        url: GetRootPath + "VendorMaster/validateModel",
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
