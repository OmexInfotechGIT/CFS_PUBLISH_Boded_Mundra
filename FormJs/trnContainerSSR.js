$(document).ready(function () {
    var CycleID = $("input[name='CycleID']:checked").val();
    var SpType = "";
    SpType = $("#SPType").val();
    let Cycle = $("#Cycle").val();
    Autocompletebox("ContNo", "ContNoID", "trnContainerSSR", "GETContNo?trnDocumentLotDetailsID=" + $("#InBOENoID").val() + "&trnContainerSSRID=" + trnContainerSSRID + "&SpType=" + SpType, "Callbackautocomplete");
    Autocompletebox("SSRBillableHead", "SSRBillableHeadID", "trnContainerSSR", "GETBiilableHead", "FetchRate");
    Autocompletebox("SSRNo", "SSRNoRefID", "trnContainerSSR", "GETSSRNoGroup");
    
    if (IsSearch == "true") {
        $("#trnDocumentNo").prop("disabled", true);
    }
    if (doaction == "edit") {
        $("#txttrnDocumentNo").prop("disabled", true);
        
    }
    if (doaction == "add") {
        $("#dvSSRWONo").css("display", "none");
        $("#dvSSRWOdate").css("display", "none");
    }

    if (Cycle == "Bonded") {

        $("#LInBOENo").text("In-BOE No");
    }
    else if (Cycle == "Export") {

        $("#LInBOENo").text("SB-Invoice No");
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
function SearchwithtrnDocumentNo() {
    
    var trnDocumentID = $("#trnDocumentID").val();
    var SSRNo = $("#SSRNo").val();
    var BatchNoID = $("#BatchNoID").val();
    var BatchNo = $("#BatchNo").val();
    var Remarks = $("#Remarks").val();
    let Cycle = $("#Cycle").val();
    let InBOENo = $("#InBOENo").val();
    let InBOENoID = $("#InBOENoID").val();
    var NOCDate = $("#DOCDate").val();
    var Errormsg = "";
    debugger
    if ((trnDocumentID != null && trnDocumentID != undefined && trnDocumentID != "" && trnDocumentID != "0") &&
        (SSRNo != null && SSRNo != undefined && SSRNo != "" && SSRNo != "0") &&
        (InBOENoID != null && InBOENoID != undefined && InBOENoID != "" && InBOENoID != "0") &&
        (Cycle != "0") && (NOCDate != "" && NOCDate != undefined && NOCDate != null)) {

        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&trnDocumentID=" + trnDocumentID + "&trnDocumentNo=" + $("#trnDocumentNo").val() + "&SSRNo=" + SSRNo + "&Remarks=" + Remarks + "&InBOENo=" + InBOENo + "&InBOENoID=" + InBOENoID + "&Cycle=" + Cycle + "&NOCDate=" + NOCDate;
    }
    else {
        if (SSRNo == null || SSRNo == undefined || SSRNo == "" || SSRNo == "0") {
            Errormsg += "Please Enter SSR No. <br/>"
            $("#SSRNo").addClass('redborder');
        }
        else {
            $("#SSRNo").removeClass('redborder');
        }        
        if(Cycle == "0") {
            Errormsg += "Please Select Cycle. <br/>"
            $("#Cycle").addClass('redborder');
        }
        else {
            $("#Cycle").removeClass('redborder');
        }
        if (InBOENoID == null || InBOENoID == undefined || InBOENoID == "" || InBOENoID == "0") {
            Errormsg += "Please Enter In-BOENo. <br/>"
            $("#InBOENoID").addClass('redborder');
        }
        else {
            $("#LoadedContNo").removeClass('redborder');
        } 
        if (trnDocumentID == null || trnDocumentID == undefined || trnDocumentID == "" || trnDocumentID == "0") {
            Errormsg += "Please select NOC No. <br/>"
            $("#trnDocumentNo").addClass('redborder');
        }
        else {
            $("#trnDocumentNo").removeClass('redborder');
        }        
    }
    if (Errormsg != "") {
        TosterAlert("error", Errormsg, "Required!");
    }
}
function ClearSSRDetails() {
    $("#ContNo").val('');
    $("#txtSize").text('');
    $("#txtType").text('');
    $("#txtCargoType").text('');
    $("#SSRBillableHead").val('');
    $("#Quantity").val('0');
    $("#Rate").val('0');
    $("#Rate").attr("readonly", false);
    $("#AdditionalRate").val('0');
    $("#TotalAmount").val('0');
    $("#Status").val('');
    $("#Remark").val('');
    $("#Discount").val("0");
    $("#GSTPer").val("0");
    $("#Amount").val("0");
    $("#GrossAmount").val("0");
    $("#GSTamt").val("0");
    $("#trnContainerSSRDetailsID").val("0");
}

function ClearContainerSSR() {
    $("#SSRNo").val('');    
    if (IsSearch != "true") {
        $("#trnDocumentID").val('');
        $("#trnDocumentNo").val('');
        $("#DOCDate").val('');
        $("#InBOEDate").val('');
        $("#InBOENoID").val('');
        $("#InBOENo").val('');
        $("#Cycle").val("0");
    }   
    $("#Remarks").val('');
    $("#TransactionType").val('');
}
function DocumentValidation(tab) {

    changestepValue(tab);
    var isvalid = true;
    var MErrormsg = "";
    
    $.ajax({
        url: GetRootPath + "trnContainerSSR/validateModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
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
                    MErrormsg += Errormsg;
                    isvalid = false;
                }                
                $("#IsFinished").val(false);
            }
        }

    });
    if (!isvalid) {
        TosterAlert("error", MErrormsg, "Required!");
    }

    return isvalid;
}

function EditSSRDetails(ID) {
    $("#trnContainerSSRDetailsID").val($("#trnContainerSSRDetailsID_" + ID).text());
    $("#ContNo").val($("#ContNo_" + ID).text());
    $("#ContNoID").val($("#ContNoID_" + ID).text());
    $("#txtSize").text($("#Size_" + ID).text());
    $("#txtType").text($("#Type_" + ID).text());
    $("#hdnSize").val($("#Size_" + ID).text());
    $("#hdnType").val($("#Type_" + ID).text());
    $("#hdnCargoType").val($("#CargoType_" + ID).text());
    $("#txtCargoType").text($("#CargoType_" + ID).text());
    $("#SSRBillableHead").val($("#SSRBillableHead_" + ID).text());
    $("#SSRBillableHeadID").val($("#SSRBillableHeadID_" + ID).text());
    $("#Quantity").val($("#Quantity_" + ID).text());
    $("#hdnQuantity").val($("#Quantity_" + ID).text());
    $("#Rate").val($("#Rate_" + ID).text());
    $("#Rate").attr("readonly", true);
    $("#AdditionalRate").val($("#AdditionalRate_" + ID).text());
    $("#Amount").val($("#Amount_" + ID).text());
    $("#GrossAmount").val($("#GrossAmount_" + ID).text());
    $("#TotalAmount").val($("#TotalAmount_" + ID).text());
    $("#hdnTotalAmount").val($("#TotalAmount_" + ID).text());
    $("#Status").val($("#Status_" + ID).text());
    $("#Remark").val($("#Remark_" + ID).text());
    $("#Discount").val($("#Discount_" + ID).text());
    //$("#hdnDiscount").val($("#Discount_" + ID).text());
    $("#GSTPer").val($("#GSTper_" + ID).text());
    $("#GSTamt").val($("#GSTamt_" + ID).text());

}
function Callbackautocomplete() {
    //FillDOCDate();
    FillSizeType();
    //Autocompletebox("BatchNo", "BatchNoID", "trnContainerSSR", "GETBatchNo?trnDocumentID=" + $("#trnDocumentID").val());
}
function FillDOCNoAndDate() {
    debugger;
    //   setTimeout(function () {
    var ID = $("#InBOENoID").val();
    let Cycle = $("#Cycle").val();
    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnContainerSSR/GetDOCNoAndDate/" + ID + "?Cycle=" + Cycle,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    data = data.split("|");
                    $("#DOCDate").val(data[0]);
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
    //   }, 100);
}

function CheckCycleSelected() {

    var Cycle = $("#Cycle").val();

    if (Cycle == "Bonded") {

        $("#LInBOENo").text("In-BOE No");
        $("#InBOENo").val("");
        $("#InBOENoID").val("");

        Autocompletebox("InBOENo", "InBOENoID", "trnContainerSSR", "GetBOENo/?Cycle=" + Cycle, "FillDOCNoAndDate");
    }
    else if (Cycle == "Export") {

        $("#LInBOENo").text("SB-Invoice No");
        $("#InBOENo").val("");
        $("#InBOENoID").val("");
        Autocompletebox("InBOENo", "InBOENoID", "trnContainerSSR", "GetBOENo/?Cycle=" + Cycle, "FillDOCNoAndDate");

    } else {
        $("#InBOENo").val("");
        $("#InBOENoID").val("");
        Autocompletebox("InBOENo", "InBOENoID", "trnContainerSSR", "GetBOENo/?Cycle=" + Cycle, "FillDOCNoAndDate");
    }
}

function FillSizeType() {
    //    setTimeout(function () {
    var ID = $("#ContNoID").val();    
    var SPType = "";
    if ($("#SPType").val() != "" && $("#SPType").val() != null && $("#SPType").val() != undefined) {
        SPType = $("#SPType").val();
    }


    if (ID != null && ID != undefined && ID != "" && ID != "0") {
        $.ajax({
            url: GetRootPath + "trnContainerSSR/GetSizeType/" + ID + "?SPType=" + SPType,
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#txtSize").text(data.split("|")[0]);
                    $("#txtType").text(data.split("|")[1]);
                    $("#txtCargoType").text(data.split("|")[2]);
                    $("#hdnSize").val(data.split("|")[0]);
                    $("#hdnType").val(data.split("|")[1]);
                    $("#hdnCargoType").val(data.split("|")[2]);
                }
                else {
                    $("#txtSize").text("");
                    $("#txtType").text("");
                    $("#txtCargoType").text("");
                    $("#hdnSize").val("");
                    $("#hdnType").val("");
                    $("#hdnCargoType").val("");
                }
            }
        })
    }
    else {
        $("#txtSize").text("");
        $("#txtType").text("");
        $("#txtCargoType").text("");
        $("#hdnSize").val("");
        $("#hdnType").val("");
        $("#hdnCargoType").val("");
    }
    //   }, 100);
}
function calculateAmount() {
    var Quantity = "", Rate = "", AdditionalRate = "";
    $('#TotalAmount').val('')
    $('#hdnTotalAmount').val('')

    Quantity = $('#Quantity').val();
    Rate = $('#Rate').val();
    var Discount = $("#hdnDiscount").val();
    var GSTPer = $("#GSTPer").val();

    if (Quantity == '' || Quantity == '0') {
        $("#hdnQuantity").val('0')
    }

    //if (Discount == null || Discount == "" || Discount == undefined) {
    //    Discount = (parseFloat($("#Discount").val()) / parseFloat($("#hdnQuantity").val()));
    //}
    AdditionalRate = $('#AdditionalRate').val();

    //alert("width : " + width + "\n height : " + height + "\n length : " + length);
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

    //var GSTAmt = (((((parseFloat(Quantity) * parseFloat(Rate)) + (parseFloat(AdditionalRate))) - (Discount * Quantity)) * GSTPer) / 100);
    //Amount = ((((parseFloat(Quantity) * parseFloat(Rate)) + (parseFloat(AdditionalRate))) - (Discount * Quantity)) + GSTAmt).toFixed(2);

    var Amount = ((parseFloat(Quantity) * parseFloat(Rate)) + (parseFloat(AdditionalRate))).toFixed(2);
    var GrossAmount = ((((parseFloat(Quantity) * parseFloat(Rate)) + (parseFloat(AdditionalRate))) - (Discount * Quantity))).toFixed(2);
    var GSTAmt = (((((parseFloat(Quantity) * parseFloat(Rate)) + (parseFloat(AdditionalRate))) - (Discount * Quantity)) * GSTPer) / 100);
    var TotalAmount = ((((parseFloat(Quantity) * parseFloat(Rate)) + (parseFloat(AdditionalRate))) - (Discount * Quantity)) + GSTAmt).toFixed(2);



    $("#Amount").val(Amount);
    $("#GSTamt").val(GSTAmt);
    $("#GrossAmount").val(GrossAmount);
    $('#TotalAmount').val(TotalAmount);
    $('#hdnTotalAmount').val(TotalAmount);
}

function FetchRate() {

    var SSRBillableHeadID = $("#SSRBillableHeadID").val();
    var trnDocumentID = $("#trnDocumentID").val();
    var ContNoID = $("#ContNoID").val();
    var BatchNoID = $("#BatchNoID").val();
    var CycleID = $("#CycleID").val();
    var SPType = $("#SPType").val();

    if (SSRBillableHeadID > 0) {

        $.ajax({
            url: GetRootPath + "trnContainerSSR/GetRate/" + SSRBillableHeadID + "?trnDocumentID=" + trnDocumentID + "&ContNoID=" + ContNoID + "&SPType=" + SPType,
            type: "GET",
            dataType: "text",
            success: function (data) {
                $("#Rate").val(data.split('|')[0]);
                $("#Discount").val(data.split('|')[1]);
                $("#hdnDiscount").val(data.split('|')[1]);
                $("#GSTPer").val(data.split('|')[2]);
                calculateAmount();
            }
        })

    }
}
function DeleteRemarks(TableName, ID) {
    if (ID != "" && ID != null && ID != undefined) {
        $("#DeleteRemarks").val('');
        $("#trnContainerSSRID").val(ID);
    }
}
function DeleteSubRemarks(TableName, ID) {
    if (ID != "" && ID != null && ID != undefined) {
        $("#DeleteRemarks").val('');
        $("#trnContainerSSRDetailsID").val(ID);
    }
}
function DeleteSubContainerSSR() {
    debugger
    var DeleteRemarks = $("#DeleteRemarks").val();
    var isvalid = true;
    $.ajax({
        url: GetRootPath + "trnContainerSSR/validateDeleteModel/?DeleteRemarks=" + DeleteRemarks,
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
                var ID = $("#trnContainerSSRDetailsID").val();
                $.ajax({
                    url: GetRootPath + "trnContainerSSR/deleteSub/" + ID + "?DeleteRemarks=" + DeleteRemarks + "",
                    type: "GET",
                    dataType: "text",
                    async: false,
                    success: function (data) {
                        $('#DeleteContainerSSR').modal('hide');
                        location.reload();
                    }
                });
            }
        }
    });
}
function DeleteContainerSSR() {
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
                var ID = $("#trnContainerSSRID").val();
                $.ajax({
                    url: GetRootPath + "trnContainerSSR/delete/" + ID + "?DeleteRemarks=" + DeleteRemarks + "",
                    type: "GET",
                    dataType: "text",
                    async: false,
                    success: function (data) {
                        $('#DeleteContainerSSR').modal('hide');
                        location.reload();
                    }
                });
            }
        }
    });
}