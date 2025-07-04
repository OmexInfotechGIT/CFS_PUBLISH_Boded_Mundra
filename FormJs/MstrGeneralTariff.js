
$(document).ready(function () {

    //AddDate();    

    //const urlParams = new URLSearchParams(window.location.search);

    //$("#EffetiveDateFrom").val(urlParams.get('Fromdate'))
    //$("#EffectiveToDate").val(urlParams.get('Todate'));

    removeURLParam("IsTariffDownload");

});

function removeURLParam(paramName) {
    let url = new URL(window.location.href); 
    url.searchParams.delete(paramName); 

    window.history.pushState({}, "", url);
}

function AddDate() {
    var url = new URL(location.href);

    let EffetiveDateFrom = $("#EffetiveDateFrom").val();
    let EffectiveToDate = $("#EffectiveToDate").val();

    if (EffetiveDateFrom) {
        url.searchParams.set('Fromdate', EffetiveDateFrom);
    }
    if (EffectiveToDate) {
        url.searchParams.set('Todate', EffectiveToDate);
    }
    
    history.replaceState(null, '', url.toString());

}

function discountvalidation(Rate,Discount)
{
     
    var rate = $("#" + Rate).val();
    var discount = $("#" + Discount).val();

    if (rate == "" || rate == "0") {
        rate = "0";
        $("#" + Discount).val('0');
    }

    if (discount == "")
        discount = "0";

    if (rate != 0) {

        if (parseFloat(rate) <= parseFloat(discount)) {
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
        $(".StorageAreaReferenceNumber").hide('slow');
    }

    else if (Field == "WEIGHWISE HANDLING")
    {
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
        $(".StorageAreaReferenceNumber").hide('slow');
    }

    else if (Field == "UNITWISE HANDLING")
    {
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
        $(".StorageAreaReferenceNumber").hide('slow');
    }

    else if (Field == "LOADED DELIVERY STORAGE UNIT BASED")
    {
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
        $(".StorageAreaReferenceNumber").hide('slow');
    }

    else if (Field == "LOADED DELIVERY STORAGE SLAB BASED")
    {
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
        $(".StorageAreaReferenceNumber").hide('slow');
    }

    else if (Field == "EXPORT LOADED DELIVERY STORAGE SLAB BASED")
    {
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
        $(".StorageAreaReferenceNumber").hide('slow');
    }

    else if (Field == "STORAGE CHARGES (WEIGHT/UNIT)")
    {
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
        $(".StorageAreaReferenceNumber").hide('slow');
    }

    else if (Field == "AREA BASED STORAGE CHARGES")
    {
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
        $(".StorageAreaReferenceNumber").hide('slow');
    }

    else if (Field == "FIXED STORAGE CHARGES")
    {
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

    else if (Field == "SLABWISE STORAGE EXAMPLE - WEEKLY - FIXED")
    {
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
        $(".StorageAreaReferenceNumber").hide('slow');
    }

    else if (Field == "SLABWISE STORAGE EXAMPLE - FLEXIBLE")
    {
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
        $(".StorageAreaReferenceNumber").hide('slow');
    }

    else if (Field == "EMPTY CONTAINER GROUND RENT CHARGES" || Field == "EMPTY CONTAINER GROUND RENT CHARGES - EXPORT" )
    {
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
        $(".StorageAreaReferenceNumber").hide('slow');
    }

    else if (Field == "EMPTY CONTAINER LIFT ON CHARGES" || Field == "EMPTY CONTAINER LIFT OFF CHARGES" || Field == "EMPTY CONTAINER TRANSPORTATION CHARGES")
    {
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
        $(".StorageAreaReferenceNumber").hide('slow');
    }

    else {

    }
    if ($("#MstrGeneralTariffID").val() == 0) {

        ClearMstrGeneralTariff();
    }
}

function validateForm() {
 
    var isvalid = true;
    var Errormsg = "";
    let EffetiveDateFrom = $("#EffetiveDateFrom").val()
    let EffectiveToDate = $("#EffectiveToDate").val()

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
        $("#EffetiveDateFrom").removeClass("redborder");
    }

    if (isvalid){

        $.ajax({
            url: GetRootPath + "MstrGeneralTariff/validateModel",
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

function EditMstrGeneralTariff(ID) {
    
    $("#MstrGeneralTariffID").val(ID);
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
    $("#MstrBatchRefID").val($("#MstrBatchID_" + ID).val());
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
    $("#txtStorageAreaReferenceNumber").val($("#StorageAreaReferenceNumber_" + ID).val());
    DisplayTariffWise("TariffHead");

}

function ClearMstrGeneralTariff(Num) {
    $("#MstrGeneralTariffID" + Num).val("0");
    $("#CargoSize" + Num).val("");
    $("#ContSizeRefID" + Num).val("0");
    $("#CargoType" + Num).val("");
    $("#MstrNatureOfCargoRefID" + Num).val("0");
    $("#BillCommodity" + Num).val("");
    $("#MstrBillableCommodityRefID" + Num).val("0");
    $("#SubCommodity" + Num).val("");
    $("#MstrSubCommodityRefID" + Num).val("0");
    $("#Rate" + Num).val("0");
    $("#Batch" + Num).val("");
    $("#MstrBatchRefID" + Num).val("0");
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
    $("#StorageAreaReferenceNumber" + Num).val("");
    $("#DeliveryMode" + Num).val("");
    $("#MstrDeliveryModeRefID" + Num).val("");
}

function Changeteriff(ID) {
    var TariffStatus = $("#StatusofTariff").val();
    window.location.href = GetRootPath + "MstrGeneralTariff/Action/" + ID + "?Fromdate=" + $("#EffetiveDateFrom").val() + "&Todate=" + $("#EffectiveToDate").val() + "&TariffStatus=" + TariffStatus;

}


function Copyallteriffdata(ID, Fromdate, Todate, TYPE = 0) {        
    $.ajax({
        url: GetRootPath + "MstrGeneralTariff/GetEffectiveDate",
        type: "Get",
        dataType: "text",
        async: false,
        success: function (data) {
            if (data != "" && data != undefined && data != null) {
                
                $("#tblEffectiveDate").html(data);
            }
            else {
                $("#tblEffectiveDate").html("");
            }
        }
    });
    if (TYPE == 0) {

        $("#HDNTeriffID").val(ID);
        $("#hdnCurrentFromDate").val(Fromdate);
        $("#hdnCurrentToDate").val(Todate);
        $("#CopyTarrifHead").modal("show");
        setTimeout(function () {
            Autocompletebox("SelectTariffToCopy", "SelectTariffToCopyID", "MstrGeneralTariff", "GetTariffNo");
        }, 1000);
    }
    else {

        $("#HDNNOCTeriffID").val(ID);
        $("#hdnNOCCurrentFromDate").val(Fromdate);
        $("#hdnNOCCurrentToDate").val(Todate);
        $("#CopyTarrifHeadWithNOC").modal("show");        
        setTimeout(function () {
            Autocompletebox("mdlSpaceCertificateNo", "mdlSpaceCertificateID", "MstrGeneralTariffNOCWise", "getNocDetails");
            Autocompletebox("SelectTariffToCopy", "SelectTariffToCopyID", "MstrGeneralTariff", "GetTariffNo");
        }, 1000);
    }
}

function Copydate() {
    
    var CurrentTariffID = $("#HDNTeriffID").val();
    var TeriffID = $("#SelectTariffToCopyID").val();
    var Fromdate = $("#mdlEffetiveDateFrom").val();
    var Todate = $("#mdlEffectiveToDate").val();
    var CurrentFromDate = $("#EffetiveDateFrom").val();
    var CurrentToDate = $("#EffectiveToDate").val();

    if (Fromdate != "" && Todate != "" && TeriffID > 0) {

        $.ajax({
            url: GetRootPath + "MstrGeneralTariff/validateDates/?TeriffID=" + TeriffID + "&CurrentTariffID=" + CurrentTariffID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&CurrentFromDate=" + CurrentFromDate + "&CurrentToDate=" + CurrentToDate,
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
                        window.location = GetRootPath + "MstrGeneralTariff/Action/" + TeriffID + "?Fromdate=" + Fromdate + "&Todate=" + Todate;
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
        if (parseInt(TeriffID) <= 0 || TeriffID == "") {
            $("#SelectTariffToCopy").addClass("redborder");
        } else {
            $("#SelectTariffToCopy").removeClass("redborder");
        }

        TosterAlert("error", "Please select Required Fields", "Required!");
    }
}

function CopydateNOC() {

    var TeriffID = $("#HDNNOCTeriffID").val();
    var Fromdate = $("#mdlNOCEffetiveDateFrom").val();
    var Todate = $("#mdlNOCEffectiveToDate").val();
    var CurrentFromDate = $("#hdnNOCCurrentFromDate").val();
    var CurrentToDate = $("#hdnNOCCurrentToDate").val();
    var NOCID = 0;
    var SpaceCertificateID = $("#mdlSpaceCertificateID").val();
    var SpaceCertificateNo = $("#mdlSpaceCertificateNo").val();
    
    if (Fromdate != "" && Todate != "" && SpaceCertificateID != "" && SpaceCertificateID != "0") {

        $.ajax({
            url: GetRootPath + "MstrGeneralTariffNOCWise/validateDates/?TeriffID=" + TeriffID + "&Fromdate=" + Fromdate + "&Todate=" + Todate + "&MstrBatchID=0&MstrBatch=&CurrentFromDate=" + CurrentFromDate + "&CurrentToDate=" + CurrentToDate + "&CurrentNOCID=" + NOCID + "&SpaceCertificateID=" + SpaceCertificateID + "&SpaceCertificateNo=" + SpaceCertificateNo + "&isfromgeneral=" + true,
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
                        window.location = GetRootPath + "MstrGeneralTariffNOCWise/Action/" + TeriffID + "?NOCID=" + SpaceCertificateID + "&Fromdate=" + Fromdate + "&Todate=" + Todate;
                    }
                }
            }
        });
    }
    else {
        TosterAlert("error", "Please select Required Fields", "Required!");
    }    
}

function Changethedate(ID, Fromdate, Todate, StatusofTariff) {
    
    window.location = GetRootPath + "MstrGeneralTariff/Action/" + ID + "?Fromdate=" + Fromdate + "&Todate=" + Todate + "&TariffStatus=" + StatusofTariff;
}


function SearchWithDate(ID) {
    
    var SearchingDates = $("#SearchingDateRange").val();

    Changethedate(ID, SearchingDates.split('_')[0], SearchingDates.split('_')[1], SearchingDates.split('_')[2]);
}

$("#EffetiveDateFrom").on('click', function (event) {
    event.stopPropagation(); // Prevent event bubbling
    
});

$("#EffectiveToDate").on('click', function (event) {
    event.stopPropagation(); // Prevent event bubbling
    
});

$("#CopyThisToBtn").on('click', function (event) {
    event.stopPropagation(); // Prevent event bubbling

});

//$("#headDetail").on('click', function () {
    
//});
function funAddTariffHead() {
    
    $.ajax({
        url: GetRootPath + "MstrGeneralTariff/GetEffectiveDate",
        type: "Get",
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
    setTimeout(function () {
        Autocompletebox("txtTariffHead", "txtTariffHeadID", "MstrGeneralTariff", "GetTariffNo");
    }, 1000);
    $("#AddTariffHead").modal("show");
}
function AddNewTariffHead() {
    
    
    var Fromdate = $("#txtEffetiveDateFrom").val();
    var Todate = $("#txtEffectiveToDate").val();
    if (Fromdate != "" && Todate != "") {
        $.ajax({
            url: GetRootPath + "MstrGeneralTariff/AddTariffHead/?TeriffID=" + 0 + "&Fromdate=" + Fromdate + "&Todate=" + Todate,
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
                        window.location = GetRootPath + "MstrGeneralTariff/Action/" + 0 + "?Fromdate=" + Fromdate + "&Todate=" + Todate;
                    }
                }
            }
        });

    }
    else {
        var msg = "";
        if ($("#txtEffetiveDateFrom").val() == "" || $("#txtEffetiveDateFrom").val() == undefined)
        {
            $("#txtEffetiveDateFrom").addClass("redborder");
            msg += " Please Select EffectiveFrom Date.<br/> ";
        } else
        {
            $("#txtEffetiveDateFrom").removeClass("redborder");
        }
        if ($("#txtEffectiveToDate").val() == "" || $("#txtEffectiveToDate").val() == undefined)
        {
            $("#txtEffectiveToDate").addClass("redborder");
            msg += " Please Select EffectiveTo Date.<br/> ";
        } else
        {
            $("#txtEffectiveToDate").removeClass("redborder");
        }
        //if (parseInt(TeriffID) <= 0 || TeriffID == "")
        //{
        //    $("#txtTariffHead").addClass("redborder");
        //    msg += " Please Select Tariff Head.<br/> ";
        //}
        //else
        //{
        //    $("#txtTariffHead").removeClass("redborder");
        //}

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