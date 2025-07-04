$(document).ready(function () {
    var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();
    if (TransportationType == "Party") {
        $("#dvOwnTruckTransporter").hide();
        $("#dvPartyTruckTransporter").show();

        $("#Driver").prop("readonly", false);
        $("#DriverID").prop("readonly", false);
        $("#MobileNo").prop("readonly", false);
        $("#Address").prop("readonly", false);

    }
    else {
        $("#dvOwnTruckTransporter").show();
        $("#dvPartyTruckTransporter").hide();
        if ($("#DriverID").val() > 0) {
            $("#Driver").prop("readonly", true);
            $("#DriverID").prop("readonly", true);
            $("#MobileNo").prop("readonly", true);
            $("#Address").prop("readonly", true);
        }
    }
    Autocompletebox("Transporter", "TransporterID", "trnContainerGateIn", "GetTransporter", "GetTruckNo");
    Autocompletebox("SearchContainerNo", "SearchContainerID", "trnContainerGateIn", "GetContainerNo");
    Autocompletebox("ContNo", "trnDocumentContID", "trnContainerGateIn", "GetContainerNo/" + $("#trnContainerGateInID").val(), "FillISOCodeDetails");
    Autocompletebox("FromLocation", "FromLocationID", "trnContainerGateIn", "GetLocationfrom");
    Autocompletebox("VerifiedISOCodeForContainer", "VerifiedISOCodeIDForContainer", "trnContainerGateIn", "GetISOCODE", "CheckSameISOCodeSelectOrNot");
    Autocompletebox("Surveyor", "SurveyorID", "trnContainerGateIn", "GetSurveyor");
    Autocompletebox("Vendor", "VendorID", "trnContainerGateIn", "GetVendor");
    Autocompletebox("VCNNO", "VCNID", "trnContainerGateIn", "GetVCNNO", "FillVCNDetails");


    if (IsSearch == "true") {
        $("#SearchContainerNo").prop("readonly", true);        
        filldatatable();        
    }
    filldatatable();

    
    $("input[name=TRANSPORTATIONTYPE]").on('ifChanged', function (event) {
        var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();

        if (TransportationType != undefined) {


            if (TransportationType == "Party") {
                $("#dvOwnTruckTransporter").hide();
                $("#dvPartyTruckTransporter").show();
                $("#PARTYTRUCKNO").val('');
                $("#PartyTransporter").val('');
                $("#DriverID").val("0");
                $("#MobileNo").val("");
                $("#Address").val("");
                $("#LicenceNo").val("");
                $("#Driver").val("");
                $("#Driver").prop("readonly", false);
                $("#DriverID").prop("readonly", false);
                $("#MobileNo").prop("readonly", false);
                $("#Address").prop("readonly", false);
            }
            else {
                $("#dvOwnTruckTransporter").show();
                $("#dvPartyTruckTransporter").hide();
                $("#TRUCKNO").val('');
                $("#Transporter").val('');
                $("#LicenceNo").val("");
                $("#Driver").val('');
                $("#TRUCKID").val('0');
                $("#TransporterID").val('0');
                $("#MobileNo").val("");
                $("#Address").val("");
                Autocompletebox("Transporter", "TransporterID", "trnContainerGateIn", "GetTransporter", "GetTruckNo");
            }
        }
    });
});

function GetTruckNo() {

    Autocompletebox("TRUCKNO", "TRUCKID", "trnContainerGateIn", "GetTRUCKNO/" + $("#TransporterID").val(), "GetLicence");
}
function GetLicence() {    
    Autocompletebox("LicenceNo", "LicenceNo", "trnContainerGateIn", "GETLicenseNo/" + $("#TransporterID").val(), "GetDetailsByLicenceNO");
}

function TruckNumberChange() {

    $("#LicenceNo").val('');
    Autocompletebox("LicenceNo", "LicenceNo", "trnContainerGateIn", "GETLicenseNo/" + $("#TransporterID").val(), "GetDetailsByLicenceNO");
}

function TransporterChange() {

    let TRUCKNO = $("#TRUCKNO").val();

    if (TRUCKNO != "") {
        $("#TRUCKNO").val('');
        $("#LicenceNo").val('');
    }

    Autocompletebox("TRUCKNO", "TRUCKID", "trnContainerGateIn", "GetTRUCKNO/" + $("#TransporterID").val(), "GetLicence");

}

function OnchangeCheckBOX() {
    var counter = 0;
    $("input[name=chkContNo]").each(function () {
        if ($(this).is(":checked")) {
            counter++;
        }
    });
    if (counter == 2) {
        $("input[name=chkContNo]").each(function () {
            if (!$(this).is(":checked")) {
                $(this).iCheck('disable');
                if (this.id != "" && this.id != null) {
                    var IDVal = $("#" + this.id).val();
                    $("#GrossWeight_" + IDVal).prop("readonly", true);
                    $("#TareWeight_" + IDVal).prop("readonly", true);
                    $("#GrossWeight_" + IDVal).val("0");
                    $("#TareWeight_" + IDVal).val("0");
                    $("#PayloadCapacity_" + IDVal).text("0");
                }
            }
        });
    }
    else {
        $('input[name=chkContNo]').iCheck('enable');
        $('.GrossWeight').prop("readonly", false);
        $('.TareWeight').prop("readonly", false);
    }
}
function GetDetailsByLicenceNO() {
    var TransporterID = $("#TransporterID").val();
    var ID = $("#LicenceNo").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnContainerGateIn/GetLicenseDetails/" + ID + "?TransporterID=" + TransporterID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#Driver").val(data.split("|")[0]);
                    $("#DriverID").val(data.split("|")[3]);
                    $("#MobileNo").val(data.split("|")[1]);
                    $("#Address").val(data.split("|")[2]);
                    var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();
                    if (TransportationType == "Party") {
                        $("#dvOwnTruckTransporter").hide();
                        $("#dvPartyTruckTransporter").show();
                        $("#Driver").prop("readonly", false);
                        $("#DriverID").prop("readonly", false);
                        $("#MobileNo").prop("readonly", false);
                        $("#Address").prop("readonly", false);
                    }
                    else {
                        $("#dvOwnTruckTransporter").show();
                        $("#dvPartyTruckTransporter").hide();
                        if ($("#DriverID").val() > 0) {
                            $("#Driver").prop("readonly", true);
                            $("#DriverID").prop("readonly", true);
                            $("#MobileNo").prop("readonly", true);
                            $("#Address").prop("readonly", true);
                        }
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
            url: GetRootPath + "trnContainerGateIn/GetDriverDetails/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#LicenceNo").val(data.split("|")[0]);
                    $("#MobileNo").val(data.split("|")[1]);
                    $("#Address").val(data.split("|")[2]);
                    if ($("#DriverID").val() > 0) {
                        $("#Driver").prop("readonly", true);
                        $("#DriverID").prop("readonly", true);
                        $("#MobileNo").prop("readonly", true);
                        $("#Address").prop("readonly", true);
                    }
                }
                else {
                    $("#LicenceNo").val("");
                    $("#MobileNo").val("");
                    $("#Address").val("");
                }
            }
        })
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
function Callbackautocomplete() {
    Autocompletebox("txtIMPORTERADDRESSNAME", "txtIMPORTERADDRESSID", "trnContainerGateIn", "GetIMPORTERADDRESS/" + $("#txtIMPORTERID").val());
   // FillVCNDetails();
}
function SearchwithContainer() {
    var SearchContainerID = $("#SearchContainerID").val();
    if (SearchContainerID != null && SearchContainerID != undefined && SearchContainerID != "" && SearchContainerID != "0") {
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&SearchContainerID=" + SearchContainerID + "&SearchContainerNo=" + $("#SearchContainerNo").val();
    }
    else {
        $("#SearchContainerNo").addClass("redborder");
        TosterAlert("error", "Please select Container No", "Required!");
    }
}
function GatePassValidation() {

    var isvalid = true;
    var MErrormsg = "";
    var counter = 0;

    $.ajax({
        url: GetRootPath + "trnContainerGateIn/validateModel",
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
            else {               
            }
        }
    });

    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    return isvalid;
}
function ContainerValidation() {

    var isvalid = true;
    var MErrormsg = "";

    $.ajax({
        url: GetRootPath + "trnContainerGateIn/validateSubModel",
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

    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    else {
        $.ajax({
            url: GetRootPath + "trnContainerGateIn/AddContainer",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != "") {
                    var msgtype = data.split('|')[0];
                    var msg = data.split('|')[1];
                    var msgtxt = data.split('|')[2];
                    TosterAlert(msgtype, msg, msgtxt);
                    location.reload();
                }
            }
        });
    }
    return isvalid;
}
function ClearContainerDetails() {   
    $("#ContNo").val('');
    $("#trnDocumentContID").val('0');

    $("#VerifiedISOCodeIDForContainer").val('');
    $("#VerifiedISOCodeForContainer").val('');

    $("#ISOCodeForContainer").val('');
    $("#ISOCodeSForContainer").text('');

    $("#ISOCodeIDForContainer").val('0');

    $("#ISOCodeSizeForContainer").val('');
    $("#ISOCodeSizesForContainer").text('');

    $("#ISOCodeTypeForContainer").val('');
    $("#ISOCodeTypesForContainer").text('');

    $("#PortEIRNo").val('');
    $("#PortOutDate").val('');
    $("#PhysicalSeal").val('');
    $("#DeclaredSealForContainer").val('');
    $("#FromLocation").val('');
    $("#FromLocationID").val('');
    $("#GrossWeight").val('0');
    $("#TareWeight").val('0');
    $("#PayloadWeight").val('0');
    $("#Condition").val('');
    $("#ConditionRemarks").val('');
    $("#HighValueStatus").val('');
    $("#CargoTypeForContainer").val('');
    $("#CargoTypesForContainer").text('');    
    $("#DeliveryModeForContainer").val('');
    $("#DeliveryModesForContainer").text('');
    $("#PkgsForContainer").val('');
    $("#PkgssForContainer").text('');
    $("#PieceForContainer").val('');
    $("#PiecesForContainer").text('');
    $("#WeightForContainer").val('');
    $("#WeightsForContainer").text('');
    $("#BillCommodityForContainer").val('');
    $("#BillCommoditysForContainer").text('');
    $("#TempForContainer").val("0");
    $("#TempsForContainer").text("0");

    $("#HAZClassForContainer").val("0");
    $("#HAZClasssForContainer").text("0");

    $("#UNForContainer").val("0");
    $("#UNsForContainer").text("0");

    if ($("#trnContainerGateInDetailsID").val() > 0) {

       // filldatatable();
    }
    $("#trnContainerGateInDetailsID").val('0');

}
function EditContainerdetails(ID) {
    debugger
    $("#dvAddContainerDetails").show();
    $("#ContNo").val($("#ContNo_" + ID).text());
    $("#trnDocumentContID").val($("#trnDocumentContainerID_" + ID).text());
    $("#VerifiedISOCodeIDForContainer").val($("#VerifiedISOCodeID_" + ID).text());
    $("#VerifiedISOCodeForContainer").val($("#VerifiedISOCode_" + ID).text());
    $("#ISOCodeIDForContainer").val($("#ISOCodeID_" + ID).text());
    $("#ISOCodeForContainer").val($("#ISOCode_" + ID).text());
    $("#ISOCodeSForContainer").text($("#ISOCode_" + ID).text());
    $("#ISOCodeSizeForContainer").val($("#ISOCodeSize_" + ID).text());
    $("#ISOCodeTypeForContainer").val($("#ISOCodeType_" + ID).text());
    $("#ISOCodeSizesForContainer").text($("#ISOCodeSize_" + ID).text());
    $("#ISOCodeTypesForContainer").text($("#ISOCodeType_" + ID).text());
    $("#PortEIRNo").val($("#PortEIRNo_" + ID).text());
    $("#PortOutDate").val($("#PortOutDate_" + ID).text());
    $("#PhysicalSeal").val($("#PhysicalSeal_" + ID).text());
    $("#FromLocation").val($("#FromLocation_" + ID).text());
    $("#FromLocationID").val($("#FromLocationID_" + ID).text());
    $("#GrossWeight").val($("#GrossWeight_" + ID).text());
    $("#TareWeight").val($("#TareWeight_" + ID).text());
    $("#PayloadWeight").val($("#PayloadWeight_" + ID).text());
    $("#Condition").val($("#Condition_" + ID).text());
    $("#ConditionRemarks").val($("#ConditionRemarks_" + ID).text());
    $("#HighValueStatus").val($("#HighValueStatus_" + ID).text());
    $("#trnContainerGateInDetailsID").val(ID);
    $("#DeclaredSealForContainer").val($("#DeclaredSeal_" + ID).text());

    FillLabel();
    FillISOCodeDetails(ID);
    $('.IsFull').show('slow');
}
function filldatatable() {
    $.ajax({
        url: GetRootPath + "trnContainerGateIn/FillGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != "" && data != null) {
                $("#tblContainer").html(data);
                ClearContainerDetails();                
            }
            else {
                $("#tblContainer").html("");
            }
        }
    });
}
function deleteContainer(ID) {
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "trnContainerGateIn/deleteContainer/" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                filldatatable();
                TosterAlert("success", " Container Detail deleted Successfully! ", "success!");
            }
        });
    }
}
function FillLabel() {
    var ID = $("#trnDocumentContID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnContainerGateIn/FillLabelDetails/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#addLabel").html(data);
                }
                else {
                    $("#addLabel").html("");
                }
            }
        })
    }
    else {
        $("#addLabel").html("");
    }

}
function CheckTruckInUsed() {

    var TRUCKNO = "";
    var TransportationType = $("input[name='TRANSPORTATIONTYPE']:checked").val();
    var ID = $("#trnContainerGateInID").val();
    if (TransportationType == "Party") {
        TRUCKNO = $("#PARTYTRUCKNO").val()
    }
    else {
        TRUCKNO = $("#TRUCKNO").val()
    }

    $.ajax({
        url: GetRootPath + "trnContainerGateIn/CheckTruckInUsed/?TruckNo=" + TRUCKNO + "&trnContainerGateInID=" + ID,
        type: "Get",
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != "") {
                TosterAlert("warning", data, "Warning!");

                if (TransportationType == "Party") {
                    $("#PARTYTRUCKNO").val("");
                    $("#PartyTransporter").val("");
                }
                else {
                    $("#TRUCKNO").val("");
                    $("#TRUCKID").val("0");
                    $("#Transporter").val("");
                    $("#TransporterID").val("0");
                    $("#TRUCKNO").addClass("redborder")
                }

                ;
            }
            else {
                $("#TRUCKNO").removeClass("redborder");
            }
        }
    });
}
function checkvaluefortxtbox() {
    var GrossWeight = parseFloat($("#GrossWeight").val());
    if (GrossWeight == "") {
        GrossWeight = "0";
    }
    var TareWeight = parseFloat($("#TareWeight").val());
    if (TareWeight == "") {
        TareWeight = "0";
    }

    if (GrossWeight < TareWeight) {
        $("#TareWeight").val("0");
        TosterAlert("error", "Tare Weight is not greater than Gross Weight", "Required!");
        return false;
    }
    else {
        setPayloadCapacity();
    }
}
function setPayloadCapacity() {
    var GrossWeight = parseFloat($("#GrossWeight").val());
    if (GrossWeight == "") {
        GrossWeight = "0";
    }
    var TareWeight = parseFloat($("#TareWeight").val());
    if (TareWeight == "") {
        TareWeight = "0";
    }
    $("#PayloadWeight").val((GrossWeight - TareWeight).toFixed(2));
}
function FillISOCodeDetails(trnContainerGateInDetailsID = "") {
    if ($("#trnDocumentContID").val() != "" && $("#trnDocumentContID").val() != undefined && $("#trnDocumentContID").val() != null) {
        $.ajax({
            url: GetRootPath + "trnContainerGateIn/GetISOCodeDetails/" + $("#trnDocumentContID").val() + "?trnContainerGateInDetailsID=" + trnContainerGateInDetailsID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#ISOCodeIDForContainer").val(data.split("|")[0]);
                    $("#ISOCodeForContainer").val(data.split("|")[1]);
                    $("#ISOCodeSForContainer").text(data.split("|")[1]);
                    $("#ISOCodeSizeForContainer").val(data.split("|")[2]);
                    $("#ISOCodeSizesForContainer").text(data.split("|")[2]);
                    $("#ISOCodeTypeForContainer").val(data.split("|")[3]);
                    $("#ISOCodeTypesForContainer").text(data.split("|")[3]);

                    $("#CargoTypeForContainer").val(data.split("|")[4]);
                    $("#CargoTypesForContainer").text(data.split("|")[4]);

                    $("#DeliveryModeForContainer").val(data.split("|")[5]);
                    $("#DeliveryModesForContainer").text(data.split("|")[5]);

                    $("#PkgsForContainer").val(data.split("|")[6]);
                    $("#PkgssForContainer").text(data.split("|")[6]);

                    $("#PieceForContainer").val(data.split("|")[7]);
                    $("#PiecesForContainer").text(data.split("|")[7]);


                    $("#WeightForContainer").val(data.split("|")[8]);
                    $("#WeightsForContainer").text(data.split("|")[8]);

                    $("#BillCommodityForContainer").val(data.split("|")[9]);
                    $("#BillCommoditysForContainer").text(data.split("|")[9]);


                    $("#UNForContainer").val(data.split("|")[10]);
                    $("#UNsForContainer").text(data.split("|")[10]);

                    $("#TempForContainer").val(data.split("|")[11]);
                    $("#TempsForContainer").text(data.split("|")[11]);

                    $("#HAZClassForContainer").val(data.split("|")[12]);
                    $("#HAZClasssForContainer").text(data.split("|")[12]);

                    fillaboveLable($("#trnDocumentContID").val());
                }
                else {
                    $("#ISOCodeIDForContainer").val('0');
                    $("#ISOCodeForContainer").val('');
                    $("#ISOCodeSForContainer").text('');
                    $("#ISOCodeSizeForContainer").val('');
                    $("#ISOCodeSizesForContainer").text('');
                    $("#ISOCodeTypeForContainer").val('');
                    $("#ISOCodeTypesForContainer").text('');

                    $("#CargoTypeForContainer").val('');
                    $("#CargoTypesForContainer").text('');

                    $("#DeliveryModeForContainer").val('');
                    $("#DeliveryModesForContainer").text('');

                    $("#PkgsForContainer").val('');
                    $("#PkgssForContainer").text('');

                    $("#PieceForContainer").val('');
                    $("#PiecesForContainer").text('');


                    $("#WeightForContainer").val('');
                    $("#WeightsForContainer").text('');

                    $("#BillCommodityForContainer").val('');
                    $("#BillCommoditysForContainer").text('');


                    $("#UNForContainer").val('');
                    $("#UNsForContainer").text('');

                    $("#TempForContainer").val('');
                    $("#TempsForContainer").text('');
                }
            }
        })
    }
    else {
        $("#ISOCodeIDForContainer").val('0');
        $("#ISOCodeForContainer").val('');
        $("#ISOCodeSForContainer").text('');
        $("#ISOCodeSizeForContainer").val('');
        $("#ISOCodeSizesForContainer").text('');
        $("#ISOCodeTypeForContainer").val('');
        $("#ISOCodeTypesForContainer").text('');

        $("#CargoTypeForContainer").val('');
        $("#CargoTypesForContainer").text('');

        $("#DeliveryModeForContainer").val('');
        $("#DeliveryModesForContainer").text('');

        $("#PkgsForContainer").val('');
        $("#PkgssForContainer").text('');

        $("#PieceForContainer").val('');
        $("#PiecesForContainer").text('');


        $("#WeightForContainer").val('');
        $("#WeightsForContainer").text('');

        $("#BillCommodityForContainer").val('');
        $("#BillCommoditysForContainer").text('');


        $("#UNForContainer").val('');
        $("#UNsForContainer").text('');

        $("#TempForContainer").val('');
        $("#TempsForContainer").text('');
    }
}
function CheckSameISOCodeSelectOrNot() {
    var ISOCode = $("#ISOCodeForContainer").val();
    var VerifiedISOCode = $("#VerifiedISOCodeForContainer").val();

    if (VerifiedISOCode != ISOCode) {
        TosterAlert("warning", " You select differnt ISO Code ", "warning!");
    }
}
function fillaboveLable(ID) {
    $.ajax({
        url: GetRootPath + "trnContainerGateIn/fillaboveLable/" + ID,
        type: "GET",
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#abovelbl").html(data);
            }
        }
    })
}
function FillVCNDetails() {
    var ID = $("#VCNID").val();
    $("#VesselName").val("");
    $("#VOYNO").val("");
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnContainerGateIn/GetVESSELNAMEAndVOYNO/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {                
                if (data != "" && data != null) {
                    $("#VesselName").val(data.split("|")[0]);
                    $("#VOYNO").val(data.split("|")[1]);                    
                }
                else {
                    $("#VesselName").val("");
                    $("#VOYNO").val("");
                }
            }
        })
    }
}
