$(document).ready(function () {    
    Autocompletebox("ConsolerName", "ConsolerID", "trnExportDocumentDeclaration", "GetConsoler", "");
    Autocompletebox("CHAName", "CHAID", "trnExportDocumentDeclaration", "GetCHA", "");
    Autocompletebox("ForwarderName", "ForwarderID", "trnExportDocumentDeclaration", "GetForwarder", "");    
    Autocompletebox("Exporter", "ExporterID", "trnExportDocumentDeclaration", "GetIMPEXP", "GetExporterAddress");
    Autocompletebox("ToLocation", "ToLocationID", "trnExportDocumentDeclaration", "GetLocationfrom");
    Autocompletebox("txtHoldAgency", "txtHoldAgencyID", "trnExportDocumentDeclaration", "GetHoldAgency");
    Autocompletebox("NatureOfCargo", "NatureOfCargoID", "trnExportDocumentDeclaration", "GetNatureofCargo","CargoTypeChange");

    Autocompletebox("BillCommodity", "BillCommodityID", "trnExportDocumentDeclaration", "GetBillCommodity");
    Autocompletebox("GroupCommodity", "GroupCommodityID", "trnExportDocumentDeclaration", "GetGroupCommodity");
    Autocompletebox("SubCommodity", "SubCommodityID", "trnExportDocumentDeclaration", "GetSubCommodity");
    Autocompletebox("PackageType", "PackageTypeID", "trnExportDocumentDeclaration", "GetPackageType");    
    $(".ui-autocomplete").attr("style", "z-index: 10000;");
    filldatatable();
});
$("#BULKSTATUS").change(function (event) {
    if ($("#BULKSTATUS").val() == "BULK") {
        $("#DocDecPackage").prop("readonly", true);
        $("#DocDecPieces").prop("readonly", true);
        $("#DocDecPackage").val("0");
        $("#DocDecPieces").val("0");
    }
    else {
        $("#DocDecPackage").prop("readonly", false);
        $("#DocDecPieces").prop("readonly", false);
        $("#DocDecPackage").val("0");
        $("#DocDecPieces").val("0");
    }
    $("#DocDecWeight").val("0");
});
function ExportDocumentValidation() {
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnExportDocumentDeclaration/validateModel",
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
                $("#IsFinished").val(false);
                if (Errormsg != "") {
                    TosterAlert("error", Errormsg, "Required!");
                }
            }
        }
    });
    return isvalid;
}
function ExportDocumentLotDetailValidation() {
    var isvalid = true;
    var MErrormsg = "";
    $.ajax({
        url: GetRootPath + "trnExportDocumentDeclaration/validateSubModel",
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

    var BULKSTATUS = $("#BULKSTATUS").val()

    if (BULKSTATUS == "NONBULK") {

        var DocDecPackage = $("#DocDecPackage").val()
        var DocDecPieces = $("#DocDecPieces").val()

        if (DocDecPackage == "0" || DocDecPackage == "") {
            isvalid = false;
            MErrormsg += "Enter Package <br />";
            $("#DocDecPackage").addClass("redborder")
        } else {
            $("#DocDecPackage").removeClass("redborder")
        }
        if (DocDecPieces == "0" || DocDecPieces == "") {
            isvalid = false;
            MErrormsg += "Enter  Pieces <br />";
            $("#DocDecPieces").addClass("redborder")
        } else {
            $("#DocDecPieces").removeClass("redborder")
        }

    }

    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }
    else {
        var CargoType = $("#NatureOfCargo").val();
        var BULKSTATUS = $("#BULKSTATUS").val();
        var ExporterAddress = $("#ExporterAddress").val();
        var trnExportDocumentDeclarationID = $("#trnExportDocumentDeclarationID").val();
        $.ajax({
            url: GetRootPath + "trnExportDocumentDeclaration/AddExportDocumentLotDetails?CargoType=" + CargoType + "&BULKSTATUS=" + BULKSTATUS + "&ExporterAddress=" + ExporterAddress + "&trnExportDocumentDeclarationID=" + trnExportDocumentDeclarationID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != "") {
                    var msgtype = data.split('|')[0];
                    var msg = data.split('|')[1];
                    var msgtxt = data.split('|')[2];
                    var ID = data.split('|')[3];
                    TosterAlert(msgtype, msg, msgtxt);
                    $("#IsFinished").val(false);
                    filldatatable();
                    ClearExportDocumentdetails();
                }
            }
        });
    }
    return isvalid;
}
function filldatatable() {
    debugger
    var ID = $("#trnExportDocumentDeclarationID").val();
    if (ID == undefined) {
        ID = 0;
    }

    var IsView = $("#doaction").val();

    if (IsView.toUpperCase() == "VIEW") {
        IsView = true;
    }
    else {
        IsView = false;
    }
    $.ajax({
        url: GetRootPath + "trnExportDocumentDeclaration/FillGrid?ID=" + ID + "&IsView=" + IsView,
        type: "GET",
        dataType: "text",
        success: function (data) {
            debugger;
            $("#tblLotDetails").html(data);
        }
    });
}
function ClearExportDocumentdetails() {
    $("#BOENo").val("");
    $("#BOEDate").val("");
    $("#BLNo").val("");
    $("#BLDate").val("");   
    $("#NatureOfCargo").val("");    
    $("#NatureOfCargoID").val("0");
    $("#BULKSTATUS").val("");
    $("#Exporter").val("");
    $("#ExporterID").val("");
    $("#ExporterAddress").val("");
    $("#Consignee").val("");
    $("#ConsigneeAddress").val("");
    $("#ToLocation").val("");
    $("#FOB").val("");
    $("#MARKSANDNOS").val("");
    $("#Class").val("");
    $("#UN").val("");
    $("#TEMP").val("");
    $("#TEMP").prop("readonly", false);
    $("#Class").prop("readonly", false);
    $("#UN").prop("readonly", false);
    $("#DocBalPackage").val("0");
    $("#DocBalWeight").val("0");
    $("#DocBalPieces").val("0");
    $("#DocDecPackage").val("0");
    $("#DocDecWeight").val("0");
    $("#DocDecPieces").val("0");
    $("#BillingParty").val("");    
    $("#BillingPartyID").val("0");    
    $("#GroupCommodity").val("");
    $("#GroupCommodityID").val("0");
    $("#BillCommodity").val("");
    $("#BillCommodityID").val("0");
    $("#CargoDesc").val("");
    $("#SubCommodity").val("");    
    $("#SubCommodityID").val("0");
    $("#PackageType").val("");
    $("#PackageTypeID").val("0");
    $("#ICEGATERefNo").val("");
    $("#trnExportDocumentLotDetailsID").val("0");
    CargoTypeChange();
}
function GetExporterAddress() {
    var ID = $("#ExporterID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnExportDocumentDeclaration/GetExporterAddress/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                $("#ExporterAddress").val("");
                if (data != "" && data != null) {
                    $("#ExporterAddress").val(data);
                }
                else {
                    $("#ExporterAddress").val("");
                }
            }
        })
    }
    else {
        $("#ExporterAddress").val("");
    }
}
function EditLotdetails(ID) {
    $("#BOENo").val($("#SBNo_" + ID).text());
    $("#BOEDate").val($("#SBDate_" + ID).text());
    $("#BLNo").val($("#INVNo_" + ID).text());
    $("#BLDate").val($("#INVDate_" + ID).text());
    $("#NatureOfCargo").val($("#CargoType_" + ID).text());    
    $("#NatureOfCargoID").val($("#CargoTypeID_" + ID).text());
    $("#BULKSTATUS").val($("#BULKSTATUS_" + ID).text());    
    $("#Exporter").val($("#ExporterNAME_" + ID).text());
    $("#ExporterID").val($("#ExporterID_" + ID).text());
    $("#ExporterAddress").val($("#ExporterADDRESS_" + ID).text());
    $("#Consignee").val($("#ConsigneeNAME_" + ID).text());
    $("#ConsigneeAddress").val($("#ConsigneeADDRESS_" + ID).text());
    $("#ToLocationID").val($("#ToLocationID_" + ID).text());
    $("#ToLocation").val($("#ToLocationName_" + ID).text());
    $("#FOB").val($("#FOB_" + ID).text());
    $("#MARKSANDNOS").val($("#MARKSANDNOS_" + ID).text());
    $("#Class").val($("#Class_" + ID).text());
    $("#UN").val($("#UN_" + ID).text());
    $("#TEMP").val($("#Temp_" + ID).text());
    $("#DocBalPackage").val($("#BalanceNOOFPKGS_" + ID).text());
    $("#hdnDocBalPackage").val(parseInt($("#BalanceNOOFPKGS_" + ID).text()));
    $("#DocBalWeight").val($("#BalanceWEIGHT_" + ID).text());
    $("#hdnDocBalWeight").val($("#BalanceWEIGHT_" + ID).text());
    $("#DocBalPieces").val($("#BalanceNOOFPIECES_" + ID).text());
    $("#hdnDocBalPieces").val($("#BalanceNOOFPIECES_" + ID).text());
    $("#DocDecPackage").val($("#NOOFPKGS_" + ID).text());
    $("#DocDecWeight").val($("#WEIGHT_" + ID).text());
    $("#DocDecPieces").val($("#NOOFPIECES_" + ID).text());   
    $("#GroupCommodity").val($("#GroupCommodity_" + ID).text());
    $("#GroupCommodityID").val($("#GroupCommodityID_" + ID).text());
    $("#BillCommodity").val($("#BillCommodity_" + ID).text());
    $("#BillCommodityID").val($("#BillCommodityID_" + ID).text());
    $("#CargoDesc").val($("#CargoDesc_" + ID).text());
    $("#SubCommodity").val($("#SubCommodity_" + ID).text());
    $("#SubCommodityID").val($("#SubCommodityID_" + ID).text());
    $("#PackageType").val($("#PackageType_" + ID).text());          
    $("#PackageTypeID").val($("#PackageTypeID_" + ID).text());
    $("#ICEGATERefNo").val($("#ICEGATERefNo_" + ID).text());
    $("#trnExportDocumentLotDetailsID").val(ID);    
    $("#trnExportDocumentDeclarationID").val($("#trnExportDocumentDeclarationID_" + ID).text());
    $("#CargoName").val($("#CargoName_" + ID).text());    
    CargoTypeChange();
    if ($("#BULKSTATUS").val() == "BULK") {
        $("#DocDecPackage").prop("readonly", true);
        $("#DocDecPieces").prop("readonly", true);
        $("#DocDecPackage").val("0");
        $("#DocDecPieces").val("0");
    }
    else {
        $("#DocDecPackage").prop("readonly", false);
        $("#DocDecPieces").prop("readonly", false);        
    }
}
function ChangeStatus(status, trnExportDocumentDeclarationID, StatusRemarks, HoldAgency, HoldAgencyID) {
    if (status == "H") {
        $("#ddlStatus option[value='P']").remove();
        $("#ddlStatus option[value='D']").remove();
        $("#ddlStatus option[value='C']").remove();
    }



    if (trnExportDocumentDeclarationID != null && trnExportDocumentDeclarationID != "" && trnExportDocumentDeclarationID != undefined && trnExportDocumentDeclarationID != "0") {
        $("#ChangeStatus").modal("show");
        $("#ddlStatus").val(status);
        $("#txttrnExportDocumentDeclarationID").val(trnExportDocumentDeclarationID);
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
            ;
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
function DeleteExportDocumentDetails(ID) {
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "trnExportDocumentDeclaration/DeleteExportDocumentDetails/?ID=" + ID + "&trnExportDocumentDeclarationID=" + $("#trnExportDocumentDeclarationID").val(),
            type: "Post",
            dataType: "text",
            success: function (data) {
                filldatatable();
                TosterAlert("success", " Export Lot Detail deleted Successfully! ", "success!");
            }
        });
    }
}
function CargoTypeChange() {
    var CargoCode = "";

    if ($("#NatureOfCargoID").val() != undefined && $("#NatureOfCargoID").val() != '') {


        $.ajax({
            url: GetRootPath + "trnExportDocumentDeclaration/GetCargoCode/" + $("#NatureOfCargoID").val(),
            type: "GET",
            dataType: "text",
            async: false,
            success: function (data) {
                CargoCode = data;
            }
        })
        if (CargoCode == HAZCode) {
            $("#TEMP").prop("readonly", true);
            $("#TEMP").val("0");
            $("#Class").prop("readonly", false);
            $("#UN").prop("readonly", false);
        }
        else if (CargoCode == ReeferCode) {
            $("#Class").prop("readonly", true);
            $("#UN").prop("readonly", true);
            $("#Class").val("0");
            $("#UN").val("0");
            $("#TEMP").prop("readonly", false);
        }
        else if (CargoCode == GeneralCode || CargoCode == ODCCode) {
            $("#Class").prop("readonly", true);
            $("#UN").prop("readonly", true);
            $("#Class").val("0");
            $("#UN").val("0");
            $("#TEMP").prop("readonly", true);
            $("#TEMP").val("0");
        }
        else {
            $("#Class").prop("readonly", false);
            $("#UN").prop("readonly", false);
            $("#TEMP").prop("readonly", false);
        }
    }
}
function RedirecrBoeItem(trnDocumentLotDetailsID, ShiipingBillNo, trnExportDocumentDeclarationLotDetailsID, trnExportDocumentDeclarationID, Type, SpaceCertificateID, LOTNO, IsView) {
    var url = GetRootPath + "trnexportDocumentDeclarationBOEItems/Index/" + trnDocumentLotDetailsID + "?&ShiipingBillNo=" + ShiipingBillNo + "&trnExportDocumentDeclarationLotDetailsID=" + trnExportDocumentDeclarationLotDetailsID + "&trnExportDocumentDeclarationID=" + trnExportDocumentDeclarationID + "&type=" + Type + "&SpaceCertificateID=" + SpaceCertificateID + "&LOTNO=" + LOTNO + "&IsView=" + IsView;
    window.open(url, '_blank');
}

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function GetExportLotDetails(trnExportDocumentDeclarationID) {
    debugger;
    if (trnExportDocumentDeclarationID != null && trnExportDocumentDeclarationID != undefined && trnExportDocumentDeclarationID != "" && trnExportDocumentDeclarationID != "0") {
        $.ajax({
            url: GetRootPath + "trnExportDocumentDeclaration/GetExportLotDetails?ID=" + trnExportDocumentDeclarationID,
            type: "POST",
            success: function (data) {
                debugger;
                if (data != null && data != undefined) {
                    $("#tbllotdetail").html(data);
                }
                else {
                    $("#tbllotdetail").html("");
                }
            }
        });
    }
}

function GetReExportDetails(ID) {
    $.ajax({
        url: GetRootPath + "trnExportDocumentDeclaration/GetReExportDetails/" + ID,
        type: "GET",
        success: function (data) {
            if (data != null && data != "") {
                $("#tbReExportDetails").html(data);
            }
        }
    });
}