$(document).ready(function () {
    Autocompletebox("txtTransporter", "TransporterID", "MstrDriver", "GetAutoDriver/" + $("#MstrDriverID").val());

    Autocompletebox("LicenseNo", "LicenseNoID", "MstrDriver", "GetLicenseNo/" + MstrDriverID + "?MstrDriverDetailID=" + MstrDriverDetailID);

    Autocompletebox("Address", "AddressID", "MstrDriver", "getStateNames");
    if (doaction.toLowerCase() == "edit" || doaction.toLowerCase() == "add") {
        DisplayInactiveReason('IsActive', 'dvSubInActiveReason');
    }
    DisplayInactiveReason('IsActive', 'dvSubInActiveReason');
    DisplayIsBlackListed('IsBackListed', 'dvIsBackListedReason');

    function DisplayIsBlackListed(CheckBoxID, InactivePanalID) {

        var IsActive = $("#" + CheckBoxID).prop("checked");
        if (IsActive != undefined) {
            if (IsActive == true) {
                $("#" + InactivePanalID).show();
            }
            else {
                $("#" + InactivePanalID).hide();
            }
        }
        setTimeout(function () {
            $("#" + CheckBoxID).on('ifChanged', function (event) {
                if (event.target.checked == false) {
                    $("#" + InactivePanalID).hide();
                }
                else {
                    $("#" + InactivePanalID).show();
                }
            });
        }, 1000);
    }

    $("#txtTransporter").blur(function () {
        if ($("#txtTransporter").val() == "" || $("#txtTransporter").val() == null || $("#txtTransporter").val() == undefined) {
            $("#TransporterID").val("0");
        }
    });

    if (doaction == "edit") {
        $("#txtTransporter").prop("readonly", true);
        $("#SaveDriver").hide();
        $("#cancle").hide();
    }
    else {
        $("#txtTransporter").prop("readonly", false);
        $("#SaveDriver").show();
        $("#cancle").show();
    }


});

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function EditDriver(ID) {
    if (ID > 0)
    {
        $("#MstrDriverDetailID").val($("#MstrDriverDetailID_" + ID).text());
        $("#DriverName").val($("#DriverName_" + ID).text());
        $("#LicenseNo").val($("#LicenseNo_" + ID).text());
        $("#MobileNumber").val($("#MobileNumber_" + ID).text());
        $("#Address").val($("#Address_" + ID).text());
        $("#AddressID").val($("#AddressID_" + ID).text());
        $("#IsBackListed").val($("#cskIsBackListed_" + ID).text());
        $("#IsBackListedReason").val($("#txtIsBackListedReason_" + ID).text());
        $("#IsActive").val($("#hdncskIsActive_" + ID).text());
        $("#InActiveReasonSub").val($("#txtInActiveReasonSub_" + ID).text());

        $("#DriverName").prop("readonly", true);
        //$("#LicenseNo").prop("readonly", true);
        //$("#MobileNumber").prop("readonly", true);
        //$("#Address").prop("readonly", true);
        $("#IsBackListed").prop("disabled", true);
        $("#IsBackListedReason").prop("readonly", true);

        if ($("#hdncskIsActive_" + ID).text().toLowerCase() == "true")
        {
            $("#IsActive").iCheck("check");
        }
        else
        {
            $("#IsActive").iCheck("uncheck");
        }   


        if ($("#hdncskIsBackListed_" + ID).text().toLowerCase() == "true") {
            $("#IsBackListed").iCheck("check");
        }
        else {
            $("#IsBackListed").iCheck("uncheck");
        }


        $("#MstrDriverID").val(ID);
    }
}

function ClearDriver() {
    $("#DriverName").val('');
    $("#LicenseNo").val('');
    $("#MobileNumber").val('');
    $("#Address").val('');
    
    $("#IsActive").iCheck("check");
    $("#InActiveReasonSub").val('');
    
    $("#IsBackListedReason").val('');
    $("#AddressID").val("0");

    $("#DriverName").prop("readonly", false);
    $("#LicenseNo").prop("readonly", false);
    $("#MobileNumber").prop("readonly", false);
    $("#Address").prop("readonly", false);
    $("#IsBackListed").prop("disabled", false);
    $("#IsBackListedReason").prop("readonly", false);
}

function validate() {


    var TransporterID = $("#TransporterID").val();
    var TransporterName = $("#txtTransporter").val();
    if (TransporterID == "" || TransporterID == null || TransporterID == undefined || TransporterID == "0") {
        $("#txtTransporter").addClass("redborder");
        TosterAlert("error", " Please select Transporter ", "Required!");
        return false;
    }
    location.href = "?pg=1&doaction=edit&TransporterID=" + TransporterID + "&Transporter=" + TransporterName;
    return true;
}

function Validation() {
    CheckForActive();
    var isvalid = true;
    var MstrDriverDetailID = $("#MstrDriverDetailID").val();
     

    $.ajax({
        url: GetRootPath + "MstrDriver/validateModel",
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


function CheckForActive() {
    if ($("#IsActive").is(":checked")) {
        $("#IsActive").val("true");
    }
    else {
        $("#IsActive").val("false");
    }
}