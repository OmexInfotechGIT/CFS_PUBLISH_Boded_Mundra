$(document).ready(function () {

    Autocompletebox("SBInvoiceNo", "trnExportStufingWOSBDetailsID", "ExportInvoice", "GetSBInvoiceNo", "GetSBInvoiceDate");    
    Autocompletebox("BillToParty", "BillToPartyID", "ExportInvoice", "GetBillToParty/?ExpoterID=" + $("#ExpoterID").val() + "&ConsolerID=" + $("#ConsolerID").val() + "&CHAID=" + $("#CHAID").val() + "&ForwarderID=" + $("#ForwarderID").val(), "autocompleteaddress");

});

function SearchwithSBOrInvoiceNo() {
    var msg = "";
    var trnExportStufingWOSBDetailsID = $("#trnExportStufingWOSBDetailsID").val();
    var SBInvoiceDate = $("#SBInvoiceDate").val();
    var SBInvoiceNo = $("#SBInvoiceNo").val();
    var isvalid = false;

    if (trnExportStufingWOSBDetailsID != null && trnExportStufingWOSBDetailsID != undefined && trnExportStufingWOSBDetailsID != "" && trnExportStufingWOSBDetailsID != "0") {

        isvalid = true;
        $("#SBInvoiceNo").removeClass("redborder");
    }
    else {
        isvalid = false;
        $("#SBInvoiceNo").addClass("redborder");
        msg += "Please select SB/Inv No.<br/>";
    }
    if (SBInvoiceDate != null && SBInvoiceDate != undefined && SBInvoiceDate != "") {
        isvalid = true;
        $("#SBInvoiceDate").removeClass("redborder");
    }
    else {
        isvalid = false;
        $("#SBInvoiceDate").addClass("redborder");
        msg += "Please select SB/Inv Date.<br/>";
    }
    if (isvalid) {
        location.href = "?doaction=add&pg=1&IsSearch=" + true + "&trnExportStufingWOSBDetailsID=" + trnExportStufingWOSBDetailsID + "&SBInvoiceNo=" + SBInvoiceNo + "&SBInvoiceDate=" + SBInvoiceDate;
    }
    else {
        TosterAlert("error", msg, "Required!");
    }
}

function GetSBInvoiceDate() {    
    if ($("#trnExportStufingWOSBDetailsID").val() != "" && $("#trnExportStufingWOSBDetailsID").val() != undefined && $("#trnExportStufingWOSBDetailsID").val() != null) {        
        $.ajax({
            url: GetRootPath + "ExportInvoice/GetSBInvoiceDate/" + $("#trnExportStufingWOSBDetailsID").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#SBInvoiceDate").val(data);
                }
                else {
                    $("#SBInvoiceDate").val("");
                }
            }
        })
    }

}

function autocompleteaddress() {

    var BillToPartyID = $("#BillToPartyID").val();
    if (BillToPartyID != null && BillToPartyID != undefined && BillToPartyID != "" && BillToPartyID != "0") {
        Autocompletebox("BillToAddress", "BillToAddressID", "ExportInvoice", "GetBillToAddress/" + BillToPartyID, "GetAddressDetails");
    }
    else {
        Autocompletebox("BillToAddress", "BillToAddressID", "ExportInvoice", "GetBillToAddress/" + BillToPartyID, "GetAddressDetails");
    }
    

}

function GetAddressDetails() {
    var BillToAddressID = $("#BillToAddressID").val();
    if (BillToAddressID != "" && BillToAddressID != null && BillToAddressID != undefined && BillToAddressID != "0") {
        $.ajax({
            url: GetRootPath + "ExportInvoice/GetBillToCustomerGSTNo/" + $("#BillToAddressID").val(),
            type: "GET",
            dataType: "text",
            success: function (data) {
                if (data != "" && data != null) {
                    $("#GSTINNo").val(data.split('|')[0]);
                    $("#StateID").val(data.split('|')[1]);
                    $("#StateName").val(data.split('|')[2]);
                    $("#SEZStatus").val(data.split('|')[3]);
                    $("#StateCode").val(data.split('|')[4]);
                }
                else {
                    $("#GSTINNo").val('');
                    $("#StateCode").val('');
                    $("#StateName").val('');
                    $("#SEZStatus").val('');
                }
            }
        });
    } else {
        $("#GSTINNo").val('');
        $("#StateID").val('');
        $("#StateName").val('');
        $("#SEZStatus").val('');
        $("#StateCode").val('');
    }
}
$("#txtSearch").keyup(function (event) {
    if (event.keyCode === 13) {
        SearchData();
    }
});
function SearchData() {
    location.href = "?pg=1&search=" + encodeURIComponent($("#txtSearch").val());
}
function Validation() {

    var isvalid = true;
    var MErrormsg = "";
    $.ajax({
        url: GetRootPath + "ExportInvoice/validateModel",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        async: false,
        success: function (data) {

            $(".redborder").removeClass("redborder");
            if (data != "") {
                debugger
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
function SetfuncationModelValue(mdlname) {
    ModelName = mdlname;
}
function openOtherTariff() {
    FillExportInvoiceOtherTariffDetailsGrid();
    SetfuncationModelValue('OtherTariffDetails')
    $("#AddOtherTariffHead").modal("show");

    setTimeout(function () {
        Autocompletebox("OtherTariffDetailsTariffHead", "OtherTariffDetailsTariffHeadID", "ExportInvoice", "GetTariffHead/" + $("#ExportInvoiceID").val(), "GetGSTPerForOtherTariffHead");
        $(".ui-autocomplete").attr("style", "z-index: 10000;position: relative;");
    }, 500);
}
function GetGSTPerForOtherTariffHead() {
    var OtherTariffDetailsTariffHeadID = 0;
    OtherTariffDetailsTariffHeadID = $("#OtherTariffDetailsTariffHeadID").val();
    if (OtherTariffDetailsTariffHeadID != null && OtherTariffDetailsTariffHeadID != 0 && OtherTariffDetailsTariffHeadID != undefined && OtherTariffDetailsTariffHeadID != "") {
        $.ajax({
            url: GetRootPath + "ExportInvoice/GetGSTPerForOtherTariffHead/" + OtherTariffDetailsTariffHeadID + "?StateID=" + $("#StateID").val(),
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                if (data != "") {
                    debugger;
                    $('#OtherTariffDetailsGSTPer').val(data.trim());
                }
            }
        });
    }
}
function CalculateOtherTariffDetailsAMT() {
    var QTY = $('#OtherTariffDetailsQTY').val();
    var Rate = $('#OtherTariffDetailsRate').val();
    var Discount = $('#OtherTariffDetailsDiscount').val();
    var GSTPer = $('#OtherTariffDetailsGSTPer').val();
    debugger
    if (Rate == undefined || Rate == null || Rate == "" || Rate == 0) {
        Rate = 0;
        $('#OtherTariffDetailsTotal').val(0);
        Discount = 0;
        $('#OtherTariffDetailsDiscount').val(0);
    }
    if (GSTPer == undefined || GSTPer == null || GSTPer == "" || GSTPer == 0 || GSTPer > 100) {
        GSTPer = 0;
        $('#OtherTariffDetailsGSTPer').val(0);
        $('#OtherTariffDetailsGSTAmount').val(0);
    }
    if (Discount == undefined || Discount == null || Discount == "" || Discount == 0) {
        Discount = 0;
        $('#OtherTariffDetailsDiscount').val(0);
        $('#OtherTariffDetailsDiscountAmt').val(0);
    }

    if ((parseFloat(Rate) * parseFloat(QTY)) <= (parseFloat(Discount) * parseFloat(QTY))) {
        Discount = 0;
        $('#OtherTariffDetailsDiscount').val(0);
        $('#OtherTariffDetailsDiscountAmt').val(0);
    }
    var DiscountAmount = parseFloat(Discount) * parseFloat(QTY);
    var TaxableAmount = ((parseFloat(Rate) * parseFloat(QTY)) - DiscountAmount);
    var GSTAMT = ((((parseFloat(Rate) * parseFloat(QTY)) - (parseFloat(Discount) * parseFloat(QTY))) * GSTPer) / 100);

    $('#OtherTariffDetailsGSTAmount').val(GSTAMT.toFixed(2));
    $('#OtherTariffDetailsDiscountamt').val(DiscountAmount.toFixed(2));
    $('#OtherTariffDetailsTaxableAmount').val(TaxableAmount.toFixed(2));
    $("#OtherTariffDetailsTotal").val((parseFloat(Rate) * parseFloat(QTY)).toFixed(2));
    $("#OtherTariffDetailsNetAmount").val((TaxableAmount + GSTAMT).toFixed(2));
}
function AddExportInvoiceOtherTariffDetails() {
    debugger;
    event.preventDefault();
    $(".redborder").removeClass("redborder");
    $.ajax({
        url: GetRootPath + "ExportInvoice/validateModelOtherTariffDetails",
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
                    url: GetRootPath + "ExportInvoice/AddExportInvoiceOtherTariffDetails",
                    type: "Post",
                    data: $("form").serialize(),
                    dataType: "text",
                    success: function (data) {
                        ClearExportInvoiceOtherTariffDetails();
                        var msgType = data.split("|")[0];
                        var msg = data.split("|")[1];
                        var msgTitle = data.split("|")[2];
                        FillExportInvoiceOtherTariffDetailsGrid();
                        TosterAlert(msgType, msg, msgTitle);
                    }
                });
            }
        }
    });
}
function ClearExportInvoiceOtherTariffDetails() {
    $("#OtherTariffDetailsGSTPer").val('0');
    $("#OtherTariffDetailsGSTAmount").val('0');
    $("#OtherTariffDetailsTaxableAmount").val('0');
    $("#OtherTariffDetailsDiscountamt").val('0');
    $("#OtherTariffDetailsDiscount").val('0');
    $("#OtherTariffDetailsTariffHead").val('');
    $("#OtherTariffDetailsTariffHeadID").val('0');
    $("#OtherTariffDetailsRate").val('0');
    $("#OtherTariffDetailsTotal").val('0');
    $("#OtherTariffDetailsNetAmount").val('0');
    $("#OtherTariffDetailsQTY").val('0');
    $("#ExportInvoiceOtherTariffDetailsID").val('0');
    $("#btnOtherTariffDetails").text("Add");
}
function FillExportInvoiceOtherTariffDetailsGrid() {
    $("#OtherTariffDetailsDetails").html("");

    $.ajax({
        url: GetRootPath + "ExportInvoice/FillExportInvoiceOtherTariffDetailsGrid",
        type: "Post",
        data: $("form").serialize(),
        dataType: "text",
        success: function (data) {
            if (data != "" && data != null) {
                $("#OtherTariffDetailsDetails").html(data);
                ClearExportInvoiceOtherTariffDetails();

            }
        }
    });
}
function EditExportInvoiceOtherTariffDetails(ID) {
    $("#OtherTariffDetailsTariffHead").val($("#OtherTariffDetailsTariffHead_" + ID).text());
    $("#OtherTariffDetailsTariffHeadID").val($("#OtherTariffDetailsTariffHeadID_" + ID).text());
    $("#OtherTariffDetailsRate").val($("#OtherTariffDetailsRate_" + ID).text());
    $("#OtherTariffDetailsTotal").val($("#OtherTariffDetailsTotal_" + ID).text());
    $("#OtherTariffDetailsQTY").val($("#OtherTariffDetailsQTY_" + ID).text());
    $("#btnOtherTariffDetails").text("Save");
    $("#ExportInvoiceOtherTariffDetailsID").val(ID);
    $("#OtherTariffDetailsGSTPer").val($("#OtherTariffDetailsGSTPer_" + ID).text());
    $("#OtherTariffDetailsDiscount").val($("#OtherTariffDetailsDiscount_" + ID).text());
    $("#OtherTariffDetailsDiscountamt").val($("#OtherTariffDetailsDiscountamt_" + ID).text());
    $("#OtherTariffDetailsNetAmount").val($("#OtherTariffDetailsNetAmount_" + ID).text());
    $("#OtherTariffDetailsGSTAmount").val($("#OtherTariffDetailsGSTAmount_" + ID).text());
    $("#OtherTariffDetailsTaxableAmount").val($("#OtherTariffDetailsTaxableAmount_" + ID).text());
}
function RefreshPage() {

    location.reload()
}
function DeleteExportInvoiceOtherTariffDetails(ID) {
    $.ajax({
        url: GetRootPath + "ExportInvoice/deleteOtherTariffHeadDetails/" + ID,
        type: "Get",
        dataType: "text",
        success: function (data) {
            FillExportInvoiceOtherTariffDetailsGrid();
            var msgType = data.split("|")[0];
            var msg = data.split("|")[1];
            var msgTitle = data.split("|")[2];
            TosterAlert(msgType, msg, msgTitle);
        }
    });
}
function ApproveInvoice(IsIRN, action, InvoiceId, InvoiceNo, InvoiceType, trnExportStufingWOID) {
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
    $("#hdnIRNSpaceCertificateGWID").val(trnExportStufingWOID);
}
function validateremarksForIRN() {
    var InvoiceId = $("#InvoiceId").val();
    var InvoiceNo = $("#InvoiceNo").val();
    var InvoiceType = $("#InvoiceType").val();
    var action = $("#action").val();
    var IsIRN = $("#IsIRN").val();
    var trnSpaceCertificateGWID = $("#hdnIRNSpaceCertificateGWID").val();
    var txtRemarks = $("#txtRemarks1").val().trim();
    var IsValid = true;

    if (txtRemarks == null || txtRemarks == "" || txtRemarks == undefined) {
        $("#txtRemarks1").addClass("redborder");
        TosterAlert("error", "Please enter Remarks", "Required!");
        IsValid = false;
    }
    if (IsValid) {
        if (action == "approve" && IsIRN == "true") {
            $.when(GenerateEInvoice(InvoiceId, InvoiceNo, InvoiceType)).done(function () {
                var msg = IRNMsg.split("|")[0];
                if (msg == "SUCCESS") {
                    $.ajax({
                        url: GetRootPath + "ExportInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                        type: "GET",
                        dataType: "text",
                        async: false,
                        success: function (data) { location.href = GetRootPath + "ExportInvoice"; }
                    });

                    var btn = document.querySelector('#InvoiceApproveBtn');
                    btn.setAttribute('disabled', true);
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
                        url: GetRootPath + "ExportInvoice/delete/" + InvoiceId,
                        type: "GET",
                        dataType: "text",
                        async: false,
                        success: function (data) { location.href = GetRootPath + "ExportInvoice"; }
                    });

                    var btn = document.querySelector('#InvoiceApproveBtn');
                    btn.setAttribute('disabled', true);
                }
                else {
                    TosterAlert("error", "Error while Cancelling eInvoice : <br />" + IRNMsg.split('|')[1], "Error!");
                }
            });
        }
        else {
            $.ajax({
                url: GetRootPath + "ExportInvoice/UpdateStatus/" + InvoiceId + "?Remarks=" + txtRemarks,
                type: "GET",
                dataType: "text",
                async: false,
                success: function (data) {
                    location.href = GetRootPath + "ExportInvoice";
                }
            });

            var btn = document.querySelector('#InvoiceApproveBtn');
            btn.setAttribute('disabled', true);
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
function FinishedAllChanges() {
    var isvalid = true;
    var Errormsg = "";
    var FinalNetAmount = $("#FinalNetAmount").text();
    if (parseFloat(FinalNetAmount) > 0) {
        isvalid = true;
    }
    else {
        isvalid = false;
        Errormsg += " Please Enter Correct Net Amount.<br />";
    }
    var PaymentTypeName = $("#hdnPaymentMode").val()

    if (PaymentTypeName.toLowerCase() == "cash") {

        var PaymentModeOfReceipt = $("#PaymentModeOfReceipt").val();
        var AmountOfReceipt = $("#AmountOfReceipt").val();
        var ReceiptDetails = $("#ChequeDDNeftNoOfReceipt").val();
        var ReceiptDate = $("#ChequeDDNeftDateOfReceipt").val();
        var BankDetails = $("#BankDetailsOfReceipt").val();

        var finalAmount = parseFloat(AmountOfReceipt);

        if (PaymentModeOfReceipt == "Cash") {

            if (!($.isNumeric(AmountOfReceipt)) || AmountOfReceipt == "" || finalAmount == 0) {

                Errormsg += "Please Enter Receipt Amount <br />";
                $("#AmountOfReceipt").addClass("redborder");
                isvalid = false;
            } else {
                $("#AmountOfReceipt").removeClass("redborder");

            }

        } else {

            $("#ChequeDDNeftNoOfReceipt").removeClass("redborder");
            $("#ChequeDDNeftDateOfReceipt").removeClass("redborder");
            $("#BankDetailsOfReceipt").removeClass("redborder");
        }

        if (PaymentModeOfReceipt != "Cash") {

            if (!($.isNumeric(AmountOfReceipt)) || AmountOfReceipt == "" || finalAmount == 0) {

                Errormsg += "Please Enter Receipt Amount <br />";
                $("#AmountOfReceipt").addClass("redborder");
                isvalid = false;
            } else {
                $("#AmountOfReceipt").removeClass("redborder");
            }

            if (ReceiptDetails == "") {

                Errormsg += "Please Enter Receipt Number <br />";
                $("#ChequeDDNeftNoOfReceipt").addClass("redborder");
                isvalid = false;
            } else {
                $("#ChequeDDNeftNoOfReceipt").removeClass("redborder");
            }

            if (ReceiptDate == "") {

                Errormsg += "Please Enter Receipt Date <br />";
                $("#ChequeDDNeftDateOfReceipt").addClass("redborder");
                isvalid = false;
            } else {
                $("#ChequeDDNeftDateOfReceipt").removeClass("redborder");
            }

            if (PaymentModeOfReceipt == "DD" || PaymentModeOfReceipt == "CHEQUE") {

                if (BankDetails == "") {

                    Errormsg += "Please Enter Receipt Bank Details <br />";
                    $("#BankDetailsOfReceipt").addClass("redborder");
                    isvalid = false;
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
    if (isvalid) {

        $.ajax({
            url: GetRootPath + "ExportInvoice/FinishedAllChanges",
            type: "Post",
            data: $("form").serialize(),
            dataType: "text",
            async: false,
            success: function (data) {
                location.href = GetRootPath + "ExportInvoice";
            }
        });

    }

    if (!isvalid) {
        TosterAlert("error", Errormsg, "Required!");
    }
    return isvalid;
}