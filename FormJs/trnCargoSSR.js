$(document).ready(function () {

    Autocompletebox("ManualSSRNo", "RefSSRNoID", "trnCargoSSR", "GETSSRNoGroup");
   
    Autocompletebox("txtSSRBillableHead", "SSRBillableHeadID", "trnCargoSSR", "GetBillableHead/?CycleID=" + $("input[name='CycleID']:checked").val(), "FetchRate");

    if (doaction == "edit") {
        $("#trnDocumentNo").prop("disabled", true);        
    }
    if (doaction == "add") {
        $("#dvSSRWONo").css("display", "none");
        $("#dvSSRWOdate").css("display", "none");
    }

    var Cycle = $("#Cycle").val();

    if (Cycle == "Bonded") {

        $("#LInBOENo").text("In-BOE No");  
    }
    else if (Cycle == "Export") {

        $("#LInBOENo").text("SB-Invoice No");
    } 

});

function Multiply() {
    debugger;
    $('#TotalAmount').val('')
    $('#hdnTotalAmount').val('')
    var Quantity = $("#txtQuantity").val();
    var Rate = $("#txtRate").val();
    var Discount = $("#hdnDiscount").val();
    var GSTPer = $("#GSTPer").val();
    if (Discount == null || Discount == "" || Discount == undefined) {
        Discount = ($("#Discount").val() / $("#hdnQuantity").val());
    }
    var AdditionalRate = $("#txtAdditionalRate").val(); 

    if (Quantity == "") {
        Quantity = 0;
    }
    if (Quantity == null || Quantity == "" || Quantity == undefined)
        Quantity = 0;
    if (Rate == null || Rate == "" || Rate == undefined)
        Rate = 0;
    if (AdditionalRate == null || AdditionalRate == "" || AdditionalRate == undefined)
        AdditionalRate = 0;

    if (Quantity > 0) {
        $("#Discount").val(Discount * Quantity);
        $("#hdnDiscount").val(Discount);
    }
    //var GSTAmt = (((((parseFloat(Quantity) * parseFloat(Rate)) + (  parseFloat(AdditionalRate))) - (Discount * Quantity)) * GSTPer) / 100);
    //var TotalAmount = "";


    //TotalAmount = ((((parseFloat(Quantity) * parseFloat(Rate)) + (  parseFloat(AdditionalRate))) - (Discount * Quantity)) + GSTAmt).toFixed(2);
    var Amount = ((parseFloat(Quantity) * parseFloat(Rate)) + (parseFloat(AdditionalRate))).toFixed(2);
    var GrossAmount = ((((parseFloat(Quantity) * parseFloat(Rate)) + (parseFloat(AdditionalRate))) - (Discount * Quantity))).toFixed(2);
    var GSTAmt = (((((parseFloat(Quantity) * parseFloat(Rate)) + (parseFloat(AdditionalRate))) - (Discount * Quantity)) * GSTPer) / 100);
    var TotalAmount = ((((parseFloat(Quantity) * parseFloat(Rate)) + (parseFloat(AdditionalRate))) - (Discount * Quantity)) + GSTAmt).toFixed(2);



    $("#Amount").val(Amount);
    $("#GSTamt").val(GSTAmt);
    $("#GrossAmount").val(GrossAmount);    
    $("#txtTotalAmount").val(TotalAmount);
    $('#hdnTotalAmount').val(TotalAmount);
}

function SearchwithCargoSSR() {
    var Errormsg = "";
   
    var trnDocumentID = $("#trnDocumentID").val();
    var trnDocumentNo = $("#trnDocumentNo").val();
    var DOCDate = $("#DOCDate").val();    
    var ManualSSRNo = $("#ManualSSRNo").val();
    let InBOENo = $("#InBOENo").val();
    let InBOENoID = $("#InBOENoID").val();
    let InBOEDate = $("#InBOEDate").val();
    let Cycle = $("#Cycle").val();

    if (trnDocumentID != null && trnDocumentID != 0 && trnDocumentID != "" && trnDocumentID != undefined &&
        trnDocumentNo != null && trnDocumentNo != 0 && trnDocumentNo != "" && trnDocumentNo != undefined &&       
        ManualSSRNo != null && ManualSSRNo != 0 && ManualSSRNo != "" && ManualSSRNo != undefined && 
        InBOENoID != null && InBOENoID != 0 && InBOENoID != "" && InBOENoID != undefined &&
        Cycle != "0"   ) {

        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&trnDocumentID=" + trnDocumentID + "&trnDocumentNo=" + trnDocumentNo + "&ManualSSRNo=" + ManualSSRNo + "&DOCDate=" + DOCDate + "&InBOENo=" + InBOENo + "&InBOENoID=" + InBOENoID + "&InBOEDate=" + InBOEDate + "&Cycle=" + Cycle + "&SSRWONo=" + $("#txtSSRWONo").val() + "&SSRWOdate=" + $("#txtSSRWOdate").val() + "&Remarks=" + $("#Remarks").val(); 
        
    }
    else {

        if (ManualSSRNo == null || ManualSSRNo == 0 || ManualSSRNo == "" || ManualSSRNo == undefined) {
            Errormsg += "Please Enter Manual SSR No. <br/>"
            $("#ManualSSRNo").addClass('redborder');
        }
        else
        {
            $("#ManualSSRNo").removeClass('redborder');
        }
        if (Cycle == "0") {
            Errormsg += "Please Select Cycle. <br/>"
            $("#Cycle").addClass('redborder');
        }
        else {
            $("#Cycle").removeClass('redborder');
        }
        if (InBOENoID == null || InBOENoID == 0 || InBOENoID == "" || InBOENoID == undefined) {
            Errormsg += "Please Enter In-BOENo. <br/>"
            $("#InBOENo").addClass('redborder');
        }
        else {
            $("#InBOENo").removeClass('redborder');
        }
        if (trnDocumentID == null || trnDocumentID == undefined || trnDocumentID == "" || trnDocumentID == "0") {
            Errormsg += "Please select NOC No. <br/>"
            $("#trnDocumentNo").addClass('redborder');
        }
        else
        {
            $("#trnDocumentNo").removeClass('redborder');
        }        
        
        
    }
    if (Errormsg != "") {
        TosterAlert("error", Errormsg, "Required!");
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

function DocumentValidation(tab) {

    changestepValue(tab);
    var isvalid = true;
    $("input[name='CycleID']").iCheck('enable');
    $.ajax({
        url: GetRootPath + "trnCargoSSR/validateModel",
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
                    TosterAlert("error", Errormsg, "Required!");
                }
                $("input[name='CycleID']").iCheck('disable');
                $("#IsFinished").val(false);
            }
        }
    });

    return isvalid;
}


function EditSSRDetails(ID) {

    $("#txtSSRBillableHead").val($("#SSRBillableHead_" + ID).text());
    $("#txtQuantity").val($("#Quantity_" + ID).text());
    $("#hdnQuantity").val($("#Quantity_" + ID).text());
    $("#txtRate").val($("#Rate_" + ID).text());
    $("#txtAdditionalRate").val($("#AdditionalRate_" + ID).text());
    $("#Discount").val($("#Discount_" + ID).text());
    $("#GSTPer").val($("#GSTper_" + ID).text());
    $("#txtTotalAmount").val($("#TotalAmount_" + ID).text());
    $("#hdnTotalAmount").val($("#TotalAmount_" + ID).text());
    $("#txtCancelRemarks").val($("#CancelRemarks_" + ID).text());
    $("#SSRBillableHeadID").val($("#SSRBillableHeadID_" + ID).text());
    $("#Amount").val($("#Amount_" + ID).text());
    $("#GrossAmount").val($("#GrossAmount_" + ID).text());
    $("#GSTamt").val($("#GSTamt_" + ID).text());
    $("#trnCargoSSRDetailsID").val(ID);
}

function ClearSSRDetails() {

    $("#txtSSRBillableHead").val('');
    $("#txtQuantity").val('0');
    $("#txtRate").val('0');
    $("#txtAdditionalRate").val('0');
    $("#Discount").val('0');
    $("#GSTPer").val('0');
    $("#txtTotalAmount").val('0');
    $("#txtCancelRemarks").val('');
}

function FillDOCDate() {

    FillBOEDate();
    var ID = $("#InBOENoID").val();
    let Cycle = $("#Cycle").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnCargoSSR/GetDOCNoAndDate/" + ID + "?Cycle=" + Cycle,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    data = data.split('|');
                    $("#DOCDate").val(data[0].split(" ")[0]);
                    $("#trnDocumentNo").val(data[1]);
                    $("#trnDocumentID").val(data[2]);
                }
                else {
                    $("#DOCDate").val("");
                    $("#trnDocumentNo").val("");
                    $("#trnDocumentID").val("");
                }
            }
        })
    }
    else {
        $("#DOCDate").val("");
        $("#trnDocumentNo").val("");
        $("#trnDocumentID").val("");
    } 
}

function FillBOEDate() {

    if ($("#Cycle").val() == "Bonded") {

        var ID = $("#InBOENoID").val();
        if (ID != null && ID != undefined && ID != "" && ID != "0") {
            $.ajax({
                url: GetRootPath + "trnCargoSSR/GetBOEDate/" + ID,
                type: "GET",
                dataType: "text",
                success: function (data) {
                    if (data != "" && data != null) {
                        $("#InBOEDate").val(data);
                    }
                    else {
                        $("#InBOEDate").val("");
                    }
                }
            })
        }
        else {
            $("#InBOEDate").val("");
        }
    }
}

function ClearCargoSSR() {
    $("#ManualSSRNo").val('');
    $("input[name=CycleName]").iCheck('uncheck');
    if (IsSearch != "true") {
        $("#trnDocumentID").val('');
        $("#trnDocumentNo").val('');
        $("#DOCDate").val('');
        $("#InBOEDate").val('');
        $("#InBOENoID").val('');
        $("#InBOENo").val('');
        $("#Cycle").val("0");
    }
    $("#txtBatchNo").val('');
    $("#BatchNoID").val('');
}

function FetchRate() {

    var SSRBillableHeadID = $("#SSRBillableHeadID").val();
    var trnDocumentID = $("#trnDocumentID").val();    
    var BatchNoID = $("#BatchNoID").val();
    if (SSRBillableHeadID > 0) {

        $.ajax({
            url: GetRootPath + "trnCargoSSR/GetRate/" + SSRBillableHeadID + "?trnDocumentID=" + trnDocumentID,
            type: "GET",
            dataType: "text",
            success: function (data) {
                $("#txtRate").val(data.split('|')[0]);
                $("#Discount").val(data.split('|')[1]);
                $("#hdnDiscount").val(data.split('|')[1]);
                $("#GSTPer").val(data.split('|')[2]);
                Multiply();
            }
        })

    }
}

function CheckCycleSelected(){

    var Cycle = $("#Cycle").val();

    if (Cycle == "Bonded") {

        $("#LInBOENo").text("In-BOE No");
        $("#InBOENo").val("");
        $("#InBOENoID").val("");
        
        Autocompletebox("InBOENo", "InBOENoID", "trnCargoSSR", "GetBOENo/?Cycle=" + Cycle, "FillDOCDate");
    }
    else if (Cycle == "Export") {

        $("#LInBOENo").text("SB-Invoice No");
        $("#InBOENo").val("");
        $("#InBOENoID").val("");

        Autocompletebox("InBOENo", "InBOENoID", "trnCargoSSR", "GetBOENo/?Cycle=" + Cycle, "FillDOCDate");

    } else {
        $("#InBOENo").val("");
        $("#InBOENoID").val("");
        Autocompletebox("InBOENo", "InBOENoID", "trnCargoSSR", "GetBOENo/?Cycle=" + Cycle, "FillDOCDate");
    }
}

function DeleteRemarks(TableName, ID) {
    if (ID != "" && ID != null && ID != undefined) {
        $("#DeleteRemarks").val('');
        $("#trnCargoSSRID").val(ID);
    }
}
function DeleteSubRemarks(TableName, ID) {
    if (ID != "" && ID != null && ID != undefined) {
        $("#DeleteRemarks").val('');
        $("#trnCargoSSRDetailsID").val(ID);
    }
}
function DeleteCargoSSR() {
    debugger
    var DeleteRemarks = $("#DeleteRemarks").val();
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnCargoSSR/validateDeleteModel/?DeleteRemarks=" + DeleteRemarks,
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
                debugger
                var ID = $("#trnCargoSSRID").val();
                $.ajax({
                    url: GetRootPath + "trnCargoSSR/delete/" + ID + "?DeleteRemarks=" + DeleteRemarks + "",
                    type: "GET",
                    dataType: "text",
                    async: false,
                    success: function (data) {
                        $('#DeleteCargoSSR').modal('hide');
                        location.reload();
                    }
                });
            }
        }
    });
}
function DeleteSubCargoSSR() {
    debugger
    var DeleteRemarks = $("#DeleteRemarks").val();
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnCargoSSR/validateDeleteModel/?DeleteRemarks=" + DeleteRemarks,
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
                debugger
                var ID = $("#trnCargoSSRDetailsID").val();
                $.ajax({
                    url: GetRootPath + "trnCargoSSR/deleteSub/" + ID + "?DeleteRemarks=" + DeleteRemarks + "",
                    type: "GET",
                    dataType: "text",
                    async: false,
                    success: function (data) {
                        $('#DeleteCargoSSR').modal('hide');
                        location.reload();
                    }
                });
            }
        }
    });
}
