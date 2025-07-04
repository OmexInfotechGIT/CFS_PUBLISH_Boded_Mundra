$(document).ready(function () {
    var ModelName = "";
    //var Cycle = "IMPT";
    var MiscType = $("input[name=MiscType]:checked").val();

    var Cycle = "";

    Autocompletebox("SUBCOMMODITYName", "SubCommodityID", "MiscInvoice", "GetSubCommodity");
    Autocompletebox("ImporterExporter", "ImporterExporterID", "MiscInvoice", "GetIMPEXP", "Callbackautocomplete");
    Autocompletebox("CHAName", "CHAID", "MiscInvoice", "GetCHA", "Callbackautocomplete");
    Autocompletebox("ForwarderName", "ForwarderID", "MiscInvoice", "GetForwarder", "Callbackautocomplete");
    Autocompletebox("ConsolerName", "ConsolerID", "MiscInvoice", "GetConsoler", "Callbackautocomplete");
    Autocompletebox("state", "MainStateId", "CustomerMaster", "getStateNames");

    Autocompletebox("ContainerHandlingContSizeName", "ContainerHandlingContSizeID", "MiscInvoice", "GetContSize", "GetGeneralTriffDetails");
    Autocompletebox("ContainerHandlingCargoType", "ContainerHandlingCargoTypeID", "MiscInvoice", "GetNatureofCargo", "GetGeneralTriffDetails");
    Autocompletebox("ContainerHandlingBillCommodity", "ContainerHandlingBillCommodityID", "MiscInvoice", "GetCommodity", "GetGeneralTriffDetails");
    Autocompletebox("ContainerHandlingSubcommodity", "ContainerHandlingSubcommodityID", "MiscInvoice", "GetSubCommodity");
    Autocompletebox("ContainerHandlingTariffHead", "ContainerHandlingTariffHeadID", "MiscInvoice", "GetTariffHead", "GetGeneralTriffDetails");

    Autocompletebox("CargoHandlingCargoType", "CargoHandlingCargoTypeID", "MiscInvoice", "GetNatureofCargo", "GetGeneralTriffDetails");
    Autocompletebox("CargoHandlingBillCommodity", "CargoHandlingBillCommodityID", "MiscInvoice", "GetCommodity", "GetGeneralTriffDetails");
    Autocompletebox("CargoHandlingSubcommodity", "CargoHandlingSubcommodityID", "MiscInvoice", "GetSubCommodity");
    Autocompletebox("CargoHandlingTariffHead", "CargoHandlingTariffHeadID", "MiscInvoice", "GetTariffHead", "GetGeneralTriffDetails");
    Autocompletebox("CargoHandlingPackageType", "CargoHandlingPackageTypeID", "MiscInvoice", "GetPackageType");
    Autocompletebox("CargoHandlingUOM", "CargoHandlingUOMID", "MiscInvoice", "GetCargoHandlingUOM", "GetGeneralTriffDetails");

    Autocompletebox("ContainerBasedStorageContSizeName", "ContainerBasedStorageContSizeID", "MiscInvoice", "GetContSize", "GetGeneralTriffDetails");
    Autocompletebox("ContainerBasedStorageCargoType", "ContainerBasedStorageCargoTypeID", "MiscInvoice", "GetNatureofCargo", "GetGeneralTriffDetails");
    Autocompletebox("ContainerBasedStorageBillCommodity", "ContainerBasedStorageBillCommodityID", "MiscInvoice", "GetCommodity", "GetGeneralTriffDetails");
    Autocompletebox("ContainerBasedStorageSubcommodity", "ContainerBasedStorageSubcommodityID", "MiscInvoice", "GetSubCommodity");
    Autocompletebox("ContainerBasedStorageTariffHead", "ContainerBasedStorageTariffHeadID", "MiscInvoice", "GetTariffHead", "GetGeneralTriffDetails");

    Autocompletebox("CargoBasedStorageCargoType", "CargoBasedStorageCargoTypeID", "MiscInvoice", "GetNatureofCargo", "GetGeneralTriffDetails");
    Autocompletebox("CargoBasedStorageBillCommodity", "CargoBasedStorageBillCommodityID", "MiscInvoice", "GetCommodity", "GetGeneralTriffDetails");
    Autocompletebox("CargoBasedStorageSubcommodity", "CargoBasedStorageSubcommodityID", "MiscInvoice", "GetSubCommodity");
    Autocompletebox("CargoBasedStorageTariffHead", "CargoBasedStorageTariffHeadID", "MiscInvoice", "GetTariffHead", "GetGeneralTriffDetails");
    Autocompletebox("CargoBasedStorageUOM", "CargoBasedStorageUOMID", "MiscInvoice", "GetUOM", "GetGeneralTriffDetails");

    Autocompletebox("ReserveAreaStorageCargoType", "ReserveAreaStorageCargoTypeID", "MiscInvoice", "GetNatureofCargo", "GetGeneralTriffDetails");
    Autocompletebox("ReserveAreaStorageBillCommodity", "ReserveAreaStorageBillCommodityID", "MiscInvoice", "GetCommodity", "GetGeneralTriffDetails");
    Autocompletebox("ReserveAreaStorageSubcommodity", "ReserveAreaStorageSubcommodityID", "MiscInvoice", "GetSubCommodity");
    Autocompletebox("ReserveAreaStorageTariffHead", "ReserveAreaStorageTariffHeadID", "MiscInvoice", "GetTariffHead", "GetGeneralTriffDetails");
    Autocompletebox("ReserveAreaStorageUOM", "ReserveAreaStorageUOMID", "MiscInvoice", "GetReserveAreaStorageUOM", "GetGeneralTriffDetails");

    Autocompletebox("ContainerSlabwiseStorageContSizeName", "ContainerSlabwiseStorageContSizeID", "MiscInvoice", "GetContSize", "GetGeneralTriffDetails");
    Autocompletebox("ContainerSlabwiseStorageCargoType", "ContainerSlabwiseStorageCargoTypeID", "MiscInvoice", "GetNatureofCargo", "GetGeneralTriffDetails");
    Autocompletebox("ContainerSlabwiseStorageBillCommodity", "ContainerSlabwiseStorageBillCommodityID", "MiscInvoice", "GetCommodity", "GetGeneralTriffDetails");
    Autocompletebox("ContainerSlabwiseStorageSubcommodity", "ContainerSlabwiseStorageSubcommodityID", "MiscInvoice", "GetSubCommodity");
    Autocompletebox("ContainerSlabwiseStorageTariffHead", "ContainerSlabwiseStorageTariffHeadID", "MiscInvoice", "GetTariffHead", "GetGeneralTriffDetails");

    Autocompletebox("CargoSlabwiseStorageCargoType", "CargoSlabwiseStorageCargoTypeID", "MiscInvoice", "GetNatureofCargo", "GetGeneralTriffDetails");
    Autocompletebox("CargoSlabwiseStorageBillCommodity", "CargoSlabwiseStorageBillCommodityID", "MiscInvoice", "GetCommodity", "GetGeneralTriffDetails");
    Autocompletebox("CargoSlabwiseStorageSubcommodity", "CargoSlabwiseStorageSubcommodityID", "MiscInvoice", "GetSubCommodity");
    Autocompletebox("CargoSlabwiseStorageTariffHead", "CargoSlabwiseStorageTariffHeadID", "MiscInvoice", "GetTariffHead", "GetGeneralTriffDetails");
    Autocompletebox("CargoSlabwiseStorageUOM", "CargoSlabwiseStorageUOMID", "MiscInvoice", "GetUOM", "CalculateCargoSlabwiseStorageAMT");

    

    FillMiscInvoiceContainerHandlingGrid();
    FillMiscInvoiceCargoHandlingGrid();
    FillMiscInvoiceContainerBasedStorageGrid();
    FillMiscInvoiceCargoBasedStorageGrid();
    FillMiscInvoiceReserveAreaStorageGrid();
    FillMiscInvoiceContainerSlabwiseStorageGrid();
    FillMiscInvoiceCargoSlabwiseStorageGrid();
    filldatatable();
    fillDocumentdetails();

    if (($("#ImporterExporterID").val() != 0 || $("#ConsolerID").val() != 0 || $("#CHAID").val() != 0 || $("#ForwarderID").val() != 0) || MiscType == "MANUAL") {
        Callbackautocomplete();
    }
    if ($("#BillToCustomerID").val() != 0) {
        autocompleteaddress();
    }
    if (MiscType == "CUSTOMER") {
        $(".AJNFIOAJHSFIKFSDAMFC").show();
    }
    else {
        $(".AJNFIOAJHSFIKFSDAMFC").hide();
        $(".mjgvhjvnjhfyblhjhrb").hide();
    }
});

setTimeout(function () {
    $("input[name=CycleID]").on('ifChanged', function (event) {
        //var Cycle = "IMPT";
        var Cycle = $("input[name='CycleID']:checked").val();
        if (Cycle == ExporterCode) {
            Cycle = "EXPT";
            $("#lblImporterExporter").text("Exporter");
        }
        else if (Cycle == ImporterCode) {
            Cycle = "IMPT";
            $("#lblImporterExporter").text("Importer");
        }
        else {
            Cycle = "";
            $("#lblImporterExporter").text("Importer/Exporter");
        }

        if (event.target.checked == true) {
            Autocompletebox("ImporterExporter", "ImporterExporterID", "MiscInvoice", "GetIMPEXP", "Callbackautocomplete");
        }
        else {
            Autocompletebox("ImporterExporter", "ImporterExporterID", "MiscInvoice", "GetIMPEXP", "Callbackautocomplete");
        }
    });
    $("input[name=MiscType]").on('ifChanged', function (event) {
        var MiscType = $("input[name=MiscType]:checked").val();
        if (MiscType == "CUSTOMER") {
            $(".AJNFIOAJHSFIKFSDAMFC").show();
            Autocompletebox("InBOENo", "trnDocumentLotDetailsID", "MiscInvoice", "GetInBOENo");
        }
        else {
            $(".AJNFIOAJHSFIKFSDAMFC").hide();
            $(".mjgvhjvnjhfyblhjhrb").hide();
            $("#InBOENo").val("");
            $("#trnDocumentLotDetailsID").val("0");
            $("#lblImporterExporter").val("");
            $("#ImporterExporterID").val("0");
            $("#CHAName").val("");
            $("#CHAID").val("0");
            $("#ForwarderName").val("");
            $("#ForwarderID").val("0");
            $("#ConsolerName").val("");
            $("#ConsolerID").val("0");
        }
    });

}, 1000);

function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}

$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});

function CallbackADDRESSS() {

    if ($("#BillToCustomerAddressID").val() != "" && $("#BillToCustomerAddressID").val() != undefined && $("#BillToCustomerAddressID").val() != null) {
        $.ajax({
            url: GetRootPath + "MiscInvoice/GetBillToCustomerGSTNo/" + $("#BillToCustomerAddressID").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#BillToCustomerGSTNo").val(data);
                    $("#spn_BillToCustomerGSTNo").text(data);
                }
                else {
                    $("#BillToCustomerGSTNo").val("");
                    $("#spn_BillToCustomerGSTNo").text("");
                }
            }
        });

        StateCallback();

    }
    else {
        $("#BillToCustomerGSTNo").val("");
        $("#spn_BillToCustomerGSTNo").text("");
    }

}

function StateCallback() {

    $.ajax({
        url: GetRootPath + "MiscInvoice/GetBillAddressToState/" + $("#BillToCustomerAddressID").val(),
        type: "GET",
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#state").val(data.split("|")[0]);
                $("#MainStateId").val(data.split("|")[1]);
                $("#dpdGSTCustomerType").val(data.split("|")[2]);
            }
            else {
                $("#state").val('');
                $("#MainStateId").val('0');
            }
        }
    });

}

function autocompleteaddress() {

    Autocompletebox("BillToCustomerAddress", "BillToCustomerAddressID", "MiscInvoice", "GetBillToAddress/" + $("#BillToCustomerID").val(), "CallbackADDRESSS");
}

function Callbackautocomplete() {
    debugger
    var MiscTypes = $("input[name=MiscType]:checked").val();
    Autocompletebox("BillToCustomerName", "BillToCustomerID", "MiscInvoice", "GetBillTo/?ImporterExporterID=" + $("#ImporterExporterID").val() + "&ConsolerID=" + $("#ConsolerID").val() + "&CHAID=" + $("#CHAID").val() + "&ForwarderID=" + $("#ForwarderID").val() + "&MiscType=" + MiscTypes, "autocompleteaddress");

    if ($("#ISOCodeID").val() != "" && $("#ISOCodeID").val() != undefined && $("#ISOCodeID").val() != null) {
        $.ajax({
            url: GetRootPath + "MiscInvoice/GetISOCodeSizeAndType/" + $("#ISOCodeID").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    alert(data)
                    $("#ISOCodeType").val(data.split("|")[0]);
                    $("#ISOCodeSize").val(data.split("|")[1]);
                    $("#ISOCodeTypes").text(data.split("|")[0]);
                    $("#ISOCodeSizes").text(data.split("|")[1]);
                }
                else {
                    $("#ISOCodeSize").val("");
                    $("#ISOCodeType").val("");
                    $("#ISOCodeSizes").text("");
                    $("#ISOCodeTypes").text("");
                }
            }
        })
    }
    else {
        $("#ISOCodeSize").val("");
        $("#ISOCodeType").val("");
        $("#ISOCodeSizes").text("");
        $("#ISOCodeTypes").text("");
    }


}

function ContainerBasedStoragecalculateTermEndDate() {
    var FromDate = $("#ContainerBasedStorageStorageStartDate").val();
    var NoOfStoragePeriod = $("#ContainerBasedStorageNoOfStoragePeriod").val();
    var StoragePeriod = $("#ContainerBasedStorageStoragePeriod").val();

    if (FromDate != null && FromDate != undefined && FromDate != "" && NoOfStoragePeriod != null && NoOfStoragePeriod != undefined && NoOfStoragePeriod != "" && NoOfStoragePeriod != "0" && StoragePeriod != null && StoragePeriod != undefined && StoragePeriod != "" && StoragePeriod != "0") {
        $.ajax({
            url: GetRootPath + "MiscInvoice/CalculateEndDate/?FromDate=" + FromDate + "&NoOfStoragePeriod=" + NoOfStoragePeriod + "&StoragePeriod=" + StoragePeriod,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#ContainerBasedStoragetxtEndDate").text(data);
                    $("#ContainerBasedStorageStorageEndDate").val(data);
                }
            }
        })
    }
    CalculateContainerBasedStorageAMT();
}

function CargoBasedStoragecalculateTermEndDate() {
    var FromDate = $("#CargoBasedStorageStorageStartDate").val();
    var NoOfStoragePeriod = $("#CargoBasedStorageNoOfStoragePeriod").val();
    var StoragePeriod = $("#CargoBasedStorageStoragePeriod").val();

    if (FromDate != null && FromDate != undefined && FromDate != "" && NoOfStoragePeriod != null && NoOfStoragePeriod != undefined && NoOfStoragePeriod != "" && NoOfStoragePeriod != "0" && StoragePeriod != null && StoragePeriod != undefined && StoragePeriod != "" && StoragePeriod != "0") {
        $.ajax({
            url: GetRootPath + "MiscInvoice/CalculateEndDate/?FromDate=" + FromDate + "&NoOfStoragePeriod=" + NoOfStoragePeriod + "&StoragePeriod=" + StoragePeriod,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#CargoBasedStoragetxtEndDate").text(data);
                    $("#CargoBasedStorageStorageEndDate").val(data);
                }
            }
        })
    }
    CalculateCargoBasedStorageAMT();
}

function ReserveAreaStoragecalculateTermEndDate() {
    var FromDate = $("#ReserveAreaStorageStorageStartDate").val();
    var NoOfStoragePeriod = $("#ReserveAreaStorageNoOfStoragePeriod").val();
    var StoragePeriod = $("#ReserveAreaStorageStoragePeriod").val();

    if (FromDate != null && FromDate != undefined && FromDate != "" && NoOfStoragePeriod != null && NoOfStoragePeriod != undefined && NoOfStoragePeriod != "" && NoOfStoragePeriod != "0" && StoragePeriod != null && StoragePeriod != undefined && StoragePeriod != "" && StoragePeriod != "0") {
        $.ajax({
            url: GetRootPath + "MiscInvoice/CalculateEndDate/?FromDate=" + FromDate + "&NoOfStoragePeriod=" + NoOfStoragePeriod + "&StoragePeriod=" + StoragePeriod,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#ReserveAreaStoragetxtEndDate").text(data);
                    $("#ReserveAreaStorageStorageEndDate").val(data);
                }
            }
        })
    }
    CalculateReserveAreaStorageAMT();
}

function CargoSlabwiseStoragecalculateTermEndDate() {
    var FromDate = $("#CargoSlabwiseStorageStorageStartDate").val();
    var NoOfStoragePeriod = $("#CargoSlabwiseStorageNoOfStoragePeriod").val();
    var StoragePeriod = $("#CargoSlabwiseStorageStoragePeriod").val();

    if (FromDate != null && FromDate != undefined && FromDate != "" && NoOfStoragePeriod != null && NoOfStoragePeriod != undefined && NoOfStoragePeriod != "" && NoOfStoragePeriod != "0" && StoragePeriod != null && StoragePeriod != undefined && StoragePeriod != "" && StoragePeriod != "0") {
        $.ajax({
            url: GetRootPath + "MiscInvoice/CalculateEndDate/?FromDate=" + FromDate + "&NoOfStoragePeriod=" + NoOfStoragePeriod + "&StoragePeriod=" + StoragePeriod,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#CargoSlabwiseStoragetxtEndDate").text(data);
                    $("#CargoSlabwiseStorageStorageEndDate").val(data);
                }
            }
        })
    }
}

function Validation() {

    var isvalid = true;
    $.ajax({
        url: GetRootPath + "MiscInvoice/validateModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        //contentType: false,
        //processData: false,
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

function filldatatable() {
    $("#ConsolidatedChargesDetails").html("");

    $.ajax({
        url: GetRootPath + "MiscInvoice/FillConsolidatedChargesDetailsGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ConsolidatedChargesDetails").html(data);
                $('#FinishedBtn').attr('disabled', false);
            } else {
                $('#FinishedBtn').attr('disabled', true);
            }
        }
    });
}

//----------------------------------------------------------------------------------------------------------------
// Container Handling
//----------------------------------------------------------------------------------------------------------------

function CalculateAMT() {
    debugger
    var NoofContainers = $('#ContainerHandlingNoofContainers').val();
    var Rate = $('#ContainerHandlingRate').val();
    var Discountamt = $('#ContainerHandlingDiscountamtBase').val();
    var GSTPer = $('#ContainerHandlingGSTPer').val();

    if (NoofContainers == undefined || NoofContainers == null || NoofContainers == "" || NoofContainers == 0) {
        NoofContainers = 0;
        $('#ContainerHandlingNoofContainers').val(0);

    }

    if (Rate == undefined || Rate == null || Rate == "" || Rate == 0) {
        Rate = 0;
        $('#ContainerHandlingRate').val(0);

    }

    if (Discountamt == undefined || Discountamt == null || Discountamt == "" || Discountamt == 0) {
        Discountamt = 0;
        $('#ContainerHandlingDiscountamt').val(0);
    }

    if (GSTPer == undefined || GSTPer == null || GSTPer == "" || GSTPer == 0 || GSTPer > 100) {
        GSTPer = 0;
        $('#ContainerHandlingGSTPer').val(0);
    }

    var CargoHandlingTotal = (parseFloat(Rate) * parseFloat(NoofContainers)).toFixed(2);
    $("#ContainerHandlingTotal").val(CargoHandlingTotal);
    if (parseFloat(NoofContainers) > 0) {
        Discountamt = (parseFloat(Discountamt) * parseFloat(NoofContainers)).toFixed(2);
        $("#ContainerHandlingDiscountamt").val(Discountamt);


        var total = CargoHandlingTotal - Discountamt;
        total = total + (total * GSTPer / 100);

        $("#ContainerHandlingNetamount").val(parseFloat(total).toFixed(2));
    }

}

function AddMiscInvoiceContainerHandling() {
    //event.preventDefault();
    //// Disable the button to prevent multiple clicks
    //$("#btnContainerHandlingGW").prop("disabled", true);

    $("#btnContainerHandlingGW").hide();
    $("#tmpbtnContHandling").show();
    $(".redborder").removeClass("redborder");
    $.ajax({
        url: GetRootPath + "MiscInvoice/validateModelContainerHandling",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",        
        success: function (data) {            
            if (data != "") {
                var Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");
                $("#btnContainerHandlingGW").show();
                $("#tmpbtnContHandling").hide();
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
                    url: GetRootPath + "MiscInvoice/AddMiscInvoiceContainerHandling",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        $("#btnContainerHandlingGW").show();
                        $("#tmpbtnContHandling").hide();
                        ClearMiscInvoiceContainerHandling();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillMiscInvoiceContainerHandlingGrid();
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        },
        complete: function () {
            // Re-enable the button after the AJAX request is complete
            $("#btnContainerHandlingGW").prop("disabled", false);
        }
    });
}

function FillMiscInvoiceContainerHandlingGrid() {
    $("#ContainerDetails").html("");

    $.ajax({
        url: GetRootPath + "MiscInvoice/FillMiscInvoiceContainerHandlingGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ContainerDetails").html(data);
            }
            ClearMiscInvoiceContainerHandling();
            filldatatable();
        }
    });
}

function ClearMiscInvoiceContainerHandling() {
    $("#ContainerHandlingContSizeName").val('');
    $("#ContainerHandlingDeliveryMode").val('LOADED');
    $("#ContainerHandlingCargoType").val('');
    $("#ContainerHandlingBillCommodity").val('');
    $("#ContainerHandlingTariffHead").val('');
    $("#ContainerHandlingSubcommodity").val('');
    $("#ContainerHandlingContSizeID").val('0');
    $("#ContainerHandlingTariffHeadID").val('0');
    $("#ContainerHandlingRate").val('0');
    $("#ContainerHandlingTotal").val('0');
    $("#ContainerHandlingDiscountamt").val('0');
    $("#ContainerHandlingNetamount").val('0');
    $("#ContainerHandlingSubcommodityID").val('0');
    $("#ContainerHandlingBillCommodityID").val('0');
    $("#ContainerHandlingCargoTypeID").val('0');
    $("#ContainerHandlingNoofContainers").val('0');
    $("#ContainerHandlingGSTPer").val('0');
    $("#MiscInvoiceContainerHandlingID").val('0');
    $("#btnContainerHandling").text("Add");
}

function EditMiscInvoiceContainerHandling(ID) {
    $("#ContainerHandlingContSizeName").val($("#ContainerHandlingContSizeName_" + ID).text());
    $("#ContainerHandlingGSTPer").val($("#ContainerHandlingGSTPer_" + ID).text());
    $("#ContainerHandlingDeliveryMode").val($("#ContainerHandlingDeliveryMode_" + ID).text());
    $("#ContainerHandlingCargoType").val($("#ContainerHandlingCargoType_" + ID).text());
    $("#ContainerHandlingBillCommodity").val($("#ContainerHandlingBillCommodity_" + ID).text());
    $("#ContainerHandlingTariffHead").val($("#ContainerHandlingTariffHead_" + ID).text());
    $("#ContainerHandlingSubcommodity").val($("#ContainerHandlingSubcommodity_" + ID).text());
    $("#ContainerHandlingContSizeID").val($("#ContainerHandlingContSizeID_" + ID).text());
    $("#ContainerHandlingTariffHeadID").val($("#ContainerHandlingTariffHeadID_" + ID).text());
    $("#ContainerHandlingRate").val($("#ContainerHandlingRate_" + ID).text());
    $("#ContainerHandlingTotal").val($("#ContainerHandlingTotal_" + ID).text());
    $("#ContainerHandlingDiscountamt").val($("#ContainerHandlingDiscountamt_" + ID).text());
    $("#ContainerHandlingNetamount").val($("#ContainerHandlingNetamount_" + ID).text());
    $("#ContainerHandlingSubcommodityID").val($("#ContainerHandlingSubcommodityID_" + ID).text());
    $("#ContainerHandlingBillCommodityID").val($("#ContainerHandlingBillCommodityID_" + ID).text());
    $("#ContainerHandlingCargoTypeID").val($("#ContainerHandlingCargoTypeID_" + ID).text());
    $("#ContainerHandlingNoofContainers").val($("#ContainerHandlingNoofContainers_" + ID).text());
    $("#btnContainerHandling").text("Save");
    $("#MiscInvoiceContainerHandlingID").val(ID);
}

function DeleteMiscInvoiceContainerHandling(ID) {
    $.ajax({
        url: GetRootPath + "MiscInvoice/deleteContainerHandlingDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillMiscInvoiceContainerHandlingGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}
//----------------------------------------------------------------------------------------------------------------
// Cargo Handling
//----------------------------------------------------------------------------------------------------------------
function CalculateCargoAMT() {
    debugger;
    var QTY = 0;
    if ($("#CargoHandlingUOM").val() == "KGS") {
        QTY = $('#CargoHandlingWeight').val();
    }
    else {
        QTY = $('#CargoHandlingQTY').val();
    }
    var Rate = $('#CargoHandlingRate').val();
    var Discountamt = $('#CargoHandlingDiscountamtBaseValue').val();
    var GSTPer = $('#CargoHandlingGSTPer').val();

    if (QTY == undefined || QTY == null || QTY == "" || QTY == 0) {
        QTY = 0;
        $('#CargoHandlingQTY').val(0);

    }

    if (Rate == undefined || Rate == null || Rate == "" || Rate == 0) {
        Rate = 0;
        $('#CargoHandlingRate').val(0);

    }

    if (GSTPer == undefined || GSTPer == null || GSTPer == "" || GSTPer == 0 || GSTPer > 100) {
        GSTPer = 0;
        $('#CargoHandlingGSTPer').val(0);
    }

    if (Discountamt == undefined || Discountamt == null || Discountamt == "" || Discountamt == 0) {
        Discountamt = 0;

    }

    var CargoHandlingTotal = (parseFloat(Rate) * parseFloat(QTY)).toFixed(2);
    $("#CargoHandlingTotal").val(CargoHandlingTotal);
    if (parseFloat(QTY) > 0) {
        Discountamt = (parseFloat(Discountamt) * parseFloat(QTY)).toFixed(2);
        $("#CargoHandlingDiscountamt").val(Discountamt);


        var total = CargoHandlingTotal - Discountamt;
        total = total + (total * GSTPer / 100);

        $("#CargoHandlingNetamount").val(parseFloat(total).toFixed(2));
    }


}

function AddMiscInvoiceCargoHandling() {
    //event.preventDefault();
    //// Disable the button to prevent multiple clicks
    //$("#btnCargoHandlingGW").prop("disabled", true);
    $(".redborder").removeClass("redborder");
    $("#tmpbtnCargoHandling").show();
    $("#btnCargoHandlingGW").hide();
    $.ajax({
        url: GetRootPath + "MiscInvoice/validateModelCargoHandling",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "") {
                var Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");
                $("#tmpbtnCargoHandling").hide();
                $("#btnCargoHandlingGW").show();
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
                    url: GetRootPath + "MiscInvoice/AddMiscInvoiceCargoHandling",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        $("#tmpbtnCargoHandling").hide();
                        $("#btnCargoHandlingGW").show();
                        ClearMiscInvoiceCargoHandling();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillMiscInvoiceCargoHandlingGrid();
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        },
        complete: function () {
            // Re-enable the button after the AJAX request is complete
            $("#btnCargoHandlingGW").prop("disabled", false);
        }
    });
}

function FillMiscInvoiceCargoHandlingGrid() {
    $("#CargoDetails").html("");

    $.ajax({
        url: GetRootPath + "MiscInvoice/FillMiscInvoiceCargoHandlingGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#CargoDetails").html(data);
            }
            ClearMiscInvoiceCargoHandling();
            filldatatable();
        }
    });
}

function ClearMiscInvoiceCargoHandling() {
    $("#CargoHandlingPackageType").val('');
    $("#CargoHandlingUOM").val('');
    $("#CargoHandlingCargoType").val('');
    $("#CargoHandlingBillCommodity").val('');
    $("#CargoHandlingTariffHead").val('');
    $("#CargoHandlingSubcommodity").val('');
    $("#CargoHandlingPackageTypeID").val('0');
    $("#CargoHandlingTariffHeadID").val('0');
    $("#CargoHandlingRate").val('0');
    $("#CargoHandlingTotal").val('0');
    $("#CargoHandlingDiscountamt").val('0');
    $("#CargoHandlingNetamount").val('0');
    $("#CargoHandlingSubcommodityID").val('0');
    $("#CargoHandlingBillCommodityID").val('0');
    $("#CargoHandlingGSTPer").val('0');
    $("#CargoHandlingUOMID").val('0');
    $("#CargoHandlingCargoTypeID").val('0');
    $("#CargoHandlingQTY").val('0');
    $("#CargoHandlingWeight").val('0');
    $("#MiscInvoiceCargoHandlingID").val('0');
    $("#btnCargoHandling").text("Add");
    $("#CargoHandlingQTY").prop('readonly', false);
    $("#CargoHandlingWeight").prop('readonly', false);
}

function EditMiscInvoiceCargoHandling(ID) {
    $("#CargoHandlingPackageType").val($("#CargoHandlingPackageType_" + ID).text());
    $("#CargoHandlingGSTPer").val($("#CargoHandlingGSTPer_" + ID).text());
    $("#CargoHandlingUOM").val($("#CargoHandlingUOM_" + ID).text());
    $("#CargoHandlingCargoType").val($("#CargoHandlingCargoType_" + ID).text());
    $("#CargoHandlingBillCommodity").val($("#CargoHandlingBillCommodity_" + ID).text());
    $("#CargoHandlingTariffHead").val($("#CargoHandlingTariffHead_" + ID).text());
    $("#CargoHandlingSubcommodity").val($("#CargoHandlingSubcommodity_" + ID).text());
    $("#CargoHandlingPackageTypeID").val($("#CargoHandlingPackageTypeID_" + ID).text());
    $("#CargoHandlingUOMID").val($("#CargoHandlingUOMID_" + ID).text());
    $("#CargoHandlingTariffHeadID").val($("#CargoHandlingTariffHeadID_" + ID).text());
    $("#CargoHandlingRate").val($("#CargoHandlingRate_" + ID).text());
    $("#CargoHandlingTotal").val($("#CargoHandlingTotal_" + ID).text());
    $("#CargoHandlingDiscountamt").val($("#CargoHandlingDiscountamt_" + ID).text());
    $("#CargoHandlingNetamount").val($("#CargoHandlingNetamount_" + ID).text());
    $("#CargoHandlingSubcommodityID").val($("#CargoHandlingSubcommodityID_" + ID).text());
    $("#CargoHandlingBillCommodityID").val($("#CargoHandlingBillCommodityID_" + ID).text());
    $("#CargoHandlingCargoTypeID").val($("#CargoHandlingCargoTypeID_" + ID).text());
    $("#CargoHandlingQTY").val($("#CargoHandlingQTY_" + ID).text());
    $("#CargoHandlingWeight").val($("#CargoHandlingWeight_" + ID).text());
    $("#btnCargoHandling").text("Save");
    $("#MiscInvoiceCargoHandlingID").val(ID);
    if ($("#CargoHandlingUOM").val() == "KGS") {
        $("#CargoHandlingQTY").prop('readonly', true);
        $("#CargoHandlingWeight").prop('readonly', false);
    }
    else {
        $("#CargoHandlingQTY").prop('readonly', false);
        $("#CargoHandlingWeight").prop('readonly', true);
    }
}

function DeleteMiscInvoiceCargoHandling(ID) {
    $.ajax({
        url: GetRootPath + "MiscInvoice/deleteCargoHandlingDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillMiscInvoiceCargoHandlingGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}
//----------------------------------------------------------------------------------------------------------------
// Container Based Storage
//----------------------------------------------------------------------------------------------------------------
function CalculateContainerBasedStorageAMT() {
    debugger;
    var NoofContainers = $('#ContainerBasedStorageNoofContainers').val();
    var Rate = $('#ContainerBasedStorageRate').val();
    var Number = $('#ContainerBasedStorageNoOfStoragePeriod').val();
    var Discountamt = $('#ContainerBasedStorageDiscountamtBase').val();
    var GSTPer = $('#ContainerBasedStorageGSTPer').val();

    if (NoofContainers == undefined || NoofContainers == null || NoofContainers == "" || NoofContainers == 0) {
        NoofContainers = 0;
        $('#ContainerBasedStorageNoofContainers').val(0);

    }

    if (Number == undefined || Number == null || Number == "" || Number == 0) {
        Number = 0;
        $('#ContainerBasedStorageNoOfStoragePeriod').val(0);

    }

    if (Rate == undefined || Rate == null || Rate == "" || Rate == 0) {
        Rate = 0;
        $('#ContainerBasedStorageRate').val(0);

    }

    if (GSTPer == undefined || GSTPer == null || GSTPer == "" || GSTPer == 0 || GSTPer > 100) {
        GSTPer = 0;
        $('#ContainerBasedStorageGSTPer').val(0);
    }

    if (Discountamt == undefined || Discountamt == null || Discountamt == "" || Discountamt == 0) {
        Discountamt = 0;
        $('#ContainerBasedStorageDiscountamt').val(0);
    }


    if (parseFloat(NoofContainers) > 0 && parseFloat(Number) > 0 && parseFloat(Rate)) {
        var total = (parseFloat(Rate) * parseFloat(NoofContainers) * parseFloat(Number)).toFixed(2);
        var TotalDiscountCargo = (parseFloat(Discountamt) * parseFloat(NoofContainers) * parseFloat(Number)).toFixed(2);
        $("#ContainerBasedStorageTotal").val(total);
        $('#ContainerBasedStorageDiscountamt').val(TotalDiscountCargo);
        GSTAMT = ((total - TotalDiscountCargo) * GSTPer / 100).toFixed(2);
        $("#ContainerBasedStorageNetamount").val((parseFloat(total - TotalDiscountCargo) + parseFloat(GSTAMT)));
    }
}

function AddMiscInvoiceContainerBasedStorage() {
    //event.preventDefault();
    //// Disable the button to prevent multiple clicks
    //$("#btnContainerBasedStorageGW").prop("disabled", true);
    $(".redborder").removeClass("redborder");
    $("#btnContainerBasedStorageGW").hide();
    $("#tmpbtnContbaseStorage").show();
    $.ajax({
        url: GetRootPath + "MiscInvoice/validateModelContainerBasedStorage",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {            
            if (data != "") {
                var Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");
                $("#btnContainerBasedStorageGW").show();
                $("#tmpbtnContbaseStorage").hide();
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
                    url: GetRootPath + "MiscInvoice/AddMiscInvoiceContainerBasedStorage",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        $("#btnContainerBasedStorageGW").show();
                        $("#tmpbtnContbaseStorage").hide();
                        ClearMiscInvoiceContainerBasedStorage();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillMiscInvoiceContainerBasedStorageGrid();
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        },
        complete: function () {
            // Re-enable the button after the AJAX request is complete
            $("#btnContainerBasedStorageGW").prop("disabled", false);
        }
    });
}

function FillMiscInvoiceContainerBasedStorageGrid() {
    $("#ContainerBasedStorageDetails").html("");

    $.ajax({
        url: GetRootPath + "MiscInvoice/FillMiscInvoiceContainerBasedStorageGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ContainerBasedStorageDetails").html(data);
            }
            ClearMiscInvoiceContainerBasedStorage();
            filldatatable();
        }
    });
}

function ClearMiscInvoiceContainerBasedStorage() {
    $("#ContainerBasedStorageContSizeName").val('');
    $("#ContainerBasedStorageGSTPer").val('0');
    $("#ContainerBasedStorageDeliveryMode").val('LOADED');
    $("#ContainerBasedStorageCargoType").val('');
    $("#ContainerBasedStorageBillCommodity").val('');
    $("#ContainerBasedStorageSubcommodity").val('');
    $("#ContainerBasedStorageTariffHead").val('');
    $("#ContainerBasedStorageStorageStartDate").val('');
    $("#ContainerBasedStoragetxtEndDate").text('');
    $("#ContainerBasedStorageStorageEndDate").val('');
    $("#ContainerBasedStorageNoOfStoragePeriod").val('0');
    $("#ContainerBasedStorageStoragePeriod").val('0');
    $("#ContainerBasedStorageContSizeID").val('0');
    $("#ContainerBasedStorageTariffHeadID").val('0');
    $("#ContainerBasedStorageRate").val('0');
    $("#ContainerBasedStorageTotal").val('0');
    $("#ContainerBasedStorageDiscountamt").val('0');
    $("#ContainerBasedStorageNetamount").val('0');
    $("#ContainerBasedStorageBillCommodityID").val('0');
    $("#ContainerBasedStorageSubcommodityID").val('0');
    $("#ContainerBasedStorageCargoTypeID").val('0');
    $("#ContainerBasedStorageNoofContainers").val('0');
    $("#MiscInvoiceContainerBasedStorageID").val('0');
    $("#btnContainerBasedStorage").text("Add");
}

function EditMiscInvoiceContainerBasedStorage(ID) {
    $("#ContainerBasedStorageContSizeName").val($("#ContainerBasedStorageContSizeName_" + ID).text());
    $("#ContainerBasedStorageGSTPer").val($("#ContainerBasedStorageGSTPer_" + ID).text());
    $("#ContainerBasedStorageDeliveryMode").val($("#ContainerBasedStorageDeliveryMode_" + ID).text());
    $("#ContainerBasedStorageCargoType").val($("#ContainerBasedStorageCargoType_" + ID).text());
    $("#ContainerBasedStorageBillCommodity").val($("#ContainerBasedStorageBillCommodity_" + ID).text());
    $("#ContainerBasedStorageSubcommodity").val($("#ContainerBasedStorageSubcommodity_" + ID).text());
    $("#ContainerBasedStorageTariffHead").val($("#ContainerBasedStorageTariffHead_" + ID).text());
    $("#ContainerBasedStorageStorageStartDate").val($("#ContainerBasedStorageStorageStartDate_" + ID).text());
    $("#ContainerBasedStoragetxtEndDate").text($("#ContainerBasedStorageStorageEndDate_" + ID).text());
    $("#ContainerBasedStorageStorageEndDate").val($("#ContainerBasedStorageStorageEndDate_" + ID).text());
    $("#ContainerBasedStorageContSizeID").val($("#ContainerBasedStorageContSizeID_" + ID).text());
    $("#ContainerBasedStorageTariffHeadID").val($("#ContainerBasedStorageTariffHeadID_" + ID).text());
    $("#ContainerBasedStorageRate").val($("#ContainerBasedStorageRate_" + ID).text());
    $("#ContainerBasedStorageTotal").val($("#ContainerBasedStorageTotal_" + ID).text());
    $("#ContainerBasedStorageDiscountamt").val($("#ContainerBasedStorageDiscountamt_" + ID).text());
    $("#ContainerBasedStorageNetamount").val($("#ContainerBasedStorageNetamount_" + ID).text());
    $("#ContainerBasedStorageNoOfStoragePeriod").val($("#ContainerBasedStorageNoOfStoragePeriod_" + ID).text());
    $("#ContainerBasedStorageStoragePeriod").val($("#ContainerBasedStorageStoragePeriod_" + ID).text());
    $("#ContainerBasedStorageBillCommodityID").val($("#ContainerBasedStorageBillCommodityID_" + ID).text());
    $("#ContainerBasedStorageSubcommodityID").val($("#ContainerBasedStorageSubcommodityID_" + ID).text());
    $("#ContainerBasedStorageCargoTypeID").val($("#ContainerBasedStorageCargoTypeID_" + ID).text());
    $("#ContainerBasedStorageNoofContainers").val($("#ContainerBasedStorageNoofContainers_" + ID).text());
    $("#btnContainerBasedStorage").text("Save");
    $("#MiscInvoiceContainerBasedStorageID").val(ID);
}

function DeleteMiscInvoiceContainerBasedStorage(ID) {
    $.ajax({
        url: GetRootPath + "MiscInvoice/deleteContainerBasedStorageDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillMiscInvoiceContainerBasedStorageGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}

//----------------------------------------------------------------------------------------------------------------
// Cargo Based Storage
//----------------------------------------------------------------------------------------------------------------
function CalculateCargoBasedStorageAMT() {
    debugger;
    var UOMCode = $('#CargoBasedStorageUOM').val();
    var QTY = 0;
    if (UOMCode == "KGS") {
        QTY = $('#CargoBasedStorageWeight').val();
    }
    else if (UOMCode == "PER UNIT") {
        QTY = $('#CargoBasedStorageQTY').val();
    }
    else if (UOMCode == "SQR FEET" || UOMCode == "SQR MTR") {
        QTY = $('#CargoBasedStorageArea').val();
    }

    var Rate = $('#CargoBasedStorageRate').val();
    var Number = $('#CargoBasedStorageNoOfStoragePeriod').val();
    var Discountamt = $('#CargoBasedStorageDiscountamtBase').val();
    var GSTPer = $('#CargoBasedStorageGSTPer').val();

    if (QTY == undefined || QTY == null || QTY == "" || QTY == 0) {
        QTY = 0;
        $('#CargoBasedStorageQTY').val(0);
    }

    if (Number == undefined || Number == null || Number == "" || Number == 0) {
        Number = 0;
        $('#CargoBasedStorageNoOfStoragePeriod').val(0);
    }

    if (Rate == undefined || Rate == null || Rate == "" || Rate == 0) {
        Rate = 0;
        $('#CargoBasedStorageRate').val(0);
    }

    if (Discountamt == undefined || Discountamt == null || Discountamt == "" || Discountamt == 0) {
        Discountamt = 0;
        $('#CargoBasedStorageDiscountamt').val(0);
    }

    if (GSTPer == undefined || GSTPer == null || GSTPer == "" || GSTPer == 0 || GSTPer > 100) {
        GSTPer = 0;
        $('#CargoBasedStorageGSTPer').val(0);
    }
    if (parseFloat(QTY) > 0 && parseFloat(Rate) > 0 && parseFloat(Number) > 0) {
        var total = (parseFloat(Rate) * parseFloat(QTY) * parseFloat(Number)).toFixed(2);
        var totalDiscount = (parseFloat(Discountamt) * parseFloat(QTY) * parseFloat(Number)).toFixed(2);
        $("#CargoBasedStorageTotal").val(total);
        $('#CargoBasedStorageDiscountamt').val(totalDiscount);
        var GSTAMT = ((total - totalDiscount) * GSTPer / 100).toFixed(2);
        $("#CargoBasedStorageNetamount").val((parseFloat((total - totalDiscount)) + parseFloat(GSTAMT)));
    }
}

function AddMiscInvoiceCargoBasedStorage() {
    //event.preventDefault();
    //// Disable the button to prevent multiple clicks
    //$("#btnCargoBasedStorageGW").prop("disabled", true);
    $("#btnCargoBasedStorageGW").hide();
    $("#tmpbtnCargoBaseStorage").show();
    $(".redborder").removeClass("redborder");
    $.ajax({
        url: GetRootPath + "MiscInvoice/validateModelCargoBasedStorage",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "") {
                var Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");
                $("#btnCargoBasedStorageGW").show();
                $("#tmpbtnCargoBaseStorage").hide();
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
                    url: GetRootPath + "MiscInvoice/AddMiscInvoiceCargoBasedStorage",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        $("#btnCargoBasedStorageGW").show();
                        $("#tmpbtnCargoBaseStorage").hide();
                        ClearMiscInvoiceCargoBasedStorage();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillMiscInvoiceCargoBasedStorageGrid();
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        },
        complete: function () {
            // Re-enable the button after the AJAX request is complete
            $("#btnCargoBasedStorageGW").prop("disabled", false);
        }
    });
}

function FillMiscInvoiceCargoBasedStorageGrid() {
    $("#CargoBaseStorageDetails").html("");

    $.ajax({
        url: GetRootPath + "MiscInvoice/FillMiscInvoiceCargoBasedStorageGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#CargoBaseStorageDetails").html(data);
                ClearMiscInvoiceCargoBasedStorage();
            }
            filldatatable();
        }
    });
}

function ClearMiscInvoiceCargoBasedStorage() {

    $("#CargoBasedStorageUOM").val('');
    $("#CargoBasedStorageGSTPer").val('0');
    $("#CargoBasedStorageCargoType").val('');
    $("#CargoBasedStorageBillCommodity").val('');
    $("#CargoBasedStorageSubcommodity").val('');
    $("#CargoBasedStorageTariffHead").val('');
    $("#CargoBasedStorageSubcommodity").val('');
    $("#CargoBasedStorageTariffHeadID").val('0');
    $("#CargoBasedStorageRate").val('0');
    $("#CargoBasedStorageTotal").val('0');
    $("#CargoBasedStorageDiscountamt").val('0');
    $("#CargoBasedStorageNetamount").val('0');
    $("#CargoBasedStorageBillCommodityID").val('0');
    $("#CargoBasedStorageStorageStartDate").val('');
    $("#CargoBasedStoragetxtEndDate").text('');
    $("#CargoBasedStorageStorageEndDate").val('');
    $("#CargoBasedStorageNoOfStoragePeriod").val('0');
    $("#CargoBasedStorageStoragePeriod").val('0');
    $("#CargoBasedStorageArea").val('0');
    $("#CargoBasedStorageUOMID").val('0');
    $("#CargoBasedStorageCargoTypeID").val('0');
    $("#CargoBasedStorageSubcommodityID").val('0');
    $("#CargoBasedStorageQTY").val('0');
    $("#CargoBasedStorageWeight").val('0');
    $("#MiscInvoiceCargoBasedStorageID").val('0');
    $("#btnCargoBasedStorage").text("Add");
}

function EditMiscInvoiceCargoBasedStorage(ID) {
    $("#CargoBasedStorageUOM").val($("#CargoBasedStorageUOM_" + ID).text());
    $("#CargoBasedStorageGSTPer").val($("#CargoBasedStorageGSTPer_" + ID).text());
    $("#CargoBasedStorageCargoType").val($("#CargoBasedStorageCargoType_" + ID).text());
    $("#CargoBasedStorageBillCommodity").val($("#CargoBasedStorageBillCommodity_" + ID).text());
    $("#CargoBasedStorageSubcommodity").val($("#CargoBasedStorageSubcommodity_" + ID).text());
    $("#CargoBasedStorageTariffHead").val($("#CargoBasedStorageTariffHead_" + ID).text());
    $("#CargoBasedStorageUOMID").val($("#CargoBasedStorageUOMID_" + ID).text());
    $("#CargoBasedStorageTariffHeadID").val($("#CargoBasedStorageTariffHeadID_" + ID).text());
    $("#CargoBasedStorageRate").val($("#CargoBasedStorageRate_" + ID).text());
    $("#CargoBasedStorageTotal").val($("#CargoBasedStorageTotal_" + ID).text());
    $("#CargoBasedStorageDiscountamt").val($("#CargoBasedStorageDiscountamt_" + ID).text());
    $("#CargoBasedStorageNetamount").val($("#CargoBasedStorageNetamount_" + ID).text());
    $("#CargoBasedStorageBillCommodityID").val($("#CargoBasedStorageBillCommodityID_" + ID).text());
    $("#CargoBasedStorageCargoTypeID").val($("#CargoBasedStorageCargoTypeID_" + ID).text());
    $("#CargoBasedStorageQTY").val($("#CargoBasedStorageQTY_" + ID).text());
    $("#CargoBasedStorageWeight").val($("#CargoBasedStorageWeight_" + ID).text());
    $("#CargoBasedStorageStorageStartDate").val($("#CargoBasedStorageStorageStartDate_" + ID).text());
    $("#CargoBasedStoragetxtEndDate").text($("#CargoBasedStorageStorageEndDate_" + ID).text());
    $("#CargoBasedStorageStorageEndDate").val($("#CargoBasedStorageStorageEndDate_" + ID).text());
    $("#CargoBasedStorageSubcommodityID").val($("#CargoBasedStorageSubcommodityID_" + ID).text());
    $("#CargoBasedStorageNoOfStoragePeriod").val($("#CargoBasedStorageNoOfStoragePeriod_" + ID).text());
    $("#CargoBasedStorageStoragePeriod").val($("#CargoBasedStorageStoragePeriod_" + ID).text());
    $("#CargoBasedStorageArea").val($("#CargoBasedStorageArea_" + ID).text());
    $("#btnCargoBasedStorage").text("Save");
    $("#MiscInvoiceCargoBasedStorageID").val(ID);
}

function DeleteMiscInvoiceCargoBasedStorage(ID) {
    $.ajax({
        url: GetRootPath + "MiscInvoice/deleteCargoBasedStorageDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillMiscInvoiceCargoBasedStorageGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}

//----------------------------------------------------------------------------------------------------------------
// Reserve Area Storage
//----------------------------------------------------------------------------------------------------------------
function CalculateReserveAreaStorageAMT() {
    var QTY = $('#ReserveAreaStorageArea').val();
    var Rate = $('#ReserveAreaStorageRate').val();
    var Number = $('#ReserveAreaStorageNoOfStoragePeriod').val();
    var Discountamt = $('#ReserveAreaStorageDiscountamtBase').val();
    var GSTPer = $('#ReserveAreaStorageGSTPer').val();

    if (GSTPer == undefined || GSTPer == null || GSTPer == "" || GSTPer == 0 || GSTPer > 100) {
        GSTPer = 0;
        $('#ReserveAreaStorageGSTPer').val(0);
    }
    if (Number == undefined || Number == null || Number == "" || Number == 0) {
        Number = 0;
        $('#ReserveAreaStorageNoOfStoragePeriod').val(0);

    }
    if (Rate == undefined || Rate == null || Rate == "" || Rate == 0) {
        Rate = 0;
        $('#ReserveAreaStorageRate').val(0);

    }
    if (QTY == undefined || QTY == null || QTY == "" || QTY == 0) {
        QTY = 0;
        $('#ReserveAreaStorageArea').val(0);
    }

    if (Discountamt == undefined || Discountamt == null || Discountamt == "" || Discountamt == 0) {
        Discountamt = 0;
        $('#ReserveAreaStorageDiscountamt').val(0);
    }

    if (parseFloat(QTY) > 0 && parseFloat(Rate) > 0 && parseFloat(Number) > 0) {
        var total = (parseFloat(Rate) * parseFloat(QTY) * parseFloat(Number)).toFixed(2);
        var totalDiscount = (parseFloat(Discountamt) * parseFloat(QTY) * parseFloat(Number)).toFixed(2);
        $("#ReserveAreaStorageTotal").val(total);
        $('#ReserveAreaStorageDiscountamt').val(totalDiscount);
        var GSTAMT = ((total - totalDiscount) * GSTPer / 100).toFixed(2);
        $("#ReserveAreaStorageNetamount").val((parseFloat((total - totalDiscount)) + parseFloat(GSTAMT)));
    }
}

function AddMiscInvoiceReserveAreaStorage() {
    //event.preventDefault();
    //// Disable the button to prevent multiple clicks
    //$("#btnReserveAreaStorageGW").prop("disabled", true);
    $("#btnReserveAreaStorageGW").hide();
    $("#tmpbtnReserveArea").show();
    $(".redborder").removeClass("redborder");
    $.ajax({
        url: GetRootPath + "MiscInvoice/validateModelReserveAreaStorage",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "") {
                var Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");
                $("#btnReserveAreaStorageGW").show();
                $("#tmpbtnReserveArea").hide();
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
                    url: GetRootPath + "MiscInvoice/AddMiscInvoiceReserveAreaStorage",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        $("#btnReserveAreaStorageGW").show();
                        $("#tmpbtnReserveArea").hide();
                        ClearMiscInvoiceReserveAreaStorage();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillMiscInvoiceReserveAreaStorageGrid();
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        },
        complete: function () {
            // Re-enable the button after the AJAX request is complete
            $("#btnReserveAreaStorageGW").prop("disabled", false);
        }
    });
}

function FillMiscInvoiceReserveAreaStorageGrid() {
    $("#ReserveAreaStorageDetails").html("");

    $.ajax({
        url: GetRootPath + "MiscInvoice/FillMiscInvoiceReserveAreaStorageGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ReserveAreaStorageDetails").html(data);
                ClearMiscInvoiceReserveAreaStorage();
            }
            filldatatable();
        }
    });
}

function ClearMiscInvoiceReserveAreaStorage() {

    $("#ReserveAreaStorageUOM").val('');
    $("#ReserveAreaStorageGSTPer").val('0');
    $("#ReserveAreaStorageCargoType").val('');
    $("#ReserveAreaStorageBillCommodity").val('');
    $("#ReserveAreaStorageTariffHead").val('');
    $("#ReserveAreaStorageSubcommodity").val('');
    $("#ReserveAreaStorageSubcommodityID").val('0');
    $("#ReserveAreaStorageTariffHeadID").val('0');
    $("#ReserveAreaStorageRate").val('0');
    $("#ReserveAreaStorageTotal").val('0');
    $("#ReserveAreaStorageDiscountamt").val('0');
    $("#ReserveAreaStorageNetamount").val('0');
    $("#ReserveAreaStorageBillCommodityID").val('0');
    $("#ReserveAreaStorageStorageStartDate").val('');
    $("#ReserveAreaStoragetxtEndDate").text('');
    $("#ReserveAreaStorageStorageEndDate").val('');
    $("#ReserveAreaStorageNoOfStoragePeriod").val('0');
    $("#ReserveAreaStorageStoragePeriod").val('0');
    $("#ReserveAreaStorageArea").val('0');
    $("#ReserveAreaStorageUOMID").val('0');
    $("#ReserveAreaStorageCargoTypeID").val('0');
    $("#MiscInvoiceReserveAreaStorageID").val('0');
    $("#btnReserveAreaStorage").text("Add");
}

function EditMiscInvoiceReserveAreaStorage(ID) {
    $("#ReserveAreaStorageUOM").val($("#ReserveAreaStorageUOM_" + ID).text());
    $("#ReserveAreaStorageGSTPer").val($("#ReserveAreaStorageGSTPer_" + ID).text());
    $("#ReserveAreaStorageCargoType").val($("#ReserveAreaStorageCargoType_" + ID).text());
    $("#ReserveAreaStorageSubcommodity").val($("#ReserveAreaStorageSubcommodity_" + ID).text());
    $("#ReserveAreaStorageSubcommodityID").val($("#ReserveAreaStorageSubcommodityID_" + ID).text());
    $("#ReserveAreaStorageBillCommodity").val($("#ReserveAreaStorageBillCommodity_" + ID).text());
    $("#ReserveAreaStorageTariffHead").val($("#ReserveAreaStorageTariffHead_" + ID).text());
    $("#ReserveAreaStorageUOMID").val($("#ReserveAreaStorageUOMID_" + ID).text());
    $("#ReserveAreaStorageTariffHeadID").val($("#ReserveAreaStorageTariffHeadID_" + ID).text());
    $("#ReserveAreaStorageRate").val($("#ReserveAreaStorageRate_" + ID).text());
    $("#ReserveAreaStorageTotal").val($("#ReserveAreaStorageTotal_" + ID).text());
    $("#ReserveAreaStorageDiscountamt").val($("#ReserveAreaStorageDiscountamt_" + ID).text());
    $("#ReserveAreaStorageNetamount").val($("#ReserveAreaStorageNetamount_" + ID).text());
    $("#ReserveAreaStorageBillCommodityID").val($("#ReserveAreaStorageBillCommodityID_" + ID).text());
    $("#ReserveAreaStorageCargoTypeID").val($("#ReserveAreaStorageCargoTypeID_" + ID).text());
    $("#ReserveAreaStorageStorageStartDate").val($("#ReserveAreaStorageStorageStartDate_" + ID).text());
    $("#ReserveAreaStoragetxtEndDate").text($("#ReserveAreaStorageStorageEndDate_" + ID).text());
    $("#ReserveAreaStorageStorageEndDate").val($("#ReserveAreaStorageStorageEndDate_" + ID).text());
    $("#ReserveAreaStorageNoOfStoragePeriod").val($("#ReserveAreaStorageNoOfStoragePeriod_" + ID).text());
    $("#ReserveAreaStorageStoragePeriod").val($("#ReserveAreaStorageStoragePeriod_" + ID).text());
    $("#ReserveAreaStorageArea").val($("#ReserveAreaStorageArea_" + ID).text());
    $("#btnReserveAreaStorage").text("Save");
    $("#MiscInvoiceReserveAreaStorageID").val(ID);
}

function DeleteMiscInvoiceReserveAreaStorage(ID) {
    $.ajax({
        url: GetRootPath + "MiscInvoice/deleteReserveAreaStorageDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillMiscInvoiceReserveAreaStorageGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}

//----------------------------------------------------------------------------------------------------------------
// Container Slabwise Storage
//----------------------------------------------------------------------------------------------------------------
function CalculateContainerSlabwiseStorageAMT() {
    debugger
    var NoofContainers = $('#ContainerSlabwiseStorageNoofContainers').val();
    var Rate = $('#ContainerSlabwiseStorageTotalBase').val();
    var CompareTotal = $("#ContainerSlabwiseStorageTotal").val();
    var Discountamt = $('#ContainerSlabwiseStorageDiscountamtBase').val();
    var GSTPer = $('#ContainerSlabwiseStorageGSTPer').val();
    $("#hdnContainerSlabwiseStorageRate").val(Rate);
    if (GSTPer == undefined || GSTPer == null || GSTPer == "" || GSTPer == 0 || GSTPer > 100) {
        GSTPer = 0;
        $('#ContainerSlabwiseStorageGSTPer').val(0);
    }

    if (NoofContainers == undefined || NoofContainers == null || NoofContainers == "" || NoofContainers == 0) {
        NoofContainers = 0;
        $('#ContainerSlabwiseStorageNoofContainers').val(0);

    }

    if (Rate == undefined || Rate == null || Rate == "" || Rate == 0) {
        Rate = 0;
        $('#ContainerSlabwiseStorageTotal').val(0);

    }

    if (Discountamt == undefined || Discountamt == null || Discountamt == "" || Discountamt == 0) {
        Discountamt = 0;
        $('#ContainerSlabwiseStorageDiscountamt').val(0);
    }

    if (parseFloat(NoofContainers) > 0 && parseFloat(Rate) > 0) {
        var total = (parseFloat(Rate) * parseFloat(NoofContainers)).toFixed(2);
        var totalDiscount = (parseFloat(Discountamt) * parseFloat(NoofContainers)).toFixed(2);
        $("#ContainerSlabwiseStorageTotal").val(total);
        $('#ContainerSlabwiseStorageDiscountamt').val(totalDiscount);
        var GSTAMT = ((total - totalDiscount) * GSTPer / 100).toFixed(2);
        $("#ContainerSlabwiseStorageNetamount").val((parseFloat((total - totalDiscount)) + parseFloat(GSTAMT)));
    }

    if (CompareTotal == undefined || CompareTotal == null || CompareTotal == "" || CompareTotal == 0) {
        $("#ContainerSlabwiseStorageNetamount").val("0");
        $("#ContainerSlabwiseStorageDiscountamt").val("0");        
    }
}

function getdatediff() {
    if ($("#ContainerSlabwiseStorageStorageStartDate").val() != "" && $("#ContainerSlabwiseStorageStorageStartDate").val() != null && $("#ContainerSlabwiseStorageStorageStartDate").val() != undefined && $("#ContainerSlabwiseStorageStorageEndDate").val() != "" && $("#ContainerSlabwiseStorageStorageEndDate").val() != null && $("#ContainerSlabwiseStorageStorageEndDate").val() != undefined) {
        var Fromdate = $("#ContainerSlabwiseStorageStorageStartDate").val();
        var Todate = $("#ContainerSlabwiseStorageStorageEndDate").val();
        $.ajax({
            url: GetRootPath + "MiscInvoice/checkFordate/?Fromdate=" + Fromdate + "&Todate=" + Todate,
            type: "Get",
            dataType: "text",
            success: function (data) {
                if (data != "") {
                    if (data.split('|')[0] == "true" || data.split('|')[0] == "True") {
                        $("#ReserveAreaStoragetxtDiffDay").text(data.split('|')[1]);
                    }
                    else {
                        $("#ContainerSlabwiseStorageStorageEndDate").val('');
                        $("#ReserveAreaStoragetxtDiffDay").text(0);
                    }
                }
            }
        });

    }
    else {
        $("#ContainerSlabwiseStorageStorageEndDate").val('');
        $("#ReserveAreaStoragetxtDiffDay").text(0);
    }
}

function AddMiscInvoiceContainerSlabwiseStorage() {
    //event.preventDefault();
    //// Disable the button to prevent multiple clicks
    //$("#btnContainerSlabwiseStorageGW").prop("disabled", true);
    $(".redborder").removeClass("redborder");
    $("#btnContainerSlabwiseStorageGW").hide();
    $("#tmpbtnContSLB").show();
    $.ajax({
        url: GetRootPath + "MiscInvoice/validateModelContainerSlabwiseStorage",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "") {
                var Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");
                $("#btnContainerSlabwiseStorageGW").show();
                $("#tmpbtnContSLB").hide();
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
                    url: GetRootPath + "MiscInvoice/AddMiscInvoiceContainerSlabwiseStorage",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        $("#btnContainerSlabwiseStorageGW").show();
                        $("#tmpbtnContSLB").hide();
                        ClearMiscInvoiceContainerSlabwiseStorage();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillMiscInvoiceContainerSlabwiseStorageGrid();
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        },
        complete: function () {
            // Re-enable the button after the AJAX request is complete
            $("#btnContainerSlabwiseStorageGW").prop("disabled", false);
        }
    });
}

function FillMiscInvoiceContainerSlabwiseStorageGrid() {
    $("#ContainerSlabwiseStorageDetails").html("");

    $.ajax({
        url: GetRootPath + "MiscInvoice/FillMiscInvoiceContainerSlabwiseStorageGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ContainerSlabwiseStorageDetails").html(data);
            }
            ClearMiscInvoiceContainerSlabwiseStorage();
            filldatatable();
        }
    });
}

function ClearMiscInvoiceContainerSlabwiseStorage() {
    $("#ContainerSlabwiseStorageContSizeName").val('');
    $("#ContainerSlabwiseStorageGSTPer").val('0');
    $("#ContainerSlabwiseStorageCargoType").val('');
    $("#ContainerSlabwiseStorageBillCommodity").val('');
    $("#ContainerSlabwiseStorageSubcommodity").val('');
    $("#ContainerSlabwiseStorageTariffHead").val('');
    $("#ContainerSlabwiseStorageStorageStartDate").val('');
    $("#ContainerSlabwiseStorageStorageEndDate").val('');
    $("#ContainerSlabwiseStorageContSizeID").val('0');
    $("#ContainerSlabwiseStorageTariffHeadID").val('0');
    $("#ContainerSlabwiseStorageTotal").val('0');
    $("#ContainerSlabwiseStorageDiscountamt").val('0');
    $("#ContainerSlabwiseStorageNetamount").val('0');
    $("#ContainerSlabwiseStorageBillCommodityID").val('0');
    $("#ContainerSlabwiseStorageSubcommodityID").val('0');
    $("#ContainerSlabwiseStorageCargoTypeID").val('0');
    $("#ContainerSlabwiseStorageNoofContainers").val('0');
    $("#MiscInvoiceContainerSlabwiseStorageID").val('0');
    $("#btnContainerSlabwiseStorage").text("Add");
    getdatediff();
}

function EditMiscInvoiceContainerSlabwiseStorage(ID) {
    $("#ContainerSlabwiseStorageContSizeName").val($("#ContainerSlabwiseStorageContSizeName_" + ID).text());
    $("#ContainerSlabwiseStorageGSTPer").val($("#ContainerSlabwiseStorageGSTPer_" + ID).text());
    $("#ContainerSlabwiseStorageCargoType").val($("#ContainerSlabwiseStorageCargoType_" + ID).text());
    $("#ContainerSlabwiseStorageBillCommodity").val($("#ContainerSlabwiseStorageBillCommodity_" + ID).text());
    $("#ContainerSlabwiseStorageSubcommodity").val($("#ContainerSlabwiseStorageSubcommodity_" + ID).text());
    $("#ContainerSlabwiseStorageTariffHead").val($("#ContainerSlabwiseStorageTariffHead_" + ID).text());
    $("#ContainerSlabwiseStorageStorageStartDate").val($("#ContainerSlabwiseStorageStorageStartDate_" + ID).text());
    $("#ContainerSlabwiseStorageStorageEndDate").val($("#ContainerSlabwiseStorageStorageEndDate_" + ID).text());
    $("#ContainerSlabwiseStorageContSizeID").val($("#ContainerSlabwiseStorageContSizeID_" + ID).text());
    $("#ContainerSlabwiseStorageTariffHeadID").val($("#ContainerSlabwiseStorageTariffHeadID_" + ID).text());
    $("#ContainerSlabwiseStorageTotal").val($("#ContainerSlabwiseStorageTotal_" + ID).text());
    $("#ContainerSlabwiseStorageDiscountamt").val($("#ContainerSlabwiseStorageDiscountamt_" + ID).text());
    $("#ContainerSlabwiseStorageNetamount").val($("#ContainerSlabwiseStorageNetamount_" + ID).text());
    $("#ContainerSlabwiseStorageBillCommodityID").val($("#ContainerSlabwiseStorageBillCommodityID_" + ID).text());
    $("#ContainerSlabwiseStorageSubcommodityID").val($("#ContainerSlabwiseStorageSubcommodityID_" + ID).text());
    $("#ContainerSlabwiseStorageCargoTypeID").val($("#ContainerSlabwiseStorageCargoTypeID_" + ID).text());
    $("#ContainerSlabwiseStorageNoofContainers").val($("#ContainerSlabwiseStorageNoofContainers_" + ID).text());
    $("#btnContainerSlabwiseStorage").text("Save");
    $("#MiscInvoiceContainerSlabwiseStorageID").val(ID);
    getdatediff();
}

function DeleteMiscInvoiceContainerSlabwiseStorage(ID) {
    $.ajax({
        url: GetRootPath + "MiscInvoice/deleteContainerSlabwiseStorageDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillMiscInvoiceContainerSlabwiseStorageGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}
//----------------------------------------------------------------------------------------------------------------
// Cargo Slabwise Storage
//----------------------------------------------------------------------------------------------------------------
function CalculateCargoSlabwiseStorageAMT() {

    debugger;
    var UOMCode = $('#CargoSlabwiseStorageUOM').val();
    var QTY = 0;
    if (UOMCode == "KGS") {
        QTY = $('#CargoSlabwiseStorageWeight').val();
    }
    else if (UOMCode == "PER UNIT") {
        QTY = $('#CargoSlabwiseStorageQTY').val();
    }
    else if (UOMCode == "SQR FEET" || UOMCode == "SQR MTR") {
        QTY = $('#CargoSlabwiseStorageArea').val();
    }

    $("#hdnCargoSlabwiseStorageRateBase").val($('#CargoSlabwiseStorageRateBase').val());

    var Rate = $('#CargoSlabwiseStorageRateBase').val();
    var Number = $('#CargoSlabwiseStorageNoOfStoragePeriod').val();
    var Discountamt = $('#CargoSlabwiseStorageDiscountamtBase').val();
    var GSTPer = $('#CargoSlabwiseStorageGSTPer').val();

    if (QTY == undefined || QTY == null || QTY == "" || QTY == 0) {
        QTY = 0;
        $('#CargoSlabwiseStorageQTY').val(0);
    }

    if (Number == undefined || Number == null || Number == "" || Number == 0) {
        Number = 0;
        $('#CargoSlabwiseStorageNoOfStoragePeriod').val(0);
    }

    if (Rate == undefined || Rate == null || Rate == "" || Rate == 0) {
        Rate = 0;
        $('#CargoSlabwiseStorageTotal').val(0);
    }

    if (Discountamt == undefined || Discountamt == null || Discountamt == "" || Discountamt == 0) {
        Discountamt = 0;
        $('#CargoSlabwiseStorageDiscountamt').val(0);
    }

    if (GSTPer == undefined || GSTPer == null || GSTPer == "" || GSTPer == 0 || GSTPer > 100) {
        GSTPer = 0;
        $('#CargoSlabwiseStorageGSTPer').val(0);
    }
    if (parseFloat(QTY) > 0 && parseFloat(Rate) > 0 && parseFloat(Number) > 0) {
        var total = (parseFloat(Rate) * parseFloat(QTY) * parseFloat(Number)).toFixed(2);
        var totalDiscount = (parseFloat(Discountamt) * parseFloat(QTY) * parseFloat(Number)).toFixed(2);
        $("#CargoSlabwiseStorageTotal").val(total);
        $('#CargoSlabwiseStorageDiscountamt').val(totalDiscount);
        var GSTAMT = ((total - totalDiscount) * GSTPer / 100).toFixed(2);
        $("#CargoSlabwiseStorageNetamount").val((parseFloat((total - totalDiscount)) + parseFloat(GSTAMT)));
    }
}

function AddMiscInvoiceCargoSlabwiseStorage() {
    //event.preventDefault();
    //// Disable the button to prevent multiple clicks
    //$("#btnCargoSlabwiseStorageGW").prop("disabled", true);
    $("#btnCargoSlabwiseStorageGW").hide();
    $("#tmpbtnCargoSLB").show();
    $(".redborder").removeClass("redborder");
    $.ajax({
        url: GetRootPath + "MiscInvoice/validateModelCargoSlabwiseStorage",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "") {
                var Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");
                $("#btnCargoSlabwiseStorageGW").show();
                $("#tmpbtnCargoSLB").hide();
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
                    url: GetRootPath + "MiscInvoice/AddMiscInvoiceCargoSlabwiseStorage",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        $("#btnCargoSlabwiseStorageGW").show();
                        $("#tmpbtnCargoSLB").hide();
                        ClearMiscInvoiceCargoSlabwiseStorage();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillMiscInvoiceCargoSlabwiseStorageGrid();
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        },
        complete: function () {
            // Re-enable the button after the AJAX request is complete
            $("#btnCargoSlabwiseStorageGW").prop("disabled", false);
        }
    });
}

function FillMiscInvoiceCargoSlabwiseStorageGrid() {
    $("#CargoSlabwiseStorageDetails").html("");

    $.ajax({
        url: GetRootPath + "MiscInvoice/FillMiscInvoiceCargoSlabwiseStorageGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#CargoSlabwiseStorageDetails").html(data);
                ClearMiscInvoiceCargoSlabwiseStorage();
            }
            filldatatable();
        }
    });
}

function ClearMiscInvoiceCargoSlabwiseStorage() {

    $("#CargoSlabwiseStorageUOM").val('');
    $("#CargoSlabwiseStorageSubcommodity").val('');
    $("#CargoSlabwiseStorageSubcommodityID").val('0');
    $("#CargoSlabwiseStorageGSTPer").val('0');
    $("#CargoSlabwiseStorageCargoType").val('');
    $("#CargoSlabwiseStorageBillCommodity").val('');
    $("#CargoSlabwiseStorageTariffHead").val('');
    $("#CargoSlabwiseStorageSubcommodity").val('');
    $("#CargoSlabwiseStorageTariffHeadID").val('0');
    $("#CargoSlabwiseStorageRate").val('0');
    $("#CargoSlabwiseStorageTotal").val('0');
    $("#CargoSlabwiseStorageDiscountamt").val('0');
    $("#CargoSlabwiseStorageNetamount").val('0');
    $("#CargoSlabwiseStorageBillCommodityID").val('0');
    $("#CargoSlabwiseStorageStorageStartDate").val('');
    $("#CargoSlabwiseStoragetxtEndDate").text('');
    $("#CargoSlabwiseStorageStorageEndDate").val('');
    $("#CargoSlabwiseStorageNoOfStoragePeriod").val('0');
    $("#CargoSlabwiseStorageStoragePeriod").val('0');
    $("#CargoSlabwiseStorageArea").val('0');
    $("#CargoSlabwiseStorageUOMID").val('0');
    $("#CargoSlabwiseStorageCargoTypeID").val('0');
    $("#CargoSlabwiseStorageQTY").val('0');
    $("#CargoSlabwiseStorageWeight").val('0');
    $("#MiscInvoiceCargoSlabwiseStorageID").val('0');
    $("#btnCargoSlabwiseStorage").text("Add");
    $("#CargoSlabwiseStorageQTY").prop("readonly", false);
    $("#CargoSlabwiseStorageWeight").prop("readonly", false);
}

function EditMiscInvoiceCargoSlabwiseStorage(ID) {
    $("#CargoSlabwiseStorageUOM").val($("#CargoSlabwiseStorageUOM_" + ID).text());
    $("#CargoSlabwiseStorageSubcommodity").val($("#CargoSlabwiseStorageSubcommodity_" + ID).text());
    $("#CargoSlabwiseStorageSubcommodityID").val($("#CargoSlabwiseStorageSubcommodityID_" + ID).text());
    $("#CargoSlabwiseStorageGSTPer").val($("#CargoSlabwiseStorageGSTPer_" + ID).text());
    $("#CargoSlabwiseStorageCargoType").val($("#CargoSlabwiseStorageCargoType_" + ID).text());
    $("#CargoSlabwiseStorageBillCommodity").val($("#CargoSlabwiseStorageBillCommodity_" + ID).text());
    $("#CargoSlabwiseStorageTariffHead").val($("#CargoSlabwiseStorageTariffHead_" + ID).text());
    $("#CargoSlabwiseStorageUOMID").val($("#CargoSlabwiseStorageUOMID_" + ID).text());
    $("#CargoSlabwiseStorageTariffHeadID").val($("#CargoSlabwiseStorageTariffHeadID_" + ID).text());
    $("#CargoSlabwiseStorageRate").val($("#CargoSlabwiseStorageRate_" + ID).text());
    $("#CargoSlabwiseStorageTotal").val($("#CargoSlabwiseStorageTotal_" + ID).text());
    $("#CargoSlabwiseStorageDiscountamt").val($("#CargoSlabwiseStorageDiscountamt_" + ID).text());
    $("#CargoSlabwiseStorageNetamount").val($("#CargoSlabwiseStorageNetamount_" + ID).text());
    $("#CargoSlabwiseStorageBillCommodityID").val($("#CargoSlabwiseStorageBillCommodityID_" + ID).text());
    $("#CargoSlabwiseStorageCargoTypeID").val($("#CargoSlabwiseStorageCargoTypeID_" + ID).text());
    $("#CargoSlabwiseStorageQTY").val($("#CargoSlabwiseStorageQTY_" + ID).text());
    $("#CargoSlabwiseStorageWeight").val($("#CargoSlabwiseStorageWeight_" + ID).text());
    $("#CargoSlabwiseStorageStorageStartDate").val($("#CargoSlabwiseStorageStorageStartDate_" + ID).text());
    $("#CargoSlabwiseStoragetxtEndDate").text($("#CargoSlabwiseStorageStorageEndDate_" + ID).text());
    $("#CargoSlabwiseStorageStorageEndDate").val($("#CargoSlabwiseStorageStorageEndDate_" + ID).text());
    $("#CargoSlabwiseStorageNoOfStoragePeriod").val($("#CargoSlabwiseStorageNoOfStoragePeriod_" + ID).text());
    $("#CargoSlabwiseStorageStoragePeriod").val($("#CargoSlabwiseStorageStoragePeriod_" + ID).text());
    $("#CargoSlabwiseStorageArea").val($("#CargoSlabwiseStorageArea_" + ID).text());
    $("#btnCargoSlabwiseStorage").text("Save");
    $("#MiscInvoiceCargoSlabwiseStorageID").val(ID);
    if ($("#CargoSlabwiseStorageUOM").val() == "KGS") {
        $("#CargoSlabwiseStorageArea").prop("readonly", true);
        $("#CargoSlabwiseStorageQTY").prop("readonly", true);
        $("#CargoSlabwiseStorageWeight").prop("readonly", false);

    }
    else if ($("#CargoSlabwiseStorageUOM").val() == "PER UNIT") {
        $("#CargoSlabwiseStorageArea").prop("readonly", true);
        $("#CargoSlabwiseStorageQTY").prop("readonly", false);
        $("#CargoSlabwiseStorageWeight").prop("readonly", true);
    }
    else {
        $("#CargoSlabwiseStorageArea").prop("readonly", false);
        $("#CargoSlabwiseStorageQTY").prop("readonly", true);
        $("#CargoSlabwiseStorageWeight").prop("readonly", true);
    }
}

function DeleteMiscInvoiceCargoSlabwiseStorage(ID) {
    $.ajax({
        url: GetRootPath + "MiscInvoice/deleteCargoSlabwiseStorageDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillMiscInvoiceCargoSlabwiseStorageGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}

//----------------------------------------------------------------------------------------------------------------
// Other Terrif Details
//----------------------------------------------------------------------------------------------------------------
function CalculateOtherTerrifDetailsAMT() {
    var QTY = $('#OtherTerrifDetailsQTY').val();
    var Rate = $('#OtherTerrifDetailsRate').val();
    var Discount = $('#OtherTerrifDetailsDiscount').val();
    var GSTPer = $('#OtherTerrifDetailsGSTPer').val();

    if (Rate == undefined || Rate == null || Rate == "" || Rate == 0) {
        Rate = 0;
        $('#OtherTerrifDetailsTotal').val(0);
        Discount = 0;
        $('#OtherTerrifDetailsDiscount').val(0);
    }
    if (GSTPer == undefined || GSTPer == null || GSTPer == "" || GSTPer == 0 || GSTPer > 100) {
        GSTPer = 0;
        $('#OtherTerrifDetailsGSTPer').val(0);
        $('#OtherTerrifDetailsGSTAmount').val(0);
    }
    if (Discount == undefined || Discount == null || Discount == "" || Discount == 0) {
        Discount = 0;
        $('#OtherTerrifDetailsDiscount').val(0);
        $('#OtherTerrifDetailsDiscountAmt').val(0);
    }

    if ((parseFloat(Rate) * parseFloat(QTY)) <= (parseFloat(Discount) * parseFloat(QTY))) {
        Discount = 0;
        $('#OtherTerrifDetailsDiscount').val(0);
        $('#OtherTerrifDetailsDiscountAmt').val(0);
    }
    var DiscountAmount = parseFloat(Discount) * parseFloat(QTY);
    var TaxableAmount = ((parseFloat(Rate) * parseFloat(QTY)) - DiscountAmount);
    var GSTAMT = ((((parseFloat(Rate) * parseFloat(QTY)) - (parseFloat(Discount) * parseFloat(QTY))) * GSTPer) / 100);

    $('#OtherTerrifDetailsGSTAmount').val(GSTAMT.toFixed(2));
    $('#OtherTerrifDetailsDiscountamt').val(DiscountAmount.toFixed(2));
    $('#OtherTerrifDetailsTaxableAmount').val(TaxableAmount.toFixed(2));
    $("#OtherTerrifDetailsTotal").val((parseFloat(Rate) * parseFloat(QTY)).toFixed(2));
    $("#OtherTerrifDetailsNetAmount").val((TaxableAmount + GSTAMT).toFixed(2));

    // var GSTAMT = ((((parseFloat(Rate) * parseFloat(QTY)) - (parseFloat(Discount) * parseFloat(QTY))) * GSTPer) / 100);
    // $("#OtherTerrifDetailsTotal").val(((parseFloat(Rate) * parseFloat(QTY)) - (parseFloat(Discount) * parseFloat(QTY)) + GSTAMT).toFixed(2));

}

function AddMiscInvoiceOtherTerrifDetails() {
    event.preventDefault();
    // Disable the button to prevent multiple clicks
    $("#btnOtherTerrifDetailsGW").prop("disabled", true);
    $(".redborder").removeClass("redborder");
    $.ajax({
        url: GetRootPath + "MiscInvoice/validateModelOtherTerrifDetails",
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
                    url: GetRootPath + "MiscInvoice/AddMiscInvoiceOtherTerrifDetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        ClearMiscInvoiceOtherTerrifDetails();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillMiscInvoiceOtherTerrifDetailsGrid();
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        },
        complete: function () {
            // Re-enable the button after the AJAX request is complete
            $("#btnOtherTerrifDetailsGW").prop("disabled", false);
        }
    });
}

function FillMiscInvoiceOtherTerrifDetailsGrid() {
    $("#OtherTerrifDetailsDetails").html("");

    $.ajax({
        url: GetRootPath + "MiscInvoice/FillMiscInvoiceOtherTerrifDetailsGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#OtherTerrifDetailsDetails").html(data);
                ClearMiscInvoiceOtherTerrifDetails();
            }
            filldatatable();
        }
    });
}

function ClearMiscInvoiceOtherTerrifDetails() {
    $("#OtherTerrifDetailsGSTPer").val('0');
    $("#OtherTerrifDetailsGSTAmount").val('0');
    $("#OtherTerrifDetailsTaxableAmount").val('0');
    $("#OtherTerrifDetailsDiscountamt").val('0');
    $("#OtherTerrifDetailsDiscount").val('0');
    $("#OtherTerrifDetailsTariffHead").val('');
    $("#OtherTerrifDetailsTariffHeadID").val('0');
    $("#OtherTerrifDetailsRate").val('0');
    $("#OtherTerrifDetailsTotal").val('0');
    $("#OtherTerrifDetailsNetAmount").val('0');
    $("#OtherTerrifDetailsQTY").val('0');
    $("#MiscInvoiceOtherTerrifDetailsID").val('0');
    $("#btnOtherTerrifDetails").text("Add");

}

function EditMiscInvoiceOtherTerrifDetails(ID) {
    $("#OtherTerrifDetailsTariffHead").val($("#OtherTerrifDetailsTariffHead_" + ID).text());
    $("#OtherTerrifDetailsTariffHeadID").val($("#OtherTerrifDetailsTariffHeadID_" + ID).text());
    $("#OtherTerrifDetailsRate").val($("#OtherTerrifDetailsRate_" + ID).text());
    $("#OtherTerrifDetailsTotal").val($("#OtherTerrifDetailsTotal_" + ID).text());
    $("#OtherTerrifDetailsQTY").val($("#OtherTerrifDetailsQTY_" + ID).text());
    $("#btnOtherTerrifDetails").text("Save");
    $("#MiscInvoiceOtherTerrifDetailsID").val(ID);
    $("#OtherTerrifDetailsGSTPer").val($("#OtherTerrifDetailsGSTPer_" + ID).text());
    $("#OtherTerrifDetailsDiscount").val($("#OtherTerrifDetailsDiscount_" + ID).text());
    $("#OtherTerrifDetailsDiscountamt").val($("#OtherTerrifDetailsDiscountamt_" + ID).text());
    $("#OtherTerrifDetailsNetAmount").val($("#OtherTerrifDetailsNetAmount_" + ID).text());
    $("#OtherTerrifDetailsGSTAmount").val($("#OtherTerrifDetailsGSTAmount_" + ID).text());
    $("#OtherTerrifDetailsTaxableAmount").val($("#OtherTerrifDetailsTaxableAmount_" + ID).text());
}

function DeleteMiscInvoiceOtherTerrifDetails(ID) {
    $.ajax({
        url: GetRootPath + "MiscInvoice/deleteOtherTerrifDetailsDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillMiscInvoiceOtherTerrifDetailsGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}
//----------------------------------------------------------------------------------------------------------------

function openOtherterrif() {
    FillMiscInvoiceOtherTerrifDetailsGrid();
    SetfuncationModelValue('OtherTerrifDetails')
    $("#AddOtherTariffHead").modal("show");
    setTimeout(function () {
        Autocompletebox("OtherTerrifDetailsTariffHead", "OtherTerrifDetailsTariffHeadID", "MiscInvoice", "GetTariffHead/" + $("#MiscInvoiceID").val());
    }, 500);
}

function FinishedAllChanges(ID) {

    debugger

    let isvalid = true;
    let Errormsg = "";

    let PaymentTypeName = $("#PaymentTypeName").val()

    if (PaymentTypeName == "Cash") {

        let PaymentModeOfReceipt = $("#PaymentModeOfReceipt").val();
        let AmountOfReceipt = $("#AmountOfReceipt").val();
        let ReceiptDetails = $("#ChequeDDNeftNoOfReceipt").val();
        let ReceiptDate = $("#ChequeDDNeftDateOfReceipt").val();
        let BankDetails = $("#BankDetailsOfReceipt").val();

        let finalAmount = parseFloat(AmountOfReceipt);

        if (PaymentModeOfReceipt == "Cash") {

            if (!($.isNumeric(AmountOfReceipt)) || AmountOfReceipt == "" || finalAmount == 0) {

                Errormsg += "Please Enter Receipt Amount <br />";
                $("#AmountOfReceipt").addClass("redborder");
            } else {
                $("#AmountOfReceipt").removeClass("redborder");
            }

        }

        if (PaymentModeOfReceipt != "Cash") {

            if (!($.isNumeric(AmountOfReceipt)) || AmountOfReceipt == "" || finalAmount == 0) {

                Errormsg += "Please Enter Receipt Amount <br />";
                $("#AmountOfReceipt").addClass("redborder");
            } else {
                $("#AmountOfReceipt").removeClass("redborder");
            }

            if (ReceiptDetails == "") {

                Errormsg += "Please Enter Receipt Number <br />";
                $("#ChequeDDNeftNoOfReceipt").addClass("redborder");
            } else {
                $("#ChequeDDNeftNoOfReceipt").removeClass("redborder");
            }

            if (ReceiptDate == "") {

                Errormsg += "Please Enter Receipt Date <br />";
                $("#ChequeDDNeftDateOfReceipt").addClass("redborder");
            } else {
                $("#ChequeDDNeftDateOfReceipt").removeClass("redborder");
            }

            if (PaymentModeOfReceipt == "DD" || PaymentModeOfReceipt == "CHEQUE") {

                if (BankDetails == "") {

                    Errormsg += "Please Enter Receipt Bank Details <br />";
                    $("#BankDetailsOfReceipt").addClass("redborder");
                } else {
                    $("#BankDetailsOfReceipt").removeClass("redborder");
                }
            } else {
                $("#BankDetailsOfReceipt").removeClass("redborder");
            }
        } else {
            $("#ChequeDDNeftNoOfReceipt").removeClass("redborder");
            $("#ChequeDDNeftDateOfReceipt").removeClass("redborder");
            $("#BankDetailsOfReceipt").removeClass("redborder");
        }

    }

    if (Errormsg != "") {
        TosterAlert("error", Errormsg, "Required!");
        isvalid = false;
    } else {

        $.ajax({
            url: GetRootPath + "MiscInvoice/FinishedAllChanges/" + ID,
            type: "Get",
            dataType: "text",
            success: function (data) {
                window.location = GetRootPath + "MiscInvoice/index";
            }
        });
    }

    return isvalid;
}

function GetGeneralTriffDetails() {
    debugger
    $.ajax({
        url: GetRootPath + "MiscInvoice/GetGeneralTeriffDetails/?ModelName=" + ModelName,
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {


            if (data != "") {
                if (data == "" && $("#" + ModelName + "TariffHead").val() != "") {
                    TosterAlert(AlertMessageType.WARNING, "Selected Triff is undefine.", AlertMessageTitle.WARNING);
                }
                else {
                    if ($("#" + ModelName + "TariffHead").val() != "") {
                        TosterAlert(AlertMessageType.SUCCESS, "Tarrif is available", AlertMessageTitle.SUCCESS);
                    }
                }
                if (ModelName == "ContainerHandling") {

                    $("#ContainerHandlingRate").val(data.split('|')[0]);
                    $("#ContainerHandlingDiscountamt").val(data.split('|')[1]);
                    $("#ContainerHandlingGSTPer").val(data.split('|')[2]);
                    $("#ContainerHandlingDiscountamtBase").val($("#ContainerHandlingDiscountamt").val())
                    CalculateAMT();
                }
                else if (ModelName == "CargoHandling") {
                    if ($("#CargoHandlingUOM").val() == "KGS") {
                        $("#CargoHandlingRate").val(parseFloat(data.split('|')[0]) / 1000);
                        $("#CargoHandlingDiscountamt").val(parseFloat(data.split('|')[1]) / 1000);
                        $("#CargoHandlingQTY").prop('readonly', true);
                        $("#CargoHandlingWeight").prop('readonly', false);
                        $("#CargoHandlingQTY").val("0");
                    }
                    else {
                        $("#CargoHandlingRate").val(parseFloat(data.split('|')[0]));
                        $("#CargoHandlingDiscountamt").val(parseFloat(data.split('|')[1]));
                        $("#CargoHandlingQTY").prop('readonly', false);
                        $("#CargoHandlingWeight").prop('readonly', true);
                        $("#CargoHandlingWeight").val("0");
                    }
                    $("#CargoHandlingDiscountamtBaseValue").val($("#CargoHandlingDiscountamt").val())
                    $("#CargoHandlingGSTPer").val(data.split('|')[2]);
                    CalculateCargoAMT();
                }
                else if (ModelName == "ContainerBasedStorage") {

                    $("#ContainerBasedStorageRate").val(data.split('|')[0]);
                    $("#ContainerBasedStorageDiscountamtBase").val(data.split('|')[1]);
                    $("#ContainerBasedStorageDiscountamt").val(data.split('|')[1]);
                    $("#ContainerBasedStorageGSTPer").val(data.split('|')[2]);



                    CalculateContainerBasedStorageAMT();
                }
                else if (ModelName == "CargoBasedStorage") {
                    debugger;
                    if ($("#CargoBasedStorageUOM").val() == "KGS") {
                        $("#CargoBasedStorageRate").val(parseFloat(data.split('|')[0]) / 1000);
                        $("#CargoBasedStorageDiscountamt").val(parseFloat(data.split('|')[1]) / 1000);
                        $("#CargoBasedStorageDiscountamtBase").val(parseFloat(data.split('|')[1]) / 1000);
                        $("#CargoBasedStorageQTY").prop('readonly', true);
                        $("#CargoBasedStorageArea").prop('readonly', true);
                        $("#CargoBasedStorageWeight").prop('readonly', false);
                        $("#CargoHandlingQTY").val("0");
                        $("#CargoBasedStorageArea").val("0");
                    }
                    else if ($("#CargoBasedStorageUOM").val() == "SQR MTR") {
                        $("#CargoBasedStorageRate").val(parseFloat(data.split('|')[0]));
                        $("#CargoBasedStorageDiscountamt").val(parseFloat(data.split('|')[1]));
                        $("#CargoBasedStorageDiscountamtBase").val(parseFloat(data.split('|')[1]));

                        $("#CargoBasedStorageQTY").prop('readonly', true);
                        $("#CargoBasedStorageArea").prop('readonly', false);
                        $("#CargoBasedStorageWeight").prop('readonly', true);
                        $("#CargoBasedStorageWeight").val("0");
                        $("#CargoBasedStorageQTY").val("0");
                    }
                    else if ($("#CargoBasedStorageUOM").val() == "SQR FEET") {
                        $("#CargoBasedStorageRate").val(parseFloat(data.split('|')[0]));
                        $("#CargoBasedStorageDiscountamt").val(parseFloat(data.split('|')[1]));
                        $("#CargoBasedStorageDiscountamtBase").val(parseFloat(data.split('|')[1]));

                        $("#CargoBasedStorageQTY").prop('readonly', true);
                        $("#CargoBasedStorageArea").prop('readonly', false);
                        $("#CargoBasedStorageWeight").prop('readonly', true);
                        $("#CargoBasedStorageWeight").val("0");
                        $("#CargoBasedStorageQTY").val("0");
                    }
                    else {
                        $("#CargoBasedStorageRate").val(parseFloat(data.split('|')[0]));
                        $("#CargoBasedStorageDiscountamt").val(parseFloat(data.split('|')[1]));
                        $("#CargoBasedStorageDiscountamtBase").val(parseFloat(data.split('|')[1]));
                        $("#CargoBasedStorageQTY").prop('readonly', false);
                        $("#CargoBasedStorageArea").prop('readonly', true);
                        $("#CargoBasedStorageWeight").prop('readonly', true);
                        $("#CargoBasedStorageWeight").val("0");
                        $("#CargoBasedStorageArea").val("0");
                    }

                    $("#CargoBasedStorageGSTPer").val(data.split('|')[2]);
                    CalculateCargoBasedStorageAMT();
                }

                else if (ModelName == "ReserveAreaStorage") {
                    $("#ReserveAreaStorageRate").val(parseFloat(data.split('|')[0]));
                    $("#ReserveAreaStorageDiscountamt").val(data.split('|')[1]);
                    $("#ReserveAreaStorageDiscountamtBase").val(data.split('|')[1]);
                    $("#ReserveAreaStorageGSTPer").val(data.split('|')[2]);
                    CalculateReserveAreaStorageAMT();
                }
                else if (ModelName == "ContainerSlabwiseStorage") {
                    debugger
                    $("#ContainerSlabwiseStorageTotal").val(data.split('|')[0]);
                    $("#ContainerSlabwiseStorageTotalBase").val(data.split('|')[0]);
                    $("#ContainerSlabwiseStorageDiscountamt").val(data.split('|')[1]);
                    $("#ContainerSlabwiseStorageDiscountamtBase").val(data.split('|')[1]);
                    $("#ContainerSlabwiseStorageGSTPer").val(data.split('|')[2]);
                    CalculateContainerSlabwiseStorageAMT();
                }
                else if (ModelName == "CargoSlabwiseStorage") {

                    debugger;
                    if ($("#CargoSlabwiseStorageUOM").val() == "KGS") {
                        $("#CargoSlabwiseStorageRateBase").val(parseFloat(data.split('|')[0]) / 1000);
                        $("#CargoSlabwiseStorageTotal").val(parseFloat(data.split('|')[0]) / 1000);
                        $("#CargoSlabwiseStorageDiscountamt").val(parseFloat(data.split('|')[1]) / 1000);
                        $("#CargoSlabwiseStorageDiscountamtBase").val(parseFloat(data.split('|')[1]) / 1000);

                        $("#CargoSlabwiseStorageQTY").prop('readonly', true);
                        $("#CargoSlabwiseStorageArea").prop('readonly', true);
                        $("#CargoSlabwiseStorageWeight").prop('readonly', false);
                        $("#CargoHandlingQTY").val("0");
                        $("#CargoSlabwiseStorageArea").val("0");
                    }
                    else if ($("#CargoSlabwiseStorageUOM").val() == "SQR MTR") {
                        $("#CargoSlabwiseStorageRateBase").val(parseFloat(data.split('|')[0]));
                        $("#CargoSlabwiseStorageTotal").val(parseFloat(data.split('|')[0]));
                        $("#CargoSlabwiseStorageDiscountamt").val(parseFloat(data.split('|')[1]));
                        $("#CargoSlabwiseStorageDiscountamtBase").val(parseFloat(data.split('|')[1]));

                        $("#CargoSlabwiseStorageQTY").prop('readonly', true);
                        $("#CargoSlabwiseStorageArea").prop('readonly', false);
                        $("#CargoSlabwiseStorageWeight").prop('readonly', true);
                        $("#CargoSlabwiseStorageWeight").val("0");
                        $("#CargoSlabwiseStorageQTY").val("0");
                    }
                    else if ($("#CargoSlabwiseStorageUOM").val() == "SQR FEET") {
                        $("#CargoSlabwiseStorageRateBase").val(parseFloat(data.split('|')[0]));
                        $("#CargoSlabwiseStorageTotal").val(parseFloat(data.split('|')[0]));
                        $("#CargoSlabwiseStorageDiscountamt").val(parseFloat(data.split('|')[1]));
                        $("#CargoSlabwiseStorageDiscountamtBase").val(parseFloat(data.split('|')[1]));

                        $("#CargoSlabwiseStorageQTY").prop('readonly', true);
                        $("#CargoSlabwiseStorageArea").prop('readonly', false);
                        $("#CargoSlabwiseStorageWeight").prop('readonly', true);
                        $("#CargoSlabwiseStorageWeight").val("0");
                        $("#CargoSlabwiseStorageQTY").val("0");
                    }
                    else {
                        $("#CargoSlabwiseStorageRateBase").val(parseFloat(data.split('|')[0]));
                        $("#CargoSlabwiseStorageTotal").val(parseFloat(data.split('|')[0]));
                        $("#CargoSlabwiseStorageDiscountamt").val(parseFloat(data.split('|')[1]));
                        $("#CargoSlabwiseStorageDiscountamtBase").val(parseFloat(data.split('|')[1]));

                        $("#CargoSlabwiseStorageQTY").prop('readonly', false);
                        $("#CargoSlabwiseStorageArea").prop('readonly', true);
                        $("#CargoSlabwiseStorageWeight").prop('readonly', true);
                        $("#CargoSlabwiseStorageWeight").val("0");
                        $("#CargoSlabwiseStorageArea").val("0");
                    }
                    $("#CargoSlabwiseStorageGSTPer").val(data.split('|')[2]);
                    CalculateCargoSlabwiseStorageAMT();
                }
                else if (ModelName == "OtherTerrifDetails") {

                    $("#OtherTerrifDetailsRate").val(data.split('|')[0]);
                    $("#OtherTerrifDetailsRateBase").val(data.split('|')[0]);
                    $("#OtherTerrifDetailsDiscount").val(data.split('|')[1]);
                    $("#OtherTerrifDetailsDiscountBase").val(data.split('|')[1]);
                    $("#OtherTerrifDetailsGSTPer").val(data.split('|')[2]);

                    CalculateOtherTerrifDetailsAMT();
                }
            }
        }
    });
}

function SetfuncationModelValue(mdlname) {
    ModelName = mdlname;
}

function SearchwithtrnDocumentNo() {
    var trnDocumentLotDetailsID = $("#trnDocumentLotDetailsID").val();
    var MiscType = $("input[name=MiscType]:checked").val();
    if ((trnDocumentLotDetailsID != null && trnDocumentLotDetailsID != undefined && trnDocumentLotDetailsID != "" && trnDocumentLotDetailsID != "0") || MiscType == "MANUAL") {
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&trnDocumentLotDetailsID=" + trnDocumentLotDetailsID + "&InBOENo=" + $("#InBOENo").val() + "&MiscType=" + MiscType;
    }
    else {
        $("#InBOENo").addClass("redborder");
        TosterAlert("error", "Please select In-BOE No", "Required!");
    }
}

function DocumentValidation() {

    var isvalid = true;
    var MErrormsg = "";

    $.ajax({
        url: GetRootPath + "MiscInvoice/validateSubModel",
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
            url: GetRootPath + "MiscInvoice/AddManualDocument",
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
                    fillDocumentdetails();
                }
            }
        });
    }
    return isvalid;
}
function ClearDocumentDetails() {
    $("#ShiipingBillNo").val('');
    $("#ShipingBillDate").val('');
    $("#InvoiceNumber").val('');
    $("#InvoiceDate").val('');
    $("#NOOFPKGS").val('0');
    $("#WEIGHT").val('0');
    $("#CARGODESC").val('');
    $("#SUBCOMMODITYName").val('');
    $("#SubCommodityID").val('0');
    $("#trnManualDocumentDetailsID").val('0');
}
function EditDocumentdetails(ID) {
    $("#ShiipingBillNo").val($("#ShiipingBillNo_" + ID).text());
    $("#ShipingBillDate").val($("#ShipingBillDate_" + ID).text());
    $("#InvoiceNumber").val($("#InvoiceNumber_" + ID).text());
    $("#InvoiceDate").val($("#InvoiceDate_" + ID).text());
    $("#NOOFPKGS").val($("#NOOFPKGS_" + ID).text());
    $("#WEIGHT").val($("#WEIGHT_" + ID).text());
    $("#CARGODESC").val($("#CARGODESC_" + ID).text());
    $("#SUBCOMMODITYName").val($("#SUBCOMMODITYName_" + ID).text());
    $("#SubCommodityID").val($("#SubCommodityID_" + ID).text());
    $("#trnManualDocumentDetailsID").val(ID);
}
function fillDocumentdetails() {
    $.ajax({
        url: GetRootPath + "MiscInvoice/FillGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $("#tblDocument").html(data);
            ClearDocumentDetails();
        }
    });
}
function deleteDocument(ID) {
    if (ID != "" && ID != "0" && ID != null) {
        $.ajax({
            url: GetRootPath + "MiscInvoice/DeletetrnManualDocumentDetails/" + ID,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                fillDocumentdetails();
                TosterAlert("success", " Document details deleted Successfully! ", "success!");
            }
        });
    }
}


function ApproveInvoice(IsIRN, action, InvoiceId, InvoiceNo, InvoiceType, trnDocumentID) {
    if (IsIRN == "true") {
        if (action == "approve") {
            $("#IRNTaxAlert").show();
            $("#IRNAlert").hide();
        }
        else if (action == "unapprove") {
            $("#IRNTaxAlert").hide();
            $("#IRNAlert").show();
        }
    }
    else {
        $("#IRNTaxAlert").hide();
        $("#IRNAlert").hide();
    }
    $("#InvoiceId").val(InvoiceId);
    $("#InvoiceNo").val(InvoiceNo);
    $("#InvoiceType").val(InvoiceType);
    $("#action").val(action);
    $("#IsIRN").val(IsIRN);
    $("#hdnIRNSpaceCertificateID").val(trnDocumentID);
}

function validateremarksForIRN() {
    debugger
    var InvoiceId = $("#InvoiceId").val();
    var InvoiceNo = $("#InvoiceNo").val();
    var InvoiceType = $("#InvoiceType").val();
    var action = $("#action").val();
    var IsIRN = $("#IsIRN").val();
    var trnDocumentID = $("#hdnIRNSpaceCertificateID").val();
    var txtRemarks = $("#txtRemarks1").val().trim();
    var IsValid = true;

    if (txtRemarks == null || txtRemarks == "" || txtRemarks == undefined) {
        $("#txtRemarks1").addClass("redborder");
        TosterAlert("error", "Please enter Remarks", "Required!");
        IsValid = false;
    }
    debugger
    if (IsValid) {
        if (action == "approve" && IsIRN == "true") {
            $.when(GenerateEInvoice(InvoiceId, InvoiceNo, InvoiceType)).done(function () {
                var msg = IRNMsg.split("|")[0];
                if (msg == "SUCCESS") {
                    $.ajax({
                        url: GetRootPath + "MiscInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                        type: "GET",
                        dataType: "text",
                        async: false,
                        success: function (data) { location.href = GetRootPath + "MiscInvoice"; }
                    });
                }
                else {
                    TosterAlert("error", "Error while Generating eInvoice : <br />" + IRNMsg.split('|')[1], "Error!");
                }
            });
        }
        else if (action == "unapprove" && IsIRN == "true") {
            $.when(CancelEInvoice(InvoiceId, InvoiceType, InvoiceNo, txtRemarks)).done(function () {
                var msg = IRNMsg.split("|")[0];
                if (msg == "SUCCESS") {
                    $.ajax({
                        url: GetRootPath + "MiscInvoice/delete/" + InvoiceId + "?trnDocumentLotDetailsID=" + trnDocumentID + "&IsPostProfoma=" + false,
                        type: "GET",
                        dataType: "text",
                        async: false,
                        success: function (data) { location.href = GetRootPath + "MiscInvoice"; }
                    });
                }
                else {
                    TosterAlert("error", "Error while Cancelling eInvoice : <br />" + IRNMsg.split('|')[1], "Error!");
                }
            });
        }
        else {
            $.ajax({
                url: GetRootPath + "MiscInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                type: "GET",
                dataType: "text",
                async: false,
                success: function (data) {
                    location.href = GetRootPath + "MiscInvoice";
                }
            });
        }
    }
}

function GenerateEInvoice(InvoiceId, InvoiceNo, InvoiceType) {
    $.ajax({
        url: GetRootPath + "eInvoice/GenerateEInvoice/" + InvoiceId + "?InvoiceNo=" + InvoiceNo + "&InvoiceType=" + InvoiceType,
        type: "GET",
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != "") {
                IRNMsg = data;
            }
        }
    });
}
function CancelEInvoice(InvoiceId, InvoiceType, InvoiceNo, CancelReason) {
    $.ajax({
        url: GetRootPath + "eInvoice/CancelIRN/" + InvoiceId + "?InvoiceNo=" + InvoiceNo + "&InvoiceType=" + InvoiceType + "&CancelReason=" + CancelReason,
        type: "GET",
        dataType: "text",
        async: false,
        success: function (data) {
            IRNMsg = data;
        }
    });
}