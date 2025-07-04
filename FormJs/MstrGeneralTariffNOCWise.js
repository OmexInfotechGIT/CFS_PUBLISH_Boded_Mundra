$(document).ready(function () {
     
    Autocompletebox("mdlSpaceCertificateNo", "mdlSpaceCertificateID", "MstrGeneralTariffNOCWise", "GetNOCBasedOnTariffNo?TariffNo=" + $("#TeriffNo").val());
    Autocompletebox("SpaceCertificateNo", "SpaceCertificateID", "MstrGeneralTariffNOCWise", "GetNOCBasedOnTariffNo?TariffNo=" + $("#TeriffNo").val(), "GetInBOENo");
    if (!$("#SpaceCertificateNo").val().includes("NOC")) {
        $("#SearchType").val("EXPORT");
    }
    else {
        $("#SearchType").val("IMPORT");
    }
    var SearchType = $("#SearchType").val();
    var SpaceCertificateID = $("#SpaceCertificateID").val();
    if (SpaceCertificateID != null && SpaceCertificateID != undefined && SpaceCertificateID != "0") {        
        Autocompletebox("InBOENo", "trnDocumentLotDetailsID", "MstrGeneralTariffNOCWise", "GetInBOENo?SpaceCertificateID=" + $("#SpaceCertificateID").val() + "&SearchType=" + SearchType, "RangethestateofPage");
    }    
    Autocompletebox("TeriffNo", "TeriffID", "MstrGeneralTariffNOCWise", "getTariffHeadDetails/" + $("#SpaceCertificateID").val(), "GetNOCBasedOnTariffNo");
    Autocompletebox("EffectiveBatch", "EffectiveBatchID", "MstrGeneralTariffNOCWise", "GetBatchNo");
    Autocompletebox("txtSpaceCertificateNo", "txtSpaceCertificateID", "MstrGeneralTariffNOCWise", "GetNOCNO", "GetTariffHeadDateForAllNOC");

    removeURLParam("IsTariffDownload");

});

function removeURLParam(paramName) {

    let url = new URL(window.location.href);
    url.searchParams.delete(paramName);

    let SearchingDateRange = $("#SearchingDateRange").val();

    if (SearchingDateRange != "" && SearchingDateRange != undefined && SearchingDateRange != null) {

        url.searchParams.set("Fromdate", $("#SearchingDateRange").val().split("_")[0]);
        url.searchParams.set("Todate", $("#SearchingDateRange").val().split("_")[1]);
        url.searchParams.set("TariffStatus", $("#SearchingDateRange").val().split("_")[2]);

    }
    window.history.pushState({}, "", url);
}

function AddDate() {
    
    var url = new URL(location.href);
    
    let EffetiveDateFrom = $("#EffetiveDateFrom").val();
    let EffectiveToDate = $("#EffectiveToDate").val();

    const selectedSingleValue = document.getElementById("SearchingDateRange");
    if (selectedSingleValue != null) {
        if (selectedSingleValue.options.length == 1) {
            $('#SearchingDateRange option:first').prop('selected', true);

            EffetiveDateFrom = $("#SearchingDateRange").val().split("_")[0];
            EffectiveToDate = $("#SearchingDateRange").val().split("_")[1];

        }
    }
    if (EffetiveDateFrom) {
        url.searchParams.set('Fromdate', EffetiveDateFrom);
    }
    if (EffectiveToDate) {
        url.searchParams.set('Todate', EffectiveToDate);
    }

    history.replaceState(null, '', url.toString()); 

}

function discountvalidation(Rate, Discount) {

    var rate = $("#" + Rate).val();
    var discount = $("#" + Discount).val();

    if (rate == "" || rate == "0") {
        rate = "0";
        $("#" + Discount).val("0");
    }
    if (discount == "")
        discount = "0";

    if (rate != 0) {

        if (parseFloat(rate) < parseFloat(discount)) {
            $("#" + Discount).val('');
            TosterAlert("error", 'Discount should be less then Rate.', "Warning!");
        }
    }
}

function DisplayTariffWise(FieldID) {


    var Field = $("#" + FieldID).find(":selected").text();



    if (Field == "LOADED DELIVERY HANDLING" || Field == "DESTUFF DELIVERY HANDLING" || Field == "EXPORT CONTAINER HANDLING CHARGES") {
        $(".CargoSize").show('slow');
        $(".CargoType").show('slow');
        $(".BillCommodity").show('slow');
        $(".SubCommodity").show('slow');
        $(".Rate").show('slow');
        $(".Batch").show('slow');
        $(".Discount").show('slow');
        $(".RatePerMetricTon").hide('slow');
        $(".RatePerUnit").hide('slow');
        $(".EffetiveDateFrom").show('slow');
        $(".EffectiveToDate").show('slow');
        $(".StoragePattern").hide('slow');
        $(".Number").hide('slow');
        $(".FromDays").hide('slow');
        $(".ToDays").hide('slow');
        $(".UOM").hide('slow');
        $(".RateOfArea").hide('slow');
        $(".FromWeek").hide('slow');
        $(".ToWeek").hide('slow');

    }

    else if (Field == "WEIGHWISE HANDLING") {
        $(".CargoSize").hide('slow');
        $(".CargoType").show('slow');
        $(".BillCommodity").show('slow');
        $(".SubCommodity").show('slow');
        $(".Rate").hide('slow');
        $(".Batch").show('slow');
        $(".Discount").show('slow');
        $(".RatePerMetricTon").show('slow');
        $(".RatePerUnit").hide('slow');
        $(".EffetiveDateFrom").show('slow');
        $(".EffectiveToDate").show('slow');
        $(".StoragePattern").hide('slow');
        $(".Number").hide('slow');
        $(".FromDays").hide('slow');
        $(".ToDays").hide('slow');
        $(".UOM").hide('slow');
        $(".RateOfArea").hide('slow');
        $(".FromWeek").hide('slow');
        $(".ToWeek").hide('slow');

    }

    else if (Field == "UNITWISE HANDLING") {
        $(".CargoSize").hide('slow');
        $(".CargoType").show('slow');
        $(".BillCommodity").show('slow');
        $(".SubCommodity").show('slow');
        $(".Rate").hide('slow');
        $(".Batch").show('slow');
        $(".Discount").show('slow');
        $(".RatePerMetricTon").hide('slow');
        $(".RatePerUnit").show('slow');
        $(".EffetiveDateFrom").show('slow');
        $(".EffectiveToDate").show('slow');
        $(".StoragePattern").hide('slow');
        $(".Number").hide('slow');
        $(".FromDays").hide('slow');
        $(".ToDays").hide('slow');
        $(".UOM").hide('slow');
        $(".RateOfArea").hide('slow');
        $(".FromWeek").hide('slow');
        $(".ToWeek").hide('slow');

    }

    else if (Field == "LOADED DELIVERY STORAGE UNIT BASED") {
        $(".CargoSize").show('slow');
        $(".CargoType").show('slow');
        $(".BillCommodity").show('slow');
        $(".SubCommodity").show('slow');
        $(".Rate").show('slow');
        $(".Batch").show('slow');
        $(".Discount").show('slow');
        $(".RatePerMetricTon").hide('slow');
        $(".RatePerUnit").hide('slow');
        $(".EffetiveDateFrom").show('slow');
        $(".EffectiveToDate").show('slow');
        $(".StoragePattern").show('slow');
        $(".Number").show('slow');
        $(".FromDays").hide('slow');
        $(".ToDays").hide('slow');
        $(".UOM").hide('slow');
        $(".RateOfArea").hide('slow');
        $(".FromWeek").hide('slow');
        $(".ToWeek").hide('slow');

    }

    else if (Field == "LOADED DELIVERY STORAGE SLAB BASED") {
        $(".CargoSize").show('slow');
        $(".CargoType").show('slow');
        $(".BillCommodity").show('slow');
        $(".SubCommodity").show('slow');
        $(".Rate").show('slow');
        $(".Batch").show('slow');
        $(".Discount").hide('slow');
        $(".RatePerMetricTon").hide('slow');
        $(".RatePerUnit").hide('slow');
        $(".EffetiveDateFrom").show('slow');
        $(".EffectiveToDate").show('slow');
        $(".StoragePattern").hide('slow');
        $(".Number").hide('slow');
        $(".FromDays").show('slow');
        $(".ToDays").show('slow');
        $(".UOM").hide('slow');
        $(".RateOfArea").hide('slow');
        $(".FromWeek").hide('slow');
        $(".ToWeek").hide('slow');

    }

    else if (Field == "EXPORT LOADED DELIVERY STORAGE SLAB BASED") {
        $(".CargoSize").show('slow');
        $(".CargoType").show('slow');
        $(".BillCommodity").show('slow');
        $(".SubCommodity").show('slow');
        $(".Rate").show('slow');
        $(".Batch").show('slow');
        $(".Discount").hide('slow');
        $(".RatePerMetricTon").hide('slow');
        $(".RatePerUnit").hide('slow');
        $(".EffetiveDateFrom").hide('slow');
        $(".EffectiveToDate").hide('slow');
        $(".StoragePattern").hide('slow');
        $(".Number").hide('slow');
        $(".FromDays").show('slow');
        $(".ToDays").show('slow');
        $(".UOM").hide('slow');
        $(".RateOfArea").hide('slow');
        $(".FromWeek").hide('slow');
        $(".ToWeek").hide('slow');

    }

    else if (Field == "STORAGE CHARGES (WEIGHT/UNIT)") {
        $(".CargoSize").hide('slow');
        $(".CargoType").show('slow');
        $(".BillCommodity").show('slow');
        $(".SubCommodity").show('slow');
        $(".Rate").show('slow');
        $(".Batch").show('slow');
        $(".Discount").show('slow');
        $(".RatePerMetricTon").hide('slow');
        $(".RatePerUnit").hide('slow');
        $(".EffetiveDateFrom").hide('slow');
        $(".EffectiveToDate").hide('slow');
        $(".StoragePattern").show('slow');
        $(".Number").show('slow');
        $(".FromDays").hide('slow');
        $(".ToDays").hide('slow');
        $(".UOM").show('slow');
        $(".RateOfArea").hide('slow');
        $(".FromWeek").hide('slow');
        $(".ToWeek").hide('slow');

    }

    else if (Field == "AREA BASED STORAGE CHARGES") {
        $(".CargoSize").hide('slow');
        $(".CargoType").show('slow');
        $(".BillCommodity").show('slow');
        $(".SubCommodity").show('slow');
        $(".Rate").hide('slow');
        $(".Batch").show('slow');
        $(".Discount").show('slow');
        $(".RatePerMetricTon").hide('slow');
        $(".RatePerUnit").hide('slow');
        $(".EffetiveDateFrom").hide('slow');
        $(".EffectiveToDate").hide('slow');
        $(".StoragePattern").show('slow');
        $(".Number").show('slow');
        $(".FromDays").hide('slow');
        $(".ToDays").hide('slow');
        $(".UOM").show('slow');
        $(".RateOfArea").show('slow');
        $(".FromWeek").hide('slow');
        $(".ToWeek").hide('slow');

    }

    else if (Field == "FIXED STORAGE CHARGES") {
        $(".CargoSize").hide('slow');
        $(".CargoType").show('slow');
        $(".BillCommodity").show('slow');
        $(".SubCommodity").show('slow');
        $(".Rate").hide('slow');
        $(".Batch").show('slow');
        $(".Discount").show('slow');
        $(".RatePerMetricTon").hide('slow');
        $(".RatePerUnit").hide('slow');
        $(".EffetiveDateFrom").show('slow');
        $(".EffectiveToDate").show('slow');
        $(".StoragePattern").show('slow');
        $(".Number").show('slow');
        $(".FromDays").hide('slow');
        $(".ToDays").hide('slow');
        $(".UOM").show('slow');
        $(".RateOfArea").show('slow');
        $(".FromWeek").hide('slow');
        $(".ToWeek").hide('slow');
        $(".StorageAreaReferenceNumber").show('slow');
    }

    else if (Field == "SLABWISE STORAGE EXAMPLE - WEEKLY - FIXED") {
        $(".CargoSize").hide('slow');
        $(".CargoType").show('slow');
        $(".BillCommodity").show('slow');
        $(".SubCommodity").show('slow');
        $(".Rate").hide('slow');
        $(".Batch").show('slow');
        $(".Discount").show('slow');
        $(".RatePerMetricTon").hide('slow');
        $(".RatePerUnit").hide('slow');
        $(".EffetiveDateFrom").hide('slow');
        $(".EffectiveToDate").hide('slow');
        $(".StoragePattern").hide('slow');
        $(".Number").hide('slow');
        $(".FromDays").hide('slow');
        $(".ToDays").hide('slow');
        $(".UOM").show('slow');
        $(".RateOfArea").show('slow');
        $(".FromWeek").show('slow');
        $(".ToWeek").show('slow');

    }

    else if (Field == "SLABWISE STORAGE EXAMPLE - FLEXIBLE") {
        $(".CargoSize").hide('slow');
        $(".CargoType").show('slow');
        $(".BillCommodity").show('slow');
        $(".SubCommodity").show('slow');
        $(".Rate").hide('slow');
        $(".Batch").show('slow');
        $(".Discount").show('slow');
        $(".RatePerMetricTon").hide('slow');
        $(".RatePerUnit").hide('slow');
        $(".EffetiveDateFrom").hide('slow');
        $(".EffectiveToDate").hide('slow');
        $(".StoragePattern").hide('slow');
        $(".Number").hide('slow');
        $(".FromDays").show('slow');
        $(".ToDays").show('slow');
        $(".UOM").show('slow');
        $(".RateOfArea").show('slow');
        $(".FromWeek").hide('slow');
        $(".ToWeek").hide('slow');

    }

    else if (Field == "EMPTY CONTAINER GROUND RENT CHARGES" || Field == "EMPTY CONTAINER GROUND RENT CHARGES - EXPORT") {
        $(".CargoSize").show('slow');
        $(".CargoType").show('slow');
        $(".BillCommodity").hide('slow');
        $(".SubCommodity").hide('slow');
        $(".Rate").show('slow');
        $(".Batch").show('slow');
        $(".Discount").hide('slow');
        $(".RatePerMetricTon").hide('slow');
        $(".RatePerUnit").hide('slow');
        $(".EffetiveDateFrom").hide('slow');
        $(".EffectiveToDate").hide('slow');
        $(".StoragePattern").hide('slow');
        $(".Number").hide('slow');
        $(".FromDays").show('slow');
        $(".ToDays").show('slow');
        $(".UOM").hide('slow');
        $(".RateOfArea").hide('slow');
        $(".FromWeek").hide('slow');
        $(".ToWeek").hide('slow');

    }

    else if (Field == "EMPTY CONTAINER LIFT ON CHARGES" || Field == "EMPTY CONTAINER LIFT OFF CHARGES" || Field == "EMPTY CONTAINER TRANSPORTATION CHARGES") {
        $(".CargoSize").show('slow');
        $(".CargoType").show('slow');
        $(".BillCommodity").hide('slow');
        $(".SubCommodity").hide('slow');
        $(".Rate").show('slow');
        $(".Batch").show('slow');
        $(".Discount").hide('slow');
        $(".RatePerMetricTon").hide('slow');
        $(".RatePerUnit").hide('slow');
        $(".EffetiveDateFrom").hide('slow');
        $(".EffectiveToDate").hide('slow');
        $(".StoragePattern").hide('slow');
        $(".Number").hide('slow');
        $(".FromDays").hide('slow');
        $(".ToDays").hide('slow');
        $(".UOM").hide('slow');
        $(".RateOfArea").hide('slow');
        $(".FromWeek").hide('slow');
        $(".ToWeek").hide('slow');

    }

    else {

    }
    if ($("#MstrGeneralTariffNOCWiseID").val() == 0) {

        ClearMstrGeneralTariffNOCWise();
    }
}

function validateForm() {
    
    var isvalid = true;
    var Errormsg = "";
    
    let EffetiveDateFrom = $("#EffetiveDateFrom").val();
    let EffectiveToDate = $("#EffectiveToDate").val();
    let SpaceCertificateNo = $("#SpaceCertificateNo").val();
    let InBOENo = $("#InBOENo").val();

    if (EffetiveDateFrom == undefined || EffetiveDateFrom == "") {
        Errormsg += "Please Add Effetive From Date <br />";
        $("#EffetiveDateFrom").addClass("redborder");        
        isvalid = false;
    } else {
        $("#EffetiveDateFrom").removeClass("redborder");        
    }

    if (EffectiveToDate == undefined || EffectiveToDate == "") {
        Errormsg += "Please Add Effetive To Date <br />";
        $("#EffectiveToDate").addClass("redborder");
        isvalid = false;
    } else {
        $("#EffectiveToDate").removeClass("redborder");
    }

    if (SpaceCertificateNo == undefined || SpaceCertificateNo == "") {
        Errormsg += "Please select Noc No. <br />";
        $("#SpaceCertificateNo").addClass("redborder");
        isvalid = false;
    } else {
        $("#SpaceCertificateNo").removeClass("redborder");
    }
    if ((EffetiveDateFrom == undefined || EffetiveDateFrom == "") && (EffectiveToDate == undefined || EffectiveToDate == "")) {
        Errormsg += "Please Select  Searching Date Range<br />";
        $("#SearchingDateRange").addClass("redborder");
        isvalid = false;
    }
    else {
        $("#SearchingDateRange").removeClass("redborder");
    }
    if (InBOENo == undefined || InBOENo == "") {
        Errormsg += "Please select In-BOE No. <br />";
        $("#InBOENo").addClass("redborder");
        isvalid = false;
    } else {
        $("#InBOENo").removeClass("redborder");
    }

    if (isvalid) {

        $.ajax({
            url: GetRootPath + "MstrGeneralTariffNOCWise/validateModel",
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
                            if (ErrorFields[Q] != "") {
                                $("#" + ErrorFields[Q]).addClass("redborder");
                            }
                        }
                    }
                    if (Errormsg != "") {
                        TosterAlert("error", Errormsg, "Required!");
                    }
                } 
            }
        });
    }

    if (Errormsg != "") {
        TosterAlert("error", Errormsg, "Required!");
    }

    return isvalid;

}

function EditMstrGeneralTariffNOCWise(ID) {
    $("#MstrGeneralTariffNOCWiseID").val(ID);
    $("#TariffHeadName").val($("#TariffHeadName_" + ID).val());
    $("#MstrTariffHeadID").val($("#MstrTariffHeadID_" + ID).val());
    $("#TariffHead").val($("#MstrTariffHeadID_" + ID).val());
    $("#txtCargoSize").val($("#CargoSize_" + ID).val());
    $("#ContSizeRefID").val($("#ContSizeID_" + ID).val());
    $("#txtCargoType").val($("#CargoType_" + ID).val());
    $("#MstrNatureOfCargoRefID").val($("#MstrNatureOfCargoID_" + ID).val());
    $("#txtBillCommodity").val($("#BillCommodity_" + ID).val());
    $("#MstrBillableCommodityRefID").val($("#MstrBillableCommodityID_" + ID).val());
    $("#txtSubCommodity").val($("#MstrSubCommodityID_" + ID).val());
    $("#MstrSubCommodityRefID").val($("#MstrSubCommodityID_" + ID).val());
    $("#txtRate").val($("#Rate_" + ID).val());
    $("#txtBatch").val($("#Batch_" + ID).val());
   //$("#MstrBatchRefID").val($("#MstrBatchID_" + ID).val());
    $("#txtDiscount").val($("#Discount_" + ID).val());
    $("#txtRatePerMetricTon").val($("#RatePerMetricTon_" + ID).val());
    $("#txtRatePerUnit").val($("#RatePerUnit_" + ID).val());
    $("#EffetiveDateFrom").val($("#EffetiveDateFrom_" + ID).val());
    $("#EffectiveToDate").val($("#EffectiveToDate_" + ID).val());
    $("#txtStoragePatternt").val($("#StoragePattern_" + ID).val());
    $("#txtNumber").val($("#Number_" + ID).val());
    $("#txtFromDays").val($("#FromDays_" + ID).val());
    $("#txtToDays").val($("#ToDays_" + ID).val());
    $("#txtUOM").val($("#UOM_" + ID).val());
    $("#MstrUomRefID").val($("#MstrUomID_" + ID).val());
    $("#txtRateOfArea").val($("#RateOfArea_" + ID).val());
    $("#txtFromWeek").val($("#FromWeek_" + ID).val());
    $("#txtToWeek").val($("#ToWeek_" + ID).val());
    DisplayTariffWise("TariffHead");

}

function ClearMstrGeneralTariffNOCWise(Num) {
    $("#MstrGeneralTariffNOCWiseID" + Num).val("0");
    $("#CargoSize" + Num).val("");
    $("#ContSizeRefID" + Num).val("0");
    $("#CargoType" + Num).val("");
    $("#DeliveryMode" + Num).val("");
    $("#MstrDeliveryModeRefID" + Num).val("");
    $("#MstrNatureOfCargoRefID" + Num).val("0");
    $("#BillCommodity" + Num).val("");
    $("#MstrBillableCommodityRefID" + Num).val("0");
    $("#SubCommodity" + Num).val("");
    $("#MstrSubCommodityRefID" + Num).val("0");
    $("#Rate" + Num).val("0");
    //$("#Batch" + Num).val("");
    //$("#MstrBatchRefID" + Num).val("0");
    $("#Discount" + Num).val("0");
    $("#RatePerMetricTon" + Num).val("0");
    $("#RatePerUnit" + Num).val("0");
    $("#EffetiveDateFrom" + Num).val("");
    $("#EffectiveToDate" + Num).val("");
    $("#StoragePattern" + Num).val("0");
    $("#Number" + Num).val("0");
    $("#FromDays" + Num).val("0");
    $("#ToDays" + Num).val("0");
    $("#UOM" + Num).val("");
    $("#MstrUomRefID" + Num).val("0");
    $("#RateOfArea" + Num).val("0");
    $("#FromWeek" + Num).val("0");
    $("#ToWeek" + Num).val("0");
}

function Changeteriff(ID) {
    //location.href += "/" + ID; 
    
    var NOCNO = $("#SpaceCertificateNo").val();
    var NOCID = $("#SpaceCertificateID").val();
    var EffetiveDateFrom = $("#EffetiveDateFrom").val();
    var EffectiveToDate = $("#EffectiveToDate").val();
    var MstrBatchID = $("#EffectiveBatchID").val();
    var MstrBatch = $("#EffectiveBatch").val();
    var isaddnewteriffno = $("#isaddnewteriffno").val();
    var TeriffNo = $("#TeriffNo").val();
    var StatusofTariff = $("#StatusofTariff").val();
    var InBOENo = $("#InBOENo").val();
    var trnDocumentLotDetailsID = 0;    
    if (InBOENo.toUpperCase() == "NOC WISE" || InBOENo.toUpperCase() == "STUFFING WISE") {
        $("#trnDocumentLotDetailsID").val("0");
    }
    trnDocumentLotDetailsID = $("#trnDocumentLotDetailsID").val();
    var SearchType = $("#SearchType").val();
    
    if (TeriffNo == "0") {
        TosterAlert("error", 'Please select correct teriffno!', "Warning!");
    }
    else {
        if (NOCNO == undefined) {
            NOCNO = "";
        }
        if (NOCID == undefined) {
            NOCID = "";
        }
        if (EffetiveDateFrom == undefined) {
            EffetiveDateFrom = "";
        }
        if (EffectiveToDate == undefined) {
            EffectiveToDate = "";
        }
        if (MstrBatchID == undefined) {
            MstrBatchID = "";
        }
        if (MstrBatch == undefined) {
            MstrBatch = "";
        }
        
        window.location = GetRootPath + "MstrGeneralTariffNOCWise/Action/" + ID + "?NOCID=" + NOCID + "&Fromdate=" + $("#EffetiveDateFrom").val() + "&Todate=" + $("#EffectiveToDate").val() + "&NocNo=" + NOCNO + "&InBOENo=" + InBOENo + "&trnDocumentLotDetailsID=" + trnDocumentLotDetailsID + "&SearchType=" + SearchType + "&TeriffNo=" + TeriffNo + "&isaddnewteriffno=" + isaddnewteriffno + "&TariffStatus=" + StatusofTariff;

    }
}

function Copyallteriffdata(ID, Fromdate, Todate, NOCID, MstrBatchID, MstrBatch) {
    
    $("#HDNTeriffID").val(ID);
    $("#hdnCurrentFromDate").val($("#EffetiveDateFrom").val());
    $("#hdnCurrentToDate").val($("#EffectiveToDate").val());
    $("#hdnNOCID").val(NOCID);
    $("#hdnMstrBatchID").val(MstrBatchID);
    $("#hdnMstrBatch").val(MstrBatch);
    $("#CopyTarrifHead").modal("show");
    setTimeout(function () {
        Autocompletebox("mdlSpaceCertificateNo", "mdlSpaceCertificateID", "MstrGeneralTariffNOCWise", "getNocDetails", "NOCWiseDateShow");
    }, 1000);
}

function NOCWiseDateShow() {
    
    var NOCID = $("#mdlSpaceCertificateID").val();
    
    var SearchTypes = "";
    var SpaceCertificateNo = $("#mdlSpaceCertificateNo").val();
    if (SpaceCertificateNo.split("/")[0].toUpperCase() == "NOC") {
        SearchTypes = "IMPORT";
    } else {
        SearchTypes = "EXPORT";
    }

    $.ajax({
        url: GetRootPath + "MstrGeneralTariffNOCWise/GetNOCToAllDate/?NOCID=" + NOCID + "&SearchTypes=" + SearchTypes,
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {

            document.getElementById("hdnNOCWiseDateShow").innerHTML = data;

        }
    });
}

function Copydate() {
    
    var TeriffID = $("#HDNTeriffID").val();
    var Fromdate = $("#mdlEffetiveDateFrom").val();
    var Todate = $("#mdlEffectiveToDate").val();
    var mdlMstrBatch = $("#mdlMstrBatch").val();
    var mdlMstrBatchID = $("#mdlMstrBatchID").val();
    var SpaceCertificateID = $("#mdlSpaceCertificateID").val();
    var SpaceCertificateNo = $("#mdlSpaceCertificateNo").val();
    var NOCID = $("#hdnNOCID").val();
    var CurrentFromDate = $("#hdnCurrentFromDate").val();
    var CurrentToDate = $("#hdnCurrentToDate").val();
    var trnDocumentLotDetailsID = $("#trnDocumentLotDetailsID").val();
    
    var SearchType = "";
    var CurrentSearchType = $("#SearchType").val();
    if (SpaceCertificateNo.split("/")[0].toUpperCase() == "NOC") {
        SearchType = "IMPORT";
    } else {
        SearchType = "EXPORT";
    }


    if (Fromdate != "" && Todate != "" && SpaceCertificateID > 0) {

        $.ajax({
            url: GetRootPath + "MstrGeneralTariffNOCWise/validateDates/?TeriffID=" + TeriffID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&CurrentFromDate=" + CurrentFromDate + "&CurrentToDate=" + CurrentToDate + "&CurrentNOCID=" + NOCID + "&SpaceCertificateID=" + SpaceCertificateID + "&SpaceCertificateNo=" + SpaceCertificateNo + "&SearchType=" + SearchType + "&CurrentSearchType=" + CurrentSearchType + "&trnDocumentLotDetailsID=" + trnDocumentLotDetailsID,
            type: "Get",
            dataType: "text",
            async: false,
            success: function (data) {

                $(".redborder").removeClass("redborder");
                if (data != "") {
                    if (data.split("|")[0] != "" && data.split("|")[0] != 'done') {
                        isvalid = false;
                        var Errormsg = data.split("|")[0];
                        var ErrorFields = data.split("|")[1].split(",");

                        if (ErrorFields != null && ErrorFields.length > 0) {
                            for (var Q = 0; Q < ErrorFields.length; Q++) {
                                if (ErrorFields[Q] != "") {
                                    $("#" + ErrorFields[Q]).addClass("redborder");
                                }
                            }
                        }
                        if (Errormsg != "") {
                            TosterAlert("error", Errormsg, "Required!");
                        }
                    }
                    else {
                        var BOENo = "";
                        var addCondition = "";
                        if (SearchType == "EXPORT") {
                            BOENo = "STUFFING WISE";
                            addCondition = "&SearchType=EXPORT";
                        } else {
                            BOENo = "NOC WISE";
                        }

                        window.location = GetRootPath + "MstrGeneralTariffNOCWise/Action/" + TeriffID + "?NOCID=" + SpaceCertificateID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&NOCNO=" + SpaceCertificateNo + "&iscopy=yes&InBOENo=" + BOENo + addCondition;
                    }
                }
            }
        });
    }
    else {

        if ($("#mdlEffetiveDateFrom").val() == "" || $("#mdlEffetiveDateFrom").val() == undefined) {
            $("#mdlEffetiveDateFrom").addClass("redborder");
        } else {
            $("#mdlEffetiveDateFrom").removeClass("redborder");
        }
        if ($("#mdlEffectiveToDate").val() == "" || $("#mdlEffectiveToDate").val() == undefined) {
            $("#mdlEffectiveToDate").addClass("redborder");
        } else {
            $("#mdlEffectiveToDate").removeClass("redborder");
        }
        if (parseInt(SpaceCertificateID) < 0 || SpaceCertificateID == "") {
            $("#mdlSpaceCertificateNo").addClass("redborder");
        } else {
            $("#mdlSpaceCertificateNo").removeClass("redborder");
        }

        TosterAlert("error", "Please select Required Fields", "Required!");
    }
}

function Changethedate(ID, Fromdate, Todate, NOCID, StatusofTariff) {
    
    var SpaceCertificateNo = $("#SpaceCertificateNo").val();
    var SearchingDates = $("#SearchingDateRange").val();
    var SearchType = $("#SearchType").val();
    var BOENo = "";
    if (SearchType.toUpperCase() == "EXPORT") {
        BOENo = "STUFFING WISE";
    } else {
        BOENo = "NOC WISE";
    }

    window.location = GetRootPath + "MstrGeneralTariffNOCWise/Action/" + ID + "?NOCID=" + NOCID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&NocNo=" + SpaceCertificateNo + "&TariffStatus=" + StatusofTariff + "&InBOENo=" + BOENo + "&SearchType=" + SearchType;
}

function SearchWithDate(ID) {
    
    var SearchingDates = $("#SearchingDateRange").val();
    var SpaceCertificateID = $("#SpaceCertificateID").val();

    Changethedate(ID, SearchingDates.split('_')[0], SearchingDates.split('_')[1], SpaceCertificateID, SearchingDates.split('_')[2]);
}
function GetInBOENo() {
    
    var SpaceCertificateID = $("#SpaceCertificateID").val();
    if (!$("#SpaceCertificateNo").val().includes("NOC")) {
        
        $("#SearchType").val("EXPORT");
    }
    else {
        $("#SearchType").val("IMPORT");
    }
    var SearchType = $("#SearchType").val();
    if (SpaceCertificateID != null && SpaceCertificateID != "0" && SpaceCertificateID != undefined) {
        Autocompletebox("InBOENo", "trnDocumentLotDetailsID", "MstrGeneralTariffNOCWise", "GetInBOENo?SpaceCertificateID=" + SpaceCertificateID + "&SearchType=" + SearchType, "RangethestateofPage");
    }    
}
function RangethestateofPage() {
    
    var MstrTariffHeadID = $("#MstrTariffHeadID").val();
    var SpaceCertificateID = $("#SpaceCertificateID").val();
    var SpaceCertificateNo = $("#SpaceCertificateNo").val();
    var OldSpaceCertificateID = $("#OldSpaceCertificateID").val();
    var Fromdate = $("#EffetiveDateFrom").val();
    var Todate = $("#EffectiveToDate").val();
    var MstrBatchID = $("#EffectiveBatchID").val();
    var MstrBatch = $("#EffectiveBatch").val();
    var InBOENo = $("#InBOENo").val();
    var trnDocumentLotDetailsID = 0;   
    if (InBOENo.toUpperCase() == "NOC WISE" || InBOENo.toUpperCase() == "STUFFING WISE") {
         $("#trnDocumentLotDetailsID").val("0");
    }
    trnDocumentLotDetailsID = $("#trnDocumentLotDetailsID").val();
    var SearchType = $("#SearchType").val();
    var TariffStatus = $("#StatusofTariff").val();


    //if (SpaceCertificateID != OldSpaceCertificateID) {
    //    Fromdate = "";
    //    Todate = "";
    //}
    
    
    if (OldSpaceCertificateID != 0 || SpaceCertificateID != 0) {
        if (SpaceCertificateID != 0) {
            window.location = GetRootPath + "MstrGeneralTariffNOCWise/Action/" + MstrTariffHeadID + "?NOCID=" + SpaceCertificateID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&NocNo=" + SpaceCertificateNo + "&InBOENo=" + InBOENo + "&trnDocumentLotDetailsID=" + trnDocumentLotDetailsID + "&SearchType=" + SearchType + "&TariffStatus=" + TariffStatus;
        }
    }
}

function GetNOCBasedOnTariffNo() {
    var TariffNo = $("#TeriffNo").val();
   
    if (TariffNo != null && TariffNo != undefined && TariffNo != "" && TariffNo != "0") {
        Autocompletebox("mdlSpaceCertificateNo", "mdlSpaceCertificateID", "MstrGeneralTariffNOCWise", "GetNOCBasedOnTariffNo?TariffNo=" + $("#TeriffNo").val());
        Autocompletebox("SpaceCertificateNo", "SpaceCertificateID", "MstrGeneralTariffNOCWise", "GetNOCBasedOnTariffNo?TariffNo=" + $("#TeriffNo").val());        
        TariffNo = TariffNo.replace('&', '~');
        $.ajax({
            url: GetRootPath + "MstrGeneralTariffNOCWise/GetNOCBasedOnTariffHead/?TariffNo=" + TariffNo,
            type: "GET",
            dataType: "text",
            success: function (data) {
                
                if (data != "" && data != null) {
                    $("#SpaceCertificateNo").val(data.split("|")[0]);
                    $("#SpaceCertificateID").val(data.split("|")[1]);
                }
                else {
                    $("#SpaceCertificateNo").val("");
                    $("#SpaceCertificateID").val("");
                }
                var MstrTariffHeadID = $("#MstrTariffHeadID").val();
                var SpaceCertificateID = $("#SpaceCertificateID").val();
                var SpaceCertificateNo =  $("#SpaceCertificateNo").val();
                var OldSpaceCertificateID = $("#OldSpaceCertificateID").val();
                var Fromdate = $("#EffetiveDateFrom").val();
                var Todate = $("#EffectiveToDate").val();
                var MstrBatchID = $("#EffectiveBatchID").val();
                var MstrBatch = $("#EffectiveBatch").val();

                if (Fromdate == undefined) {
                    Fromdate = "";
                }

                if (Todate == undefined) {
                    Todate = "";
                }
                if (MstrBatchID == undefined) {
                    MstrBatchID = "0";
                }
                if (MstrBatch == undefined) {
                    MstrBatch = "";
                }


                if (SpaceCertificateID != OldSpaceCertificateID) {

                    Fromdate = "";
                    Todate = "";

                }
                window.location = GetRootPath + "MstrGeneralTariffNOCWise/Action/" + MstrTariffHeadID + "?NOCID=" + SpaceCertificateID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&NocNo=" + SpaceCertificateNo + "&TariffNo=" + TariffNo;
                //if (OldSpaceCertificateID != 0 || SpaceCertificateID != 0) {
                //    if (SpaceCertificateID != null && SpaceCertificateID != undefined && SpaceCertificateID != "" && SpaceCertificateID != "0" ) {
                //        window.location = GetRootPath + "MstrGeneralTariffNOCWise/Action/" + MstrTariffHeadID + "?NOCID=" + SpaceCertificateID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&NocNo=" + SpaceCertificateNo + "&TariffNo=" + TariffNo;
                //    }
                //}
            }
        });
        
    }
}

function AddNewTeriffNo() {
    window.location = GetRootPath + "MstrGeneralTariffNOCWise/Action/?isaddnewteriffno=yes";
}
function OpenInvidualTeriff() {
    var TariffNo = $("#TeriffNo").val();
    var isaddnewteriffno = $("#isaddnewteriffno").val();

    if (TariffNo == "0" && isaddnewteriffno == "no") {
        TosterAlert("error", 'Please select correct teriffno!', "Warning!");
    }
    else {
        window.location = GetRootPath + "MstrGeneralTariffNOCWise/Action/?TeriffNo=" + TariffNo;
    }

}
function changeBatch(IsAddNew) {
    
    var MstrTariffHeadID = $("#MstrTariffHeadID").val();
    var SpaceCertificateID = $("#SpaceCertificateID").val();
    var SpaceCertificateNo = $("#SpaceCertificateNo").val();
    
    var Fromdate = $("#EffetiveDateFrom").val();
    var Todate = $("#EffectiveToDate").val();
    if (IsAddNew == true) {
        var MstrBatchID = "0";
        var MstrBatch = "";
        Fromdate = "";
        Todate = "";
    }
    else {
        var MstrBatchID = $("#EffectiveBatchID").val();
        var MstrBatch = $("#EffectiveBatch").val();
    }
    window.location = GetRootPath + "MstrGeneralTariffNOCWise/Action/" + MstrTariffHeadID + "?NOCID=" + SpaceCertificateID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&NocNo=" + SpaceCertificateNo + "&isaddnewbatch="+IsAddNew;
}

$(function () {
    var content = $('#SpaceCertificateNo').val();

    $('#SpaceCertificateNo').keyup(function () {
        if ($('#SpaceCertificateNo').val() != content) {

            $("#EffetiveDateFrom").val('');
            $("#EffectiveToDate").val('');
            $("#InBOENo").val('');
            
        }
    });
});
function funAddTariffHead() {
    
    $("#AddTariffHead").modal("show");
    setTimeout(function () {
        Autocompletebox("txtSpaceCertificateNo", "txtSpaceCertificateID", "MstrGeneralTariffNOCWise", "GetNOCNO","GetTariffHeadDateForAllNOC");
    }, 1000);

    
}
function GetTariffHeadDateForAllNOC() {
    
    var txtSpaceCertificateID = $("#txtSpaceCertificateID").val();
    var txtSpaceCertificateNo = $("#txtSpaceCertificateNo").val();
    if (txtSpaceCertificateID != null && txtSpaceCertificateID != "" && txtSpaceCertificateID != "0" && txtSpaceCertificateID != undefined) {
        var SearchTypes = "";
        if (txtSpaceCertificateNo.split("/")[0].toUpperCase() == "NOC") {
            SearchTypes = "IMPORT";
        } else {
            SearchTypes = "EXPORT";
        }

        $.ajax({
            url: GetRootPath + "MstrGeneralTariffNOCWise/GetNOCToAllDate/?NOCID=" + txtSpaceCertificateID + "&SearchTypes=" + SearchTypes,
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != "" && data != undefined && data != null) {
                    
                    $("#tblTariffEffectiveDate").html(data);
                }
                else {
                    $("#tblTariffEffectiveDate").html("");
                }
            }
        });
    }
}
function AddNewTariffHead() {
    
    var txtSpaceCertificateID = $("#txtSpaceCertificateID").val();
    var txtSpaceCertificateNo = $("#txtSpaceCertificateNo").val();
    var Fromdate = $("#txtEffetiveDateFrom").val();
    var Todate = $("#txtEffectiveToDate").val();
    var SearchType = "",BOENo="";
    if (txtSpaceCertificateNo.split("/")[0].toUpperCase() == "NOC") {
        SearchType = "IMPORT";
        BOENo = "NOC WISE";
    } else {
        SearchType = "EXPORT";
        BOENo = "STUFFING WISE";
    }
    if (Fromdate != "" && Todate != "" && txtSpaceCertificateID > 0) {
        $.ajax({
            url: GetRootPath + "MstrGeneralTariffNOCWise/AddTariffHead/?SpaceCertificateID=" + txtSpaceCertificateID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&SearchType=" + SearchType + "&SpaceCertificateNo=" + txtSpaceCertificateNo,
            type: "Get",
            dataType: "text",
            async: false,
            success: function (data) {
                $(".redborder").removeClass("redborder");
                if (data != "") {
                    if (data.split("|")[0] != 'done') {
                        isvalid = false;
                        var Errormsg = data.split("|")[0];
                        var ErrorFields = data.split("|")[1].split(",");

                        if (ErrorFields != null && ErrorFields.length > 0) {
                            for (var Q = 0; Q < ErrorFields.length; Q++) {
                                if (ErrorFields[Q] != "") {
                                    $("#" + ErrorFields[Q]).addClass("redborder");
                                }
                            }
                        }
                        if (Errormsg != "") {
                            TosterAlert("error", Errormsg, "Required!");
                        }
                    }
                    else {
                        window.location = GetRootPath + "MstrGeneralTariffNOCWise/Action/" + 0 + "?NOCID=" + txtSpaceCertificateID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&SearchType=" + SearchType + "&NocNo=" + txtSpaceCertificateNo + "&InBOENo=" + BOENo +"&trnDocumentLotDetailsID="+0;
                    }
                }
            }
        });

    }
    else {
        var msg = "";
        if ($("#txtEffetiveDateFrom").val() == "" || $("#txtEffetiveDateFrom").val() == undefined) {
            $("#txtEffetiveDateFrom").addClass("redborder");
            msg += " Please Select EffectiveFrom Date.<br/> ";
        } else {
            $("#txtEffetiveDateFrom").removeClass("redborder");
        }
        if ($("#txtEffectiveToDate").val() == "" || $("#txtEffectiveToDate").val() == undefined) {
            $("#txtEffectiveToDate").addClass("redborder");
            msg += " Please Select EffectiveTo Date.<br/> ";
        } else {
            $("#txtEffectiveToDate").removeClass("redborder");
        }
        if (parseInt(txtSpaceCertificateID) <= 0 || txtSpaceCertificateID == "")
        {
            $("#txtSpaceCertificateNo").addClass("redborder");
            msg += " Please Select NOC No.<br/> ";
        }
        else
        {
            $("#txtSpaceCertificateNo").removeClass("redborder");
        }

        TosterAlert("error", msg, "Required!");
    }
}

function DownloadTariff() {

    if ($("#SearchingDateRange").val() != "" && $("#SearchingDateRange").val() != undefined && $("#SearchingDateRange").val() != null) {

        window.location.href = window.location.href + "&IsTariffDownload=true";
    } else {
        TosterAlert("error", "Please Select Search Date", "Required!");
    }
}