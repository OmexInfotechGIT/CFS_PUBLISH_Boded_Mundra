$(document).ready(function () {
    
    var Type = $("#Type").val();
    Autocompletebox("txtContNo", "trnEmptyContainerOutWODetailsID", "trnEmptyTruckGateIn", "GetContNo/" + $("#trnEmptyTruckGateInID").val() + "?Type=" + Type, "FillISOCode");
    Autocompletebox("LoadedContNo", "trnDocumentContainerID", "trnEmptyTruckGateIn", "GetContNoLoaded/" + $("#TruckID").val() + "?trnEmptyTruckGateInID=" + $("#trnEmptyTruckGateInID").val() + "&trnEmptyTruckGateInLoadedID=" + $("#trnEmptyTruckGateInLoadedID").val(), "FillISOCodeLoaded");
    Autocompletebox("DomesticContNo", "trnCargoGateInContainerDetailsID", "trnEmptyTruckGateIn", "GetDomesticContNo/" + $("#trnEmptyTruckGateInID").val(), "FillISOCodeDomestic");
    Autocompletebox("CargoType", "CargoTypeID", "trnEmptyTruckGateIn", "GetNatureofCargo");
    Autocompletebox("ExpLoadedContNo", "trnexportmovementWOContainerDetailsID", "trnEmptyTruckGateIn", "GetContNoExportLoaded", "FillExpISOCode");
    Autocompletebox("DISOCode", "DISOCodeID", "trnCargoGateIn", "GetISOCODE", "Callbackautocomplete2");
    $(".showonlyinedit").hide();
    FillDomesticContainerdetailsGrid();
    FillEmptyContainerdetailsGrid();
    FillLoadedContainerdetailsGrid();
    FillWeighmentLabel();
    FillExportLoadedContainerdetailsGrid();
    
    GetTRUCKNO();
    $("#WeighmentLabel").show();
    $("#dvDomesticContainer").hide();
    var isdocumentload = true;
    onchangeTransportationBy(isdocumentload);
    var DomesticContainerStatus = "";
    var IsView = IsView;
    if (IsView == "True" || IsView == "true") {
        debugger;
        DomesticContainerStatus = $("#DomesticContainerStatus").text();
        if (DomesticContainerStatus == "Yes" || DomesticContainerStatus == "yes") {
            DomesticContainerStatus = true;
        }
        else {
            DomesticContainerStatus = false;
        }
    }
    else {
        DomesticContainerStatus = $("input[name='DomesticContainerStatus']:checked").val();
    }
    if (DomesticContainerStatus == true || DomesticContainerStatus == "true") {
        $("#dvDomesticContainer").show();
    }
    else {
        $("#dvDomesticContainer").hide();
    }
    MyContainerStatus();
    var ID = $("#trnEmptyTruckGateInID").val();
    isExportLoadedContainerOutApproval(ID);
    var category = $("#Category").val();
    if (category == "Export") {
        debugger;
        $("#dvwt").show();
        DisplayWeighment('WEIGHMENTREQUIRED', 'dvInActiveReason', 'dvOther', 'dvisshow');
    }
    else {
        debugger;
        $("#dvInActiveReason").hide();
        $("#dvwt").hide();
    }
});

function Callbackautocomplete2() {
    debugger;
    if ($("#DISOCodeID").val() != "" && $("#DISOCodeID").val() != undefined && $("#DISOCodeID").val() != null) {
        $.ajax({
            url: GetRootPath + "trnEmptyTruckGateIn/GetISOCodeSizeType/" + $("#DISOCodeID").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#DISOCodeID").val(data.split("|")[0]);
                    $("#DISOCode").val(data.split("|")[1]);
                    $("#ISOCodeSizes").val(data.split("|")[3]);
                    $("#Size").val(data.split("|")[2]);
                    $("#ISOCodeTypes").val(data.split("|")[5]);
                    $("#ContType").val(data.split("|")[4]);
                }
                else {

                    $("#ISOCode").val('');
                    $("#ISOCodeID").val(0);
                    $("#ISOCodeSizes").val('');
                    $("#Size").val(0);
                    $("#ISOCodeTypes").val('');
                    $("#ContType").val(0);
                }
            }
        })
    }
    else {
        $("#ISOCode").val('');
        $("#ISOCodeID").val(0);
        $("#ISOCodeSizes").val();
        $("#Size").val();
        $("#ISOCodeTypes").val();
        $("#ContType").val();
    }
}
function MyContainerStatus() {
    $("input[name=DomesticContainerStatus]").on('ifChanged', function (event) {
        var DomesticContainerStatus = $("input[name='DomesticContainerStatus']:checked").val();
        if (DomesticContainerStatus == true || DomesticContainerStatus == "true") {
            $("#dvDomesticContainer").show();
            $("#dvSaveButton").hide();
        }
        else {
            $("#dvDomesticContainer").hide();
            $("#dvSaveButton").show();
        }
    });
}
//function FuncationOnBlurForDriverDetails() {

//    var ID = $("#DriverID").val();
//    if (ID != null && ID != undefined && ID != "" && ID != "0") {   
//        $.ajax({
//            url: GetRootPath + "trnEmptyTruckGateIn/GetDriverDetails/" + ID,
//            type: "GET",
//            dataType: "text",
//            success: function (data) {
//                if (data != "" && data != null) {
//                    $("#LicenceNo").val(data.split("|")[0]);
//                    $("#MobileNo").val(data.split("|")[1]);
//                    $("#Address").val(data.split("|")[2]);
//                }
//                else {
//                    $("#LicenceNo").val("");
//                    $("#MobileNo").val("");
//                    $("#Address").val("");
//                }
//            }
//        })
//    }
//}

function FuncationOnBlurForLicenseDetails() {
    var TransporterID = $("#TransporterID").val();
    var ID = $("#LicenceNo").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnEmptyTruckGateIn/GetLicenseDetails/" + ID + "?TransporterID=" + TransporterID,
            type: "GET",
            dataType: "text",
            success: function (data) {

                if (data != "" && data != null) {
                    $("#Driver").attr("readonly", true);
                    $("#DriverID").attr("readonly", true);
                    $("#MobileNo").attr("readonly", true);
                    $("#Address").attr("readonly", true);

                    $("#Driver").val(data.split("|")[0]);
                    $("#DriverID").val(data.split("|")[3]);
                    $("#MobileNo").val(data.split("|")[1]);
                    $("#Address").val(data.split("|")[2]);
                }
                else {
                    $("#Driver").attr("readonly", false);
                    $("#DriverID").attr("readonly", false);
                    $("#MobileNo").attr("readonly", false);
                    $("#Address").attr("readonly", false);
                }
            }
        });
    }
}

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function GatePassValidation() {
    var isvalid = true;
    var MErrormsg = "";

    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/validateModel",
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
                    MErrormsg += Errormsg;
                }
            }
        }
    });

    var TransportationType = $("#TransportationType").val()

    if (TransportationType == "OWN") {

        var TruckNo = $("#TruckNo").val()
        var TruckID = $("#TruckID").val()

        if (TruckNo != "") {

            if (TruckID == "0") {
                isvalid = false
                MErrormsg += "Please Select Truck Number"
                $("#TruckNo").addClass("redborder")
            } else {
                $("#TruckNo").removeClass("redborder")
            }
        }
    }

    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    return isvalid;
}

function CheckTruckInUsed() {

    var TruckNo = "";
    var TransportationType = $("input[name='TransportationType']:checked").val();
    var trnEmptyTruckGateInID = $("#trnEmptyTruckGateInID").val();
    if (TransportationType == "Party") {
        TruckNo = $("#TruckNo").val()
    }
    else {
        TruckNo = $("#TruckNo").val()
    }

    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/CheckTruckInUsed/?TruckNo=" + TruckNo + "&trnEmptyTruckGateInID=" + trnEmptyTruckGateInID,
        type: "Get",
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != "") {
                TosterAlert("warning", data, "Warning!");

                if (TransportationType == "Party") {
                    $("#TruckNo").val("");

                }
                else {
                    $("#TruckNo").val("");
                    $("#TruckID").val("0");
                    $("#TruckNo").addClass("redborder")
                }

                ;
            }
            else {
                $("#TRUCKNO").removeClass("redborder");
            }
        }
    });

}

function Callbackautocomplete() {
    if ($("#ISOCodeID").val() != "" && $("#ISOCodeID").val() != undefined && $("#ISOCodeID").val() != null) {
        $.ajax({
            url: GetRootPath + "trnEmptyTruckGateIn/GetISOCodeDetails/" + $("#ISOCodeID").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#Size").val(data.split("|")[1]);
                    $("#ContType").val(data.split("|")[0]);
                    $("#ISOCodeSizes").text(data.split("|")[1]);
                    $("#ISOCodeTypes").text(data.split("|")[0]);
                }
                else {
                    $("#Size").val("");
                    $("#ContType").val("");
                    $("#ISOCodeSizes").text("");
                    $("#ISOCodeTypes").text("");
                }
            }
        })
    }
    else {
        $("#Size").val("");
        $("#ContType").val("");
        $("#ISOCodeSizes").text("");
        $("#ISOCodeTypes").text("");
    }
}

function FillISOCode() {
    debugger;
    var Type = $("#Type").val();
    if ($("#trnEmptyContainerOutWODetailsID").val() != "" && $("#trnEmptyContainerOutWODetailsID").val() != undefined && $("#trnEmptyContainerOutWODetailsID").val() != null) {
        $.ajax({
            url: GetRootPath + "trnEmptyTruckGateIn/GetISOCodeSizeAndType/" + $("#trnEmptyContainerOutWODetailsID").val() + "?Type=" + Type,
            type: "GET",
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != "" && data != null) {
                    $("#ISOCode").val(data.split("|")[0]);
                    $("#ISOCodeID").val(data.split("|")[1]);
                    $("#ISOCodeSizes").text(data.split("|")[2]);
                    $("#Size").val(data.split("|")[2]);
                    $("#ISOCodeTypes").text(data.split("|")[3]);
                    $("#ContType").val(data.split("|")[3]);
                    $("#CargoType").val(data.split("|")[4]);
                    $("#CargoTypeID").val(data.split("|")[5]);
                    $("#Agent").val(data.split("|")[6]);
                    $("#Line").val(data.split("|")[7]);
                    $("#ContainerStatus").val(data.split("|")[10]);
                }
                else {
                    $("#ISOCodeID").val("0");
                    $("#ISOCode").val("");
                    $("#CargoTypeID").val("0");
                    $("#CargoType").val("");
                }
            }
        })
    }
    else {
        $("#ISOCodeID").val("0");
        $("#ISOCode").val("");
        $("#CargoTypeID").val("0");
        $("#CargoType").val("");
    }
}

function FillExpISOCode() {
    debugger;
    if ($("#trnexportmovementWOContainerDetailsID").val() != "" && $("#trnexportmovementWOContainerDetailsID").val() != undefined && $("#trnexportmovementWOContainerDetailsID").val() != null) {
        $.ajax({
            url: GetRootPath + "trnEmptyTruckGateIn/GetExpISOCodeLoaded/" + $("#trnexportmovementWOContainerDetailsID").val(),
            type: "GET",
            dataType: "text",
            async: false,
            success: function (data) {
                debugger;
                if (data != "" && data != null) {
                    $("#ExpISOCode").val(data.split("|")[0]);
                    $("#ExpISOCodeID").val(data.split("|")[1]);
                    $("#ExpISOCodeSizes").text(data.split("|")[2]);
                    $("#ExpSize").val(data.split("|")[2]);
                    $("#ExpISOCodeTypes").text(data.split("|")[3]);
                    $("#ExpContType").val(data.split("|")[3]);
                    $("#ExpCargoType").val(data.split("|")[4]);
                    $("#ExpCargoTypeID").val(data.split("|")[5]);
                    $("#ExpAgent").val(data.split("|")[6]);
                    $("#ExpLine").val(data.split("|")[7]);
                    $("#ExpTemp").val(data.split("|")[8]);
                    $("#ExpUN").val(data.split("|")[9]);
                    $("#ExpClass").val(data.split("|")[10]);
                }
                else {
                    $("#ExpISOCode").val(data.split("|")[0]);
                    $("#ExpISOCodeID").val(data.split("|")[1]);
                    $("#ExpISOCodeSizes").text(data.split("|")[2]);
                    $("#ExpSize").val(data.split("|")[2]);
                    $("#ExpISOCodeTypes").text(data.split("|")[3]);
                    $("#ExpContType").val(data.split("|")[3]);
                    $("#ExpCargoType").val(data.split("|")[4]);
                    $("#ExpCargoTypeID").val(data.split("|")[5]);
                    $("#ExpAgent").val(data.split("|")[6]);
                    $("#ExpLine").val(data.split("|")[7]);
                    $("#ExpTemp").val(data.split("|")[8]);
                    $("#ExpUN").val(data.split("|")[9]);
                    $("#ExpClass").val(data.split("|")[10]);
                }
            }
        })
    }
    else {
        $("#ExpISOCode").val('');
        $("#ExpISOCodeID").val('0');
        $("#ExpISOCodeSizes").text('');
        $("#ExpSize").val('');
        $("#ExpISOCodeTypes").text('');
        $("#ExpContType").val('');
        $("#ExpCargoType").val('');
        $("#ExpCargoTypeID").val('0');
        $("#ExpAgent").val("");
        $("#ExpLine").val("");
        $("#ExpTemp").val("0");
        $("#ExpUN").val("0");
        $("#ExpClass").val("0");
    }
}
function FillISOCodeDomestic() {
    if ($("#trnCargoGateInContainerDetailsID").val() != "" && $("#trnCargoGateInContainerDetailsID").val() != undefined && $("#trnCargoGateInContainerDetailsID").val() != null) {
        $.ajax({
            url: GetRootPath + "trnEmptyTruckGateIn/GetISOCodeDomestic/" + $("#trnCargoGateInContainerDetailsID").val(),
            type: "GET",
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != "" && data != null) {
                    $("#ISOCode").val(data.split("|")[0]);
                    $("#ISOCodeID").val(data.split("|")[1]);
                    $("#DISOCodeSizes").text(data.split("|")[2]);
                    $("#ISOCodeSizes").val(data.split("|")[2]);
                    $("#Size").val("0");
                    $("#DISOCodeTypes").text(data.split("|")[3]);
                    $("#ISOCodeTypes").val(data.split("|")[3]);
                    $("#ContType").val("0");
                }
                else {
                    $("#ISOCode").val('');
                    $("#ISOCodeID").val('0');
                    $("#DISOCodeSizes").text('');
                    $("#Size").val('');
                    $("#DISOCodeTypes").text('');
                    $("#ContType").val('');
                }
            }
        })
    }
    else {
        $("#ISOCode").val('');
        $("#ISOCodeID").val('0');
        $("#ISOCodeSizes").text('');
        $("#Size").val('');
        $("#ISOCodeTypes").text('');
        $("#ContType").val('');
    }
}

function FillISOCodeLoaded() {
    if ($("#trnDocumentContainerID").val() != "" && $("#trnDocumentContainerID").val() != undefined && $("#trnDocumentContainerID").val() != null) {
        $.ajax({
            url: GetRootPath + "trnEmptyTruckGateIn/GetISOCodeLoaded/" + $("#trnDocumentContainerID").val(),
            type: "GET",
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != "" && data != null) {
                    $("#ISOCode").val(data.split("|")[0]);
                    $("#ISOCodeID").val(data.split("|")[1]);
                    $("#ISOCodeSizes").text(data.split("|")[2]);
                    $("#Size").val(data.split("|")[2]);
                    $("#ISOCodeTypes").text(data.split("|")[3]);
                    $("#ContType").val(data.split("|")[3]);
                    $("#CargoType").val(data.split("|")[4]);
                    $("#CargoTypeID").val(data.split("|")[5]);
                    $("#Agent").val(data.split("|")[6]);
                    $("#Line").val(data.split("|")[7]);
                    $("#Temp").val(data.split("|")[8]);
                    $("#UN").val(data.split("|")[9]);
                    $("#Class").val(data.split("|")[10]);
                }
                else {
                    $("#ISOCode").val('');
                    $("#ISOCodeID").val('0');
                    $("#ISOCodeSizes").text('');
                    $("#Size").val('');
                    $("#ISOCodeTypes").text('');
                    $("#ContType").val('');
                    $("#CargoType").val('');
                    $("#CargoTypeID").val('0');
                    $("#Agent").val("");
                    $("#Line").val("");
                    $("#Temp").val("0");
                    $("#UN").val("0");
                    $("#Class").val("0");
                }
            }
        })
    }
    else {
        $("#ISOCode").val('');
        $("#ISOCodeID").val('0');
        $("#ISOCodeSizes").text('');
        $("#Size").val('');
        $("#ISOCodeTypes").text('');
        $("#ContType").val('');
        $("#CargoType").val('');
        $("#CargoTypeID").val('0');
        $("#Agent").val("");
        $("#Line").val("");
        $("#Temp").val("0");
        $("#UN").val("0");
        $("#Class").val("0");
    }
    //Callbackautocomplete();
}

function AddDomesticContainerdetails() {
    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/validateModelDomestic",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
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
                    TosterAlert("error", Errormsg, "Required!");
                }
            }
            else {
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "trnEmptyTruckGateIn/AddDomesticContainerdetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        ClearDomesticContainerdetails();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillDomesticContainerdetailsGrid();
                        TosterAlert(msgType, msg, msgTitle);
                        //location.reload();
                    }
                });
            }
        }
    });
}

function FillDomesticContainerdetailsGrid() {
    $("#DomesticContainerdetails").html("");

    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/FillDomesticContainerdetailsGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#DomesticContainerdetails").html(data);
                ClearDomesticContainerdetails();
            }
        }
    });
}

function ClearDomesticContainerdetails() {
    $("#ContNo").val('');
    $("#DomesticContNo").val('');
    $("#DISOCodeSizes").text('');
    $("#DISOCodeTypes").text('');
    $("#ISOCode").val('');
    $("#ISOCodeID").val('');
    $("#ISOCodeSizes").val('');
    $("#ISOCodeTypes").val('');
    $("#Size").val('');
    $("#ContType").val('');
    $("#CargoType").val('');
    $("#PhysicalSeal").val('');
    $("#DeclaredSeal").val('');
    $("#CargoTypeID").val('0');
    $("#IsContainerplacedontruck").val('Yes');
    if ($("#trnEmptyTruckGateInDomesticID").val() > 0) {
        FillDomesticContainerdetailsGrid();
    }
    $("#trnEmptyTruckGateInDomesticID").val('0');
    $("#btnDomestic").text("Add");
}

function EditDomesticContainerDetails(ID) {
    debugger;
    $('.isfullthenhide').show();
    $("#trnCargoGateInContainerDetailsID").val($("#hdntrnCargoGateInContainerDetailsID_" + ID).val());
    $("#ContNo").val($("#ContNo_" + ID).text());
    $("#DomesticContNo").val($("#ContNo_" + ID).text());
    $("#ISOCode").val($("#ISOCode_" + ID).text());
    $("#DISOCode").val($("#ISOCode_" + ID).text());
    $("#ISOCodeID").val($("#ISOCodeID_" + ID).text());
    $("#DISOCodeID").val($("#ISOCodeID_" + ID).text());
    $("#ISOCodeSizes").val($("#Size_" + ID).text());
    $("#DISOCodeSizes").text($("#Size_" + ID).text());
    $("#DISOCodeTypes").text($("#ContType_" + ID).text());
    $("#Size").val($("#SizeID_" + ID).text());
    $("#ISOCodeTypes").val($("#ContType_" + ID).text());
    $("#ContType").val($("#ContTypeID_" + ID).text());
    $("#CargoType").val($("#CargoType_" + ID).text());
    $("#CargoTypeID").val($("#CargoTypeID_" + ID).text());
    $("#PhysicalSeal").val($("#PhysicalSeal_" + ID).text());
    $("#DeclaredSeal").val($("#DeclaredSeal_" + ID).text());
    $("#IsContainerplacedontruck").val($("#IsContainerplacedontruck_" + ID).text());
    $("#trnEmptyTruckGateInDomesticID").val(ID);
    $("#btnDomestic").text("Save");

}

function DeleteDomesticContainerDetails(ID) {
    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/deleteDomestic/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillDomesticContainerdetailsGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}

function AddEmptyContainerdetails() {
    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/validateModelEmpty",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
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
                    TosterAlert("error", Errormsg, "Required!");
                }
            }
            else {
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "trnEmptyTruckGateIn/AddEmptyContainerdetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        ClearEmptyContainerdetails();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillEmptyContainerdetailsGrid();
                        TosterAlert(msgType, msg, msgTitle);
                        location.reload();
                    }
                });
            }
        }
    });
}

function FillEmptyContainerdetailsGrid() {
    $("#EmptyContainerdetails").html("");

    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/FillEmptyContainerdetailsGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#EmptyContainerdetails").html(data);

                ClearEmptyContainerdetails();
            }
        }
    });
}

function ClearEmptyContainerdetails() {
    $("#txtContNo").val('');
    $("#trnDocumentContainerID").val('0');
    $("#ISOCode").val('');
    $("#ISOCodeID").val('');
    $("#ISOCodeSizes").text('');
    $("#ISOCodeTypes").text('');
    $("#Size").val('');
    $("#ContType").val('');
    $("#CargoType").val('');
    $("#Agent").val('');
    $("#Line").val('');
    $("#ContainerStatus").val('');
    $("#CargoTypeID").val('0');
    $("#IsContainerplacedontruck").val('Yes');
    if ($("#trnEmptyTruckGateInEmptyID").val() > 0) {
        FillEmptyContainerdetailsGrid();
    }
    $("#trnEmptyTruckGateInEmptyID").val('0');
    $("#btnEmpty").text("Add");
}

function EditEmptyContainerDetails(ID) {
    $("#txtContNo").val($("#txtContNo_" + ID).text());
    $("#trnEmptyContainerOutWODetailsID").val($("#trnDocumentContainerID_" + ID).text());
    $("#ISOCode").val($("#ISOCode_" + ID).text());
    $("#ISOCodeID").val($("#ISOCodeID_" + ID).text());
    $("#ISOCodeSizes").text($("#Size_" + ID).text());
    $("#Size").val($("#Size_" + ID).text());
    $("#ISOCodeTypes").text($("#ContType_" + ID).text());
    $("#ContType").val($("#ContType_" + ID).text());
    $("#CargoType").val($("#CargoType_" + ID).text());
    $("#CargoTypeID").val($("#CargoTypeID_" + ID).text());
    $("#ContainerStatus").val($("#ContainerStatus_" + ID).text());
    $("#Agent").val($("#Agent_" + ID).text());
    $("#Line").val($("#Line_" + ID).text());
    $("#trnEmptyTruckGateInEmptyID").val(ID);
    $("#btnEmpty").text("Save");
    $('.isfullthenhideEmpty').show();
}

function DeleteEmptyContainerDetails(ID) {
    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/deleteEmpty/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillEmptyContainerdetailsGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}

function AddLoadedContainerdetails() {
    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/validateModelLoaded",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
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
                    TosterAlert("error", Errormsg, "Required!");
                }
            }
            else {
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "trnEmptyTruckGateIn/AddLoadedContainerdetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        ClearLoadedContainerdetails();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillLoadedContainerdetailsGrid();
                        TosterAlert(msgType, msg, msgTitle);
                        location.reload();
                    }
                });
            }
        }
    });
}

function FillLoadedContainerdetailsGrid() {
    $("#LoadedContainerdetails").html("");

    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/FillLoadedContainerdetailsGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#LoadedContainerdetails").html(data);
                ClearLoadedContainerdetails();
            }
        }
    });
}

function ClearLoadedContainerdetails() {
    $("#LoadedContNo").val('');
    $("#trnDocumentContainerID").val('0');
    $("#ISOCode").val('');
    $("#ISOCodeID").val('');
    $("#ISOCodeSizes").text('');
    $("#ISOCodeTypes").text('');
    $("#Size").val('');
    $("#ContType").val('');
    $("#CargoType").val('');
    $("#CargoTypeID").val('0');
    $("#Agent").val('');
    $("#Line").val('');
    $("#IsContainerplacedontruck").val('Yes');
    if ($("#trnEmptyTruckGateInLoadedID").val() > 0) {
        FillLoadedContainerdetailsGrid();
    }
    $("#trnEmptyTruckGateInLoadedID").val('0');
    $("#btnLoaded").text("Add");
    Autocompletebox("LoadedContNo", "trnDocumentContainerID", "trnEmptyTruckGateIn", "GetContNoLoaded/" + $("#TruckID").val() + "?trnEmptyTruckGateInID=" + $("#trnEmptyTruckGateInID").val() + "&trnEmptyTruckGateInLoadedID=" + $("#trnEmptyTruckGateInLoadedID").val(), "FillISOCodeLoaded");
}

function EditLoadedContainerDetails(ID) {
    $("#LoadedContNo").val($("#txtContNo_" + ID).text());
    $("#trnDocumentContainerID").val($("#trnDocumentContainerID_" + ID).text());
    $("#ISOCode").val($("#ISOCode_" + ID).text());
    $("#ISOCodeID").val($("#ISOCodeID_" + ID).text());
    $("#ISOCodeSizes").text($("#Size_" + ID).text());
    $("#Size").val($("#Size_" + ID).text());
    $("#ISOCodeTypes").text($("#ContType_" + ID).text());
    $("#ContType").val($("#ContType_" + ID).text());
    $("#CargoType").val($("#CargoType_" + ID).text());
    $("#CargoTypeID").val($("#CargoTypeID_" + ID).text());
    $("#ContainerStatus").val($("#ContainerStatus_" + ID).text());
    $("#Agent").val($("#Agent_" + ID).text());
    $("#Line").val($("#Line_" + ID).text());
    $("#Class").val($("#Class_" + ID).text());
    $("#UN").val($("#UN_" + ID).text());
    $("#Temp").val($("#Temp_" + ID).text());
    $("#trnEmptyTruckGateInLoadedID").val(ID);
    $("#btnLoaded").text("Save");
    $('.isfullthenhideLoaded').show();
    Autocompletebox("LoadedContNo", "trnDocumentContainerID", "trnEmptyTruckGateIn", "GetContNoLoaded/" + $("#TruckID").val() + "?trnEmptyTruckGateInID=" + $("#trnEmptyTruckGateInID").val() + "&trnEmptyTruckGateInLoadedID=" + $("#trnEmptyTruckGateInLoadedID").val(), "FillISOCodeLoaded");
}

function DeleteLoadedContainerDetails(ID) {
    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/deleteLoaded/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillLoadedContainerdetailsGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}

function ShowLabelForWeighment() {
    var Type = $("#Type").val();
    $("#Transporter").val('');
    $("#TransporterID").val('0');
    $("#TruckNo").val('');
    $("#TruckID").val('0');
    $("#Driver").val('');
    $("#DriverID").val('0');
    $("#LicenceNo").val('');
    $("#MobileNo").val('');
    $("#Address").val('');
    GetTRUCKNO();
    $("#WeighmentLabel").show();
    $("#WeighmentLabel").html('');
    $("#WeighmentStatus").val('0');
    $("#NonweighmentReason").val('');
    $("#WeighmentPaymentStatus").val('');
    $("#ManualSSRNo").val('');
    $("#WeighmentInvoiceNo").val('');
    $("#WeighmentSlipNo").val('');
    //if (Type == "Regular Container" && IsEdit == '1') {
    //    $("#WeighmentLabel").show();
    //}
    //else {
    //    $("#WeighmentLabel").hide();
    //}
}

function FillWeighmentLabel() {
    if ($("#TruckID").val() != "" && $("#TruckID").val() != undefined && $("#TruckID").val() != null) {
        $.ajax({
            url: GetRootPath + "trnEmptyTruckGateIn/FillWeighmentLabel/" + $("#TruckID").val() + "?Type=" + $("#Type").val(),
            type: "GET",
            dataType: "text",
            async: false,
            success: function (data) {

                if (data != "" && data != null) {
                    $("#WeighmentLabel").html(data);
                    $("#WeighmentStatus").val($("#spnWeighmentStatus").val());
                    $("#NonweighmentReason").val($("#spnNonWeighmentReason").text());
                    $("#WeighmentPaymentStatus").val($("#WeighmentPaymentMode").text());
                    $("#ManualSSRNo").val($("#ManualSSRNo").text());
                    $("#WeighmentInvoiceNo").val($("#WeighmentInvoiceNo").text());
                    $("#WeighmentSlipNo").val($("#WeighmentSlipNo").text());
                    if ($("#spnWeighmentStatus").val() == 'true' || $("#spnWeighmentStatus").val() == 'True') {
                        $("#divNonWeighmentReason").hide();
                        $("#divWeighmentPaymentMode").show();

                        if ($("#WeighmentPaymentMode").text().toLowerCase() == "cash") {
                            $("#divWeighmentInvoiceNo").show();
                            $("#divWeighmentSlipNo").show();
                            $("#divManualSSRNo").hide();
                        }
                        else if ($("#WeighmentPaymentMode").text().toLowerCase() == "ssr") {
                            $("#divManualSSRNo").show();
                            $("#divWeighmentInvoiceNo").hide();
                            $("#divWeighmentSlipNo").hide();
                        }
                    }
                    else {
                        $("#divWeighmentPaymentMode").hide();
                        $("#divManualSSRNo").hide();
                        $("#divWeighmentInvoiceNo").hide();
                        $("#divWeighmentSlipNo").hide();
                    }
                }
                else {
                    $("#WeighmentLabel").html('');
                    $("#WeighmentStatus").val('0');
                    $("#NonweighmentReason").val('');
                    $("#WeighmentPaymentStatus").val('');
                    $("#ManualSSRNo").val('');
                    $("#WeighmentInvoiceNo").val('');
                    $("#WeighmentSlipNo").val('');
                }
            }
        })
    }
    else {
        $("#WeighmentLabel").html('');
        $("#WeighmentStatus").val('0');
        $("#NonweighmentReason").val('');
        $("#WeighmentPaymentStatus").val('');
        $("#ManualSSRNo").val('');
        $("#WeighmentInvoiceNo").val('');
        $("#WeighmentSlipNo").val('');
    }
}

function GetTRUCKNO() {
    var TransID = $("#TransporterID").val();
    if (TransID == "") {
        TransID = "0"
    };
    var Category = $("#Category").val();
    var Type = $("#Type").val();
    if (Category == "WarehouseLoaded") {
        if (Type == "Regular Container") {
            $("#PlaceonTruck").hide();
            Autocompletebox("TruckNo", "TruckID", "trnEmptyTruckGateIn", "GetTruckNoFromOutWoRC", "GetTruckDetailsbasedOnworkOrderOut");
        }
        else {
            $("#PlaceonTruck").show();
            Autocompletebox("TruckNo", "TruckID", "trnEmptyTruckGateIn", "GetTruckNoFromOutWo", "GetTruckDetailsbasedOnworkOrderOut"); //FillWeighmentLabel remaining
        }
    }
    else {
        Autocompletebox("TruckNo", "TruckID", "trnEmptyTruckGateIn", "GetTRUCKNO/" + TransID, "FillWeighmentLabel");
        //Autocompletebox("Driver", "DriverID", "trnEmptyTruckGateIn", "GETDriver/" + TransID, "FuncationOnBlurForDriverDetails");
        Autocompletebox("LicenceNo", "LicenceNoID", "trnEmptyTruckGateIn", "GETLicenseNo/" + TransID, "FuncationOnBlurForLicenseDetails");
    }

}
$('#Category').change(function () {
    debugger;
    var category = $("#Category").val();
    if (category != null || category.length > 0 || category != undefined || category != "") {
        $("#PlaceonTruck").hide();
        $('#Type').empty();
        if (category == "WarehouseLoaded" || category == "Bonded") {
            debugger;
            $('#Type').append('<option value="Cargo" selected="selected">Cargo</option>');
            $('#Type').append('<option value="Regular Container">Regular Container</option>');
            //$('#Type').append('<option value="Domestic Container">Domestic Container</option>');
            //$("#PlaceonTruck").show();
            $("#Transporter").val('');
            $("#TransporterID").val('0');
            $("#TransportationType").val('OWN');
            $("#TruckNo").val('');
            $("#TruckID").val('0');
            $("#LicenceNo").val('');
            $("#Driver").val('');
            $("#MobileNo").val('');
            $("#Address").val('');
            GetTRUCKNO();
            $("#dvwt").hide();
            $("#dvInActiveReason").hide();
        }
        else if (category == "Export") {
            debugger;
            $('#Type').append('<option value="Regular Container" selected="selected">Regular Container</option>');
            $("#Transporter").val('');
            $("#TransporterID").val('0');
            $("#TransportationType").val('OWN');
            $("#TruckNo").val('');
            $("#TruckID").val('0');
            $("#LicenceNo").val('');
            $("#Driver").val('');
            $("#MobileNo").val('');
            $("#Address").val('');
            GetTRUCKNO();
            $("#dvwt").show();
            DisplayWeighment('WEIGHMENTREQUIRED', 'dvInActiveReason', 'dvOther', 'dvisshow');
        }
        else if (category == "Empty") {
            $('#Type').append('<option value="Regular Container" selected="selected">Regular Container</option>');
            $('#Type').append('<option value="Domestic Container">Domestic Container</option>');
            $('#Type').append('<option value="Export Container">Export Container</option>');
            $("#Transporter").val('');
            $("#TransporterID").val('0');
            $("#TransportationType").val('OWN');
            $("#TruckNo").val('');
            $("#TruckID").val('0');
            $("#LicenceNo").val('');
            $("#Driver").val('');
            $("#MobileNo").val('');
            $("#Address").val('');
            GetTRUCKNO();
            $("#dvwt").hide();
            $("#dvInActiveReason").hide();            
        }
        else {

            $('#Type').append('<option value="Others" selected="selected">Others</option>');
            $("#Transporter").val('');
            $("#TransporterID").val('0');
            $("#TransportationType").val('OWN');
            $("#TruckNo").val('');
            $("#TruckID").val('0');
            $("#LicenceNo").val('');
            $("#Driver").val('');
            $("#MobileNo").val('');
            $("#Address").val('');
            GetTRUCKNO();
            $("#dvwt").hide();
            $("#dvInActiveReason").hide();
        }

        if (category == "WarehouseLoaded") {
            $('#TransportationType').attr('disabled', true)

            $('#Transporter').attr('readonly', true)
            GetTRUCKNO();
            $("#TruckNo").autocomplete({
                disabled: false
            });
        }
        else {
            $('#TransportationType').attr('disabled', false)
            $('#Transporter').attr('readonly', false)
        }
    }
});

function onchangeTransportationBy(isdocumentload) {
    if (isdocumentload == undefined) {
        $("#Transporter").val('');
        $("#TransporterID").val('0');
        Autocompletebox("Transporter", "TransporterID", "trnEmptyTruckGateIn", "GetTransporter", "GetTRUCKNO");
        $("#TruckNo").val('');
        $("#TruckID").val('0');
        $("#Driver").val('');
        $("#DriverID").val('0');
        $("#LicenceNo").val('');
        $("#MobileNo").val('');
        $("#Address").val('');
    }
    if ($("#TransportationType").val() == "OWN") {
        $("#Transporter").autocomplete({
            disabled: false
        });
        $("#TruckNo").autocomplete({
            disabled: false
        });
        $("#Driver").autocomplete({
            disabled: false
        });
        $("#LicenceNo").autocomplete({
            disabled: false,
            change: function (event, ui) {
                if ($("#TransportationType").val() == "OWN") {
                    if (!ui.item) {
                        this.value = '';
                    }
                }
            }
        });
        Autocompletebox("Transporter", "TransporterID", "trnEmptyTruckGateIn", "GetTransporter", "GetTRUCKNO");

        if (isdocumentload == false) {
            $("#Transporter").val('');
            $("#TransporterID").val('0');
            $("#TruckNo").val('');
            $("#TruckID").val('0');
            $("#Driver").val('');
            $("#DriverID").val('0');
            $("#LicenceNo").val('');
            $("#MobileNo").val('');
            $("#Address").val('');
        }



        $("#Driver").attr("readonly", true);
        $("#DriverID").attr("readonly", true);
        $("#MobileNo").attr("readonly", true);
        $("#Address").attr("readonly", true);
    }
    else {
        debugger;
        $("#Transporter").autocomplete({
            disabled: true

        });
        $("#TruckNo").autocomplete({
            disabled: true
        });
        $("#Driver").autocomplete({
            disabled: true
        });
        $("#LicenceNo").autocomplete({
            disabled: true,
            change: function (event, ui) {
                if ($("#TransportationType").val() == "OWN") {
                    if (!ui.item) {
                        this.value = '';
                    }
                }
            }
        });
        if (isdocumentload == false) {
            $("#Transporter").val('');
            $("#TransporterID").val('0');
            $("#TruckNo").val('');
            $("#TruckID").val('0');
            $("#Driver").val('');
            $("#DriverID").val('0');
            $("#LicenceNo").val('');
            $("#MobileNo").val('');
            $("#Address").val('');
        }
        $("#Driver").attr("readonly", false);
        $("#DriverID").attr("readonly", false);
        $("#MobileNo").attr("readonly", false);
        $("#Address").attr("readonly", false);
    }
}


function GetTruckDetailsbasedOnworkOrderOut() {


    var TruckID = $("#TruckID").val();
    var Category = $("#Category").val();
    var Type = $("#Type").val();
    if (Category == "WarehouseLoaded") {

        if (TruckID != null && TruckID != undefined && TruckID != "" && TruckID != "0") {
            $.ajax({
                url: GetRootPath + "trnEmptyTruckGateIn/GetTruckDetailsbasedOnworkOrderOut/" + TruckID + "?Category=" + Category + "&Type=" + Type,
                type: "GET",
                dataType: "text",
                success: function (data) {
                    if (data != "" && data != null) {
                        $("#TransportationType").val(data.split("|")[0]);
                        $("#Transporter").val(data.split("|")[1]);
                        $("#TransporterID").val(data.split("|")[2]);
                    }
                    else {
                        $("#TransportationType").val('OWN');
                        $("#Transporter").val("");
                        $("#TransporterID").val("0");
                    }

                    if ($("#TransportationType").val() == "OWN") {
                        $("#Driver").attr("readonly", true);
                        $("#DriverID").attr("readonly", true);
                        $("#MobileNo").attr("readonly", true);
                        $("#Address").attr("readonly", true);
                    }
                    else {
                        $("#Driver").attr("readonly", false);
                        $("#DriverID").attr("readonly", false);
                        $("#MobileNo").attr("readonly", false);
                        $("#Address").attr("readonly", false);
                    }
                    Autocompletebox("LicenceNo", "LicenceNoID", "trnEmptyTruckGateIn", "GETLicenseNo/" + $("#TransporterID").val(), "FuncationOnBlurForLicenseDetails");

                    FillWeighmentLabel();

                    var trType = $("#TransportationType").val();
                    $("#TransportationRefType").val(trType);

                }
            })
        }
    }

}

function AddExportLoadedContainerdetails() {
    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/validateModelExportLoaded",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "") {
                var Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");

                if (ErrorFields != null && ErrorFields.length > 0) {
                    for (var Q = 0; Q < ErrorFields.length; Q++) {
                        $("#spn_Exp" + ErrorFields[Q]).text('');
                        $("#spn_Exp" + ErrorFields[Q]).next().addClass("redborder");
                    }
                }

                if (Errormsg != "") {
                    TosterAlert("error", Errormsg, "Required!");
                }
            }
            else {
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "trnEmptyTruckGateIn/AddExportLoadedContainerdetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        ClearExportLoadedContainerdetails();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillExportLoadedContainerdetailsGrid();
                        TosterAlert(msgType, msg, msgTitle);
                        location.reload();
                    }
                });
            }
        }
    });
}
function FillExportLoadedContainerdetailsGrid() {
    $("#ExportLoadedContainerdetails").html("");

    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/FillExportLoadedContainerdetailsGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ExportLoadedContainerdetails").html(data);
                ClearExportLoadedContainerdetails();
            }
        }
    });
}
function ClearExportLoadedContainerdetails() {
    $("#ExpLoadedContNo").val('');
    $("#trnexportmovementWOContainerDetailsID").val('0');
    $("#ExpISOCode").val('');
    $("#ExpISOCodeID").val('');
    $("#ExpISOCodeSizes").text('');
    $("#ExpISOCodeTypes").text('');
    $("#ExpSize").val('');
    $("#ExpContType").val('');
    $("#ExpCargoType").val('');
    $("#ExpCargoTypeID").val('0');
    $("#ExpAgent").val('');
    $("#ExpLine").val('');
    $("#ExpClass").val('');
    $("#ExpUN").val('');
    $("#ExpTemp").val('');
    $("#IsContainerplacedontruck").val('Yes');
    if ($("#trnEmptyTruckGateInLoadedID").val() > 0) {
        FillExportLoadedContainerdetailsGrid();
    }
    $("#trnEmptyTruckGateInLoadedID").val('0');
    $("#btnLoaded").text("Add");
    Autocompletebox("ExpLoadedContNo", "trnexportmovementWOContainerDetailsID", "trnEmptyTruckGateIn", "GetContNoExportLoaded/" + $("#trnEmptyTruckGateInID").val(), "FillExpISOCode");
}
function EditExportLoadedContainerDetails(ID) {
    $("#ExpLoadedContNo").val($("#txtContNo_" + ID).text());
    $("#trnexportmovementWOContainerDetailsID").val($("#trnexportmovementWOContainerDetailsID_" + ID).text());
    $("#ExpISOCode").val($("#ISOCode_" + ID).text());
    $("#ExpISOCodeID").val($("#ISOCodeID_" + ID).text());
    $("#ExpISOCodeSizes").text($("#Size_" + ID).text());
    $("#ExpSize").val($("#Size_" + ID).text());
    $("#ExpISOCodeTypes").text($("#ContType_" + ID).text());
    $("#ExpContType").val($("#ContType_" + ID).text());
    $("#ExpCargoType").val($("#CargoType_" + ID).text());
    $("#ExpCargoTypeID").val($("#CargoTypeID_" + ID).text());
    $("#ExpContainerStatus").val($("#ContainerStatus_" + ID).text());
    $("#ExpAgent").val($("#Agent_" + ID).text());
    $("#ExpLine").val($("#Line_" + ID).text());
    $("#ExpClass").val($("#Class_" + ID).text());
    $("#ExpUN").val($("#UN_" + ID).text());
    $("#ExpTemp").val($("#Temp_" + ID).text());
    $("#trnEmptyTruckGateInLoadedID").val(ID);
    $("#btnLoaded").text("Save");
    $('.isfullthenhideLoaded').show();
    Autocompletebox("ExpLoadedContNo", "trnexportmovementWOContainerDetailsID", "trnEmptyTruckGateIn", "GetContNoExportLoaded/" + $("#trnEmptyTruckGateInID").val(), "FillExpISOCode");
}
function DeleteExportLoadedContainerDetails(ID) {
    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/deleteLoaded/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillExportLoadedContainerdetailsGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}

function isExportLoadedContainerOutApproval(ID) {

    $.ajax({
        url: GetRootPath + "trnEmptyTruckGateIn/isExportLoadedContainerOutApproval/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {

            data = parseInt(data)

            category = $("#Category").val()

            if (data != 0 && category == "Export") {
                $("#ExpLoadedContNo").attr('disabled', 'disabled');
                $("#btnLoaded").attr('disabled', 'disabled');
            }
        }
    });

}
function DisplayWeighment(CheckBoxID, InactivePanalID, Other, isshow) {

    var IsActive = $("#" + CheckBoxID).prop("checked");
    if (IsActive != undefined) {
        if (IsActive == false) {
            $("#" + InactivePanalID).show();

            $("input[name=" + CheckBoxID + "]").iCheck('uncheck');
        }
        else {
            $("input[name=" + CheckBoxID + "]").iCheck('check');
            $("#" + InactivePanalID).hide();

        }
    }
    //  setTimeout(function () {
    $("#" + CheckBoxID).on('ifChanged', function (event) {
        if (event.target.checked == true) {
            $("#" + InactivePanalID).hide();
            $("." + isshow).hide('slow');
        }
        else {
            $("#" + InactivePanalID).show();
            /*$("#WEIGHMENTPAYMENTMODE").val("CASH");*/ // This line Added by Bhavesh
        }
    });

    //  }, 100);
}