$(document).ready(function () {
    Autocompletebox("InBOENo", "trnDocumentLotDetailsID", "trnExBondDocumentEntry", "FillInBOENo", "GetDataByLotID");
    Autocompletebox("txtCHA", "txtCHAID", "trnExBondDocumentEntry", "GetCHA");
    Autocompletebox("txtForwarder", "txtForwarderID", "trnExBondDocumentEntry", "GetForwarder");
    Autocompletebox("txtImporter", "txtImporterID", "trnExBondDocumentEntry", "GetIMPORTER",);
    Autocompletebox("txtConsoler", "txtConsolerID", "trnExBondDocumentEntry", "GetCONSOLER");
    Autocompletebox("Equipment", "EquipmentID", "trnExBondDocumentEntry", "GetEquipment");    
    var trnExBondDocumentEntryID = $("#trnExBondDocumentEntryID").val();
    var GuiID = $("#GuiID").val()
    Autocompletebox("ContainerNo", "trnDocumentContainerID", "trnExBondDocumentEntry", "GetLoadedConatiner/" + $("#trnDocumentLotDetailsID").val() + "?trnExBondDocumentEntryID=" + trnExBondDocumentEntryID + "&GuiID=" + GuiID + "", "GetLoadedConatinerDetails");
    Autocompletebox("SBNo", "trnExportDocumentDeclarationLotDetailsID", "trnExBondDocumentEntry", "GetSBNo/" + trnExBondDocumentEntryID, "GetSBDetails");

    filldatatable();
    SetVisiblityForSBData();

    doaction = $("#doaction").val();
    
    if (doaction == "edit") {
        GetDataByLotID();
    }
    $(".showonlyinedit").hide();
    $(".ui-autocomplete").attr("style", "z-index: 10000;");
    FillLoadedContainerGrid();
});
function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});
function GetDataByLotID() {
    var ID = $("#trnDocumentLotDetailsID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnExBondDocumentEntry/GetDataByLotID/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#InBOEDate").val(data.split("|")[0]);
                    $("#IGMNO").val(data.split("|")[1]);
                    $("#ItemNO").val(data.split("|")[2]);
                    $("#CPStatus").val(data.split("|")[3]);
                    $("#CPORBondNo").val(data.split("|")[4]);
                    $("#CPORBondExpiryDate").val(data.split("|")[5]);
                    $("#NocValidDate").val(data.split("|")[6]);
                    $("#Status").val(data.split("|")[7]);
                    $("#CargoType").val(data.split("|")[8]);
                    $("#CargoTypeID").val(data.split("|")[9]);
                    $("#InBondConsoler").val(data.split("|")[10]);
                    $("#InBondConsolerID").val(data.split("|")[11]);
                    $("#CargoDescription").val(data.split("|")[12]);
                    $("#InBondBOEPackages").val(data.split("|")[13]);
                    $("#InBondBOEPieces").val(data.split("|")[14]);
                    $("#InBondBOEWeight").val(data.split("|")[15]);
                    $("#InBondCHA").val(data.split("|")[16]);
                    $("#InBondCHAID").val(data.split("|")[17]);
                    $("#InBondForwarder").val(data.split("|")[18]);
                    $("#InBondForwarderID").val(data.split("|")[19]);
                    $("#InBondImporter").val(data.split("|")[20]);
                    $("#InBondImporterID").val(data.split("|")[21]);
                    $("#NocValidDate").val(data.split("|")[22]);
                    $("#NocValidDate").text(" : "+data.split("|")[22]);
                    $("#BulkStatus").val(data.split("|")[23]);
                    $("#hdnBULKSTATUS").val(data.split("|")[23]);
                    
                    if (data.split("|")[24] == "LOADED") {
                        $("#txtReleasedPackages").attr("readonly", true);
                        $("#txtReleasedPieces").attr("readonly", true);
                        $("#txtReleasedWeight").attr("readonly", true);
                        $("#txtReleasedPackages").val('0.00');
                        $("#txtReleasedPieces").val('0.00');
                        $("#txtReleasedWeight").val('0.00');
                    }

                }
                else {
                    $("#InBOEDate").val("");
                    $("#IGMNO").val("");
                    $("#ItemNO").val("");
                    $("#CPStatus").val("");
                    $("#CPORBondNo").val("");
                    $("#CPORBondExpiryDate").val("");
                    $("#NocValidDate").val("");
                    $("#Status").val("");
                    $("#CargoType").val("");
                    $("#InBondConsoler").val("");
                    $("#InBondConsolerID").val("0");
                    $("#CargoDescription").val("");
                    $("#InBondBOEPackages").val("0");
                    $("#InBondBOEPieces").val("0");
                    $("#InBondBOEWeight").val("0");
                    $("#InBondCHA").val("");
                    $("#InBondCHAID").val("0");
                    $("#InBondForwarder").val("");
                    $("#InBondForwarderID").val("0");
                    $("#InBondImporter").val("");
                    $("#InBondImporterID").val("0");
                    $("#BulkStatus").val("");
                    $("#hdnBULKSTATUS").val("");
                    $("#NocValidDate").val("");
                }
            }
        });
    }
    $("#InBOEDate").val("");
    $("#IGMNO").val("");
    $("#ItemNO").val("");
    $("#CPStatus").val("");
    $("#CPORBondNo").val("");
    $("#CPORBondExpiryDate").val("");
    $("#NocValidDate").val("");
    $("#Status").val("");
    $("#CargoType").val("");
    $("#InBondConsoler").val("");
    $("#InBondConsolerID").val("0");
    $("#CargoDescription").val("");
    $("#InBondBOEPackages").val("0");
    $("#InBondBOEPieces").val("0");
    $("#InBondBOEWeight").val("0");
    $("#InBondCHA").val("");
    $("#InBondCHAID").val("0");
    $("#InBondForwarder").val("");
    $("#InBondForwarderID").val("0");
    $("#InBondImporter").val("");
    $("#InBondImporterID").val("0");
    $("#BulkStatus").val("");
    $("#hdnBULKSTATUS").val("");
    $("#NocValidDate").val("");
}
function validateModel() {
    var isvalid = true;
    var MErrormsg = "";

    $.ajax({
        url: GetRootPath + "trnExBondDocumentEntry/validateModel",
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
    return isvalid;
}
function validateSubModel() {
    var isvalid = true;
    var MErrormsg = "";

    $.ajax({
        url: GetRootPath + "trnExBondDocumentEntry/validateSubModel",
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
            url: GetRootPath + "trnExBondDocumentEntry/AddtrnExBondDocumentEntryDetails",
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
                    filldatatable();
                    ClearDetails();
                    location.reload();
                }
            }
        });
    }
    return isvalid;
}
function ClearDetails() {
    $("#DDLReleasedType").val("EX-BOND");
    $("#txtExBondRefNo").val("");
    $("#txtDocumentDateTime").val("");
    $("#txtEXBOEOrSBNo").val("");
    $("#txtEXBOEOrSBDate").val("");
    $("#txtCHA").val("");
    $("#txtCHAID").val("0");
    $("#txtForwarder").val("");
    $("#txtForwarderID").val("0");
    $("#txtImporter").val("");
    $("#txtImporterID").val("0");
    $("#txtConsoler").val("");
    $("#txtConsolerID").val("0");
    $("#txtSBOrInvoiceNo").val("");
    $("#txtSBOrInvoiceDate").val("");
    $("#txtReleasedPackages").val("");
    $("#txtReleasedPieces").val("");
    $("#txtReleasedWeight").val("");
    $("#txtReExportReleasedArea").val("0");
    $("#txtAssessableValue").val("");
    $("#txtDutyvalue").val("");
    $("#txtDutyChallanNo").val("");
    $("#txtDutyChallanDate").val("");
    $("#txtOOCNo").val("");
    $("#txtOOCDate").val("");
    $("#txtRemarks").val("");
    $("#Equipment").val("");
    $("#EquipmentID").val("0");
    $("#trnExBondDocumentEntryDetailsID").val("0");
    $("#btnContDetails").text("Add");
    SetVisiblityForSBData();
    //location.reload();
    GetAllBal();
    ClearLoadedContainerDetails();
    $("#txtReleasedPackages").attr("readonly", false);
    $("#txtReleasedPieces").attr("readonly", false);
    $("#txtReleasedWeight").attr("readonly", false);
    $("#Exporter").val("");
    $("#ExporterID").val("0");
    $("#DeclaredPackage").val("0");
    $("#DeclaredPices").val("0");
    $("#DeclaredWeight").val("0");
    $("#SBNo").val("");
    $("#SBDate").val("");
    $("#trnExportDocumentDeclarationLotDetailsID").val("0");
}
function GetAllBal() {
    $.ajax({
        url: GetRootPath + "trnExBondDocumentEntry/GetAllBal",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {            
            if (data != "" && data != null) {                
                $("#txtBalancePackages").val(data.split('|')[0].trim());
                $("#txtBalancePieces").val(data.split('|')[1].trim());
                $("#txtBalanceWeight").val(data.split('|')[2].trim());
                $("#BalanceWeight").val(data.split('|')[2].trim());
                $("#txtBalanceArea").val(data.split('|')[3].trim());
                $("#BalanceAssessableValue").val(data.split('|')[4].trim());
                $("#BalanceDutyValue").val(data.split('|')[5].trim());
            }
            else {
                $("#txtBalancePackages").val("0");
                $("#txtBalancePieces").val("0");
                $("#txtBalanceWeight").val("0");
                $("#BalanceWeight").val("0");
                $("#txtBalanceArea").val("0");
                $("#BalanceAssessableValue").val("0");
                $("#BalanceDutyValue").val("0");
            }
        }
    });
}
function filldatatable() {
    $.ajax({
        url: GetRootPath + "trnExBondDocumentEntry/FillGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != "" && data != null) {                
                $("#tblDetails").html(data);
                $("#txtBalancePackages").val($("#hdnPkg").val());
                $("#txtBalancePieces").val($("#hdnPic").val());
                $("#txtBalanceWeight").val($("#hdnWT").val());
                $("#BalanceWeight").val($("#hdnWT").val());
                $("#txtBalanceArea").val($("#hdnArea").val());
                $("#BalanceAssessableValue").val($("#hdnAV").val());
                $("#BalanceDutyValue").val($("#hdnDV").val());
            }
            else {
                $("#tblDetails").html("");
            }
        }
    });
}
function EditExBondDocumentEntryDetails(ID) {
        
    $("#DDLReleasedType").val($("#ReleasedType_" + ID).text());
    SetVisiblityForSBData();
    $("#txtExBondRefNo").val($("#ExBondRefNo_" + ID).text());
    $("#txtDocumentDateTime").val($("#DocumentDateTime_" + ID).text());
    if ($("#ReleasedType_" + ID).text().toUpperCase().trim() == "RE-EXPORT") {
        $("#SBNo").val($("#EXBOEOrSBNo_" + ID).text());
        $("#SBDate").val($("#EXBOEOrSBDate_" + ID).text());
        $("#trnExportDocumentDeclarationLotDetailsID").val($("#trnExportDocumentDeclarationLotDetailsID_" + ID).text());
    }
    else {
        $("#txtEXBOEOrSBNo").val($("#EXBOEOrSBNo_" + ID).text());
        $("#txtEXBOEOrSBDate").val($("#EXBOEOrSBDate_" + ID).text());
    }
    $("#txtCHA").val($("#CHA_" + ID).text());
    $("#txtCHAID").val($("#CHAID_" + ID).text());
    $("#txtForwarder").val($("#Forwarder_" + ID).text());
    $("#txtForwarderID").val($("#ForwarderID_" + ID).text());
    $("#txtImporter").val($("#Importer_" + ID).text());
    $("#txtImporterID").val($("#ImporterID_" + ID).text());
    $("#txtConsoler").val($("#Consoler_" + ID).text());
    $("#txtConsolerID").val($("#ConsolerID_" + ID).text());
    $("#txtSBOrInvoiceNo").val($("#SBOrInvoiceNo_" + ID).text());
    $("#txtSBOrInvoiceDate").val($("#SBOrInvoiceDate_" + ID).text());
    $("#txtReleasedPackages").val($("#ReleasedPackages_" + ID).text());
    $("#txtReleasedPieces").val($("#ReleasedPieces_" + ID).text());
    $("#txtReleasedWeight").val($("#ReleasedWeight_" + ID).text());
    $("#txtReExportReleasedArea").val($("#ReExportReleasedArea_" + ID).text());
    $("#txtAssessableValue").val($("#AssessableValue_" + ID).text());
    $("#txtDutyvalue").val($("#Dutyvalue_" + ID).text());
    $("#txtDutyChallanNo").val($("#DutyChallanNo_" + ID).text());
    $("#txtDutyChallanDate").val($("#DutyChallanDate_" + ID).text());
    $("#txtOOCNo").val($("#OOCNo_" + ID).text());
    $("#txtOOCDate").val($("#OOCDate_" + ID).text());
    $("#txtRemarks").val($("#Remarks_" + ID).text());
    $("#Equipment").val($("#Equipment_" + ID).text());
    $("#EquipmentID").val($("#EquipmentID_" + ID).text());
    $("#trnExBondDocumentEntryID").val($("#trnExBondDocumentEntryID_" + ID).text());
    $("#trnExBondDocumentEntryDetailsID").val(ID);    
    $("#CollectExBondCarge").val($("#ExBondChargeNo_" + ID).text())
    GetAllBal();
    var BalancePackages = $("#txtBalancePackages").val();
    BalancePackages = parseFloat(BalancePackages) + parseFloat($("#ReleasedPackages_" + ID).text());
    var BalancePieces = $("#txtBalancePieces").val();
    BalancePieces = parseFloat(BalancePieces) + parseFloat($("#ReleasedPieces_" + ID).text());
    var BalanceWeight = $("#txtBalanceWeight").val();
    BalanceWeight = parseFloat(BalanceWeight) + parseFloat($("#ReleasedWeight_" + ID).text());
    var BalanceArea = 0;
    BalanceArea = $("#txtBalanceArea").val();
    var ReleasedArea = 0;
    ReleasedArea = $("#ReExportReleasedArea_" + ID).text()
    if (BalanceArea != "" && BalanceArea != undefined && BalanceArea != null) {
        if (ReleasedArea != "" && ReleasedArea != undefined && ReleasedArea != null) {
            ReleasedArea = parseFloat($("#ReExportReleasedArea_" + ID).text());
        }
        else {
            ReleasedArea = 0;
        }
        BalanceArea = parseFloat(BalanceArea) + parseFloat(ReleasedArea);
    }
    else {
        BalanceArea = 0;
    }

    $("#txtBalancePackages").val(BalancePackages);
    $("#txtBalancePieces").val(BalancePieces);    
    $("#txtBalanceWeight").val(BalanceWeight);
    $("#BalanceWeight").val(BalanceWeight);
    $("#txtBalanceArea").val(BalanceArea);
    var BalAV = parseFloat($("#BalanceAssessableValue").val());

    BalAV = parseFloat(BalAV) + parseFloat($("#AssessableValue_" + ID).text());
    if (BalAV != null && BalAV != undefined && BalAV != "") {
        $("#BalanceAssessableValue").val(BalAV);
    }
    else {
        $("#BalanceAssessableValue").val("0");
    }

    var BalDV = parseFloat($("#BalanceDutyValue").val());
    BalDV = parseFloat(BalDV) + parseFloat($("#Dutyvalue_" + ID).text());
    if (BalDV != null && BalDV != undefined && BalDV != "") {

        $("#BalanceDutyValue").val(BalDV);
    }
    else {
        $("#BalanceDutyValue").val("0");
    }
    $("#btnContDetails").text("Update");  

    if (parseInt($("#CargoLotDetailsID_" + ID).text()) != 0 || parseInt($("#ContainerLotdetailsID_" + ID).text()) != 0) {
        $("#CollectExBondCarge").css("pointer-events", "none");
        $("#CollectExBondCarge").css("background-color", "#eee");
    } else {
        $("#CollectExBondCarge").css("pointer-events", "");
        $("#CollectExBondCarge").css("background-color", "#fff");
    }
    $("#Exporter").val($("#Exporter_" + ID).text());
    $("#ExporterID").val($("#ExporterID_" + ID).text());    
    var RelPkg = parseFloat($("#ReleasedPackages_" + ID).text());
    var RelPieces = parseFloat($("#ReleasedPieces_" + ID).text());
    var RelWt = parseFloat($("#ReleasedWeight_" + ID).text());
    var DecbalPkg = parseFloat($("#DeclaredPkg_" + ID).text());
    var DecbalPieces = parseFloat($("#DeclaredPieces_" + ID).text());
    var DecbalWt = parseFloat($("#DeclaredWt_" + ID).text());
    var declPkg = DecbalPkg + RelPkg;
    var declPieces = DecbalPieces + RelPieces;
    var declWt = DecbalWt + RelWt;
    $("#DeclaredPackage").val(declPkg);
    $("#DeclaredPices").val(declPieces);
    $("#DeclaredWeight").val(declWt);
    FillLoadedContainerGrid();
}
function deleteDetails(ID) {
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "trnExBondDocumentEntry/deletedetails/" + ID,
            type: "Get",
            dataType: "text",
            success: function (data) {
                filldatatable();
                var msgType = data.split("|")[0];
                var msg = data.split("|")[1];
                var msgTitle = data.split("|")[2];
                TosterAlert(msgType, msg, msgTitle);
                ClearDetails();
            }
        });
    }
}
function SetVisiblityForSBData() {
    var ReleasedType = $("#DDLReleasedType").val();
    if (ReleasedType == "RE-EXPORT") {       
        $("#setVisiblity").show();
        $("#SBsetVisiblity").show();
        $("#AreaVisible").show();
        $("#dvid11").hide();
        $("#dvid22").show(); 
        $("#txtReleasedPackages").attr("readonly", false);
        $("#txtReleasedPieces").attr("readonly", false);
        $("#txtReleasedWeight").attr("readonly", false);
        $("#CollectExBond").hide();
        $("#CollectExBond").val("0");
        $("#divsetVisiblity").hide();
        $("#dvRemoveFromReExport").hide();

        Autocompletebox("SBNo", "trnExportDocumentDeclarationLotDetailsID", "trnExBondDocumentEntry", "GetSBNo/" + $("#trnExBondDocumentEntryID").val(), "GetSBDetails");

        $("#SBDate").attr("readonly", true);
        $("#Exporter").attr("readonly", true);
        $("#txtCHA").attr("readonly", true);
        $("#txtForwarder").attr("readonly", true);
        $("#txtConsoler").attr("readonly", true);
    }
    else {
        
        $("#setVisiblity").hide();
        $("#SBsetVisiblity").hide();
        $("#AreaVisible").hide();
        $("#divsetVisiblity").show();
        $("#dvRemoveFromReExport").show();
        $("#dvid11").show();
        $("#dvid22").hide();        
        $("#CollectExBond").show();
        $("#trnExportDocumentDeclarationLotDetailsID").val("0");

        $("#SBDate").attr("readonly", false);
        $("#Exporter").attr("readonly", false);
        $("#txtCHA").attr("readonly", false);
        $("#txtForwarder").attr("readonly", false);
        $("#txtConsoler").attr("readonly", false);
    }
    $("#hdnBULKSTATUS").val($("#BulkStatus").val());
}
function GetSBDetails() {
    var trnExportDocumentDeclarationLotDetailsID = 0;
    trnExportDocumentDeclarationLotDetailsID = $("#trnExportDocumentDeclarationLotDetailsID").val();
    if (trnExportDocumentDeclarationLotDetailsID != null && parseInt(trnExportDocumentDeclarationLotDetailsID) > 0) {
        $.ajax({
            url: GetRootPath + "trnExBondDocumentEntry/GetSBDetails/" + trnExportDocumentDeclarationLotDetailsID + "?trnExBondDocumentEntryID=" + $("#trnExBondDocumentEntryID").val(),
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#SBDate").val(data.split('|')[0]);
                    $("#txtSBOrInvoiceNo").val(data.split('|')[1]);
                    $("#txtSBOrInvoiceDate").val(data.split('|')[2]);
                    $("#Exporter").val(data.split('|')[3]);
                    $("#ExporterID").val(data.split('|')[4]);
                    $("#txtCHA").val(data.split('|')[5]);
                    $("#txtCHAID").val(data.split('|')[6]);
                    $("#txtForwarder").val(data.split('|')[7]);
                    $("#txtForwarderID").val(data.split('|')[8]);
                    $("#txtConsoler").val(data.split('|')[9]);
                    $("#txtConsolerID").val(data.split('|')[10]);
                    $("#DeclaredPackage").val(data.split('|')[11]);
                    $("#DeclaredPices").val(data.split('|')[12]);
                    $("#DeclaredWeight").val(data.split('|')[13]);                   
                }
                else {
                    
                }
            }
        });
    }
}
function OpenLoadedContainer() {
    setTimeout(function () {
        //var GuiID = $("#GuiID").val();
        var trnExBondDocumentEntryID = $("#trnExBondDocumentEntryID").val();
        var GuiID = $("#GuiID").val()
        Autocompletebox("ContainerNo", "trnDocumentContainerID", "trnExBondDocumentEntry", "GetLoadedConatiner/" + $("#trnDocumentLotDetailsID").val() + "?trnExBondDocumentEntryID=" + trnExBondDocumentEntryID + "&GuiID=" + GuiID + "", "GetLoadedConatinerDetails");
    }, 1000);
    FillLoadedContainerGrid();    
}
function GetLoadedConatinerDetails() {    
    var trnDocumentContainerID = $("#trnDocumentContainerID").val();
    var trnDocumentLotDetailsID= $("#trnDocumentLotDetailsID").val();
    if (parseInt(trnDocumentContainerID) > 0) {
        $.ajax({
            url: GetRootPath + "trnExBondDocumentEntry/GetLoadedConatinerDetails/" + trnDocumentContainerID + "?trnDocumentLotDetailsID=" + trnDocumentLotDetailsID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#ContSize").val(data.split('|')[0]);
                    $("#ContType").val(data.split('|')[1]);
                    $("#ContNoOfPkg").val(data.split('|')[2]);
                    $("#ContNoOfPieces").val(data.split('|')[3]);
                    $("#ContNoOfWt").val(data.split('|')[4]);
                }
                else {
                    $("#ContSize").val("");
                    $("#ContType").val("");
                    $("#ContNoOfPkg").val("0");
                    $("#ContNoOfPieces").val("0");
                    $("#ContNoOfWt").val("0");
                }
            }
        });
    }
}
function ClearLoadedContainerDetails() {

    $("#ContainerNo").val("");
    $("#trnDocumentContainerID").val("0");
    $("#ContSize").val("");
    $("#ContType").val("");
    $("#ContNoOfPkg").val("0");
    $("#ContNoOfPieces").val("0");
    $("#ContNoOfWt").val("0");
    $("#trnExBondDocumentEntryContainerDetailsID").val("0");
}
function AddLoadedContainer() {
    var Errormsg = "";
    var IsValid = true;
    var trnDocumentContainerID = $("#trnDocumentContainerID").val();
    if (trnDocumentContainerID == null || trnDocumentContainerID == undefined || trnDocumentContainerID == "0" || trnDocumentContainerID == "") {
        IsValid = false;        
        $("#spn_trnDocumentContainerID").next().addClass("redborder");        
        Errormsg = "Please Select Container Number.<br/>";
    }
    if (IsValid) {
        $.ajax({
            url: GetRootPath + "trnExBondDocumentEntry/AddContainerDetails",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            success: function (data) {
                ClearLoadedContainerDetails();
                var msgType = data.split("|")[0];
                var msg = data.split("|")[1];
                var msgTitle = data.split("|")[2];
                FillLoadedContainerGrid();
                TosterAlert(msgType, msg, msgTitle);
            }
        });
    }
    
    if (!IsValid) {
        TosterAlert("error", Errormsg, "Required!");
    }
    return IsValid;
}
function FillLoadedContainerGrid() {
    $("#ContainerDetails").html("");
    URL = GetRootPath + "trnExBondDocumentEntry/FillLoadedContainerGrid";

    $.ajax({
        url: URL,
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            
            if (data != "" && data != null) {
                $("#ContainerDetails").html(data);
                $("#txtReleasedPackages").val($("#TotalContNoOfPKG").val());                
                $("#txtReleasedPieces").val($("#TotalContNoOfPieces").val());                
                $("#txtReleasedWeight").val($("#TotalContWeight").val());                
                ClearLoadedContainerDetails();
                $("#txtReleasedPackages").attr("readonly", true);
                $("#txtReleasedPieces").attr("readonly", true);
                $("#txtReleasedWeight").attr("readonly", true);
            }
            else {
                //$("#txtReleasedPackages").val($("#TotalContNoOfPKG").val());
                //$("#txtReleasedPieces").val($("#TotalContNoOfPieces").val());
                //$("#txtReleasedWeight").val($("#TotalContWeight").val());  
                //$("#txtReleasedPackages").attr("readonly", false);
                //$("#txtReleasedPieces").attr("readonly", false);
                //$("#txtReleasedWeight").attr("readonly", false);
                //$("#txtReleasedPackages").val('0');
                //$("#txtReleasedPieces").val('0');
                //$("#txtReleasedWeight").val('0');    
            }
        }
    });
}
function EditLoadedContainerDetails(ID) {
    
    $("#ContainerNo").val($("#ContNo_" + ID).text());
    $("#trnDocumentContainerID").val($("#ContID_" + ID).text());
    $("#ContSize").val($("#ContSize_" + ID).text());
    $("#ContType").val($("#ContType_" + ID).text());
    $("#ContNoOfPkg").val($("#NoOfPackages_" + ID).text());
    $("#ContNoOfPieces").val($("#NoOfPieces_" + ID).text());
    $("#ContNoOfWt").val($("#NoOfWeight_" + ID).text());
    $("#trnExBondDocumentEntryContainerDetailsID").val($("#trnExBondDocumentEntryContainerDetailsID_" + ID).val());    
}
function DeleteLoadedContainerDetails(ID) {
    
    $.ajax({
        url: GetRootPath + "trnExBondDocumentEntry/DeleteLoadedContainerDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillLoadedContainerGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}