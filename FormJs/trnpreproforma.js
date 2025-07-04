$(document).ready(function () {
    debugger;
    var ModelName = "";
    //var Cycle = "IMPT";
    var Cycle = "";
   
    Autocompletebox("ImporterExporter", "ImporterExporterID", "trnpreproforma", "GetIMPEXP/?For=" + Cycle, "Callbackautocomplete");
    Autocompletebox("CHAName", "CHAID", "trnpreproforma", "GetCHA", "Callbackautocomplete");
    Autocompletebox("ForwarderName", "ForwarderID", "trnpreproforma", "GetForwarder", "Callbackautocomplete");
    Autocompletebox("ConsolerName", "ConsolerID", "trnpreproforma", "GetConsoler", "Callbackautocomplete");
    Autocompletebox("state", "MainStateId", "CustomerMaster", "getStateNames"); 
    
    Autocompletebox("ContainerHandlingContSizeName", "ContainerHandlingContSizeID", "trnpreproforma", "GetContSize","GetGeneralTriffDetails");
    Autocompletebox("ContainerHandlingCargoType", "ContainerHandlingCargoTypeID", "trnpreproforma", "GetNatureofCargo", "GetGeneralTriffDetails");
    Autocompletebox("ContainerHandlingBillCommodity", "ContainerHandlingBillCommodityID", "trnpreproforma", "GetCommodity", "GetGeneralTriffDetails");
    Autocompletebox("ContainerHandlingSubcommodity", "ContainerHandlingSubcommodityID", "trnpreproforma", "GetSubCommodity");
    Autocompletebox("ContainerHandlingTarrifHeadtxt", "ContainerHandlingTarrifHeadID", "trnpreproforma", "GetTariffHead", "GetGeneralTriffDetails");
    
    Autocompletebox("CargoHandlingCargoType", "CargoHandlingCargoTypeID", "trnpreproforma", "GetNatureofCargo", "GetGeneralTriffDetails");
    Autocompletebox("CargoHandlingBillCommodity", "CargoHandlingBillCommodityID", "trnpreproforma", "GetCommodity", "GetGeneralTriffDetails");
    Autocompletebox("CargoHandlingSubcommodity", "CargoHandlingSubcommodityID", "trnpreproforma", "GetSubCommodity");
    Autocompletebox("CargoHandlingTarrifHead", "CargoHandlingTarrifHeadID", "trnpreproforma", "GetTariffHead", "GetGeneralTriffDetails");
    Autocompletebox("CargoHandlingPackageType", "CargoHandlingPackageTypeID", "trnpreproforma", "GetPackageType");
    Autocompletebox("CargoHandlingUOM", "CargoHandlingUOMID", "trnpreproforma", "GetCargoHandlingUOM", "GetGeneralTriffDetails");
    
    Autocompletebox("ContainerBasedStorageContSizeName", "ContainerBasedStorageContSizeID", "trnpreproforma", "GetContSize", "GetGeneralTriffDetails");
    Autocompletebox("ContainerBasedStorageCargoType", "ContainerBasedStorageCargoTypeID", "trnpreproforma", "GetNatureofCargo", "GetGeneralTriffDetails");
    Autocompletebox("ContainerBasedStorageBillCommodity", "ContainerBasedStorageBillCommodityID", "trnpreproforma", "GetCommodity", "GetGeneralTriffDetails");
    Autocompletebox("ContainerBasedStorageSubcommodity", "ContainerBasedStorageSubcommodityID", "trnpreproforma", "GetSubCommodity");
    Autocompletebox("ContainerBasedStorageTarrifHead", "ContainerBasedStorageTarrifHeadID", "trnpreproforma", "GetTariffHead", "GetGeneralTriffDetails");
    
    Autocompletebox("CargoBasedStorageCargoType", "CargoBasedStorageCargoTypeID", "trnpreproforma", "GetNatureofCargo", "GetGeneralTriffDetails");
    Autocompletebox("CargoBasedStorageBillCommodity", "CargoBasedStorageBillCommodityID", "trnpreproforma", "GetCommodity", "GetGeneralTriffDetails");
    Autocompletebox("CargoBasedStorageSubcommodity", "CargoBasedStorageSubcommodityID", "trnpreproforma", "GetSubCommodity");
    Autocompletebox("CargoBasedStorageTarrifHead", "CargoBasedStorageTarrifHeadID", "trnpreproforma", "GetTariffHead", "GetGeneralTriffDetails");
    Autocompletebox("CargoBasedStorageUOM", "CargoBasedStorageUOMID", "trnpreproforma", "GetUOM", "GetGeneralTriffDetails");
    
    Autocompletebox("ReserveAreaStorageCargoType", "ReserveAreaStorageCargoTypeID", "trnpreproforma", "GetNatureofCargo", "GetGeneralTriffDetails");
    Autocompletebox("ReserveAreaStorageBillCommodity", "ReserveAreaStorageBillCommodityID", "trnpreproforma", "GetCommodity", "GetGeneralTriffDetails");
    Autocompletebox("ReserveAreaStorageSubcommodity", "ReserveAreaStorageSubcommodityID", "trnpreproforma", "GetSubCommodity");
    Autocompletebox("ReserveAreaStorageTarrifHead", "ReserveAreaStorageTarrifHeadID", "trnpreproforma", "GetTariffHead", "GetGeneralTriffDetails");
    Autocompletebox("ReserveAreaStorageUOM", "ReserveAreaStorageUOMID", "trnpreproforma", "GetReserveAreaStorageUOM", "GetGeneralTriffDetails");
    
    Autocompletebox("ContainerSlabwiseStorageContSizeName", "ContainerSlabwiseStorageContSizeID", "trnpreproforma", "GetContSize", "GetGeneralTriffDetails");
    Autocompletebox("ContainerSlabwiseStorageCargoType", "ContainerSlabwiseStorageCargoTypeID", "trnpreproforma", "GetNatureofCargo", "GetGeneralTriffDetails");
    Autocompletebox("ContainerSlabwiseStorageBillCommodity", "ContainerSlabwiseStorageBillCommodityID", "trnpreproforma", "GetCommodity", "GetGeneralTriffDetails");
    Autocompletebox("ContainerSlabwiseStorageSubcommodity", "ContainerSlabwiseStorageSubcommodityID", "trnpreproforma", "GetSubCommodity");
    Autocompletebox("ContainerSlabwiseStorageTarrifHead", "ContainerSlabwiseStorageTarrifHeadID", "trnpreproforma", "GetTariffHead", "GetGeneralTriffDetails");
    
    Autocompletebox("CargoSlabwiseStorageCargoType", "CargoSlabwiseStorageCargoTypeID", "trnpreproforma", "GetNatureofCargo", "GetGeneralTriffDetails");
    Autocompletebox("CargoSlabwiseStorageBillCommodity", "CargoSlabwiseStorageBillCommodityID", "trnpreproforma", "GetCommodity", "GetGeneralTriffDetails");
    Autocompletebox("CargoSlabwiseStorageSubcommodity", "CargoSlabwiseStorageSubcommodityID", "trnpreproforma", "GetSubCommodity");
    Autocompletebox("CargoSlabwiseStorageTarrifHead", "CargoSlabwiseStorageTarrifHeadID", "trnpreproforma", "GetTariffHead", "GetGeneralTriffDetails");
    Autocompletebox("CargoSlabwiseStorageUOM", "CargoSlabwiseStorageUOMID", "trnpreproforma", "GetUOM", "CalculateCargoSlabwiseStorageAMT");

    //$(".ui-autocomplete").css("z-index:9999");

    FilltrnPreProformaContainerHandlingGrid();
    FilltrnPreProformaCargoHandlingGrid();
    FilltrnPreProformaContainerBasedStorageGrid();
    FilltrnPreProformaCargoBasedStorageGrid();
    FilltrnPreProformaReserveAreaStorageGrid();
    FilltrnPreProformaContainerSlabwiseStorageGrid();
    FilltrnPreProformaCargoSlabwiseStorageGrid();

    if ($("#ImporterExporterID").val() != 0 || $("#ConsolerID").val() != 0 || $("#CHAID").val() != 0 || $("#ForwarderID").val() != 0) {
        Callbackautocomplete();
    }
    if ($("#BillToCustomerID").val() != 0) {
        autocompleteaddress();
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

function CallbackADDRESSS() {

    if ($("#BillToCustomerAddressID").val() != "" && $("#BillToCustomerAddressID").val() != undefined && $("#BillToCustomerAddressID").val() != null) {
        $.ajax({
            url: GetRootPath + "trnpreproforma/GetBillToCustomerGSTNo/" + $("#BillToCustomerAddressID").val(),
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
        })
    }
    else {
        $("#BillToCustomerGSTNo").val("");
        $("#spn_BillToCustomerGSTNo").text("");
    }

}

function autocompleteaddress() {

    Autocompletebox("BillToCustomerAddress", "BillToCustomerAddressID", "trnpreproforma", "GetBillToAddress/" + $("#BillToCustomerID").val(), "CallbackADDRESSS");
}

function Callbackautocomplete() {
    Autocompletebox("BillToCustomerName", "BillToCustomerID", "trnpreproforma", "GetBillTo/?ImporterExporterID=" + $("#ImporterExporterID").val() + "&ConsolerID=" + $("#ConsolerID").val() + "&CHAID=" + $("#CHAID").val() + "&ForwarderID=" + $("#ForwarderID").val(), "autocompleteaddress");

    if ($("#ISOCodeID").val() != "" && $("#ISOCodeID").val() != undefined && $("#ISOCodeID").val() != null) {
        $.ajax({
            url: GetRootPath + "trnpreproforma/GetISOCodeSizeAndType/" + $("#ISOCodeID").val(),
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
            url: GetRootPath + "trnSpaceCertificateGW/CalculateEndDate/?FromDate=" + FromDate + "&NoOfStoragePeriod=" + NoOfStoragePeriod + "&StoragePeriod=" + StoragePeriod,
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

function GetDifferenceDays(){

    GetGeneralTriffDetails();
}

function CargoBasedStoragecalculateTermEndDate() {
    var FromDate = $("#CargoBasedStorageStorageStartDate").val();
    var NoOfStoragePeriod = $("#CargoBasedStorageNoOfStoragePeriod").val();
    var StoragePeriod = $("#CargoBasedStorageStoragePeriod").val();

    if (FromDate != null && FromDate != undefined && FromDate != "" && NoOfStoragePeriod != null && NoOfStoragePeriod != undefined && NoOfStoragePeriod != "" && NoOfStoragePeriod != "0" && StoragePeriod != null && StoragePeriod != undefined && StoragePeriod != "" && StoragePeriod != "0") {
        $.ajax({
            url: GetRootPath + "trnSpaceCertificateGW/CalculateEndDate/?FromDate=" + FromDate + "&NoOfStoragePeriod=" + NoOfStoragePeriod + "&StoragePeriod=" + StoragePeriod,
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
            url: GetRootPath + "trnSpaceCertificateGW/CalculateEndDate/?FromDate=" + FromDate + "&NoOfStoragePeriod=" + NoOfStoragePeriod + "&StoragePeriod=" + StoragePeriod,
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
            url: GetRootPath + "trnSpaceCertificateGW/CalculateEndDate/?FromDate=" + FromDate + "&NoOfStoragePeriod=" + NoOfStoragePeriod + "&StoragePeriod=" + StoragePeriod,
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
        url: GetRootPath + "trnpreproforma/validateModel",
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
        url: GetRootPath + "trnpreproforma/FillConsolidatedChargesDetailsGWGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ConsolidatedChargesDetails").html(data);
                $("#FinishedBtn").attr("disabled", false);
            } else {
                $("#FinishedBtn").attr("disabled", "disabled");
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
        //Discountamt = (parseFloat(Discountamt) * parseFloat(NoofContainers)).toFixed(2);
        //$("#ContainerHandlingDiscountamt").val(Discountamt);


        var total = CargoHandlingTotal - Discountamt;
        total = total + (total * GSTPer / 100);

        $("#ContainerHandlingNetamount").val(parseFloat(total).toFixed(2));
    }
 
}

function AddtrnPreProformaContainerHandling() {
    event.preventDefault();
    // Disable the button to prevent multiple clicks
    $("#btnContainerHandlingGW").hide();
    $("#tmpbtnContainerHandlingGW").show();
    $(".redborder").removeClass("redborder");
    $.ajax({
        url: GetRootPath + "trnpreproforma/validateModelContainerHandling",
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

                $("#btnContainerHandlingGW").show();
                $("#tmpbtnContainerHandlingGW").hide();
            }
            else {
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "trnpreproforma/AddtrnPreProformaContainerHandling",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        CleartrnPreProformaContainerHandling();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FilltrnPreProformaContainerHandlingGrid();
                        TosterAlert(msgType, msg, msgTitle);
                        EnabledDisaleComodity('ContainerHandlingDeliveryMode', 'ContainerHandlingBillCommodity');
                        $("#btnContainerHandlingGW").show();
                        $("#tmpbtnContainerHandlingGW").hide();
                    }
                });
            }
        }
    });
}

function FilltrnPreProformaContainerHandlingGrid() {
    $("#ContainerDetails").html("");

    $.ajax({
        url: GetRootPath + "trnpreproforma/FilltrnPreProformaContainerHandlingGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ContainerDetails").html(data);
            }
                CleartrnPreProformaContainerHandling();
                filldatatable();
        }
    });
}

function CleartrnPreProformaContainerHandling() {
    $("#ContainerHandlingContSizeName").val('');
    $("#ContainerHandlingDeliveryMode").val('LOADED');
    $("#ContainerHandlingCargoType").val('');
    $("#ContainerHandlingBillCommodity").val('');
    $("#ContainerHandlingTarrifHeadtxt").val('');
    $("#ContainerHandlingSubcommodity").val('');
    $("#ContainerHandlingContSizeID").val('0');
    $("#ContainerHandlingTarrifHeadID").val('0');
    $("#ContainerHandlingRate").val('0');
    $("#ContainerHandlingTotal").val('0');
    $("#ContainerHandlingDiscountamt").val('0');
    $("#ContainerHandlingNetamount").val('0');
    $("#ContainerHandlingSubcommodityID").val('0');
    $("#ContainerHandlingBillCommodityID").val('0');
    $("#ContainerHandlingCargoTypeID").val('0');
    $("#ContainerHandlingNoofContainers").val('0');
    $("#ContainerHandlingGSTPer").val('0');
    $("#trnPreProformaContainerHandlingGWID").val('0');
    $("#btnContainerHandlingGW").text("Add");
}

function EdittrnPreProformaContainerHandlingGW(ID) {
    $("#ContainerHandlingContSizeName").val($("#ContainerHandlingContSizeName_" + ID).text());
    $("#ContainerHandlingGSTPer").val($("#ContainerHandlingGSTPer_" + ID).text());
    $("#ContainerHandlingDeliveryMode").val($("#ContainerHandlingDeliveryMode_" + ID).text());
    $("#ContainerHandlingCargoType").val($("#ContainerHandlingCargoType_" + ID).text());

    if ($("#ContainerHandlingDeliveryMode").val() == "DESTUFF") {
        $("#ContainerHandlingBillCommodity").val($("#ContainerHandlingBillCommodity_" + ID).text());
        $("#ContainerHandlingBillCommodity").removeAttr('readonly');
        $("#ContainerHandlingBillCommodity").css("background", "");
    } else {
        $("#ContainerHandlingBillCommodity").val($("#ContainerHandlingBillCommodity_" + ID).text());
        $("#ContainerHandlingBillCommodity").prop('readonly', true);
    }

    $("#ContainerHandlingTarrifHeadtxt").val($("#ContainerHandlingTarrifHeadtxt_" + ID).text());
    $("#ContainerHandlingSubcommodity").val($("#ContainerHandlingSubcommodity_" + ID).text());
    $("#ContainerHandlingContSizeID").val($("#ContainerHandlingContSizeID_" + ID).text());
    $("#ContainerHandlingTarrifHeadID").val($("#ContainerHandlingTarrifHeadID_" + ID).text());
    $("#ContainerHandlingRate").val($("#ContainerHandlingRate_" + ID).text());
    $("#ContainerHandlingTotal").val($("#ContainerHandlingTotal_" + ID).text());
    $("#ContainerHandlingDiscountamt").val($("#ContainerHandlingDiscountamt_" + ID).text());
    $("#ContainerHandlingDiscountamtBase").val($("#ContainerHandlingDiscountamt_" + ID).text());
    $("#ContainerHandlingNetamount").val($("#ContainerHandlingNetamount_" + ID).text());
    $("#ContainerHandlingSubcommodityID").val($("#ContainerHandlingSubcommodityID_" + ID).text());
    $("#ContainerHandlingBillCommodityID").val($("#ContainerHandlingBillCommodityID_" + ID).text());
    $("#ContainerHandlingCargoTypeID").val($("#ContainerHandlingCargoTypeID_" + ID).text());
    $("#ContainerHandlingNoofContainers").val($("#ContainerHandlingNoofContainers_" + ID).text());
    $("#btnContainerHandlingGW").text("Save");
    $("#trnPreProformaContainerHandlingGWID").val(ID);
}

function DeletetrnPreProformaContainerHandlingGW(ID) {
    $.ajax({
        url: GetRootPath + "trnpreproforma/deleteContainerHandlingDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FilltrnPreProformaContainerHandlingGrid();
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
    if ($("#CargoHandlingUOM").val() == "KGS")
    {
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
    if (parseFloat(QTY) > 0)
    {
        //Discountamt = (parseFloat(Discountamt) * parseFloat(QTY)).toFixed(2);
        //$("#CargoHandlingDiscountamt").val(Discountamt);


        var total = CargoHandlingTotal - Discountamt;
        total = total + (total * GSTPer / 100);

        $("#CargoHandlingNetamount").val(parseFloat(total).toFixed(2));
    }
    
    
}

function AddtrnPreProformaCargoHandling() {
    event.preventDefault();
    debugger
    $("#btnCargoHandlingGW").hide();
    $("#tmpbtnCargoHandlingGW").show();
    $(".redborder").removeClass("redborder");
    $.ajax({
        url: GetRootPath + "trnpreproforma/validateModelCargoHandling",
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

                $("#btnCargoHandlingGW").show();
                $("#tmpbtnCargoHandlingGW").hide();
            }
            else {
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "trnpreproforma/AddtrnPreProformaCargoHandling",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        CleartrnPreProformaCargoHandling();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FilltrnPreProformaCargoHandlingGrid();
                        TosterAlert(msgType, msg, msgTitle);

                        $("#btnCargoHandlingGW").show();
                        $("#tmpbtnCargoHandlingGW").hide();
                    }
                });
            }
        }
    });
}

function FilltrnPreProformaCargoHandlingGrid() {
    $("#CargoDetails").html("");

    $.ajax({
        url: GetRootPath + "trnpreproforma/FilltrnPreProformaCargoHandlingGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#CargoDetails").html(data);
            }
                CleartrnPreProformaCargoHandling();
                filldatatable();
        }
    });
}

function CleartrnPreProformaCargoHandling() {
    $("#CargoHandlingPackageType").val('');
    $("#CargoHandlingUOM").val('');
    $("#CargoHandlingCargoType").val('');
    $("#CargoHandlingBillCommodity").val('');
    $("#CargoHandlingTarrifHead").val('');
    $("#CargoHandlingSubcommodity").val('');
    $("#CargoHandlingPackageTypeID").val('0');
    $("#CargoHandlingTarrifHeadID").val('0');
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
    $("#trnPreProformaCargoHandlingID").val('0');
    $("#btnCargoHandlingGW").text("Add");
    $("#CargoHandlingQTY").prop('readonly', false);
    $("#CargoHandlingWeight").prop('readonly', false);
}

function EdittrnPreProformaCargoHandling(ID) {
    $("#CargoHandlingPackageType").val($("#CargoHandlingPackageType_" + ID).text());
    $("#CargoHandlingGSTPer").val($("#CargoHandlingGSTPer_" + ID).text());
    $("#CargoHandlingUOM").val($("#CargoHandlingUOM_" + ID).text());
    $("#CargoHandlingCargoType").val($("#CargoHandlingCargoType_" + ID).text());
    $("#CargoHandlingBillCommodity").val($("#CargoHandlingBillCommodity_" + ID).text());
    $("#CargoHandlingTarrifHead").val($("#CargoHandlingTarrifHead_" + ID).text());
    $("#CargoHandlingSubcommodity").val($("#CargoHandlingSubcommodity_" + ID).text());
    $("#CargoHandlingPackageTypeID").val($("#CargoHandlingPackageTypeID_" + ID).text());
    $("#CargoHandlingUOMID").val($("#CargoHandlingUOMID_" + ID).text());
    $("#CargoHandlingTarrifHeadID").val($("#CargoHandlingTarrifHeadID_" + ID).text());
    $("#CargoHandlingRate").val($("#CargoHandlingRate_" + ID).text());
    $("#CargoHandlingTotal").val($("#CargoHandlingTotal_" + ID).text());
    $("#CargoHandlingDiscountamt").val($("#CargoHandlingDiscountamt_" + ID).text());
    $("#CargoHandlingDiscountamtBaseValue").val($("#CargoHandlingDiscountamt_" + ID).text());
    $("#CargoHandlingNetamount").val($("#CargoHandlingNetamount_" + ID).text());
    $("#CargoHandlingSubcommodityID").val($("#CargoHandlingSubcommodityID_" + ID).text());
    $("#CargoHandlingBillCommodityID").val($("#CargoHandlingBillCommodityID_" + ID).text());
    $("#CargoHandlingCargoTypeID").val($("#CargoHandlingCargoTypeID_" + ID).text());
    $("#CargoHandlingQTY").val($("#CargoHandlingQTY_" + ID).text());
    $("#CargoHandlingWeight").val($("#CargoHandlingWeight_" + ID).text());
    $("#btnCargoHandlingGW").text("Save");
    $("#trnPreProformaCargoHandlingID").val(ID);
    if ($("#CargoHandlingUOM").val() == "KGS") {
        $("#CargoHandlingQTY").prop('readonly', true);
        $("#CargoHandlingWeight").prop('readonly', false);
    }
    else {
        $("#CargoHandlingQTY").prop('readonly', false);
        $("#CargoHandlingWeight").prop('readonly', true);
    }
}

function DeletetrnPreProformaCargoHandling(ID) {
    $.ajax({
        url: GetRootPath + "trnpreproforma/deleteCargoHandlingDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FilltrnPreProformaCargoHandlingGrid();
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

        var NetAmt = (parseFloat(total - TotalDiscountCargo) + parseFloat(GSTAMT)).toFixed(2);
        $("#ContainerBasedStorageNetamount").val(NetAmt);
    }
    else {
        $("#ContainerBasedStorageTotal").val(0);
        $("#ContainerBasedStorageNetamount").val(0);
    }
}

function AddtrnPreProformaContainerBasedStorage() {
    event.preventDefault();
    // Disable the button to prevent multiple clicks
    $("#btnContainerBasedStorageGW").hide();
    $("#tmpbtnContainerBasedStorageGW").show();
    $(".redborder").removeClass("redborder");
  
    $.ajax({
        url: GetRootPath + "trnpreproforma/validateModelContainerBasedStorage",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            debugger
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
                $("#btnContainerBasedStorageGW").show();
                $("#tmpbtnContainerBasedStorageGW").hide();
            }
            else {
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "trnpreproforma/AddtrnPreProformaContainerBasedStorage",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        CleartrnPreProformaContainerBasedStorage();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FilltrnPreProformaContainerBasedStorageGrid();
                        TosterAlert(msgType, msg, msgTitle);

                        $("#btnContainerBasedStorageGW").show();
                        $("#tmpbtnContainerBasedStorageGW").hide();
                    }
                });
            }
        }
    });
}

function FilltrnPreProformaContainerBasedStorageGrid() {
    $("#ContainerBasedStorageDetails").html("");

    $.ajax({
        url: GetRootPath + "trnpreproforma/FilltrnPreProformaContainerBasedStorageGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ContainerBasedStorageDetails").html(data);
            }
            CleartrnPreProformaContainerBasedStorage();
            filldatatable();
        }
    });
}

function CleartrnPreProformaContainerBasedStorage() {
    $("#ContainerBasedStorageContSizeName").val('');
    $("#ContainerBasedStorageGSTPer").val('0');
    $("#ContainerBasedStorageDeliveryMode").val('LOADED');
    $("#ContainerBasedStorageCargoType").val('');
    $("#ContainerBasedStorageBillCommodity").val('');
    $("#ContainerBasedStorageSubcommodity").val('');
    $("#ContainerBasedStorageTarrifHead").val('');
    $("#ContainerBasedStorageStorageStartDate").val('');
    $("#ContainerBasedStoragetxtEndDate").text('');
    $("#ContainerBasedStorageStorageEndDate").val('');
    $("#ContainerBasedStorageNoOfStoragePeriod").val('0');
    $("#ContainerBasedStorageStoragePeriod").val('0');
    $("#ContainerBasedStorageContSizeID").val('0');
    $("#ContainerBasedStorageTarrifHeadID").val('0');
    $("#ContainerBasedStorageRate").val('0');
    $("#ContainerBasedStorageTotal").val('0');
    $("#ContainerBasedStorageDiscountamt").val('0');
    $("#ContainerBasedStorageNetamount").val('0');
    $("#ContainerBasedStorageBillCommodityID").val('0');
    $("#ContainerBasedStorageSubcommodityID").val('0');
    $("#ContainerBasedStorageCargoTypeID").val('0');
    $("#ContainerBasedStorageNoofContainers").val('0');
    $("#trnPreProformaContainerBasedStorageID").val('0');
    $("#btnContainerBasedStorageGW").text("Add");
    EnabledDisaleComodity('ContainerBasedStorageDeliveryMode', 'ContainerBasedStorageBillCommodity');
}

function EdittrnPreProformaContainerBasedStorage(ID) {
    $("#ContainerBasedStorageContSizeName").val($("#ContainerBasedStorageContSizeName_" + ID).text());
    $("#ContainerBasedStorageGSTPer").val($("#ContainerBasedStorageGSTPer_" + ID).text());
    $("#ContainerBasedStorageDeliveryMode").val($("#ContainerBasedStorageDeliveryMode_" + ID).text());
    $("#ContainerBasedStorageCargoType").val($("#ContainerBasedStorageCargoType_" + ID).text());
    $("#ContainerBasedStorageBillCommodity").val($("#ContainerBasedStorageBillCommodity_" + ID).text());
    $("#ContainerBasedStorageSubcommodity").val($("#ContainerBasedStorageSubcommodity_" + ID).text());
    $("#ContainerBasedStorageTarrifHead").val($("#ContainerBasedStorageTarrifHead_" + ID).text());
    $("#ContainerBasedStorageStorageStartDate").val($("#ContainerBasedStorageStorageStartDate_" + ID).text());
    $("#ContainerBasedStoragetxtEndDate").text($("#ContainerBasedStorageStorageEndDate_" + ID).text());
    $("#ContainerBasedStorageStorageEndDate").val($("#ContainerBasedStorageStorageEndDate_" + ID).text());
    $("#ContainerBasedStorageContSizeID").val($("#ContainerBasedStorageContSizeID_" + ID).text());
    $("#ContainerBasedStorageTarrifHeadID").val($("#ContainerBasedStorageTarrifHeadID_" + ID).text());
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
    $("#btnContainerBasedStorageGW").text("Save");
    $("#trnPreProformaContainerBasedStorageID").val(ID);
    EnabledDisaleComodity('ContainerBasedStorageDeliveryMode', 'ContainerBasedStorageBillCommodity');
}

function DeletetrnPreProformaContainerBasedStorage(ID) {
    $.ajax({
        url: GetRootPath + "trnpreproforma/deleteContainerBasedStorageDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FilltrnPreProformaContainerBasedStorageGrid();
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
function CalculateCargoBasedStorageAMT()
{
    debugger;
    var UOMCode = $('#CargoBasedStorageUOM').val();
    var QTY = 0;
    if (UOMCode == "KGS")
    {
        QTY = $('#CargoBasedStorageWeight').val();
    }
    else if (UOMCode == "PER UNIT")
    {
        QTY = $('#CargoBasedStorageQTY').val();
    }
    else if (UOMCode == "SQR FEET" || UOMCode == "SQR MTR") {
        QTY = $('#CargoBasedStorageArea').val();
    }

    var Rate = $('#CargoBasedStorageRate').val();
    var Number = $('#CargoBasedStorageNoOfStoragePeriod').val();
    var Discountamt = $('#CargoBasedStorageDiscountamtBase').val();
    var GSTPer = $('#CargoBasedStorageGSTPer').val();

    if (QTY == undefined || QTY == null || QTY == "" || QTY == 0)
    {
        QTY = 0;
        $('#CargoBasedStorageQTY').val(0);
    }

    if (Number == undefined || Number == null || Number == "" || Number == 0)
    {
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
    if (parseFloat(QTY) > 0 && parseFloat(Rate) > 0 && parseFloat(Number) > 0)
    {
        var total = (parseFloat(Rate) * parseFloat(QTY) * parseFloat(Number)).toFixed(2);
        var totalDiscount = (parseFloat(Discountamt) * parseFloat(QTY) * parseFloat(Number)).toFixed(2);
        $("#CargoBasedStorageTotal").val(total);
        $('#CargoBasedStorageDiscountamt').val(totalDiscount);
        var GSTAMT = ((total - totalDiscount) * GSTPer / 100).toFixed(2);
        $("#CargoBasedStorageNetamount").val((parseFloat((total - totalDiscount)) + parseFloat(GSTAMT)).toFixed(2));
    }
}

function AddtrnPreProformaCargoBasedStorage() {
    event.preventDefault();
    // Disable the button to prevent multiple clicks
    $("#btnCargoBasedStorageGW").hide();
    $("#tmpbtnCargoBasedStorageGW").show();
    $(".redborder").removeClass("redborder");
    $.ajax({
        url: GetRootPath + "trnpreproforma/validateModelCargoBasedStorage",
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

                $("#btnCargoBasedStorageGW").show();
                $("#tmpbtnCargoBasedStorageGW").hide();
            }
            else {
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "trnpreproforma/AddtrnPreProformaCargoBasedStorage",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        CleartrnPreProformaCargoBasedStorage();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FilltrnPreProformaCargoBasedStorageGrid();
                        TosterAlert(msgType, msg, msgTitle);

                        $("#btnCargoBasedStorageGW").show();
                        $("#tmpbtnCargoBasedStorageGW").hide();
                    }
                });
            }
        }
    });
}

function FilltrnPreProformaCargoBasedStorageGrid() {
    $("#CargoBaseStorageDetails").html("");

    $.ajax({
        url: GetRootPath + "trnpreproforma/FilltrnPreProformaCargoBasedStorageGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#CargoBaseStorageDetails").html(data);
                CleartrnPreProformaCargoBasedStorage();
            }
            filldatatable();
        }
    });
}

function CleartrnPreProformaCargoBasedStorage() {
    
    $("#CargoBasedStorageUOM").val('');
    $("#CargoBasedStorageGSTPer").val('0');
    $("#CargoBasedStorageCargoType").val('');
    $("#CargoBasedStorageBillCommodity").val('');
    $("#CargoBasedStorageSubcommodity").val('');
    $("#CargoBasedStorageTarrifHead").val('');
    $("#CargoBasedStorageSubcommodity").val('');
    $("#CargoBasedStorageTarrifHeadID").val('0');
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
    $("#trnPreProformaCargoBasedStorageID").val('0');
    $("#btnCargoBasedStorageGW").text("Add");
}

function EdittrnPreProformaCargoBasedStorage(ID) {
    $("#CargoBasedStorageUOM").val($("#CargoBasedStorageUOM_" + ID).text());
    $("#CargoBasedStorageGSTPer").val($("#CargoBasedStorageGSTPer_" + ID).text());
    $("#CargoBasedStorageCargoType").val($("#CargoBasedStorageCargoType_" + ID).text());
    $("#CargoBasedStorageBillCommodity").val($("#CargoBasedStorageBillCommodity_" + ID).text());
    $("#CargoBasedStorageSubcommodity").val($("#CargoBasedStorageSubcommodity_" + ID).text());
    $("#CargoBasedStorageTarrifHead").val($("#CargoBasedStorageTarrifHead_" + ID).text());
    $("#CargoBasedStorageUOMID").val($("#CargoBasedStorageUOMID_" + ID).text());
    $("#CargoBasedStorageTarrifHeadID").val($("#CargoBasedStorageTarrifHeadID_" + ID).text());
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
    $("#btnCargoBasedStorageGW").text("Save");
    $("#trnPreProformaCargoBasedStorageID").val(ID);
}

function DeletetrnPreProformaCargoBasedStorage(ID) {
    $.ajax({
        url: GetRootPath + "trnpreproforma/deleteCargoBasedStorageDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FilltrnPreProformaCargoBasedStorageGrid();
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
    else {
        $("#ReserveAreaStorageTotal").val(0);
        $("#ReserveAreaStorageNetamount").val(0);
    }
}

function AddtrnPreProformaReserveAreaStorage() {
    event.preventDefault();

    $("#btnReserveAreaStorageGW").hide();
    $("#tmpbtnReserveAreaStorageGW").show();
    $(".redborder").removeClass("redborder");
    $.ajax({
        url: GetRootPath + "trnpreproforma/validateModelReserveAreaStorage",
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
                $("#btnReserveAreaStorageGW").show();
                $("#tmpbtnReserveAreaStorageGW").hide();
            }
            else {
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "trnpreproforma/AddtrnPreProformaReserveAreaStorage",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        CleartrnPreProformaReserveAreaStorage();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FilltrnPreProformaReserveAreaStorageGrid();
                        TosterAlert(msgType, msg, msgTitle);

                        $("#btnReserveAreaStorageGW").show();
                        $("#tmpbtnReserveAreaStorageGW").hide();
                    }
                });
            }
        }
    });
}

function FilltrnPreProformaReserveAreaStorageGrid() {
    $("#ReserveAreaStorageDetails").html("");

    $.ajax({
        url: GetRootPath + "trnpreproforma/FilltrnPreProformaReserveAreaStorageGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ReserveAreaStorageDetails").html(data);
                CleartrnPreProformaReserveAreaStorage();
            }
            filldatatable();
        }
    });
}

function CleartrnPreProformaReserveAreaStorage() {
    
    $("#ReserveAreaStorageUOM").val('');
    $("#ReserveAreaStorageGSTPer").val('0');
    $("#ReserveAreaStorageCargoType").val('');
    $("#ReserveAreaStorageBillCommodity").val('');
    $("#ReserveAreaStorageTarrifHead").val('');
    $("#ReserveAreaStorageSubcommodity").val('');
    $("#ReserveAreaStorageSubcommodityID").val('0');
    $("#ReserveAreaStorageTarrifHeadID").val('0');
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
    $("#trnPreProformaReserveAreaStorageID").val('0');
    $("#btnReserveAreaStorageGW").text("Add");
}

function EdittrnPreProformaReserveAreaStorage(ID) {
    $("#ReserveAreaStorageUOM").val($("#ReserveAreaStorageUOM_" + ID).text());
    $("#ReserveAreaStorageGSTPer").val($("#ReserveAreaStorageGSTPer_" + ID).text());
    $("#ReserveAreaStorageCargoType").val($("#ReserveAreaStorageCargoType_" + ID).text());
    $("#ReserveAreaStorageSubcommodity").val($("#ReserveAreaStorageSubcommodity_" + ID).text());
    $("#ReserveAreaStorageSubcommodityID").val($("#ReserveAreaStorageSubcommodityID_" + ID).text());
    $("#ReserveAreaStorageBillCommodity").val($("#ReserveAreaStorageBillCommodity_" + ID).text());
    $("#ReserveAreaStorageTarrifHead").val($("#ReserveAreaStorageTarrifHead_" + ID).text());
    $("#ReserveAreaStorageUOMID").val($("#ReserveAreaStorageUOMID_" + ID).text());
    $("#ReserveAreaStorageTarrifHeadID").val($("#ReserveAreaStorageTarrifHeadID_" + ID).text());
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
    $("#btnReserveAreaStorageGW").text("Save");
    $("#trnPreProformaReserveAreaStorageID").val(ID);
}

function DeletetrnPreProformaReserveAreaStorage(ID) {
    $.ajax({
        url: GetRootPath + "trnpreproforma/deleteReserveAreaStorageDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FilltrnPreProformaReserveAreaStorageGrid();
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
    var NoofContainers = $('#ContainerSlabwiseStorageNoofContainers').val();
    var Rate = $('#ContainerSlabwiseStorageTotalBase').val();
    var Discountamt = $('#ContainerSlabwiseStorageDiscountamtBase').val();
    var GSTPer = $('#ContainerSlabwiseStorageGSTPer').val();

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
}

function getdatediff() {
    if ($("#ContainerSlabwiseStorageStorageStartDate").val() != "" && $("#ContainerSlabwiseStorageStorageStartDate").val() != null && $("#ContainerSlabwiseStorageStorageStartDate").val() != undefined && $("#ContainerSlabwiseStorageStorageEndDate").val() != "" && $("#ContainerSlabwiseStorageStorageEndDate").val() != null && $("#ContainerSlabwiseStorageStorageEndDate").val() != undefined) {
        var Fromdate = $("#ContainerSlabwiseStorageStorageStartDate").val();
        var Todate = $("#ContainerSlabwiseStorageStorageEndDate").val();
        $.ajax({
            url: GetRootPath + "trnpreproforma/checkFordate/?Fromdate=" + Fromdate + "&Todate=" + Todate,
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

function AddtrnPreProformaContainerSlabwiseStorage() {
    event.preventDefault();

    $("#btnContainerSlabwiseStorageGW").hide();
    $("#tmpbtnContainerSlabwiseStorageGW").show();
    $(".redborder").removeClass("redborder");
    $.ajax({
        url: GetRootPath + "trnpreproforma/validateModelContainerSlabwiseStorage",
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

                $("#btnContainerSlabwiseStorageGW").show();
                $("#tmpbtnContainerSlabwiseStorageGW").hide();

            }
            else {
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "trnpreproforma/AddtrnPreProformaContainerSlabwiseStorage",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        CleartrnPreProformaContainerSlabwiseStorage();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FilltrnPreProformaContainerSlabwiseStorageGrid();
                        TosterAlert(msgType, msg, msgTitle);

                        $("#btnContainerSlabwiseStorageGW").show();
                        $("#tmpbtnContainerSlabwiseStorageGW").hide();

                    }
                });
            }
        }
    });
}

function FilltrnPreProformaContainerSlabwiseStorageGrid() {
    $("#ContainerSlabwiseStorageDetails").html("");

    $.ajax({
        url: GetRootPath + "trnpreproforma/FilltrnPreProformaContainerSlabwiseStorageGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#ContainerSlabwiseStorageDetails").html(data);
            }
            CleartrnPreProformaContainerSlabwiseStorage();
            filldatatable();
        }
    });
}

function CleartrnPreProformaContainerSlabwiseStorage() {
    $("#ContainerSlabwiseStorageContSizeName").val('');
    $("#ContainerSlabwiseStorageGSTPer").val('0');
    $("#ContainerSlabwiseStorageCargoType").val('');
    $("#ContainerSlabwiseStorageBillCommodity").val('');
    $("#ContainerSlabwiseStorageSubcommodity").val('');
    $("#ContainerSlabwiseStorageTarrifHead").val('');
    $("#ContainerSlabwiseStorageStorageStartDate").val('');
    $("#ContainerSlabwiseStorageStorageEndDate").val('');
    $("#ContainerSlabwiseStorageContSizeID").val('0');
    $("#ContainerSlabwiseStorageTarrifHeadID").val('0');
    $("#ContainerSlabwiseStorageTotal").val('0');
    $("#ContainerSlabwiseStorageDiscountamt").val('0');
    $("#ContainerSlabwiseStorageNetamount").val('0');
    $("#ContainerSlabwiseStorageBillCommodityID").val('0');
    $("#ContainerSlabwiseStorageSubcommodityID").val('0');
    $("#ContainerSlabwiseStorageCargoTypeID").val('0');
    $("#ContainerSlabwiseStorageNoofContainers").val('0');
    $("#trnPreProformaContainerSlabwiseStorageID").val('0');
    $("#btnContainerSlabwiseStorageGW").text("Add");
    getdatediff();
}

function EdittrnPreProformaContainerSlabwiseStorage(ID) {
    $("#ContainerSlabwiseStorageContSizeName").val($("#ContainerSlabwiseStorageContSizeName_" + ID).text());
    $("#ContainerSlabwiseStorageGSTPer").val($("#ContainerSlabwiseStorageGSTPer_" + ID).text());
    $("#ContainerSlabwiseStorageCargoType").val($("#ContainerSlabwiseStorageCargoType_" + ID).text());
    $("#ContainerSlabwiseStorageBillCommodity").val($("#ContainerSlabwiseStorageBillCommodity_" + ID).text());
    $("#ContainerSlabwiseStorageSubcommodity").val($("#ContainerSlabwiseStorageSubcommodity_" + ID).text());
    $("#ContainerSlabwiseStorageTarrifHead").val($("#ContainerSlabwiseStorageTarrifHead_" + ID).text());
    $("#ContainerSlabwiseStorageStorageStartDate").val($("#ContainerSlabwiseStorageStorageStartDate_" + ID).text());
    $("#ContainerSlabwiseStorageStorageEndDate").val($("#ContainerSlabwiseStorageStorageEndDate_" + ID).text());
    $("#ContainerSlabwiseStorageContSizeID").val($("#ContainerSlabwiseStorageContSizeID_" + ID).text());
    $("#ContainerSlabwiseStorageTarrifHeadID").val($("#ContainerSlabwiseStorageTarrifHeadID_" + ID).text());
    $("#ContainerSlabwiseStorageTotal").val($("#ContainerSlabwiseStorageTotal_" + ID).text());
    $("#ContainerSlabwiseStorageDiscountamt").val($("#ContainerSlabwiseStorageDiscountamt_" + ID).text());
    $("#ContainerSlabwiseStorageNetamount").val($("#ContainerSlabwiseStorageNetamount_" + ID).text());
    $("#ContainerSlabwiseStorageBillCommodityID").val($("#ContainerSlabwiseStorageBillCommodityID_" + ID).text());
    $("#ContainerSlabwiseStorageSubcommodityID").val($("#ContainerSlabwiseStorageSubcommodityID_" + ID).text());
    $("#ContainerSlabwiseStorageCargoTypeID").val($("#ContainerSlabwiseStorageCargoTypeID_" + ID).text());
    $("#ContainerSlabwiseStorageNoofContainers").val($("#ContainerSlabwiseStorageNoofContainers_" + ID).text());
    $("#btnContainerSlabwiseStorageGW").text("Save");
    $("#trnPreProformaContainerSlabwiseStorageID").val(ID);
    getdatediff();
}

function DeletetrnPreProformaContainerSlabwiseStorage(ID) {
    $.ajax({
        url: GetRootPath + "trnpreproforma/deleteContainerSlabwiseStorageDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FilltrnPreProformaContainerSlabwiseStorageGrid();
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

function AddtrnPreProformaCargoSlabwiseStorage() {
    event.preventDefault();

    $("#btnCargoSlabwiseStorageGW").hide();
    $("#tmpbtnCargoSlabwiseStorageGW").show();
    $(".redborder").removeClass("redborder");
    $.ajax({
        url: GetRootPath + "trnpreproforma/validateModelCargoSlabwiseStorage",
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

                $("#btnCargoSlabwiseStorageGW").show();
                $("#tmpbtnCargoSlabwiseStorageGW").hide();

            }
            else {
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "trnpreproforma/AddtrnPreProformaCargoSlabwiseStorage",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        CleartrnPreProformaCargoSlabwiseStorage();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FilltrnPreProformaCargoSlabwiseStorageGrid();
                        TosterAlert(msgType, msg, msgTitle);

                        $("#btnCargoSlabwiseStorageGW").show();
                        $("#tmpbtnCargoSlabwiseStorageGW").hide();

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

function FilltrnPreProformaCargoSlabwiseStorageGrid() {
    $("#CargoSlabwiseStorageDetails").html("");

    $.ajax({
        url: GetRootPath + "trnpreproforma/FilltrnPreProformaCargoSlabwiseStorageGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#CargoSlabwiseStorageDetails").html(data);
                CleartrnPreProformaCargoSlabwiseStorage();
            }
            filldatatable();
        }
    });
}

function CleartrnPreProformaCargoSlabwiseStorage() {

    $("#CargoSlabwiseStorageUOM").val('');
    $("#CargoSlabwiseStorageSubcommodity").val('');
    $("#CargoSlabwiseStorageSubcommodityID").val('0');
    $("#CargoSlabwiseStorageGSTPer").val('0');
    $("#CargoSlabwiseStorageCargoType").val('');
    $("#CargoSlabwiseStorageBillCommodity").val('');
    $("#CargoSlabwiseStorageTarrifHead").val('');
    $("#CargoSlabwiseStorageSubcommodity").val('');
    $("#CargoSlabwiseStorageTarrifHeadID").val('0');
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
    $("#trnPreProformaCargoSlabwiseStorageID").val('0');
    $("#btnCargoSlabwiseStorageGW").text("Add");
    $("#CargoSlabwiseStorageQTY").prop("readonly", false);
    $("#CargoSlabwiseStorageWeight").prop("readonly", false);
}

function EdittrnPreProformaCargoSlabwiseStorage(ID) {
    $("#CargoSlabwiseStorageUOM").val($("#CargoSlabwiseStorageUOM_" + ID).text());
    $("#CargoSlabwiseStorageSubcommodity").val($("#CargoSlabwiseStorageSubcommodity_" + ID).text());
    $("#CargoSlabwiseStorageSubcommodityID").val($("#CargoSlabwiseStorageSubcommodityID_" + ID).text());
    $("#CargoSlabwiseStorageGSTPer").val($("#CargoSlabwiseStorageGSTPer_" + ID).text());
    $("#CargoSlabwiseStorageCargoType").val($("#CargoSlabwiseStorageCargoType_" + ID).text());
    $("#CargoSlabwiseStorageBillCommodity").val($("#CargoSlabwiseStorageBillCommodity_" + ID).text());
    $("#CargoSlabwiseStorageTarrifHead").val($("#CargoSlabwiseStorageTarrifHead_" + ID).text());
    $("#CargoSlabwiseStorageUOMID").val($("#CargoSlabwiseStorageUOMID_" + ID).text());
    $("#CargoSlabwiseStorageTarrifHeadID").val($("#CargoSlabwiseStorageTarrifHeadID_" + ID).text());
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
    $("#btnCargoSlabwiseStorageGW").text("Save");
    $("#trnPreProformaCargoSlabwiseStorageID").val(ID);
    if ($("#CargoSlabwiseStorageUOM").val() == "KGS") {
        $("#CargoSlabwiseStorageArea").prop("readonly", true);
        $("#CargoSlabwiseStorageQTY").prop("readonly", true);
        $("#CargoSlabwiseStorageWeight").prop("readonly", false);

    }
    else if ($("#CargoSlabwiseStorageUOM").val() == "PER UNIT")
    {
        $("#CargoSlabwiseStorageArea").prop("readonly", true);
        $("#CargoSlabwiseStorageQTY").prop("readonly", false);
        $("#CargoSlabwiseStorageWeight").prop("readonly", true);
    }
    else
    {
        $("#CargoSlabwiseStorageArea").prop("readonly", false);
        $("#CargoSlabwiseStorageQTY").prop("readonly", true);
        $("#CargoSlabwiseStorageWeight").prop("readonly", true);
    }
}

function DeletetrnPreProformaCargoSlabwiseStorage(ID) {
    $.ajax({
        url: GetRootPath + "trnpreproforma/deleteCargoSlabwiseStorageDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FilltrnPreProformaCargoSlabwiseStorageGrid();
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
    var Discountamt = $('#OtherTerrifDetailsDiscountamt').val();
    var GSTPer = $('#OtherTerrifDetailsGSTPer').val();
    
    if (Rate == undefined || Rate == null || Rate == "" || Rate == 0) {
        Rate = 0;
        $('#OtherTerrifDetailsTotal').val(0);
        //Discountamt = 0;
        //$('#OtherTerrifDetailsDiscountamt').val(0);
    }
    if (GSTPer == undefined || GSTPer == null || GSTPer == "" || GSTPer == 0 || GSTPer > 100) {
        GSTPer = 0;
        $('#OtherTerrifDetailsGSTPer').val(0);
    }
    if (Discountamt == undefined || Discountamt == null || Discountamt == "" || Discountamt == 0) {
        Discountamt = 0;
        $('#OtherTerrifDetailsDiscountamt').val(0);
    }

    if (parseInt(Rate) <= Discountamt) {
        Discountamt = 0;
        $('#OtherTerrifDetailsDiscountamt').val(0);
    }

    if ((parseFloat(Rate) * parseFloat(QTY)) > (parseFloat(Discountamt) * parseFloat(QTY))) {
        //Discountamt = 0;
        //$('#OtherTerrifDetailsDiscountamt').val(0);
        //var GSTAMT = ((((parseFloat(Rate) * parseFloat(QTY)) - (parseFloat(Discountamt) * parseFloat(QTY))) * GSTPer) / 100);
        //$("#OtherTerrifDetailsTotal").val(((parseFloat(Rate) * parseFloat(QTY)) - (parseFloat(Discountamt) * parseFloat(QTY)) + GSTAMT).toFixed(2));

        var total = (QTY * Rate) - Discountamt;

        $("#OtherTerrifDetailsTotal").val(total + (total * GSTPer) / 100);

    }
    //else {
    //    var GSTAMT = ((((parseFloat(Rate) * parseFloat(QTY)) - (parseFloat(Discountamt) * parseFloat(QTY))) * GSTPer) / 100);
    //    $("#OtherTerrifDetailsTotal").val(((parseFloat(Rate) * parseFloat(QTY)) - (parseFloat(Discountamt) * parseFloat(QTY)) + GSTAMT).toFixed(2));
    //}
}

function AddtrnPreProformaOtherTerrifDetails() {
    event.preventDefault();

    $("#btnOtherTerrifDetailsGW").hide();
    $("#tmpbtnOtherTerrifDetailsGW").show();
    $(".redborder").removeClass("redborder");
    $.ajax({
        url: GetRootPath + "trnpreproforma/validateModelOtherTerrifDetails",
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

                $("#btnOtherTerrifDetailsGW").show();
                $("#tmpbtnOtherTerrifDetailsGW").hide();

            }
            else {
                $(".redborder").removeClass("redborder");

                $.ajax({
                    url: GetRootPath + "trnpreproforma/AddtrnPreProformaOtherTerrifDetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        CleartrnPreProformaOtherTerrifDetails();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FilltrnPreProformaOtherTerrifDetailsGrid();
                        TosterAlert(msgType, msg, msgTitle);

                        $("#btnOtherTerrifDetailsGW").show();
                        $("#tmpbtnOtherTerrifDetailsGW").hide();

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

function FilltrnPreProformaOtherTerrifDetailsGrid() {
    $("#OtherTerrifDetailsDetails").html("");

    $.ajax({
        url: GetRootPath + "trnpreproforma/FilltrnPreProformaOtherTerrifDetailsGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#OtherTerrifDetailsDetails").html(data);
                CleartrnPreProformaOtherTerrifDetails();
            }
            filldatatable();
        }
    });
}

function CleartrnPreProformaOtherTerrifDetails() {
    
    $("#OtherTerrifDetailsTarrifHead").val('');
    $("#OtherTerrifDetailsTarrifHeadID").val('0');
    $("#OtherTerrifDetailsRate").val('0');
    $("#OtherTerrifDetailsTotal").val('0');
    $("#OtherTerrifDetailsQTY").val('0');
    $("#trnPreProformaOtherTerrifDetailsID").val('0');
    $("#btnOtherTerrifDetailsGW").text("Add");
    $("#OtherTerrifDetailsGSTPer").val('0');
    $("#OtherTerrifDetailsDiscountamt").val('0');
}

function EdittrnPreProformaOtherTerrifDetails(ID) {
    $("#OtherTerrifDetailsTarrifHead").val($("#OtherTerrifDetailsTarrifHead_" + ID).text());
    $("#OtherTerrifDetailsTarrifHeadID").val($("#OtherTerrifDetailsTarrifHeadID_" + ID).text());
    $("#OtherTerrifDetailsRate").val($("#OtherTerrifDetailsRate_" + ID).text());
    $("#OtherTerrifDetailsTotal").val($("#OtherTerrifDetailsTotal_" + ID).text());
    $("#OtherTerrifDetailsQTY").val($("#OtherTerrifDetailsQTY_" + ID).text());
    $("#btnOtherTerrifDetailsGW").text("Save");
    $("#trnPreProformaOtherTerrifDetailsID").val(ID);
    $("#OtherTerrifDetailsGSTPer").val($("#OtherTerrifDetailsGSTPer_" + ID).text());
    $("#OtherTerrifDetailsDiscountamt").val($("#OtherTerrifDetailsDiscountamt_" + ID).text());
}

function DeletetrnPreProformaOtherTerrifDetails(ID) {
    $.ajax({
        url: GetRootPath + "trnpreproforma/deleteOtherTerrifDetailsDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FilltrnPreProformaOtherTerrifDetailsGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}
//----------------------------------------------------------------------------------------------------------------

function openOtherterrif() {
    FilltrnPreProformaOtherTerrifDetailsGrid();
    SetfuncationModelValue('OtherTerrifDetails')
    $("#AddOtherTarrifHead").modal("show");

    setTimeout(function () {
        Autocompletebox("OtherTerrifDetailsTarrifHead", "OtherTerrifDetailsTarrifHeadID", "trnpreproforma", "GetTariffHead/"+$("#trnpreproformaID").val());
    }, 500);
}

function FinishedAllChanges(ID) {
    $.ajax({
        url: GetRootPath + "trnpreproforma/FinishedAllChanges/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            window.location = GetRootPath + "trnpreproforma/index";
        }
    });
}

function GetGeneralTriffDetails() {
    
    $.ajax({
        url: GetRootPath + "trnpreproforma/GetGeneralTeriffDetails/?ModelName=" + ModelName,
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {


            if (data != "") {
                if (data == "" && $("#" + ModelName + "TarrifHead").val() != "") {
                    TosterAlert(AlertMessageType.WARNING, "Selected Triff is undefine.", AlertMessageTitle.WARNING);
                }
                else {
                    if ($("#" + ModelName + "TarrifHead").val() != "") {
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
                        debugger
                        let CargoHandlingRate = parseFloat(data.split('|')[0]) / 1000;
                        let CargoHandlingDiscountamt = parseFloat(data.split('|')[1]) / 1000;

                        $("#CargoHandlingRate").val(CargoHandlingRate.toFixed(2));
                        $("#CargoHandlingDiscountamt").val(CargoHandlingDiscountamt.toFixed(2));
                        $("#CargoHandlingQTY").prop('readonly', true);
                        $("#CargoHandlingWeight").prop('readonly', false);
                        $("#CargoHandlingQTY").val("0");
                    }
                    else
                    {
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
                else if (ModelName == "CargoBasedStorage")
                {
                    debugger;
                    if ($("#CargoBasedStorageUOM").val() == "KGS") {
                        $("#CargoBasedStorageRate").val((parseFloat(data.split('|')[0]) / 1000).toFixed(2));
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
                    else
                    {
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

                else if (ModelName == "ReserveAreaStorage")
                {
                    $("#ReserveAreaStorageRate").val(parseFloat(data.split('|')[0]));
                    $("#ReserveAreaStorageDiscountamt").val(data.split('|')[1]);
                    $("#ReserveAreaStorageDiscountamtBase").val(data.split('|')[1]);
                    $("#ReserveAreaStorageGSTPer").val(data.split('|')[2]);
                    CalculateReserveAreaStorageAMT();
                }
                else if (ModelName == "ContainerSlabwiseStorage") {
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
                    $("#OtherTerrifDetailsDiscountamt").val(data.split('|')[1]);
                    $("#OtherTerrifDetailsGSTPer").val(data.split('|')[2]);
                    $("#OtherTerrifDetailsDiscountamtBase").val($("#OtherTerrifDetailsDiscountamt").val())
                    CalculateOtherTerrifDetailsAMT();
                }
            }
        }
    });
}

function SetfuncationModelValue(mdlname) {
    ModelName = mdlname;
}