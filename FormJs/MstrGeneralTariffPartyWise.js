$(document).ready(function () {

    Autocompletebox("mdlMstrCustomerName", "mdlMstrCustomerID", "MstrGeneralTariffPartyWise", "GetPartyBasedOnTariffNo?TariffNo=" + $("#TeriffNo").val());
    Autocompletebox("MstrContractName", "MstrGeneralTariffPartyWiseDetailsID", "MstrGeneralTariffPartyWise", "GetPartyBasedOnTariffNo?TariffNo=" + $("#TeriffNo").val(), "RangethestateofPage");
    //Autocompletebox("TeriffNo", "TeriffID", "MstrGeneralTariffPartyWise", "getTariffHeadDetails", "GetPartyBasedOnTariffNo");
    Autocompletebox("TeriffNo", "TeriffID", "MstrGeneralTariffPartyWise", "getTariffHeadDetails");
    Autocompletebox("txtMstrCustomerName", "txtMstrCustomerID", "MstrGeneralTariffPartyWise", "GetPartyBasedOnTariffNo?TariffNo=" + $("#TeriffNo").val(), "GetTariffHeadDateForParty");

    Autocompletebox("Line", "LineID", "MstrGeneralTariffPartyWise", "GetCustomer?Type=Line");
    Autocompletebox("CHA", "CHAID", "MstrGeneralTariffPartyWise", "GetCustomer?Type=CHA");
    Autocompletebox("Importer", "ImporterID", "MstrGeneralTariffPartyWise", "GetCustomer?Type=IMPORTER");
    Autocompletebox("Agent", "AgentID", "MstrGeneralTariffPartyWise", "GetCustomer?Type=AGENT");
    Autocompletebox("Exporter", "ExporterID", "MstrGeneralTariffPartyWise", "GetCustomer?Type=EXPORTER");
    Autocompletebox("Consoler", "ConsolerID", "MstrGeneralTariffPartyWise", "GetCustomer?Type=CONSOLER");
    Autocompletebox("Forwarder", "ForwarderID", "MstrGeneralTariffPartyWise", "GetCustomer?Type=FORWARDER");
    Autocompletebox("BillToParty", "BillToPartyID", "MstrGeneralTariffPartyWise", "GetBillToParty");

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

    if (selectedSingleValue.options.length == 1) {
        $('#SearchingDateRange option:first').prop('selected', true);

        EffetiveDateFrom = $("#SearchingDateRange").val().split("_")[0];
        EffectiveToDate = $("#SearchingDateRange").val().split("_")[1];

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
        $("#" + Discount).val('0');
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
    if ($("#MstrGeneralTariffPartyWiseID").val() == 0) {

        ClearMstrGeneralTariffPartyWise();
    }
}

function validateForm() {

    var isvalid = true;
    var EffetiveDateFrom = $("#EffetiveDateFrom").val();
    var EffectiveToDate = $("#EffectiveToDate").val();
    var SearchingDateRange = $("#SearchingDateRange").val();
    var Errormsg = "";
    var MstrContractName = $("#MstrContractName").val();
    var GeneralTariffPartyWiseDetailsID = $("#MstrGeneralTariffPartyWiseDetailsID").val();
    //if (EffetiveDateFrom == undefined || EffetiveDateFrom == "") {
    //    Errormsg += "Please Add Effetive From Date <br />";
    //    $("#EffetiveDateFrom").addClass("redborder");
    //    isvalid = false;
    //} else {
    //    $("#EffetiveDateFrom").removeClass("redborder");
    //}

    //if (EffectiveToDate == undefined || EffectiveToDate == "") {
    //    Errormsg += "Please Add Effetive To Date <br />";
    //    $("#EffectiveToDate").addClass("redborder");
    //    isvalid = false;
    //} else {
    //    $("#EffetiveDateFrom").removeClass("redborder");
    //}
    if (GeneralTariffPartyWiseDetailsID == 0) {
        Errormsg += "Please Select Contract <br />";
        $("#MstrContractName").addClass("redborder");
        isvalid = false;
    }
    else {
        $("#MstrContractName").removeClass("redborder");
    }
    if ((EffetiveDateFrom == undefined || EffetiveDateFrom == "") && (EffectiveToDate == undefined || EffectiveToDate == "")) {
        Errormsg += "Please Select Searching Date Range <br />";
        $("#SearchingDateRange").addClass("redborder");
        isvalid = false;
    } else {
        $("#SearchingDateRange").removeClass("redborder");
    }

    if (isvalid) {
        $.ajax({
            url: GetRootPath + "MstrGeneralTariffPartyWise/validateModel",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                $(".redborder").removeClass("redborder");
                if (data != "") {
                    isvalid = false;
                    Errormsg = data.split("|")[0];
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

function EditMstrGeneralTariffPartyWise(ID) {
    $("#MstrGeneralTariffPartyWiseID").val(ID);
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

function ClearMstrGeneralTariffPartyWise(Num) {
    $("#MstrGeneralTariffPartyWiseID" + Num).val("0");
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

    var MstrContractName = $("#MstrContractName").val();
    var MstrGeneralTariffPartyWiseDetailsID = $("#MstrGeneralTariffPartyWiseDetailsID").val();
    var EffetiveDateFrom = $("#EffetiveDateFrom").val();
    var EffectiveToDate = $("#EffectiveToDate").val();
    var isaddnewteriffno = $("#isaddnewteriffno").val();
    var TeriffNo = $("#TeriffNo").val();

    if (TeriffNo == "0") {
        TosterAlert("error", 'Please select correct teriffno!', "Warning!");
    }
    else {
        if (MstrContractName == undefined) {
            MstrContractName = "";
        }
        if (MstrGeneralTariffPartyWiseDetailsID == undefined) {
            MstrGeneralTariffPartyWiseDetailsID = "";
        }
        if (EffetiveDateFrom == undefined) {
            EffetiveDateFrom = "";
        }
        if (EffectiveToDate == undefined) {
            EffectiveToDate = "";
        }
        window.location = GetRootPath + "MstrGeneralTariffPartyWise/Action/" + ID + "?MstrGeneralTariffPartyWiseDetailsID=" + MstrGeneralTariffPartyWiseDetailsID + "&Fromdate=" + EffetiveDateFrom + "&Todate=" + EffectiveToDate + "&MstrContractName=" + MstrContractName + "&TeriffNo=" + TeriffNo + "&isaddnewteriffno=" + isaddnewteriffno;

    }
}

function Copyallteriffdata(ID, Fromdate, Todate, PartyID) {

    $("#HDNTeriffID").val(ID);
    $("#hdnCurrentFromDate").val($("#EffetiveDateFrom").val());
    $("#hdnCurrentToDate").val($("#EffectiveToDate").val());
    $("#hdnPartyID").val(PartyID);
    $("#CopyTarrifHead").modal("show");
    setTimeout(function () {
        Autocompletebox("mdlMstrCustomerName", "mdlMstrCustomerID", "MstrGeneralTariffPartyWise", "GetPartyBasedOnTariffNo?TariffNo=''", "PartyWiseDateShow");
    }, 1000);
}

function PartyWiseDateShow() {
    debugger;
    var MstrGenTariffPartyWiseDtlID = $("#mdlMstrCustomerID").val();

    $.ajax({
        url: GetRootPath + "MstrGeneralTariffPartyWise/GetPartyToAllDate/?MstrGenTariffPartyWiseDtlID=" + MstrGenTariffPartyWiseDtlID,
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {

            document.getElementById("hdnPartyWiseDateShow").innerHTML = data;

        }
    });
}

function Copydate() {

    var TeriffID = $("#HDNTeriffID").val();
    var Fromdate = $("#mdlEffetiveDateFrom").val();
    var Todate = $("#mdlEffectiveToDate").val();
    var MstrCustomerID = $("#mdlMstrCustomerID").val();
    var MstrCustomerName = $("#mdlMstrCustomerName").val();
    var hdnCustomerID = $("#hdnPartyID").val();
    var CurrentFromDate = $("#hdnCurrentFromDate").val();
    var CurrentToDate = $("#hdnCurrentToDate").val();
    var TeriffNo = $("#hdnTeriffNo").val();

    if (Fromdate != "" && Todate != "" && MstrCustomerID > 0) {

        $.ajax({
            url: GetRootPath + "MstrGeneralTariffPartyWise/validateDates?TeriffID=" + TeriffID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&CurrentFromDate=" + CurrentFromDate + "&CurrentToDate=" + CurrentToDate + "&CurrentContractID=" + hdnCustomerID + "&MstrContractToCopyID=" + MstrCustomerID + "&MstrContractName=" + MstrCustomerName + "&TeriffNo=" + TeriffNo,
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
                        window.location = GetRootPath + "MstrGeneralTariffPartyWise/Action/" + TeriffID + "?MstrCustomerID=" + MstrCustomerID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&MstrCustomerName=" + MstrCustomerName + "&iscopy=yes";
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
        if (parseInt(MstrCustomerID) < 0 || MstrCustomerID == "") {
            $("#mdlMstrCustomerName").addClass("redborder");
        } else {
            $("#mdlMstrCustomerName").removeClass("redborder");
        }

        TosterAlert("error", "Please select Required Fields", "Required!");
    }
}

function Changethedate(ID, Fromdate, Todate, MstrGeneralTariffPartyWiseDetailsID, StatusofTariff) {

    var MstrContractName = $("#MstrContractName").val();

    window.location = GetRootPath + "MstrGeneralTariffPartyWise/Action/" + ID + "?MstrGeneralTariffPartyWiseDetailsID=" + MstrGeneralTariffPartyWiseDetailsID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&MstrContractName=" + MstrContractName + "&TariffStatus=" + StatusofTariff;
}

function SearchWithDate(ID) {

    var SearchingDates = $("#SearchingDateRange").val();
    var MstrGeneralTariffPartyWiseDetailsID = $("#MstrGeneralTariffPartyWiseDetailsID").val();

    Changethedate(ID, SearchingDates.split('_')[0], SearchingDates.split('_')[1], MstrGeneralTariffPartyWiseDetailsID, SearchingDates.split('_')[2]);
}

function RangethestateofPage() {
    debugger;
    $("#EffetiveDateFrom").val('');
    $("#EffectiveToDate").val('');
    $("#TeriffNo").val('');

    var MstrTariffHeadID = $("#MstrTariffHeadID").val();
    var GeneralTariffPartyWiseDetailsID = $("#MstrGeneralTariffPartyWiseDetailsID").val();
    var MstrContractName = $("#MstrContractName").val();
    var OldMstrCustomerID = $("#OldMstrCustomerID").val();
    var Fromdate = $("#EffetiveDateFrom").val();
    var Todate = $("#EffectiveToDate").val();
    var TariffNo = $("#TeriffNo").val();
    if (GeneralTariffPartyWiseDetailsID != OldMstrCustomerID) {
        Fromdate = "";
        Todate = "";
    }

    if (OldMstrCustomerID != 0 || GeneralTariffPartyWiseDetailsID != 0) {
        if (GeneralTariffPartyWiseDetailsID != 0) {
            //window.location = GetRootPath + "MstrGeneralTariffPartyWise/Action/" + MstrTariffHeadID + "?MstrCustomerID=" + MstrCustomerID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&MstrCustomerName=" + MstrCustomerName +"&TeriffNo="+TariffNo;
            window.location = GetRootPath + "MstrGeneralTariffPartyWise/Action/" + MstrTariffHeadID + "?MstrGeneralTariffPartyWiseDetailsID=" + GeneralTariffPartyWiseDetailsID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&MstrContractName=" + MstrContractName;
        }
    }
    else {
        window.location = GetRootPath + "MstrGeneralTariffPartyWise/Action/" + MstrTariffHeadID + "?MstrGeneralTariffPartyWiseDetailsID=" + GeneralTariffPartyWiseDetailsID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&MstrContractName=" + MstrContractName;
    }
}

function GetPartyBasedOnTariffNo() {

    var TariffNo = $("#TeriffNo").val();

    if (TariffNo != null && TariffNo != undefined && TariffNo != "" && TariffNo != "0") {
        Autocompletebox("mdlMstrCustomerName", "mdlMstrCustomerID", "MstrGeneralTariffPartyWise", "GetPartyBasedOnTariffNo?TariffNo=" + $("#TeriffNo").val());
        Autocompletebox("MstrContractName", "MstrGeneralTariffPartyWiseDetailsID", "MstrGeneralTariffPartyWise", "GetPartyBasedOnTariffNo?TariffNo=" + $("#TeriffNo").val());
        TariffNo = TariffNo.replace('&', '~');
        $.ajax({
            url: GetRootPath + "MstrGeneralTariffPartyWise/GetPartyBasedOnTariffHead/?TariffNo=" + TariffNo,
            type: "GET",
            dataType: "text",
            success: function (data) {

                if (data != "" && data != null) {
                    $("#MstrContractName").val(data.split("|")[0]);
                    $("#MstrGeneralTariffPartyWiseDetailsID").val(data.split("|")[1]);
                }
                else {
                    $("#MstrContractName").val("");
                    $("#MstrGeneralTariffPartyWiseDetailsID").val("");
                }
                var MstrTariffHeadID = $("#MstrTariffHeadID").val();
                var MstrGeneralTariffPartyWiseDetailsID = $("#MstrGeneralTariffPartyWiseDetailsID").val();
                var MstrContractName = $("#MstrContractName").val();
                var OldMstrCustomerID = $("#OldMstrCustomerID").val();
                var Fromdate = $("#EffetiveDateFrom").val();
                var Todate = $("#EffectiveToDate").val();

                if (Fromdate == undefined) {
                    Fromdate = "";
                }

                if (Todate == undefined) {
                    Todate = "";
                }
                if (MstrGeneralTariffPartyWiseDetailsID != OldMstrCustomerID) {

                    Fromdate = "";
                    Todate = "";

                }
                window.location = GetRootPath + "MstrGeneralTariffPartyWise/Action/" + MstrTariffHeadID + "?MstrGeneralTariffPartyWiseDetailsID=" + MstrCustomerID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&MstrContractName=" + MstrContractName + "&TeriffNo=" + TariffNo;

            }
        });

    }
}

function AddNewTeriffNo() {
    window.location = GetRootPath + "MstrGeneralTariffPartyWise/Action/?isaddnewteriffno=yes";
}
function OpenInvidualTeriff() {
    var TariffNo = $("#TeriffNo").val();
    var isaddnewteriffno = $("#isaddnewteriffno").val();

    if (TariffNo == "0" && isaddnewteriffno == "no") {
        TosterAlert("error", 'Please select correct teriffno!', "Warning!");
    }
    else {
        window.location = GetRootPath + "MstrGeneralTariffPartyWise/Action/?TeriffNo=" + TariffNo;
    }

}
//function changeBatch(IsAddNew) {

//    var MstrTariffHeadID = $("#MstrTariffHeadID").val();
//    var MstrCustomerID = $("#MstrCustomerID").val();
//    var MstrContractName = $("#MstrContractName").val();

//    var Fromdate = $("#EffetiveDateFrom").val();
//    var Todate = $("#EffectiveToDate").val();
//    if (IsAddNew == true) {
//        var MstrBatchID = "0";
//        var MstrBatch = "";
//        Fromdate = "";
//        Todate = "";
//    }
//    else {
//        var MstrBatchID = $("#EffectiveBatchID").val();
//        var MstrBatch = $("#EffectiveBatch").val();
//    }
//    window.location = GetRootPath + "MstrGeneralTariffPartyWise/Action/" + MstrTariffHeadID + "?NOCID=" + MstrCustomerID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&MstrBatchID=" + MstrBatchID + "&MstrBatch=" + MstrBatch + "&MstrContractName=" + MstrContractName + "&isaddnewbatch=" + IsAddNew;
//}
function funAddTariffHead() {

    $("#AddTariffHead").modal("show");
    setTimeout(function () {
        Autocompletebox("txtMstrCustomerName", "txtMstrCustomerID", "MstrGeneralTariffPartyWise", "GetPartyBasedOnTariffNo?TariffNo=" + $("#TeriffNo").val(), "GetTariffHeadDateForParty");
        Autocompletebox("Line", "LineID", "MstrGeneralTariffPartyWise", "GetCustomer?Type=Line");
        Autocompletebox("CHA", "CHAID", "MstrGeneralTariffPartyWise", "GetCustomer?Type=CHA");
        Autocompletebox("Importer", "ImporterID", "MstrGeneralTariffPartyWise", "GetCustomer?Type=IMPORTER");
        Autocompletebox("Agent", "AgentID", "MstrGeneralTariffPartyWise", "GetCustomer?Type=AGENT");
        Autocompletebox("Exporter", "ExporterID", "MstrGeneralTariffPartyWise", "GetCustomer?Type=EXPORTER");
        Autocompletebox("Consoler", "ConsolerID", "MstrGeneralTariffPartyWise", "GetCustomer?Type=CONSOLER");
        Autocompletebox("Forwarder", "ForwarderID", "MstrGeneralTariffPartyWise", "GetCustomer?Type=FORWARDER");
        Autocompletebox("BillToParty", "BillToPartyID", "MstrGeneralTariffPartyWise", "GetBillToParty");
    }, 1000);

}

function AddNewTariffHead() {
    var MstrTariffHeadID = $("#MstrTariffHeadID").val();
    var MstrGeneralTariffPartyWiseDetailsID = $("#MstrGeneralTariffPartyWiseDetailsID").val();
    var MstrContractName = $("#MstrContractName").val();    
    var Fromdate = $("#EffetiveDateFrom").val();
    var Todate = $("#EffectiveToDate").val();
    var TariffNo = $("#TeriffNo").val();
    TariffNo = TariffNo.replace('&', '~');
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "MstrGeneralTariffPartyWise/AddPartyWiseTariffForCombination",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {
            $(".redborder").removeClass("redborder");
            if (data != "") {
                isvalid = false;
                Errormsg = data.split("|")[0];
                var ErrorFields = data.split("|")[1].split(",");
                var EDID = data.split("|")[2];
                if (EDID > 0) {

                    if (Errormsg != "") {
                        TosterAlert("sucess", Errormsg, "Sucess!");
                    }
                    window.location = GetRootPath + "MstrGeneralTariffPartyWise/Action/" + MstrTariffHeadID + "?MstrGeneralTariffPartyWiseDetailsID=" + MstrGeneralTariffPartyWiseDetailsID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&MstrContractName=" + MstrContractName + "&TeriffNo=" + TariffNo;
                }
                else {
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
        }
    });    
    return isvalid;
}
function GetTariffHeadDateForParty() {
    var MstrCustomerID = $("#txtMstrCustomerID").val();
    if (MstrCustomerID != null && MstrCustomerID != "" && MstrCustomerID != "0" && MstrCustomerID != undefined) {
        $.ajax({
            url: GetRootPath + "MstrGeneralTariffPartyWise/GetPartyToAllDate/?CustomerID=" + MstrCustomerID,
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

function DownloadTariff() {

    if ($("#SearchingDateRange").val() != "" && $("#SearchingDateRange").val() != undefined && $("#SearchingDateRange").val() != null) {

        window.location.href = window.location.href + "&IsTariffDownload=true";
    } else {
        TosterAlert("error", "Please Select Search Date", "Required!");
    }
}