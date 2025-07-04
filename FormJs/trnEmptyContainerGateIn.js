$(document).ready(function () {
    Autocompletebox("TransporterName", "TransporterID", "trnEmptyContainerGateIn", "GetTransporter", "GetTRUCKNO");
    Autocompletebox("Driver", "DriverID", "trnEmptyContainerGateIn", "GetDriver/" + $("#TransporterID").val());
    Autocompletebox("ISOCode", "ISOCodeID", "trnEmptyContainerGateIn", "GetISOCODE");
    Autocompletebox("ContNo", "trnEmptyContainerInWOContainerDetailsID", "trnEmptyContainerGateIn", "GetContainerNumber/" + $("#trnEmptyContainerGateInID").val(), "GetContainerDetails");

    if (IsSearch == "true") {
        $("#TransporterName").prop("readonly", true);
        $("#dvSearchButton").css("display", "none");
    }
    if (doaction == 'edit') {
        var TRANSPORTATIONTYPE = $("input[name='TRANSPORTATIONTYPE']:checked").val();
        if (TRANSPORTATIONTYPE == "OWN") {
            Autocompletebox("TrailerNo", "TrailerID", "trnEmptyContainerGateIn", "GetTRUCKNO/" + $("#TransporterID").val(), "CheckTruckInUsed");
        }
        $(".clsBasicDetails").hide();
    }

    if (IsAprroved == "True") {
        $("#ContNo").prop("readonly", true);

    }

    filldatatable();
    MyTransportationType1();
    IsSameTruckUsedForStuffing();
    fnTruckWeighmentStatus();
});

function MyTransportationType1() {
    //setTimeout(function () {
    $("input[name=TRANSPORTATIONTYPE]").on('ifChanged', function (event) {

        var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();

        if (TransportationType != undefined) {


            if (TransportationType == "Party") {
                $("#dvOwnTruck").hide();
                $("#dvPartyTruck").show();
                $("#TrailerNo").val('');
                $("#LICNo").val('');
                $("#TransporterName").val('');
                $("#Driver").val('');
                $("#MobileNo").val('');
                $("#Address").val('');
                $("#TruckID").val('0');
                $("#TransporterID").val('0');
                $("#DriverID").val('0');
                $("#VehicleType").val('NORMAL');
                $("#MobileNo").val('');
                $("#Address").val('');
                $("#Driver").prop("readonly", false);
                $("#MobileNo").prop("readonly", false);
                $("#Address").prop("readonly", false);
                $("#TransporterName").autocomplete({
                    disabled: true
                });
                $("#TrailerNo").autocomplete({
                    disabled: true
                });
                $("#LICNo").autocomplete({
                    disabled: true
                });
                $("#Driver").autocomplete({
                    disabled: true
                });
            }
            else {
                $("#dvPartyTruck").hide();
                $("#dvOwnTruck").show();
                $("#TransporterName").val('');
                $("#TransporterID").val('0');
                $("#LICNo").val('');
                $("#TrailerNo").val('');
                $("#Driver").val('');
                $("#TruckID").val('0');
                $("#DriverID").val('0');
                $("#VehicleType").val('NORMAL');
                $("#MobileNo").val('');
                $("#Address").val('');
                $("#TransporterName").autocomplete({
                    disabled: false
                });
                $("#TrailerNo").autocomplete({
                    disabled: false
                });
                $("#LICNo").autocomplete({
                    disabled: false
                });
                $("#Driver").autocomplete({
                    disabled: false
                });
                Autocompletebox("TransporterName", "TransporterID", "trnEmptyContainerGateIn", "GetTransporter", "GetTRUCKNO");
            }
        }
    });
    //}, 1000);
}

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function SearchwithTruckNo() {
    var TrailerNo = $("#TrailerNo").val();
    var TrailerID = $("#TrailerID").val();
    var TransporterName = $("#TransporterName").val();
    var TransporterID = $("#TransporterID").val();
    if (TrailerID != null && TrailerID != undefined && TrailerID != "" && TrailerID != "0") {
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&TrailerNo=" + TrailerNo + "&TrailerID=" + TrailerID + "&TransporterName=" + TransporterName + "&TransporterID=" + TransporterID
    }
    else {
        $("#TrailerNo").addClass("redborder");
        $("#TransporterName").addClass("redborder");
        TosterAlert("error", "Please select Trailer No. <br/> Please select Transporter Name.", "Required!");
    }
}

function GetTRUCKNO() {
    $("#TrailerNo").val('');
    Autocompletebox("TrailerNo", "TrailerID", "trnEmptyContainerGateIn", "GetTRUCKNO/" + $("#TransporterID").val(), "CheckTruckInUsed");
    Autocompletebox("Driver", "DriverID", "trnEmptyContainerGateIn", "GETDriver/" + $("#TransporterID").val(), "GetDetailsByDriver");
    Autocompletebox("LICNo", "hdnLICNo", "trnEmptyContainerGateIn", "GETLicenseNo/" + $("#TransporterID").val(), "GetDetailsByLicenceNO");
}

function GetDetailsByLicenceNO() {
    var TransporterID = $("#TransporterID").val();
    var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();
    var ID = $("#LICNo").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnEmptyContainerGateIn/GetLicenseDetails/" + ID + "?TransporterID=" + TransporterID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#Driver").val(data.split("|")[0]);
                    $("#DriverID").val(data.split("|")[3]);
                    $("#MobileNo").val(data.split("|")[1]);
                    $("#Address").val(data.split("|")[2]);
                    if (TransportationType == "OWN") {
                        $("#Driver").prop("readonly", true);
                        $("#MobileNo").prop("readonly", true);
                        $("#Address").prop("readonly", true);
                        $("#Driver").autocomplete({
                            disabled: true
                        });
                    }
                    else {
                        $("#Driver").prop("readonly", true);
                        $("#MobileNo").prop("readonly", false);
                        $("#Address").prop("readonly", false);
                    }

                }
                else {
                    $("#Driver").val("");
                    $("#DriverID").val("0");
                    $("#MobileNo").val("");
                    $("#Address").val("");

                }
            }
        })
    }
}

function GetDetailsByDriver() {

    var ID = $("#DriverID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnEmptyContainerGateIn/GetDriverDetails/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#LICNo").val(data.split("|")[0]);
                    $("#MobileNo").val(data.split("|")[1]);
                    $("#Address").val(data.split("|")[2]);
                }
                else {
                    $("#LICNo").val("");
                    $("#MobileNo").val("");
                    $("#Address").val("");
                }
            }
        })
    }
}

function CheckTruckInUsed() {
    var TRUCKNO = "";
    var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();
    TRUCKNO = $("#TrailerNo").val()


    $.ajax({
        url: GetRootPath + "trnEmptyContainerGateIn/CheckTruckInUsed?TruckNo=" + TRUCKNO + "&trnEmptyContainerGateInID=" + trnEmptyContainerGateInID,
        type: "Get",
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != "") {
                TosterAlert("warning", data, "Warning!");
                $("#TransporterName").val("");
                $("#TrailerNo").val("");
                $("#TrailerID").val("0");
                $("#TrailerNo").addClass("redborder");
            }
            else {
                $("#TrailerNo").removeClass("redborder");
            }
        }
    });
}

function EmptyContainerGateInGWValidation(tab) {
    changestepValue(tab);
    if (tab == 10) {
        changestepValue(1);
    }
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnEmptyContainerGateIn/validateModel",
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

function changestepValue(tabNo) {

    if (tabNo == 10) {
        $("#IsFinished").val(true);
        $("#IsChangeStep").val(2);
    }
    $("#EmptyContainerGateInTab").val(tabNo);
}

function ChangeStatus(status, trnEmptyContainerGateInID, StatusRemarks, HoldAgency, HoldAgencyID) {
    if (trnEmptyContainerGateInID != null && trnEmptyContainerGateInID != "" && trnEmptyContainerGateInID != undefined && trnEmptyContainerGateInID != "0") {
        $("#ChangeStatus").modal("show");
        $("#ddlStatus").val(status);
        $("#txtEmptyContainerGateInGWID").val(trnEmptyContainerGateInID);
        ReasonHideshow(status);
        $("#txtreason").val(StatusRemarks);
        $("#txtHoldAgency").val(HoldAgency);
        $("#txtHoldAgencyID").val(HoldAgencyID);
    }
}

function ReasonHideshow(status) {
    if (status == "P" || status == "D") {
        $(".ReasonHideshow").hide();
        $(".HoldAgencyHideshow").hide();
        $("#txtreason").val('');
        $("#txtHoldAgency").val('');
        $("#txtErrormessage").hide();
        $("#txtHoldAgencymessage").hide();
    }
    else {
        $(".ReasonHideshow").show();
        $("#txtreason").val('');
        $("#txtHoldAgency").val('');
        if (status != "H") {
            $(".HoldAgencyHideshow").hide();
        }
        else {
            $(".HoldAgencyHideshow").show();
        }
        $("#txtErrormessage").hide();
        $("#txtHoldAgencymessage").hide();
    }
}

function validateReason() {
    var status = $("#ddlStatus").val();
    $("#txtHoldAgencymessage").hide();
    $("#txtErrormessage").hide();
    if (!(status == "P" || status == "D")) {
        var Reason = $("#txtreason").val();
        if (!(Reason != null && Reason != undefined && Reason.trim() != "")) {
            $("#txtErrormessage").show();
            return false;
        }
        if (status == "H") {
            if (!($("#txtHoldAgency").val() != null && $("#txtHoldAgency").val() != undefined && $("#txtHoldAgency").val().trim() != "")) {
                $("#txtHoldAgencymessage").show();
                return false;
            }
            else {
                $("#txtHoldAgencymessage").hide();
            }
        }
    }
    return true;
}

function FillISOCodeDetails() {
    if ($("#trnEmptyContainerInWOContainerDetailsID").val() != "" && $("#trnEmptyContainerInWOContainerDetailsID").val() != undefined && $("#trnEmptyContainerInWOContainerDetailsID").val() != null) {
        $.ajax({
            url: GetRootPath + "trnEmptyContainerGateIn/GetISOCodeSizeAndType/" + $("#trnEmptyContainerInWOContainerDetailsID").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#WOISOCode").val(data.split("|")[0]);
                    $("#WOISOCodeSize").val(data.split("|")[1]);
                    $("#WOISOCodeType").val(data.split("|")[2]);
                    $("#SpanWOISOCode").text(data.split("|")[0]);
                    $("#SpanWOISOCodeSize").text(data.split("|")[1]);
                    $("#SpanWOISOCodeType").text(data.split("|")[2]);
                    CheckIsContainerTypeIsSame();
                }
                else {
                    $("#WOISOCode").val("");
                    $("#WOISOCodeSize").val("");
                    $("#WOISOCodeType").val("");
                    $("#SpanWOISOCodeSize").text("");
                    $("#SpanWOISOCodeType").text("");
                    $("#SpanWOISOCode").text("");
                }
            }
        })
    }
    else {
        $("#WOISOCode").val("");
        $("#WOISOCodeSize").val("");
        $("#WOISOCodeType").val("");
        $("#SpanWOISOCodeSize").text("");
        $("#SpanWOISOCodeType").text("");
        $("#SpanWOISOCode").text("");
    }
}

function filldatatable() {
    $.ajax({
        url: GetRootPath + "trnEmptyContainerGateIn/FillGrid/",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            ClearEmptyContainerGateInDetails();
            $("#tblEmptyContainerGateInDetails").html(data);

        }
    });
}

function ClearEmptyContainerGateInDetails() {
    $("#ContNo").val("");
    $("#ISOCode").val("");
    $("#ISOCodeID").val("");
    $("#WOISOCodeSize").val("");
    $("#SpanWOISOCodeSize").text("");
    $("#SpanWOISOCode").text("");
    $("#WOISOCode").val("");
    $("#SpanWOISOCodeType").text("");
    $("#WOISOCodeType").val("");
    $("#GrossWeight").val("0");
    $("#ContainerTareWeight").val("0");
    $("#Condition").val("NORMAL");
    $("#ConditionRemarks").val("");
    $("#trnEmptyContainerInWOContainerDetailsID").val("0");
    $("#ISOCodeID").val("0");
    $("#trnEmptyContainerGateInContainerID").val("0");
    GetContainerDetails();
    CalculatenetWeight();
}

function EditEmptyContainerGateInDetails(ID) {
    $("#ContNo").val($("#ContainerNumber_" + ID).text());
    $("#ISOCode").val($("#ISOCode_" + ID).text());
    $("#SpanWOISOCode").text($("#WOISOCode_" + ID).text());
    $("#SpanWOISOCodeSize").text($("#ISOCodeSize_" + ID).text());
    $("#WOISOCodeSize").val($("#ISOCodeSize_" + ID).text());
    $("#SpanWOISOCodeType").text($("#ISOCodeType_" + ID).text());
    $("#WOISOCodeType").val($("#ISOCodeType_" + ID).text());
    $("#GrossWeight").val($("#GrossWeight_" + ID).text());
    $("#ContainerTareWeight").val($("#TareWeight_" + ID).text());
    $("#Condition").val($("#Condition_" + ID).text());
    $("#ConditionRemarks").val($("#ConditionRemarks_" + ID).text());
    $("#trnEmptyContainerGateInID").val($("#trnEmptyContainerGateInID_" + ID).text());
    $("#trnEmptyContainerGateInContainerID").val($("#trnEmptyContainerGateInDetailsID_" + ID).text());
    $("#ISOCodeID").val($("#ISOCodeID_" + ID).text());
    $("#trnEmptyContainerInWOContainerDetailsID").val($("#trnEmptyContainerInWOContainerDetailsID_" + ID).text());
    GetContainerDetails();
    CalculatenetWeight();
    //GetLotNo();
    //GetLotNoDetails();
}

function DeleteEmptyContainerGateInDetails(ID) {
    $.ajax({
        url: GetRootPath + "trnEmptyContainerGateIn/deleteEmptyContainerGateInDetailsGW/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            filldatatable();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}

function GetContainerDetails() {
    //  setTimeout(function () {
    var ContainerNumber = $("#ContNo").val();
    if (ContainerNumber != null && ContainerNumber != undefined && ContainerNumber != "") {
        $.ajax({
            url: GetRootPath + "trnEmptyContainerGateIn/FillLabelDetails?ContainerNumber=" + ContainerNumber,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#ShowContainerDetails").html(data);
                }
                else {
                    $("#ShowContainerDetails").html("");
                }
            }
        })
    }
    else {
        $("#ShowContainerDetails").html("");
    }
    FillISOCodeDetails();
    //  }, 100);
}

function CheckIsContainerTypeIsSame() {
    var SpanWOISOCodeType = $("#SpanWOISOCodeType").text();
    var FRBundlingStatus = $("#FRBundlingStatus").val();

    if (FRBundlingStatus == "Yes" && SpanWOISOCodeType.toUpperCase() != "FR") {
        TosterAlert("warning", " FR Bundling Status Is Yes and Container Type Is not FR ", "Warning!");
    }
}

function CalculatenetWeight() {
    var GrossWeight = $("#GrossWeight").val();
    var ContainerTareWeight = $("#ContainerTareWeight").val();

    if (GrossWeight == "" || GrossWeight == undefined || GrossWeight == null) {
        GrossWeight = 0;
    }

    if (ContainerTareWeight == "" || ContainerTareWeight == undefined || ContainerTareWeight == null) {
        ContainerTareWeight = 0;
    }

    if (parseFloat(GrossWeight) <= parseFloat(ContainerTareWeight)) {
        ContainerTareWeight = 0;
        $("#ContainerTareWeight").val(0);
    }

    $("#lblnetwgt").text(parseFloat(GrossWeight) - parseFloat(ContainerTareWeight));
}

function DeleteContainerDetailsByID(ID) {
    $("#DeletetrnEmptyContainerGateInContainerID").val(ID);
}

function DeleteContainerDetails() {
    var IsValid = false;
    var DeleteRemarks = $("#DeleteRemarks").val();
    var ID = $("#DeletetrnEmptyContainerGateInContainerID").val();

    if (DeleteRemarks != null && DeleteRemarks != "" && DeleteRemarks != undefined) {
        IsValid = true;
    }
    else {
        IsValid = false;
        $("#DeleteRemarks").addClass("redborder");
        TosterAlert("Error", " Delete Remarks is required! ", "error!");
    }

    if (IsValid && ID != null && ID != "" && ID != undefined && ID != "0") {

        $.ajax({
            url: GetRootPath + "trnEmptyContainerGateIn/deleteEmptyContainerGateInDetails/" + ID + "?DeleteRemarks=" + DeleteRemarks,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                filldatatable();
                TosterAlert("success", " Container Detail deleted Successfully! ", "success!");
                $("#DeleteRemarks").val('');
                $("#DeleteContainerDetails").modal('hide');
            }
        });
    }
    else {
        TosterAlert("Error", " There is Some technical issue, Please contact to system admin ", "error!");
    }
}

function checkstringlengh(Type) {
    if (Type == "GrossWeight") {
        if ($("#" + Type).val().length != 5) {
            TosterAlert("warning", "Gross Weight must be 5 digits", "Warning!");
            $("#" + Type).val('0');
        }
    }
    else if (Type == "ContainerTareWeight") {
        if ($("#" + Type).val().length != 4) {
            TosterAlert("warning", " Container Tare Weight must be 4 digits.", "Warning!");
            $("#" + Type).val('0');
        }
    }
    return IsValid;
}

function ISOCodeMatchOrNot() {
    var IsValid = true;
    var ISOCode = $("#ISOCode").val();
    var WOISOCode = $("#WOISOCode").val();
    if (ISOCode != WOISOCode) {
        TosterAlert("warning", " You selected different ISO Code.", "Warning!");
        IsValid = false;
    }
    return IsValid;
}
function IsSameTruckUsedForStuffing() {
    debugger;
    if ($("#SameTruckIsUsed").val() != "" && $("#SameTruckIsUsed").val() != undefined && $("#SameTruckIsUsed").val() != null) {
        /*if (doaction != "edit") {*/
            if ($("#SameTruckIsUsed").val().toUpperCase() == "YES") {
                debugger;
                $("#hdnTruckWeighmentStatus").prop("disabled", false);
                $("#hdnTruckWeighmentStatus").val("Yes");
                $("#TruckWeighmentStatus").val("Yes");
            }
            else {
                debugger;
                $("#TruckWeighmentStatus").val("No");
                $("#hdnTruckWeighmentStatus").val("No");
                $("#hdnTruckWeighmentStatus").prop("disabled", true);
            }
        //}
        //else {
        //    if ($("#SameTruckIsUsed").val().toUpperCase() == "NO") {
        //        $("#hdnTruckWeighmentStatus").prop("disabled", true);
        //        $("#hdnTruckWeighmentStatus").val("No");
        //        $("#TruckWeighmentStatus").val("No");
        //    }
        //}

    }
}
function fnTruckWeighmentStatus() {
    debugger;
    if ($("#hdnTruckWeighmentStatus").val() != "" && $("#hdnTruckWeighmentStatus").val() != undefined && $("#hdnTruckWeighmentStatus").val() != null) {        
        if ($("#hdnTruckWeighmentStatus").val().toUpperCase() == "YES") {                
            $("#TruckWeighmentStatus").val("Yes");
        }
        else {                
            $("#TruckWeighmentStatus").val("No");               
        }        
    }
}