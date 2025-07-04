$(document).ready(function () {
   // Autocompletebox("SpaceCertificateNoDetail", "SpaceCertificateID", "trnDocument", "GETSpaceCertificateNo");
    Autocompletebox("VCNNO", "VCNID", "trnDocument", "GetVCNNO", "Callbackautocomplete");
    Autocompletebox("AgentName", "AgentID", "trnDocument", "GetAgent", "CallbackautocompleteForLine");
    Autocompletebox("MstrUomName", "MstrUomID", "trnDocument", "GetUOM");
    if ($("#AgentID").val() != "" && $("#AgentID").val() != null && $("#AgentID").val() != undefined && $("#AgentID").val() > 0) {
        Autocompletebox("LineName", "LineID", "trnDocument", "GetLine/" + $("#AgentID").val());
    }
    var tmpcycle = $("#CycleName").text();
    if (tmpcycle == "EXPORT") { tmpcycle = "'EXPT'"; }
    else if (tmpcycle == "IMPORT") { tmpcycle = "'IMPT'"; }
    else { tmpcycle = "domestic"; }

    $("#DoValidDateForContainer").val('');

    var SpCycle = $("#SpCycleName").val();
    if (SpCycle == "IMPORT") { $("#lblImporterExporter").text("Importer"); }
    else if (SpCycle == "EXPORT") { $("#lblImporterExporter").text("Exporter"); }
    else { $("#lblImporterExporter").text("Importer/Exporter"); }
    Autocompletebox("ModelLotNo", "ModelLotID", "trnDocument", "GetLotForConatiner/" + $("#trnDocumentID").val());
    
    Autocompletebox("txtSubCHA", "txtSubCHAID", "trnDocument", "GetCHA");
    Autocompletebox("txtForwarder", "txtForwarderID", "trnDocument", "GetForwarder");
    Autocompletebox("txtIMPORTERNAME", "txtIMPORTERID", "trnDocument", "GetIMPORTER?Type=" + tmpcycle, "Callbackautocomplete");
    //Autocompletebox("ConsolerName", "ConsolerID", "trnDocument", "GetCONSOLER");
    Autocompletebox("Consolidator", "ConsolidatorID", "trnDocument", "GetCONSOLER");
    Autocompletebox("SUBGROUPCOMMODITY", "SUBGROUPCOMMODITYID", "trnDocument", "GetGROUPCOMMODITY");
    Autocompletebox("SUBPACKAGETYPE", "SUBPACKAGETYPEID", "trnDocument", "GetPACKAGETYPE");
    Autocompletebox("COMMODITYNAMESUB", "COMMODITYIDSUB", "trnDocument", "GetCOMMODITY");
    Autocompletebox("BillCommodity", "BillCommodityID", "trnDocument", "GetCOMMODITY");
    Autocompletebox("SUBCOMMODITYName", "SUBCOMMODITYID", "trnDocument", "GetSUBCOMMODITY");
    Autocompletebox("ISOCODE", "ISOCODEID", "trnDocument", "GetISOCODE");
    Autocompletebox("SIZE", "SIZEID", "trnDocument", "GetSIZE");
    Autocompletebox("CARGOTYPE", "CARGOTYPEID", "trnDocument", "GetCONTTYPE");
    Autocompletebox("LOCATIONFROM", "LOCATIONFROMID", "trnDocument", "GetLocationfrom");
    //Autocompletebox("BatchName", "BatchID", "trnDocument", "GetBatch/" + $("#SpaceCertificateID").val());
    Autocompletebox("ISOCodeForContainer", "ISOCodeIDForContainer", "trnDocument", "GetISOCODE", "CallbackautocompleteForISO");
    Autocompletebox("NatureofCargoNameForContainer", "NatureofCargoIDForContainer", "trnDocument", "GetNatureofCargo", "CargoTypeChange");
    Autocompletebox("NatureofCargoName", "NatureofCargoID", "trnDocument", "GetNatureofCargo", "ChangesBasedOnCargoType");
    Autocompletebox("NatureOfCargo", "CargoTypeID", "trnDocument", "GetNatureofCargo");
    Autocompletebox("GroupCommodityForContainer", "GroupCommodityIDForContainer", "trnDocument", "GetCommodityGroup");
    Autocompletebox("CommodityGroupNameForCargo", "CommodityGroupIDForCargo", "trnDocument", "GetCommodityGroup");
    Autocompletebox("BillCommodityForContainer", "BillCommodityIDForContainer", "trnDocument", "GetCommodity");
    Autocompletebox("BillCommodityForCargo", "BillCommodityIDForCargo", "trnDocument", "GetCommodity");
    Autocompletebox("SubCommodityNameForContainer", "SubCommodityIDForContainer", "trnDocument", "GetSubCommodity");
    Autocompletebox("SubCommodityNameForCargo", "SubCommodityIDForCargo", "trnDocument", "GetSubCommodity");
    Autocompletebox("PackageTypeForContainer", "PackageTypeIDForContainer", "trnDocument", "GetPackingType");
    Autocompletebox("PackageTypeForCargo", "PackageTypeIDForCargo", "trnDocument", "GetPackingType");
    Autocompletebox("txtHoldAgency", "txtHoldAgencyID", "trnDocument", "GetHoldAgency");
    Autocompletebox("TariffHead", "TariffHeadID", "trnDocument", "GetTariffHead");
    DisplayInactiveReason('IsActive', 'dvInActiveReason');
    // Autocompletebox("txtSubCHA", "txtSubCHAID", "trnDocument", "GetCHA");
    $(".showonlyinedit").hide();
    $(".ui-autocomplete").attr("style", "z-index: 10000;");
    if (IsSearch == "true") {
        $("#SpaceCertificateNoDetail").prop("disabled", true);
    }

    var GateInType = $("#GateInType").val();

    if (GateInType == "TRUCK") {
        $("#AgentName").prop("readonly", true);
        $("#LineName").prop("readonly", true);
    }

    Cycle = $("input[name=CycleID]:checked").val();
    if (Cycle == ExporterCode) {

        Cycle = "EXPT";
        //$("#lblImporterExporter").text("Exporter");
        $("#lblsIMPORTERNAME").text("Exporter");
        $("#hdrImporter").text("Exporter");
        $("#lblIMPORTERADDRESSNAME").text("Exporter Address");
        $("#hdrImporterAddress").text("Exporter Address");
        $('#txtIMPORTERNAME').attr('placeholder', 'Enter Exporter');
        $("#txtIMPORTERADDRESSNAME").attr('placeholder', 'Enter Exporter Address');
        $("#txtForwarder").prop("readonly", false);
        $("#lblShiipingBillNo").text("Shipping Bill No");
        $("#hdrShipingBillNo").text("Shipping Bill No");
        $("#lblShipingBillDate").text("Ship Bill Date");
        $("#hdrShipingBillDate").text("Ship Bill Date");
        $("#lblInvoiceNumber").text("Invoice Number");
        $("#hdrInvoiceNumber").text("Invoice Number");
        $("#lblInvoiceDate").text("Invoice Date");
        $("#hdrInvoiceDate").text("Invoice Date");
    }
    else if (Cycle == ImporterCode) {
        Cycle = "IMPT";
        //$("#lblImporterExporter").text("Importer");
        $("#lblsIMPORTERNAME").text("Importer");
        $('#txtIMPORTERNAME').attr('placeholder', 'Enter Importer');
        $("#hdrImporter").text("Importer");
        $("#lblIMPORTERADDRESSNAME").text("Importer Address");
        $("#txtIMPORTERADDRESSNAME").attr('placeholder', 'Enter Importer Address');
        $("#hdrImporterAddress").text("Importer Address");
        $("#txtForwarder").prop("readonly", true);
        $("#lblShiipingBillNo").text("BOE No");
        $("#hdrShipingBillNo").text("BOE No");
        $("#lblShipingBillDate").text("BOE Date");
        $("#hdrShipingBillDate").text("BOE Date");
        $("#lblInvoiceNumber").text("BL No");
        $("#hdrInvoiceNumber").text("BL No");
        $("#lblInvoiceDate").text("BL Date");
        $("#hdrInvoiceDate").text("BL Date");
    }
    else {
        Cycle = "";
        //$("#lblImporterExporter").text("Importer/Exporter");
        $("#lblsIMPORTERNAME").text("Importer/Exporter");
        $("#hdrImporter").text("Importer/Exporter");
        $("#lblIMPORTERADDRESSNAME").text("Importer/Exporter Address");
        $("#hdrImporterAddress").text("Importer/Exporter Address");
        $('#txtIMPORTERNAME').attr('placeholder', 'Enter Importer/Exporter');
        $("#txtIMPORTERADDRESSNAME").attr('placeholder', 'Enter Importer/Exporter Address');
        $("#txtForwarder").prop("readonly", true);
        $("#lblShiipingBillNo").text("Document No");
        $("#hdrShipingBillNo").text("Document No");
        $("#lblShipingBillDate").text("Doc. Date");
        $("#hdrShipingBillDate").text("Doc. Date");
    }
    var GateInType = $("#GateInType").val();
    if (GateInType == "MIX") {        
        $("#dvDocumentContainerDetails").show();
        $("#dvDocumentCargo").show();
        $("#NatureofCargoName").prop("readonly", false);
        filldatatable("Container");
        filldatatable("Cargo");
    }
    else if (GateInType == "CONTAINER") {
        $("#dvDocumentCargo").hide();
        $("#dvDocumentContainerDetails").show();
        filldatatable("Container");
         GetContSpace();
    }
    else if (GateInType == "TRUCK") {
        $("#dvDocumentContainerDetails").hide();
        $("#dvDocumentCargo").show();
        filldatatable("Cargo");
    }
    else {
        $("#dvDocumentContainerDetails").hide();
        $("#dvDocumentCargo").hide();

    }
    if ($('#GateInTypeTruck').is(':checked')) {
        $("#AgentName").prop("readonly", true);
        $("#LineName").prop("readonly", true);
        $("#Noof20").prop("readonly", false);
        $("#Noof40").prop("readonly", false);
        $("#Noof45").prop("readonly", false);
        $("#MstrUomName").prop("readonly", false);
        $("#BillCommodity").prop("readonly", false);
        $("#NatureOfCargo").prop("readonly", false);
        $("#AgentName").val('');
        $("#LineName").val('');
        $("#AgentID").val('0');
        $("#LineID").val('0');
        $("#SUBPACKAGETYPE").prop("readonly", false);
        $("#COMMODITYNAMESUB").prop("readonly", false);
        $("#SUBCOMMODITYName").prop("readonly", false);
        $("#NatureofCargoName").prop("readonly", false);
        $("#IMO").prop("readonly", false);
        $("#UN").prop("readonly", false);
        $("#TEMP").prop("readonly", false);
        $("#Noof20").val("");
        $("#Noof40").val("");
        $("#Noof45").val("");
    }
    else if ($('#GateInTypeCONTAINER').is(':checked')) {
        $("#AgentName").prop("readonly", false);
        $("#LineName").prop("readonly", false);
        $("#Noof20").prop("readonly", true);
        $("#Noof40").prop("readonly", true);
        $("#Noof45").prop("readonly", true);
        $("#MstrUomName").prop("readonly", false);
        $("#BillCommodity").prop("readonly", true);
        $("#NatureOfCargo").prop("readonly", true);
        $("#Noof20").val('0');
        $("#Noof40").val('0');
        $("#Noof45").val('0');
        //$("#MstrUomID").val('0');
        //$("#MstrUomName").val('');
        $("#BillCommodity").val('');
        $("#BillCommodityID").val('0');
        $("#NatureOfCargo").val('');
        $("#CargoTypeID").val('0');
        //$("#TotalSpace").val('0');
        $("#SUBPACKAGETYPE").prop("readonly", true);
        $("#COMMODITYNAMESUB").prop("readonly", true);
        $("#SUBCOMMODITYName").prop("readonly", true);
        $("#NatureofCargoName").prop("readonly", true);
        $("#IMO").prop("readonly", true);
        $("#UN").prop("readonly", true);
        $("#TEMP").prop("readonly", true);
        $("#InTypeForContainer").prop("disabled", true);

    }
    else {        
        var GateInType = $("#GateInType").val();
        if (GateInType == "" || GateInType == undefined || GateInType == null) {
            $("#AgentName").prop("readonly", false);
            $("#LineName").prop("readonly", false);           
        }
        //$("#AgentName").prop("readonly", false);
        //$("#LineName").prop("readonly", false);
        $("#Noof20").prop("readonly", true);
        $("#Noof40").prop("readonly", true);
        $("#Noof45").prop("readonly", true);
        $("#MstrUomName").prop("readonly", true);
        $("#BillCommodity").prop("readonly", true);
        $("#NatureOfCargo").prop("readonly", true);
        //$("#Noof20").val('0');
        //$("#Noof40").val('0');
        //$("#Noof45").val('0');
        //$("#MstrUomID").val('0');
        //$("#MstrUomName").val('');
        //$("#BillCommodity").val('');
        //$("#BillCommodityID").val('0');
        //$("#NatureOfCargo").val('');
        //$("#CargoTypeID").val('0');
        //$("#TotalSpace").val('0');
        $("#SUBPACKAGETYPE").prop("readonly", false);
        $("#COMMODITYNAMESUB").prop("readonly", false);
        $("#SUBCOMMODITYName").prop("readonly", false);
        $("#NatureofCargoName").prop("readonly", false);
        $("#IMO").prop("readonly", false);
        $("#UN").prop("readonly", false);
        $("#TEMP").prop("readonly", false);
    }
    ClearLotDetails();
    if ($('#txtIMPORTERID').val() != "" && $('#txtIMPORTERID').val() != null && $('#txtIMPORTERID').val() != undefined && $('#txtIMPORTERID').val() > 0) {
        Callbackautocomplete();
    }
    MakeReadonlyFields();
    changedeleverymode();
    UpdateDetailsUsingRadiobuttonStatus();
    Container();
    changeContainerLevel();
    CheckCPStatus();
    CheckENHANCEDAVOrDV();
    if ($("#doaction").val() == "edit") {
        $("#MstrUomName").prop("readonly", true);
    }
    SpaceCerificateIssuedToChange();

    debugger

    var SuccessMsg = localStorage.getItem("Success");

    if (SuccessMsg != "" && SuccessMsg != null) {

        TosterAlert("success", SuccessMsg, "Success");
        localStorage.removeItem("Success");
    }


});

function changeContainerLevel() {
    if ($("#ContainerLevel").val() == "FCL") {
        $("#dvid").prop("readonly", true);
        $("#dvid").css("pointer-events", "none");
        $("#LotOfCont").prop("readonly", false);
        var GuiID = $("#GuiID").val();
        Autocompletebox("LotOfCont", "LotID", "trnDocument", "GetLotForConatiner/" + $("#trnDocumentID").val() + "?GuiID=" + GuiID + "&trnDocumentContainerForLotID=" + $("#trnDocumentContainerForLotID").val(), "GetContLotDetails");
    }
    else if ($("#ContainerLevel").val() == "LCL") {
        $("#dvid").css("pointer-events", "auto");
        $("#dvid").prop("readonly", false);
        $("#LotOfCont").prop("readonly", true);
        $("#LotOfCont").val("");
        $("#LotID").val("0");
        FillContainerLotGrid();
    }
    else {
        $("#dvid").css("pointer-events", "none");
        $("#LotOfCont").prop("readonly", true);
        $("#dvid").prop("readonly", true);
        $("#LotOfCont").val("");
        $("#LotID").val("0");
        $("#NoOfPackageForContainer").val("");
        $("#NoOfPiecesForContainer").val("");
        $("#WeightForContainer").val("");
    }
}
function OpenLotForContainer() {
    setTimeout(function () {
        var GuiID = $("#GuiID").val();
        Autocompletebox("ModelLotNo", "ModelLotID", "trnDocument", "GetLotForConatiner/" + $("#trnDocumentID").val() + "?GuiID=" + GuiID + "&trnDocumentContainerForLotID=" + $("#trnDocumentContainerForLotID").val(), "GetModelContLotDetails");
    }, 1000);
}

function GetContLotDetails() {
    var LotID = $("#LotID").val();
    if (LotID != "" && LotID != undefined && LotID != null) {
        $.ajax({
            url: GetRootPath + "trnDocument/GetContLotDetails/" + LotID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#NoOfPackageForContainer").val(data.split('|')[0]);
                    $("#hdnTtlNoOfPackage").val(data.split('|')[0]);
                    $("#NoOfPiecesForContainer").val(data.split('|')[1]);
                    $("#hdnTtlNoOfPieces").val(data.split('|')[1]);
                    $("#WeightForContainer").val(data.split('|')[2]);
                    $("#hdnTtlWeight").val(data.split('|')[2]);
                }
                else {
                    $("#NoOfPackageForContainer").val("");
                    $("#hdnTtlNoOfPackage").val("0");
                    $("#NoOfPiecesForContainer").val("");
                    $("#hdnTtlNoOfPieces").val("0");
                    $("#WeightForContainer").val("");
                    $("#hdnTtlWeight").val("0");
                }
            }
        });
    }
}
function GetModelContLotDetails() {
    var LotID = $("#ModelLotID").val();
    var trnDocumentID = $("#trnDocumentID").val();
    var GuiID = $("#GuiID").val();
    if (LotID != "" && LotID != undefined && LotID != null) {        
        $.ajax({
            url: GetRootPath + "trnDocument/GetContLotDetails/" + LotID + "?trnDocumentID=" + trnDocumentID + "&GuiID=" + GuiID + "&trnDocumentContainerForLotID=" + $("#trnDocumentContainerForLotID").val(),
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#ModelContPakg").val(data.split('|')[0]);
                    $("#hdnTtlNoOfPackage").val(data.split('|')[0]);
                    $("#ModelContPieces").val(data.split('|')[1]);
                    $("#hdnTtlNoOfPieces").val(data.split('|')[1]);
                    $("#ModelContWeight").val(data.split('|')[2]);
                    $("#hdnTtlWeight").val(data.split('|')[2]);
                }
                else {
                    $("#ModelContPakg").val("");
                    $("#hdnTtlNoOfPackage").val("0");
                    $("#ModelContPieces").val("");
                    $("#hdnTtlNoOfPieces").val("0");
                    $("#ModelContWeight").val("");
                    $("#hdnTtlWeight").val("0");
                }
            }
        });
    }
}
function UpdateDetailsUsingRadiobuttonStatus() {
    $("input[name=CycleID]").on('ifChanged', function (event) {
        var Cycle = $("input[name='CycleID']:checked").val();

        $("#CycleCode").val(Cycle);
        if (Cycle == ExporterCode) {
            Cycle = "'EXPT'";
            //$("#lblImporterExporter").text("Exporter");
            $("#lblsIMPORTERNAME").text("Exporter");
            $("#hdrImporter").text("Exporter");
            $("#lblIMPORTERADDRESSNAME").text("Exporter Address");
            $("#hdrImporterAddress").text("Exporter Address");
            $('#txtIMPORTERNAME').attr('placeholder', 'Enter Exporter');
            $("#txtIMPORTERADDRESSNAME").attr('placeholder', 'Enter Exporter Address');
            $("#txtForwarder").prop("readonly", false);
            $("#lblShiipingBillNo").text("Shipping Bill No");
            $("#hdrShipingBillNo").text("Shipping Bill No");
            $("#lblShipingBillDate").text("Ship Bill Date");
            $("#hdrShipingBillDate").text("Ship Bill Date");
            $("#lblInvoiceNumber").text("Invoice Number");
            $("#hdrInvoiceNumber").text("Invoice Number");
            $("#lblInvoiceDate").text("Invoice Date");
            $("#hdrInvoiceDate").text("Invoice Date");
            $("#txtIMPORTERNAME").val('');
        }
        else if (Cycle == ImporterCode) {
            Cycle = "'IMPT'";
            //$("#lblImporterExporter").text("Importer");
            $("#lblsIMPORTERNAME").text("Importer");
            $('#txtIMPORTERNAME').attr('placeholder', 'Enter Importer');
            $("#hdrImporter").text("Importer");
            $("#lblIMPORTERADDRESSNAME").text("Importer Address");
            $("#txtIMPORTERADDRESSNAME").attr('placeholder', 'Enter Importer Address');
            $("#hdrImporterAddress").text("Importer Address");
            //$("#lblImporterExporter").text("Importer");
            $("#lblsIMPORTERNAME").text("Importer");
            $('#txtIMPORTERNAME').attr('placeholder', 'Enter Importer');
            $("#hdrImporter").text("Importer");
            $("#lblIMPORTERADDRESSNAME").text("Importer Address");
            $("#txtIMPORTERADDRESSNAME").attr('placeholder', 'Enter Importer Address');
            $("#hdrImporterAddress").text("Importer Address");
            $("#txtForwarder").prop("readonly", true);
            $("#lblShiipingBillNo").text("BOE No");
            $("#hdrShipingBillNo").text("BOE No");
            $("#lblShipingBillDate").text("BOE Date");
            $("#hdrShipingBillDate").text("BOE Date");
            $("#lblInvoiceNumber").text("BL No");
            $("#hdrInvoiceNumber").text("BL No");
            $("#lblInvoiceDate").text("BL Date");
            $("#hdrInvoiceDate").text("BL Date");
            $("#txtIMPORTERNAME").val('');
        }
        else if (Cycle == DomesticCode) {
            Cycle = "domestic";
            //$("#lblImporterExporter").text("Importer/Exporter");
            $("#lblsIMPORTERNAME").text("Importer/Exporter");
            $("#hdrImporter").text("Importer/Exporter");
            $("#lblIMPORTERADDRESSNAME").text("Importer/Exporter Address");
            $("#hdrImporterAddress").text("Importer/Exporter Address");
            $('#txtIMPORTERNAME').attr('placeholder', 'Enter Importer/Exporter');
            $("#txtIMPORTERADDRESSNAME").attr('placeholder', 'Enter Importer/Exporter Address');
            $("#txtForwarder").prop("readonly", true);
            $("#lblShiipingBillNo").text("Document No");
            $("#hdrShipingBillNo").text("Document No");
            $("#lblShipingBillDate").text("Doc. Date");
            $("#hdrShipingBillDate").text("Doc. Date");
            $("#txtIMPORTERNAME").val('');
        }
        else { Cycle = "domestic"; $("#txtIMPORTERNAME").val(''); }
        Autocompletebox("txtIMPORTERNAME", "txtIMPORTERID", "trnDocument", "GetIMPORTER?Type=" + Cycle, "Callbackautocomplete");
    });
    $("input[name=GateInType]").on('ifChanged', function (event) {
        var istrue = false;
        var GateInType = $("input[name='GateInType']:checked").val();
        if (GateInType != undefined) {
            if (GateInType == "CONTAINER") {
                $("#InTypeForContainer").prop("disabled", true);
            }
            else {
                $("#InTypeForContainer").prop("disabled", false);
            }

        }
        if ($("#oldGateInType").val() == "CONTAINER" && $('#GateInTypeTruck').is(':checked')) {
            if (confirm("Are you sure delete the container details?")) {
                deletethecontainerrecords();
                filldatatable("Container");
            }
            else {
                //  setTimeout(function () {
                $("#GateInTypeCONTAINER").iCheck("check");
                //return false;
                //   }, 500);
                istrue = true;
            }
        }
        if (!istrue) {

            MakeReadonlyFields();
            if ($('#GateInTypeTruck').is(':checked')) {
                $("#AgentName").prop("readonly", true);
                $("#LineName").prop("readonly", true);
                $("#Noof20").prop("readonly", false);
                $("#Noof40").prop("readonly", false);
                $("#Noof45").prop("readonly", false);
                $("#MstrUomName").prop("readonly", false);
                $("#BillCommodity").prop("readonly", false);
                $("#NatureOfCargo").prop("readonly", false);
                $("#AgentName").val('');
                $("#LineName").val('');
                $("#SUBPACKAGETYPE").prop("readonly", false);
                $("#COMMODITYNAMESUB").prop("readonly", false);
                $("#SUBCOMMODITYName").prop("readonly", false);
                $("#NatureofCargoName").prop("readonly", false);
                $("#IMO").prop("readonly", false);
                $("#UN").prop("readonly", false);
                $("#TEMP").prop("readonly", false);
                $("#oldGateInType").val("TRUCK");
                $("#Noof20").val('');
                $("#Noof40").val('');
                $("#Noof45").val('');
            }
            else if ($('#GateInTypeCONTAINER').is(':checked')) {
                $("#AgentName").prop("readonly", false);
                $("#LineName").prop("readonly", false);
                $("#Noof20").prop("readonly", true);
                $("#Noof40").prop("readonly", true);
                $("#Noof45").prop("readonly", true);
                $("#MstrUomName").prop("readonly", false);
                $("#BillCommodity").prop("readonly", true);
                $("#NatureOfCargo").prop("readonly", true);
                $("#Noof20").val('0');
                $("#Noof40").val('0');
                $("#Noof45").val('0');
                //$("#MstrUomID").val('0');
                //$("#MstrUomName").val('');
                $("#BillCommodity").val('');
                $("#BillCommodityID").val('0');
                $("#NatureOfCargo").val('');
                $("#CargoTypeID").val('0');
                $("#TotalSpace").val('0');
                $("#SUBPACKAGETYPE").prop("readonly", true);
                $("#COMMODITYNAMESUB").prop("readonly", true);
                $("#SUBCOMMODITYName").prop("readonly", true);
                $("#NatureofCargoName").prop("readonly", true);
                $("#IMO").prop("readonly", true);
                $("#UN").prop("readonly", true);
                $("#TEMP").prop("readonly", true);
                $("#oldGateInType").val("CONTAINER");
                MakeReadonlyFields();
            }
            else {
                $("#AgentName").prop("readonly", false);
                $("#LineName").prop("readonly", false);
                $("#Noof20").prop("readonly", true);
                $("#Noof40").prop("readonly", true);
                $("#Noof45").prop("readonly", true);
                $("#MstrUomName").prop("readonly", true);
                $("#BillCommodity").prop("readonly", true);
                $("#NatureOfCargo").prop("readonly", true);
                $("#Noof20").val('0');
                $("#Noof40").val('0');
                $("#Noof45").val('0');
                $("#MstrUomID").val('0');
                $("#MstrUomName").val('');
                $("#BillCommodity").val('');
                $("#BillCommodityID").val('0');
                $("#NatureOfCargo").val('');
                $("#CargoTypeID").val('0');
                $("#TotalSpace").val('0');
                $("#SUBPACKAGETYPE").prop("readonly", false);
                $("#COMMODITYNAMESUB").prop("readonly", false);
                $("#SUBCOMMODITYName").prop("readonly", false);
                $("#NatureofCargoName").prop("readonly", false);
                $("#IMO").prop("readonly", false);
                $("#UN").prop("readonly", false);
                $("#TEMP").prop("readonly", false);

            }
        }
        else {
            //uncheckTruck();
            //$("#GateInTypeTruck").iCheck("uncheck");
            //$("#GateInTypeCONTAINER").iCheck("check");
        }
    });
    $("#IsBulkForContainer").on('ifChanged', function (event) {
        if (event.target.checked == true) {
            $("#NoOfPackageForContainer").prop("readonly", true);
            $("#NoOfPiecesForContainer").prop("readonly", true);
            $("#NoOfPackageForContainer").val("0");
            $("#NoOfPiecesForContainer").val("0");
        }
        else {
            $("#NoOfPackageForContainer").prop("readonly", false);
            $("#NoOfPiecesForContainer").prop("readonly", false);
            $("#NoOfPackageForContainer").val("");
            $("#NoOfPiecesForContainer").val("");
        }
    });
    changedeleverymode();
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
    var trnDocumentLotDetailsID = $("#trnDocumentLotDetailsID").val();
    var IsInUsed = 0
          IsInUsed=$("#IsInUsed").val();

    if (parseInt(IsInUsed)==0) {
        $("#txtIMPORTERADDRESSNAME").val('');
        $("#txtIMPORTERADDRESSID").val('0');
    }
    
    Autocompletebox("txtIMPORTERADDRESSNAME", "txtIMPORTERADDRESSID", "trnDocument", "GetIMPORTERADDRESS/" + $("#txtIMPORTERID").val());
    //AlertMessageForImporter();
    FillVCNDetails();
}
function CallbackautocompleteForISO() {
    FillISOCodeDetails();
}
function CallbackautocompleteForLine() {
    Autocompletebox("LineName", "LineID", "trnDocument", "GetLine/" + $("#AgentID").val());
}
function FillVCNDetails() {
    var ID = $("#VCNID").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnDocument/GetVESSELNAMEAndVOYNO/" + ID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#txtVESSELNAME").text(data.split("|")[0]);
                    $("#txtVOYNO").text(data.split("|")[1]);
                    $("#hdnVESSELNAME").val(data.split("|")[0]);
                    $("#hdnVOYNO").val(data.split("|")[1]);
                }
                else {
                    $("#txtVESSELNAME").text("");
                    $("#txtVOYNO").text("");
                    $("#hdnVESSELNAME").val("");
                    $("#hdnVOYNO").val("");
                }
            }
        })
    }
    else {
        $("#txtVESSELNAME").text("");
        $("#txtVOYNO").text("");
        $("#hdnVESSELNAME").val("");
        $("#hdnVOYNO").val("");
    }
}

function SpaceCerificateIssuedToChange() {

    let SpaceCerificateIssuedTo = $("#SpaceCerificateIssuedTo").val();
    
    if (SpaceCerificateIssuedTo == "Custom") {
        $("#CustomDetailsBox").css("display", "block");

    } else {
        $("#CustomDetailsBox").css("display", "none");
        $("#CustomDetails").val("");
    }
}

function EditLotdetails(ID, IsLotInvoiceCreated) {

    ChangesBasedOnCargoType();
    CheckCPStatus();
    CheckENHANCEDAVOrDV(); 

    var IsCompleted=$("#IsInUsed").val(IsCompleted);
    if ($('#GateInTypeCONTAINER').is(':checked')) {
        $("#NatureofCargoName").prop("readonly", true);
    }
    else {
        $("#NatureofCargoName").prop("readonly", false);
    }
    $("#LicenceNo").val($("#LicenceNo_" + ID).text());
    $("#IGMNo").val($("#IGMNo_" + ID).text());
    $("#ItemNo").val($("#ItemNo_" + ID).text());
    $("#IGMDate").val($("#IGMDate_" + ID).text());
    $("#BOENo").val($("#BOENo_" + ID).text());
    $("#BOEDate").val($("#BOEDate_" + ID).text());
    $("#BLNo").val($("#BLNo_" + ID).text());
    $("#BLDate").val($("#BLDate_" + ID).text());
    $("#OOCNo").val($("#OOCNo_" + ID).text());
    $("#OOCDate").val($("#OOCDate_" + ID).text());
    $("#BULKSTATUS").val($("#BULKSTATUS_" + ID).text());
    $("#NOOFPKGS").val($("#NOOFPKGS_" + ID).text());
    $("#NOOFPIECES").val($("#NOOFPIECES_" + ID).text());
    $("#WEIGHT").val($("#WEIGHT_" + ID).text());
    $("#EXCESSBOEPACKAGES").val($("#EXCESSBOENOOFPKGS_" + ID).text());
    $("#EXCESSBOEWEIGHT").val($("#EXCESSBOEWEIGHT_" + ID).text());
    if ($("#CPStatus_" + ID).text() == "") {
        $("#CPStatus").val("Select");
    } else {
        $("#CPStatus").val($("#CPStatus_" + ID).text());
    }
    $("#CPNo").val($("#CPNo_" + ID).text());
    $("#CPDate").val($("#CPDate_" + ID).text());
    $("#GateInDateForLot").val($("#GateInDateForLot_" + ID).text());
    $("#CPValidity").val($("#CPValidity_" + ID).text());
    $("#CPValidUpTo").val($("#CPValidUpto_" + ID).text());
    $("#BondNo").val($("#BondNo_" + ID).text());
    $("#BondDate").val($("#BondDate_" + ID).text());
    $("#BondValidity").val($("#BondValidity_" + ID).text());
    $("#BondValidUpTo").val($("#BondValidUpto_" + ID).text());
    $("#CARGODESC").val($("#CARGODESC_" + ID).text());
    $("#txtIMPORTERNAME").val($("#IMPORTERNAME_" + ID).text());
    $("#txtIMPORTERID").val($("#IMPORTERID_" + ID).text());
    $("#txtIMPORTERADDRESSID").val($("#IMPORTERADDRESSID_" + ID).text());
    $("#txtIMPORTERADDRESSNAME").val($("#IMPORTERADDRESSNAME_" + ID).text());
    $("#txtSubCHAID").val($("#SubCHAID_" + ID).text());
    $("#txtSubCHA").val($("#SubCHA_" + ID).text());
    $("#txtForwarderID").val($("#ForwarderID_" + ID).text());
    $("#txtForwarder").val($("#Forwarder_" + ID).text());
    //$("#ConsolerName").val($("#ConsolerNAME_" + ID).text());
    $("#ConsolerID").val($("#ConsolerID_" + ID).text());
    $("#SUBGROUPCOMMODITY").val($("#GroupCommodity_" + ID).text());
    $("#SUBGROUPCOMMODITYID").val($("#GroupCommodityID_" + ID).text());
    $("#SUBPACKAGETYPEID").val($("#PACKAGETYPEID_" + ID).text());
    $("#SUBPACKAGETYPE").val($("#PACKAGETYPE_" + ID).text());
    $("#COMMODITYIDSUB").val($("#COMMODITYID_" + ID).text());
    $("#COMMODITYNAMESUB").val($("#COMMODITYNAME_" + ID).text());
    $("#SUBCOMMODITYID").val($("#SUBCOMMODITYID_" + ID).text());
    $("#SUBCOMMODITYName").val($("#SUBCOMMODITY_" + ID).text());
    $("#MARKSANDNOS").val($("#MARKSANDNOS_" + ID).text());
    $("#AssessableValue").val($("#AssessableValue_" + ID).text());
    $("#Dutyvalue").val($("#Dutyvalue_" + ID).text());
    $("#ENHANCEDAVOrDV").val($("#EnhanceAVOrDV_" + ID).text());
    $("#EnhanceAV").val($("#EnhanceAssembleValue_" + ID).text());
    $("#EnhancedDV").val($("#EnhanceDutyvalue_" + ID).text());
    $("#Volumevalue").val($("#Volumevalue_" + ID).text());
    $("#RemarksForLot").val($("#RemarksForLot_" + ID).text());
    $("#SpaceCerificateIssuedTo").val($("#SpaceCerificateIssuedTo_" + ID).text());
    $("#CustomDetails").val($("#CustomDetails_" + ID).text());
    $("#trnDocumentLotDetailsID").val(ID);

    $("#btnLotDetails").text("Update");
    document.getElementById("btnLotDetails").disabled = false; 
    $("#IsTruckWoDone").val($("#IsTruckWoD_" + ID).text());
    var IsTruckWoDone = $("#IsTruckWoDone").val();
    SpaceCerificateIssuedToChange();
    FillDocumentBoiGrid();
    
    if (parseInt(IsLotInvoiceCreated)>0) {
        debugger;
        $("#IGMNo").prop("readonly", true);
        $("#IGMDate").prop("readonly", true);
        $("#BOENo").prop("readonly", true);
        $("#BOEDate").prop("readonly", true);
        $("#BLNo").prop("readonly", true);
        $("#BLDate").prop("readonly", true);
        $("#txtIMPORTERNAME").prop("readonly", true);
        $("#txtIMPORTERADDRESSNAME").prop("readonly", true);
        $("#txtSubCHA").prop("readonly", true);
        $("#txtForwarder").prop("readonly", true);
        $("#NOOFPKGS").prop("readonly", true);
        $("#NOOFPIECES").prop("readonly", true);
        $("#WEIGHT").prop("readonly", true);
        $("#CARGODESC").prop("readonly", true);
        $("#NatureofCargoName").prop("readonly", true);
        $("#SUBGROUPCOMMODITY").prop("readonly", true);
        $("#SUBPACKAGETYPE").prop("readonly", true);
        $("#COMMODITYNAMESUB").prop("readonly", true);
        $("#SUBCOMMODITYName").prop("readonly", true);
        $("#MARKSANDNOS").prop("readonly", true);
        $("#AssessableValue").prop("readonly", true);
        $("#Dutyvalue").prop("readonly", true);
        $("#IMO").prop("readonly", true);
        $("#UN").prop("readonly", true);
        $("#TEMP").prop("readonly", true);
        $("#RemarksForLot").prop("readonly", true);        
        $("#BULKSTATUS").css("pointer-events", "none");
        $("#BULKSTATUS").css("background-color", "#eee");
        $("#SpaceCerificateIssuedTo").css("pointer-events", "none");
        $("#SpaceCerificateIssuedTo").css("background-color", "#eee");
    }
    else {

    }

    if ($("#BULKSTATUS").val() == "BULK") {
        $("#NOOFPKGS").prop("readonly", true);
        $("#NOOFPIECES").prop("readonly", true);
        $("#NOOFPKGS").val("0");
        $("#NOOFPIECES").val("0");
    }
    
    $("#NatureofCargoName").val($("#CargoType_" + ID).text());
    $("#NatureofCargoID").val($("#CargoTypeID_" + ID).text());
    $("#IMO").val($("#IMO_" + ID).text());
    $("#UN").val($("#UN_" + ID).text());
    $("#TEMP").val($("#Temp_" + ID).text());
    //$("#TariffHead").val($("#TariffHead_" + ID).text());
    //$("#TariffHeadID").val($("#TariffHead_" + ID).text());
    //$("#TariffHead").prop("readonly", true);  
    if (parseInt(IsLotInvoiceCreated)==0) {
        debugger;
        MakeReadonlyFields();
    }

    var IsExBondDone = $("#IsExBondDone_" + ID).text();
    
    if (parseInt(IsExBondDone) > 0) {
        debugger;
        $("#EnhanceAV").prop("readonly", true);
        $("#EnhancedDV").prop("readonly", true);
        $("#ENHANCEDAVOrDV").prop("disabled", true);
        $("#EXCESSBOEPACKAGES").prop("readonly", true);
        $("#EXCESSBOEWEIGHT").prop("readonly", true);
    }
    else {
        $("#EnhanceAV").prop("readonly", false);
        $("#EnhancedDV").prop("readonly", false);
        $("#ENHANCEDAVOrDV").prop("disabled", false);
        $("#EXCESSBOEPACKAGES").prop("readonly", false);
        $("#EXCESSBOEWEIGHT").prop("readonly", false);
        /*CheckENHANCEDAVOrDV()*/
    }    


    $.ajax({
        url: GetRootPath + "trnDocument/GetUsedLotForContainer/" + ID,
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            data = data.split("|")

            if (data[0] != 0) {
                $("#BULKSTATUS").css("pointer-events", "none");
                $("#BULKSTATUS").css("background-color", "#eee");
                $("#NOOFPKGS").prop("readonly", true);
                $("#NOOFPIECES").prop("readonly", true);
                $("#WEIGHT").prop("readonly", true);
                $("#ModelNOOFPKGS").val('');
                $("#ModelNOOFPIECES").val('');
                $("#ModelWEIGHT").val('');
                $("#AddBOEItemss").css("display", "none");
                $("#dvUploadExcel").css("display", "none");
            } else {
                debugger;
                $("#BULKSTATUS").css("pointer-events", "");
                $("#BULKSTATUS").css("background-color", "#fff");
                $("#NOOFPKGS").prop("readonly", false);
                $("#NOOFPIECES").prop("readonly", false);
                $("#WEIGHT").prop("readonly", false);
                $("#ModelNOOFPKGS").val('');
                $("#ModelNOOFPIECES").val('');
                $("#ModelWEIGHT").val('');
                $("#AddBOEItemss").css("display", "block");
                $("#dvUploadExcel").css("display", "block");
            }

            if (data[1] != 0) {
                $("#BULKSTATUS").css("pointer-events", "none");
                $("#BULKSTATUS").css("background-color", "#eee");
                $("#NOOFPKGS").prop("readonly", true);
                $("#NOOFPIECES").prop("readonly", true);
                $("#WEIGHT").prop("readonly", true);
                $("#ModelNOOFPKGS").val('');
                $("#ModelNOOFPIECES").val('');
                $("#ModelWEIGHT").val('');
                $("#AddBOEItemss").css("display", "none");
                $("#dvUploadExcel").css("display", "none");
            }
        }
    });

    $.ajax({
        url: GetRootPath + "trnDocument/GetGateInBOEDetails/" + ID + "?GateInType=" + $("#GateInType").val(),
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            
            if (data != 0) {

                $("#IGMNo").prop("readonly", true);
                $("#IGMDate").prop("readonly", true);
                $("#BOENo").prop("readonly", true);
                $("#BOEDate").prop("readonly", true);
                $("#BLNo").prop("readonly", true);
                $("#BLDate").prop("readonly", true);
                $("#LicenceNo").prop("readonly", true);
                $("#NOOFPKGS").prop("readonly", true);
                $("#NOOFPIECES").prop("readonly", true);
                $("#WEIGHT").prop("readonly", true);
                $("#NatureofCargoName").prop("readonly", true);
                $("#COMMODITYNAMESUB").prop("readonly", true);
                $("#CPStatus").css("pointer-events", "none");
                $("#CPStatus").css("background-color", "#eee");
                $("#CPNo").prop("readonly", true);
                $("#CPDate").prop("readonly", true);
                $("#CPValidity").prop("readonly", true);
                $("#BondNo").prop("readonly", true);
                $("#BondDate").prop("readonly", true);
                $("#BondValidity").prop("readonly", true);
                $("#AssessableValue").prop("readonly", true);
                $("#Dutyvalue").prop("readonly", true);
                $("#ENHANCEDAVOrDV").css("pointer-events", "none");
                $("#ENHANCEDAVOrDV").css("background-color", "#eee");
                $("#EnhanceAV").prop("readonly", true);
                $("#EnhancedDV").prop("readonly", true);
                $("#OOCNo").prop("readonly", true);
                $("#OOCDate").prop("readonly", true);
                $("#Volumevalue").prop("readonly", true);
                $("#IMO").prop("readonly", true);
                $("#UN").prop("readonly", true);
                $("#TEMP").prop("readonly", true);
                $("#RemarksForLot").prop("readonly", true);
                $("#SpaceCerificateIssuedTo").css("pointer-events", "none");
                $("#SpaceCerificateIssuedTo").css("background-color", "#eee");
                $("#CustomDetails").prop("readonly", true);
                $("#BULKSTATUS").css("pointer-events", "none");
                $("#BULKSTATUS").css("background-color", "#eee");
                $("#NOOFPKGS").prop("readonly", true);
                $("#NOOFPIECES").prop("readonly", true);
                $("#WEIGHT").prop("readonly", true);
                $("#ModelNOOFPKGS").val('');
                $("#ModelNOOFPIECES").val('');
                $("#ModelWEIGHT").val('');
            }
        }
    });


    $.ajax({
        url: GetRootPath + "trnDocument/GetBalanceDetails/" + ID,
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            data = data.split("|");
            if (data[0] == "1") {

                $("#EXCESSBOEPACKAGES").prop("readonly", true);
                $("#EXCESSBOEWEIGHT").prop("readonly", true);

            } else {

                $("#EXCESSBOEPACKAGES").prop("readonly", false);
                $("#EXCESSBOEWEIGHT").prop("readonly", false);

            }

            if (data[1] == "1") {
                /*$("#CPDate").prop("readonly", false);*/
                $("#GateInDateForLot").prop("readonly", false);
                $("#CPValidity").prop("readonly", false);
            }

            if (data[1] == "0") {
                $("#BondDate").prop("readonly", false);
                $("#BondValidity").prop("readonly", false);
            }


        }
    });
    
    var BalWt = $("#BalWt_" + ID).text();
    var ENHANCEDAVOrDV = $("#ENHANCEDAVOrDV").val();    
    if (parseFloat(BalWt) > 1 && (ENHANCEDAVOrDV == "YES" || ENHANCEDAVOrDV == "Yes" || ENHANCEDAVOrDV == "yes")) {
        $("#EnhanceAV").prop("readonly", false);
        $("#EnhancedDV").prop("readonly", false);
        $("#ENHANCEDAVOrDV").prop("disabled", false);
        //$("#ENHANCEDAVOrDV").css("pointer-events", "");
        //$("#ENHANCEDAVOrDV").css("background-color", "");
    }
    else {
        $("#EnhanceAV").prop("readonly", true);
        $("#EnhancedDV").prop("readonly", true);
        $("#ENHANCEDAVOrDV").prop("disabled", true);
        //$("#ENHANCEDAVOrDV").css("pointer-events", "none");
        //$("#ENHANCEDAVOrDV").css("background-color", "#eee");
    }
    
    var IsGateIn = $("#IsGateIn").text();
    if (parseInt(IsGateIn) > 0) {
        $("#SpaceCerificateIssuedTo").css("pointer-events", "none");
        $("#SpaceCerificateIssuedTo").css("background-color", "#eee");
    }
    else {
        $("#SpaceCerificateIssuedTo").css("pointer-events", "");
        $("#SpaceCerificateIssuedTo").css("background-color", "");
    }
    

}
function ClearLotDetails() {
    $("#LicenceNo").val('');
    $("#IGMNo").val('');
    $("#ItemNo").val('');
    $("#IGMDate").val('');
    $("#BOENo").val('');
    $("#BOEDate").val('');
    $("#BLNo").val('');
    $("#BLDate").val('');
    $("#OOCNo").val('');
    $("#OOCDate").val('');
    $("#EXCESSBOEPACKAGES").val('');
    $("#EXCESSBOEWEIGHT").val('');
    $("#CPStatus").val('Select');
    $("#CPNo").val('');
    $("#CPDate").val('');
    $("#CPValidity").val('');
    $("#CPValidUpTo").val('');
    $("#BondNo").val('');
    $("#BondDate").val('');
    $("#BondValidity").val('');
    $("#BondValidUpTo").val('');
    //$("#ConsolerName").val('');
    $("#ConsolerID").val('0');
    $("#txtIMPORTERNAME").val('');
    $("#txtIMPORTERID").val('0');
    $("#txtIMPORTERADDRESSID").val('0');
    $("#txtSubCHAID").val('0');
    $("#txtForwarderID").val('0');
    $("#SUBGROUPCOMMODITYID").val('0');
    $("#SUBPACKAGETYPEID").val('0');
    $("#COMMODITYIDSUB").val('0');
    $("#SUBCOMMODITYID").val('0');
    $("#txtIMPORTERADDRESSNAME").val('');
    $("#BULKSTATUS").val('');
    $("#txtSubCHA").val('');
    $("#txtForwarder").val('');
    $("#CARGODESC").val('');
    $("#SUBGROUPCOMMODITY").val('');
    $("#SUBPACKAGETYPE").val('');
    $("#COMMODITYNAMESUB").val('');
    $("#SUBCOMMODITYName").val('');
    $("#IMO").val('');
    $("#UN").val('');
    $("#TEMP").val('');
    $("#AssessableValue").val('');
    $("#Dutyvalue").val('');
    $("#Volumevalue").val('');
    $("#MARKSANDNOS").val('');
    $("#trnDocumentLotDetailsID").val('0');
    $(".redborder").removeClass("redborder");
    $("#txtIMPORTERNAME").val('');
    $("#txtIMPORTERID").val('0');
    $("#txtSubCHA").val('');
    $("#txtSubCHAID").val('0');
    $("#NatureofCargoName").val("");
    $("#NatureofCargoID").val("0");
    $("#ENHANCEDAVOrDV").val("Yes");
    $("#EnhanceAV").val("");
    $("#EnhancedDV").val("");
    $("#NatureofCargoName").prop("readonly", false);
    $("#NOOFPKGS").prop("readonly", false);
    $("#NOOFPIECES").prop("readonly", false);
    $("#NOOFPKGS").val("0");
    $("#NOOFPIECES").val("0");
    $("#WEIGHT").val("0");
    $("#ShiipingBillNo").prop("readonly", false);
    $("#ShipingBillDate").prop("readonly", false);
    $("#InvoiceNumber").prop("readonly", false);
    $("#InvoiceDate").prop("readonly", false);
    $("#txtIMPORTERNAME").prop("readonly", false);
    $("#txtIMPORTERADDRESSNAME").prop("readonly", false);
    $("#txtSubCHA").prop("readonly", false);
    $("#txtForwarder").prop("readonly", false);
    $("#CARGODESC").prop("readonly", false);
    $("#SUBGROUPCOMMODITY").prop("readonly", false);
    $("#SUBPACKAGETYPE").prop("readonly", false);
    $("#COMMODITYNAMESUB").prop("readonly", false);
    $("#SUBCOMMODITYName").prop("readonly", false);
    $("#NOOFPKGS").prop("readonly", false);
    $("#NOOFPIECES").prop("readonly", false);
    $("#WEIGHT").prop("readonly", false);
    $("#MARKSANDNOS").prop("readonly", false);
    $("#Volumevalue").prop("readonly", false);
    $("#RemarksForLot").prop("readonly", false);
    $("#RemarksForLot").val("");
    $("#BatchName").prop("readonly", false);
    $("#BULKSTATUS").css("pointer-events", "");
    $("#BULKSTATUS").css("background-color", "");
    $("#btnLotDetails").text("Add");
    $("#doaction").val();    
    if (doaction == "edit") {
        var IsInvoiceCreated = $("#IsInvoiceCreated").val();
        if (IsInvoiceCreated == "True" || IsInvoiceCreated == true || IsInvoiceCreated == "true") {
            document.getElementById("btnLotDetails").disabled = true;
        }
        else {
            document.getElementById("btnLotDetails").disabled = false;
        }
    }
    
    $("#TariffHead").val("");
    $("#TariffHeadID").val(0);
    $("#TariffHead").prop("readonly", false);
    $("#txtIMPORTERNAME").prop("readonly", false);
    $("#txtIMPORTERADDRESSNAME").prop("readonly", false);
    MakeReadonlyFields();
    $("#dvUploadExcel").css("display", "block");
    $("#tdAction").css("display", "block");
    $("#AddBOEItemss").css("display", "block");
    $("#EnhanceAV").prop("readonly", false);
    $("#EnhancedDV").prop("readonly", false);
    $("#ENHANCEDAVOrDV").prop("disabled", false);
    $("#EXCESSBOEPACKAGES").prop("readonly", false);
    $("#EXCESSBOEWEIGHT").prop("readonly", false);
    $("#IGMNo").prop("readonly", false);
    $("#IGMDate").prop("readonly", false);
    $("#BOENo").prop("readonly", false);
    $("#BOEDate").prop("readonly", false);
    $("#BLNo").prop("readonly", false);
    $("#BLDate").prop("readonly", false);
    $("#SpaceCerificateIssuedTo").css("pointer-events", "");
    $("#SpaceCerificateIssuedTo").css("background-color", "");
    $("#IMO").prop("readonly", false);
    $("#UN").prop("readonly", false);
    $("#TEMP").prop("readonly", false);
    ClearBOIDetails();

    $("#LicenceNo").prop("readonly", false);
    $("#CPStatus").css("pointer-events", "");
    $("#CPStatus").css("background-color", "#fff");
    $("#BondNo").prop("readonly", false);
    $("#BondDate").prop("readonly", false);
    $("#BondValidity").prop("readonly", false);
    $("#AssessableValue").prop("readonly", false);
    $("#Dutyvalue").prop("readonly", false);
    $("#ENHANCEDAVOrDV").css("pointer-events", "");
    $("#ENHANCEDAVOrDV").css("background-color", "#fff");
    $("#EnhanceAV").prop("readonly", false);
    $("#EnhancedDV").prop("readonly", false);
    $("#OOCNo").prop("readonly", false);
    $("#OOCDate").prop("readonly", false);
    $("#CustomDetails").prop("readonly", false);
    $("#SpaceCerificateIssuedTo").val("Select");
    SpaceCerificateIssuedToChange();

}


function ChangeStatus(status, MstrDocumentID, StatusRemarks, HoldAgency, HoldAgencyID) {
    $("#hdnactualStatus").val(status);
    if (status == "D") {
        $("#ddlStatus option[value='C']").remove();
        $("#ddlStatus option[value='P']").remove();
    }
    if (status == "C") {
        return;
    }
    if (status == "H") {
        $("#ddlStatus option[value='P']").remove();
        $("#ddlStatus option[value='D']").remove();
        $("#ddlStatus option[value='C']").remove();
    }
    if (MstrDocumentID != null && MstrDocumentID != "" && MstrDocumentID != undefined && MstrDocumentID != "0") {
        $("#ChangeStatus").modal("show");
        $("#ddlStatus").val(status);
        $("#txttrnDocumentID").val(MstrDocumentID);
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
    var result = true;
    var actualStatus = $("#hdnactualStatus").val();
    var status = $("#ddlStatus").val();
    $("#txtHoldAgencymessage").hide();
    $("#txtErrormessage").hide();
    if (actualStatus == "P" && status == "D") {
        if (confirm("Are you sure? once you click on Complete, you cannot change the status again!") == true) {
            result = GetStatus(status);
        }
        else {

            result = false;
        }
    }
    else {
        result = GetStatus(status);
    }
    return result;
}

function GetStatus(status) {
    if (!(status == "P" || status == "D")) {
        var Reason = $("#txtreason").val();
        if (!(Reason != null && Reason != undefined && Reason.trim() != "")) {
            $("#txtErrormessage").show();
            return false;
        }
        if ((status == "H")) {
            if (!($("#txtHoldAgency").val() != null && $("#txtHoldAgency").val() != undefined && $("#txtHoldAgency").val().trim() != "")) {
                $("#txtHoldAgencymessage").show();
                return false;
            }
            else {
                $("#txtHoldAgencymessage").hide();
            }
            if ($("#txtHoldAgency").val() != null && $("#txtHoldAgency").val() != "" && $("#txtHoldAgency").val() != undefined && $("#txtHoldAgencyID").val() == 0) {
                TosterAlert("error", "Please Select Valid Hold Agency.", "Required!");
                return false;
            }
        }
    }
    return true;
}


//function SearchwithSpaceCertificateNo() {
//    var SpaceCertificateID = $("#SpaceCertificateID").val();
//    if (SpaceCertificateID != null && SpaceCertificateID != undefined && SpaceCertificateID != "" && SpaceCertificateID != "0") {
//        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&SpaceCertificateID=" + SpaceCertificateID
//    }
//    else {
//        $("#SpaceCertificateNoDetail").addClass("redborder");
//        TosterAlert("error", "Please select NOC No", "Required!");
//    }
//}
function DocumentValidation(tab) {
    debugger;
    var Errormsg = "";

    changestepValue(tab);
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnDocument/validateModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $(".redborder").removeClass("redborder");
            if (data != "") {
                isvalid = false;
                Errormsg += data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");
                if (ErrorFields != null && ErrorFields.length > 0) {
                    for (var Q = 0; Q < ErrorFields.length; Q++) {
                        $("#spn_" + ErrorFields[Q]).text('');
                        $("#spn_" + ErrorFields[Q]).next().addClass("redborder");
                    }
                }
            }
        }
    });
    if (tab == 2) {        
        var TariffHeadID = $("#TariffHeadID").val();
        var TariffHead = $("#TariffHead").val();
        if ((TariffHead == null || TariffHead == undefined || TariffHead == "") && (TariffHeadID == null || TariffHeadID == undefined || TariffHeadID == "" || TariffHeadID == "0")) {            
            var IsPartyTariff = false;
            IsPartyTariff  = GetTarrifHeadByCustomerID();
            if (IsPartyTariff == false) {                
                //Errormsg += "You are going to add document for party wise tariff but party wise tariff is not available for the selected party, please add party wise tariff or select NOC Wise tariff.<br/>"                
                //if (confirm('You are going to add document for party wise tariff but party wise tariff is not available for the selected party, please add party wise tariff or select NOC Wise tariff.')) {
                //    isvalid= false;
                //} else {
                //    isvalid = false;
                //}
                //isvalid = false;
                //$('#TariffHead').addClass("redborder");
                //$('#TariffHead').prop("readonly", false);

                //$("#PartyWiseTariffMessage").text("You are going to add document for party wise tariff but party wise tariff is not available for the selected party, please add party wise tariff or select NOC Wise tariff.");
                //$("#PartyWiseTariffHeadpopup").modal("show");

                //isvalid = false;

            }
            IsPartyTariff = GetTarrifHeadByCustomerID();
            if (IsPartyTariff) {
                //if (confirm('You are going to add document for party wise tariff, Please confirm are you sure you want to continue with party wise tariff?')) {
                //    isvalid = true;
                //} else {
                //    isvalid = false;
                //}

                //var MessageNumber = $("#PartyMessageNumber").val();

                //if (MessageNumber == "0") {

                //    $("#PartyWiseTariffMessage").text("You are going to add document for party wise tariff, Please confirm are you sure you want to continue with party wise tariff?");
                //    $("#PartyWiseTariffHeadpopup").modal("show");

                //    $("#PartyMessageNumber").val(1);
                //    isvalid = false;
                //} else {
                //    isvalid = true;
                //}
            }
            //if (confirm('You not add noc wise tariff are you sure to continue')) {
            //    isvalid = true;
            //} else {
            //    isvalid = false;
            //}
        }
        
    }
    var DoValidDate = $("#DoValidDateForContainer").val();
    var DoNoForContainer = $("#DoNoForContainer").val();
    if (DoNoForContainer != "") {        
        if (DoValidDate == "" || DoValidDate == undefined || DoValidDate == null) {
            Errormsg = "Please Enter DoValid Date.";
            $("#DoValidDateForContainer").addClass("redborder");
            isvalid = false;
        }
    }    
    if (DoValidDate != "") { 
        if (DoNoForContainer == "" || DoNoForContainer == undefined || DoNoForContainer == null) {
            Errormsg = "Please Enter Do No.";
            $("#DoNoForContainer").addClass("redborder");
            isvalid = false;
        }

    }
    
    if (tab == 2) {    
        var Dutyval = $("#Dutyvalue").val();
        if ($("#Dutyvalue").val() == "0")
        {           
            if (confirm('You enter 0 Duty Value.')) {
                isvalid = true;
            } else {
                isvalid = false;
            }
        }
        
    }
    if (Errormsg != "") {
        TosterAlert("error", Errormsg, "Required!");
        isvalid = false;
    }
    return isvalid;
}
function ClearBOIDetails() {
    $("#ModelCargoName").val("");
    $("#ModelInvoiceNo").val("");
    $("#ModelInvoiceDate").val("");
    $("#savebtn").text("Add");
    $("#trnDocumentBoiItemsID").val("0");
}
function ClearUploadBOE() {
    $("#fileBOEItems").val("");
}
function AddBoiItem() {
    changestepValue(4);
    $.ajax({
        url: GetRootPath + "trnDocument/validateModel",
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
                return false;
            }
            else {
                $(".redborder").removeClass("redborder");
                $.ajax({
                    url: GetRootPath + "trnDocument/AddBoiItem",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        ClearBOIDetails();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillDocumentBoiGrid();
                        $("#ModelNOOFPKGS").val('');
                        $("#ModelNOOFPIECES").val('');
                        $("#ModelWEIGHT").val('');
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        }
    });
}
function UploadBoiItem() {
    var fileBOEItems = $("#fileBOEItems").val();
    if (fileBOEItems == null || fileBOEItems == undefined || fileBOEItems == "" || fileBOEItems == "0") {
        TosterAlert("error", "Please select BOE Items", "Required!");
    }
    else {
        var image_file = $('#fileBOEItems').get(0).files[0];
        var GUIID = $("#GuiID").val();
        var trnDocumentID = $("#trnDocumentID").val();
        var trnDocumentLotDetailsID = $("#trnDocumentLotDetailsID").val();
        var formData = new FormData();
        formData.append("image_file", image_file);
        formData.append("trnDocumentID", trnDocumentID);
        formData.append("GUIID", GUIID);
        formData.append("trnDocumentLotDetailsID", trnDocumentLotDetailsID);
        var xHttp = new XMLHttpRequest();
        xHttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.responseText != "") {
                    FillDocumentBoiGrid();
                    ClearUploadBOE();
                    var msgType = this.responseText.split("|")[0];
                    var msg = this.responseText.split("|")[1];
                    var msgTitle = this.responseText.split("|")[2];
                    TosterAlert(msgType, msg, msgTitle);
                }
            }
        };
        xHttp.open("POST", GetRootPath + "trnDocument/UploadBoiItem", true);
        xHttp.send(formData);
    }
}
function ImportCenterGridData() {
    var IsGenerateReportNumber = '@Model.IsGenerateReportNumber';
    var CenterDataExcel = $('#CenterDataExcel').get(0).files[0];
    var file = $('#CenterDataExcel').val();
    var IsValid = "true";
    var ErrStr = "";
    if (CenterDataExcel == null || CenterDataExcel == "" || CenterDataExcel == undefined) {
        $('#CenterDataExcel').addClass("border-danger");
        ErrStr += "Please Select Excel File.</br>";
        IsValid = "False";
    }
    if (CenterDataExcel != null && CenterDataExcel != "" || CenterDataExcel != undefined) {
        if (!(/\.(xlsx|xls|xlsm)$/i).test(file)) {
            $('#CenterDataExcel').addClass("border-danger");
            ErrStr += "Please upload valid excel file.</br>";
            IsValid = "False";
            $('#CenterDataExcel').val('');
        }
    }
    if (IsValid == "true") {
        var JobOrderNumber = '';
        var BagNo = '';
        var ID = '@ID';
        if (ID != null || ID != "") {
            JobOrderNumber = ID.split('-')[0];
            BagNo = ID.split('-')[1];
        }
        $('#CenterDataExcel').removeClass("border-danger");
        var ContentData = new FormData();
        ContentData.append("CenterDataExcel", CenterDataExcel);
        ContentData.append("JobOrderNumber", JobOrderNumber);
        ContentData.append("BagNo", BagNo);
        ContentData.append("IsGenerateReportNumber", IsGenerateReportNumber);
        var Hurl = '@string.Format("{0}GradingSheet/UpdateMDCenterImportData", @gblStrFullPath)'
        $.ajax({
            url: Hurl,
            type: "POST",
            data: ContentData,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.includes("_")) {
                    var part1 = data.split("_")[0];
                    var part2 = data.split("_")[1];
                    if (part1.includes("Success")) {
                        part1 = part1.substring(7, part1.length);
                        if (part1 != null && part1 != "") {
                            ShowMessage("success", part1);
                            FillMDCenterGridData(JobOrderNumber, BagNo);
                        }
                        $('#CenterDataExcel').val("");
                    }
                    if (part2.includes("error")) {
                        part2 = part2.substring(5, part2.length);
                        if (part2 != null && part2 != "") {
                            ShowMessage("error", part2);
                        }
                        $('#CenterDataExcel').val("");
                    }
                }
                else {
                    if (data != "") {
                        ShowMessage("error", data);
                        $('#CenterDataExcel').val("");
                    }
                }
            }
        });
    }
    else {
        ShowMessage("error", ErrStr);
    }
}
function FillDocumentBoiGrid() {
    debugger;
    var IsTruckWoDone = "";
    $("#DocumentBOIItems").html("");
    var URL = "";
    if ($("#btnLotDetails").text() == "Update") {
        URL = GetRootPath + "trnDocument/FillDocumentBoiGrid?IsEditable=false";
        IsTruckWoDone = $("#IsTruckWoDone").val();
        if (IsTruckWoDone == "True" || IsTruckWoDone == "true" || IsTruckWoDone == true) {
            $("#AddBOEItemss").show();
        }
        else {
            $("#AddBOEItemss").hide();
        }

    }
    else {
        URL = GetRootPath + "trnDocument/FillDocumentBoiGrid?IsEditable=true";
    }
    $.ajax({
        url: URL,
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                debugger;
                $("#DocumentBOIItems").html(data);
                if ($("#btnLotDetails").text() == "Update") {
                    if (IsTruckWoDone == "True" || IsTruckWoDone == "true" || IsTruckWoDone == true) {
                        $("#dvUploadExcel").css("display", "block");
                        $("#tdAction").css("display", "block");
                    }
                    else {
                        $("#dvUploadExcel").css("display", "none");
                        $("#tdAction").css("display", "none");
                    }

                }
                else {
                    $("#dvUploadExcel").css("display", "block");
                    $("#tdAction").css("display", "block");
                    $("#AddBOEItemss").css("display", "block");
                }
                ClearBOIDetails();
            }
        }
    });

    $.ajax({
        url: GetRootPath + "trnDocument/GetUsedLotForContainer/" + $("#trnDocumentLotDetailsID").val(),
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            data = data.split("|")

            if (data[0] != 0) {
                $("#AddBOEItemss").hide();
                $("#dvUploadExcel").css("display", "none");

            } else {
                
                $("#ModelNOOFPKGS").val('');
                $("#ModelNOOFPIECES").val('');
                $("#ModelWEIGHT").val('');
                $("#AddBOEItemss").css("display", "block");
                $("#dvUploadExcel").css("display", "block");
            }

            if (data[1] != 0) {
                $("#AddBOEItemss").hide();
                $("#dvUploadExcel").css("display", "none");
            }
        }
    });
}
function DeleteDocumentBoiItems(ID) {
    $.ajax({
        url: GetRootPath + "trnDocument/deletetrnDocumentBoiItems/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillDocumentBoiGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}
function EditBoiItems(ID) {
    $("#ModelSRNo").val($("#SerialNo_" + ID).text());
    $("#ModelInvoiceNo").val($("#InvoiceNo_" + ID).text());
    $("#ModelInvoiceDate").val($("#InvoiceDate_" + ID).text());
    $("#ModelCargoName").val($("#CargoName_" + ID).text());
    $("#ModelNOOFPKGS").val($("#NoOfPackages_" + ID).text());
    $("#ModelNOOFPIECES").val($("#NoOfPieces_" + ID).text());
    $("#ModelWEIGHT").val($("#Weight_" + ID).text());
    $("#trnDocumentBoiItemsID").val(ID);
    $("#savebtn").text("Save");
}
function DeleteContainerWeighmentDetails(ID) {
    $.ajax({
        url: GetRootPath + "trnDocument/DeleteContainerWeighmentDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillContainerWeighmentDetailsGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}
function addContainerDetailsID(ID) {
    $("#trnSpaceCertificateContainerID").val(ID);
    DisplayWeighment('WEIGHMENTREQUIRED', 'dvInActiveReason', 'dvOther');
    DisplaySSR('WEIGHMENTPAYMENTMODE', 'dvisshow');
    FillContainerWeighmentDetailsGrid();
}
function DisplayWeighment(CheckBoxID, InactivePanalID, Other) {
    var IsActive = $("#" + CheckBoxID).prop("checked");
    if (IsActive != undefined) {
        if (IsActive == false) {
            $("#" + InactivePanalID).show();
            $("input[name=" + CheckBoxID + "]").iCheck('uncheck');
        }
        else {
            $("input[name=" + CheckBoxID + "]").iCheck('check');
            $("#" + InactivePanalID).hide();
            $("#NONWEIGHMENTREASON").val('');
            $("." + Other).show();
        }
    }
    //  setTimeout(function () {
    $("#" + CheckBoxID).on('ifChanged', function (event) {
        if (event.target.checked == true) {
            $("#" + InactivePanalID).hide();
            $("." + Other).show();
            DisplaySSR('WEIGHMENTPAYMENTMODE', 'dvisshow');
            $("#NONWEIGHMENTREASON").val('');
        }
        else {
            $("#" + InactivePanalID).show();
            $("." + Other).hide();
            $("#NONWEIGHMENTREASON").val('');
            $("#MANUALSSRNO").val('');
            $("#WEIGHMENTPAYMENTMODE").val("CASH");
        }
    });
    //}, 100);
}
function DisplaySSR(FieldID, divID) {
    var Field = $("#" + FieldID).val();
    if (Field == "SSR") {
        $("." + divID).show();
    }
    else {
        $("." + divID).hide();
        $("#MANUALSSRNO").val('');
    }
}
function ClearContainerWeighmentDetails() {
    $("#WEIGHMENTREQUIRED").iCheck("check");
    $("#NONWEIGHMENTREASON").val('');
    $("#WEIGHMENTPAYMENTMODE").val('CASH');
    $("#MANUALSSRNO").val('');
    $("#txtRemarks").val('');
    DisplayWeighment('WEIGHMENTREQUIRED', 'dvInActiveReason', 'dvOther');
    DisplaySSR('WEIGHMENTPAYMENTMODE', 'dvisshow');
    if ($("#trnContainerWeighmentDetailsID").val() > 0) {
        FillContainerWeighmentDetailsGrid();
    }
    $("#trnContainerWeighmentDetailsID").val('0');
}
function EditContainerWeighmentDetails(ID) {
    if ($("#WeighmentRequired_" + ID).text() == "true" || $("#WeighmentRequired_" + ID).text() == "True") {
        $("#WEIGHMENTREQUIRED").iCheck("check");
    }
    else {
        $("#WEIGHMENTREQUIRED").iCheck("uncheck");
    }
    if ($("#WeighmentPaymentMode_" + ID).text() == "") {
        $("#WEIGHMENTPAYMENTMODE").val('CASH');
    }
    else {
        $("#WEIGHMENTPAYMENTMODE").val($("#WeighmentPaymentMode_" + ID).text());
    }
    $("#NONWEIGHMENTREASON").val($("#NonWeighmentReason_" + ID).text());
    $("#MANUALSSRNO").val($("#ManualSSRNo_" + ID).text());
    $("#txtRemarks").val($("#Remarks_" + ID).text());
    $("#trnContainerWeighmentDetailsID").val(ID);
    $("#trnDocumentContainerID").val($("#trnDocumentContainerID_" + ID).text());
    $("#trnSpaceCertificateContainerID").val($("#trnSpaceCertificateContainerID_" + ID).text());
    DisplayWeighment('WEIGHMENTREQUIRED', 'dvInActiveReason', 'dvOther');
    DisplaySSR('WEIGHMENTPAYMENTMODE', 'dvisshow');
    $('.hideonce').show();
}
function AddContainerWeighmentDetails() {
    $.ajax({
        url: GetRootPath + "trnDocument/validateSubModel",
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
                    url: GetRootPath + "trnDocument/AddContainerWeighmentDetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        ClearContainerWeighmentDetails();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillContainerWeighmentDetailsGrid();
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        }
    });
}
function FillContainerWeighmentDetailsGrid() {
    $("#ContainerWeighmentDetails").html("");
    $.ajax({
        url: GetRootPath + "trnDocument/FillContainerWeighmentDetailsGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ContainerWeighmentDetails").html(data);
                ClearContainerWeighmentDetails();
                filldatatable("Container");
            }
        }
    });
}
$("#BULKSTATUS").change(function (event) {
    if ($("#BULKSTATUS").val() == "BULK") {
        $("#NOOFPKGS").prop("readonly", true);
        $("#NOOFPIECES").prop("readonly", true);
        $("#NOOFPKGS").val("0");
        $("#NOOFPIECES").val("0");
    }
    else {
        $("#NOOFPKGS").prop("readonly", false);
        $("#NOOFPIECES").prop("readonly", false);
        $("#NOOFPKGS").val("");
        $("#NOOFPIECES").val("");
    }
    $("#WEIGHT").val("");
});
function CargoTypeChange() {
    var CargoCode = "";
    $.ajax({
        url: GetRootPath + "trnDocument/GetCargoCode/" + $("#NatureofCargoIDForContainer").val(),
        type: "GET",
        dataType: "text",
        async: false,
        success: function (data) {
            CargoCode = data;
        }
    })
    if (CargoCode == HAZCode) {
        $("#TEMPForContainer").prop("readonly", true);
        $("#TEMPForContainer").val("0");
        $("#IMOForContainer").prop("readonly", false);
        $("#UNForContainer").prop("readonly", false);
        $("#IMOForContainer").val("");
        $("#UNForContainer").val("");
    }
    else if (CargoCode == ReeferCode) {
        $("#IMOForContainer").prop("readonly", true);
        $("#UNForContainer").prop("readonly", true);
        $("#IMOForContainer").val("0");
        $("#UNForContainer").val("0");
        $("#TEMPForContainer").prop("readonly", false);
        $("#TEMPForContainer").val("");
    }
    else if (CargoCode == GeneralCode || CargoCode == ODCCode) {
        $("#IMOForContainer").prop("readonly", true);
        $("#UNForContainer").prop("readonly", true);
        $("#IMOForContainer").val("0");
        $("#UNForContainer").val("0");
        $("#TEMPForContainer").prop("readonly", true);
        $("#TEMPForContainer").val("0");
    }
    else {
        $("#IMOForContainer").prop("readonly", false);
        $("#UNForContainer").prop("readonly", false);
        $("#TEMPForContainer").prop("readonly", false);
        $("#IMOForContainer").val("");
        $("#UNForContainer").val("");
        $("#TEMPForContainer").val("");
    }
}
function EditDocumentContainerdetails(ID) {

    CargoTypeChange();

    if ($("#IsBulkForContainer_" + ID).text() == "Yes") {
        $('#IsBulkForContainer').iCheck('check');
    }
    else {
        $('#IsBulkForContainer').iCheck('uncheck');
    }
    $("#ContainerNumberForContainer").val($("#ContainerNumberForContainer_" + ID).text());
    $("#ISOCodeForContainer").val($("#ISOCodeForContainer_" + ID).text());
    $("#ISOCodeSizesForContainer").text($("#ISOCodeSizeForContainer_" + ID).text());
    $("#ISOCodeTypesForContainer").text($("#ISOCodeTypeForContainer_" + ID).text());
    $("#ISOCodeSizeForContainer").val($("#ISOCodeSizeForContainer_" + ID).text());
    $("#ISOCodeTypeForContainer").val($("#ISOCodeTypeForContainer_" + ID).text());
    $("#NatureofCargoNameForContainer").val($("#NatureofCargoNameForContainer_" + ID).text());
    $("#PackageTypeForContainer").val($("#PackageTypeForContainer_" + ID).text());
    $("#GroupCommodityForContainer").val($("#GroupCommodityForContainer_" + ID).text());
    $("#BillCommodityForContainer").val($("#BillCommodityForContainer_" + ID).text());
    $("#SubCommodityNameForContainer").val($("#SubCommodityNameForContainer_" + ID).text());
    $("#NoOfPackageForContainer").val($("#NoOfPackageForContainer_" + ID).text());
    $("#ActualNoOfPackageForContainer").val($("#NoOfPackageForContainer_" + ID).text());
    $("#WeightForContainer").val($("#WeightForContainer_" + ID).text());
    $("#ActualWeightForContainer").val($("#WeightForContainer_" + ID).text());
    $("#NoOfPiecesForContainer").val($("#NoOfPiecesForContainer_" + ID).text());
    $("#ActualNoOfPiecesForContainer").val($("#NoOfPiecesForContainer_" + ID).text());
    $("#DeliveryModeForContainer").val($("#DeliveryModeForContainer_" + ID).text());
    $("#InTypeForContainer").val($("#InTypeForContainer_" + ID).text());
    $("#IMOForContainer").val($("#IMOForContainer_" + ID).text());
    $("#UNForContainer").val($("#UNForContainer_" + ID).text());
    $("#TEMPForContainer").val($("#TEMPForContainer_" + ID).text());
    $("#DoNoForContainer").val($("#DoNoForContainer_" + ID).text());
    $("#DoValidDateForContainer").val($("#DoValidDateForContainer_" + ID).text());
    $("#SealNo").val($("#SealNo_" + ID).text());

    $("#ISOCodeIDForContainer").val($("#ISOCodeIDForContainer_" + ID).text());
    $("#NatureofCargoIDForContainer").val($("#NatureofCargoIDForContainer_" + ID).text());
    $("#PackageTypeIDForContainer").val($("#PackageTypeIDForContainer_" + ID).text());
    $("#GroupCommodityIDForContainer").val($("#GroupCommodityIDForContainer_" + ID).text());
    $("#BillCommodityIDForContainer").val($("#BillCommodityIDForContainer_" + ID).text());
    $("#SubCommodityIDForContainer").val($("#SubCommodityIDForContainer_" + ID).text());
    $("#trnDocumentContainerID").val(ID);
    $("#ContainerLevel").val($("#ContlevelForContainer_" + ID).text());
    $("#LotOfCont").val($("#LotnoForContainer_" + ID).text());
    $("#LotID").val($("#LotIDForContainer_" + ID).text())
    $("#DeclaredSeal").val($("#DeclaredSeal_" + ID).text())
    $("#PhysicalSeal").val($("#PhysicalSeal_" + ID).text())
    var dlotid = 0;
    dlotid = $("#trnDocumentContainerForLotID_" + ID).text();
    if (dlotid == "" || dlotid == undefined || dlotid == null) {
        $("#trnDocumentContainerForLotID").val("0");
    }
    else {
        $("#trnDocumentContainerForLotID").val($("#trnDocumentContainerForLotID_" + ID).text());
    }

    window.scroll(0, 0);
    var elementss = document.getElementById("dvDocumentContainerDetails");
    var rect = elementss.getBoundingClientRect();
    window.scroll(rect.x, rect.y);



    //$("#dvDocumentContainerDetails").Scroll();
    var Edit = true;
    changedeleverymode(Edit);
    changeContainerLevel();
    var contLevel = $("#ContainerLevel").val();
    if (contLevel == "LCL") {
        FillContainerLotGrid();
    }  
    var DoNo = $("#DoNoForContainer").val();
    var IsContOut = $("#IsContOut_" + ID).text()
    var IsInvoiceCreated = $("#IsInvoiceCreated").val();
    if (IsInvoiceCreated == "True" || IsInvoiceCreated == true || IsInvoiceCreated == "true") {        
        if (IsContOut == "0") {

            $('#ContainerSave').removeAttr('disabled');

            $("#ContainerNumberForContainer").prop("readonly", true);
            $("#ISOCodeForContainer").prop("readonly", true);
            $("#ISOCodeSizesForContainer").prop("readonly", true);
            $("#ISOCodeTypesForContainer").prop("readonly", true);
            $("#ISOCodeSizeForContainer").prop("readonly", true);
            $("#ISOCodeTypeForContainer").prop("readonly", true);
            $("#NatureofCargoNameForContainer").prop("readonly", true);
            $("#PackageTypeForContainer").prop("readonly", true);
            $("#GroupCommodityForContainer").prop("readonly", true);
            $("#BillCommodityForContainer").prop("readonly", true);
            $("#SubCommodityNameForContainer").prop("readonly", true);
            $("#NoOfPackageForContainer").prop("readonly", true);
            $("#ActualNoOfPackageForContainer").prop("readonly", true);
            $("#WeightForContainer").prop("readonly", true);
            $("#ActualWeightForContainer").prop("readonly", true);
            $("#NoOfPiecesForContainer").prop("readonly", true);
            $("#ActualNoOfPiecesForContainer").prop("readonly", true);

            $("#IMOForContainer").prop("readonly", true);
            $("#UNForContainer").prop("readonly", true);
            $("#TEMPForContainer").prop("readonly", true);
            //$("#DoNoForContainer").prop("readonly", true);
            //$("#DoValidDateForContainer").prop("readonly", true);
            $("#SealNo").prop("readonly", true);
            $('#IsBulkForContainer').parent().css('pointer-events', 'none');
            $('label[for="IsBulkForContainer"]').css('pointer-events', 'none');
            $("#DeliveryModeForContainer").css("pointer-events", "none");
            $("#DeliveryModeForContainer").css("background-color", "#eee");
            $("#ContainerLevel").css("pointer-events", "none");
            $("#ContainerLevel").css("background-color", "#eee");
            $("#InTypeForContainer").css("pointer-events", "none");
            $("#InTypeForContainer").css("background-color", "#eee");
            $("#ISOCodeIDForContainer").prop("readonly", true);
            $("#NatureofCargoIDForContainer").prop("readonly", true);
            $("#PackageTypeIDForContainer").prop("readonly", true);
            $("#GroupCommodityIDForContainer").prop("readonly", true);
            $("#BillCommodityIDForContainer").prop("readonly", true);
            $("#SubCommodityIDForContainer").prop("readonly", true);
            $("#LotOfCont").prop("readonly", true);
            $("#DeclaredSeal").prop("readonly", true);
            $("#PhysicalSeal").prop("readonly", true);
            DisableDropDownAtEdit();

        }
    }

}
function DisableDropDownAtEdit() {
    $('#InTypeForContainer').on('keydown keypress keyup', function (e) {        
        var keyCode = e.keyCode || e.which;
        if (keyCode === 38 || keyCode === 40 || keyCode == 37 || keyCode == 39) {
            e.preventDefault();
            return false;
        }
        return true;
    });
    $('#ContainerLevel').on('keydown keypress keyup', function (e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 38 || keyCode === 40 || keyCode == 37 || keyCode == 39) {
            e.preventDefault();
            return false;
        }
        return true;
    });
    $('#DeliveryModeForContainer').on('keydown keypress keyup', function (e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 38 || keyCode === 40 || keyCode == 37 || keyCode == 39) {
            e.preventDefault();
            return false;
        }
        return true;
    });
}
function ClearDocumentContainerdetails() {
    $("#ContainerNumberForContainer").val("");
    $("#ISOCodeForContainer").val("");
    $("#ISOCodeSizesForContainer").text("");
    $("#ISOCodeTypesForContainer").text("");
    $("#ISOCodeSizeForContainer").val("");
    $("#ISOCodeTypeForContainer").val("");
    $("#NatureofCargoNameForContainer").val("");
    $("#PackageTypeForContainer").val("");
    $("#CommodityGroupNameForContainer").val("");
    $("#GroupCommodityForContainer").val("");
    $("#BillCommodityForContainer").val("");
    $("#SubCommodityNameForContainer").val("");
    $('#IsBulkForContainer').iCheck('uncheck');
    $("#NoOfPackageForContainer").val("");
    $("#WeightForContainer").val("");
    $("#NoOfPiecesForContainer").val("");
    $("#ISOCodeIDForContainer").val("0");
    $("#NatureofCargoIDForContainer").val("0");
    $("#PackageTypeIDForContainer").val("0");
    $("#CommodityGroupIDForContainer").val("0");
    $("#GroupCommodityIDForContainer").val("0");
    $("#BillCommodityIDForContainer").val("0");
    $("#SubCommodityIDForContainer").val("0");
    $("#trnDocumentContainerID").val("0");
    $("#DeliveryModeForContainer").val("DESTUFF");
    $("#InTypeForContainer").val("CONTAINER");
    $("#IMOForContainer").val("");
    $("#UNForContainer").val("");
    $("#TEMPForContainer").val("");
    $("#ActualNoOfPiecesForContainer").val("0");
    $("#ActualWeightForContainer").val("0");
    $("#ActualNoOfPackageForContainer").val("0");
    $("#ContainerLevel").val("");
    $("#LotOfCont").val("");
    $("#LotID").val("0");
    $("#trnDocumentContainerForLotID").val("0");
    $("#DoNoForContainer").val("")
    $("#DoValidDateForContainer").val("")
    $("#SealNo").val("")
    $("#PhysicalSeal").val("")
    $("#DeclaredSeal").val("")
    CargoTypeChange();
    changedeleverymode();
    changeContainerLevel();
    ClearContainerLot();

}
function DeleteDocumentContainerDetails(ID) {  
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "trnDocument/DeleteDocumentContainerDetails/" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                filldatatable("Container");                
                TosterAlert("success", " Container Detail deleted Successfully! ", "success!");
            }
        });
    }
}
function filldatatable(type) {
    $.ajax({
        url: GetRootPath + "trnDocument/FillGrid/?type=" + type,
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            if (type == "Container") {
                ClearDocumentContainerdetails();
                $("#tblContainer").html(data);
                $("#TotalNoOfPackageForContainer").val($("#GridTotalPKGS").val());
                $("#TotalNoOfPiecesForContainer").val($("#GridTotalPieces").val());
                $("#TotalWeightForContainer").val($("#GridTotalWeight").val());
                GetContSpace();
            }
            else {
                $("#TotalNoOfPackageForContainer").val("0");
                $("#TotalNoOfPiecesForContainer").val("0");
                $("#TotalWeightForContainer").val("0");
            }
        }
    });
}
function Container() {
    //  setTimeout(function () {
    $("#IsBulkForContainer").on('ifChanged', function (event) {
        if (event.target.checked == true) {
            $("#NoOfPackageForContainer").prop("readonly", true);
            $("#NoOfPackageForContainer").val("0");
        }
        else {
            $("#NoOfPackageForContainer").prop("readonly", false);
            $("#NoOfPackageForContainer").val("");
        }
    });
    $("#IsBulkForCargo").on('ifChanged', function (event) {
        if (event.target.checked == true) {
            $("#NoOfPackageForCargo").prop("readonly", true);
            $("#NoOfPieceForCargo").prop("readonly", true);
            $("#NoOfPackageForCargo").val("0");
            $("#NoOfPieceForCargo").val("0");
        }
        else {
            $("#NoOfPackageForCargo").prop("readonly", false);
            $("#NoOfPieceForCargo").prop("readonly", false);
            $("#NoOfPackageForCargo").val("0");
            $("#NoOfPieceForCargo").val("0");
        }
    });
    //}, 1000);
}
function FillISOCodeDetails() {
    if ($("#ISOCodeIDForContainer").val() != "" && $("#ISOCodeIDForContainer").val() != undefined && $("#ISOCodeIDForContainer").val() != null) {
        $.ajax({
            url: GetRootPath + "trnDocument/GetISOCodeSizeAndType/" + $("#ISOCodeIDForContainer").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#ISOCodeTypeForContainer").val(data.split("|")[0]);
                    $("#ISOCodeSizeForContainer").val(data.split("|")[1]);
                    $("#ISOCodeTypesForContainer").text(data.split("|")[0]);
                    $("#ISOCodeSizesForContainer").text(data.split("|")[1]);
                }
                else {
                    $("#ISOCodeSizeForContainer").val("");
                    $("#ISOCodeTypeForContainer").val("");
                    $("#ISOCodeSizesForContainer").text("");
                    $("#ISOCodeTypesForContainer").text("");
                }
            }
        })
    }
    else {
        $("#ISOCodeSizeForContainer").val("");
        $("#ISOCodeTypeForContainer").val("");
        $("#ISOCodeSizesForContainer").text("");
        $("#ISOCodeTypesForContainer").text("");
    }
}
function AddDocumentContainerdetails() {
    $.ajax({
        url: GetRootPath + "trnDocument/validateDocumentContainerModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
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
                    TosterAlert("error", Errormsg, "Required!");
                }
            }
            else {
                $.ajax({
                    url: GetRootPath + "trnDocument/AddDocumentContainerdetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        if (data.split("|")[0] == "success") {
                            ClearDocumentContainerdetails();
                            filldatatable("Container");
                            GetContSpace();
                        }
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        }
    });
}
function GetContSpace() {    
    $.ajax({
        url: GetRootPath + "trnDocument/GetContSpace",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != null && data != undefined && data != "") {
                $("#TotalArea").val(data.split('|')[0]);
                $("#AreaRequired").val(data.split('|')[1]);
            }            
        }
    });
}
function addContainerDetailsID(ID) {
    $("#ModeltrnDocumentContainerID").val(ID);
    DisplayWeighment('WEIGHMENTREQUIRED', 'dvInActiveReason', 'dvOther');
    DisplaySSR('WEIGHMENTPAYMENTMODE', 'dvisshow');
    FillContainerWeighmentDetailsGrid();
    HideIfView();
}
function AddContainerWeighmentDetails() {
    $.ajax({
        url: GetRootPath + "trnDocument/validateSubModel",
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
                    url: GetRootPath + "trnDocument/AddContainerWeighmentDetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        ClearContainerWeighmentDetails();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillContainerWeighmentDetailsGrid();
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        }
    });
}
function ClearContainerWeighmentDetails() {
    $("#WEIGHMENTREQUIRED").iCheck("check");
    $("#NONWEIGHMENTREASON").val('');
    $("#WEIGHMENTPAYMENTMODE").val('CASH');
    $("#MANUALSSRNO").val('');
    $("#txtRemarks").val('');
    DisplayWeighment('WEIGHMENTREQUIRED', 'dvInActiveReason', 'dvOther');
    DisplaySSR('WEIGHMENTPAYMENTMODE', 'dvisshow');
    if ($("#trnContainerWeighmentDetailsID").val() > 0) {
        FillContainerWeighmentDetailsGrid();
    }
    $("#trnContainerWeighmentDetailsID").val('0');
}
function EditContainerWeighmentDetails(ID) {
    if ($("#WeighmentRequired_" + ID).text() == "true" || $("#WeighmentRequired_" + ID).text() == "True") {
        $("#WEIGHMENTREQUIRED").iCheck("check");
    }
    else {
        $("#WEIGHMENTREQUIRED").iCheck("uncheck");
    }
    if ($("#WeighmentPaymentMode_" + ID).text() == "") {
        $("#WEIGHMENTPAYMENTMODE").val('CASH');
    }
    else {
        $("#WEIGHMENTPAYMENTMODE").val($("#WeighmentPaymentMode_" + ID).text());
    }
    $("#NONWEIGHMENTREASON").val($("#NonWeighmentReason_" + ID).text());
    $("#MANUALSSRNO").val($("#ManualSSRNo_" + ID).text());
    $("#txtRemarks").val($("#Remarks_" + ID).text());
    $("#trnContainerWeighmentDetailsID").val(ID);
    DisplayWeighment('WEIGHMENTREQUIRED', 'dvInActiveReason', 'dvOther');
    DisplaySSR('WEIGHMENTPAYMENTMODE', 'dvisshow');
    $('.hideonce').show();
}
function DeleteContainerWeighmentDetails(ID) {
    $.ajax({
        url: GetRootPath + "trnDocument/DeleteContainerWeighmentDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillContainerWeighmentDetailsGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}

function ChangesBasedOnCargoType() {
    var CargoCode = "";
    $.ajax({
        url: GetRootPath + "trnDocument/GetCargoCode/" + $("#NatureofCargoID").val(),
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
        $("#IMO").prop("readonly", false);
        $("#UN").prop("readonly", false);
        $("#IMO").val("");
        $("#UN").val("");
    }
    else if (CargoCode == ReeferCode) {
        $("#IMO").prop("readonly", true);
        $("#UN").prop("readonly", true);
        $("#IMO").val("0");
        $("#UN").val("0");
        $("#TEMP").prop("readonly", false);
        $("#TEMP").val("");
    }
    else if (CargoCode == GeneralCode || CargoCode == ODCCode) {
        $("#IMO").prop("readonly", true);
        $("#UN").prop("readonly", true);
        $("#IMO").val("0");
        $("#UN").val("0");
        $("#TEMP").prop("readonly", true);
        $("#TEMP").val("0");
    }
    else {
        $("#IMO").prop("readonly", false);
        $("#UN").prop("readonly", false);
        $("#TEMP").prop("readonly", false);
        $("#IMO").val("");
        $("#UN").val("");
        $("#TEMP").val("");
    }
}
function MakeReadonlyFields() {
    if ($("input[name=GateInType]:checked").val() == "CONTAINER") {
        $("#NatureofCargoName").prop("readonly", true);
        $("#COMMODITYNAMESUB").prop("readonly", true);
    }
    else {
        $("#NatureofCargoName").prop("readonly", false);
        $("#COMMODITYNAMESUB").prop("readonly", false);
    }
}

function deletethecontainerrecords() {
    var trnDocumentID = $("#trnDocumentID").val();

    if (trnDocumentID > 0) {

        $.ajax({
            url: GetRootPath + "trnDocument/DeleteAllContainer/" + trnDocumentID,
            type: "GET",
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != null) {
                    TosterAlert(data.split("|")[1], data.split("|")[0], data.split("|")[2]);
                }
            }
        })
    }
}

$('#InTypeForContainer').on('keydown keypress keyup', function (e) {
    var keyCode = e.keyCode || e.which;
    if ($("#DeliveryModeForContainer").val() == "LOADED") {
        if (keyCode === 38 || keyCode === 40 || keyCode == 37 || keyCode == 39) {
            e.preventDefault();
            return false;
        }
    }
    return true;
});

function changedeleverymode(Edit = false) {
    if (!Edit) {
        $("#InTypeForContainer").val("CONTAINER");
    }
    if ($("#DeliveryModeForContainer").val() == "LOADED") {
        $("#BillCommodityForContainer").prop("readonly", true);
        $("#InTypeForContainer").val("CONTAINER");
        $("#InTypeForContainer").css("pointer-events", "none");
    }
    else {
        $("#InTypeForContainer").css("pointer-events", "");
        $("#BillCommodityForContainer").prop("readonly", false);
    }
}
function ClearContainerLot() {

    $("#ModelContPakg").val("");
    $("#ModelContPieces").val("");
    $("#ModelContWeight").val("");
    $("#ModelLotID").val("0");
    $("#ModelLotNo").val("");
    $("#Contsavebtn").text("Add");
    $("#trnDocumentContainerForLotID").val("0");
}
function AddContainerLot() {
    $.ajax({
        url: GetRootPath + "trnDocument/validateContainerLotDetail",
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
                return false;
            }
            else {
                $(".redborder").removeClass("redborder");
                $.ajax({
                    url: GetRootPath + "trnDocument/AddContainerLot",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {

                        var RequiredFill = data.split("|")[3];

                        if (RequiredFill != "") {
                            $("#ModelLotNo").addClass("redborder");
                        } else {
                            $("#ModelLotNo").removeClass("redborder");
                        }

                        ClearContainerLot();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];

                        FillContainerLotGrid();
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        }
    });
}
function FillContainerLotGrid() {
    $("#ContainerLotItems").html("");

    URL = GetRootPath + "trnDocument/FillContainerLotGrid";

    $.ajax({
        url: URL,
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ContainerLotItems").html(data);
                ClearContainerLot();
                $("#NoOfPackageForContainer").val($("#TotalContNoOfPKG").val());
                $("#hdnTtlNoOfPackage").val($("#TotalContNoOfPKG").val());
                $("#NoOfPiecesForContainer").val($("#TotalContNoOfPieces").val());
                $("#hdnTtlNoOfPieces").val($("#TotalContNoOfPieces").val());
                $("#WeightForContainer").val($("#TotalContWeight").val());
                $("#hdnTtlWeight").val($("#TotalContWeight").val());
            }
        }
    });
}
function EditConatinerLotItem(ID) {
    $("#ModelLotNo").val($("#LotNO_" + ID).text());
    $("#ModelLotID").val($("#LotID_" + ID).text());
    $("#ModelContPakg").val($("#NoOfPackages_" + ID).text());
    $("#ModelContPieces").val($("#NoOfPieces_" + ID).text());
    $("#ModelContWeight").val($("#Weight_" + ID).text());
    $("#trnDocumentContainerForLotID").val(ID);
    $("#Contsavebtn").text("Save");
    var GuiID = $("#GuiID").val();
    Autocompletebox("ModelLotNo", "ModelLotID", "trnDocument", "GetLotForConatiner/" + $("#trnDocumentID").val() + "?GuiID=" + GuiID + "&trnDocumentContainerForLotID=" + $("#trnDocumentContainerForLotID").val());
}
function DeleteConatinerLotItem(ID) {
    $.ajax({
        url: GetRootPath + "trnDocument/DeleteFromConatinerLotItem/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillContainerLotGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}
function GetLotBOIITEM(ID, trnDocumentID) {
    $.ajax({
        url: GetRootPath + "trnDocument/GetLotBOIITEM/" + ID + "?trnDocumentID=" + trnDocumentID,
        type: "GET",
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#BOEITEMS").html(data);
            }
            else {
                $("#BOEITEMS").html("");

            }
        }
    })
}
function GetContLotDetl(ID, trnDocumentID) {
    $.ajax({
        url: GetRootPath + "trnDocument/GetContLotDetl/" + ID + "?trnDocumentID=" + trnDocumentID,
        type: "GET",
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ContainerLotDeatils").html(data);
            }
            else {
                $("#ContainerLotDeatils").html("");

            }
        }
    })
}
function GetItemNoByIGMno()
{
    var IGMNo = $("#IGMNo").val();
    var ItemNo=$("#ItemNo").val();
    if (IGMNo != null && IGMNo != "" && IGMNo != undefined) {

    $.ajax({
        url: GetRootPath + "trnDocument/GetItemNoByIGMno?IGMNo=" + IGMNo,
        type: "GET",
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {                
                if (ItemNo == "" || ItemNo == undefined || ItemNo == null) {
                    $("#ItemNo").val("");
                    $("#ItemNo").val(data);
                }                
            }
            else {
                $("#ItemNo").val("");

            }
        }
    });
    }
}
function CheckCPStatus() {
    var CPStatus = $("#CPStatus").val();
    if (CPStatus == "Yes") {
        $("#CPNo").prop("readonly", false);
        $("#CPDate").prop("readonly", false);
        $("#CPValidity").prop("readonly", false);
        $("#GateInDateForLot").prop("readonly", false);
        $("#BondNo").prop("readonly", true);
        $("#BondDate").prop("readonly", true);
        $("#BondValidity").prop("readonly", true);
        $("#BondNo").val("");
        $("#BondDate").val("");
        $("#BondValidUpTo").val("");
        $("#BondValidity").val("");
    }
    else {
        $("#CPNo").prop("readonly", true);
        $("#CPDate").prop("readonly", true);
        $("#CPValidity").prop("readonly", true);
        $("#GateInDateForLot").prop("readonly", true);
        $("#BondNo").prop("readonly", false);
        $("#BondDate").prop("readonly", false);
        $("#BondValidity").prop("readonly", false);
        $("#CPNo").val("");
        $("#CPDate").val("");
        $("#CPValidity").val("");
        $("#CPValidUpTo").val("");
        $("#GateInDateForLot").val("");
    }
}
function CheckENHANCEDAVOrDV() {
    var ENHANCEDAVOrDV = $("#ENHANCEDAVOrDV").val();
    if (ENHANCEDAVOrDV == "Yes") {
        $("#EnhanceAV").prop("readonly", false);
        $("#EnhancedDV").prop("readonly", false);
        $("#EnhanceAV").val("");
        $("#EnhancedDV").val("");
    }
    else {
        $("#EnhanceAV").val("0");
        $("#EnhancedDV").val("0");
        $("#EnhanceAV").prop("readonly", true);
        $("#EnhancedDV").prop("readonly", true);
    }
}
function CalculateCPValidUpTo() {
    var GateInDateForLot = $("#GateInDateForLot").val();
    var CPValidity = $("#CPValidity").val();
    if (GateInDateForLot != null && GateInDateForLot != undefined && GateInDateForLot != "" && CPValidity != null && CPValidity != undefined && CPValidity != "" && CPValidity != "0") {
        $.ajax({
            url: GetRootPath + "trnDocument/CalculateCPValidUpTo?GateInDateForLot=" + GateInDateForLot + "&CPValidity=" + CPValidity,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#CPValidUpTo").val(data);
                }
            }
        })
    } else {
        $("#CPValidUpTo").val("");
    }
}
function CalculateBondValidUpTo() {
    debugger;
    var BondDate = $("#BondDate").val();
    var BondValidity = $("#BondValidity").val();
    if (BondDate != null && BondDate != undefined && BondDate != "" && BondValidity != null && BondValidity != undefined && BondValidity != "" && BondValidity != "0") {
        $.ajax({
            url: GetRootPath + "trnDocument/CalculateBondValidUpTo?BondDate=" + BondDate + "&BondValidity=" + BondValidity,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#BondValidUpTo").val(data);
                }
            }
        })
    } else {
        $("#BondValidUpTo").val("");
    }
}
function DeleteDocumentEntry() {
    var DeleteReason = $("#DeleteReason").val();
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnDocument/validateDeleteModel/?DeleteReason=" + DeleteReason,
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
                var ID = $("#trnDocumentID").val();
                $.ajax({
                    url: GetRootPath + "trnDocument/delete/" + ID + "?Reason=" + DeleteReason + "",
                    type: "GET",
                    dataType: "text",
                    async: false,
                    success: function (data) {
                        $('#DeleteDocumentEntry').modal('hide');
                        location.reload();
                    }
                });
            }
        }
    });
}
function DeleteReason(TableName, ID) {
    if (ID != "" && ID != null && ID != undefined) {
        $("#trnDocumentID").val(ID);
    }
}
function GetTarrifHeadByCustomerID() {    
    var isvalid = false;
    var MstrCustomerID = $("#txtIMPORTERID").val();
    if (MstrCustomerID > 0) {
        $.ajax({
            url: GetRootPath + "trnDocument/GetTarrifHeadByCustomerID/" + MstrCustomerID,
            type: "GET",
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != null && data != "" && data != undefined) {
                    isvalid= true;
                }
                else {

                    isvalid= false;
                }
            }
        });
    }
    else {
        isvalid=false; 
    }
    return isvalid;
}
//function GetImporterByTerrifNo() {
//    debugger;
//    var TariffHead = $("#TariffHead").val();
//    if (TariffHead != "") {
//        $.ajax({
//            url: GetRootPath + "trnDocument/GetImporterByTerrifNo/" + TariffHead,
//            type: "GET",
//            dataType: "text",
//            async: false,
//            success: function (data) {
//                debugger;
//                if (data != null && data != "" && data != undefined) {
//                    if (data.split('_')[0] != null && data.split('_')[0] != "" && data.split('_')[0] != undefined) {
//                    $('#txtIMPORTERNAME').val(data.split('_')[0]);
//                    $('#txtIMPORTERID').val(data.split('_')[1]);
//                    $('#TariffHead').prop("readonly", true);
//                    Callbackautocomplete();
//                    }
//                }
//                else {
//                    $('#txtIMPORTERNAME').val("");
//                    $('#txtIMPORTERID').val(0);
//                    $('#TariffHead').prop("readonly", false);

//                }
//            }
//        });
//    }
//    else {
//        $('#TariffHead').val("");
//        $('#TariffHead').prop("readonly", false);
//    }
//}
document.addEventListener('keydown', function (event) {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
        // Prevent the default action to avoid form submission
        event.preventDefault();

        // Get the currently focused element
        const focusedElement = document.activeElement;

        // Check which div contains the focused element
        if (focusedElement.closest('#HeaderDetails')) {
            // Find the submit button in HeaderDetails and trigger a click
            const btn = focusedElement.id;
            if (btn.includes('btnHeaderClear')) {
                const btnHeaderClear = document.getElementById(btn);
                if (btnHeaderClear) {
                    btnHeaderClear.click()
                }
            }
            else {
                const submitButtonDiv1 = document.getElementById('SaveDocument');
                if (submitButtonDiv1) {
                    submitButtonDiv1.click();
                    DocumentValidation(1);
                }
            }            
        }
        else if (focusedElement.closest('#LotDetails')) {
            // Find the submit button in LotDetails and trigger a click
            const btn = focusedElement.id;
            if (btn.includes('btnLotDetailsClear')) {
                const btnLotDetailsClear = document.getElementById(btn);
                if (btnLotDetailsClear) {
                    btnLotDetailsClear.click();
                }
            }
            else if (btn.includes('btnlotdetail')) {
                const btnlotdetail = document.getElementById(btn);
                if (btnlotdetail) {
                    btnlotdetail.click();
                }
            }
            else {
                const LotDetails = document.getElementById('btnLotDetails');
                if (LotDetails) {
                    LotDetails.click();
                    DocumentValidation(2)
                }
            }            
        }
        else if (focusedElement.closest('#dvDocumentContainerDetails')) {
            // Find the submit button in dvDocumentContainerDetails and trigger a click\
            const btn = focusedElement.id;
            if (btn.includes('btnContClear')) {
                const btnContClear = document.getElementById(btn);
                if (btnContClear) {
                    btnContClear.click();
                }
            }
            else if (btn.includes('btnContainerdetail')) {
                const btnContainerdetail = document.getElementById(btn);
                if (btnContainerdetail) {
                    btnContainerdetail.click();
                }
            }
            else {
                const dvDocumentContainerDetails = document.getElementById('ContainerSave');
                if (dvDocumentContainerDetails) {
                    dvDocumentContainerDetails.click();
                    DocumentValidation(3)
                }
            }            
        }
        else if (focusedElement.closest('#AddBOIItems')) {
            // Find the submit button in AddBOIItems and trigger a click
            const btn = focusedElement.id;
            if (btn.includes('btnBOIClear')) {
                const btnBOIClear = document.getElementById(btn);
                if (btnBOIClear) {
                    btnBOIClear.click();
                }
            }
            else if (btn.includes('saveUploadbtn')) {
                const saveUploadbtn = document.getElementById(btn);
                if (saveUploadbtn) {
                    saveUploadbtn.click();
                }
            }
            else if (btn.includes('btnDownload')) {
                const btnDownload = document.getElementById(btn);
                if (btnDownload) {
                    btnDownload.click();
                }
            }
            else if (btn.includes('btnClose')) {
                const btnClose = document.getElementById(btn);
                if (btnClose) {
                    btnClose.click();
                }
            }
            else if (btn.includes('btnDocumentBOIDetails')) {
                const btnDocumentBOIDetails = document.getElementById(btn);
                if (btnDocumentBOIDetails) {
                    btnDocumentBOIDetails.click();
                }
            }
            else {
                const AddBOIItems = document.getElementById('savebtn');
                if (AddBOIItems) {
                    AddBOIItems.click();
                }
            }
            
        }
        else if (focusedElement.closest('#AddContainerDetails')) {
            // Find the submit button in AddContainerDetails and trigger a click
            const btn = focusedElement.id;
            if (btn.includes('btnContWTClear')) {
                const btnContWTClear = document.getElementById(btn);
                if (btnContWTClear) {
                    btnContWTClear.click();
                }
            }
            else if (btn.includes('btnContWTClose')) {
                const btnContWTClose = document.getElementById(btn);
                if (btnContWTClose) {
                    btnContWTClose.click();
                }
            }
            else {
                const AddContainerDetails = document.getElementById('savebtnWT');
                if (AddContainerDetails) {
                    AddContainerDetails.click();
                }
            }
            
        }
        else if (focusedElement.closest('#AddLotForContainer')) {
            // Find the submit button in AddLotForContainer and trigger a click
            const btn = focusedElement.id;
            if (btn.includes('btnContLotClear')) {
                const btnContLotClear = document.getElementById(btn);
                if (btnContLotClear) {
                    btnContLotClear.click();
                }
            }
            else if (btn.includes('btnContClose')) {
                const btnContClose = document.getElementById(btn);
                if (btnContClose) {
                    btnContClose.click();
                }
            }
            else {
                const AddLotForContainer = document.getElementById('Contsavebtn');
                if (AddLotForContainer) {
                    AddLotForContainer.click();
                }
            }            
        }
        else if (focusedElement.closest('#ChangeStatus')) {
            const btn = focusedElement.id;
            if (btn.includes('btnStatusClose')) {
                const btnStatusClose = document.getElementById(btn);
                if (btnStatusClose) {
                    btnStatusClose.click();
                }
            }
            else {
                const btnStatusSave = document.getElementById('btnStatusSave');
                if (btnStatusSave) {
                    btnStatusSave.click();
                }
            }
        }
        else if (focusedElement.closest('#divFinalSave')) {
            const btn = focusedElement.id;
            if (btn.includes('btnFinalClear')) {
                const btnFinalClear = document.getElementById(btn);
                if (btnFinalClear) {
                    btnFinalClear.click();
                }
            }
            else {
                const SaveDoc = document.getElementById('SaveDoc');
                if (SaveDoc) {
                    SaveDoc.click();
                }
            }
        }
        else if (focusedElement.closest('#divSearch')) {
            const btn = focusedElement.id;
            if (btn.includes("btnAdd")) {
                
                const btnAdd = document.getElementById("btnAdd");
                if (btnAdd) {
                    btnAdd.click();
                }
            }
            else {
                const btnSearch = document.getElementById(btn);
                if (btnSearch) {
                    btnSearch.click();
                }
            }
        }
        else if (focusedElement.closest('#divBack')) {
            const btnBack = document.getElementById("btnBack");
            if (btnBack) {
                btnBack.click();
            }
        }
    }
});

function ContainerDoPopup(trnDocumentID) {

    $("#hdntrndocumentID").val(trnDocumentID);

    $("#txtDONo").removeClass("redborder")
    $("#txtDODate").removeClass("redborder")

    $("#ContainerDoDatePopup").modal("show");

}

function getCurrentDateFormatted() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
    const yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

function parseDate(str) {
    const [dd, mm, yyyy] = str.split('/');
    return new Date(`${yyyy}-${mm}-${dd}`);
}

function ContainerDoDetailsInsert() {

    debugger

    var isvalid = true;
    var MErrormsg = "";

    DONo = $("#txtDONo").val();
    DoDate = $("#txtDODate").val();

    trndocumentID = $("#hdntrndocumentID").val()

    if ($.trim(DONo) == '' || DONo == undefined) {
        isvalid = false
        MErrormsg += "Please Enter DO No. <br />";
        $("#txtDONo").addClass("redborder")

    } else {
        $("#txtDONo").removeClass("redborder")
    }

    if ($.trim(DoDate) == '' || DoDate == undefined) {
        isvalid = false
        MErrormsg += "Please Enter DO Date. <br />";
        $("#txtDODate").addClass("redborder");

    } else {
        $("#txtDODate").removeClass("redborder");
        CurrentDate = parseDate(getCurrentDateFormatted());
        DoDate = parseDate(DoDate);

        if (CurrentDate >= DoDate) {
            MErrormsg += "Please select Valid Date, it should be gretter then current date time. <br />";
            isvalid = false;
            $("#txtDODate").addClass("redborder");
        } else {
            $("#txtDODate").removeClass("redborder");
        }
    }

    if (isvalid) {

        $.ajax({
            url: GetRootPath + "trnDocument/ContainerDODetailsInsert",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {

                if (data == "true") {
                    $("#ContainerDoDatePopup").modal("hide");
                } 
                localStorage.setItem("Success", "DO Details Add successfully");
                window.location.reload();
            }
        });
    } else {

        TosterAlert("error", MErrormsg, "Required!");
    }

}

