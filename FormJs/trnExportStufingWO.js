$(document).ready(function () {
    var StuffWoID = $("#trnExportStuffingWOID").val();
    $("#hdntrnExportStuffingWOID").val($("#trnExportStuffingWOID").val());
    Autocompletebox("Agent", "hdnAgentID", "trnExportStufingWO", "GETAgent", "CallbackautocompleteForLine");
    if ($("#hdnAgentID").val() != "" && $("#hdnAgentID").val() != null && $("#hdnAgentID").val() != undefined && $("#hdnAgentID").val() > 0) {
        Autocompletebox("Line", "hdnLineID", "trnExportStufingWO", "GETLine/" + $("#hdnAgentID").val());
    }
    Autocompletebox("Consoler", "hdnConsolerID", "trnExportStufingWO", "GETConsoler");
    Autocompletebox("VcnNo", "hdnVcnNo", "trnExportStufingWO", "GETVCNNO", "GetVCNDetail");
    Autocompletebox("Contractor", "hdnContractorID", "trnExportStufingWO", "GETContractor");
    Autocompletebox("Surveyor", "hdnSurveyorID", "trnExportStufingWO", "GETSurveyor");
    Autocompletebox("BOENo", "hdnBOENo", "trnExportStufingWO", "GETBOENo/" + StuffWoID, "GETBOENoDetail");
    Autocompletebox("BLNo", "hdnBLNo", "trnExportStufingWO", "GETBLNo/" + StuffWoID, "GetBLNoDetail");

    Autocompletebox("ContainerNo", "hdnContainerID", "trnExportStufingWO", "GETContainerNo?AgentID=" + $("#hdnAgentID").val() + "&LineID=" + $("#hdnLineID").val() + "&stuffID=" + $("#trnExportStuffingWOID").val(), "FillContainerDetails");
    fillSBdatatable();
    FillContainerData();
});
function CallbackautocompleteForLine() {
    Autocompletebox("Line", "hdnLineID", "trnExportStufingWO", "GETLine?ID=" + $("#hdnAgentID").val());
}
function GetVCNDetail() {
    var VCNID = $("#hdnVcnNo").val();
    if (VCNID != "" && VCNID != null && VCNID != undefined && VCNID != "0") {
        $.ajax({
            url: GetRootPath + "trnExportStufingWO/GetVCNDetail?VCNID=" + VCNID,
            type: "GET",
            datatype: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#VoyNo").val(data.split('|')[0]);
                    $("#Veseelnm").val(data.split('|')[1]);
                    $("#CoffD").val(data.split('|')[2]);
                }
            }
        });
    }
}
function GetBLNoDetail() {
    var WoDLID = $("#hdnBLNo").val();
    var trnExportStuffingWOID = $("#trnExportStuffingWOID").val();
    if (WoDLID != "" && WoDLID != null && WoDLID != undefined && WoDLID != "0") {

        $.ajax({
            url: GetRootPath + "trnExportStufingWO/GetBLNoDetails?ID=" + WoDLID + "&trnExportStuffingWOID=" + trnExportStuffingWOID,
            type: "GET",
            datatype: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#lblSBDeatil").removeClass('hide');
                    $("#BOEDate").text(data.split('|')[0]);
                    $("#Bulk").text(data.split('|')[1]);
                    $("#IsBulk").val(data.split('|')[1]);
                    $("#hdnCustomerID").val(data.split('|')[2]);
                    $("#Customer").text(data.split('|')[3]);
                    $("#hdnForwarderID").val(data.split('|')[4]);
                    $("#Forwarder").text(data.split('|')[5]);
                    $("#hdnExporter").val(data.split('|')[6]);
                    $("#Exporter").text(data.split('|')[7]);
                    $("#Cargo").text(data.split('|')[8]);
                    $("#Cargotype").text(data.split('|')[9]);
                    $("#hdnCargotype").val(data.split('|')[10]);
                    $("#hdnBillCommodity").text(data.split('|')[11]);
                    $("#BillCommodity").text(data.split('|')[12]);
                    $("#Class").text(data.split('|')[13]);
                    $("#UN").text(data.split('|')[14]);
                    $("#Temp").text(data.split('|')[15]);
                    $("#DecPkg").text(data.split('|')[16]);
                    $("#TotalDecPkg").val(data.split('|')[16]);                    
                    $("#DecPieces").text(data.split('|')[17]);
                    $("#TotalDecPieces").val(data.split('|')[17]);
                    $("#DecWt").text(data.split('|')[18]);
                    $("#TotalDecWt").val(data.split('|')[18]);
                    $("#totalpkg").text("Total : " + data.split('|')[19] + "/" + $("#DecPkg").text());
                    $("#totalWeight").text("Total : " + data.split('|')[21] + "/" + $("#DecWt").text());
                    $("#totalPiece").text("Total : " + data.split('|')[20] + "/" + $("#DecPieces").text());
                    $("#hdntotalpkgs").val(data.split('|')[19]);
                    $("#hdntotalPiece").val(data.split('|')[20]);
                    $("#hdntotalWeight").val(data.split('|')[21]);
                    $("#BOENo").val(data.split('|')[22]);
                    $("#hdnBOENo").val(data.split('|')[23]);
                    $("#FOB").val(data.split('|')[24]);
                    $(".QTYLABEL").addClass("badge bg-light-blue");
                }
                else {

                    $("#totalpkg").text("");
                    $("#totalWeight").text("");
                    $("#totalPiece").text("");
                    $(".QTYLABEL").removeClass("badge bg-light-blue");
                }
            }
        });
    }
    else {
        $("#totalpkg").text("");
        $("#totalWeight").text("");
        $("#totalPiece").text("");
        $(".QTYLABEL").removeClass("badge bg-light-blue");


        if ($("#hdnBOENo").val() == '0') {
            ClearSBData();
            $("#lblSBDeatil").addClass('hide');
        }
        GETBOENoDetail();
    }
}
function GETBOENoDetail() {
    var WoDLID = $("#hdnBOENo").val();
    var trnExportStuffingWOID = $("#trnExportStuffingWOID").val();
    if (WoDLID != "" && WoDLID != null && WoDLID != undefined && WoDLID != "0") {
        $.ajax({
            url: GetRootPath + "trnExportStufingWO/GETBOENoDetails?ID=" + WoDLID + "&trnExportStuffingWOID=" + trnExportStuffingWOID,
            type: "GET",
            datatype: "text",
            success: function (data) {                
                if (data != "" && data != null) {
                    $("#lblSBDeatil").removeClass('hide');
                    $("#BOEDate").text(data.split('|')[0]);
                    $("#Bulk").text(data.split('|')[1]);
                    $("#IsBulk").val(data.split('|')[1]);
                    $("#hdnCustomerID").val(data.split('|')[2]);
                    $("#Customer").text(data.split('|')[3]);
                    $("#hdnForwarderID").val(data.split('|')[4]);
                    $("#Forwarder").text(data.split('|')[5]);
                    $("#hdnExporter").val(data.split('|')[6]);
                    $("#Exporter").text(data.split('|')[7]);
                    $("#Cargo").text(data.split('|')[8]);
                    $("#Cargotype").text(data.split('|')[9]);
                    $("#hdnCargotype").val(data.split('|')[10]);
                    $("#hdnBillCommodity").text(data.split('|')[11]);
                    $("#BillCommodity").text(data.split('|')[12]);
                    $("#Class").text(data.split('|')[13]);
                    $("#UN").text(data.split('|')[14]);
                    $("#Temp").text(data.split('|')[15]);
                    $("#DecPkg").text(data.split('|')[16]);                    
                    $("#DecPieces").text(data.split('|')[17]);
                    $("#DecWt").text(data.split('|')[18]);
                    $("#TotalDecPkg").val(data.split('|')[16]);                    
                    $("#TotalDecPieces").val(data.split('|')[17]);
                    $("#TotalDecWt").val(data.split('|')[18]);
                    $("#totalpkg").text("Total : " + data.split('|')[19] + "/" + $("#DecPkg").text());
                    $("#totalWeight").text("Total : " + data.split('|')[21] + "/" + $("#DecWt").text());
                    $("#totalPiece").text("Total : " + data.split('|')[20] + "/" + $("#DecPieces").text());
                    $("#hdntotalpkgs").val(data.split('|')[19]);
                    $("#hdntotalPiece").val(data.split('|')[20]);
                    $("#hdntotalWeight").val(data.split('|')[21]);
                    $("#BLNo").val(data.split('|')[22]);
                    $("#hdnBLNo").val(data.split('|')[23]);
                    $("#FOB").val(data.split('|')[24]);
                    $(".QTYLABEL").addClass("badge bg-light-blue");
                }
                else {

                    $("#totalpkg").text("");
                    $("#totalWeight").text("");
                    $("#totalPiece").text("");
                    $(".QTYLABEL").removeClass("badge bg-light-blue");
                }
            }
        });
    }
    else {

        $("#totalpkg").text("");
        $("#totalWeight").text("");
        $("#totalPiece").text("");
        $(".QTYLABEL").removeClass("badge bg-light-blue");
        if ($("#hdnBLNo").val() == '0') {
            ClearSBData();
            $("#lblSBDeatil").addClass('hide');
        }
        GetBLNoDetail();
    }
}
function FillContainerDetails() {
    var ContainerID = $("#hdnContainerID").val();
    if (ContainerID != "" && ContainerID != null && ContainerID != undefined && ContainerID != "0") {
        $.ajax({
            url: GetRootPath + "trnExportStufingWO/GetDetailsByContainerID?ContainerID=" + ContainerID,
            type: "GET",
            datatype: "text",
            success: function (data) {
                if (data != null && data != "") {
                    $("#Size").val(data.split('|')[0]);
                    $("#Type").val(data.split('|')[1]);
                }
            }
        });
    }
}
function ContainerValidation() {
    var isvalid = true;
    var MErrorMsg = "";
    var ID = $('#hdntrnExportStuffingWOID').val();
    $.ajax({
        url: GetRootPath + "trnExportStufingWO/validateModelOfContainer?ID=" + ID,
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
                        $("#" + ErrorFields[Q]).text('');
                        $("#" + ErrorFields[Q]).addClass("redborder");
                    }
                }
                if (Errormsg != "") {
                    MErrorMsg += Errormsg;
                }
            }
        }
    });

    if (!isvalid) {
        TosterAlert("error", MErrorMsg, "Required!");
    }
    else {
        $.ajax({
            url: GetRootPath + "trnExportStufingWO/AddContainer",
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
                    FillContainerData();
                }
            }
        });
    }
    return isvalid;

}
function ExportStuffingValidation() {
    var isvalid = true;
    var MErrormsg = "";
    $("#IsFinished").val(true);    
    var trnExportStuffingWOID = $("#trnExportStuffingWOID").val();
    var hdnConsolerID = $("#hdnConsolerID").val();
    var IsLCL = false;
    if (isvalid) {
        $.ajax({
            url: GetRootPath + "trnExportStufingWO/IsLCL/" + trnExportStuffingWOID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {                
                if (data != "") {
                    IsLCL = data;
                }
            }
        });
    }
    if (doaction.ToLowercase != "add" && parseInt(trnExportStuffingWOID) > 0 && parseInt(hdnConsolerID) == 0 && (IsLCL == "true" || IsLCL == true || IsLCL=="True")) {

        if (confirm('You are Sure you want save stuffing Work Order without Consoler.')) {
            isvalid = true;
        } else {
            return false;
        }
    }
    if (isvalid) {
        $.ajax({
            url: GetRootPath + "trnExportStufingWO/validateModel",
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
    }
    
    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    else {

    }
    return isvalid
}
function BOENoValidition() {
    var isvalid = true;
    var MErrorMsg = "";
    $.ajax({
        url: GetRootPath + "trnExportStufingWO/validateModelOfSBDetail",
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
                        $("#" + ErrorFields[Q]).text('');
                        $("#" + ErrorFields[Q]).addClass("redborder");
                    }
                }
                if (Errormsg != "") {
                    MErrorMsg += Errormsg;
                }
            }
        }
    });
    if (!isvalid) {
        TosterAlert("error", MErrorMsg, "Required!");
    }
    else {
        $.ajax({
            url: GetRootPath + "trnExportStufingWO/AddSBDetails",
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
                    fillSBdatatable();
                }
            }
        });
    }
}
function fillSBdatatable() {
    $.ajax({
        url: GetRootPath + "trnExportStufingWO/FillGrid/",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            ClearSBData();
            $("#tblSBDetails").html(data);
        }
    });
}
function FillContainerData() {
    $.ajax({
        url: GetRootPath + "trnExportStufingWO/FillContainerGrid/",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            ClearContainerData();
            $("#tblConatinerDetail").html(data);
        }
    });
}
function ClearSBData() {
    $("#BOENo").val('');
    $("#hdnBOENo").val('0')
    $("#BLNo").val('');
    $("#hdnBLNo").val('0');
    $("#WoPkg").val('0');
    $("#WoWt").val('0');
    $("#WoPieces").val('0');
    $("#FOB").val('');
    $("#POD").val('');
    $("#BOEDate").text('');
    $("#Bulk").text('');
    $("#Customer").text('');
    $("#Forwarder").text('');
    $("#Exporter").text('');
    $("#Cargo").text('');
    $("#Cargotype").text('');
    $("#BillCommodity").text('');
    $("#Class").text('');
    $("#UN").text('');
    $("#Temp").text('');
    $("#DecPkg").text('');
    $("#DecWt").text('');
    $("#DecPieces").text('');
    $("#SaveSBD").text("ADD");
    $("#trnExportStufingWOSBDetailsID").val('0');
    $("#totalpkg").text("");
    $("#totalWeight").text("");
    $("#totalPiece").text("");
    $("#hdnActualpkgs").val("");
    $("#hdnActualWeight").val("");
    $("#hdnActualPiece").val("");
    $(".QTYLABEL").removeClass("badge bg-light-blue");
}
function ClearContainerData() {
    $("#ContainerNo").val('');
    $("#Size").val('');
    $("#Type").val('');
    $("#ContWOPakg").val('0');
    $("#ContWOWt").val('0');
    $("#ContWOPieces").val('0');
    $("#CLPStatus").val('');
    $("#StuffModeForContainer").val("DIRECT");
    $("#SaveCont").text("ADD");
    $("#trnExportStufingWOContainerDetailsID").val('0');    
}
function deleteESSBDetails(ID) {
    if (ID != "" && ID != null && ID != "0" && ID != undefined) {
        $.ajax({
            url: GetRootPath + "trnExportStufingWO/DeleteSBDetails?ID=" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                fillSBdatatable();
                TosterAlert('success', 'BOENo Deleted Successfully! ', 'success!');
            }
        });
    }
}
function deleteESContDetails(ID) {
    if (ID != "" && ID != null && ID != "0" && ID != undefined) {
        $.ajax({
            url: GetRootPath + "trnExportStufingWO/DeleteContainerDetails?ID=" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                FillContainerData();
                TosterAlert('success', 'Container Deleted Successfully! ', 'success!');
            }
        });
    }
}
function EditESSBdetails(ID) {
    $("#lblSBDeatil").removeClass('hide');
    $("#trnExportStufingWOSBDetailsID").val($("#trnExportStufingWOSBDetailsID_" + ID).text());
    $("#BOENo").val($("#BOENo_" + ID).text());
    if ($("#BOENo").val() == '') {
        $("#hdnBOENo").val('0');
    }
    else {
        $("#hdnBOENo").val($("#hdnBOENo_" + ID).text());
    }

    $("#BLNo").val($("#BLNo_" + ID).text());
    if ($("#BLNo").val() == '') {
        $("#hdnBLNo").val('0');
    }
    else {
        $("#hdnBLNo").val($("#hdnBLNo_" + ID).text());
    }

    $("#WoPkg").val($("#NOOFPKGS_" + ID).text());
    $("#WoWt").val($("#WEIGHT_" + ID).text());
    $("#WoPieces").val($("#NOOFPIECES_" + ID).text());
    $("#FOB").val($("#FOB_" + ID).text());
    $("#POD").val($("#POD_" + ID).text());
    $("#BOEDate").text($("#BOEDate_" + ID).text());
    $("#Bulk").text($("#BULKSTATUS_" + ID).text());
    $("#IsBulk").val($("#BULKSTATUS_" + ID).text());
    $("#Customer").text($("#SubCHA_" + ID).text());
    $("#Forwarder").text($("#Forwarder_" + ID).text());
    $("#Exporter").text($("#IMPORTERNAME_" + ID).text());
    $("#Cargo").text($("#CARGODESC_" + ID).text());
    $("#Cargotype").text($("#CargoType_" + ID).text());
    $("#BillCommodity").text($("#COMMODITYNAME_" + ID).text());
    $("#Class").text($("#IMO_" + ID).text());
    $("#UN").text($("#UN_" + ID).text());
    $("#Temp").text($("#Temp_" + ID).text());
    $("#DecPkg").text($("#Decpkg_" + ID).text());
    $("#DecWt").text($("#DecWt_" + ID).text());

    $("#DecPieces").text($("#Decpieces_" + ID).text());
    $("#TotalDecPkg").val($("#Decpkg_" + ID).text());
    $("#TotalDecWt").val($("#DecWt_" + ID).text());
    $("#TotalDecPieces").val($("#Decpieces_" + ID).text());

    $("#hdnActualpkgs").val($("#NOOFPKGS_" + ID).text());
    $("#hdnActualWeight").val($("#WEIGHT_" + ID).text());
    $("#hdnActualPiece").val($("#NOOFPIECES_" + ID).text());
    $("#SaveSBD").text("Update");

    EditGETBOENoDetail();
}

function EditESContdetails(ID) {
    $("#trnExportStufingWOContainerDetailsID").val($("#trnESWOGWContDetailsID_" + ID).text());
    $("#ContainerNo").val($("#ContainerNo_" + ID).text());
    $("#Size").val($("#Size_" + ID).text());
    $("#Type").val($("#Type_" + ID).text());
    $("#StuffModeForContainer").val($("#StuffMode_" + ID).text());
    $("#ContWOPakg").val($("#NoOfPkg_" + ID).text());
    $("#ContWOWt").val($("#NoOfWt_" + ID).text());
    $("#ContWOPieces").val($("#NoOfPieces_" + ID).text());
    $("#hdnContainerID").val($("#hdnContainerNo_" + ID).text());
    $("#SaveCont").text("Update");
    $("#ActualNoOfPackageForContainer").val($("#NoOfPkg_" + ID).text());
    $("#ActualNoOfPiecesForContainer").val($("#NoOfPieces_" + ID).text());
    $("#ActualWeightForContainer").val($("#NoOfWt_" + ID).text());
}

function DeleteReason(ID) {
    if (ID != null && ID != "" && ID != undefined) {
        $("#trnExportStuffingWOID").val(ID);
        $("#DeleteReason").val('');
    }
}
function DeleteESWorkOrder() {
    var DeleteReason = $("#DeleteReason").val();
    var IsValid = true;
    $.ajax({
        url: GetRootPath + "trnExportStufingWO/VaildDeteleModel?DeleteReason=" + DeleteReason,
        type: "Post",
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
            else {
                var ID = $("#trnExportStuffingWOID").val();
                $.ajax({
                    url: GetRootPath + "trnExportStufingWO/delete/" + ID + "?Reason=" + DeleteReason + "",
                    type: "GET",
                    dataType: "text",
                    async: false,
                    success: function (data) {
                        $('#DeleteESWorkOrder').modal('hide');
                        location.reload();
                    }
                });
            }
        }
    });
}
function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});
function EditGETBOENoDetail() {
    debugger;
    var WoSBID = $("#hdnBOENo").val();
    var WoINID = $("#hdnBLNo").val();
    var WoDLID = "0";
    if (WoSBID != "" && WoSBID != null && WoSBID != undefined && WoSBID != "0") {
        WoDLID = WoSBID;
    }
    if (WoINID != "" && WoINID != null && WoINID != undefined && WoINID != "0") {
        WoDLID = WoINID;
    }
    var trnExportStuffingWOID = $("#trnExportStuffingWOID").val();
    if (WoDLID != "" && WoDLID != null && WoDLID != undefined && WoDLID != "0") {
        $.ajax({
            url: GetRootPath + "trnExportStufingWO/GetBOEBLDATA/" + WoDLID + "?trnExportStuffingWOID=" + trnExportStuffingWOID,
            type: "GET",
            datatype: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#totalpkg").text("Total : " + ((parseFloat($("#hdnActualpkgs").val()) + parseFloat(data.split('|')[19])).toFixed(2)) + "/" + $("#DecPkg").text());
                    $("#totalPiece").text("Total : " + ((parseFloat($("#hdnActualPiece").val()) + parseFloat(data.split('|')[20])).toFixed(2)) + "/" + $("#DecPieces").text());
                    $("#totalWeight").text("Total : " + ((parseFloat($("#hdnActualWeight").val()) + parseFloat(data.split('|')[21])).toFixed(2)) + "/" + $("#DecWt").text());
                    $("#hdntotalpkgs").val((parseFloat($("#hdnActualpkgs").val()) + parseFloat(data.split('|')[19])));
                    $("#hdntotalPiece").val((parseFloat($("#hdnActualPiece").val()) + parseFloat(data.split('|')[20])));
                    $("#hdntotalWeight").val((parseFloat($("#hdnActualWeight").val()) + parseFloat(data.split('|')[21])));
                    $(".QTYLABEL").addClass("badge bg-light-blue");
                }
                else {

                    $("#totalpkg").text("");
                    $("#totalWeight").text("");
                    $("#totalPiece").text("");
                    $(".QTYLABEL").removeClass("badge bg-light-blue");
                }
            }
        });
    }
    else {

        $("#totalpkg").text("");
        $("#totalWeight").text("");
        $("#totalPiece").text("");
        $(".QTYLABEL").removeClass("badge bg-light-blue");
    }
}
function GetReExportDetails(ID) {
    $.ajax({
        url: GetRootPath + "trnExportStufingWO/GetReExportDetails/" + ID,
        type: "GET",
        success: function (data) {
            if (data != null && data != "") {
                $("#tbReExportDetails").html(data);
            }
        }
    });
}
function GetExportContainerDetails(ID) {    
    $.ajax({
        url: GetRootPath + "trnExportStufingWO/GetExportContainerDetails/" + ID,
        type: "GET",
        success: function (data) {
            if (data != null && data != "") {
                $("#tblContdetail").html(data);
            }
        }
    });
}